import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { BWV846_MESURES_1_8 } from "./conservatoire-bwv846";

// Vérifie l'extrait rejoué contre le MusicXML de référence (voir commentaire du
// fichier de données) : 8 mesures, 3 voix (broken-chord RH, pédale ténor, basse),
// et les hauteurs qui portent l'analyse harmonique citée (dont le fa# de la
// mesure 6, seule altération de l'extrait).
describe("BWV846_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en do majeur, 4/4", () => {
    const score = parseMusicXML(BWV846_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
  });

  it("compte 16 notes par mesure (12 main droite + 2 ténor liées + 2 basse)", () => {
    // Le ténor s'attaque 2× par mesure (croche pointée liée à une noire), mais
    // `mergeTies` fusionne chaque paire liée en UNE note tenue : 2, pas 4.
    const score = parseMusicXML(BWV846_MESURES_1_8);
    for (let m = 1; m <= 8; m++) {
      expect(score.notes.filter((n) => n.measure === m)).toHaveLength(16);
    }
  });

  it("mesure 1 : premier accord brisé G4-C5-E5 (I, do majeur)", () => {
    const score = parseMusicXML(BWV846_MESURES_1_8);
    const m1 = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    expect(m1.slice(0, 3).map((n) => `${n.step}${n.octave}`)).toEqual(["G4", "C5", "E5"]);
  });

  it("mesure 6 : seule altération de l'extrait, fa# (V7/V, dominante de la dominante)", () => {
    const score = parseMusicXML(BWV846_MESURES_1_8);
    const altered = score.notes.filter((n) => n.alter !== 0);
    expect(altered).toHaveLength(4); // la cellule fa#-la-ré revient 2× par moitié de mesure
    expect(altered.every((n) => n.measure === 6 && n.step === "F" && n.alter === 1)).toBe(true);
  });

  it("basse : do4 tenu (m.1-2, 4-6), puis si3 (m.3, 7-8)", () => {
    const score = parseMusicXML(BWV846_MESURES_1_8);
    const basseParMesure = (m: number) =>
      score.notes.find((n) => n.measure === m && n.voice === "6");
    expect(basseParMesure(1)?.step).toBe("C");
    expect(basseParMesure(3)?.step).toBe("B");
    expect(basseParMesure(7)?.step).toBe("B");
    expect(basseParMesure(8)?.step).toBe("B");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV846_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur : 18 têtes de note par mesure (attaques NOTÉES, liaisons non fusionnées)", () => {
    tk.loadData(BWV846_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    // 8 mesures × (12 main droite + 4 attaques ténor + 2 basse) — la gravure dessine
    // les DEUX notes d'une liaison (contrairement à `parseMusicXML` qui les fusionne).
    expect(notes).toHaveLength(8 * 18);
  });
});
