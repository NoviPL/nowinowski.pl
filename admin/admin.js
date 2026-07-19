import { firebaseConfig, FIREBASE_ENABLED } from '../firebase-config.js';

const DEFAULT_CONTENT = {"site": {"brand": "NoviPL", "tagline": "APLIKACJE Z PASJĄ", "email": "kontakt@nowinowski.pl", "cta": "POROZMAWIAJMY"}, "hero": {"eyebrow": "APLIKACJE MOBILNE • SYSTEMY DLA FIRM", "title_before": "Tworzę aplikacje, które ", "title_highlight": "rozwiązują", "title_after": " realne problemy", "subtitle": "Od autorskich aplikacji mobilnych po personalizowane systemy do zarządzania pracą w firmach. Projektuję rozwiązania dopasowane do ludzi, procesów i codziennych wyzwań."}, "about": {"title": "33 lata. Tata córeczki. Z technologią związany praktycznie od zawsze.", "text": "Branża IT towarzyszy mi przez większość życia. Choć moja aktywność zawodowa w tym świecie miała swoje przerwy, zainteresowanie technologią, komputerami i tworzeniem własnych rozwiązań nigdy nie zniknęło. Zawsze ciągnęło mnie do sprawdzania, jak coś działa, szukania lepszych sposobów i budowania rzeczy po swojemu.

Dziś wykorzystuję zdobyte doświadczenia, ciekawość i możliwości nowoczesnych technologii, żeby tworzyć aplikacje rozwiązujące realne problemy. Nie interesuje mnie budowanie projektów wyłącznie po to, żeby dobrze wyglądały w portfolio. Największą satysfakcję daje mi moment, kiedy pomysł zamienia się w działający produkt, z którego ktoś faktycznie korzysta.

Tworzę zarówno własne aplikacje mobilne, jak i personalizowane rozwiązania dla firm. Lubię zaczynać od poznania prawdziwej potrzeby, następnie zaprojektować rozwiązanie, zbudować je, przetestować w praktyce i rozwijać wraz z kolejnymi wymaganiami.

Prywatnie jestem 33-letnim tatą córeczki. To właśnie ona jest jedną z moich największych motywacji, żeby stale się rozwijać, budować coś własnego i każdego dnia robić kolejny krok do przodu."}, "projects": [{"name": "Peek", "theme": "gold", "description": "Zagadki, ciekawostki i treści, które dają chwilę rozrywki i trening dla umysłu.", "features": ["5 kategorii treści", "Rozbudowana baza zagadek i ciekawostek", "System ocen i rekomendacji", "Treści projektowane z myślą o szybkim, wygodnym odbiorze"], "tech": ["Flutter", "Firebase", "Cloud Firestore"], "screens": ["assets/screens/peek-quiz.jpg", "assets/screens/peek-fact.jpg", "assets/screens/peek-math.jpg"]}, {"name": "FuseMap", "theme": "green", "description": "Profesjonalne narzędzie do tworzenia i porządkowania dokumentacji instalacji elektrycznych.", "features": ["Instalacje, rozdzielnice, obwody i odbiorniki", "Interaktywny schemat instalacji", "Eksport profesjonalnych dokumentów PDF", "Zdjęcia, notatki i dokumentacja techniczna"], "tech": ["Flutter", "SQLite", "PDF"], "screens": ["assets/screens/fusemap-portfolio-1.jpg", "assets/screens/fusemap-portfolio-2.jpg"]}, {"name": "AutoKronika", "theme": "blue", "description": "Historia samochodu, serwisu i kosztów eksploatacji uporządkowana w jednej aplikacji.", "features": ["Historia serwisowa i tankowania", "Koszty eksploatacji i statystyki", "Dokumenty i zdjęcia", "Czytelna historia pojazdu"], "tech": ["Flutter", "SQLite", "PDF"], "screens": ["assets/screens/autokronika-portfolio-1.jpg", "assets/screens/autokronika-portfolio-2.jpg", "assets/screens/autokronika-portfolio-3.jpg"]}, {"name": "PstrykList", "theme": "purple", "description": "Proste i wygodne listy zadań stworzone z myślą o codziennym użytkowaniu.", "features": ["Własne kategorie i listy", "Szybkie dodawanie zadań", "Postęp realizacji", "Prosty interfejs bez zbędnych funkcji"], "tech": ["Flutter", "SQLite", "Local Storage"], "screens": ["assets/screens/pstryk-portfolio-1.jpg", "assets/screens/pstryk-portfolio-2.jpg"]}], "services": [{"title": "Personalizowane aplikacje dla firm", "text": "Tworzę dedykowane aplikacje do zarządzania codzienną pracą firmy — dopasowane do jej procesów zamiast zmuszania zespołu do pracy według gotowego, uniwersalnego systemu."}, {"title": "Zadania i obieg pracy", "text": "Zadania, statusy, kategorie, terminy, przypisania, notatki, załączniki i historia zmian — uporządkowane w jednym miejscu."}, {"title": "Zespół, role i uprawnienia", "text": "Konta użytkowników, poziomy dostępu, role administratorów i pracowników oraz kontrola tego, kto może przeglądać i modyfikować konkretne dane."}, {"title": "Dane, dokumenty i zdjęcia", "text": "Centralne miejsce na dokumentację, zdjęcia, pliki, opisy i informacje związane z projektami, zleceniami, klientami, sprzętem lub innymi elementami działalności."}, {"title": "Komunikacja wewnętrzna", "text": "Komunikaty dla zespołu, ważne informacje, potwierdzenia przeczytania i uporządkowany przepływ informacji bez szukania ich w wielu różnych kanałach."}, {"title": "Flota, sprzęt i terminy", "text": "Ewidencja pojazdów lub wyposażenia, terminy przeglądów, ubezpieczeń i serwisów, notatki, zgłoszenia usterek oraz dokumentacja zdjęciowa."}, {"title": "Synchronizacja i praca offline", "text": "Rozwiązania mogą działać także przy słabym lub chwilowo niedostępnym internecie, a dane synchronizować się z centralnym systemem po odzyskaniu połączenia."}, {"title": "Raporty, backup i rozwój", "text": "Eksport danych i raportów, kopie bezpieczeństwa, historia operacji oraz możliwość dalszej rozbudowy systemu wraz z rozwojem firmy."}], "process": [{"title": "Rozpoznanie potrzeb", "text": "Poznaję sposób działania firmy, problemy i procesy, które warto uprościć lub przenieść do jednej aplikacji."}, {"title": "Projekt rozwiązania", "text": "Układam funkcje, role użytkowników, przepływ danych i interfejs tak, aby system pasował do rzeczywistej pracy zespołu."}, {"title": "Development i testy", "text": "Buduję kolejne działające etapy, testuję je na urządzeniach i poprawiam na podstawie realnego użytkowania."}, {"title": "Wdrożenie i rozwój", "text": "Przygotowuję finalną wersję, wdrożenie oraz możliwość dalszego rozwijania aplikacji, gdy pojawią się nowe potrzeby."}], "tech": ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "SQLite", "Firebase", "Git"], "contact": {"eyebrow": "POROZMAWIAJMY O TWOIM PROJEKCIE", "title": "Masz pomysł? Zamieńmy go w działający produkt.", "text": "Opisz krótko, czego potrzebujesz. Może to być nowa aplikacja mobilna, personalizowany system dla firmy albo rozwój istniejącego produktu. Odpowiem i ustalimy, co ma największy sens.", "availability": "Przyjmuję zapytania dotyczące nowych projektów i rozwoju istniejących aplikacji."}};

let data = structuredClone(DEFAULT_CONTENT);
let current = 'general';
let auth;
let db;
let firebase = {};

const escAttr = value => String(value ?? '').replaceAll('"', '&quot;');

function deepMerge(base, incoming) {
  if (Array.isArray(base)) return Array.isArray(incoming) ? incoming : base;
  if (base && typeof base === 'object') {
    const out = {...base};
    if (incoming && typeof incoming === 'object') {
      for (const key of Object.keys(incoming)) {
        out[key] = key in base ? deepMerge(base[key], incoming[key]) : incoming[key];
      }
    }
    return out;
  }
  return incoming ?? base;
}

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
    data = snap.exists() ? deepMerge(DEFAULT_CONTENT, snap.data()) : structuredClone(DEFAULT_CONTENT);
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

function contact() {
  return `
    <div class="card">
      <h2>Sekcja kontaktowa</h2>
      ${field('contact.eyebrow', 'Nadtytuł', data.contact.eyebrow)}
      ${field('contact.title', 'Tytuł', data.contact.title)}
      ${field('contact.text', 'Opis', data.contact.text, true)}
      ${field('contact.availability', 'Informacja o dostępności', data.contact.availability, true)}
      <p class="small-note">Adres e-mail zmienisz w zakładce „Treści główne”. Formularz na stronie przygotowuje wiadomość w programie pocztowym użytkownika.</p>
    </div>
  `;
}

function render() {
  const map = { general, projects, services, process, tech, contact };
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
