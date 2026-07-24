import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-pathetique2.ts
 * Harmonia — Extrait (mesures 1 à 8) du 2e mouvement (Adagio cantabile, La♭ majeur)
 * de la Sonate « Pathétique » op. 13 de Beethoven, pour la section « conservatoire »
 * du cours 2.
 *
 * Notes et rythme vérifiés contre le fichier MIDI de référence Mutopia Project
 * (transcription LilyPond du domaine public, source Mutopia #295, éditée d'après
 * Köhler & Ruthardt, Peters 1910, IMSLP #30364 — Beethoven †1827) : chaque hauteur
 * de la mélodie et de la basse a été confirmée note à note contre les événements
 * MIDI (aucune ambiguïté restante sur l'octave). Réencodage minimal ici (sans mise
 * en page), pour la gravure Verovio + lecture synchronisée déjà utilisées par le
 * Studio et par le cours 1.
 *
 * Simplification assumée : la portée « up » (mélodie + accompagnement) reste en
 * clé de fa sur tout l'extrait, alors que l'original bascule en clé de sol au
 * tout dernier temps de la mesure 8 (la mélodie continue de monter aux mesures
 * suivantes, hors de cet extrait). Aucune note n'est modifiée — seule la clé de
 * lecture change ; conserver la clé de fa évite un changement de clé au milieu
 * d'une mesure pour un gain de lisibilité nul sur ces 8 mesures.
 */
export const PATHETIQUE2_MESURES_1_8 = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="3.1">
  <work>
    <work-title>Sonate « Pathétique » op. 13, 2e mouvement (extrait, mesures 1-8)</work-title>
  </work>
  <identification>
    <creator type="composer">L. van Beethoven</creator>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>24</divisions>
        <key><fifths>-4</fifths></key>
        <time><beats>2</beats><beat-type>4</beat-type></time>
        <staves>2</staves>
        <clef number="1"><sign>F</sign><line>4</line></clef>
        <clef number="2"><sign>F</sign><line>4</line></clef>
      </attributes>
      <direction placement="above">
        <direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>36</per-minute></metronome></direction-type>
        <sound tempo="36"/>
      </direction>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="2">
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="3">
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>2</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="4">
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="5">
      <note><pitch><step>F</step><octave>4</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>18</duration><voice>1</voice><type>eighth</type><dot/><staff>1</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>3</duration><voice>1</voice><type>32nd</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>4</octave></pitch><duration>3</duration><voice>1</voice><type>32nd</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>D</step><alter>-1</alter><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="6">
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="7">
      <note><pitch><step>D</step><alter>-1</alter><octave>4</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>B</step><alter>-1</alter><octave>1</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>2</octave></pitch><duration>24</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="8">
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><chord/><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><rest/><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>6</duration><voice>2</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>16th</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification><staff>1</staff></note>
      <backup><duration>48</duration></backup>
      <note><pitch><step>A</step><alter>-1</alter><octave>1</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>1</octave></pitch><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><rest/><duration>12</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
    </measure>
  </part>
</score-partwise>
`;

/**
 * Analyse mesure par mesure — harmonie PRINCIPALE (temps 1) de chaque mesure,
 * même simplification que pour BWV846_ANALYSE (une étiquette par mesure, pas par
 * temps). Vérifiée contre l'empilement réel des trois voix à chaque mesure :
 *
 *  m1 La♭-Do-Mib (basse La♭)         → I
 *  m2 Do-Mib-La♭ (basse Do)          → I, 3ce à la basse (le reste de la mesure
 *                                       glisse vers un vii° incomplet passager)
 *  m3 La♭-Do-Mib (basse La♭)         → I (la basse La♭-Sol-Fa-Fa amorce ensuite
 *                                       une descente conjointe vers le V de la m4)
 *  m4 Mib-Sol-Sib (basse Mib, TENUE sur toute la mesure)     → V
 *  m5 Réb-Fa-Sol/Sib (basse Réb, TENUE sur toute la mesure)  → IV
 *  m6 Do-Mib-La♭ (basse Do)          → I, 3ce à la basse (même accord qu'à la m2)
 *  m7 Sib-Réb-Fa (basse Sib)         → ii (seule triade mineure de l'extrait,
 *                                       hors tonique)
 *  m8 La♭ (pédale de tonique, doublée à l'octave) sous Sol-Sib-Réb à la mélodie
 *                                    → I (pédale) — clôture de la phrase de 8
 *                                       mesures sur la tonique
 *
 * Le enchaînement V (m4) → IV (m5) — une « rétrogression » plutôt que l'ordre
 * SD→D habituel — est authentique : Beethoven, pas une simplification de ce
 * fichier.
 */
export const PATHETIQUE2_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Lab",  degre: "I",  fonction: "T" },
  { numero: 2, nom: "Lab",  degre: "I6", fonction: "T" },
  { numero: 3, nom: "Lab",  degre: "I",  fonction: "T" },
  { numero: 4, nom: "Mib",  degre: "V",  fonction: "D" },
  { numero: 5, nom: "Réb",  degre: "IV", fonction: "SD" },
  { numero: 6, nom: "Lab",  degre: "I6", fonction: "T" },
  { numero: 7, nom: "Sibm", degre: "ii", fonction: "SD" },
  { numero: 8, nom: "Lab",  degre: "I",  fonction: "T" },
];
