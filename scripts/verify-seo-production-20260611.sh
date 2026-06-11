#!/usr/bin/env bash
# Post-deploy SEO / GSC readiness checks for cosmo-us.lecien.com
set -euo pipefail

BASE="https://cosmo-us.lecien.com"
PASS=0
FAIL=0

check() {
  local url="$1"
  local label="${2:-$url}"
  local code
  code=$(curl -sL -o /dev/null -w "%{http_code}" "$url")
  if [[ "$code" == "200" ]]; then
    echo "✓ $label ($code)"
    ((PASS++)) || true
  else
    echo "✗ $label ($code)"
    ((FAIL++)) || true
  fi
}

echo "=== Google Search Console verification file ==="
check "$BASE/google535939e78bbdb556.html" "GSC HTML file"

echo ""
echo "=== Sitemap & robots ==="
check "$BASE/sitemap.xml" "sitemap.xml"
check "$BASE/robots.txt" "robots.txt"

echo ""
echo "=== Key pages ==="
for path in / /wholesale /floss /sashiko /100-ladies /tools-supplies /company; do
  check "$BASE$path" "$path"
done

echo ""
echo "=== Structured data (JSON-LD on homepage) ==="
if curl -sL "$BASE/" | grep -q 'application/ld+json'; then
  echo "✓ Homepage contains JSON-LD"
  ((PASS++)) || true
else
  echo "✗ Homepage missing JSON-LD"
  ((FAIL++)) || true
fi

echo ""
echo "=== Wholesale page JSON-LD ==="
if curl -sL "$BASE/wholesale" | grep -q 'application/ld+json'; then
  echo "✓ /wholesale contains JSON-LD"
  ((PASS++)) || true
else
  echo "✗ /wholesale missing JSON-LD"
  ((FAIL++)) || true
fi

echo ""
echo "=== Sitemap includes /wholesale ==="
if curl -sL "$BASE/sitemap.xml" | grep -q '/wholesale'; then
  echo "✓ sitemap lists /wholesale"
  ((PASS++)) || true
else
  echo "✗ sitemap missing /wholesale"
  ((FAIL++)) || true
fi

echo ""
echo "--- Result: $PASS passed, $FAIL failed ---"
if [[ "$FAIL" -gt 0 ]]; then
  exit 1
fi

echo ""
echo "Manual steps (require Google login):"
echo "  1. GSC → 確認 (ownership) if not done"
echo "  2. GSC → サイトマップ → submit: sitemap.xml"
echo "  3. GSC → URL検査 → request indexing for / and /wholesale"
