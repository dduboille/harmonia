"""
Generate courseNContent.ts for Cours2-23 by extracting quiz arrays from components.
Each content file exports quiz questions with fr=original, en/es/de/it/pt=fr fallback.
"""
import re, os, sys

SRC_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "components")
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "data")
os.makedirs(DATA_DIR, exist_ok=True)

TEMPLATE = """\
// Auto-generated: quiz content for Cours{n} — translations can be added per-locale.
// Structural data arrays (DEGREES, MODES, etc.) remain in the component for now.

export interface Question {{ q: string; opts: string[]; a: number; fb: string; }}
export interface Cours{n}Locale {{ questions: Question[]; }}

const questionsFr: Question[] = {questions_fr};

// English translations — add when available; until then falls back to fr
const questionsEn: Question[] = questionsFr;

export const cours{n}Content: Record<string, Cours{n}Locale> = {{
  fr: {{ questions: questionsFr }},
  en: {{ questions: questionsEn }},
  es: {{ questions: questionsFr }},
  de: {{ questions: questionsFr }},
  it: {{ questions: questionsFr }},
  pt: {{ questions: questionsFr }},
}};
"""

def extract_quiz_array(tsx_path: str) -> str | None:
    """Extract the ALL_QUESTIONS or QUIZ_POOL array body from a TSX file."""
    with open(tsx_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the start of the quiz array
    for var_name in ["ALL_QUESTIONS", "QUIZ_POOL"]:
        pattern = f"const {var_name}"
        idx = content.find(pattern)
        if idx == -1:
            continue

        # Find the opening bracket
        bracket_start = content.find("[", idx)
        if bracket_start == -1:
            continue

        # Count brackets to find the closing one
        depth = 0
        i = bracket_start
        while i < len(content):
            ch = content[i]
            if ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    break
            i += 1

        # Extract array body (including the outer brackets)
        array_body = content[bracket_start:i+1]

        # Clean up: normalize whitespace sequences while preserving structure
        # Keep it as-is — it's valid TypeScript
        return array_body

    return None

def get_quiz_variable_name(tsx_path: str) -> str:
    """Return the variable name used for the quiz pool."""
    with open(tsx_path, "r", encoding="utf-8") as f:
        content = f.read()
    if "const ALL_QUESTIONS" in content:
        return "ALL_QUESTIONS"
    if "const QUIZ_POOL" in content:
        return "QUIZ_POOL"
    return "ALL_QUESTIONS"

def patch_component(tsx_path: str, course_n: int):
    """Add useCoursContent hook to the component."""
    with open(tsx_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Skip if already patched
    if "useCoursContent" in code:
        print(f"  Cours{course_n}.tsx already patched, skipping")
        return

    quiz_var = get_quiz_variable_name(tsx_path)

    # Add imports
    old_import = 'import { useCoursI18n } from "@/hooks/useCoursI18n";'
    new_import = (
        'import { useCoursI18n } from "@/hooks/useCoursI18n";\n'
        f'import {{ useCoursContent }} from "@/hooks/useCoursContent";\n'
        f'import {{ cours{course_n}Content }} from "@/data/cours{course_n}Content";'
    )
    if old_import not in code:
        print(f"  WARNING: could not find import anchor in Cours{course_n}.tsx")
        return
    code = code.replace(old_import, new_import, 1)

    # Add hook call after useCoursI18n — find the component function
    # Pattern: const i18n = useCoursI18n("coursN");
    i18n_call = f'const i18n = useCoursI18n("cours{course_n}");'
    if i18n_call in code:
        hook_inject = (
            f'const i18n = useCoursI18n("cours{course_n}");\n'
            f'  const {{ questions: {quiz_var} }} = useCoursContent(cours{course_n}Content);'
        )
        code = code.replace(i18n_call, hook_inject, 1)
    else:
        print(f"  WARNING: could not find i18n call in Cours{course_n}.tsx")

    with open(tsx_path, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"  Cours{course_n}.tsx patched OK")

def main():
    errors = []
    for n in range(2, 24):
        tsx_path = os.path.join(SRC_DIR, f"Cours{n}.tsx")
        if not os.path.exists(tsx_path):
            print(f"Cours{n}.tsx not found, skipping")
            continue

        content_path = os.path.join(DATA_DIR, f"cours{n}Content.ts")

        # Extract quiz array
        quiz_array = extract_quiz_array(tsx_path)
        if quiz_array is None:
            print(f"WARNING: No quiz array found in Cours{n}.tsx")
            errors.append(f"Cours{n}: no quiz array")
            # Create a minimal content file
            quiz_array = "[]"

        # Write content file
        ts_content = TEMPLATE.format(n=n, questions_fr=quiz_array)
        with open(content_path, "w", encoding="utf-8") as f:
            f.write(ts_content)
        print(f"cours{n}Content.ts written ({len(quiz_array)} chars)")

        # Patch the component
        patch_component(tsx_path, n)

    if errors:
        print(f"\nErrors: {errors}")
    else:
        print("\nAll done OK")

if __name__ == "__main__":
    main()
