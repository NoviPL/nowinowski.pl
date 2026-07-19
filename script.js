import { firebaseConfig, FIREBASE_ENABLED } from './firebase-config.js';

const DEFAULT_CONTENT = {"site": {"brand": "NoviPL", "tagline": "APLIKACJE Z PASJĄ", "email": "kontakt@nowinowski.pl", "cta": "POROZMAWIAJMY"}, "hero": {"eyebrow": "MOJE PROJEKTY", "title_before": "Aplikacje, które ", "title_highlight": "rozwiązują", "title_after": " realne problemy", "subtitle": "Każda aplikacja to setki godzin pracy, testów i dopracowania detali."}, "about": {"title": "Tworzę aplikacje, które mają znaczenie", "text": "Od pomysłu, przez projekt i development, aż po wdrożenie i wsparcie."}, "projects": [{"name": "Peek", "theme": "gold", "description": "Zagadki, ciekawostki i treści, które dają chwilę rozrywki i trening dla umysłu.", "features": ["5 kategorii: Dla Ciebie, Zagadki, Ciekawostki, Humor, Motywacja", "Ponad 1000 zagadek i ciekawostek", "System ocen i rekomendacji", "Tryb offline – działaj bez internetu"], "tech": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage"], "screens": ["assets/screens/peek-quiz.jpg", "assets/screens/peek-fact.jpg", "assets/screens/peek-math.jpg"]}, {"name": "FuseMap", "theme": "green", "description": "Profesjonalna dokumentacja instalacji elektrycznych.", "features": ["Instalacje, rozdzielnie, obwody, odbiorniki", "Interaktywny schemat instalacji", "Eksport profesjonalnych PDF", "Zdjęcia, notatki, podpisy i opisy"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/fusemap-portfolio-1.jpg", "assets/screens/fusemap-portfolio-2.jpg"]}, {"name": "AutoKronika", "theme": "blue", "description": "Kompletna historia Twojego samochodu w jednym miejscu.", "features": ["Historia serwisowa i tankowań", "Koszty eksploatacji i statystyki", "Dokumenty i zdjęcia", "Przypomnienia i ocena stanu pojazdu"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/autokronika-portfolio-1.jpg", "assets/screens/autokronika-portfolio-2.jpg", "assets/screens/autokronika-portfolio-3.jpg"]}, {"name": "PstrykList", "theme": "purple", "description": "Proste i wygodne listy zadań na co dzień.", "features": ["Własne kategorie i listy", "Proste dodawanie zadań", "Postęp i statystyki", "Tryb ciemny i jasny"], "tech": ["Flutter", "SQLite", "Local Storage"], "screens": ["assets/screens/pstryk-portfolio-1.jpg", "assets/screens/pstryk-portfolio-2.jpg"]}], "services": [{"title": "Aplikacje mobilne", "text": "Projektowanie i budowa aplikacji na Androida — od pierwszego ekranu po wersję release."}, {"title": "Narzędzia dla firm", "text": "Dedykowane systemy, dokumentacja, synchronizacja i rozwiązania usprawniające codzienną pracę."}, {"title": "Offline & Cloud", "text": "SQLite, Firebase, API i architektura dopasowana do realnych warunków działania produktu."}, {"title": "Rozwój produktu", "text": "Porządkowanie aplikacji, poprawa UX, nowe funkcje i przygotowanie do publikacji."}], "process": [{"title": "Rozpoznanie", "text": "Najpierw problem, użytkownik i cel."}, {"title": "Projekt", "text": "Układam funkcje, przepływy i wygląd produktu."}, {"title": "Development", "text": "Buduję działające etapy i regularnie je weryfikuję."}, {"title": "Testy i release", "text": "Stabilizacja, testy na urządzeniach i przygotowanie finalnej wersji."}], "tech": ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "SQLite", "Firebase", "Git"]};

async function loadContent() {
  if (!FIREBASE_ENABLED) return structuredClone(DEFAULT_CONTENT);

  try {
    const [appMod, fsMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js')
    ]);

    const app = appMod.initializeApp(firebaseConfig);
    const db = fsMod.getFirestore(app);
    const snap = await fsMod.getDoc(fsMod.doc(db, 'site', 'content'));

    if (snap.exists()) return snap.data();
  } catch (error) {
    console.warn('Firebase niedostępny — używam treści wbudowanej.', error);
  }

  return structuredClone(DEFAULT_CONTENT);
}

function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderProject(project) {
  const icons = { gold: '◉', green: '♜', blue: '▣', purple: '✓' };

  const phones = (project.screens || []).map((src, index) => `
    <div class="mini-phone">
      <img src="${esc(src)}" alt="${esc(project.name)} — ekran ${index + 1}">
    </div>
  `).join('');

  return `
    <article class="project-card ${esc(project.theme || 'gold')}">
      <header>
        <div class="app-icon">${icons[project.theme] || '●'}</div>
        <div>
          <h3>${esc(project.name)}</h3>
          <div class="desc">${esc(project.description)}</div>
        </div>
      </header>
      <div class="phones">${phones}</div>
      <ul>${(project.features || []).map(item => `<li>${esc(item)}</li>`).join('')}</ul>
      <div class="techchips">${(project.tech || []).map(item => `<span>${esc(item)}</span>`).join('')}</div>
    </article>
  `;
}

(async function initPage() {
  const c = await loadContent();

  document.getElementById('brand').textContent = c.site.brand;
  document.getElementById('tagline').textContent = c.site.tagline;
  document.getElementById('topCta').textContent = c.site.cta;

  document.getElementById('heroEyebrow').textContent = c.hero.eyebrow;
  document.getElementById('heroBefore').textContent = c.hero.title_before;
  document.getElementById('heroHighlight').textContent = c.hero.title_highlight;
  document.getElementById('heroAfter').textContent = c.hero.title_after;
  document.getElementById('heroSubtitle').textContent = c.hero.subtitle;

  document.getElementById('aboutTitle').textContent = c.about.title;
  document.getElementById('aboutText').textContent = c.about.text;

  document.getElementById('projectGrid').innerHTML = c.projects.map(renderProject).join('');

  document.getElementById('servicesGrid').innerHTML = c.services.map((item, i) => `
    <article class="service">
      <span>0${i + 1}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
    </article>
  `).join('');

  document.getElementById('processGrid').innerHTML = c.process.map((item, i) => `
    <article class="process-item">
      <span>0${i + 1}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
    </article>
  `).join('');

  document.getElementById('techGrid').innerHTML =
    c.tech.map(item => `<span>${esc(item)}</span>`).join('');

  const mailLink = document.getElementById('mailLink');
  mailLink.textContent = c.site.email;
  mailLink.href = `mailto:${c.site.email}`;

  document.getElementById('year').textContent = new Date().getFullYear();
})();
