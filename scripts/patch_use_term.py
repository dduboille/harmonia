"""
Patch course components to use useTerm() for translatable strings.
Strategy: wrap each rendered string field that appears in MUSIC_TERMS
with {tr("...")} in JSX, and add useTerm import + hook call.
"""
import re, os, json

SRC = os.path.join(os.path.dirname(__file__), "..", "src", "components")
TERMS_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "data", "strings_to_translate.json")

# Load the extracted strings to know which ones to wrap
with open(TERMS_FILE, "r", encoding="utf-8") as f:
    EXTRACTED = json.load(f)

# Strings known to be in MUSIC_TERMS (from musicTerms.ts) — only wrap these
# We check by looking for strings that appear in the data arrays AND jsx sections
# and are <= 60 chars (short enough to be labels)
TRANSLATABLE_PATTERNS = [
    # JSX text nodes: >string< → {tr("string")}
    # Only wrap strings that are short and likely in MUSIC_TERMS
]

def add_import_and_hook(code: str, course_n: int) -> str:
    """Add useTerm import and hook call if not already present."""
    if "useTerm" in code:
        return code  # already patched

    # Add import after useCoursContent import (or useCoursI18n)
    for anchor_import in [
        'import { useCoursContent } from "@/hooks/useCoursContent";',
        'import { useCoursI18n } from "@/hooks/useCoursI18n";',
    ]:
        if anchor_import in code:
            code = code.replace(
                anchor_import,
                anchor_import + '\nimport { useTerm } from "@/hooks/useTerm";',
                1,
            )
            break
    else:
        print(f"  WARNING: no import anchor found in Cours{course_n}.tsx")
        return code

    # Add hook call: const tr = useTerm(); after const i18n = ... or const { badge ... }
    for hook_anchor in [
        f'const i18n = useCoursI18n("cours{course_n}");',
        f'const {{ badge, title, subtitle }} = useCoursI18n("cours{course_n}");',
    ]:
        if hook_anchor in code:
            code = code.replace(
                hook_anchor,
                hook_anchor + "\n  const tr = useTerm();",
                1,
            )
            break
    else:
        print(f"  WARNING: no hook anchor found in Cours{course_n}.tsx")

    return code


def wrap_jsx_string(code: str, s: str) -> str:
    """Replace >s< with >{tr("s")}< in JSX (safe, avoids double-wrapping)."""
    if len(s) > 80:
        return code  # skip long strings
    if f'tr("{s}")' in code:
        return code  # already wrapped

    # Pattern: >   string   < (with optional whitespace)
    escaped = re.escape(s)
    pattern = rf'(>)\s*({escaped})\s*(<)'
    replacement = rf'\1{{tr("{s}")}}\3'
    new_code = re.sub(pattern, replacement, code)
    return new_code


def wrap_data_field_render(code: str, field: str, sample_values: list[str]) -> str:
    """
    Replace JSX references like {thing.label} or {t.label} or {type.label}
    with {tr(thing.label)} for short field values that are in MUSIC_TERMS.
    Only wraps if the field values are short and translatable.
    """
    if not any(len(v) <= 60 for v in sample_values):
        return code  # all values are long — skip

    # Find patterns like: {someVar.field} or {t.field} in JSX context
    # Replace with {tr(someVar.field)}
    pattern = rf'\{{(\w+)\.{re.escape(field)}\}}'

    def replacer(m):
        inner = m.group(1)
        full = m.group(0)
        # Skip if already wrapped
        if f'tr({inner}.{field})' in code:
            return full
        return f'{{tr({inner}.{field})}}'

    new_code = re.sub(pattern, replacer, code)
    return new_code


# Per-course config: which array fields to wrap with tr()
COURSE_FIELD_CONFIG = {
    2: {
        "label": ["Majeure", "Mineure", "Diminuée", "Augmentée", "Maj7", "7 (dominante)", "m7♭5", "dim7"],
        "stability": ["stable", "instable"],
        "fn": ["Tonique", "Sous-dom.", "Dominante"],
        "type": ["Majeure", "Mineure", "Diminuée"],
    },
    3: {
        "fn": ["Tonique", "Sous-dom.", "Dominante", "Ambigu"],
    },
    5: {
        "fn": ["Tonique", "Sous-dom.", "Dominante"],
    },
    9: {
        "label": ["Marche diatonique", "Marche harmonique"],
    },
    17: {
        "label": ["Idée de base", "Répétition", "Accélération", "Cadence"],
    },
    18: {
        "label": ["Intervalles", "Rythme", "Harmonie", "Accompagnement", "Dynamique"],
    },
}

