import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-giant-steps.ts
 * Harmonia — Giant Steps (Coltrane, 1959), arrangement piano en 7/4 de Jacob
 * Koller, INTÉGRAL (98 mesures), pour la section "conservatoire" du cours 32
 * (niveau 4 — extensions jazz avancées et réharmonisation).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "giant-steps-74-annote
 * .musicxml") — jamais reconstruit à la main, cf. feedback-partitions-
 * verbatim. Usage PRIVÉ (Coltrane et l'arrangeur restent protégés, mêmes
 * réserves que les autres extraits jazz de ce chantier — So What, Satin
 * Doll, Autumn Leaves, My Funny Valentine — embarqués selon la même
 * convention).
 *
 * Fichier SANS chiffrage préexistant (0 balise <harmony>) — les changes ont
 * été reconstitués par Dany depuis les notes réelles, puis annotés en
 * <direction><words>. Structure (confirmée mot pour mot dans le fichier,
 * via ses repères de rehearsal Intro/A/B/C/D/E/F/G) : intro (m.1-8) — tête
 * (m.9-16, chiffrage identique au brouillon fourni, agrégat par agrégat) —
 * tête bis en voicings élargis (m.17-24) — variation réharmonisée (m.25-32)
 * — solo écrit de 6 chorus de 8 mesures (m.33-80, avec les didascalies
 * d'origine du transcripteur : "Almost there!", "Just go crazy", "Calm
 * down") — tête out (m.81-88) — coda rubato (m.89-98).
 *
 * Vérifié en plus, indépendamment du texte des balises <words> : les trois
 * tonalités du cycle (Si, Sol, Mib) forment bien une triade augmentée (les
 * 3 intervalles mesurés à exactement 4 demi-tons) ; la mesure 96 déploie
 * bien les 7 classes de hauteurs du Mi lydien (Mi-Fa#-Sol#-La#-Si-Do#-Ré#)
 * sur un ambitus mesuré à ~6,2 octaves (Mi1-Fa#7) — proche des "sept
 * octaves" du brouillon sans être exactement ce chiffre, présenté ici de
 * façon prudente ("près de sept octaves") plutôt que répété tel quel ; la
 * pièce s'achève bien sur un Mi nu (mesure 98, deux notes, une seule classe
 * de hauteur). AUCUNE erreur trouvée par ailleurs.
 */
export const GIANT_STEPS_MESURES_1_98 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Giant Steps</work-title>
    </work>
  <identification>
    <creator type="composer">John Coltrane</creator>
    <creator type="lyricist">Arr. by Jacob Koller</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-30</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/22497216/scores/6890980</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2021-07-02</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1697.14</page-height>
      <page-width>1200</page-width>
      <page-margins type="even">
        <left-margin>85.7143</left-margin>
        <right-margin>85.7143</right-margin>
        <top-margin>85.7143</top-margin>
        <bottom-margin>85.7143</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7143</left-margin>
        <right-margin>85.7143</right-margin>
        <top-margin>85.7143</top-margin>
        <bottom-margin>85.7143</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.4</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.7</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1.1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.7</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland" />
    <word-font font-family="Edwin" font-size="10" />
    <lyric-font font-family="Edwin" font-size="10" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="600" default-y="1611.43" justify="center" valign="top" font-size="22">Giant Steps</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="600" default-y="1554.28" justify="center" valign="top" font-size="16">Piano Arrangement</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.29" default-y="1511.43" justify="right" valign="bottom">John Coltrane</credit-words>
    </credit>
  <credit page="1">
    <credit-type>lyricist</credit-type>
    <credit-words default-x="85.71" default-y="1511.43" justify="left" valign="bottom">Arr. by Jacob Koller</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <part-abbreviation print-object="no">Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="388.32">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>187.94</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>56.58</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>840</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>7</beats>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="29.61" relative-x="-139.65" relative-y="31.64">
            <beat-unit>quarter</beat-unit>
            <per-minute>242</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="242" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal default-x="-20" default-y="30.9" relative-y="30" justify="center" font-weight="bold" font-size="14">Intro</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-45.62" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">intro (8 mes.) sur les couleurs du cycle</words></direction-type><staff>2</staff></direction><note default-x="218.5" default-y="-10">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-70.52" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="83.49" default-y="-126.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="155.68" default-y="-116.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.87" default-y="-136.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="245.88" default-y="-131.58" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="288.89" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="320.97" default-y="-116.58">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="353.06" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="2" width="309.04">
      <note default-x="147.12" default-y="-10">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.11" default-y="-111.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.2" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="142.2" default-y="-141.58" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="185.21" default-y="-131.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="203.21" default-y="-131.58" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="246.23" default-y="-116.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="264.23" default-y="-111.58" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="3" width="281.21">
      <note default-x="133.21" default-y="-10">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13" default-y="-136.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.19" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="157.39" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="175.39" default-y="-141.58" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.4" default-y="-141.58">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="236.4" default-y="-141.58" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="4" width="375.49">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>141.44</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>56.58</staff-distance>
          </staff-layout>
        </print>
      <note default-x="198.52" default-y="-10">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-161.58">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.72" default-y="-126.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="167.33" default-y="-161.58">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="185.33" default-y="-161.58" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="229.32" default-y="-141.58">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="247.32" default-y="-141.58" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="291.32" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="340.23" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="5" width="336.4">
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="2" default-y="-63.64" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="18.96" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="32.78" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="191.09" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="220.99" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.09" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="220.99" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.09" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="220.99" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.99" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="220.99" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.09" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.99" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="264.99" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.99" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.09" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.99" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.28" default-y="-111.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.19" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="191.09" default-y="-131.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="209.09" default-y="-131.58" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="253.09" default-y="-116.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="301.99" default-y="-116.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="316.69">
      <note default-x="18.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="32.58" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="32.58" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="190.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="208.89" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.89" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="208.89" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.89" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="208.89" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.89" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="208.89" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.79" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.89" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.79" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="264.79" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.79" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.89" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="282.79" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.72" default-y="-136.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.08" default-y="-101.58">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="141.99" default-y="-136.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.89" default-y="-121.58">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="208.89" default-y="-121.58" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="252.89" default-y="-106.58">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="270.89" default-y="-101.58" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="553.68">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>141.44</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>56.58</staff-distance>
          </staff-layout>
        </print>
      <note default-x="97.75" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="111.57" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="97.75" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="97.75" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="361.51" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="379.51" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="361.51" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="379.51" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="361.51" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="379.51" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="456.69" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="474.7" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="456.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="474.7" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="456.69" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="474.7" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="98.71" default-y="-126.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.34" default-y="-106.58">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="286.42" default-y="-126.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="361.51" default-y="-106.58">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="379.51" default-y="-101.58" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="456.69" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="474.7" default-y="-121.58" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="474.89">
      <note default-x="18.96" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="282.72" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="312.62" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="294.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="312.62" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="282.72" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="312.62" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="282.72" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="312.62" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.91" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="407.81" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.91" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="407.81" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="389.81" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="407.81" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.91" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="407.81" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.55" default-y="-111.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.64" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="282.72" default-y="-156.58">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="300.72" default-y="-151.58" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="377.91" default-y="-141.58">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="395.91" default-y="-141.58" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="443.43">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>141.44</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>56.58</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">A</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-97.01" relative-x="4.67" relative-y="36.47" font-style="italic">Melody </words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">TÊTE — 2 mesures 4/4 par mesure de 7/4 : B∆–D7 · G∆–B♭7</words></direction-type><staff>2</staff></direction><note default-x="63.62" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="159.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.26" default-y="-25">
        <grace />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="238.39" default-y="-25">
        <grace />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="254.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="272.72" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="335.47" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="399.17" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-161.58">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="159.17" default-y="-151.58">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="254.72" default-y="-136.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="272.72" default-y="-131.58" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="335.47" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="399.17" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="585.14">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">E♭∆ · Am7–D7</words></direction-type><staff>2</staff></direction><note default-x="18.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="328.55" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="346.55" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="455.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.94" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <forward>
        <duration>840</duration>
        </forward>
      <note default-x="73.75" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.22" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.68" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="201.15" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.62" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="286.08" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="328.55" default-y="-50">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="371.01" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="413.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="455.94" default-y="-50">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="498.41" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="540.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-146.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-141.58" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.22" default-y="-111.58">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.68" default-y="-116.58">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="243.62" default-y="-126.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="328.55" default-y="-131.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="346.55" default-y="-131.58" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="455.94" default-y="-116.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="473.94" default-y="-111.58" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="543.62">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>141.44</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.7</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">G∆–B♭7 · E♭∆–F#7</words></direction-type><staff>2</staff></direction><note default-x="64.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="129.18" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.34" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="259.49" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="324.64" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="389.8" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="433.23" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="498.39" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.03" default-y="-155.7">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.34" default-y="-145.7">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="324.64" default-y="-165.7">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="342.65" default-y="-160.7" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="433.23" default-y="-160.7">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="451.24" default-y="-160.7" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="12" width="484.95">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">B∆ · Fm7–B♭7</words></direction-type><staff>2</staff></direction><note default-x="18.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="291.96" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="309.96" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="291.96" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="309.96" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="291.96" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="309.96" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="374.56" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="439.71" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <forward>
        <duration>840</duration>
        </forward>
      <note default-x="74.78" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.94" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="183.37" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="226.81" default-y="-60">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="19.72" default-y="-180.7">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="37.72" default-y="-180.7" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.36" default-y="-160.7">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="125.36" default-y="-160.7" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="226.81" default-y="-160.7">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="291.96" default-y="-160.7">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="309.96" default-y="-160.7" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="374.56" default-y="-145.7">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="439.71" default-y="-145.7">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="531.1">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>100.93</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-style="italic" default-y="-102.2" relative-x="-24.78">cresc.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="-102.2" relative-x="-24.78" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">E♭∆ · Am7–D7</words></direction-type><staff>2</staff></direction><note default-x="63.82" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="322.85" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="340.85" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="426.07" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="444.07" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-50">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="116.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="150.8" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.21" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="219.62" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="254.03" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="288.44" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="322.85" default-y="-50">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="357.25" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="391.66" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="426.07" default-y="-50">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="460.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="494.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-190.93">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.79" default-y="-185.93" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.8" default-y="-155.93">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="185.21" default-y="-160.93">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="254.03" default-y="-170.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="322.85" default-y="-175.93">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="340.85" default-y="-175.93" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="426.07" default-y="-160.93">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="444.07" default-y="-155.93" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="14" width="497.48">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">G∆ · C#m7–F#7</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="289.23" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="307.23" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="392.45" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="410.45" default-y="-15" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13.96" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="48.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="82.78" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="117.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="151.59" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="186" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="254.82" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="289.23" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="323.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="358.04" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="392.45" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="426.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="461.27" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13.96" default-y="-180.93">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.78" default-y="-160.93">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="117.19" default-y="-135.93">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="135.19" default-y="-135.93" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.41" default-y="-160.93">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="289.23" default-y="-165.93">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="307.23" default-y="-165.93" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="392.45" default-y="-150.93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="410.45" default-y="-145.93" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="585">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>78.99</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">B∆ · Fm7–B♭7</words></direction-type><staff>2</staff></direction><note default-x="63.62" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="363.74" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.74" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.74" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.74" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.74" default-y="-5" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.74" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.74" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="458.55" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="476.55" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="29" />
            </articulations>
          </notations>
        </note>
      <note default-x="458.55" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="476.55" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="458.55" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="476.55" default-y="5" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.58" default-y="-30">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="139.37" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.16" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.95" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.74" default-y="-50">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="495.95" default-y="-50">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.58" default-y="-148.99">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.16" default-y="-128.99">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="288.95" default-y="-148.99">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="363.74" default-y="-128.99">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="381.74" default-y="-123.99" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="458.55" default-y="-148.99">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="533.34" default-y="-148.99">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="16" width="443.57">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">E♭∆ · C#m7–F#7 — les 16 mesures tiennent en 8</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="26.82" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="26.82" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="26.82" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="252.15" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.15" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.15" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.15" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="346.96" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="335.06" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="346.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="-15" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="346.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="27.78" default-y="-168.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.97" default-y="-133.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="252.15" default-y="-143.99">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="-143.99" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="252.15" default-y="-123.99">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="270.15" default-y="-123.99" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="346.96" default-y="-143.99">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="-143.99" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="346.96" default-y="-128.99">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="364.96" default-y="-123.99" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="17" width="466.64">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65.74</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">B</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-59.66" relative-y="-25">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">tête bis, voicings élargis (mêmes changes)</words></direction-type><staff>2</staff></direction><note default-x="75.59" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.59" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.59" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.07" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="192.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.07" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.07" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="286.55" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="286.55" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-25" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="286.55" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="375.69" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="405.59" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="387.59" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="405.59" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="375.69" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="405.59" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="75.59" default-y="-170.74">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.59" default-y="-150.74">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.07" default-y="-125.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.07" default-y="-115.74">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.07" default-y="-95.74">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="274.65" default-y="-145.74">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-150.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="286.55" default-y="-140.74">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-140.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="286.55" default-y="-125.74">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-120.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="274.65" default-y="-105.74">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-110.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="286.55" default-y="-100.74">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="304.55" default-y="-100.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="375.69" default-y="-135.74">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="393.69" default-y="-130.74" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="375.69" default-y="-105.74">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="393.69" default-y="-100.74" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="561.93">
      <note default-x="29.28" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="43.1" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="29.28" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="29.28" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="381.85" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.85" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.85" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.85" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="470.99" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="500.89" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="470.99" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="500.89" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="482.89" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="500.89" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="470.99" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="500.89" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="30.24" default-y="-75">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="100.56" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="147.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="194.32" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="241.2" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="288.09" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="334.97" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="30.24" default-y="-155.74">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="30.24" default-y="-135.74">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="30.24" default-y="-120.74">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.32" default-y="-110.74">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.32" default-y="-100.74">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="381.85" default-y="-140.74">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-140.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="381.85" default-y="-110.74">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="399.85" default-y="-110.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="470.99" default-y="-125.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="488.99" default-y="-120.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="470.99" default-y="-115.74">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="488.99" default-y="-110.74" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="456.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>58.05</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.52" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.52" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.51" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.51" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.39" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="305.3" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.39" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="305.3" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="287.29" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="305.3" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.39" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="305.3" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.88" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="394.78" default-y="-65" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="376.78" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="394.78" default-y="-65" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.88" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="394.78" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="376.78" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="394.78" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-138.05">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-118.05">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.51" default-y="-128.05">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.51" default-y="-108.05">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="275.39" default-y="-148.05">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="293.4" default-y="-143.05" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="275.39" default-y="-128.05">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="293.4" default-y="-123.05" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="275.39" default-y="-113.05">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="293.4" default-y="-113.05" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="364.88" default-y="-133.05">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="382.88" default-y="-133.05" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="20" width="572.41">
      <note default-x="68.39" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="363.47" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.47" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.47" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.47" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.47" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="381.47" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="452.96" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="470.96" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="452.96" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="470.96" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="452.96" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="470.96" default-y="-35" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="57.44" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.35" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="57.44" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.35" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.23" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="222.29" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="269.35" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="316.41" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="68.39" default-y="-163.05">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="68.39" default-y="-143.05">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="68.39" default-y="-128.05">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="363.47" default-y="-143.05">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="381.47" default-y="-143.05" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="363.47" default-y="-113.05">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="381.47" default-y="-113.05" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="452.96" default-y="-128.05">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="523.55" default-y="-128.05">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="551.58">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65.62</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.82" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="77.65" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="63.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="63.82" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="355.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="373.35" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="355.35" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="373.35" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="355.35" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="373.35" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="477.73" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="459.73" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="477.73" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.83" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="477.73" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <forward>
        <duration>840</duration>
        </forward>
      <note default-x="110.66" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="151.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="192.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="233.01" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="273.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="314.57" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>840</duration>
        </forward>
      <note default-x="407.05" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>420</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="64.78" default-y="-155.62">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.23" default-y="-110.62">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.23" default-y="-100.62">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="355.35" default-y="-140.62">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="373.35" default-y="-140.62" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="355.35" default-y="-110.62">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="373.35" default-y="-110.62" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="447.83" default-y="-125.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="447.83" default-y="-115.62">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="509" default-y="-125.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="476.99">
      <note default-x="29.7" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="295.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="325.59" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="295.69" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="325.59" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="307.59" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="325.59" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="295.69" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="325.59" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="373.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="373.23" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>2</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>double-sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="385.13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="373.23" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="434.41" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="18.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.66" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.66" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="203.98" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="244.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="30.66" default-y="-145.62">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.42" default-y="-110.62">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.52" default-y="-105.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.42" default-y="-100.62">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.69" default-y="-165.62">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="313.69" default-y="-160.62" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.69" default-y="-130.62">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="313.69" default-y="-130.62" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="373.23" default-y="-150.62">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="434.41" default-y="-150.62">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="518.38">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>40.28</staff-distance>
          </staff-layout>
        </print>
      <note default-x="75.59" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="350.12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.35" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="451.35" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.35" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="451.35" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.35" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="451.35" default-y="5" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="76.55" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.55" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.03" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="218.8" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.57" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="306.35" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="76.55" default-y="-145.28">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.55" default-y="-110.28">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.03" default-y="-110.28">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.03" default-y="-90.28">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.03" default-y="-75.28">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.12" default-y="-125.28">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="-125.28" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.12" default-y="-95.28">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="368.12" default-y="-95.28" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.35" default-y="-110.28">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="451.35" default-y="-105.28" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.35" default-y="-80.28">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="451.35" default-y="-75.28" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="510.19">
      <note default-x="18.96" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="32.78" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.96" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="315.73" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="315.73" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="315.73" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="398.96" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="398.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="398.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="464.62" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-40">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="118.41" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="162.18" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="205.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="240.48" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="275.01" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
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
          <tuplet type="stop" />
          </notations>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="19.92" default-y="-130.28">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-95.28">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.41" default-y="-85.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.41" default-y="-75.28">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.41" default-y="-65.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.73" default-y="-105.28">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-105.28" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.73" default-y="-95.28">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-95.28" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.73" default-y="-85.28">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-85.28" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.73" default-y="-75.28">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.73" default-y="-75.28" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="398.96" default-y="-90.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="398.96" default-y="-80.28">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="398.96" default-y="-65.28">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="464.62" default-y="-100.28">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="466.62">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>83.49</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>44.69</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">C</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">variation : réharmonisation de passage</words></direction-type><staff>2</staff></direction><note default-x="63.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.34" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.34" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.06" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.06" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.06" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="372.94" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="372.94" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="372.94" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-109.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-99.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-89.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-79.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.34" default-y="-99.69">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.34" default-y="-89.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.34" default-y="-74.69">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.06" default-y="-119.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-119.69" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.06" default-y="-99.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-99.69" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.06" default-y="-89.69">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="299.06" default-y="-89.69" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="372.94" default-y="-129.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-129.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="372.94" default-y="-109.69">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-109.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="372.94" default-y="-99.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="390.94" default-y="-99.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="561.95">
      <note default-x="45.48" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.2" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="202.52" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="250.84" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="299.16" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="347.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="377.38" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="359.38" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="377.38" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="347.48" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="377.38" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="347.48" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="377.38" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="347.48" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="377.38" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.36" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="451.26" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.36" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.36" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="511.83" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="44.52" default-y="-134.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="44.52" default-y="-114.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="44.52" default-y="-99.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="347.48" default-y="-119.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="365.48" default-y="-119.69" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="347.48" default-y="-89.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="365.48" default-y="-89.69" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="439.36" default-y="-119.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="457.36" default-y="-119.69" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="439.36" default-y="-89.69">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="457.36" default-y="-89.69" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="445.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>111.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>48.87</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.98" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-65" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.98" default-y="-123.87">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.98" default-y="-98.87">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.35" default-y="-118.87">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.35" default-y="-93.87">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.72" default-y="-133.87">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-133.87" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.72" default-y="-113.87">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-113.87" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="356.08" default-y="-123.87">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-123.87" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="28" width="583.34">
      <note default-x="18.76" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.07" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="259.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="305.89" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.89" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.89" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="443.72" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="443.72" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="455.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-35" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="17.8" default-y="-148.87">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="17.8" default-y="-128.87">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="17.8" default-y="-113.87">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="305.89" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="351.83" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="351.83" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="397.77" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="443.72" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="443.72" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="489.66" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="535.6" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="535.6" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="29" width="539.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>111.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>69.86</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-style="italic" default-y="-80.88">cresc.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="-80.88" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="76.62" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.62" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.88" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.06" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="196.23" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="230.4" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="264.58" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="298.75" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="332.92" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="344.82" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.34" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-25" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="75.66" default-y="-174.86">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="75.66" default-y="-154.86">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="75.66" default-y="-139.86">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="332.92" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-164.86">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-144.86">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-129.86">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="401.27" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-164.86">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-144.86">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-129.86">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="469.62" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="503.79" default-y="-144.86">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="488.81">
      <note default-x="20.88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="20.88" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="20.88" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.14" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="106.31" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="140.49" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.66" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="208.83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="281.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.97" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.97" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="452.84" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-159.86">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-124.86">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        </note>
      <note default-x="281.97" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="316.14" default-y="-154.86">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.14" default-y="-119.86">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.32" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="384.49" default-y="-154.86">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="384.49" default-y="-119.86">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="418.66" default-y="-129.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="452.84" default-y="-154.86">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="452.84" default-y="-119.86">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="1028.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>111.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>52.36</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.64" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="241.98" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="313.33" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="384.67" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="456.02" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="527.36" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="598.71" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="955.43" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="62.66" default-y="-132.36">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="62.66" default-y="-97.36">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="598.71" default-y="-112.36">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="670.05" default-y="-157.36">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="670.05" default-y="-122.36">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="741.39" default-y="-112.36">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="812.74" default-y="-157.36">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="812.74" default-y="-122.36">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="884.08" default-y="-112.36">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="955.43" default-y="-157.36">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="32" width="1028.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>111.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.19</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.35" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.35" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.35" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.35" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="236.42" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="287.63" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="338.85" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="390.06" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="441.27" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="492.49" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="543.7" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="594.91" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="646.12" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="697.34" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="748.55" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="799.76" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="850.98" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="894.26" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="937.54" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="980.82" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="89.39" default-y="-198.19">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-1.68" default-y="-94.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="89.39" default-y="-163.19">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="543.7" default-y="-198.19">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="561.7" default-y="-198.19" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="543.7" default-y="-163.19">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="561.7" default-y="-158.19" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="524.75">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>111.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>44.69</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">D</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-39.68" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="8.74" default-y="-102.38" relative-x="12.88" relative-y="35.83" font-style="italic">Pno solo</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">SOLO — 6 chorus de 8 mesures sur le cycle</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="122.91" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.45" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="246" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="307.54" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="369.09" default-y="-40">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="440.89" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="481.92" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-81.05" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="61.36" default-y="-114.69">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            <accent default-x="-0.72" default-y="-48.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.91" default-y="-104.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="184.45" default-y="-104.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="246" default-y="-104.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="307.54" default-y="-124.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="369.09" default-y="-104.69">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="410.12" default-y="-114.69">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="481.92" default-y="-104.69">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="34" width="503.82">
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="81.47" default-y="-50">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.01" default-y="-50">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.56" default-y="-50">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="245.59" default-y="-50">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="286.61" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="327.64" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="399.45" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="460.99" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-134.69">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.47" default-y="-104.69">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="204.56" default-y="-104.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="286.61" default-y="-119.69">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="358.42" default-y="-104.69">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="399.45" default-y="-104.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="460.99" default-y="-104.69">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="538.47">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>42.97</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="124.74" default-y="-40">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.11" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="251.48" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="314.86" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="378.23" default-y="-50">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="452.17" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="494.42" default-y="-40">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-122.97">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.74" default-y="-102.97">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="188.11" default-y="-112.97">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="251.48" default-y="-102.97">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="314.86" default-y="-132.97">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="378.23" default-y="-102.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="420.48" default-y="-122.97">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="494.42" default-y="-102.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="36" width="490.1">
      <note default-x="13" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="76.37" default-y="-65">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.75" default-y="-65">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="203.12" default-y="-65">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="266.5" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="308.74" default-y="-45">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="382.68" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="446.05" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13" default-y="-147.97">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.37" default-y="-102.97">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="203.12" default-y="-102.97">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="266.5" default-y="-127.97">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="340.43" default-y="-102.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="382.68" default-y="-112.97">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="446.05" default-y="-102.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="37" width="543.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.23</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.63" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.75" default-y="-40">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="267.59" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="328.44" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="369" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="439.98" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="500.83" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-127.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="125.63" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="166.19" default-y="-92.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.75" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="267.59" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="328.44" default-y="-112.23">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="399.42" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="439.98" default-y="-97.23">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="500.83" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="38" width="485.38">
      <note default-x="17.12" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.96" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.81" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.65" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="260.49" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="301.05" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="341.62" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="382.18" default-y="20">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="443.02" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="17.12" default-y="-117.23">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.81" default-y="-97.23">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.65" default-y="-82.23">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="260.49" default-y="-102.23">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="341.62" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="382.18" default-y="-87.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="443.02" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="494.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.23</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="0">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.91" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="138.19" default-y="10">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="194.12" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.05" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.97" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="343.26" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="399.18" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="455.11" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-107.23">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.12" default-y="-87.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.05" default-y="-107.23">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="305.97" default-y="-87.23">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="323.97" default-y="-82.23" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="399.18" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="417.18" default-y="-102.23" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="40" width="534.38">
      <note default-x="19.92" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="57.2" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="94.49" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.77" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="169.06" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="206.34" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.63" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="280.91" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="318.19" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="355.48" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="392.76" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="458.01" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="495.29" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-127.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-92.23">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="94.49" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="169.06" default-y="-92.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="243.63" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="318.19" default-y="-137.23">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="392.76" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="430.05" default-y="-122.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="495.29" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="41" width="530.96">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.23</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="105.01" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="146.39" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.46" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="301.57" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="342.95" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="384.33" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="425.71" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="487.78" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-142.23">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.39" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="208.46" default-y="-132.23">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="301.57" default-y="-117.23">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="384.33" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="425.71" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="443.71" default-y="-102.23" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="42" width="497.61">
      <note default-x="19.92" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.99" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.76" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="226.83" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="288.9" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.97" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="392.35" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="454.42" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-127.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-92.23">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.99" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="123.37" default-y="-92.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.76" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="226.83" default-y="-92.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="288.9" default-y="-112.23">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="306.9" default-y="-112.23" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="392.35" default-y="-97.23">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="410.35" default-y="-92.23" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="504.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.23</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-10">
        <rest />
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="260.01" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="304.15" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="348.3" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="392.44" default-y="0">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="458.65" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-117.23">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.69" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="260.01" default-y="-127.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="260.01" default-y="-92.23">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="348.3" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="392.44" default-y="-122.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="458.65" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="44" width="523.97">
      <note default-x="21.56" default-y="10">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.78" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.03" default-y="0">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="231.24" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="279.38" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="345.6" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="411.81" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="478.03" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-142.23">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="39.56" default-y="-142.23" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-107.23">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="39.56" default-y="-102.23" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.88" default-y="-122.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.03" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="231.24" default-y="-122.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.24" default-y="-107.23">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="312.49" default-y="-122.23">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="330.49" default-y="-122.23" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="411.81" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="429.82" default-y="-102.23" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="540.18">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>38.12</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="99.23" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="133.67" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="168.11" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="202.56" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="237" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="271.44" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="305.89" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="340.33" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="374.77" default-y="30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="409.22" default-y="20">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="469.49" default-y="25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="503.93" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-128.12">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="133.67" default-y="-98.12">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="202.56" default-y="-73.12">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="271.44" default-y="-98.12">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="340.33" default-y="-113.12">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="340.33" default-y="-83.12">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="409.22" default-y="-98.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="443.66" default-y="-98.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="503.93" default-y="-98.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="488.39">
      <note default-x="13" default-y="20">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="47.44" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="81.89" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="116.33" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="150.77" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.22" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="219.66" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="254.1" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="288.55" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="322.99" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="357.43" default-y="0">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="417.71" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="452.15" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13" default-y="-118.12">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.89" default-y="-98.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="116.33" default-y="-83.12">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="134.33" default-y="-83.12" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.66" default-y="-98.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="288.55" default-y="-103.12">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="357.43" default-y="-98.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="391.87" default-y="-88.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="452.15" default-y="-98.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="47" width="544.15">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.23</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="95.72" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="130.08" default-y="-25">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="164.43" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="198.79" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="233.14" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="267.5" default-y="-40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="301.85" default-y="-45">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="336.21" default-y="-40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="370.57" default-y="-35">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="404.92" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="439.28" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="473.63" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="507.99" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-107.23">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.08" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="164.43" default-y="-87.23">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="233.14" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="267.5" default-y="-107.23">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="336.21" default-y="-122.23">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="404.92" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="439.28" default-y="-107.23">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="507.99" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="48" width="484.42">
      <note default-x="19.92" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="54.28" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.63" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="122.99" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.34" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.7" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="226.06" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="260.41" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="294.77" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="329.12" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="389.25" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="440.78" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-127.23">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-92.23">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.63" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="157.34" default-y="-82.23">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="157.34" default-y="-72.23">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.34" default-y="-62.23">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="226.06" default-y="-97.23">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="294.77" default-y="-102.23">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="294.77" default-y="-72.23">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="354.89" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="389.25" default-y="-92.23">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="389.25" default-y="-67.23">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="440.78" default-y="-97.23">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="49" width="463.48">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>83.13</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>50.62</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-43.47" relative-y="-25">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">E</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="1.77" default-y="-40" relative-x="11.97" relative-y="32.7" font-style="italic">Solo continues</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.62" default-y="-10">
        <rest />
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="234.22" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="272.13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="310.04" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="347.95" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="385.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="423.77" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-120.62">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-100.62">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.92" default-y="-110.62">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.92" default-y="-90.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="234.22" default-y="-110.62">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.13" default-y="-130.62">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="347.95" default-y="-120.62">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="347.95" default-y="-90.62">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="423.77" default-y="-120.62">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="50" width="565.09">
      <note default-x="19.92" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="57.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="95.74" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="133.65" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="171.56" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="209.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="247.38" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="285.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="323.2" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="348.47" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="373.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="411.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="449.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="487.47" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="525.38" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-140.62">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-105.62">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="171.56" default-y="-95.62">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.56" default-y="-85.62">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.56" default-y="-75.62">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="323.2" default-y="-125.62">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="341.2" default-y="-125.62" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="323.2" default-y="-95.62">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="341.2" default-y="-95.62" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="449.56" default-y="-110.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="467.57" default-y="-105.62" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="449.56" default-y="-100.62">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="467.57" default-y="-95.62" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="51" width="488.64">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>106.36</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>48.87</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="98.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="135.16" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="172.06" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="208.95" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="319.5" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="413.05" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="449.94" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-128.87">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-108.87">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.95" default-y="-118.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="226.96" default-y="-113.87" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.95" default-y="-98.87">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="226.96" default-y="-93.87" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="279.12" default-y="-118.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="319.5" default-y="-138.87">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="337.5" default-y="-133.87" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="319.5" default-y="-103.87">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="337.5" default-y="-103.87" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="389.66" default-y="-133.87">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="407.66" default-y="-133.87" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="389.66" default-y="-113.87">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="407.66" default-y="-113.87" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="539.93">
      <note default-x="21.56" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="58.46" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="95.36" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="132.25" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="169.15" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="206.05" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="242.95" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="279.85" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="316.74" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="353.64" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="390.54" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="427.44" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="464.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="501.23" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-153.87">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-133.87">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.15" default-y="-118.87">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.74" default-y="-133.87">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="334.74" default-y="-133.87" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.74" default-y="-103.87">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="334.74" default-y="-103.87" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="427.44" default-y="-118.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="427.44" default-y="-108.87">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="427.44" default-y="-88.87">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="501.23" default-y="-118.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="531.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>106.36</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>60.86</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="98.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.24" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="164.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="197.69" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="230.92" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="264.14" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="297.37" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.6" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="363.83" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="397.05" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="430.28" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="463.51" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="496.73" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-150.86">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.78" default-y="-115.86">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.69" default-y="-105.86">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.69" default-y="-95.86">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.69" default-y="-85.86">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="330.6" default-y="-135.86">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="348.6" default-y="-135.86" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="330.6" default-y="-105.86">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="348.6" default-y="-105.86" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="430.28" default-y="-120.86">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="448.28" default-y="-115.86" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="430.28" default-y="-110.86">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="448.28" default-y="-105.86" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="496.81">
      <note default-x="18.76" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="51.99" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="85.21" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="118.44" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="151.67" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="184.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="218.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="251.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="284.58" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="317.8" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="339.95" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="362.1" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="395.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="428.56" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="461.79" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="18.76" default-y="-140.86">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.76" default-y="-120.86">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.67" default-y="-105.86">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.77" default-y="-100.86">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.67" default-y="-95.86">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.67" default-y="-85.86">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.58" default-y="-125.86">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.58" default-y="-125.86" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.58" default-y="-115.86">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.58" default-y="-115.86" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.58" default-y="-105.86">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.58" default-y="-105.86" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.58" default-y="-95.86">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.58" default-y="-95.86" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="395.33" default-y="-115.86">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="395.33" default-y="-90.86">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="461.79" default-y="-120.86">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="532.18">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>106.36</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>52.97</staff-distance>
          </staff-layout>
        </print>
      <note default-x="73.82" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.55" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.37" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="192.19" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="226.01" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="259.83" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="293.65" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="327.47" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="361.29" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="395.11" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="428.93" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="462.74" default-y="-75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-84.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="496.56" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="73.82" default-y="-122.97">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="91.83" default-y="-117.97" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.82" default-y="-112.97">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="91.83" default-y="-107.97" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.82" default-y="-92.97">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="91.83" default-y="-87.97" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.37" default-y="-122.97">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.37" default-y="-112.97">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.37" default-y="-102.97">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.19" default-y="-112.97">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="259.83" default-y="-122.97">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="259.83" default-y="-112.97">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="327.47" default-y="-137.97">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="327.47" default-y="-107.97">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="395.11" default-y="-112.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="428.93" default-y="-122.97">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="496.56" default-y="-112.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="56" width="496.39">
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-80.51" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="21.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.94" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="88.76" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.58" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.4" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="190.22" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="224.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.85" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="291.67" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="325.49" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="359.31" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="393.13" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="426.95" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="460.77" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.12" default-y="-142.97">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="21.12" default-y="-122.97">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.76" default-y="-112.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="122.58" default-y="-122.97">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.4" default-y="-112.97">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="224.04" default-y="-122.97">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="291.67" default-y="-152.97">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="359.31" default-y="-112.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="393.13" default-y="-137.97">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="460.77" default-y="-112.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="57" width="498.81">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>106.36</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>104.9</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">F</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-137.56" relative-x="17.95" relative-y="44.24" font-style="italic">Solo continues...</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.62" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="118.06" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="149.32" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="178.08" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
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
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="206.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="315.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="370.01" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="406.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="460.73" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="2" default-y="-78.09" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="63.62" default-y="-174.9">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-154.9">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="206.71" default-y="-164.9">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.57" default-y="-184.9">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.57" default-y="-179.9" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.57" default-y="-164.9">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="333.57" default-y="-159.9" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="406.29" default-y="-174.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="424.3" default-y="-169.9" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="406.29" default-y="-154.9">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="424.3" default-y="-149.9" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="529.76">
      <note default-x="19.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="56.21" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="92.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="128.79" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.07" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="201.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="237.65" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="273.94" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="310.23" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="346.52" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="382.8" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="419.09" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="455.38" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="491.67" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-194.9">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-159.9">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.5" default-y="-164.9">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="165.07" default-y="-139.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.07" default-y="-124.9">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="237.65" default-y="-164.9">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="310.23" default-y="-179.9">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="310.23" default-y="-149.9">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="382.8" default-y="-164.9">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="419.09" default-y="-164.9">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="419.09" default-y="-154.9">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="491.67" default-y="-164.9">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="557.05">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>106.36</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>42.54</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="97.95" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="109.85" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.95" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.95" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.53" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="146.43" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.53" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.53" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="171.12" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="183.02" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="171.12" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="171.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.7" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="244.28" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="244.28" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.28" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.28" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="280.87" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="280.87" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="280.87" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="280.87" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="317.45" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="317.45" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="317.45" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="317.45" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="354.04" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="390.62" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="402.52" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="390.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="390.62" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="427.21" default-y="-20">
        <rest />
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="441.61" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="518.67" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="518.67" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="518.67" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="518.67" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-122.54">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.36" default-y="-102.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.53" default-y="-102.54">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="207.7" default-y="-112.54">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="280.87" default-y="-102.54">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="354.04" default-y="-132.54">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="354.04" default-y="-112.54">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="354.04" default-y="-97.54">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="427.21" default-y="-102.54">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="463.79" default-y="-127.54">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="463.79" default-y="-92.54">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="518.67" default-y="-102.54">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="471.52">
      <note default-x="21.56" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="103.88" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="140.46" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="177.04" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="213.63" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="250.21" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="286.8" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="323.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="359.97" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="396.55" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="433.13" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-147.54">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-127.54">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-112.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.88" default-y="-92.54">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.88" default-y="-77.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="177.04" default-y="-102.54">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="250.21" default-y="-127.54">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="323.38" default-y="-102.54">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="359.97" default-y="-77.54">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.13" default-y="-102.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="537.53">
      <print new-page="yes" page-number="6">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.82</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="98.39" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="132" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="199.21" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="232.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="266.42" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="300.03" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="334.09" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="367.69" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="401.3" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="434.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="468.51" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="502.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-137.82">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.78" default-y="-102.82">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="132" default-y="-107.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="199.21" default-y="-117.82">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="334.09" default-y="-122.82">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="352.09" default-y="-122.82" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="334.09" default-y="-102.82">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="352.09" default-y="-102.82" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="434.91" default-y="-107.82">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="452.91" default-y="-102.82" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="62" width="491.05">
      <note default-x="18.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="52.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="85.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="119.58" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="153.19" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="186.79" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.4" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="254" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="287.61" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="321.22" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="354.82" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="388.43" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="422.03" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="455.64" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="18.76" default-y="-127.82">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.76" default-y="-92.82">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.19" default-y="-107.82">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.19" default-y="-92.82">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="287.61" default-y="-147.82">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="305.61" default-y="-142.82" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="287.61" default-y="-127.82">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="305.61" default-y="-122.82" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="287.61" default-y="-112.82">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="305.61" default-y="-112.82" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="388.43" default-y="-132.82">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="406.43" default-y="-132.82" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="388.43" default-y="-112.82">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="406.43" default-y="-112.82" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="522.4">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>46.89</staff-distance>
          </staff-layout>
        </print>
      <note default-x="66.42" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="106.8" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="147.17" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.72" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.56" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="338.93" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="379.3" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="419.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="480.23" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="66.42" default-y="-151.89">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.42" default-y="-131.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.42" default-y="-116.89">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.72" default-y="-116.89">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.72" default-y="-106.89">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.72" default-y="-86.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.56" default-y="-131.89">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="316.56" default-y="-131.89" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.56" default-y="-101.89">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="316.56" default-y="-101.89" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="419.67" default-y="-116.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="437.67" default-y="-111.89" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="419.67" default-y="-86.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="437.67" default-y="-81.89" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="506.17">
      <note default-x="19.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="100.66" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.22" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.78" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="262.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="302.52" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="342.89" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="403.45" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="464" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-136.89">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-101.89">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.22" default-y="-91.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.22" default-y="-81.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.22" default-y="-71.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="302.52" default-y="-146.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="320.52" default-y="-141.89" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="302.52" default-y="-111.89">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="320.52" default-y="-111.89" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="403.45" default-y="-131.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="464" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="548.81">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>63.33</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-51.2" relative-y="-25">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">G</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="11.9" default-y="-40" relative-x="7.48" relative-y="38.72" font-style="italic">Almost there!</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.62" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="187.04" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.75" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="331.03" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="372.17" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="444.16" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="444.16" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.87" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-78.09" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="63.62" default-y="-133.33">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-98.33">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.33" default-y="-123.33">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="187.04" default-y="-123.33">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.04" default-y="-88.33">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="248.75" default-y="-123.33">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="289.89" default-y="-123.33">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="331.03" default-y="-143.33">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="331.03" default-y="-108.33">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="403.02" default-y="-123.33">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="444.16" default-y="-133.33">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="444.16" default-y="-98.33">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="505.87" default-y="-133.33">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="66" width="479.76">
      <note default-x="19.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.63" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.84" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="210.55" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="260.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="272.26" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="333.97" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="375.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="375.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="436.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-153.33">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-118.33">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.63" default-y="-123.33">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="122.77" default-y="-108.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="140.77" default-y="-108.33" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.77" default-y="-83.33">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="140.77" default-y="-78.33" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="210.55" default-y="-98.33">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.26" default-y="-138.33">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.26" default-y="-103.33">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="333.97" default-y="-123.33">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="375.11" default-y="-123.33">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="375.11" default-y="-88.33">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="436.82" default-y="-123.33">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="67" width="453.09">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.82</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="88.87" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="143.88" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="171.39" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="198.89" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="226.4" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="253.9" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="281.41" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="308.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="336.42" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="364.22" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="395.79" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="423.29" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-147.82">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-112.82">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.37" default-y="-127.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="171.39" default-y="-137.82">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.39" default-y="-102.82">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="226.4" default-y="-127.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="281.41" default-y="-157.82">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.41" default-y="-122.82">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="336.42" default-y="-127.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="364.22" default-y="-152.82">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="364.22" default-y="-132.82">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="423.29" default-y="-127.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="68" width="575.48">
      <note default-x="21.56" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="55.62" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="87.89" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="115.39" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="142.9" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="175.16" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="207.42" default-y="-85">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.68" default-y="-85">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="271.18" default-y="-80">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="303.61" default-y="-75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="334.75" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="365.89" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="398.31" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="430.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="461.88" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="481.88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="509" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="527.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="545.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-172.82">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-137.82">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.89" default-y="-127.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="142.9" default-y="-137.82">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.9" default-y="-127.82">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.9" default-y="-102.82">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="248.68" default-y="-152.82">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="248.68" default-y="-122.82">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="365.89" default-y="-127.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="430.74" default-y="-137.82">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="430.74" default-y="-102.82">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="527.34" default-y="-127.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="69" width="600.61">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>46.89</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="91.91" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="112.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.71" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="159.83" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="180.24" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.64" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="230.56" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="261.19" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="283.69" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="306.19" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="336.11" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="358.61" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="392.68" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="415.18" default-y="40">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="461.08" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="491.69" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="522.29" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="568.2" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-136.89">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.78" default-y="-101.89">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="159.83" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="261.19" default-y="-91.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.19" default-y="-81.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.19" default-y="-71.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="358.61" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="415.18" default-y="-121.89">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="415.18" default-y="-91.89">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="522.29" default-y="-106.89">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="522.29" default-y="-96.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="568.2" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="70" width="427.97">
      <note default-x="13" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.6" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="74.21" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="150.72" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="181.33" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="211.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="242.54" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="273.14" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="303.75" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="334.35" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="364.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="395.56" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13" default-y="-126.89">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-106.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.21" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="120.12" default-y="-96.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.22" default-y="-86.89">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.12" default-y="-81.89">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.12" default-y="-71.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.33" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="242.54" default-y="-111.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="242.54" default-y="-81.89">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="273.14" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="334.35" default-y="-86.89">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="334.35" default-y="-71.89">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="364.96" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="560.03">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>46.89</staff-distance>
          </staff-layout>
        </print>
      <note default-x="73.82" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="108.2" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="142.57" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="176.94" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="211.31" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="245.68" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="280.05" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="314.42" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="352" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="386.37" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="420.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="455.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="489.49" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="523.86" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="73.82" default-y="-116.89">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.82" default-y="-106.89">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.82" default-y="-86.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.31" default-y="-116.89">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.31" default-y="-106.89">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="280.05" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="314.42" default-y="-111.89">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="352" default-y="-131.89">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="352" default-y="-101.89">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="420.74" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="455.12" default-y="-116.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="523.86" default-y="-106.89">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="72" width="468.54">
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-68.42" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="54.29" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.66" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="123.03" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.4" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="191.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="226.15" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="260.52" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="294.89" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="294.89" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="294.89" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.26" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.26" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.26" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.82" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="432.37" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="432.37" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="432.37" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-136.89">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-101.89">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.66" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="157.4" default-y="-116.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="226.15" default-y="-106.89">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-88.41" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="294.89" default-y="-146.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.89" default-y="-111.89">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.26" default-y="-146.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.26" default-y="-111.89">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.82" default-y="-146.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.82" default-y="-111.89">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="432.37" default-y="-146.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="432.37" default-y="-111.89">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="73" width="559.29">
      <print new-page="yes" page-number="7">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.3</staff-distance>
          </staff-layout>
        </print>
      <note default-x="66.42" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="124.2" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="124.2" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.2" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.71" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.71" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.71" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.23" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="259" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="259" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="259" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.51" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="297.51" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="336.03" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="374.54" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="374.54" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="374.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="413.06" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="480.46" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="518.97" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="518.97" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="66.42" default-y="-176.3">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.42" default-y="-156.3">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.42" default-y="-141.3">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.2" default-y="-131.3">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="201.23" default-y="-166.3">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="201.23" default-y="-146.3">
        <chord />
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="201.23" default-y="-131.3">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="259" default-y="-131.3">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="336.03" default-y="-151.3">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="336.03" default-y="-131.3">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="336.03" default-y="-116.3">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="374.54" default-y="-131.3">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="441.94" default-y="-146.3">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="441.94" default-y="-111.3">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="480.46" default-y="-131.3">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="74" width="469.28">
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="77.69" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.69" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.69" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.47" default-y="-20">
        <rest />
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="181.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.04" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.04" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.61" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="226.61" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>560</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="272.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="290.19" default-y="-35" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="272.19" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="290.19" default-y="-5" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="321.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="339.01" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="321.01" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="339.01" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="369.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="387.84" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="369.83" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="387.84" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="418.66" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="436.66" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="418.66" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="436.66" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-161.3">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-126.3">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="135.47" default-y="-131.3">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.47" default-y="-116.3">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.47" default-y="-106.3">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.19" default-y="-146.3">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="290.19" default-y="-146.3" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.19" default-y="-116.3">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="290.19" default-y="-116.3" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="369.83" default-y="-131.3">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="387.84" default-y="-126.3" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="369.83" default-y="-121.3">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="387.84" default-y="-116.3" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="75" width="492.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.52</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.41</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.36" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.85" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="250.15" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="284.48" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="318.8" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="353.13" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="387.45" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="421.78" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="456.11" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-127.41">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-107.41">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.34" default-y="-117.41">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.34" default-y="-87.41">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.48" default-y="-137.41">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.48" default-y="-132.41" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.48" default-y="-102.41">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="302.48" default-y="-102.41" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="387.45" default-y="-132.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="387.45" default-y="-112.41">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="456.11" default-y="-107.41">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="76" width="536.34">
      <note default-x="21.56" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="55.89" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="90.21" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="124.54" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.86" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="193.19" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="227.51" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.16" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.49" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="353.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="376.26" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="410.58" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="444.91" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="467.79" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="500.21" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-152.41">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-132.41">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-117.41">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.86" default-y="-117.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.86" default-y="-107.41">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.86" default-y="-87.41">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.16" default-y="-132.41">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="314.17" default-y="-132.41" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.16" default-y="-102.41">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="314.17" default-y="-102.41" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="410.58" default-y="-117.41">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="428.58" default-y="-112.41" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="77" width="1028.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.52</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>48.87</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-2.97" relative-y="17.6" font-style="italic">Just go crazy</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="64.78" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="119.37" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="155.76" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.15" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="228.53" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="283.12" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="319.51" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="355.9" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="392.29" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="428.67" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="465.06" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="501.45" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="537.84" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="574.23" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="610.62" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="665.2" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="701.59" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="737.98" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="774.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="810.76" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="847.15" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="883.54" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="919.93" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="974.51" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="998.77" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-138.87">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.78" default-y="-103.87">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="319.51" default-y="-103.87">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-83.09" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="610.62" default-y="-123.87">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="610.62" default-y="-88.87">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="737.98" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="810.76" default-y="-108.87">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="947.22" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="78" width="493.03">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.52</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.82</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-5.66" relative-y="21.71" font-style="italic">Calm down</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="143.68" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="198.55" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="235.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="271.72" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="308.31" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="344.89" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="381.48" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="418.06" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="454.64" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-127.82">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-92.82">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.68" default-y="-107.82">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.55" default-y="-117.82">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="271.72" default-y="-147.82">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="271.72" default-y="-112.82">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="344.89" default-y="-107.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="381.48" default-y="-132.82">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="454.64" default-y="-107.82">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="79" width="535.54">
      <note default-x="21.56" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="58.15" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="94.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.31" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="167.9" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="204.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="241.07" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="277.65" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="314.24" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="350.82" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="387.4" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="423.99" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="460.57" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="497.16" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="21.56" default-y="-152.82">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-132.82">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.56" default-y="-117.82">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="94.73" default-y="-107.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="167.9" default-y="-117.82">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="241.07" default-y="-107.82">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="314.24" default-y="-132.82">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="332.24" default-y="-132.82" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="314.24" default-y="-102.82">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="332.24" default-y="-102.82" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="423.99" default-y="-117.82">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="441.99" default-y="-112.82" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="80" width="1028.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.52</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>50.32</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="141.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="218.7" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="295.66" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="372.62" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="488.06" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="603.5" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="603.5" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="603.5" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="603.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="680.46" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="680.46" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="680.46" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="680.46" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="757.41" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="834.37" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="864.27" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="834.37" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="864.27" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="846.27" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="864.27" default-y="-55" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="834.37" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="864.27" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-140.32">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.78" default-y="-105.32">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="372.62" default-y="-105.32">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="488.06" default-y="-140.32">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="603.5" default-y="-150.32">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="603.5" default-y="-115.32">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="680.46" default-y="-150.32">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="680.46" default-y="-115.32">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="757.41" default-y="-110.32">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="834.37" default-y="-135.32">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="949.81" default-y="-135.32">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="81" width="517.71">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.52</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.41</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal relative-y="30" justify="center" font-weight="bold" font-size="14">D</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="3.56" relative-y="29.41" font-style="italic">Melody (Congrats, you made it through the solo!)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">tête out</words></direction-type><staff>2</staff></direction><note default-x="63.62" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="123.93" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="123.93" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="123.93" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.23" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="244.54" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.44" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.54" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.54" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="304.84" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="345.05" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="345.05" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="345.05" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="415.4" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="475.71" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="487.61" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="475.71" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-78.09" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="63.62" default-y="-117.41">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-97.41">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.93" default-y="-107.41">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="184.23" default-y="-107.41">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.23" default-y="-87.41">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.54" default-y="-107.41">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="304.84" default-y="-127.41">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="304.84" default-y="-107.41">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="304.84" default-y="-92.41">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="375.2" default-y="-107.41">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="415.4" default-y="-117.41">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="415.4" default-y="-82.41">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="475.71" default-y="-107.41">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="82" width="510.86">
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="80.23" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.23" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.23" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="227.64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.44" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="281.24" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="308.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="326.05" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="308.04" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="326.05" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="308.04" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="326.05" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="408.55" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="408.55" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="408.55" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="468.86" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-137.41">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-102.41">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.23" default-y="-107.41">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="140.53" default-y="-67.41">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.84" default-y="-107.41">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="308.04" default-y="-122.41">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="308.04" default-y="-92.41">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="368.35" default-y="-107.41">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="408.55" default-y="-107.41">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="468.86" default-y="-107.41">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="83" width="594.34">
      <print new-page="yes" page-number="8">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.95</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="126.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="126.41" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="126.41" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.77" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="169.77" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.77" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="213.13" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="278.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="278.17" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="321.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="321.53" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.89" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="429.94" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="429.94" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="429.94" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.82" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="549.18" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="549.18" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.36" default-y="-127.95">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-92.95">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.41" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="213.13" default-y="-117.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.13" default-y="-82.95">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="278.17" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="364.89" default-y="-137.95">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="364.89" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="429.94" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="473.3" default-y="-132.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="473.3" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="549.18" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="84" width="434.23">
      <note default-x="45.48" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="59.31" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="241.57" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="241.57" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="241.57" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="241.57" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="324.02" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="324.02" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="324.02" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="389.07" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="46.44" default-y="-152.95">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.44" default-y="-132.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.44" default-y="-117.95">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.01" default-y="-117.95">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="241.57" default-y="-132.95">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-132.95" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="241.57" default-y="-112.95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-112.95" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="241.57" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="259.57" default-y="-92.95" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="324.02" default-y="-117.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="389.07" default-y="-117.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="85" width="551.96">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65.74</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.82" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="77.65" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="63.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="63.82" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="334.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="352.44" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="442.3" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="460.3" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-75">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="118.71" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="154.67" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="190.62" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="226.58" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="298.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="334.44" default-y="-75">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="370.39" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="406.34" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="442.3" default-y="-75">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="478.25" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="514.21" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="64.78" default-y="-155.74">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.78" default-y="-120.74">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="190.62" default-y="-100.74">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="334.44" default-y="-140.74">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="352.44" default-y="-140.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="334.44" default-y="-110.74">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="352.44" default-y="-110.74" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="442.3" default-y="-125.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="442.3" default-y="-115.74">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="514.21" default-y="-125.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="86" width="476.61">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3360</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="316.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="346.46" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="316.56" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="346.46" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="328.46" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="346.46" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="316.56" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="346.46" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.93" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.93" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>2</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>double-sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="396.83" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.93" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="438.86" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="13.96" default-y="-30">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="49.91" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="85.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="121.82" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.78" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="193.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="229.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="265.64" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <forward>
        <duration>1680</duration>
        </forward>
      <backup>
        <duration>5040</duration>
        </backup>
      <note default-x="13.96" default-y="-145.74">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.78" default-y="-110.74">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.78" default-y="-100.74">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.56" default-y="-165.74">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="334.56" default-y="-160.74" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.56" default-y="-130.74">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="334.56" default-y="-130.74" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="384.93" default-y="-150.74">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="438.86" default-y="-125.74">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="87" width="545.12">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.95</staff-distance>
          </staff-layout>
        </print>
      <note default-x="75.59" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.59" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.59" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.39" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="218.3" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.21" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="306.12" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="350.04" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.04" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.04" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="350.04" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.54" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.54" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.54" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="499.4" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="75.59" default-y="-152.95">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.59" default-y="-117.95">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="174.39" default-y="-117.95">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="174.39" default-y="-107.95">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="174.39" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="174.39" default-y="-82.95">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.04" default-y="-132.95">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="-132.95" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.04" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="368.04" default-y="-102.95" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.54" default-y="-117.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.54" default-y="-87.95">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-65.14" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="499.4" default-y="-117.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="88" width="483.45">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.9" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.9" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.9" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.77" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="156.64" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="222.51" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="288.37" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.37" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.37" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.37" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.87" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.87" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.87" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="437.74" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="24.9" default-y="-137.95">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.9" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-11.31" relative-y="-30.12">R.H.</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="90.77" default-y="-117.95">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <glissando line-type="wavy" number="1" type="start" default-y="-107.74">gliss.</glissando>
          </notations>
        </note>
      <note default-x="156.64" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="222.51" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-88.41" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="288.37" default-y="-147.95">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="-142.95" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="288.37" default-y="-112.95">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="306.38" default-y="-112.95" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="371.87" default-y="-132.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="371.87" default-y="-112.95">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="437.74" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="89" width="530.73">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.95</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.07" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="190.52" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.52" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.52" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.98" default-y="-20">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="317.43" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="317.43" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="317.43" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.88" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="423.18" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="423.18" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="423.18" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="486.63" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="63.62" default-y="-112.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.62" default-y="-92.95">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="127.07" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="190.52" default-y="-102.95">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.52" default-y="-82.95">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="253.98" default-y="-107.95">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="317.43" default-y="-122.95">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="317.43" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="317.43" default-y="-87.95">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.88" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="423.18" default-y="-132.95">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="423.18" default-y="-112.95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="423.18" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="486.63" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="90" width="497.84">
      <note default-x="45.48" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.66" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="182.96" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="225.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="267.56" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="309.86" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="339.76" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="321.76" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="339.76" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.86" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="339.76" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.86" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="339.76" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.86" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="339.76" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="390.29" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="402.19" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="390.29" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="390.29" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="453.74" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="45.48" default-y="-137.95">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="45.48" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="140.66" default-y="-102.95">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="158.66" default-y="-102.95" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="267.56" default-y="-102.95">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="309.86" default-y="-122.95">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="327.86" default-y="-122.95" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="309.86" default-y="-92.95">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="327.86" default-y="-92.95" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="390.29" default-y="-122.95">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="408.3" default-y="-122.95" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="390.29" default-y="-92.95">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="408.3" default-y="-92.95" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="91" width="445.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>48.87</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.98" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.98" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.35" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-45" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.72" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-65" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.08" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="61.98" default-y="-123.87">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.98" default-y="-98.87">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.35" default-y="-118.87">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.35" default-y="-93.87">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.72" default-y="-133.87">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-133.87" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.72" default-y="-113.87">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="286.72" default-y="-113.87" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="356.08" default-y="-123.87">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="374.08" default-y="-123.87" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="92" width="583.34">
      <note default-x="18.76" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.07" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="259.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="305.89" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.89" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.89" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="323.89" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="443.72" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="443.72" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="455.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="473.62" default-y="-35" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="17.8" default-y="-148.87">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="17.8" default-y="-128.87">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="17.8" default-y="-113.87">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="305.89" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="351.83" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="351.83" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="397.77" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="443.72" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="443.72" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="489.66" default-y="-108.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="535.6" default-y="-153.87">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="535.6" default-y="-118.87">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="93" width="539.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>47.95</staff-distance>
          </staff-layout>
        </print>
      <note default-x="76.62" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.62" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.88" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.06" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="196.23" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="230.4" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="264.58" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="298.75" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="332.92" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="344.82" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="362.82" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.34" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="435.44" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="465.34" default-y="-25" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="75.66" default-y="-152.95">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="75.66" default-y="-132.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="75.66" default-y="-117.95">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="332.92" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-142.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-122.95">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="367.1" default-y="-107.95">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="401.27" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-142.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-122.95">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="435.44" default-y="-107.95">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="469.62" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="503.79" default-y="-122.95">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="94" width="488.81">
      <note default-x="20.88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="20.88" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="20.88" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.14" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="106.31" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="140.49" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.66" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="208.83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="281.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.97" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.97" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="299.97" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.49" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="452.84" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="19.92" default-y="-137.95">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-102.95">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        </note>
      <note default-x="281.97" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="316.14" default-y="-132.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.14" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="350.32" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="384.49" default-y="-132.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="384.49" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="418.66" default-y="-107.95">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="452.84" default-y="-132.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="452.84" default-y="-97.95">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="95" width="1028.57">
      <print new-page="yes" page-number="9">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>74.45</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.62" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.62" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.64" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="241.98" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="313.33" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="384.67" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="456.02" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="527.36" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="598.71" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.71" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="616.71" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="812.74" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="955.43" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="62.66" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="62.66" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="598.71" default-y="-125">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="670.05" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="670.05" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="741.39" default-y="-125">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="812.74" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="812.74" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="884.08" default-y="-125">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="955.43" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="96" width="1028.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>83.39</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-47.13" relative-y="-54.1" font-style="italic">Rubato</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">coda rubato : balayage MI LYDIEN — sortie hors du cycle B–G–E♭</words></direction-type><staff>2</staff></direction><note default-x="89.61" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.51" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.51" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.51" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.51" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.21" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="203.28" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="237.34" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.4" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="297.81" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="331.87" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="363.14" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="389.55" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="418.31" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="444.72" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="471.13" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="497.54" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="523.95" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="552.71" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="579.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="605.53" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="634.29" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="660.7" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="687.11" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="719.37" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="753.43" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="56.46" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="779.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="806.25" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="832.66" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="859.07" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="885.48" default-y="15">
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="911.89" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="938.3" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="964.71" default-y="30">
        <pitch>
          <step>E</step>
          <octave>7</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="998.77" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>168</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>30</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="100.55" default-y="-208.39">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>5880</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="120.47" default-y="-208.39" />
        <dot default-x="126.97" default-y="-208.39" />
        <staff>2</staff>
        </note>
      <note default-x="100.55" default-y="-173.39">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>5880</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="120.47" default-y="-168.39" />
        <dot default-x="126.97" default-y="-168.39" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="97" width="785.09">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="66.42" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="100.49" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="123.66" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="146.84" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.01" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.19" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="216.36" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="239.54" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="262.72" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="285.89" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="309.07" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="332.24" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="355.42" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="378.59" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="401.77" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="424.94" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="448.12" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="471.29" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="494.47" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="517.65" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="540.82" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="564" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="587.17" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="610.35" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="633.52" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="656.7" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="679.87" default-y="40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="703.05" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>180</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>28</actual-notes>
          <normal-notes>24</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="726.22" default-y="45">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <fermata type="upright" default-y="56.9" relative-y="5">double-dot</fermata>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>5880</duration>
        </backup>
      <note default-x="403.33" default-y="-115">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="98" width="243.48">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">fin sur Mi nu</words></direction-type><staff>2</staff></direction><note default-x="109.91" default-y="-10">
        <rest measure="yes" />
        <duration>5880</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>5880</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-78.41" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="70.07" default-y="-115">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="88.07" default-y="-120" />
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — pastilles clés (structure d'ensemble + les 8
 * mesures de la tête, chiffrage jazz repris tel quel du fichier de Dany, pas
 * de cadre en un seul chiffre romain : les 3 centres tonals de la grille
 * sont d'égale importance, cf. commentaire d'en-tête et synthèse). Fonction
 * "T" pour les 8 mesures de la tête (chacune s'ouvre sur l'arrivée d'une
 * nouvelle tonique locale) ; "?" pour les mesures hors grille (intro, solo,
 * coda) où aucune fonction unique ne résume la section.
 */
export const GIANT_STEPS_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Intro",                              degre: "couleurs du cycle",                    fonction: "?" },
  { numero: 9,  nom: "Si∆–Ré7 · Sol∆–Sib7",                degre: "B∆–D7 · G∆–B♭7",                        fonction: "T" },
  { numero: 10, nom: "Mib∆ · Lam7–Ré7",                     degre: "E♭∆ · Am7–D7",                          fonction: "T" },
  { numero: 11, nom: "Sol∆–Sib7 · Mib∆–Fa#7",               degre: "G∆–B♭7 · E♭∆–F#7",                      fonction: "T" },
  { numero: 12, nom: "Si∆ · Fam7–Sib7",                     degre: "B∆ · Fm7–B♭7",                          fonction: "T" },
  { numero: 13, nom: "Mib∆ · Lam7–Ré7",                     degre: "E♭∆ · Am7–D7",                          fonction: "T" },
  { numero: 14, nom: "Sol∆ · Do#m7–Fa#7",                   degre: "G∆ · C#m7–F#7",                         fonction: "T" },
  { numero: 15, nom: "Si∆ · Fam7–Sib7",                     degre: "B∆ · Fm7–B♭7",                          fonction: "T" },
  { numero: 16, nom: "Mib∆ · Do#m7–Fa#7",                   degre: "E♭∆ · C#m7–F#7 — 16 mesures tiennent en 8", fonction: "T" },
  { numero: 33, nom: "Solo",                                degre: "6 chorus de 8 mesures sur le cycle",   fonction: "?" },
  { numero: 81, nom: "Tête out",                            degre: "reprise finale du thème",              fonction: "?" },
  { numero: 96, nom: "Coda : Mi lydien",                    degre: "balayage hors du cycle Si–Sol–Mib",    fonction: "?" },
  { numero: 98, nom: "Mi nu",                               degre: "fin, hors cycle",                      fonction: "?" },
];

export const GIANT_STEPS_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Trois centres équidistants — Si, Sol, Mib — divisant l'octave en tierces majeures égales (triade augmentée), sans hiérarchie entre eux.",
  metrique: "7/4. Très vif (242 à la noire).",
  forme: "Intro (1-8) — tête (9-16) — tête bis en voicings élargis (17-24) — variation réharmonisée (25-32) — solo écrit, 6 chorus de 8 mesures (33-80) — tête out (81-88) — coda rubato (89-98).",
  sections: [
    {
      label: "Le truc du 7/4",
      titre: "Deux mesures pour le prix d'une",
      chiffrage: "16 mesures originales → 8 mesures de 7/4",
      fonctions: "—",
      texte:
        "L'arrangement de Koller comprime chaque paire de mesures 4/4 de la grille originale dans une seule mesure de 7/4 : un temps est escamoté à chaque paire. La grille la plus essoufflante du jazz — un centre tonal par temps fort ou presque — s'en trouve encore accélérée : l'oreille n'a jamais les huit temps qu'elle attend pour digérer une paire de cadences.",
    },
    {
      label: "Mesures 9-16",
      titre: "La tête : la grille au complet",
      chiffrage: "B∆–D7·G∆–B♭7 | E♭∆·Am7–D7 | G∆–B♭7·E♭∆–F#7 | B∆·Fm7–B♭7 | E♭∆·Am7–D7 | G∆·C#m7–F#7 | B∆·Fm7–B♭7 | E♭∆·C#m7–F#7",
      fonctions: "T (×8, chaque mesure s'ouvre sur une tonique locale)",
      texte:
        "Chaque cadence prise isolément est parfaitement fonctionnelle — rien que des V7→I et des ii–V–I d'école, la syntaxe de Mozart intacte. Ce qui change, c'est la vitesse à laquelle on change de centre : Si, Sol, Mib, Si, Mib, Sol, Si, Mib — jamais le temps de s'installer.",
    },
    {
      label: "Les Coltrane changes",
      titre: "Trois toniques, une triade augmentée",
      chiffrage: "Si – Sol – Mib",
      fonctions: "—",
      texte:
        "Le circuit des trois centres tonals divise l'octave en trois parties strictement égales : Si, Sol et Mib forment une triade augmentée — le même accord unique que celui de la gamme par tons de Voiles. Cette symétrie abolit la hiérarchie : trois toniques équidistantes, aucune ne domine, le cycle tourne sans centre de gravité, exactement comme la collection par tons entiers tournait sans sensible.",
    },
    {
      label: "Mesures 33-88",
      titre: "Solo et tête out",
      chiffrage: "6 chorus de 8 mesures sur le même cycle, puis reprise du thème",
      fonctions: "?",
      texte:
        "Six chorus écrits parcourent le même cycle harmonique, avant que la tête ne revienne telle quelle refermer la forme.",
    },
    {
      label: "Mesures 89-98",
      titre: "La coda : une porte qui n'existait pas",
      chiffrage: "Balayage sur Mi lydien (Mi-Fa#-Sol#-La#-Si-Do#-Ré#), fin sur Mi nu",
      fonctions: "?",
      texte:
        "Après quatre-vingt-quinze mesures de rotation parfaite entre Si, Sol et Mib, la coda sort par une tonique qui n'appartient pas au cycle : un balayage rubato sur près de sept octaves déploie la gamme de Mi lydien, et la pièce s'éteint sur un Mi nu, sans aucun rapport fonctionnel avec Si-Sol-Mib. Le La# de ce Mi lydien est la même couleur — la #11 — suivie d'Evans à Debussy dans le reste de ce corpus.",
    },
  ],
  synthese: [
    {
      titre: "Le renversement final",
      texte:
        "Mozart faisait tourner un cycle asymétrique (les quintes) autour d'un centre gravitationnel. Coltrane fait tourner la même syntaxe cadentielle — V7 vers I, ii-V-I d'école — sur une orbite symétrique, sans gravité. La fonction a survécu à tout : Beethoven, Wagner, Debussy. Elle finit ici, moteur intact, monté sur un châssis qui ne l'est plus.",
    },
    {
      titre: "Deux divisions de l'octave, un même problème",
      texte:
        "Stravinsky superposait deux tonalités à distance de triton (division de l'octave par 2) ; Coltrane enchaîne trois tonalités à distance de tierce majeure (division par 3). Deux solutions au même épuisement de la hiérarchie des quintes — l'une par conflit vertical, l'autre par rotation horizontale.",
    },
    {
      titre: "Une couleur qui boucle sur elle-même",
      texte:
        "Le La# du Mi lydien final n'est autre que la 11e augmentée — la même couleur qui, ailleurs dans ce parcours, relie le langage de Bill Evans à celui de Debussy. Le geste le plus « sorti » de la pièce referme, sans le vouloir, une des boucles du corpus tout entier.",
    },
  ],
};
