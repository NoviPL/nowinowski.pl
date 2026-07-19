import { firebaseConfig, FIREBASE_ENABLED } from '../firebase-config.js';

const DEFAULT_CONTENT = {"site": {"brand": "NoviPL", "tagline": "APLIKACJE Z PASJĄ", "email": "kontakt@nowinowski.pl", "cta": "POROZMAWIAJMY"}, "hero": {"eyebrow": "MOJE PROJEKTY", "title_before": "Aplikacje, które ", "title_highlight": "rozwiązują", "title_after": " realne problemy", "subtitle": "Każda aplikacja to setki godzin pracy, testów i dopracowania detali."}, "about": {"title": "Tworzę aplikacje, które mają znaczenie", "text": "Od pomysłu, przez projekt i development, aż po wdrożenie i wsparcie."}, "projects": [{"name": "Peek", "theme": "gold", "description": "Zagadki, ciekawostki i treści, które dają chwilę rozrywki i trening dla umysłu.", "features": ["5 kategorii: Dla Ciebie, Zagadki, Ciekawostki, Humor, Motywacja", "Ponad 1000 zagadek i ciekawostek", "System ocen i rekomendacji", "Tryb offline – działaj bez internetu"], "tech": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage"], "screens": ["assets/screens/peek-quiz.jpg", "assets/screens/peek-fact.jpg", "assets/screens/peek-math.jpg"]}, {"name": "FuseMap", "theme": "green", "description": "Profesjonalna dokumentacja instalacji elektrycznych.", "features": ["Instalacje, rozdzielnie, obwody, odbiorniki", "Interaktywny schemat instalacji", "Eksport profesjonalnych PDF", "Zdjęcia, notatki, podpisy i opisy"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/fusemap-portfolio-1.jpg", "assets/screens/fusemap-portfolio-2.jpg"]}, {"name": "AutoKronika", "theme": "blue", "description": "Kompletna historia Twojego samochodu w jednym miejscu.", "features": ["Historia serwisowa i tankowań", "Koszty eksploatacji i statystyki", "Dokumenty i zdjęcia", "Przypomnienia i ocena stanu pojazdu"], "tech": ["Flutter", "SQLite", "PDF", "Image Picker"], "screens": ["assets/screens/autokronika-portfolio-1.jpg", "assets/screens/autokronika-portfolio-2.jpg", "assets/screens/autokronika-portfolio-3.jpg"]}, {"name": "PstrykList", "theme": "purple", "description": "Proste i wygodne listy zadań na co dzień.", "features": ["Własne kategorie i listy", "Proste dodawanie zadań", "Postęp i statystyki", "Tryb ciemny i jasny"], "tech": ["Flutter", "SQLite", "Local Storage"], "screens": ["assets/screens/pstryk-portfolio-1.jpg", "assets/screens/pstryk-portfolio-2.jpg"]}], "services": [{"title": "Aplikacje mobilne", "text": "Projektowanie i budowa aplikacji na Androida — od pierwszego ekranu po wersję release."}, {"title": "Narzędzia dla firm", "text": "Dedykowane systemy, dokumentacja, synchronizacja i rozwiązania usprawniające codzienną pracę."}, {"title": "Offline & Cloud", "text": "SQLite, Firebase, API i architektura dopasowana do realnych warunków działania produktu."}, {"title": "Rozwój produktu", "text": "Porządkowanie aplikacji, poprawa UX, nowe funkcje i przygotowanie do publikacji."}], "process": [{"title": "Rozpoznanie", "text": "Najpierw problem, użytkownik i cel."}, {"title": "Projekt", "text": "Układam funkcje, przepływy i wygląd produktu."}, {"title": "Development", "text": "Buduję działające etapy i regularnie je weryfikuję."}, {"title": "Testy i release", "text": "Stabilizacja, testy na urządzeniach i przygotowanie finalnej wersji."}], "tech": ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "SQLite", "Firebase", "Git"]};
let data=structuredClone(DEFAULT_CONTENT), current='general';
let auth, db, storage, firebase={};

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/"/g,'&quot;');

