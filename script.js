import { firebaseConfig, FIREBASE_ENABLED } from './firebase-config.js';

const DEFAULT_CONTENT = {"site": {"brand": "NoviPL", "tagline": "APLIKACJE Z PASJĄ", "email": "kontakt@nowinowski.pl", "cta": "POROZMAWIAJMY"}, "hero": {"eyebrow": "APLIKACJE MOBILNE • SYSTEMY DLA FIRM", "title_before": "Tworzę aplikacje, które ", "title_highlight": "rozwiązują", "title_after": " realne problemy", "subtitle": "Od autorskich aplikacji mobilnych po personalizowane systemy do zarządzania pracą w firmach. Projektuję rozwiązania dopasowane do ludzi, procesów i codziennych wyzwań."}, "about": {"title": "33 lata. Tata córeczki. Z technologią związany praktycznie od zawsze.", "text": "Branża IT towarzyszy mi przez większość życia. Choć moja aktywność zawodowa w tym świecie miała swoje przerwy, zainteresowanie technologią, komputerami i tworzeniem własnych rozwiązań nigdy nie zniknęło. Zawsze ciągnęło mnie do sprawdzania, jak coś działa, szukania lepszych sposobów i budowania rzeczy po swojemu.\n\nDziś wykorzystuję zdobyte doświadczenia, ciekawość i możliwości nowoczesnych technologii, żeby tworzyć aplikacje rozwiązujące realne problemy. Nie interesuje mnie budowanie projektów wyłącznie po to, żeby dobrze wyglądały w portfolio. Największą satysfakcję daje mi moment, kiedy pomysł zamienia się w działający produkt, z którego ktoś faktycznie korzysta.\n\nTworzę zarówno własne aplikacje mobilne, jak i personalizowane rozwiązania dla firm. Lubię zaczynać od poznania prawdziwej potrzeby, następnie zaprojektować rozwiązanie, zbudować je, przetestować w praktyce i rozwijać wraz z kolejnymi wymaganiami.\n\nPrywatnie jestem 33-letnim tatą córeczki. To właśnie ona jest jedną z moich największych motywacji, żeby stale się rozwijać, budować coś własnego i każdego dnia robić kolejny krok do przodu."}, "projects": [{"name": "Peek", "theme": "gold", "description": "Zagadki, ciekawostki i treści, które dają chwilę rozrywki i trening dla umysłu.", "features": ["5 kategorii treści", "Rozbudowana baza zagadek i ciekawostek", "System ocen i rekomendacji", "Treści projektowane z myślą o szybkim, wygodnym odbiorze"], "tech": ["Flutter", "Firebase", "Cloud Firestore"], "screens": ["assets/screens/peek-quiz.jpg", "assets/screens/peek-fact.jpg", "assets/screens/peek-math.jpg"]}, {"name": "FuseMap", "theme": "green", "description": "Profesjonalne narzędzie do tworzenia i porządkowania dokumentacji instalacji elektrycznych.", "features": ["Instalacje, rozdzielnice, obwody i odbiorniki", "Interaktywny schemat instalacji", "Eksport profesjonalnych dokumentów PDF", "Zdjęcia, notatki i dokumentacja techniczna"], "tech": ["Flutter", "SQLite", "PDF"], "screens": ["assets/screens/fusemap-portfolio-1.jpg", "assets/screens/fusemap-portfolio-2.jpg"]}, {"name": "AutoKronika", "theme": "blue", "description": "Historia samochodu, serwisu i kosztów eksploatacji uporządkowana w jednej aplikacji.", "features": ["Historia serwisowa i tankowania", "Koszty eksploatacji i statystyki", "Dokumenty i zdjęcia", "Czytelna historia pojazdu"], "tech": ["Flutter", "SQLite", "PDF"], "screens": ["assets/screens/autokronika-portfolio-1.jpg", "assets/screens/autokronika-portfolio-2.jpg", "assets/screens/autokronika-portfolio-3.jpg"]}, {"name": "PstrykList", "theme": "purple", "description": "Proste i wygodne listy zadań stworzone z myślą o codziennym użytkowaniu.", "features": ["Własne kategorie i listy", "Szybkie dodawanie zadań", "Postęp realizacji", "Prosty interfejs bez zbędnych funkcji"], "tech": ["Flutter", "SQLite", "Local Storage"], "screens": ["assets/screens/pstryk-portfolio-1.jpg", "assets/screens/pstryk-portfolio-2.jpg"]}], "services": [{"title": "Personalizowane aplikacje dla firm", "text": "Tworzę dedykowane aplikacje do zarządzania codzienną pracą firmy — dopasowane do jej procesów zamiast zmuszania zespołu do pracy według gotowego, uniwersalnego systemu."}, {"title": "Zadania i obieg pracy", "text": "Zadania, statusy, kategorie, terminy, przypisania, notatki, załączniki i historia zmian — uporządkowane w jednym miejscu."}, {"title": "Zespół, role i uprawnienia", "text": "Konta użytkowników, poziomy dostępu, role administratorów i pracowników oraz kontrola tego, kto może przeglądać i modyfikować konkretne dane."}, {"title": "Dane, dokumenty i zdjęcia", "text": "Centralne miejsce na dokumentację, zdjęcia, pliki, opisy i informacje związane z projektami, zleceniami, klientami, sprzętem lub innymi elementami działalności."}, {"title": "Komunikacja wewnętrzna", "text": "Komunikaty dla zespołu, ważne informacje, potwierdzenia przeczytania i uporządkowany przepływ informacji bez szukania ich w wielu różnych kanałach."}, {"title": "Flota, sprzęt i terminy", "text": "Ewidencja pojazdów lub wyposażenia, terminy przeglądów, ubezpieczeń i serwisów, notatki, zgłoszenia usterek oraz dokumentacja zdjęciowa."}, {"title": "Synchronizacja i praca offline", "text": "Rozwiązania mogą działać także przy słabym lub chwilowo niedostępnym internecie, a dane synchronizować się z centralnym systemem po odzyskaniu połączenia."}, {"title": "Raporty, backup i rozwój", "text": "Eksport danych i raportów, kopie bezpieczeństwa, historia operacji oraz możliwość dalszej rozbudowy systemu wraz z rozwojem firmy."}], "process": [{"title": "Rozpoznanie potrzeb", "text": "Poznaję sposób działania firmy, problemy i procesy, które warto uprościć lub przenieść do jednej aplikacji."}, {"title": "Projekt rozwiązania", "text": "Układam funkcje, role użytkowników, przepływ danych i interfejs tak, aby system pasował do rzeczywistej pracy zespołu."}, {"title": "Development i testy", "text": "Buduję kolejne działające etapy, testuję je na urządzeniach i poprawiam na podstawie realnego użytkowania."}, {"title": "Wdrożenie i rozwój", "text": "Przygotowuję finalną wersję, wdrożenie oraz możliwość dalszego rozwijania aplikacji, gdy pojawią się nowe potrzeby."}], "tech": ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "SQLite", "Firebase", "Git"], "contact": {"eyebrow": "POROZMAWIAJMY O TWOIM PROJEKCIE", "title": "Masz pomysł? Zamieńmy go w działający produkt.", "text": "Opisz krótko, czego potrzebujesz. Może to być nowa aplikacja mobilna, personalizowany system dla firmy albo rozwój istniejącego produktu. Odpowiem i ustalimy, co ma największy sens.", "availability": "Przyjmuję zapytania dotyczące nowych projektów i rozwoju istniejących aplikacji."}};

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
    if (snap.exists()) return deepMerge(DEFAULT_CONTENT, snap.data());
  } catch (error) {
    console.warn('Firebase niedostępny — używam treści wbudowanej.', error);
  }
  return structuredClone(DEFAULT_CONTENT);
}

