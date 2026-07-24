import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-bwv227.ts
 * Harmonia — Extrait (mesures 1 à 8) du 1er mouvement (choral d'ouverture, mi
 * mineur) du motet « Jesu, meine Freude » BWV 227 de J.S. Bach, pour la section
 * « conservatoire » du cours 4.
 *
 * Notes et rythme vérifiés contre une transcription MusicXML de référence hébergée
 * par CPDL/ChoralWiki (bibliothèque de musique chorale du domaine public), fichier
 * complet du motet (11 mouvements, 6 parties) — le 1er mouvement identifié sans
 * ambiguïté par les paroles portées mesure par mesure (« Freu-de », « mei-nes »,
 * « Wei-de » = « Jesu, meine Freude, meines Herzens Weide »). Quatre voix
 * distinctes (soprano/alto/ténor/basse), chacune sur sa propre partie dans le
 * fichier source — aucun calcul d'octave relative nécessaire ici (contrairement à
 * la Pathétique), les hauteurs sont directement absolues dans le fichier.
 *
 * Réencodage en partition « fermée » à 2 portées (soprano+alto en clé de sol,
 * ténor+basse en clé de fa) : convention standard des chorals de Bach dans les
 * recueils de référence (Riemenschneider, etc.), et cohérente avec le format
 * piano à 2 portées déjà utilisé pour les autres extraits du site.
 */
export const BWV227_MESURES_1_8 = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="3.1">
  <work>
    <work-title>Jesu, meine Freude BWV 227, choral d'ouverture (extrait, mesures 1-8)</work-title>
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
        <divisions>8</divisions>
        <key><fifths>1</fifths><mode>minor</mode></key>
        <time><beats>4</beats><beat-type>4</beat-type></time>
        <staves>2</staves>
        <clef number="1"><sign>G</sign><line>2</line></clef>
        <clef number="2"><sign>F</sign><line>4</line></clef>
      </attributes>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>12</duration><voice>4</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="2">
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>half</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><rest/><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><rest/><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><rest/><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>A</step><octave>2</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><rest/><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="3">
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>C</step><alter>1</alter><octave>5</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="4">
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>16</duration><voice>1</voice><type>half</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>12</duration><voice>3</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>12</duration><voice>4</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="5">
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>5</octave></pitch><duration>12</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>12</duration><voice>2</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="6">
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>24</duration><voice>1</voice><type>half</type><dot/><staff>1</staff></note>
      <note><rest/><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>24</duration><voice>2</voice><type>half</type><dot/><staff>1</staff></note>
      <note><rest/><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>24</duration><voice>3</voice><type>half</type><dot/><staff>2</staff></note>
      <note><rest/><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>24</duration><voice>4</voice><type>half</type><dot/><staff>2</staff></note>
      <note><rest/><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="7">
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>8</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>3</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>12</duration><voice>4</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
    </measure>
    <measure number="8">
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>half</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>12</duration><voice>1</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>8</duration><voice>2</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>12</duration><voice>2</voice><type>quarter</type><dot/><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>A</step><octave>3</octave></pitch><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>12</duration><voice>3</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>3</voice><type>eighth</type><staff>2</staff></note>
      <backup><duration>32</duration></backup>
      <note><pitch><step>A</step><octave>2</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>2</octave></pitch><duration>8</duration><voice>4</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>3</octave></pitch><duration>12</duration><voice>4</voice><type>quarter</type><dot/><staff>2</staff></note>
      <note><rest/><duration>4</duration><voice>4</voice><type>eighth</type><staff>2</staff></note>
    </measure>
  </part>
</score-partwise>
`;

/**
 * Analyse mesure par mesure — quatre voix réelles (SATB), donc la lecture verticale
 * est directe (contrairement à Pathétique où seule une lecture temps-fort a été
 * retenue). Point pédagogique fort pour ce cours (cadences) : la mesure 4 clôt la
 * 1re phrase sur V (demi-cadence), la mesure 6 sur i avec la fondamentale à la
 * BASSE ET au SOPRANO (mi5/mi3) précédée d'un authentique V7 (mesure 5) — la
 * définition manuelle même de la cadence parfaite, déjà énoncée dans ce cours
 * (« La cadence parfaite exige la fondamentale à la basse ET au soprano »).
 */
export const BWV227_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Mim",  degre: "i",  fonction: "T" },
  { numero: 2, nom: "Lam",  degre: "iv", fonction: "SD" },
  { numero: 3, nom: "Mim",  degre: "i",  fonction: "T" },
  { numero: 4, nom: "Si",   degre: "V",  fonction: "D" },
  { numero: 5, nom: "Si7",  degre: "V7", fonction: "D" },
  { numero: 6, nom: "Mim",  degre: "i",  fonction: "T" },
  { numero: 7, nom: "Mim",  degre: "i",  fonction: "T" },
  { numero: 8, nom: "Lam",  degre: "iv", fonction: "SD" },
];
