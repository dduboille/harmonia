import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-brahms-op118n2.ts
 * Harmonia — Extrait (mesure 0 = levee, mesures 1 a 8) de l'Intermezzo en La
 * majeur op. 118 n 2 de Brahms, pour la section « conservatoire » du cours 7
 * (dominantes secondaires).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « intermezzo-op-118-no-2-johannes-brahms.musicxml », source
 * musescore.com/user/39375368/scores/11762053) — jamais reconstruit a la main,
 * cf. feedback-partitions-verbatim. Remplace la version precedente (notes
 * simplifiees seulement, sans partition). Piano a 2 portees (voix 1/2 en cle
 * de sol, voix 5/6 en cle de fa), avec <harmony> et <lyric> (chiffrage romain)
 * portes directement sous la portee — deja au format « X/Y » pour les
 * dominantes secondaires (V6/5/V, V4/2/V...), exactement le theme du cours.
 * Pas de balise <mode> (comme tous les exports de Dany) : le mode majeur est
 * INFERE. Armure fifths=3 (La majeur, 3 dieses) correctement porteuse ici.
 *
 * Mesure 0 = la levee (anacrouse, I a la tonique) : OMISE de l'ANALYSE
 * mesure par mesure (meme convention que la levee du Nocturne de Chopin,
 * cours 6) mais bien presente dans le MusicXML gravee/jouee.
 */
