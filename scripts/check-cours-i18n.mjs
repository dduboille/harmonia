// Vérifie qu'un cours donné a toutes ses clés i18n dans les 6 langues.
// Usage : node scripts/check-cours-i18n.mjs 38
import fs from "node:fs";

const LOCALES = ["fr", "en", "es", "de", "it", "pt"];
const num = process.argv[2];
if (!num) { console.error("Usage: node scripts/check-cours-i18n.mjs <num>"); process.exit(1); }

let ok = true;

// 1) namespace coursHub.c<num> et d<num> présents dans chaque langue
for (const loc of LOCALES) {
  const m = JSON.parse(fs.readFileSync(`messages/${loc}.json`, "utf8"));
  for (const key of [`c${num}`, `d${num}`]) {
    if (!m.coursHub || typeof m.coursHub[key] !== "string" || !m.coursHub[key].trim()) {
      console.error(`[KO] messages/${loc}.json : coursHub.${key} manquant`);
      ok = false;
    }
  }
  if (!m[`cours${num}`]) {
    console.error(`[KO] messages/${loc}.json : namespace cours${num} manquant`);
    ok = false;
  }
}

// 2) clés du namespace cours<num> identiques entre fr et les autres langues
function flat(obj, prefix = "") {
  return Object.entries(obj ?? {}).flatMap(([k, v]) =>
    v && typeof v === "object" ? flat(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  );
}
const fr = JSON.parse(fs.readFileSync("messages/fr.json", "utf8"));
const frKeys = new Set(flat(fr[`cours${num}`]));
for (const loc of LOCALES.filter(l => l !== "fr")) {
  const m = JSON.parse(fs.readFileSync(`messages/${loc}.json`, "utf8"));
  const locKeys = new Set(flat(m[`cours${num}`]));
  for (const k of frKeys) {
    if (!locKeys.has(k)) { console.error(`[KO] messages/${loc}.json : cours${num}.${k} manquant`); ok = false; }
  }
}

console.log(ok ? `[OK] Cours ${num} : i18n complet dans les 6 langues.` : `[KO] Cours ${num} : clés manquantes.`);
process.exit(ok ? 0 : 1);
