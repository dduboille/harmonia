"""Fix hardcoded French subtitles in all course components — replace with {i18n.subtitle}."""
import re, os

SRC = os.path.join(os.path.dirname(__file__), "..", "src", "components")

# Single-line patterns: `<p style={S.subtitle}>...text...</p>`
# Multi-line patterns:  `<p style={S.subtitle}>\n  ...text...\n</p>`
# Also S.sub variant
SUBTITLE_PATTERN = re.compile(
    r'<p style=\{S\.(subtitle|sub)\}>\s*[^{][^<]+?\s*</p>',
    re.DOTALL
)

fixed = []
for n in range(1, 24):
    path = os.path.join(SRC, f"Cours{n}.tsx")
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        code = f.read()

    # Skip already fixed
    if 'i18n.subtitle' in code or 'i18n.sub' in code:
        # Check if there's still a hardcoded one
        if not SUBTITLE_PATTERN.search(code):
            print(f"Cours{n}: already clean, skipping")
            continue

    match = SUBTITLE_PATTERN.search(code)
    if not match:
        print(f"Cours{n}: no hardcoded subtitle found")
        continue

    style_var = match.group(1)  # 'subtitle' or 'sub'
    replacement = f'<p style={{S.{style_var}}}>{{i18n.subtitle}}</p>'
    new_code = SUBTITLE_PATTERN.sub(replacement, code, count=1)

    if new_code == code:
        print(f"Cours{n}: WARNING — no change made")
        continue

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_code)
    print(f"Cours{n}: subtitle fixed (style=S.{style_var})")
    fixed.append(n)

print(f"\nFixed {len(fixed)} courses: {fixed}")
