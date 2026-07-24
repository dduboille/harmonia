import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-chopin-op9n2.ts
 * Harmonia — Extrait (levée + mesures 1 à 4) du Nocturne en Mib majeur op.9 n°2
 * de Chopin, pour la section « conservatoire » du cours 6.
 *
 * Notes et rythme vérifiés contre le fichier MIDI de référence Mutopia Project
 * (rendu directement depuis la même source LilyPond que la partition/PDF publiés
 * par Mutopia). La source LilyPond elle-même est une édition très ornementée
 * (doigtés, nuances, ornements complexes) qu'il aurait été risqué de retranscrire
 * à la main par calcul d'octaves relatives ; le MIDI donne les hauteurs ABSOLUES
 * directement, sans ce risque. Regroupement mesure par mesure fait par script
 * (mesures de 12/8, levée d'une croche), pas à la main, pour éviter une erreur
 * d'arithmétique sur un mètre composé.
 *
 * Extrait limité à 4 mesures (comme K.550) : la main gauche joue des accords
 * plaqués/arpégés (harmonies chromatiques, 7ᵉ de dominante secondaire dès la
 * mesure 2) — fidèle à la source, mais plus dense à vérifier mesure par mesure
 * qu'une pièce purement diatonique.
 */
export const CHOPIN_OP9_N2_MESURES_1_4 = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="3.1">
  <work>
    <work-title>Nocturne en Mib majeur op. 9 n°2 (extrait, mesures 1-4)</work-title>
  </work>
  <identification>
    <creator type="composer">F. Chopin</creator>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="0" implicit="yes">
      <attributes>
        <divisions>24</divisions>
        <key><fifths>-3</fifths></key>
        <time><beats>12</beats><beat-type>8</beat-type></time>
        <staves>2</staves>
        <clef number="1"><sign>G</sign><line>2</line></clef>
        <clef number="2"><sign>F</sign><line>4</line></clef>
      </attributes>
      <direction placement="above">
        <direction-type><words>Andante</words></direction-type>
        <sound tempo="66"/>
      </direction>
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>12</duration></backup>
      <note><rest/><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="1">
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>half</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>144</duration></backup>
      <note><pitch><step>E</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>D</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
    </measure>
    <measure number="2">
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>6</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>5</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>144</duration></backup>
      <note><pitch><step>C</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>F</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>F</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>F</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
    </measure>
    <measure number="3">
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>24</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <backup><duration>144</duration></backup>
      <note><pitch><step>B</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>A</step><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
    </measure>
    <measure number="4">
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>6</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>6</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>6</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>36</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><rest/><duration>24</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>144</duration></backup>
      <note><pitch><step>B</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>1</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>2</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>eighth</type><chord/><staff>2</staff></note>
    </measure>
  </part>
</score-partwise>
`;

/**
 * Harmonie : I (m1, tonique) — V7/ii (m2, dominante secondaire vers fa mineur,
 * degré II de mib majeur — d'où l'étiquette « dominante secondaire ») — V7 (m3
 * et m4, la mesure 4 reprenant la même harmonie avec un retard de quarte à la
 * basse, Mib résolvant vers Ré). Analyse fondée sur l'empilement réel des deux
 * mains à chaque temps fort (voir commentaire du fichier de données).
 */
export const CHOPIN_OP9_N2_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Mib",  degre: "I",  fonction: "T" },
  { numero: 2, nom: "Do7",  degre: "V7/ii", fonction: "D", dominanteSecondaire: true },
  { numero: 3, nom: "Sib7", degre: "V7", fonction: "D" },
  { numero: 4, nom: "Sib7", degre: "V7", fonction: "D" },
];
