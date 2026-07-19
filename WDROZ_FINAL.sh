#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Sprawdzam zmiany..."
git status
git add .
git commit -m "Final polish: kontakt SEO mobile i panel admin" || true
git push origin main
echo
echo "Gotowe. Odczekaj 1-3 minuty i wykonaj Ctrl+Shift+R na stronie."
