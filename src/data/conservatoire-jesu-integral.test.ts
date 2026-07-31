import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  JESU_INTEGRAL_MESURES_1_19,
  JESU_INTEGRAL_ANALYSE,
  JESU_INTEGRAL_ANALYSE_NARRATIVE,
} from "./conservatoire-jesu-integral";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « jesu-annote-propre.musicxml ») : le choral « Jesu, meine Freude », INTÉGRAL
// (19 mesures), avec <harmony> et chiffrage romain complet en <direction><words>
// (63 verticalités), grille guitare fautive du hymnal d'origine déjà retirée.
describe("JESU_INTEGRAL_MESURES_1_19", () => {
  it("s'analyse sans erreur et couvre 19 mesures, 4/4", () => {
    const score = parseMusicXML(JESU_INTEGRAL_MESURES_1_19);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(19);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 64 });
  });

  it("porte 63 balises <harmony> (le chiffrage vérifié, grille fautive retirée)", () => {
    expect((JESU_INTEGRAL_MESURES_1_19.match(/<harmony /g) || [])).toHaveLength(63);
  });

  it("le Stollen (m.7-12) réplique m.1-6 note pour note (même chiffrage <words>)", () => {
    const extraire = (num: number) => {
      const s = JESU_INTEGRAL_MESURES_1_19.slice(
        JESU_INTEGRAL_MESURES_1_19.indexOf(`<measure number="${num}"`),
        JESU_INTEGRAL_MESURES_1_19.indexOf(`<measure number="${num + 1}"`),
      );
      return [...s.matchAll(/<words[^>]*>([^<]*)<\/words>/g)].map((m) =>
        m[1].replace(/^b : /, "").replace(/Stollen \d.*$/, "Stollen"),
      );
    };
    for (let i = 0; i < 6; i++) {
      expect(extraire(7 + i)).toEqual(extraire(1 + i));
    }
  });

  it("mesure 1 : la septième diminuée de la sensible (vii°4/2) résout bien en VI (ordre chronologique, pas l'ordre textuel des balises)", () => {
    const score = parseMusicXML(JESU_INTEGRAL_MESURES_1_19);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notes = score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length);
    // vii°4/2 (A#-C#-E-G) sonne avant l'accord de VI (G-B-D) : la basse reste sur Sol (G2)
    // pendant les deux (du temps 3 jusqu'au temps 4 inclus), avant de bouger vers Fa# (levée m.2).
    const bassePedale = notes.filter(
      (n) => n.voice === "6" && n.onset >= m1.start + 1536 && n.onset < m1.start + 2688,
    );
    expect(bassePedale.length).toBeGreaterThan(0);
    expect(bassePedale.every((n) => n.midi % 12 === 7)).toBe(true); // classe de hauteur Sol
  });

  it("mesure 5 : le retard 4-3 ne se résout en V7 complet qu'au tout dernier huitième de la mesure", () => {
    const score = parseMusicXML(JESU_INTEGRAL_MESURES_1_19);
    const m5 = score.measures.find((m) => m.numero === 5)!;
    const dernierHuitieme = score.notes.filter((n) => n.onset >= m5.start + 2688 && n.onset < m5.start + m5.length);
    const classes = new Set(dernierHuitieme.map((n) => n.midi % 12));
    expect(classes.has(4)).toBe(true); // Mi (la 7e du V7) n'apparaît qu'ici
  });

  it("mesure 16 : la coquille d'édition Mi#/Fa♮ est bien présente dans le fichier (spelling literal)", () => {
    const m16 = JESU_INTEGRAL_MESURES_1_19.slice(
      JESU_INTEGRAL_MESURES_1_19.indexOf('<measure number="16"'),
      JESU_INTEGRAL_MESURES_1_19.indexOf('<measure number="17"'),
    );
    expect(m16).toContain("Fa♮");
    // La note en question est bien écrite <step>F</step> sans dièse, avec un naturel explicite.
    const idx = m16.indexOf("Mi#");
    const suite = m16.slice(idx, idx + 400);
    expect(suite).toContain("<step>F</step>");
    expect(suite).toContain("<accidental>natural</accidental>");
    expect(suite).toContain("<voice>2</voice>");
  });

  it("mesure 19 : la tierce picarde (Ré#) est portée par la voix ténor, seule occurrence de la pièce", () => {
    const score = parseMusicXML(JESU_INTEGRAL_MESURES_1_19);
    const m19 = score.measures.find((m) => m.numero === 19)!;
    const notes = score.notes.filter((n) => n.onset >= m19.start && n.onset < m19.start + m19.length);
    const tenor = notes.find((n) => n.voice === "5");
    expect(tenor?.midi).toBeDefined();
    expect(tenor!.midi % 12).toBe(3); // classe de hauteur Ré#/Mib
    // Aucune autre mesure du choral ne doit porter de tierce picarde (Ré# hors contexte de passage).
    const m6 = JESU_INTEGRAL_MESURES_1_19.slice(
      JESU_INTEGRAL_MESURES_1_19.indexOf('<measure number="6"'),
      JESU_INTEGRAL_MESURES_1_19.indexOf('<measure number="7"'),
    );
    expect(m6).not.toContain("Bmajor");
  });

  it("JESU_INTEGRAL_ANALYSE couvre les 19 mesures, une pastille chacune, mesures 7-12 répliquant 1-6", () => {
    expect(JESU_INTEGRAL_ANALYSE).toHaveLength(19);
    const nums = JESU_INTEGRAL_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual(Array.from({ length: 19 }, (_, i) => i + 1));
    for (let i = 0; i < 6; i++) {
      expect(JESU_INTEGRAL_ANALYSE[6 + i].nom).toBe(JESU_INTEGRAL_ANALYSE[i].nom);
    }
  });
});

describe("JESU_INTEGRAL_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 sections (Stollen×3 phrases, Abgesang×3)", () => {
    expect(JESU_INTEGRAL_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(JESU_INTEGRAL_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("la synthèse construit explicitement la lecture structurelle (surface vs prolongation), sujet du cours 27", () => {
    const tousLesTextes = JESU_INTEGRAL_ANALYSE_NARRATIVE.synthese.map((s) => s.texte).join(" ");
    expect(tousLesTextes).toMatch(/prolonge|structurel/i);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      JESU_INTEGRAL_ANALYSE_NARRATIVE.tonalite,
      JESU_INTEGRAL_ANALYSE_NARRATIVE.metrique,
      JESU_INTEGRAL_ANALYSE_NARRATIVE.forme,
      ...JESU_INTEGRAL_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...JESU_INTEGRAL_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("JESU_INTEGRAL_MESURES_1_19 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (19 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(JESU_INTEGRAL_MESURES_1_19);
    tk.renderToMIDI();
    tk.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(19);
  }, 20000);

  it("le surlignage Verovio avance de ~3750ms par mesure (64bpm, 4/4) sur le premier passage", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(JESU_INTEGRAL_MESURES_1_19);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    // Le fichier porte une reprise (convention de recueil, 4 strophes) — Verovio
    // la respecte dans son rendu MIDI. On échantillonne seulement le premier
    // passage (19 mesures × ~3750ms ≈ 71250ms) pour éviter la boucle.
    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 68000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(17);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 64) * 60000, -2);
  }, 20000);
});
