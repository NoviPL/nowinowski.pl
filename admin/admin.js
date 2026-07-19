import { firebaseConfig, FIREBASE_ENABLED } from '../firebase-config.js';

const DEFAULT_CONTENT = {"site": {"brand": "NoviPL", "tagline": "APLIKACJE Z PASJĄ", "email": "kontakt@nowinowski.pl", "cta": "POROZMAWIAJMY"}, "hero": {"eyebrow": "MOJE PROJEKTY", "title_before": "Aplikacje, które ", "title_highlight": "rozwiązują", "title_after": " realne problemy", "subtitle": "Każda aplikacja to setki godzin pracy, testów i dopracowania detali."}, "about": {"title": "Tworzę aplikacje, które mają znaczenie", "text": "Od pomysłu, przez projekt i development, aż po wdrożenie i wsparcie."}, "projects": [{"name": "Peek", "theme": "gold", "description": "Zagadki, ciekawostki i treści, które dają chwilę rozrywki i trening dla umysłu.", "features": ["5 kategorii: Dla Ciebie, Zagadki, Ciekawostki, Humor, Motywacja", "Ponad 1000 zagadek i ciekawostek", "System ocen i rekomendacji", "Tryb offline – działaj bez internetu"], "tech": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage"], "screens": ["assets/screens/peek-quiz.jpg", "assets/screens/peek-fact.jpg", "assets/screens/peek-math.jpg"]}, {"name": "FuseMap", "theme": "green", "description": "Profesjonalna dokumentacja instalacji elektrycznych.", "features": ["Instalacje, rozdzielnie, obwody, odbiorniki", "Interaktywny schemat instalacji", "Eksport profesjonalnych PDF", "Zdjęcia, notatki, podpisy i opisy"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/fusemap-portfolio-1.jpg", "assets/screens/fusemap-portfolio-2.jpg"]}, {"name": "AutoKronika", "theme": "blue", "description": "Kompletna historia Twojego samochodu w jednym miejscu.", "features": ["Historia serwisowa i tankowań", "Koszty eksploatacji i statystyki", "Dokumenty i zdjęcia", "Przypomnienia i ocena stanu pojazdu"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/autokronika-portfolio-1.jpg", "assets/screens/autokronika-portfolio-2.jpg", "assets/screens/autokronika-portfolio-3.jpg"]}, {"name": "PstrykList", "theme": "purple", "description": "Proste i wygodne listy zadań na co dzień.", "features": ["Własne kategorie i listy", "Proste dodawanie zadań", "Postęp i statystyki", "Tryb ciemny i jasny"], "tech": ["Flutter", "SQLite", "Local Storage"], "screens": ["assets/screens/pstryk-portfolio-1.jpg", "assets/screens/pstryk-portfolio-2.jpg"]}], "services": [{"title": "Aplikacje mobilne", "text": "Projektowanie i budowa aplikacji na Androida — od pierwszego ekranu po wersję release."}, {"title": "Narzędzia dla firm", "text": "Dedykowane systemy, dokumentacja, synchronizacja i rozwiązania usprawniające codzienną pracę."}, {"title": "Offline & Cloud", "text": "SQLite, Firebase, API i architektura dopasowana do realnych warunków działania produktu."}, {"title": "Rozwój produktu", "text": "Porządkowanie aplikacji, poprawa UX, nowe funkcje i przygotowanie do publikacji."}], "process": [{"title": "Rozpoznanie", "text": "Najpierw problem, użytkownik i cel."}, {"title": "Projekt", "text": "Układam funkcje, przepływy i wygląd produktu."}, {"title": "Development", "text": "Buduję działające etapy i regularnie je weryfikuję."}, {"title": "Testy i release", "text": "Stabilizacja, testy na urządzeniach i przygotowanie finalnej wersji."}], "tech": ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "SQLite", "Firebase", "Git"]};

let data = structuredClone(DEFAULT_CONTENT);
let current = 'general';
let auth;
let db;
let firebase = {};

const escAttr = value => String(value ?? '').replaceAll('"', '&quot;');

async function initFirebase() {
  if (!FIREBASE_ENABLED) {
    document.getElementById('loginError').textContent =
      'Firebase nie jest skonfigurowany. Sprawdź firebase-config.js.';
    return;
  }

  try {
    const [appMod, authMod, fsMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js')
    ]);

    firebase = { appMod, authMod, fsMod };

    const app = appMod.initializeApp(firebaseConfig);
    auth = authMod.getAuth(app);
    db = fsMod.getFirestore(app);

    authMod.onAuthStateChanged(auth, async user => {
      if (user) {
        document.getElementById('loginView').hidden = true;
        document.getElementById('adminView').hidden = false;
        document.getElementById('userEmail').textContent = user.email || 'Administrator';
        await loadRemote();
        render();
      } else {
        document.getElementById('loginView').hidden = false;
        document.getElementById('adminView').hidden = true;
      }
    });
  } catch (error) {
    document.getElementById('loginError').textContent =
      'Błąd uruchamiania Firebase: ' + error.message;
  }
}

document.getElementById('loginForm').addEventListener('submit', async event => {
  event.preventDefault();
  const errorBox = document.getElementById('loginError');
  errorBox.textContent = '';

  try {
    await firebase.authMod.signInWithEmailAndPassword(
      auth,
      document.getElementById('loginEmail').value,
      document.getElementById('loginPassword').value
    );
  } catch (error) {
    console.error(error);
    errorBox.textContent = 'Nie udało się zalogować. Sprawdź e-mail i hasło.';
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  if (auth) firebase.authMod.signOut(auth);
});

async function loadRemote() {
  const status = document.getElementById('statusBar');
  status.textContent = 'Pobieram treści…';

  try {
    const snap = await firebase.fsMod.getDoc(
      firebase.fsMod.doc(db, 'site', 'content')
    );
    data = snap.exists() ? snap.data() : structuredClone(DEFAULT_CONTENT);
    status.textContent = snap.exists()
      ? 'Treści załadowane z Firestore.'
      : 'Brak treści w Firestore — załadowano dane domyślne.';
  } catch (error) {
    console.error(error);
    data = structuredClone(DEFAULT_CONTENT);
    status.textContent = 'Nie udało się pobrać Firestore — załadowano dane domyślne.';
  }
}

function field(path, label, value, textarea = false) {
  return `
    <div class="field">
      <label>${label}</label>
      ${textarea
        ? `<textarea data-path="${path}">${value ?? ''}</textarea>`
        : `<input data-path="${path}" value="${escAttr(value)}">`
      }
    </div>
  `;
}

function general() {
  return `
    <div class="card">
      <h2>Marka i kontakt</h2>
      <div class="grid">
        ${field('site.brand', 'Nazwa marki', data.site.brand)}
        ${field('site.tagline', 'Hasło pod logo', data.site.tagline)}
        ${field('site.email', 'E-mail', data.site.email)}
        ${field('site.cta', 'Tekst przycisku', data.site.cta)}
      </div>
    </div>

    <div class="card">
      <h2>Nagłówek strony</h2>
      <div class="grid">
        ${field('hero.eyebrow', 'Nadtytuł', data.hero.eyebrow)}
        ${field('hero.title_before', 'Tytuł — część 1', data.hero.title_before)}
        ${field('hero.title_highlight', 'Tytuł — wyróżnienie', data.hero.title_highlight)}
        ${field('hero.title_after', 'Tytuł — część 3', data.hero.title_after)}
        <div class="field full">
          ${field('hero.subtitle', 'Podtytuł', data.hero.subtitle, true)}
        </div>
      </div>
    </div>

    <div class="card">
      <h2>O mnie / CTA</h2>
      ${field('about.title', 'Tytuł', data.about.title)}
      ${field('about.text', 'Opis', data.about.text, true)}
    </div>
  `;
}

function projects() {
  return `
    <div class="toolbar-card">
      <button class="add" onclick="addProject()">+ Dodaj aplikację</button>
      <span>Dodaj projekt i edytuj jego zawartość.</span>
    </div>
  ` + data.projects.map((p, i) => `
    <div class="card">
      <div class="card-head">
        <h2>${p.name || 'Nowa aplikacja'}</h2>
        <button class="remove" onclick="removeProject(${i})">Usuń aplikację</button>
      </div>

      <div class="grid">
        ${field(`projects.${i}.name`, 'Nazwa', p.name)}

        <div class="field">
          <label>Motyw karty</label>
          <select data-path="projects.${i}.theme">
            <option value="gold" ${p.theme === 'gold' ? 'selected' : ''}>Złoty</option>
            <option value="green" ${p.theme === 'green' ? 'selected' : ''}>Zielony</option>
            <option value="blue" ${p.theme === 'blue' ? 'selected' : ''}>Niebieski</option>
            <option value="purple" ${p.theme === 'purple' ? 'selected' : ''}>Fioletowy</option>
          </select>
        </div>

        <div class="field full">
          ${field(`projects.${i}.description`, 'Opis', p.description, true)}
        </div>

        <div class="field full">
          <label>Funkcje — po jednej w wierszu</label>
          <textarea data-list="projects.${i}.features">${(p.features || []).join('\n')}</textarea>
        </div>

        <div class="field full">
          <label>Technologie — po jednej w wierszu</label>
          <textarea data-list="projects.${i}.tech">${(p.tech || []).join('\n')}</textarea>
        </div>

        <div class="field full">
          <label>Screeny — po jednej ścieżce lub URL w wierszu</label>
          <textarea data-list="projects.${i}.screens">${(p.screens || []).join('\n')}</textarea>
          <span class="small-note">Np. assets/screens/moj-screen.jpg</span>
        </div>
      </div>
    </div>
  `).join('');
}

function services() {
  return `
    <div class="toolbar-card">
      <button class="add" onclick="addService()">+ Dodaj usługę</button>
    </div>
  ` + data.services.map((item, i) => `
    <div class="card">
      <div class="card-head">
        <h2>Usługa ${i + 1}</h2>
        <button class="remove" onclick="removeService(${i})">Usuń</button>
      </div>
      ${field(`services.${i}.title`, 'Tytuł', item.title)}
      ${field(`services.${i}.text`, 'Opis', item.text, true)}
    </div>
  `).join('');
}

function process() {
  return `
    <div class="toolbar-card">
      <button class="add" onclick="addProcess()">+ Dodaj etap</button>
    </div>
  ` + data.process.map((item, i) => `
    <div class="card">
      <div class="card-head">
        <h2>Etap ${i + 1}</h2>
        <button class="remove" onclick="removeProcess(${i})">Usuń</button>
      </div>
      ${field(`process.${i}.title`, 'Tytuł', item.title)}
      ${field(`process.${i}.text`, 'Opis', item.text, true)}
    </div>
  `).join('');
}

function tech() {
  return `
    <div class="card">
      <h2>Technologie</h2>
      <div class="field">
        <label>Po jednej technologii w wierszu</label>
        <textarea data-list="tech">${data.tech.join('\n')}</textarea>
      </div>
    </div>
  `;
}

function render() {
  const map = { general, projects, services, process, tech };
  document.getElementById('editor').innerHTML = map[current]();
  bindEditor();
}

function setPath(obj, path, value) {
  const parts = path.split('.');
  const last = parts.pop();
  let currentObj = obj;
  for (const part of parts) currentObj = currentObj[part];
  currentObj[last] = value;
}

function bindEditor() {
  document.querySelectorAll('[data-path]').forEach(element => {
    const update = () => setPath(data, element.dataset.path, element.value);
    element.addEventListener('input', update);
    element.addEventListener('change', update);
  });

  document.querySelectorAll('[data-list]').forEach(element => {
    element.addEventListener('input', () => {
      setPath(
        data,
        element.dataset.list,
        element.value.split('\n').map(x => x.trim()).filter(Boolean)
      );
    });
  });
}

document.querySelectorAll('aside [data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('aside [data-tab]').forEach(x => x.classList.remove('active'));
    button.classList.add('active');
    current = button.dataset.tab;
    render();
  });
});

