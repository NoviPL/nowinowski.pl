NOWINOWSKI.PL — FINALNA KONFIGURACJA FIREBASE

Gotowe:
- Firebase Authentication podłączone do panelu /admin/
- Firestore podłączony do treści strony
- Prawdziwy firebaseConfig wpisany do firebase-config.js
- Firebase Storage wyłączony z panelu (brak konieczności przechodzenia na plan Blaze)
- Screeny dodawane jako ścieżki z repozytorium lub publiczne URL
- Dodawanie/edycja/usuwanie aplikacji nadal działa
- Dodawanie/edycja/usuwanie usług i etapów procesu nadal działa

WAŻNE:
Przy pierwszym uruchomieniu panelu:
1. Zaloguj się utworzonym kontem administratora.
2. Kliknij "Opublikuj zmiany".
3. To utworzy dokument Firestore: site/content.
4. Od tej chwili publiczna strona będzie czytać treści z Firestore.

WDROŻENIE REGUŁ:
firebase login
firebase use --add
firebase deploy --only firestore:rules

WRZUCENIE NA GITHUB:
./deploy_github.sh

Alternatywnie ręcznie:
git add .
git commit -m "Nowinowski.pl 3.0 Firebase admin"
git push origin main

PANEL:
https://TWOJ_ADRES/admin/

Dodawanie nowych screenów bez Storage:
- wrzuć nowy plik do assets/screens/
- wypchnij go na GitHub
- w panelu wpisz ścieżkę assets/screens/nazwa-pliku.jpg
- kliknij "Opublikuj zmiany"
