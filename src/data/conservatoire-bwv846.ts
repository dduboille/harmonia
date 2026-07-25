import type { Fonction } from "@/app/api/analyse-partition/route";

/**
 * data/conservatoire-bwv846.ts
 * Harmonia — Extrait (mesures 1 à 8) du Prélude en Do majeur BWV 846 de J.S. Bach
 * (Le Clavier bien tempéré, livre I), pour la section « conservatoire » du cours 1.
 *
 * Notes et rythme vérifiés contre une transcription MusicXML de référence de la
 * partition (œuvre du domaine public, Bach †1750 ; réencodage minimal ici, sans
 * mise en page ni béquilles de gravure, pour la gravure Verovio + lecture
 * synchronisée déjà utilisées par le Studio). Analyse harmonique des 8 mesures :
 * I — ii7 (3e renv.) — V7 (1er renv.) — I — vi (1er renv.) — V7/V (3e renv., d'où
 * le fa# de la mesure 6) — V (1er renv.) — IΔ7 (3e renv., basse commune avec la
 * mesure 7 : la sensible reste tenue au grave pendant que l'harmonie glisse de la
 * dominante vers une tonique enrichie).
 *
 * Présentation calée sur la maquette fournie par Dany (chiffrage + fonction sous
 * chaque mesure, symboles d'accords au-dessus, notes colorées par fonction
 * tonale) : chaque note porte un attribut MusicXML `color` (rendu par Verovio
 * comme couleur de tête de note), et chaque mesure porte un `<harmony>` (rendu
 * comme symbole d'accord au-dessus de la portée — vérifié directement sur
 * Verovio avant d'écrire tout le fichier). Couleurs PAR FONCTION, PAS les mêmes
 * que les badges T/SD/D de StudioAnalyse (vert/bleu/rouge) : ici bleu=tonique,
 * orange=sous-dominante, rouge=dominante, choix explicite de Dany pour cette
 * vue « partition annotée ». Fonction de la mesure 3 (V6/5) mise en ROUGE
 * (dominante), pas la couleur tonique que montrait la maquette source pour cette
 * mesure précise — un 7e de dominante est fonctionnellement une dominante par
 * définition ; à corriger dans l'autre sens si ce n'était pas une coquille.
 */
const BLEU_TONIQUE = "#1565C0";
const ORANGE_SOUS_DOMINANTE = "#E65100";
const ROUGE_DOMINANTE = "#C62828";

/** Harmonie de chaque mesure (couleur des notes + symbole d'accord affiché). */
const COULEUR_MESURE: Record<number, string> = {
  1: BLEU_TONIQUE,
  2: ORANGE_SOUS_DOMINANTE,
  3: ROUGE_DOMINANTE,
  4: BLEU_TONIQUE,
  5: BLEU_TONIQUE,
  6: ROUGE_DOMINANTE,
  7: ROUGE_DOMINANTE,
  8: BLEU_TONIQUE,
};

export const BWV846_MESURES_1_8 = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="3.1">
  <work>
    <work-title>Prélude en Do majeur, BWV 846 (extrait, mesures 1-8)</work-title>
  </work>
  <identification>
    <creator type="composer">J.S. Bach</creator>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>4</divisions>
        <key><fifths>0</fifths></key>
        <time><beats>4</beats><beat-type>4</beat-type></time>
        <staves>2</staves>
        <clef number="1"><sign>G</sign><line>2</line></clef>
        <clef number="2"><sign>F</sign><line>4</line></clef>
      </attributes>
      <direction placement="above">
        <direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>96</per-minute></metronome></direction-type>
        <sound tempo="96"/>
      </direction>
      <harmony><root><root-step>C</root-step></root><kind text="">major</kind></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[1]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="2">
      <harmony><root><root-step>D</root-step></root><kind text="m7">minor-seventh</kind><bass><bass-step>C</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[2]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="3">
      <harmony><root><root-step>G</root-step></root><kind text="7">dominant</kind><bass><bass-step>B</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[3]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="4">
      <harmony><root><root-step>C</root-step></root><kind text="">major</kind></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[4]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="5">
      <harmony><root><root-step>A</root-step></root><kind text="m">minor</kind><bass><bass-step>C</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[5]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="6">
      <harmony><root><root-step>D</root-step></root><kind text="7">dominant</kind><bass><bass-step>C</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[6]}"><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="7">
      <harmony><root><root-step>G</root-step></root><kind text="">major</kind><bass><bass-step>B</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[7]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="8">
      <harmony><root><root-step>C</root-step></root><kind text="maj7">major-seventh</kind><bass><bass-step>B</bass-step></bass></harmony>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note color="${COULEUR_MESURE[8]}"><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
  </part>
</score-partwise>
`;

export interface MesureAnalyse {
  numero: number;
  /** Nom d'accord affichable (convention `${rootFr}${quality}` du site, ex. "Rém7"). */
  nom: string;
  /** Chiffre romain + chiffrage figuré, MÊME convention que `harmonic-analysis.ts`
   *  (`figureOf`/`chiffrage`/`romanOfDegree`) : ii2 = 3e renv., V6/5 = 1er renv. d'une
   *  7e, vi6 = 1er renv. d'une triade, V2/V = dominante secondaire 3e renv. */
  degre: string;
  fonction: Fonction;
  /** Sort du diatonique (même badge que `CAT_STYLE.dominante_secondaire` du Studio). */
  dominanteSecondaire?: boolean;
}

/** Analyse mesure par mesure de `BWV846_MESURES_1_8` — voir le commentaire d'en-tête. */
export const BWV846_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Do",     degre: "I",    fonction: "T" },
  { numero: 2, nom: "Rém7",   degre: "ii2",  fonction: "SD" },
  { numero: 3, nom: "Sol7",   degre: "V6/5", fonction: "D" },
  { numero: 4, nom: "Do",     degre: "I",    fonction: "T" },
  { numero: 5, nom: "Lam",    degre: "vi6",  fonction: "T" },
  { numero: 6, nom: "Ré7",    degre: "V2/V", fonction: "D", dominanteSecondaire: true },
  { numero: 7, nom: "Sol",    degre: "V6",   fonction: "D" },
  { numero: 8, nom: "DoMaj7", degre: "IΔ2",  fonction: "T" },
];
