"""
Extract translatable French strings from each Cours component.
Outputs src/data/strings_to_translate.json — one entry per course.

Only short strings are extracted (< 120 chars) — long theory paragraphs
are skipped intentionally (they need a human translator).
"""
import re, json, os

SRC = os.path.join(os.path.dirname(__file__), "..", "src", "components")
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "data", "strings_to_translate.json")

# Arrays to extract per course (array_name -> list of string field names to translate)
ARRAYS_TO_EXTRACT = {
    2: {
        "TRIAD_TYPES":     ["label", "struct1", "struct2", "quinte", "stability", "desc"],
        "GAMME_ACCORDS":   ["fn", "type", "desc"],
        "TETRAD_TYPES":    ["label", "struct1", "struct2", "struct3", "base", "desc"],
        "INV_NAMES":       None,  # plain string array
        "INV_CHORD_TYPES": ["label", "name", "desc"],
    },
    3: {
        "ACCORDS_C":   ["name", "fn", "desc"],
        "REGLES_VOIX": ["title", "desc", "rule"],
        "PROGS":       ["name", "desc"],
    },
    5: {
        "CM_ACCORDS": ["name", "fn", "desc"],
        "EMPRUNTS":   ["name", "desc", "role"],
        "SUITES":     ["name", "desc"],
    },
    6: {
        "INDICES_TONAL":    ["name", "desc", "example"],
        "NOTES_ETRANGERES": ["name", "desc"],
        "ACCOMP_TYPES":     ["name", "desc"],
    },
    7: {
        "DOM_SEC":      ["name", "desc", "function"],
        "TONS_VOISINS": ["name", "desc"],
    },
    8: {
        "ACCORDS_COMMUNS_CG": ["name", "desc"],
        "EXEMPLES_MOD":       ["name", "desc", "comment"],
    },
    9: {
        "TYPES_MARCHE":  ["name", "desc"],
        "TYPES_PEDALES": ["name", "desc"],
    },
    17: {
        "ETAPES": ["name", "desc"],
    },
    18: {
        "ELEMENTS": ["name", "desc"],
        "EXEMPLES": ["name", "desc"],
    },
    20: {
        "COMPOSERS": ["name", "fullName", "period", "style", "desc"],
        "ANALYSES":  ["title", "desc", "comment"],
    },
    21: {
        "COMPOSERS": ["name", "fullName", "period", "style", "desc"],
        "ANALYSES":  ["title", "desc", "comment"],
    },
}

# Also extract hardcoded JSX text strings per course
# These are short strings directly in JSX (labels, headings, etc.)
JSX_LABEL_PATTERN = re.compile(
    r'>\s*([A-ZÀÂÄÉÈÊËÎÏÔÙÛÜÇ][^<>{}\n]{2,60})\s*<',
)

def extract_array_strings(code: str, array_name: str, fields: list | None) -> list:
    """Extract string values from a named const array."""
    # Find the array start
    pattern = f"const {array_name}"
    idx = code.find(pattern)
    if idx == -1:
        return []

    # Find opening bracket
    bracket_start = code.find("[", idx)
    if bracket_start == -1:
        return []

    # Count to find closing bracket
    depth = 0
    i = bracket_start
    while i < len(code):
        ch = code[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                break
        i += 1
    array_text = code[bracket_start:i+1]

    if fields is None:
        # Plain string array — extract all string values
        strings = re.findall(r'"([^"]{3,60})"', array_text)
        return [s for s in strings if any(c > '\x7f' or c in 'àâäéèêëîïôùûüçÀÂÄÉÈÊËÎÏÔÙÛÜÇ' for c in s) or ' ' in s]

    results = []
    # For object arrays, extract field values
    for field in fields:
        # Match field: "value" or field: `value`
        pattern = rf'{field}\s*:\s*"([^"{{}}]{{3,119}})"'
        matches = re.findall(pattern, array_text)
        for m in matches:
            if m not in results:
                results.append(m)
    return results


def extract_jsx_labels(code: str) -> list:
    """Extract short hardcoded French strings from JSX."""
    results = []
    for m in JSX_LABEL_PATTERN.finditer(code):
        text = m.group(1).strip()
        # Filter: must have a French character or space, skip pure English/code
        has_french = any(c in 'àâäéèêëîïôùûüçÀÂÄÉÈÊËÎÏÔÙÛÜÇ' for c in text)
        has_space = ' ' in text
        is_short = len(text) < 80
        # Skip if it looks like a variable reference or number
        if (has_french or has_space) and is_short and not text.startswith('{') and not re.match(r'^[A-Z][a-z]?\d', text):
            if text not in results:
                results.append(text)
    return results


def main():
    result = {}

    for n in range(2, 24):
        path = os.path.join(SRC, f"Cours{n}.tsx")
        if not os.path.exists(path):
            continue

        with open(path, "r", encoding="utf-8") as f:
            code = f.read()

        course_strings = {}

        # Extract from known arrays
        arrays_config = ARRAYS_TO_EXTRACT.get(n, {})
        for array_name, fields in arrays_config.items():
            strings = extract_array_strings(code, array_name, fields)
            if strings:
                course_strings[array_name] = strings

        # Extract JSX labels (apply to all courses)
        jsx = extract_jsx_labels(code)
        # Filter out strings already in arrays
        all_array_strings = set()
        for v in course_strings.values():
            all_array_strings.update(v)
        jsx_filtered = [s for s in jsx if s not in all_array_strings]
        if jsx_filtered:
            course_strings["__jsx__"] = jsx_filtered

        if course_strings:
            result[f"cours{n}"] = course_strings

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    total = sum(len(v2) for v1 in result.values() for v2 in v1.values())
    print(f"Extracted {total} strings across {len(result)} courses -> {OUT}")


if __name__ == "__main__":
    main()