export const BRAHMS_OP118N2_MESURES_0_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Intermezzo</work-title>
    </work>
  <identification>
    <creator type="composer">Brahms</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-27</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/39375368/scores/11762053</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2023-08-09</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
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
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="600.000251" default-y="1611.426655" justify="center" valign="top" font-size="22">Intermezzo in A</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="600.000251" default-y="1554.283798" justify="center" valign="top" font-size="16">Op. 118 No.2</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.286243" default-y="1511.426655" justify="right" valign="bottom">Johannes Brahms</credit-words>
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
    <measure number="0" implicit="yes" width="185.04">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72.74</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>3</fifths>
          </key>
        <time>
          <beats>3</beats>
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
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-37.67" default-y="28.86" relative-y="20" font-weight="bold" font-size="12">Andante teneramente</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="71"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.5" default-y="-46.72" relative-y="-25">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11"/>
        </direction>
      <note default-x="125.14" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.306635" bezier-y="5.619239" number="1"/>
          </notations>
        </note>
      <note default-x="154.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.152626" bezier-y="6.863523"/>
          </notations>
        </note>
      <backup>
        <duration>4</duration>
        </backup>
      <note default-x="125.14" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="154.19" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>4</duration>
        </backup>
      <note default-x="125.14" default-y="-147.74">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="125.14" default-y="-127.74">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="1" width="189.52">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.63" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.306635" bezier-y="5.619239" number="1"/>
          </notations>
        </note>
      <note default-x="158.67" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.152626" bezier-y="6.863523"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="27.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="1.662124" bezier-y="-4.686738" number="1"/>
          </notations>
        </note>
      <note default-x="42.49" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-3.295922" bezier-y="-3.723582"/>
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="129.63" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="158.67" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="13" default-y="-182.74">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="17.79" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV64</text>
          </lyric>
        </note>
      <note default-x="71.53" default-y="-112.74">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.509951" bezier-y="6.962295" number="1"/>
          </notations>
        </note>
      <note default-x="100.58" default-y="-122.74">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.499507" bezier-y="10.424402"/>
          </notations>
        </note>
      <note default-x="129.63" default-y="-147.74">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.63" default-y="-132.74">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="209.11">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>F</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="19.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.34"/>
          </notations>
        </note>
      <note default-x="19.56" default-y="10">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.34"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-80.57" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="135.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="153.74" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.85679" bezier-y="11.02889" number="1"/>
          <slur type="start" bezier-x="55.091245" bezier-y="27.578865" number="2"/>
          </notations>
        </note>
      <note default-x="179.31" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.1072" bezier-y="9.76846"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="135.74" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="19.56" default-y="-182.74">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.794722" bezier-y="5.665439" number="1"/>
          </notations>
        <lyric number="1" default-x="11.94" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV6</text>
          </lyric>
        </note>
      <note default-x="48.6" default-y="-132.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-18.465959"/>
          </notations>
        </note>
      <note default-x="77.65" default-y="-147.74">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="4.556544" bezier-y="-11.147217" number="1"/>
          </notations>
        </note>
      <note default-x="106.7" default-y="-157.74">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.452914" bezier-y="-5.979894"/>
          </notations>
        </note>
      <note default-x="135.74" default-y="-167.74">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.404481" bezier-y="0.951623" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV</text>
          </lyric>
        </note>
      <note default-x="164.79" default-y="-132.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-15.428791"/>
          </notations>
        </note>
      </measure>
    <measure number="3" width="205.82">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="24.89" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="42.89" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.235141" bezier-y="11.631009" number="1"/>
          </notations>
        </note>
      <note default-x="68.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.728849" bezier-y="9.11056"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-80.57" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="87.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="145.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="24.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.89" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.83" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.92" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="13" default-y="-132.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="4.556544" bezier-y="11.147217" number="1"/>
          </notations>
        <lyric number="1" default-x="17.18" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V42</text>
          </lyric>
        </note>
      <note default-x="24.89" default-y="-127.74">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.89" default-y="-117.74">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="53.94" default-y="-107.74">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.452914" bezier-y="5.979894"/>
          </notations>
        </note>
      <note default-x="87.83" default-y="-137.74">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="3.217854" bezier-y="12.176846" number="1"/>
          </notations>
        <lyric number="1" default-x="11.94" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6</text>
          </lyric>
        </note>
      <note default-x="87.83" default-y="-127.74">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.88" default-y="-112.74">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.791603" bezier-y="4.425862"/>
          </notations>
        </note>
      <note default-x="145.92" default-y="-177.74">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.063166" bezier-y="4.115769" number="1"/>
          </notations>
        <lyric number="1" default-x="11.94" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II6</text>
          </lyric>
        </note>
      <note default-x="174.97" default-y="-132.74">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-17.431967"/>
          </notations>
        </note>
      </measure>
    <measure number="4" width="189.08">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          </bass>
        </harmony>
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="71.09" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-51.957274" bezier-y="33.107109"/>
          </notations>
        </note>
      <note default-x="71.09" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="dim7">diminished-seventh</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          </bass>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.5" default-y="-55.89" relative-y="-25">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-61.13" relative-y="-25" font-style="italic">dolce</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="129.19" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.306635" bezier-y="5.619239" number="1"/>
          </notations>
        </note>
      <note default-x="158.23" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.152626" bezier-y="6.863523"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="129.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="13" default-y="-162.74">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.984969" bezier-y="2.004973" number="1"/>
          </notations>
        <lyric number="1" default-x="17.79" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I64</text>
          </lyric>
        </note>
      <note default-x="42.05" default-y="-127.74">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-16.080657"/>
          </notations>
        </note>
      <note default-x="71.09" default-y="-127.74">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.152247" bezier-y="6.863915" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V</text>
          </lyric>
        </note>
      <note default-x="100.14" default-y="-122.74">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.307014" bezier-y="5.618811"/>
          </notations>
        </note>
      <note default-x="129.19" default-y="-117.74">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-73.51" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VII64/IV</text>
          </lyric>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="71.09" default-y="-127.74">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.19" default-y="-127.74">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="320.35">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>80.59</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>F</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="103.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.02" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          </bass>
        </harmony>
      <note default-x="246.71" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.022983" bezier-y="6.395751" number="1"/>
          </notations>
        </note>
      <note default-x="282.63" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.988485" bezier-y="7.648788"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="117.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="3.132526" bezier-y="-5.730873" number="1"/>
          </notations>
        </note>
      <note default-x="138.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.485137" bezier-y="-4.747544"/>
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="246.71" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="246.71" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="103.02" default-y="-165.59">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV6</text>
          </lyric>
        </note>
      <note default-x="174.87" default-y="-120.59">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.091971" bezier-y="7.979149" number="1"/>
          </notations>
        </note>
      <note default-x="210.79" default-y="-130.59">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.469693" bezier-y="11.441255"/>
          </notations>
        </note>
      <note default-x="246.71" default-y="-170.59">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="17.79" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I64</text>
          </lyric>
        </note>
      </measure>
    <measure number="6" width="254.34">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="24.89" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.78" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="182.57" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="200.57" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.429373" bezier-y="10.819461" number="1"/>
          <slur type="start" bezier-x="63.251337" bezier-y="28.048971" number="2"/>
          </notations>
        </note>
      <note default-x="224.54" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.704019" bezier-y="9.560219"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.89" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.89" default-y="0">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.58" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.58" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="24.89" default-y="-175.59">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.754414" bezier-y="-3.454184" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65/V</text>
          </lyric>
        </note>
      <note default-x="60.81" default-y="-150.59">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-3.807251" bezier-y="-14.667275"/>
          </notations>
        </note>
      <note default-x="96.74" default-y="-140.59">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.170346" bezier-y="12.572673" number="1"/>
          </notations>
        </note>
      <note default-x="96.74" default-y="-130.59">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.66" default-y="-115.59">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.391319" bezier-y="6.526905"/>
          </notations>
        </note>
      <note default-x="156.68" default-y="-155.59">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="2.759379" bezier-y="15.67211" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V42/V</text>
          </lyric>
        </note>
      <note default-x="168.58" default-y="-150.59">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="204.5" default-y="-120.59">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.802286" bezier-y="1.875358"/>
          </notations>
        </note>
      </measure>
    <measure number="7" width="242.07">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>G</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="18.76" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="36.75" default-y="-5"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.585055" bezier-y="12.282381" number="1"/>
          </notations>
        </note>
      <note default-x="72.64" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.707245" bezier-y="11.015986"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-83.75" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="96.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="168.43" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.43" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.43" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="18.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.59" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-160.59">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.356616" bezier-y="0.754468" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>III7/I</text>
          </lyric>
        </note>
      <note default-x="18.76" default-y="-150.59">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="54.68" default-y="-125.59">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-1.205049" bezier-y="-17.331162"/>
          </notations>
        </note>
      <note default-x="96.59" default-y="-155.59">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.469693" bezier-y="11.441255" number="1"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="96.59" default-y="-130.59">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.51" default-y="-120.59">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.091971" bezier-y="7.979149"/>
          </notations>
        </note>
      <note default-x="168.43" default-y="-150.59">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.474881" bezier-y="8.247748" number="1"/>
          </notations>
        </note>
      <note default-x="204.35" default-y="-130.59">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.536587" bezier-y="5.740444"/>
          </notations>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="168.43" default-y="-150.59">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/V</text>
          </lyric>
        </note>
      </measure>
    <measure number="8" width="211.81">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          </bass>
        </harmony>
      <note default-x="21.56" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="21.56" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="21.56" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="84.42" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-58.670293" bezier-y="36.677965"/>
          </notations>
        </note>
      <note default-x="84.42" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.42" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="147.28" default-y="0">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="147.28" default-y="-40">
        <rest/>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="21.56" default-y="-170.59">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="14.451803" bezier-y="22.29876" number="1"/>
          </notations>
        </note>
      <note default-x="57.48" default-y="-150.59">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.36" default-y="-135.59">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.468537" bezier-y="9.29494"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V</text>
          </lyric>
        </note>
      <note default-x="147.28" default-y="-120.59">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>12</duration>
        </backup>
      <note default-x="36.05" default-y="-170.59">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="-8" default-y="-69.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/V</text>
          </lyric>
        </note>
      <note default-x="147.28" default-y="-160.59">
        <rest/>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degre/fonction) — premier accord de
 * chaque mesure, transcrit depuis le chiffrage <harmony>/<lyric> deja ecrit
 * par Dany dans le fichier (voir commentaire d'en-tete). Mesure 0 (levee)
 * omise, comme pour le Nocturne de Chopin.
 *
 * Mesure 4 : fonction corrigee en D (et non T) — bien que le chiffrage
 * ecrive « I6/4 », la basse reelle (Mi) est IDENTIQUE a celle de l'accord de
 * V qui suit immediatement (meme note tenue) : c'est un classique « 6/4 de
 * cadence », qui decore la dominante plutot qu'il ne prolonge la tonique.
 */
export const BRAHMS_OP118N2_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Ré",  degre: "IV6/4",   fonction: "SD" },
  { numero: 2, nom: "Ré",  degre: "IV6",     fonction: "SD" },
  { numero: 3, nom: "Mi7", degre: "V4/2",    fonction: "D" },
  { numero: 4, nom: "La",  degre: "I6/4",    fonction: "D" },
  { numero: 5, nom: "Ré",  degre: "IV6",     fonction: "SD" },
  { numero: 6, nom: "Si7", degre: "V6/5/V",  fonction: "D", dominanteSecondaire: true },
  { numero: 7, nom: "Si",  degre: "III7/I",  fonction: "D" },
  { numero: 8, nom: "Si7", degre: "V",       fonction: "D" },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les <harmony>/
 * <lyric>/hauteurs reelles) avant redaction, PAS recopiee du brouillon Gemini
 * fourni par Dany en reference (dont certaines lectures se sont averees
 * fausses a la verification : cf. mesure 7 ci-dessous).
 *
 * Mesure 4, 3e accord : attention, DEUX voix graves sonnent en meme temps a
 * cet instant (voix 5, celle qui porte tous les chiffrages du morceau : Sol
 * becarre : ET voix 6, simple doublure/pedale : Mi, objectivement plus grave).
 * Le <bass-step> de la balise <harmony> dit Mi (la doublure), mais le
 * chiffrage romain que Dany a lui-meme ecrit dit « 64 » (2e renversement,
 * donc Sol a la basse FONCTIONNELLE) — verifie par script sur le vrai fichier
 * avant redaction (un premier essai avait suivi la mauvaise piste, corrige
 * ici). C'est ce chiffrage manuscrit qui fait foi, comme pour tout le reste
 * du morceau.
 *
 * Mesure 7, 1er accord : ni le chiffrage de Dany (« III7/I ») ni les deux
 * hypotheses de Gemini (« iii7/I ou V7/vi ») ne collent vraiment aux hauteurs
 * reelles (Sol#-Si-Ré#-Fa#, verifiees par script) ni a la bonne resolution
 * vers le I qui suit — la lecture proposee ici (accord de sensible altere,
 * cf. section correspondante) explique mieux la conduite des voix.
 */
export const BRAHMS_OP118N2_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "La majeur (armure de 3 dièses). Toute la phrase gravite vers la dominante " +
    "(Mi) : chaque halte un peu longue s'y tonicise une seconde fois via sa " +
    "propre dominante secondaire (V/IV puis, deux fois, V/V) — l'exemple même " +
    "du thème du cours.",
  metrique: "3/4, Andante teneramente. Anacrouse d'un seul temps (levée sur le 3ᵉ temps).",
  forme:
    "Une seule grande phrase de 8 mesures (+ levée), en un seul geste ascendant : " +
    "elle ne referme pas sur la tonique mais s'arrête en demi-cadence, rehaussée " +
    "par sa propre dominante secondaire (V7/V → V), suspendue pour la suite.",
  sections: [
    {
      label: "Levée & mesure 1",
      titre: "La tonique, puis la sous-dominante en 2ᵉ renversement",
      chiffrage: "A | D/A",
      fonctions: "I | IV6/4",
      texte:
        "La levée pose doucement le degré <strong>I</strong> (La majeur). La mesure 1 " +
        "s'installe sur <strong>IV6/4</strong> (Ré majeur, quinte à la basse) : la basse " +
        "reste sur La — qui est la tonique du morceau, mais joue ici le rôle de simple " +
        "quinte de l'accord de IV — avant une brève broderie (Fa#) qui prépare la mesure " +
        "suivante. Aucune altération pour l'instant : nous sommes au cœur du ton principal.",
    },
    {
      label: "Mesures 2-3",
      titre: "Résolution de la sous-dominante, petite marche cadentielle",
      chiffrage: "D/F# – D | E7/D – A/C# – Bm/D",
      fonctions: "IV6 – IV | V4/2 – I6 – ii6",
      texte:
        "La mesure 2 boucle la sous-dominante : premier renversement (<em>IV6</em>, " +
        "basse Fa#) puis position fondamentale (<em>IV</em>). La mesure 3 enchaîne trois " +
        "accords en descente conjointe de la basse (Ré–Do#–Ré) : une dominante de passage " +
        "en 3ᵉ renversement (<strong>V4/2</strong>), la tonique en 1ᵉʳ renversement " +
        "(<strong>I6</strong>), puis <strong>ii6</strong> — un petit mouvement cadentiel " +
        "qui referme la première demi-phrase sans jamais s'arrêter.",
    },
    {
      label: "Mesure 4",
      titre: "Un 6/4 de cadence, puis la dominante secondaire du IV",
      chiffrage: "A/E (6/4 cadentiel) – E – vii°/G",
      fonctions: "D – D – vii°6/4/IV",
      texte:
        "Le premier accord s'écrit « I6/4 » mais sa basse (Mi) est exactement celle de " +
        "l'accord de <strong>V</strong> qui le suit immédiatement sans bouger : c'est un " +
        "classique <em>6/4 de cadence</em>, une simple broderie de la dominante — d'où sa " +
        "fonction <strong>D</strong> et non tonique, malgré l'orthographe « I ». " +
        "Le 3ᵉ temps introduit la première vraie couleur chromatique de la pièce : une " +
        "triade diminuée sur Do# (Do#-Mi-Sol), dont le Sol est marqué comme altération " +
        "accidentelle dans la partition — il remplace le Sol# diatonique du ton. C'est la " +
        "dominante secondaire (la sensible) de la sous-dominante, en 2ᵉ renversement " +
        "(<strong>vii°6/4/IV</strong>) : le Sol bécarre va résoudre vers la tierce de " +
        "l'accord de Ré à la mesure suivante.",
    },
    {
      label: "Mesures 5-6",
      titre: "Retour, puis la Dominante de la Dominante",
      chiffrage: "D/F# – A/E (6/4 cadentiel) | B7/D# – B7/A",
      fonctions: "IV6 – D | V6/5/V – V4/2/V",
      texte:
        "La mesure 5 reprend exactement le geste des mesures 1-2 (IV6 puis un nouveau " +
        "6/4 cadentiel sur la dominante). La mesure 6 introduit la seconde et plus " +
        "importante altération de la pièce : un <strong>Ré dièse</strong>, sensible " +
        "artificielle qui n'appartient pas au ton de La majeur. Il transforme la basse " +
        "en Si7 — la dominante de Mi, c'est-à-dire <strong>la dominante de la dominante " +
        "(V/V)</strong> — d'abord en 1ᵉʳ renversement (<em>V6/5/V</em>) puis en 3ᵉ " +
        "renversement, la 7ᵉ à la basse (<em>V4/2/V</em>) : exactement le mécanisme " +
        "annoncé par le cours.",
    },
    {
      label: "Mesure 7",
      titre: "L'accord ambigu : sixte ajoutée ou septième altérée ?",
      chiffrage: "Sol#-Si-Ré#-Fa# (Si6 ≈ Sol#m7) – A – B7",
      fonctions: "sensible altérée (D) – I – V7/V",
      texte:
        "Cet accord a de quoi hésiter, et c'est légitime : les quatre notes réellement " +
        "jouées (Sol#, Si, Ré#, Fa#, Sol# à la basse) forment une sonorité classiquement " +
        "ambiguë. Lues à partir de Si (la basse « théorique » du chiffrage), ce sont les " +
        "notes d'un Si majeur avec <em>sixte ajoutée</em> à la basse. Mais lues à partir " +
        "de la note réellement la plus grave (Sol#), ce sont exactement celles d'un " +
        "<strong>Sol# mineur 7</strong> en position fondamentale — la même ambiguïté que " +
        "« Do6 = Lam7 ». C'est cette seconde lecture qui explique le mieux la suite : Sol# " +
        "est la sensible du ton et monte tout naturellement vers <strong>La</strong> " +
        "(le <em>I</em> qui arrive au 2ᵉ temps), pendant que Ré# — la même sensible " +
        "chromatique qu'aux mesures 5-6 — continue de tirer vers Mi. Le 3ᵉ temps relance " +
        "aussitôt <strong>V7/V</strong> : cette mesure ne fait que respirer une fraction " +
        "de seconde sur la tonique avant de repartir vers la dominante.",
    },
    {
      label: "Mesure 8",
      titre: "Demi-cadence renforcée par sa propre dominante",
      chiffrage: "B7/E → E",
      fonctions: "V7/V → V",
      texte:
        "La phrase s'arrête sur la dominante (Mi majeur), et non sur la tonique : une " +
        "<strong>demi-cadence</strong>. Mais Brahms la renforce en la faisant précéder " +
        "une dernière fois de sa propre dominante secondaire (<strong>V7/V</strong>), sur " +
        "une pédale de Mi à la basse — l'accord de Mi n'arrive donc jamais vraiment " +
        "« au repos » : il reste en suspens, ouvert sur la suite de la pièce.",
    },
  ],
  synthese: [
    {
      titre: "Une phrase entièrement tournée vers la dominante",
      texte:
        "Le morceau part de la tonique mais ne s'y arrête jamais vraiment : dès la " +
        "mesure 1, la basse porte déjà la note Mi (dominante) sous un habillage de sous- " +
        "dominante, et les deux tiers de la phrase (mesures 4 à 8) tonicisent tour à tour " +
        "le IV puis, deux fois, le V lui-même. La demi-cadence finale n'est donc pas une " +
        "surprise : c'est l'aboutissement logique d'une phrase construite comme une " +
        "marche vers Mi.",
    },
    {
      titre: "Une même altération, deux destinations différentes",
      texte:
        "Le Sol bécarre de la mesure 4 et le Ré dièse des mesures 6-7 jouent exactement " +
        "le même rôle (sensible chromatique empruntée) mais pointent vers deux degrés " +
        "différents — le IV pour l'un, le V pour l'autre. Aucune altération n'est " +
        "décorative : chacune annonce précisément l'accord qu'elle tonicise.",
    },
    {
      titre: "Quand une seule ligne mélodique porte deux lectures",
      texte:
        "L'accord de la mesure 7 rappelle qu'un même groupe de notes peut s'analyser de " +
        "deux façons également correctes (sixte ajoutée / accord de septième relatif) — " +
        "c'est la conduite des voix qui, en pareil cas, tranche entre les deux lectures.",
    },
  ],
};