async function initFirebase(){
  if(!FIREBASE_ENABLED){
    loginError.textContent='Firebase nie jest jeszcze skonfigurowany. Uzupełnij firebase-config.js.';
    return;
  }
  const [appMod,authMod,fsMod]=await Promise.all([
    import('https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js')
  ]);
  Object.assign(firebase,{appMod,authMod,fsMod});
  const app=appMod.initializeApp(firebaseConfig);
  auth=authMod.getAuth(app); db=fsMod.getFirestore(app);

  authMod.onAuthStateChanged(auth,async user=>{
    if(user){
      loginView.hidden=true; adminView.hidden=false; userEmail.textContent=user.email||'Administrator';
      await loadRemote(); render();
    }else{ loginView.hidden=false; adminView.hidden=true; }
  });
}

loginForm.onsubmit=async e=>{
  e.preventDefault(); loginError.textContent='';
  try{ await firebase.authMod.signInWithEmailAndPassword(auth,loginEmail.value,loginPassword.value); }
  catch(err){ loginError.textContent='Nie udało się zalogować. Sprawdź e-mail i hasło.'; }
};
logoutBtn.onclick=()=>firebase.authMod.signOut(auth);

async function loadRemote(){
  statusBar.textContent='Pobieram treści…';
  const snap=await firebase.fsMod.getDoc(firebase.fsMod.doc(db,'site','content'));
  data=snap.exists()?snap.data():structuredClone(DEFAULT_CONTENT);
  statusBar.textContent=snap.exists()?'Treści załadowane z Firestore.':'Brak treści w Firestore — załadowano dane domyślne.';
}
function input(path,label,value,area=false){
  return `<div class="field"><label>${label}</label>${area?`<textarea data-path="${path}">${value??''}</textarea>`:`<input data-path="${path}" value="${esc(value)}">`}</div>`
}
function general(){
  return `<div class="card"><h2>Marka i kontakt</h2><div class="grid">${input('site.brand','Nazwa marki',data.site.brand)}${input('site.tagline','Hasło pod logo',data.site.tagline)}${input('site.email','E-mail',data.site.email)}${input('site.cta','Tekst przycisku',data.site.cta)}</div></div>
  <div class="card"><h2>Nagłówek strony</h2><div class="grid">${input('hero.eyebrow','Nadtytuł',data.hero.eyebrow)}${input('hero.title_before','Tytuł — część 1',data.hero.title_before)}${input('hero.title_highlight','Tytuł — wyróżnienie',data.hero.title_highlight)}${input('hero.title_after','Tytuł — część 3',data.hero.title_after)}<div class="field full">${input('hero.subtitle','Podtytuł',data.hero.subtitle,true)}</div></div></div>
  <div class="card"><h2>O mnie / CTA</h2>${input('about.title','Tytuł',data.about.title)}${input('about.text','Opis',data.about.text,true)}</div>`;
}
function projects(){
  return `<div class="toolbar-card"><button class="add" onclick="window.addProject()">+ Dodaj aplikację</button><span>Dodaj projekt, teksty oraz screeny wgrywane do Firebase Storage.</span></div>`+
  data.projects.map((p,i)=>`<div class="card"><div class="card-head"><h2>${p.name||'Nowa aplikacja'}</h2><button class="remove" onclick="window.removeProject(${i})">Usuń aplikację</button></div><div class="grid">
  ${input(`projects.${i}.name`,'Nazwa',p.name)}
  <div class="field"><label>Motyw karty</label><select data-path="projects.${i}.theme"><option value="gold" ${p.theme==='gold'?'selected':''}>Złoty</option><option value="green" ${p.theme==='green'?'selected':''}>Zielony</option><option value="blue" ${p.theme==='blue'?'selected':''}>Niebieski</option><option value="purple" ${p.theme==='purple'?'selected':''}>Fioletowy</option></select></div>
  <div class="field full">${input(`projects.${i}.description`,'Opis',p.description,true)}</div>
  <div class="field full"><label>Funkcje — po jednej w wierszu</label><textarea data-list="projects.${i}.features">${(p.features||[]).join('\n')}</textarea></div>
  <div class="field full"><label>Technologie — po jednej w wierszu</label><textarea data-list="projects.${i}.tech">${(p.tech||[]).join('\n')}</textarea></div>
  <div class="field full"><label>Screeny — po jednej ścieżce lub URL w wierszu</label>
  <textarea data-list="projects.${i}.screens">${(p.screens||[]).join('
')}</textarea>
  <span class="small-note">Pliki z repozytorium: assets/screens/nazwa.jpg lub pełny publiczny URL.</span>
</div></div></div>`).join('');
}
function services(){return `<div class="toolbar-card"><button class="add" onclick="window.addService()">+ Dodaj usługę</button></div>`+data.services.map((x,i)=>`<div class="card"><div class="card-head"><h2>Usługa ${i+1}</h2><button class="remove" onclick="window.removeService(${i})">Usuń</button></div>${input(`services.${i}.title`,'Tytuł',x.title)}${input(`services.${i}.text`,'Opis',x.text,true)}</div>`).join('')}
function process(){return `<div class="toolbar-card"><button class="add" onclick="window.addProcess()">+ Dodaj etap</button></div>`+data.process.map((x,i)=>`<div class="card"><div class="card-head"><h2>Etap ${i+1}</h2><button class="remove" onclick="window.removeProcess(${i})">Usuń</button></div>${input(`process.${i}.title`,'Tytuł',x.title)}${input(`process.${i}.text`,'Opis',x.text,true)}</div>`).join('')}
function tech(){return `<div class="card"><h2>Technologie</h2><div class="field"><label>Po jednej technologii w wierszu</label><textarea data-list="tech">${data.tech.join('\n')}</textarea></div></div>`}
function render(){editor.innerHTML=({general,projects,services,process,tech}[current])();bind();}
function setPath(obj,path,val){let parts=path.split('.'),last=parts.pop(),cur=obj;for(const p of parts)cur=cur[p];cur[last]=val}
function bind(){
  document.querySelectorAll('[data-path]').forEach(el=>{const fn=()=>setPath(data,el.dataset.path,el.value);el.oninput=fn;el.onchange=fn;});
  document.querySelectorAll('[data-list]').forEach(el=>el.oninput=()=>setPath(data,el.dataset.list,el.value.split('\n').map(x=>x.trim()).filter(Boolean)));
}
document.querySelectorAll('aside [data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('aside [data-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');current=b.dataset.tab;render();});

saveBtn.onclick=async()=>{
  try{
    statusBar.textContent='Publikuję…';
    await firebase.fsMod.setDoc(firebase.fsMod.doc(db,'site','content'),data);
    statusBar.textContent='Opublikowano. Zmiany są zapisane w Firestore.';
  }catch(e){console.error(e);statusBar.textContent='Błąd publikacji: '+e.message;}
};
exportBtn.onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='novipl-content.json';a.click();URL.revokeObjectURL(a.href)};
importFile.onchange=async e=>{try{data=JSON.parse(await e.target.files[0].text());render();statusBar.textContent='Zaimportowano JSON. Kliknij „Opublikuj zmiany”.';}catch{statusBar.textContent='Nieprawidłowy JSON.';}};

window.addProject=()=>{data.projects.push({name:'Nowa aplikacja',theme:'gold',description:'Krótki opis nowej aplikacji.',features:['Najważniejsza funkcja'],tech:['Flutter'],screens:[]});current='projects';render();};
window.removeProject=i=>{if(confirm('Usunąć tę aplikację?')){data.projects.splice(i,1);render();}};
window.addService=()=>{data.services.push({title:'Nowa usługa',text:'Opis usługi.'});render();};
window.removeService=i=>{if(confirm('Usunąć tę usługę?')){data.services.splice(i,1);render();}};
window.addProcess=()=>{data.process.push({title:'Nowy etap',text:'Opis etapu.'});render();};
window.removeProcess=i=>{if(confirm('Usunąć ten etap?')){data.process.splice(i,1);render();}};

initFirebase();
