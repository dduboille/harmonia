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

  it("chaque mesure porte un symbole d'accord (<harmony>) correspondant à son analyse", () => {
    const mesures = BWV846_MESURES_1_8.split(/<measure number="\d+">/).slice(1);
    expect(mesures).toHaveLength(8);
    // Contenu du <harmony> écrit sur une seule ligne (pas de retour à la ligne) :
    // pas besoin du flag /s (dotAll), non supporté par la cible TS de ce projet.
    const attendus = [
      /<root-step>C<\/root-step>.*kind text="">major/,
      /<root-step>D<\/root-step>.*kind text="m7">minor-seventh.*bass-step>C/,
      /<root-step>G<\/root-step>.*kind text="7">dominant.*bass-step>B/,
      /<root-step>C<\/root-step>.*kind text="">major/,
      /<root-step>A<\/root-step>.*kind text="m">minor.*bass-step>C/,
      /<root-step>D<\/root-step>.*kind text="7">dominant.*bass-step>C/,
      /<root-step>G<\/root-step>.*kind text="">major.*bass-step>B/,
      /<root-step>C<\/root-step>.*kind text="maj7">major-seventh.*bass-step>B/,
    ];
    mesures.forEach((m, i) => expect(m).toMatch(attendus[i]));
  });

  it("chaque note écrite (hors silences) porte la couleur de fonction de sa mesure", () => {
    const BLEU = "#1565C0", ORANGE = "#E65100", ROUGE = "#C62828";
    const couleurAttendue: Record<number, string> = {
      1: BLEU, 2: ORANGE, 3: BLEU, 4: BLEU, 5: BLEU, 6: ROUGE, 7: ROUGE, 8: BLEU,
    };
    const mesures = BWV846_MESURES_1_8.split(/<measure number="(\d+)">/).slice(1);
    // split avec groupe capturant : [numero1, corps1, numero2, corps2, ...]
    for (let i = 0; i < mesures.length; i += 2) {
      const numero = Number(mesures[i]);
      const corps = mesures[i + 1];
      const notesEcrites = [...corps.matchAll(/<note\b[^>]*>[\s\S]*?<\/note>/g)]
        .filter((m) => !/<rest\s*\/>/.test(m[0]));
      expect(notesEcrites.length).toBeGreaterThan(0);
      for (const n of notesEcrites) {
        expect(n[0]).toContain(`color="${couleurAttendue[numero]}"`);
      }
    }
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

  it("Verovio rend bien les couleurs par fonction et les symboles d'accords", () => {
    tk.loadData(BWV846_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    // 18 attaques notées × 5 mesures bleues (1,3,4,5,8) = 90 ; × 1 mesure orange (2) = 18 ;
    // × 2 mesures rouges (6,7) = 36.
    expect([...svg.matchAll(/fill="#1565C0"/g)]).toHaveLength(5 * 18);
    expect([...svg.matchAll(/fill="#E65100"/g)]).toHaveLength(1 * 18);
    expect([...svg.matchAll(/fill="#C62828"/g)]).toHaveLength(2 * 18);
    // Les 8 symboles d'accords apparaissent bien comme texte au-dessus de la portée.
    for (const symbole of ["C", "Dm7/C", "G7/B", "Am/C", "D7/C", "G/B", "Cmaj7/B"]) {
      expect(svg).toContain(`>${symbole}<`);
    }
  });
});
