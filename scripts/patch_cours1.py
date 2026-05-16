"""Patch Cours1.tsx: remove hardcoded FR data blocks, wire up useCoursContent hook."""
import re, os

SRC = os.path.join(os.path.dirname(__file__), "..", "src", "components", "Cours1.tsx")

with open(SRC, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Remove DEGREES_PLACEHOLDER block (the renamed array)
code = re.sub(
    r"// ─── Contenu pédagogique \(locale-keyed\) ─────────────────────────────────────\n"
    r"// DEGREES, INTERVALS et ALL_QUESTIONS.*?\n\n"
    r"const DEGREES_UNUSED = \[.*?\];\n",
    "",
    code, flags=re.DOTALL
)

# 2. Remove the IntervalDef interface (now imported from cours1Content)
code = re.sub(
    r"interface IntervalDef \{[^}]+\}\n\n",
    "",
    code, flags=re.DOTALL
)

# 3. Remove const INTERVALS block
code = re.sub(
    r"const INTERVALS: IntervalDef\[\] = \[.*?\];\n",
    "",
    code, flags=re.DOTALL
)

# 4. Remove const ALL_QUESTIONS block
code = re.sub(
    r"// ─── Quiz ─────────────────────────────────────────────────────────────────────\n"
    r"// Contenu reformulé.*?\n"
    r"const ALL_QUESTIONS = \[.*?\];\n",
    "",
    code, flags=re.DOTALL
)

# 5. Add content hook call after i18n in the component
code = code.replace(
    "  const i18n = useCoursI18n(\"cours1\");",
    "  const i18n = useCoursI18n(\"cours1\");\n"
    "  const { degrees: DEGREES, intervals: INTERVALS, questions: ALL_QUESTIONS } = useCoursContent(cours1Content);"
)

# 6. Fix useState that references ALL_QUESTIONS (now a local variable)
# It should already work since we're adding the hook call before useState

with open(SRC, "w", encoding="utf-8") as f:
    f.write(code)

print("Cours1.tsx patched OK")

# Verify no leftover references to the old blocks
remaining = []
for pat in ["DEGREES_UNUSED", "interface IntervalDef", "const INTERVALS:", "const ALL_QUESTIONS"]:
    if pat in code:
        remaining.append(pat)
if remaining:
    print(f"WARNING: still found: {remaining}")
else:
    print("All old data blocks removed cleanly")