function esc(value = '') {
  return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}

function renderProject(project) {
  const icons = { gold:'◉', green:'♜', blue:'▣', purple:'✓' };
  const phones = (project.screens || []).map((src,index)=>`
    <div class="mini-phone"><img loading="lazy" src="${esc(src)}" alt="${esc(project.name)} — ekran ${index+1}"></div>
  `).join('');
  return `<article class="project-card ${esc(project.theme || 'gold')} reveal-auto">
    <header><div class="app-icon">${icons[project.theme] || '●'}</div><div><h3>${esc(project.name)}</h3><div class="desc">${esc(project.description)}</div></div></header>
    <div class="phones">${phones}</div>
    <ul>${(project.features || []).map(item=>`<li>${esc(item)}</li>`).join('')}</ul>
    <div class="techchips">${(project.tech || []).map(item=>`<span>${esc(item)}</span>`).join('')}</div>
  </article>`;
}

function setupReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-auto').forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  },{threshold:.08});
  document.querySelectorAll('.reveal-auto').forEach(el=>io.observe(el));
}

(async function initPage() {
  const c = await loadContent();

  brand.textContent=c.site.brand; tagline.textContent=c.site.tagline; topCta.textContent=c.site.cta;
  heroEyebrow.textContent=c.hero.eyebrow; heroBefore.textContent=c.hero.title_before; heroHighlight.textContent=c.hero.title_highlight;
  heroAfter.textContent=c.hero.title_after; heroSubtitle.textContent=c.hero.subtitle;
  aboutTitle.textContent=c.about.title; aboutText.textContent=c.about.text;

  projectGrid.innerHTML=c.projects.map(renderProject).join('');
  servicesGrid.innerHTML=c.services.map((item,i)=>`<article class="service reveal-auto"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('');
  processGrid.innerHTML=c.process.map((item,i)=>`<article class="process-item reveal-auto"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('');
  techGrid.innerHTML=c.tech.map(item=>`<span>${esc(item)}</span>`).join('');

  mailLink.textContent=c.site.email; mailLink.href='mailto:'+c.site.email;
  contactEyebrow.textContent=c.contact.eyebrow; contactTitle.textContent=c.contact.title; contactText.textContent=c.contact.text; contactAvailability.textContent=c.contact.availability;
  year.textContent=new Date().getFullYear();

  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    const subject=`Zapytanie: ${contactType.value} — ${contactName.value}`;
    const body=[
      `Imię / firma: ${contactName.value}`,
      `E-mail: ${contactEmail.value}`,
      `Rodzaj projektu: ${contactType.value}`,
      `Orientacyjny budżet: ${contactBudget.value}`,
      '',
      'Opis projektu:',
      contactMessage.value
    ].join('\n');
    window.location.href=`mailto:${encodeURIComponent(c.site.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  menuToggle.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

  setupReveal();
})();
