import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-chopin-op9n2.ts
 * Harmonia — Extrait (mesure 1 = levée, mesures 2 a 9) du Nocturne en Mib
 * majeur op. 9 n 2 de Chopin, pour la section « conservatoire » du cours 6.
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « nocturne-opus-9-no-2-in-e-major.musicxml », source musescore.com/score/53288)
 * — jamais reconstruit a la main, cf. feedback-partitions-verbatim. Remplace
 * une version precedente plus courte (4 mesures, sans chiffrage, reconstruite a
 * partir d'un MIDI Mutopia). Piano a 2 portees (voix 1/2 en cle de sol, voix 5
 * en cle de fa), avec <harmony> et <lyric> (chiffrage romain) portes
 * directement sous la portee. Pas de balise <mode> (comme tous les exports de
 * Dany) : le mode majeur est INFERE par correlation de profil tonal. Armure
 * fifths=-3 (Mib majeur, 3 bemols) correctement porteuse ici (contrairement aux
 * pieces mineures de Dany, dont l'armure ne code jamais la tonalite).
 *
 * Mesure 1 = la levee celebre (un seul sib4 a la melodie, silence a la main
 * gauche) : la phrase (mesures 2-5) se repete ensuite a l'identique
 * (mesures 6-9, meme chiffrage) — la structure meme du theme du Nocturne.
 */
export const CHOPIN_OP9_N2_MESURES_1_9 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <identification>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-27</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>https://musescore.com/score/53288</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2015-12-15</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.36</page-height>
      <page-width>1190.88</page-width>
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
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.4</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">0</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.7</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.7</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Times New Roman" font-size="12"/>
    <lyric-font font-family="Times New Roman" font-size="11"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="595.439625" default-y="1626.666075" justify="center" valign="top" font-size="24">Nocturne in E♭ Major</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1134.186386" default-y="1526.666075" justify="right" valign="bottom">Frédéric François Chopin
</credit-words>
    <credit-words>(1810–1849)</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="595.439625" default-y="1569.973198" justify="center" valign="top" font-size="14">Opus 9 No. 2</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
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
    <measure number="1" width="200.69">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>78.62</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>240</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>16</divisions>
        <key>
          <fifths>-3</fifths>
          </key>
        <time>
          <beats>12</beats>
          <beat-type>8</beat-type>
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
          <words default-x="-49.11" default-y="31.2" relative-y="20" font-weight="bold">Andante </words>
          </direction-type>
        <direction-type>
          <metronome parentheses="yes" default-x="-49.11" default-y="31.2" relative-y="20">
            <beat-unit>eighth</beat-unit>
            <per-minute>132</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="66"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-40.67" relative-y="-40">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.5" default-y="-41.47" relative-y="-40">
            <other-dynamics>espr.</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="133.63" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="133.63" default-y="-125">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="797.86">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="12" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.49" default-y="5"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.5" default-y="-40.9" relative-y="-40">
            <other-dynamics>dolce</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="207.76" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          <bass-alter>-1</bass-alter>
          </bass>
        </harmony>
      <note default-x="273.02" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="49.528872" bezier-y="27.852506" number="1"/>
          </notations>
        </note>
      <note default-x="339.28" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="404.53" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="421.03" default-y="5"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="600.3" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.654924" bezier-y="29.352506"/>
          </notations>
        </note>
      <note default-x="730.81" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="14.064453" bezier-y="11.859368" number="1"/>
          </notations>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="12" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-36.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-74.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="77.25" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="14.367667" bezier-y="15.198598" number="2"/>
          </notations>
        </note>
      <note default-x="77.25" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.51" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-18.259679" bezier-y="10.198595"/>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="142.51" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.51" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.76" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56"/>
            </articulations>
          </notations>
        </note>
      <note default-x="273.02" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="12.764067" bezier-y="17.593051" number="2"/>
          </notations>
        <lyric number="1" default-x="11.9" default-y="-74.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV6</text>
          </lyric>
        </note>
      <note default-x="273.02" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="327.29" default-y="-95">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-20.36621" bezier-y="7.593045"/>
          </notations>
        </note>
      <note default-x="339.28" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="339.28" default-y="-70">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="404.53" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-36.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-74.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="469.79" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="14.367667" bezier-y="15.198598" number="2"/>
          </notations>
        </note>
      <note default-x="469.79" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="535.04" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-18.259679" bezier-y="10.198595"/>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="535.04" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="535.04" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="600.3" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-36.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="11.9" default-y="-74.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      <note default-x="665.55" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="14.367667" bezier-y="15.198598" number="2"/>
          </notations>
        </note>
      <note default-x="665.55" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="730.81" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-18.259679" bezier-y="10.198595"/>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="730.81" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="730.81" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="636.05">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>82.39</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-67.25" spread="12" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="100.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="16.84" relative-y="40" font-style="italic" font-family="Leland Text" font-size="14"></words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="37.84" relative-y="40" font-style="italic" font-family="Leland Text" font-size="14"></words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="171.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <turn/>
            </ornaments>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="313.77" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="384.99" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="420.6" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="437.09" default-y="15"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="527.42" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="598.64" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-77.990764" bezier-y="36.085556"/>
          </notations>
        </note>
      <backup>
        <duration>80</duration>
        </backup>
      <note default-x="171.33" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="208.89" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="244.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <accidental>natural</accidental>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="280.11" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="100.11" default-y="-182.39">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/II</text>
          </lyric>
        </note>
      <note default-x="135.72" default-y="-127.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="135.72" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.33" default-y="-117.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="171.33" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.33" default-y="-92.39">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="313.77" default-y="-147.39">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="349.38" default-y="-127.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="349.38" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="384.99" default-y="-112.39">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="384.99" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="384.99" default-y="-82.39">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="420.6" default-y="-167.39">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          </lyric>
        </note>
      <note default-x="456.21" default-y="-132.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="456.21" default-y="-107.39">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="491.82" default-y="-117.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="479.82" default-y="-107.39">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="491.82" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="527.42" default-y="-167.39">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="563.03" default-y="-132.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="563.03" default-y="-112.39">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="598.64" default-y="-122.39">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="598.64" default-y="-112.39">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="598.64" default-y="-97.39">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="441.11">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.49" default-y="5"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="dim7">diminished-seventh</kind>
        </harmony>
      <note default-x="118.83" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="19.98223" bezier-y="10.329879" number="1"/>
          </notations>
        </note>
      <note default-x="190.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.627134" bezier-y="16.179882"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="225.66" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="242.15" default-y="-5"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="332.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="348.98" default-y="-15"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="12" default-y="-152.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.7" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="47.61" default-y="-132.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="47.61" default-y="-107.39">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.22" default-y="-117.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="83.22" default-y="-107.39">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.22" default-y="-87.39">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.83" default-y="-152.39">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VII/VI</text>
          </lyric>
        </note>
      <note default-x="154.44" default-y="-127.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="154.44" default-y="-97.39">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.05" default-y="-107.39">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="178.05" default-y="-97.39">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="190.05" default-y="-92.39">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="225.66" default-y="-147.39">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI</text>
          </lyric>
        </note>
      <note default-x="261.27" default-y="-127.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.27" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.87" default-y="-112.39">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="296.87" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.87" default-y="-92.39">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="332.48" default-y="-157.39">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-82.7" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65/V</text>
          </lyric>
        </note>
      <note default-x="368.09" default-y="-127.39">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="368.09" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="403.7" default-y="-112.39">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="403.7" default-y="-102.39">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="403.7" default-y="-92.39">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="1077.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>86.79</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.31" default-y="-52.68" relative-y="-40">
            <f/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67"/>
        </direction>
      <note default-x="100.11" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.752092" bezier-y="22.121987" number="1"/>
          </notations>
        </note>
      <note default-x="165.13" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.756336" bezier-y="1.271974"/>
          </notations>
        </note>
      <note default-x="230.15" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="39.990206" bezier-y="23.988994" number="1"/>
          </notations>
        </note>
      <note default-x="295.16" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="360.18" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="425.2" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="490.21" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-38.030021" bezier-y="26.988996"/>
          </notations>
        </note>
      <note default-x="555.23" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="24.622213" bezier-y="20.003541" number="1"/>
          </notations>
        </note>
      <note default-x="620.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="685.26" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="701.76" default-y="-5"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.391272" bezier-y="16.003538"/>
          </notations>
        </note>
      <note default-x="880.31" default-y="-20">
        <rest/>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-32.31" relative-y="-40">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44"/>
        </direction>
      <note default-x="1010.35" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="14.004994" bezier-y="11.834273" number="1"/>
          </notations>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="100.11" default-y="-156.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.7" default-y="-71.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="165.13" default-y="-136.79">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.13" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="230.15" default-y="-121.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="230.15" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="230.15" default-y="-91.79">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.16" default-y="-191.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="425.2" default-y="-136.79">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="425.2" default-y="-111.79">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="555.23" default-y="-121.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="555.23" default-y="-91.79">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="685.26" default-y="-176.79">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-71.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="750.28" default-y="-131.79">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="750.28" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="815.3" default-y="-121.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="815.3" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="815.3" default-y="-96.79">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="880.31" default-y="-141.79">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="945.33" default-y="-131.79">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="945.33" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1010.35" default-y="-121.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="1010.35" default-y="-106.79">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1010.35" default-y="-96.79">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="1077.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="100.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.61" default-y="5"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          <bass-alter>-1</bass-alter>
          </bass>
        </harmony>
      <note default-x="262.65" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.697326" bezier-y="22.107746"/>
          <slur type="start" bezier-x="48.462642" bezier-y="28.42026" number="1"/>
          </notations>
        </note>
      <note default-x="316.84" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="371.02" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <ornaments>
            <inverted-mordent/>
            </ornaments>
          </notations>
        </note>
      <note default-x="425.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="479.38" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="533.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="587.74" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.462642" bezier-y="28.42026"/>
          </notations>
        </note>
      <note default-x="641.92" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="750.28" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop"/>
          <slur type="start" bezier-x="46.423663" bezier-y="28.731901" number="1"/>
          </notations>
        </note>
      <note default-x="804.46" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="858.64" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <ornaments>
            <inverted-mordent/>
            </ornaments>
          </notations>
        </note>
      <note default-x="912.82" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="967" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="1021.18" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="100.11" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-44.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="154.29" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="154.29" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.47" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="208.47" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.47" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="262.65" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.9" default-y="-44.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV6</text>
          </lyric>
        </note>
      <note default-x="371.02" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="371.02" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="467.38" default-y="-95">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="479.38" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="479.38" default-y="-70">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="587.74" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-44.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="641.92" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="641.92" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="696.1" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="696.1" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="696.1" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="750.28" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.9" default-y="-44.4" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      <note default-x="858.64" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="858.64" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="967" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="967" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="967" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="1077.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.39</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-69.55" spread="12" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="100.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.524525" bezier-y="7.931332"/>
          </notations>
        </note>
      <note default-x="154.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="208.47" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="262.65" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="15.317766" bezier-y="9.496081" number="1"/>
          <articulations>
            <accent default-x="-0.72" default-y="8.55"/>
            </articulations>
          </notations>
        </note>
      <note default-x="316.84" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.772591" bezier-y="13.646084"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.5" default-y="-57.57" relative-y="-40">
            <other-dynamics>cresc.</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="371.02" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="start" bezier-x="14.616938" bezier-y="10.36373" number="1"/>
          <articulations>
            <accent default-x="-0.72" default-y="13.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="425.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.473419" bezier-y="12.863732"/>
          </notations>
        </note>
      <note default-x="479.38" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="14.616938" bezier-y="10.36373" number="1"/>
          <articulations>
            <accent default-x="-0.72" default-y="23.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="533.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.473419" bezier-y="12.863732"/>
          </notations>
        </note>
      <note default-x="587.74" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="32.031346" bezier-y="21.023496" number="1"/>
          </notations>
        </note>
      <note default-x="641.92" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="696.1" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-69.63" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="750.28" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="766.77" default-y="15"/>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.387213" bezier-y="24.664903"/>
          </notations>
        </note>
      <note default-x="912.82" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="1021.18" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="100.11" default-y="-157.39">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-66.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/II</text>
          </lyric>
        </note>
      <note default-x="208.47" default-y="-137.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="208.47" default-y="-112.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.84" default-y="-127.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="316.84" default-y="-112.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="316.84" default-y="-102.39">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="425.2" default-y="-157.39">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="533.56" default-y="-137.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="533.56" default-y="-112.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="641.92" default-y="-122.39">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="641.92" default-y="-112.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="641.92" default-y="-92.39">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="750.28" default-y="-177.39">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalPed"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-66.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          </lyric>
        </note>
      <note default-x="804.46" default-y="-142.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="804.46" default-y="-117.39">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="858.64" default-y="-127.39">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="846.65" default-y="-117.39">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="858.64" default-y="-112.39">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="912.82" default-y="-177.39">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalPed"/>
          </notations>
        </note>
      <note default-x="967" default-y="-142.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="967" default-y="-122.39">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1021.18" default-y="-132.39">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="1021.18" default-y="-122.39">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1021.18" default-y="-107.39">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="1077.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="91.83" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="108.33" default-y="-5"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <trill-mark/>
            <wavy-line type="start" number="1" default-y="34.68"/>
            <wavy-line type="stop" number="1"/>
            </ornaments>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="dim7">diminished-seventh</kind>
        </harmony>
      <note default-x="803.99" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.337425" bezier-y="-11.1074"/>
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="14.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="833.66" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="11.582463" bezier-y="6.038351" number="2"/>
          </notations>
        </note>
      <note default-x="867.65" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-5.411298" bezier-y="11.888355"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="897.33" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="913.82" default-y="-5"/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="23.925541" bezier-y="12.371407" number="2"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="986.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="1002.84" default-y="-15"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-20.584396" bezier-y="17.37141"/>
          </notations>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="91.83" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="123.45" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="153.13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="182.8" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="212.47" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="242.15" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="271.82" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="301.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="331.17" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="360.84" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="390.51" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="420.19" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="449.86" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="479.53" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="509.21" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="538.88" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="568.55" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="598.23" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="627.9" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="657.57" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="687.25" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="716.92" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        </note>
      <note default-x="746.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.337425" bezier-y="-11.1074" number="1"/>
          </notations>
        </note>
      <note default-x="776.27" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type size="cue">64th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        </note>
      <forward>
        <duration>16</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>16</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>16</duration>
        </forward>
      <backup>
        <duration>88</duration>
        </backup>
      <note default-x="91.83" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.7" default-y="-56.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="329.22" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="329.22" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="566.6" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="566.6" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="566.6" default-y="-70">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="803.99" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-56.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VII/VI</text>
          </lyric>
        </note>
      <note default-x="833.66" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="833.66" default-y="-80">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="867.65" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="855.66" default-y="-80">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="867.65" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="897.33" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-56.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI</text>
          </lyric>
        </note>
      <note default-x="927" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="927" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="956.67" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="956.67" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="956.67" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="986.34" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="25.5" default-y="-56.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65/5</text>
          </lyric>
        </note>
      <note default-x="1016.02" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="1016.02" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1045.69" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="1045.69" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1045.69" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="1077.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="100.11" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.573595" bezier-y="22.050508" number="1"/>
          </notations>
        </note>
      <note default-x="164.52" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.628166" bezier-y="1.200494"/>
          </notations>
        </note>
      <note default-x="228.92" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="55.562537" bezier-y="33.896054" number="1"/>
          <articulations>
            <staccato default-x="4.93" default-y="29.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="293.32" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="357.73" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="422.13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="486.53" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="534.61" default-y="10">
        <grace slash="yes"/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-9.359042" number="2"/>
          </notations>
        </note>
      <note default-x="550.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-8.277193" bezier-y="4.490967"/>
          </notations>
        </note>
      <note default-x="615.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-43.331963" bezier-y="43.989277"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="679.74" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="696.24" default-y="-5"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="872.95" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="937.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="1001.76" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <note default-x="100.11" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="11.7" default-y="-71.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="164.52" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="164.52" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="228.92" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="228.92" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="228.92" default-y="-70">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.32" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="422.13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="422.13" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="550.94" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="550.94" default-y="-70">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="679.74" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-71.9" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="744.15" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="744.15" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="808.55" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="808.55" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="808.55" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="872.95" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="937.36" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="937.36" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1001.76" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <other-notation type="single" smufl="keyboardPedalUp"/>
          </notations>
        </note>
      <note default-x="1001.76" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="1001.76" default-y="-75">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — la mesure 1 (levee) ne porte aucun accord (voir
 * le chiffrage complet dans les <lyric> du MusicXML pour le detail battement
 * par battement de chaque mesure). Une mesure porte parfois PLUSIEURS accords
 * (ex. mesure 2 : I-IV6-I-I7) ; par convention, chaque entree retient le
 * PREMIER accord de la mesure. Les mesures 6-9 repetent exactement le
 * chiffrage des mesures 2-5.
 */
export const CHOPIN_OP9_N2_ANALYSE: MesureAnalyse[] = [
  { numero: 2, nom: "Eb",   degre: "I",       fonction: "T" },
  { numero: 3, nom: "Do7",  degre: "V7/II",   fonction: "D", dominanteSecondaire: true },
  { numero: 4, nom: "Sib7", degre: "V7",      fonction: "D" },
  { numero: 5, nom: "Sib7", degre: "V7",      fonction: "D" },
  { numero: 6, nom: "Eb",   degre: "I",       fonction: "T" },
  { numero: 7, nom: "Do7",  degre: "V7/II",   fonction: "D", dominanteSecondaire: true },
  { numero: 8, nom: "Sib7", degre: "V7",      fonction: "D" },
  { numero: 9, nom: "Sib7", degre: "V7",      fonction: "D" },
];
