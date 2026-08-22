#!/usr/bin/env bash
# Renders the social cards to static/img/ at 1200x630.
#
# Each card is drawn at 2x by headless Chromium and downsampled, which is the
# cheapest way to get clean type without shipping a 2400px file. Edit the
# .html sources, re-run this, commit the PNGs.
#
# Needs: chromium (or set CHROMIUM=/path/to/browser) and python3 with Pillow.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out="$here/../../static/img"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

browser="${CHROMIUM:-chromium}"

render() {
  local src="$1" dest="$2"
  "$browser" \
    --headless \
    --no-sandbox \
    --disable-gpu \
    --hide-scrollbars \
    --allow-file-access-from-files \
    --force-device-scale-factor=2 \
    --window-size=1200,630 \
    --user-data-dir="$tmp/profile" \
    --screenshot="$tmp/$dest" \
    "file://$here/$src" >/dev/null 2>&1

  python3 - "$tmp/$dest" "$out/$dest" <<'PY'
import sys
from PIL import Image

src, dest = sys.argv[1], sys.argv[2]
img = Image.open(src).convert("RGB").resize((1200, 630), Image.LANCZOS)
img.save(dest, "PNG", optimize=True)
print(f"{dest} {img.size[0]}x{img.size[1]}")
PY
}

render home.html trinity-social-card.png
render katacomb.html katacomb-social-card.png