# JSX strings to wrap per course (short labels and headings)
COURSE_JSX_CONFIG = {
    2: [
        "Construire une triade", "Type d'accord", "Quinte :",
        "Les 4 types de triades", "Les 7 accords de la gamme majeure",
        "Les accords de septième", "Tétrades de C majeur",
        "Basse :", "Notation slash :", "Renversements de C major", "Base :",
        "État fondamental", "1er renversement", "2e renversement", "3e renversement",
    ],
    3: [
        "Le triton — moteur de la tension harmonique",
        "Classification des accords par rapport au triton",
        "Les fonctions tonales", "Progressions et cadences",
        "Les cadences", "La conduite de voix (SATB)",
        "Mémo rapide :",
    ],
    4: [
        "Les cadences : ponctuation du discours musical",
        "Techniques de progression harmonique",
        "Substitutions diatoniques en C majeur",
        "Choisir le bon renversement",
        "Récapitulatif",
    ],
    5: [
        "La gamme mineure et ses deux formes",
        "Les 7 accords de C mineur",
        "Emprunts à l'homonyme",
        "Trois suites harmoniques incontournables",
        "Choisir le bon renversement",
    ],
    6: [
        "Identifier le centre tonal",
        "Notes réelles et notes étrangères",
        "Construire le squelette harmonique",
        "Les 5 étapes de l'harmonisation",
        "Tableau récapitulatif", "Erreur fréquente :", "Règle d'or :",
        "Principe clé :",
    ],
    7: [
        "Principe de la tonicisation",
        "Les dominantes secondaires en C majeur",
        "Tons voisins et fonctions secondaires",
        "Chaînes de tonicisations",
        "Dominante secondaire", "Sous-dominante secondaire",
        "Choisir le bon renversement", "Calcul rapide :", "Rappel :",
    ],
    8: [
        "Logique d'une modulation",
        "Tons voisins — les destinations privilégiées",
        "L'accord pivot",
        "Exemples de modulations par accord pivot",
        "Choisir le bon renversement", "Tableau récapitulatif",
    ],
    9: [
        "La marche harmonique",
        "Modulation par note commune",
        "Les pédales harmoniques",
        "Les accords appogiaturés",
        "Tableau comparatif",
    ],
    10: [
        "Les modes de la gamme majeure",
        "Les 7 modes de la gamme majeure",
        "Harmonie modale — accords et progressions",
        "Note caractéristique", "Exemples musicaux",
        "Récapitulatif", "Progressions modales emblématiques",
        "Accord caractéristique :", "Progression type :", "Entraînement", "Nouveau quiz",
    ],
    11: [
        "Les extensions d'accords",
        "Note caractéristique", "Récapitulatif",
        "Tensions disponibles par fonction",
        "Entraînement", "Nouveau quiz",
    ],
    12: [
        "La substitution tritonique",
        "Récapitulatif", "Entraînement", "Nouveau quiz",
    ],
    13: [
        "Le contrepoint à 2 voix",
        "Les 5 espèces de contrepoint",
        "Règles fondamentales du contrepoint",
        "Intervalles consonants et dissonants",
        "Consonances ✓", "Dissonances ✗",
        "Les 4 types de mouvement",
        "Entraînement", "Nouveau quiz",
    ],
    14: [
        "L'harmonisation modale",
        "Harmonisation modale vs tonale",
        "Accord caractéristique", "Accord caractéristique :",
        "Entraînement", "Nouveau quiz",
    ],
    15: [
        "Les progressions jazz avancées",
        "Entraînement", "Nouveau quiz",
    ],
    16: [
        "La réharmonisation",
        "Réharmonisé",
        "Entraînement", "Nouveau quiz",
    ],
    17: [
        "La phrase musicale et la forme",
        "La période et les grandes formes",
        "Les grandes formes musicales",
        "Entraînement", "Nouveau quiz",
    ],
    18: [
        "Le développement motivique",
        "Les 5 éléments constitutifs d'un motif",
        "Les 4 familles de techniques de développement",
        "Entraînement", "Nouveau quiz",
    ],
    19: [
        "Introduction à l'orchestration",
        "Les familles d'instruments et leurs caractéristiques",
        "Principes d'écriture orchestrale",
        "Entraînement", "Nouveau quiz",
    ],
    20: [
        "EXERCICES D'ANALYSE COMPARATIVE",
        "Couleur harmonique :", "Voir le résultat", "Suivante →",
    ],
    21: [
        "Couleur harmonique :", "Voir le résultat", "Suivante →",
    ],
    22: [
        "La réharmonisation",
        "Les 4 techniques de réharmonisation",
        "Réharmonisations célèbres analysées",
        "Réharmonisé", "Analyse :", "Exercice :", "Conseil :",
        "Entraînement", "Nouveau quiz",
    ],
    23: [
        "Composer dans le style des maîtres",
        "Entraînement", "Nouveau quiz",
    ],
}


def main():
    patched = []
    for n in range(2, 24):
        path = os.path.join(SRC, f"Cours{n}.tsx")
        if not os.path.exists(path):
            continue

        with open(path, "r", encoding="utf-8") as f:
            code = f.read()

        original = code
        code = add_import_and_hook(code, n)

        # Wrap JSX strings
        for s in COURSE_JSX_CONFIG.get(n, []):
            code = wrap_jsx_string(code, s)

        # Wrap data field renders
        for field, values in COURSE_FIELD_CONFIG.get(n, {}).items():
            code = wrap_data_field_render(code, field, values)

        if code != original:
            with open(path, "w", encoding="utf-8") as f:
                f.write(code)
            print(f"Cours{n}: patched")
            patched.append(n)
        else:
            print(f"Cours{n}: no change")

    print(f"\nPatched {len(patched)} courses: {patched}")


if __name__ == "__main__":
    main()
