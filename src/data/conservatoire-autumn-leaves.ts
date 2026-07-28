import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-autumn-leaves.ts
 * Harmonia — Extrait (10 mesures) d'« Autumn Leaves » (Joseph Kosma, 1945),
 * pour la section « conservatoire » du cours 15 (niveau 2 — les
 * progressions jazz avancées).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « autum-leaves-joseph-koshma.musicxml », source
 * musescore.com/user/32589767/scores/12099418) — jamais reconstruit à la
 * main, cf. feedback-partitions-verbatim. Ré mineur/Fa majeur ? NON : Sol
 * mineur (fifths=-2 = Sib majeur/Sol mineur), 4/4. Avec <harmony> et
 * <lyric> (chiffrage romain, référencé en SOL MINEUR = degré "I" à la
 * mesure 8) portés directement sous la portée.
 *
 * `<sound tempo="120">` ajouté à la mesure 1 (absent du fichier d'origine,
 * aucune indication de swing non plus) — tempo « medium swing » choisi
 * délibérément pour un standard de ce tempo (pas 90, qui sonnerait trop
 * lent pour ce style) ; cf. project_playback_tempo_desync.
 *
 * Structure vérifiée : les 10 mesures couvrent l'intégralité de la célèbre
 * marche descendante en quintes d'« Autumn Leaves » (Cm7-F7-Bbmaj7-Ebmaj7-
 * [ii°/V7alt]-D7-Gm, IV-VII-III-VI-ii°-V-i en Sol mineur) PLUS le turnaround
 * (V7/IV) qui referme le cycle sur un nouveau Cm7 (mesure 10 = mesure 2) —
 * Dany a délibérément dépassé les 8 mesures habituelles pour montrer la
 * boucle complète. Cette version REHARMONISE 2 fois la grille "manuel" :
 *  - mesure 4 : un Mi7 chromatique (chiffré "subV7/VI", substitut
 *    tritonique de Sib7=V7/VI) est INSÉRÉ entre Sibmaj7 (III) et Mibmaj7
 *    (VI), absent de la grille la plus courante ;
 *  - mesure 6 : le ii° diatonique attendu (Lam7b5) est remplacé par un
 *    La7 altéré, chiffré "V7/V" (dominante secondaire du degré V) — un
 *    changement de FAMILLE fonctionnelle (prédominant mineur → dominante
 *    secondaire), pas juste une couleur.
 *
 * ANOMALIE REPÉRÉE, signalée à Dany plutôt que corrigée silencieusement
 * (fichier verbatim, jamais modifié sans son accord) : à la mesure 4, la
 * basse écrite sous le chiffrage « subV7/VI » est Mib2 (mi bémol), alors
 * que la balise <harmony> juste au-dessus indique bien "E" SANS altération
 * (Mi7, cohérent avec le chiffrage et avec la théorie — Mi7 est le vrai
 * substitut tritonique de Sib7). Le "nom" de la pastille suit la balise
 * <harmony> (Mi7, la source la plus fiable), pas la hauteur isolée de la
 * basse — possible faute de frappe dans le fichier source (Mib au lieu de
 * Mi), à vérifier/corriger par Dany dans son fichier si c'est effectivement
 * une erreur d'engraving.
 */
