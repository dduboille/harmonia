/**
 * lib/pcset.ts
 * Harmonia — Moteur de théorie des ensembles de classes de hauteurs (cours 44).
 *
 * Arithmétique modulo 12 : classes de hauteurs 0-11 (Do = 0, convention
 * « do fixe »), classes d'intervalles ic 0-6, transposition Tn, inversion TnI,
 * forme normale, forme première et vecteur d'intervalles.
 *
 * CONVENTIONS (Rahn / Straus, suivies par la spec validée du cours 44) :
 *  - Forme normale : la rotation la plus compacte (plus petit intervalle
 *    extérieur), départagée par le « tassement à gauche » (intervalle de la
 *    première note à l'avant-dernière, puis à l'antépénultième, etc.) ; en cas
 *    d'égalité parfaite (ensembles totalement symétriques comme {0,4,8}),
 *    commencer par le plus petit numéro.
 *  - Forme première : la plus tassée à gauche (comparaison lexicographique)
 *    entre la forme normale transposée à 0 et celle de l'inversion.
 *
 * Ce module est le VERROU ARITHMÉTIQUE du cours 44 : chaque valeur imprimée
 * dans le cours (formes normales, formes premières, vecteurs) est vérifiée
 * contre lui par pcset.test.ts. Pur, sans dépendance : testable en Node.
 */

/** Réduit un entier (même négatif) dans [0, 11]. */
export function mod12(n: number): number {
  return ((n % 12) + 12) % 12;
}

/** Classe d'intervalles d'un intervalle en demi-tons : ic(i) = min(i, 12 − i). */
export function classeIntervalle(i: number): number {
  const m = mod12(i);
  return Math.min(m, 12 - m);
}

/** Transposition Tn : ajoute n (mod 12) à chaque pc. Conserve l'ordre donné. */
export function transposer(pcs: number[], n: number): number[] {
  return pcs.map((p) => mod12(p + n));
}

/** Inversion TnI : x ↦ n − x (mod 12). T0I est l'inversion autour de 0. */
export function inverser(pcs: number[], n = 0): number[] {
  return pcs.map((p) => mod12(n - p));
}

/** Dédoublonne et trie en ordre croissant (l'« ensemble » proprement dit). */
function normaliser(pcs: number[]): number[] {
  return [...new Set(pcs.map(mod12))].sort((a, b) => a - b);
}

/**
 * Forme normale : l'écriture la plus compacte de l'ensemble (algorithme des
 * rotations, critère Rahn/Straus). Retourne les pcs eux-mêmes, dans l'ordre
 * de la forme normale — ex. {7, 9, 1, 2} → [7, 9, 1, 2].
 */
export function formeNormale(pcs: number[]): number[] {
  const u = normaliser(pcs);
  const k = u.length;
  if (k <= 1) return u;

  // Chaque rotation, décrite par ses écarts à la première note (croissants).
  let meilleure: number[] | null = null;
  let meilleursEcarts: number[] | null = null;

  for (let r = 0; r < k; r++) {
    const rot = [...u.slice(r), ...u.slice(0, r)];
    const ecarts = rot.map((p) => mod12(p - rot[0]));

    if (meilleure === null || meilleursEcarts === null) {
      meilleure = rot;
      meilleursEcarts = ecarts;
      continue;
    }

    // Intervalle extérieur d'abord, puis avant-dernier, antépénultième, etc.
    let verdict = 0; // <0 : rot gagne ; >0 : meilleure reste ; 0 : égalité
    for (let i = k - 1; i >= 1; i--) {
      if (ecarts[i] !== meilleursEcarts[i]) {
        verdict = ecarts[i] - meilleursEcarts[i];
        break;
      }
    }
    // Égalité parfaite (ensemble symétrique) : plus petit premier numéro.
    if (verdict === 0) verdict = rot[0] - meilleure[0];
    if (verdict < 0) {
      meilleure = rot;
      meilleursEcarts = ecarts;
    }
  }
  return meilleure as number[];
}

/**
 * Forme première : représentant canonique de la classe d'ensembles (Tn/TnI).
 * Commence toujours par 0 ; la plus « tassée à gauche » entre la forme normale
 * transposée à 0 et celle de l'inversion — ex. {7, 9, 1, 2} → [0, 1, 5, 7].
 */
export function formePremiere(pcs: number[]): number[] {
  const u = normaliser(pcs);
  if (u.length <= 1) return u.length ? [0] : [];

  const aZero = (fn: number[]): number[] => fn.map((p) => mod12(p - fn[0]));
  const a = aZero(formeNormale(u));
  const b = aZero(formeNormale(inverser(u)));

  // Comparaison chiffre à chiffre depuis la gauche : la plus petite gagne.
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return a[i] < b[i] ? a : b;
  }
  return a;
}

/**
 * Vecteur d'intervalles : occurrences de chaque classe d'intervalles ic 1 à
 * ic 6 entre toutes les paires de pcs — ex. [0, 1, 4] → [1, 0, 1, 1, 0, 0],
 * soit <101100>. Un ensemble de cardinalité k compte k(k−1)/2 paires.
 */
export function vecteurIntervalles(pcs: number[]): number[] {
  const u = normaliser(pcs);
  const v = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < u.length; i++) {
    for (let j = i + 1; j < u.length; j++) {
      const ic = classeIntervalle(u[j] - u[i]);
      if (ic > 0) v[ic - 1]++;
    }
  }
  return v;
}

/** Rend un vecteur sous sa forme imprimée <101100>. */
export function vecteurEnTexte(v: number[]): string {
  return `<${v.join("")}>`;
}