document.getElementById('saveBtn').addEventListener('click', async () => {
  const status = document.getElementById('statusBar');

  try {
    status.textContent = 'Publikuję…';
    await firebase.fsMod.setDoc(
      firebase.fsMod.doc(db, 'site', 'content'),
      data
    );
    status.textContent = 'Opublikowano. Zmiany zapisano w Firestore.';
  } catch (error) {
    console.error(error);
    status.textContent = 'Błąd publikacji: ' + error.message;
  }
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'novipl-content.json';
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById('importFile').addEventListener('change', async event => {
  try {
    data = JSON.parse(await event.target.files[0].text());
    render();
    document.getElementById('statusBar').textContent =
      'Zaimportowano JSON. Kliknij „Opublikuj zmiany”.';
  } catch {
    document.getElementById('statusBar').textContent = 'Nieprawidłowy plik JSON.';
  }
});

window.addProject = () => {
  data.projects.push({
    name: 'Nowa aplikacja',
    theme: 'gold',
    description: 'Krótki opis nowej aplikacji.',
    features: ['Najważniejsza funkcja'],
    tech: ['Flutter'],
    screens: []
  });
  current = 'projects';
  render();
};

window.removeProject = index => {
  if (confirm('Usunąć tę aplikację?')) {
    data.projects.splice(index, 1);
    render();
  }
};

window.addService = () => {
  data.services.push({ title: 'Nowa usługa', text: 'Opis usługi.' });
  current = 'services';
  render();
};

window.removeService = index => {
  if (confirm('Usunąć tę usługę?')) {
    data.services.splice(index, 1);
    render();
  }
};

window.addProcess = () => {
  data.process.push({ title: 'Nowy etap', text: 'Opis etapu.' });
  current = 'process';
  render();
};

window.removeProcess = index => {
  if (confirm('Usunąć ten etap?')) {
    data.process.splice(index, 1);
    render();
  }
};

initFirebase();
