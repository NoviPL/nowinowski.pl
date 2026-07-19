#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "== Git status =="
git status

echo
echo "== Adding files =="
git add .

echo
read -p "Commit message [Nowinowski.pl 3.0 Firebase admin]: " MSG
MSG=${MSG:-"Nowinowski.pl 3.0 Firebase admin"}

git commit -m "$MSG" || true
git push origin main

echo
echo "Gotowe. Jeśli GitHub Pages jest włączony, odczekaj 1-3 minuty i odśwież stronę."
