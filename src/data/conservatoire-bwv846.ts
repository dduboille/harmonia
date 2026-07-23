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
 */
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
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="2">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="3">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="4">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="5">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="6">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="7">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>D</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
    </measure>
    <measure number="8">
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><rest/><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>E</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <note><pitch><step>C</step><octave>5</octave></pitch><duration>1</duration><voice>1</voice><type>16th</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <note><rest/><duration>1</duration><voice>5</voice><type>16th</type><staff>2</staff></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>3</duration><tie type="start"/><voice>5</voice><type>eighth</type><dot/><staff>2</staff><notations><tied type="start"/></notations></note>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><tie type="stop"/><voice>5</voice><type>quarter</type><staff>2</staff><notations><tied type="stop"/></notations></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
      <note><pitch><step>B</step><octave>3</octave></pitch><duration>8</duration><voice>6</voice><type>half</type><staff>2</staff></note>
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