export const AUTUMN_LEAVES_MESURES_1_10 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Autum Leaves</work-title>
    </work>
  <identification>
    <creator type="composer">Compositor / arreglista</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/32589767/scores/12099418</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2023-09-06</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      <miscellaneous-field name="subtitle">Subtítulo</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1584</page-height>
      <page-width>1224</page-width>
      <page-margins type="even">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">3</line-width>
      <line-width type="heavy barline">6</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">2</line-width>
      <line-width type="extend">3</line-width>
      <line-width type="leger">2</line-width>
      <line-width type="pedal">2</line-width>
      <line-width type="octave shift">2</line-width>
      <line-width type="slur middle">2.5</line-width>
      <line-width type="slur tip">1.2</line-width>
      <line-width type="staff">1</line-width>
      <line-width type="stem">2</line-width>
      <line-width type="tie middle">2.5</line-width>
      <line-width type="tie tip">1.2</line-width>
      <line-width type="tuplet bracket">2</line-width>
      <line-width type="wedge">2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="MuseJazz"/>
    <word-font font-family="MuseJazz Text" font-size="10"/>
    <lyric-font font-family="MuseJazz Text" font-size="11"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="611.999614" default-y="1527.306094" justify="center" valign="top" font-size="28">Autum Leaves</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="611.999614" default-y="1470.613216" justify="center" valign="top" font-size="14">Joseph Kosma</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1167.306321" default-y="1427.306094" justify="right" valign="bottom" font-size="12">Performed by Daeyoun Kim</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
      <part-abbreviation>Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="226.37">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>6</divisions>
        <key>
          <fifths>-2</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <staves>2</staves>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no">
            <beat-unit>quarter</beat-unit>
            <per-minute>120</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="123.74" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="190.16" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>9</duration>
        </backup>
      <note default-x="123.74" default-y="-125">
        <rest/>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="139.6" default-y="-120"/>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="135.14">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.52" default-y="-30">
        <rest/>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="78.24" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="96.29" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.24" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="96.29" default-y="-25"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.52" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.38" default-y="-59.44" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV7</text>
          </lyric>
        </note>
      <note default-x="45.73" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="78.24" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="96.29" default-y="-90"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="256.04">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="7">dominant</kind>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="13.05" default-y="-50">
        <grace slash="yes"/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="32.37" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="32.37" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="32.37" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.36" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="80.36" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="80.36" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="120.21" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="120.21" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="120.21" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="153.42" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="186.63" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="219.83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="32.37" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.58" default-y="-59.44" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/III</text>
          </lyric>
        </note>
      <note default-x="65.58" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.24" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="119.51" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="4" width="221.68">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="16.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.44" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.44" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.42" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="97.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="130.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>12</duration>
        </forward>
      <note default-x="130.84" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="178.83" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.44" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.38" default-y="-59.44" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IIImaj7</text>
          </lyric>
        </note>
      <note default-x="49.65" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="66.3" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.84" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.58" default-y="-59.44" relative-y="-30">
          <syllabic>single</syllabic>
          <text>subV7/VI</text>
          </lyric>
        </note>
      <note default-x="164.05" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="180.71" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="221.38">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="maj9">major-ninth</kind>
        </harmony>
      <note default-x="26.08" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="38.63" default-y="-65">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="26.08" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="74.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="107.8" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="133.31" default-y="-35">
        <grace slash="yes"/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.97" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="24.26" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <staff>2</staff>
        <lyric number="1" default-x="8.86" default-y="-59.44" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VImaj7</text>
          </lyric>
        </note>
      <note default-x="24.26" default-y="-135">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="339.67">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>301.25</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7" parentheses-degrees="yes">dominant</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>5</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>alter</degree-type>
          </degree>
        </harmony>
      <note default-x="101.43" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="103.95" default-y="-40">
        <rest/>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="128.55" default-y="-35">
        <grace slash="yes"/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.36" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="198.05" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="198.05" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="240.74" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="no"/>
          </notations>
        </note>
      <note default-x="240.74" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="272.72" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="304.7" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="103.95" default-y="-105">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="155.36" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.35" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="103.95" default-y="-145">
        <rest/>
        <duration>3</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="6.58" default-y="-5.56" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/V</text>
          </lyric>
        </note>
      <note default-x="139.53" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start"/>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="156.18" default-y="-140"/>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="197.35" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="7" width="226.4">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="94">suspended-fourth</kind>
        <degree>
          <degree-value>7</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="26.78" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.54" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.47" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no"/>
          </notations>
        </note>
      <note default-x="159.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="191.42" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="26.08" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="44.13" default-y="-55"/>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>18</duration>
        </backup>
      <note default-x="29.29" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.54" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>half</type>
        <dot placement="below" default-x="93.59" default-y="-120"/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="24.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="8.86" default-y="-45.56" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="40.45" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="243.21">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m6">minor-sixth</kind>
        <offset>6</offset>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        <degree>
          <degree-value>6</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <offset>12</offset>
        </harmony>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.52" default-y="-50">
        <rest/>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="83.67" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="119.25" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="154.82" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="154.82" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.51" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="197.51" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.52" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.58" default-y="-45.56" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="48.09" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="83.67" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.82" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.51" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="301.34">
      <note default-x="42.19" default-y="-10">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="84.88" default-y="-10">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="120.46" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.03" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="191.61" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="227.18" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="227.18" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.76" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="262.76" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7">dominant</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="39.67" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="39.67" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="39.67" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        <lyric number="1" default-x="9.1" default-y="-45.56" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/IV</text>
          </lyric>
        </note>
      <note default-x="23.47" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="39.67" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="1110.61">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>301.25</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="103.95" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.95" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.95" default-y="0">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="331.66" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no"/>
          </notations>
        </note>
      <note default-x="434" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="536.34" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="638.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="866.4" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="866.4" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>12</duration>
        </forward>
      <note default-x="637.98" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="103.95" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.38" default-y="-52.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV7</text>
          </lyric>
        </note>
      <note default-x="217.81" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="331.66" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="638.68" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="752.54" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="866.4" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="980.26" default-y="-125">
        <rest/>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degré/fonction) — transcrite depuis le
 * chiffrage <harmony>/<lyric> déjà écrit par Dany dans le fichier, EN SOL
 * MINEUR (degré "I" chiffré par Dany à la mesure 8). Pour les mesures à
 * plusieurs harmonies, "nom"/"degre" reprennent le PREMIER accord (même
 * convention que pour les extraits précédents). Fonctions : familles
 * mineures classiques (i/III/VI = T, iv/ii° = SD, V/VII = D) ; les
 * dominantes secondaires (V7/III, subV7/VI, V7/V, V7/IV) sont marquées
 * `dominanteSecondaire: true`.
 */
