import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { BWV846_MESURES_1_8 } from "./conservatoire-bwv846";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, voir commentaire du fichier de données) : 8 mesures,
// 3 voix (1 = main droite, 2 = pédale de ténor, 5 = basse), et les hauteurs qui
// portent l'analyse harmonique citée (dont le fa# de la mesure 6, seule altération
// de l'extrait).
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

  it("basse (voix 5) : do4 tenu (m.1-2, 4-6), puis si3 (m.3, 7-8)", () => {
    const score = parseMusicXML(BWV846_MESURES_1_8);
    const basseParMesure = (m: number) =>
      score.notes.find((n) => n.measure === m && n.voice === "5");
    expect(basseParMesure(1)?.step).toBe("C");
    expect(basseParMesure(2)?.step).toBe("C");
    expect(basseParMesure(3)?.step).toBe("B");
    expect(basseParMesure(4)?.step).toBe("C");
    expect(basseParMesure(6)?.step).toBe("C");
    expect(basseParMesure(7)?.step).toBe("B");
    expect(basseParMesure(8)?.step).toBe("B");
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) correspondant à son analyse", () => {
    const mesures = BWV846_MESURES_1_8.split(/<measure number="\d+"[^>]*>/).slice(1);
    expect(mesures).toHaveLength(8);
    // Contenu du <harmony> écrit sur une seule ligne (pas de retour à la ligne) :
    // pas besoin du flag /s (dotAll), non supporté par la cible TS de ce projet.
    const attendus = [
      /<root-step>C<\/root-step>[\s\S]*?<kind>major<\/kind>/,
      /<root-step>D<\/root-step>[\s\S]*?kind text="m7">minor-seventh[\s\S]*?bass-step>C/,
      /<root-step>G<\/root-step>[\s\S]*?kind text="7">dominant[\s\S]*?bass-step>B/,
      /<root-step>C<\/root-step>[\s\S]*?<kind>major<\/kind>/,
      /<root-step>A<\/root-step>[\s\S]*?kind text="m">minor[\s\S]*?bass-step>C/,
      /<root-step>D<\/root-step>[\s\S]*?kind text="7">dominant[\s\S]*?bass-step>C/,
      /<root-step>G<\/root-step>[\s\S]*?<kind>major<\/kind>[\s\S]*?bass-step>B/,
      /<root-step>C<\/root-step>[\s\S]*?kind text="maj7">major-seventh[\s\S]*?bass-step>B/,
    ];
    mesures.forEach((m, i) => expect(m).toMatch(attendus[i]));
  });

  it("28 têtes de note colorées par fonction (13 bleu, 4 orange, 11 rouge) — pas uniforme", () => {
    // Le fichier de Dany ne colore QUE certaines notes-repères (1re ou 2e note de
    // chaque groupe de ligature à la main droite, note d'attaque du ténor, tête de
    // la basse), pas l'intégralité de chaque mesure.
    const bleu = [...BWV846_MESURES_1_8.matchAll(/notehead color="#0000FF"/g)];
    const orange = [...BWV846_MESURES_1_8.matchAll(/notehead color="#FFAA00"/g)];
    const rouge = [...BWV846_MESURES_1_8.matchAll(/notehead color="#FF0000"/g)];
    expect(bleu).toHaveLength(13);
    expect(orange).toHaveLength(4);
    expect(rouge).toHaveLength(11);
  });

  it("chaque mesure porte son chiffrage romain + fonction en parole (<lyric>) sous la basse", () => {
    const attendus = [
      "I(T)", "II2(SD)", "V6/5(T)", "I(T)", "VI6(T)", "V2/V(DS)", "V6(D)",
    ];
    for (const texte of attendus) {
      expect(BWV846_MESURES_1_8).toContain(`<text>${texte}</text>`);
    }
    // Mesure 8 : le chiffrage "I 2(T)" (3e renversement d'un accord de 7e) est
    // scindé en plusieurs <text> à cause d'un changement de police MuseScore.
    expect(BWV846_MESURES_1_8).toContain('<text font-family="FreeSerif">2(T)</text>');
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
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    // 8 mesures × (12 main droite + 4 attaques ténor + 2 basse) — la gravure dessine
    // les DEUX notes d'une liaison (contrairement à `parseMusicXML` qui les fusionne).
    expect(notes).toHaveLength(8 * 18);
  });

  it("respecte les groupes de ligature explicites de Dany (32 groupes = 4 par mesure)", () => {
    tk.loadData(BWV846_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    // Chaque moitié de mesure grave 6 doubles-croches en DEUX groupes explicites
    // (2 notes puis 4 notes, cf. les <beam> du fichier source) — pas une ligature
    // continue de 6, ce que produisait le rendu automatique de Verovio auparavant.
    const groupes = [...svg.matchAll(/class="beam"/g)];
    expect(groupes).toHaveLength(8 * 4);
  });

  it("Verovio rend bien les couleurs par fonction (têtes de note)", () => {
    tk.loadData(BWV846_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    expect([...svg.matchAll(/fill="#0000FF"/gi)]).toHaveLength(13);
    expect([...svg.matchAll(/fill="#FFAA00"/gi)]).toHaveLength(4);
    expect([...svg.matchAll(/fill="#FF0000"/gi)]).toHaveLength(11);
  });

  it("Verovio rend les symboles d'accords et le chiffrage romain sous la basse", () => {
    tk.loadData(BWV846_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    for (const symbole of ["C", "Dm7/C", "G7/B", "Am/C", "D7/C", "G/B", "Cmaj7/B"]) {
      expect(svg).toContain(`>${symbole}<`);
    }
    expect(svg).toContain("V6/5(T)");
    expect(svg).toContain("V2/V(DS)");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), respecte la mise en page 3+3+2 de Dany", async () => {
    // BWV846_MESURES_1_8 porte des <print new-system="yes"> sur les mesures 4 et 7
    // (système de 3+3+2 mesures, comme sur le PDF de Dany) : VueConservatoire
    // détecte cette balise et bascule StudioScore sur breaks="encoded" plutôt que
    // "auto" — sinon Verovio recalcule ses propres sauts, indépendants de la mise
    // en page voulue (constaté : "5 mesures puis 3", pas 3+3+2 ni 4+4).
    expect(BWV846_MESURES_1_8).toContain("<print new-system");
    // Instance FRAÎCHE, et surtout MÊME ORDRE D'APPELS que StudioScore.tsx :
    // `setOptions` AVANT `loadData`. Dans l'autre ordre (constaté empiriquement,
    // cf. le commentaire de StudioScore.tsx), le tout premier calcul de mise en
    // page d'une instance neuve ignore les sauts "encoded" demandés et regravait
    // "5 mesures puis 3" au lieu de 3+3+2 — le bug réel rapporté par Dany.
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    // Largeur de conteneur réaliste (desktop/tablette) : au-delà de ~500px, le
    // groupement encodé est stable (vérifié empiriquement de 500 à 2000px).
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(BWV846_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme).toEqual([3, 3, 2]);
  });
});
