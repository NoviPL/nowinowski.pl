NOWINOWSKI.PL — PANEL ADMINISTRATORA FIREBASE

1. Utwórz osobny projekt Firebase dla nowinowski.pl.
2. Dodaj aplikację Web w Firebase Console.
3. Włącz Authentication -> Sign-in method -> Email/Password.
4. W Authentication -> Users utwórz ręcznie swoje konto administratora.
5. Utwórz Firestore Database.
6. Włącz Cloud Storage.
7. Skopiuj konfigurację Web App do pliku firebase-config.js.
8. Zainstaluj / zaloguj Firebase CLI, a następnie z katalogu projektu:
   firebase login
   firebase use --add
   firebase deploy --only firestore:rules,storage
9. Wypchnij pliki strony na GitHub Pages.
10. Otwórz /admin/, zaloguj się i kliknij "Opublikuj zmiany".
   Pierwszy zapis utworzy dokument site/content w Firestore.

UWAGA O BEZPIECZEŃSTWIE:
Reguły pozwalają zapisywać treści każdemu ZALOGOWANEMU użytkownikowi Firebase.
Dlatego nie włączaj publicznej rejestracji użytkowników i twórz konta administratorów ręcznie.
Dla jednego administratora jest to proste i praktyczne. Później można zaostrzyć reguły do konkretnego UID.

Frontend:
- Gdy Firebase jest skonfigurowany, czyta site/content z Firestore.
- Gdy Firebase nie działa lub nie jest skonfigurowany, pokazuje treść wbudowaną w paczkę.
- Screeny wgrywane z panelu trafiają do Firebase Storage.
