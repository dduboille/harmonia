/**
 * lib/satb-voicing.ts
 * Harmonia — Réalisation SATB pour la composition guidée : soprano imposé (la
 * mélodie), basse IMPOSÉE (le renversement de l'accord choisi), alto et ténor
 * conduits au plus proche de la voix précédente.
 *
 * Extrait de `CompositionGuidee` pour être testable — et corrigé sur un point : la
 * basse ne met plus systématiquement la fondamentale, elle suit la note demandée.
 * C'est ce qui permet enfin un I6, un V6/5, un napolitain bII6.
 */

export interface Voicing {
  alto: number;
  tenor: number;
  bass: number;
}

function toutesOctaves(pc: number, lo: number, hi: number): number[] {
  const r: number[] = [];
  for (let m = lo; m <= hi; m++) if (((m % 12) + 12) % 12 === pc) r.push(m);
  return r;
}

function plusProche(cands: number[], pref: number, repli: number): number {
  if (!cands.length) return repli;
  return cands.reduce((b, c) => (Math.abs(c - pref) < Math.abs(b - pref) ? c : b));
}

/**
 * @param pcs      classes de hauteurs de l'accord
 * @param bassePc  la classe de hauteur À LA BASSE (renversement)
 * @param sopMidi  le soprano (note de la mélodie), en midi
 * @param prev     la réalisation précédente, pour conduire alto/ténor
 */
export function realiserSATB(
  pcs: number[], bassePc: number, sopMidi: number, prev: Voicing | null,
): Voicing {
  const pr = prev ?? { alto: 64, tenor: 60, bass: 48 };

  // Basse : la note IMPOSÉE, dans le registre grave, au plus proche de la précédente.
  const bass = plusProche(toutesOctaves(bassePc, 40, 60), pr.bass, 48);

  const sopPC = ((sopMidi % 12) + 12) % 12;

  // Les deux hauteurs restantes à placer (alto, ténor) : l'accord moins la basse et
  // le soprano, complété si besoin en doublant une note (la fondamentale de préférence).
  const reste = [...pcs];
  const retirer = (pc: number) => { const i = reste.indexOf(pc); if (i >= 0) reste.splice(i, 1); };
  retirer(bassePc);
  retirer(sopPC);
  while (reste.length < 2) reste.push(pcs[0]);

  let bAlt = pr.alto, bTen = pr.tenor, meilleur = Infinity;
  for (const [aPC, tPC] of [[reste[0], reste[1]], [reste[1], reste[0]]] as [number, number][]) {
    const aCands = toutesOctaves(aPC, 55, 72).filter((m) => m < sopMidi && m > bass);
    const tCands = toutesOctaves(tPC, 48, 67).filter((m) => m > bass);
    if (!aCands.length || !tCands.length) continue;
    const aM = plusProche(aCands, pr.alto, aCands[0]);
    const tF = tCands.filter((m) => m <= aM);
    if (!tF.length) continue;
    const tM = plusProche(tF, pr.tenor, tF[0]);
    const sc = Math.abs(aM - pr.alto) + Math.abs(tM - pr.tenor);
    if (sc < meilleur) { meilleur = sc; bAlt = aM; bTen = tM; }
  }

  return { alto: bAlt, tenor: bTen, bass };
}