export const AUTUMN_LEAVES_ANALYSE: MesureAnalyse[] = [
  { numero: 2,  nom: "Dom9",    degre: "IV7",      fonction: "SD" },
  { numero: 3,  nom: "Fa7",     degre: "V7/III",   fonction: "D", dominanteSecondaire: true },
  { numero: 4,  nom: "SibMaj7", degre: "IIImaj7",  fonction: "T" },
  { numero: 5,  nom: "MibMaj9", degre: "VImaj7",   fonction: "T" },
  { numero: 6,  nom: "La7",     degre: "V7/V",     fonction: "D", dominanteSecondaire: true },
  { numero: 7,  nom: "Résus4",  degre: "V7",       fonction: "D" },
  { numero: 8,  nom: "Solm7",   degre: "I",        fonction: "T" },
  { numero: 9,  nom: "Sol7",    degre: "V7/IV",    fonction: "D", dominanteSecondaire: true },
  { numero: 10, nom: "Dom7",    degre: "IV7",      fonction: "SD" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée note à note (voix/durées/liaisons)
 * contre le MusicXML ci-dessus, à partir d'un brouillon très détaillé fourni
 * par Dany. Ce brouillon est globalement solide (voicings d'altération de la
 * mesure 6 recalculés et confirmés à 100 %, résolution 4-3 de la mesure 7
 * confirmée), mais contient PLUSIEURS erreurs — retour à la fréquence
 * habituelle des pièces jazz de ce chantier (So What/ATTYA/Satin Doll),
 * après 3 brouillons sans aucune erreur (Chaconne, BWV772, Gymnopédie) :
 *
 *  1. Mesure 1 : le brouillon inverse les deux lectures bitonales de
 *     l'anacrouse (Sol-La-Sib). Il écrit « 1-2-3 de Sib ? ou 4-5-6 de Sol
 *     mineur » — les DEUX propositions sont fausses pour ces notes précises.
 *     Sol-La-Sib est en réalité 1̂-2̂-3̂ de SOL MINEUR (tonique-2nd-tierce
 *     mineure) ou, vu depuis Sib majeur, 6̂-7̂-1̂ (sus-sensible-tonique).
 *  2. Mesure 2 : le brouillon affirme que « le chiffrage «m7» du fichier est
 *     correct mais en-deçà du voicing réel ». Faux : la balise <harmony> du
 *     fichier dit déjà littéralement "m9" (minor-ninth), pas "m7" — elle
 *     correspond exactement au voicing réel (Cm9). Seul le <lyric> chiffré
 *     en romain dit "IV7" (sans préciser la 9e) ; il ne faut pas confondre
 *     ce chiffre romain simplifié avec le symbole d'accord, qui est déjà
 *     exact.
 *  3. Mesure 4 : la ligne de basse entière sous "subV7/VI" est donnée comme
 *     « Fa → Mib → Ré → Mib » — la note finale « Mib » est inventée : la
 *     basse réelle sur toute la mesure est Sib2-Fa3-Mib2-Ré3 (4 hauteurs
 *     différentes), qui s'arrête sur RÉ, pas un retour au Mib.
 *  4. Mesures 8 ET 9 : le brouillon affirme deux « erreurs de transcription »
 *     à corriger (un « GM7 » à la mesure 8, un « B°7 » à la mesure 9) — AUCUNE
 *     des deux n'existe dans le fichier. La mesure 8 est déjà chiffrée
 *     Gm7→Gm6→Gm(6b) (3 balises <harmony> successives, toutes mineures,
 *     kind="m7"/"m6"/"m"), exactement la lecture que le brouillon réclame.
 *     La mesure 9 est déjà chiffrée G7(add b9) avec le romain "V7/IV" (pas
 *     "B°7" nulle part). Le fichier de Dany n'a besoin d'AUCUNE correction
 *     ici — c'est le brouillon qui décrit une erreur qui n'existe pas.
 *  5. Mesure 10 : l'affirmation que le Si♮ final de la basse approche « la
 *     tierce du F7 à venir » est fausse (la tierce de Fa7 est La, pas Sib) —
 *     retirée, remplacée par une description du mouvement chromatique seul,
 *     sans lui prêter une cible qui n'est pas vérifiable sur cet extrait de
 *     10 mesures (coupé avant la mesure suivante).
 *
 * Le titre du fichier source porte bien « Autum Leaves » (coquille, 1 "n"),
 * comme relevé par Dany — cf. commentaire d'en-tête de ce fichier.
 */
export const AUTUMN_LEAVES_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Sol mineur, avec son relatif Si♭ majeur en permanence à l'horizon — le principe même de la " +
    "grille d'« Autumn Leaves », qui boucle entre les deux pôles par un enchaînement de quintes " +
    "descendantes (Do→Fa→Si♭→Mi♭→La→Ré→Sol). Dans cet arrangement, presque chaque accord de la " +
    "marche est en fait une <strong>dominante secondaire</strong> vers le degré suivant.",
  metrique: "4/4. Tempo (120, medium swing) et titre corrigé (« Autumn », coquille « Autum » dans le fichier source) ajoutés/signalés par choix éditorial.",
  forme:
    "10 mesures = une anacrouse d'un temps (mesure 1) + la section A complète du standard (mesures " +
    "2-9, 8 mesures) + le début de sa reprise (mesure 10) — le motif de l'anacrouse revient " +
    "d'ailleurs à la fin de la mesure 9, confirmant que la forme boucle sur elle-même.",
  sections: [
    {
      label: "Mesure 1",
      titre: "L'anacrouse, et son ambiguïté bitonale",
      chiffrage: "(sans harmonie)",
      fonctions: "—",
      texte:
        "Trois croches conjointes ascendantes, Sol-La-Sib, main gauche muette. Une figure à double " +
        "lecture : <strong>1̂-2̂-3̂ de Sol mineur</strong> (tonique, 2nd degré, tierce mineure) ou, " +
        "vue depuis le pôle relatif, <strong>6̂-7̂-1̂ de Si♭ majeur</strong> (sus-dominante, " +
        "sensible, tonique) — l'ambiguïté des deux tonalités jumelles posée dès la levée, avant " +
        "même le premier accord.",
    },
    {
      label: "Mesures 2-3",
      titre: "Cm9, puis F7 : la marche démarre, la 13e se durcit",
      chiffrage: "Cm9 – F7(♭13)",
      fonctions: "iv7 [ii7] – V7/III",
      texte:
        "La balise d'accord du fichier dit déjà « m9 », pas « m7 » : Ré4 (9e) est bien tenu à la " +
        "basse sous Mi♭4-Si♭4 plaqués, sous le Mi♭5 de la mélodie — un <strong>Cm9</strong> complet " +
        "dès le symbole écrit, seul le chiffre romain simplifié (« IV7 ») ne précise pas la 9e. À " +
        "la mesure 3, la voix interne descend Ré4→Ré♭4 (<strong>13e→♭13</strong>) pendant que le " +
        "La3 (tierce) reste tenu — un F7 qui se durcit en cours de mesure, préparé par une " +
        "acciaccatura chromatique (Do♯4) en tête.",
    },
    {
      label: "Mesure 4",
      titre: "IIImaj7, puis le premier geste d'arrangeur",
      chiffrage: "Si♭Maj7 – Mi7",
      fonctions: "IIImaj7 – subV7/VI",
      texte:
        "Si♭maj7 traite sa 7e majeure (La) en couleur stable, exactement comme chez Satie (cours " +
        "précédent). Puis, absent de la grille la plus courante : un <strong>Mi7 sans " +
        "fondamentale</strong> (Sol♯3=tierce, Fa♯3=9e, Ré=7e), substitut tritonique de Si♭7 " +
        "(V7/VI). La basse parcourt Si♭2-Fa3-Mi♭2-Ré3 sur la mesure entière — quatre hauteurs " +
        "distinctes qui s'arrêtent sur Ré, sans revenir au Mi♭.",
    },
    {
      label: "Mesures 5-6",
      titre: "VImaj7 satiesque, puis le sommet de tension",
      chiffrage: "Mi♭Maj9 – La7(♯9,♭13,♭5)",
      fonctions: "VImaj7 – V7/V",
      texte:
        "Mi♭maj9 resserré (Fa3=9e, Sol3=3ce, Ré4=7e majeure) prolonge la couleur immobile. La " +
        "mesure 6 remplace le ii° diatonique attendu (Lam7♭5) par sa version dominantisée : un " +
        "<strong>La7 entièrement altéré</strong> — Do♮5 tenu (♯9), Fa4 (♭13, après un Fa♯ " +
        "chromatique), Mi♭4 (♭5) dans le triolet, et Sol♯3→Sol♮3 à la basse qui frotte contre la " +
        "7e avant de s'y ranger. Le sommet de tension de tout l'extrait, à sa juste place avant la " +
        "dominante principale.",
    },
    {
      label: "Mesure 7",
      titre: "V7, la résolution 4-3 croisée avec la ♭9",
      chiffrage: "Ré9sus4 – Ré7(♭9)",
      fonctions: "V7",
      texte:
        "Construction en deux temps : d'abord un <strong>D9sus4</strong> complet (Ré-Sol-La-Do-Mi, " +
        "quarte-quinte-7e-9e), puis la suspension se résout (Sol3→Fa♯3, mouvement 4-3) exactement " +
        "au moment où la mélodie pose Mi♭4 — la <strong>♭9</strong> — tenue en blanche : " +
        "résolution et nouvelle dissonance échangées dans le même geste.",
    },
    {
      label: "Mesures 8-10",
      titre: "Retour, turnaround, et reprise coupée",
      chiffrage: "Gm7→Gm6→Gm(♭6) – G7(♭9) – Cm7",
      fonctions: "i – V7/IV – iv7",
      texte:
        "La mesure 8 est déjà chiffrée <strong>Gm7→Gm6→Gm(♭6)</strong> par Dany (3 accords " +
        "successifs) — un <em>line cliché</em> (Fa→Mi♮→Mi♭, 7e-6te-♭6te) sur tonique mineure " +
        "statique, exactement la lecture attendue : rien à corriger ici. La mesure 9 est déjà " +
        "chiffrée <strong>G7(add ♭9)</strong>, romain « V7/IV » — Sol-Si-Ré-Fa-La♭ au complet " +
        "entre les deux mains, la dominante secondaire qui prépare le retour de Cm7 pendant que la " +
        "mélodie relance le motif de l'anacrouse. La mesure 10 rouvre la boucle : Cm7 avec la 11e " +
        "(Fa5) au sommet du voicing, triolet arpégé ascendant, basse qui s'arrête sur un Si♮ " +
        "chromatique — l'extrait est coupé avant que sa cible ne se révèle.",
    },
  ],
  synthese: [
    {
      titre: "Deux « fautes » signalées qui n'en sont pas",
      texte:
        "Vérification faite : le fichier ne contient ni « GM7 » (mesure 8) ni « B°7 » (mesure 9) — " +
        "Dany avait déjà chiffré les deux correctement (Gm7/Gm6/Gm♭6, puis G7♭9 romain V7/IV). " +
        "Aucune correction à reporter sur ces deux mesures.",
    },
    {
      titre: "Presque chaque accord est une dominante secondaire",
      texte:
        "V7/III, subV7/VI, V7/V, V7/IV : la marche descendante d'« Autumn Leaves » enchaîne les " +
        "tonicisations de passage plutôt que les degrés diatoniques nus — le vocabulaire même du " +
        "cours 15.",
    },
    {
      titre: "La dissonance comme matériau par défaut",
      texte:
        "Après Bach (dissonance = événement contrapuntique) et Satie (dissonance = couleur " +
        "immobile), cet arrangement montre un troisième régime : 9e, 13e et ♭9 ne sont ni " +
        "préparées ni résolues au sens classique — elles sont la norme de l'accord, gérées par " +
        "degrés d'altération (13→♭13, sus4→♭9, altéré complet) le long d'un cycle de quintes que " +
        "Bach aurait reconnu.",
    },
  ],
};
