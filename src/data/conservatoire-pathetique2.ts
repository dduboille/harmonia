import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-pathetique2.ts
 * Harmonia — Extrait (mesures 1 a 8) du 2e mouvement (Adagio cantabile, La bemol
 * majeur) de la Sonate « Pathetique » op. 13 de Beethoven, pour la section
 * « conservatoire » du cours 2.
 *
 * MusicXML VERBATIM : export MuseScore Studio 4.6.3 de Dany (meme demarche que
 * BWV846_MESURES_1_8 dans conservatoire-bwv846.ts, voir son commentaire d'en-tete
 * pour le detail de la convention), repris tel quel pour une fidelite exacte a sa
 * presentation - groupes de ligature explicites, couleurs de tete de note par
 * fonction tonale (notehead color, bleu=tonique #0000FF, orange=sous-dominante
 * #FFAA00, rouge=dominante #FF0000, appliquees note par note, pas uniformement sur
 * toute la mesure), symboles d'accords (harmony) au-dessus de la portee, chiffrage
 * romain + fonction en paroles (lyric) sous la basse de chaque mesure. Voix : 1 =
 * melodie (portee 1), 2 = accompagnement (portee 1), 5 = basse (portee 2).
 *
 * Analyse harmonique des 8 mesures (cf. PATHETIQUE2_ANALYSE plus bas, qui reprend
 * les memes lectures que les paroles du fichier) : I - I6 (3ce a la basse) - I -
 * V (tenue toute la mesure) - IV (tenue toute la mesure, "retrogression" V→IV
 * authentique, pas une simplification) - I6 - ii (seule triade mineure de
 * l'extrait) - I (pedale de tonique doublee a l'octave, cloture de la phrase).
 */
export const PATHETIQUE2_MESURES_1_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Sonata No. 8 &quot;Pathetique&quot;</work-title>
    </work>
  <identification>
    <creator type="composer">L.V. Beethoven</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-25</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/34745720/scores/6187402</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2020-06-01</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.4</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>2014.57</page-height>
      <page-width>1471.63</page-width>
      <page-margins type="even">
        <left-margin>62.5</left-margin>
        <right-margin>62.5</right-margin>
        <top-margin>62.5</top-margin>
        <bottom-margin>125</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>62.5</left-margin>
        <right-margin>62.5</right-margin>
        <top-margin>62.5</top-margin>
        <bottom-margin>125</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.6</line-width>
      <line-width type="heavy barline">5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.5</line-width>
      <line-width type="octave shift">1</line-width>
      <line-width type="slur middle">1.5</line-width>
      <line-width type="slur tip">0.7</line-width>
      <line-width type="staff">0.8</line-width>
      <line-width type="stem">1.3</line-width>
      <line-width type="tie middle">1.5</line-width>
      <line-width type="tie tip">0.7</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.3</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Emmentaler"/>
    <word-font font-family="FreeSerif" font-size="10"/>
    <lyric-font font-family="FreeSerif" font-size="11"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="735.8126" default-y="1952.069216" justify="center" valign="top" font-size="24">Sonata No. 8 &quot;Pathetique&quot;</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="735.8126" default-y="1889.569216" justify="center" valign="top" font-size="14">Op. 13</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1409.125166" default-y="1799.231311" justify="right" valign="bottom" font-size="12">L.V. Beethoven</credit-words>
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
    <measure number="1" width="414.27">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>71.51</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>246.34</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        <measure-layout>
          <measure-distance>71.51</measure-distance>
          </measure-layout>
        </print>
      <attributes>
        <divisions>24</divisions>
        <key>
          <fifths>-4</fifths>
          </key>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
          </time>
        <staves>2</staves>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-35.97" default-y="6.99" relative-x="-68.4" relative-y="64.97" font-weight="bold" font-size="11">Adagio cantabile</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="71"/>
        </direction>
      <sound tempo="31"/>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.58" default-y="-40" relative-y="-40">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44"/>
        </direction>
      <note default-x="137.32" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="74.270713" bezier-y="37.916539" number="1"/>
          </notations>
        </note>
      <note default-x="274.99" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="137.32" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="171.74" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="206.16" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="240.57" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="274.99" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="309.41" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="343.83" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="378.25" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="137.32" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="64.798832" bezier-y="32.865376" number="2"/>
          </notations>
        <lyric number="1" default-x="9.89" default-y="-54.66" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(T)</text>
          </lyric>
        </note>
      <note default-x="274.99" default-y="-125">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="286.95">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <note default-x="10" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="26.66" default-y="25"/>
        <stem color="#0000FF">up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="216.51" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-76.159134" bezier-y="33.964527"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.42" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.84" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.26" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.67" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="182.09" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="216.51" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="250.93" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.89" default-y="-54.66" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6(T)</text>
          </lyric>
        </note>
      <note default-x="147.67" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-64.344248" bezier-y="33.746693"/>
          </notations>
        </note>
      </measure>
    <measure number="3" width="286.95">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="10" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.764437" bezier-y="25.525599" number="1"/>
          </notations>
        </note>
      <note default-x="78.84" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="147.67" default-y="35">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="216.51" default-y="40">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.168162" bezier-y="20.912938"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.42" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.84" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.26" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.67" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="182.09" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="216.51" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="250.93" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="33.273478" bezier-y="-32.543078" number="1"/>
          </notations>
        <lyric number="1" default-x="9.89" default-y="-54.66" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(T)</text>
          </lyric>
        </note>
      <note default-x="78.84" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="147.67" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="216.51" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.149161" bezier-y="-36.399412"/>
          </notations>
        </note>
      </measure>
    <measure number="4" width="286.95">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="10" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="26.66" default-y="25"/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="38.413284" bezier-y="28.07962" number="1"/>
          </notations>
        </note>
      <note default-x="216.51" default-y="20">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.42" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.84" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.26" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.67" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="182.09" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="216.51" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="250.93" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="42.068557" bezier-y="25.195693" number="2"/>
          </notations>
        <lyric number="1" default-x="9.89" default-y="-54.66" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V(D)</text>
          </lyric>
        </note>
      <note default-x="147.67" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="414.32">
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
          <root-step>D</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="116.26" default-y="25">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.356933" bezier-y="8.608162"/>
          </notations>
        </note>
      <note default-x="255.11" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="271.77" default-y="5"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.393742" bezier-y="19.702266" number="1"/>
          </notations>
        </note>
      <note default-x="359.25" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="389.56" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.804076" bezier-y="17.656225"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="116.26" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="150.97" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.69" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="220.4" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="255.11" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="289.82" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="324.53" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="359.25" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="116.26" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.89" default-y="-76.29" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV(SD)</text>
          </lyric>
        </note>
      <note default-x="255.11" default-y="-125">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.787308" bezier-y="22.684598"/>
          </notations>
        </note>
      </measure>
    <measure number="6" width="296.85">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <note default-x="17.56" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="44.132757" bezier-y="26.608239" number="1"/>
          </notations>
        </note>
      <note default-x="156.4" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.56" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="52.27" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.98" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="121.69" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="156.4" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="191.12" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="225.83" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="260.54" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.56" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="61.603495" bezier-y="-40.863879" number="2"/>
          </notations>
        <lyric number="1" default-x="9.89" default-y="-76.29" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6(T)</text>
          </lyric>
        </note>
      <note default-x="156.4" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="289.3">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="10" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-43.162807" bezier-y="28.15441"/>
          </notations>
        </note>
      <note default-x="148.85" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.95073" bezier-y="10.810111" number="1"/>
          <articulations>
            <staccato default-x="7.15" default-y="46.45"/>
            </articulations>
          </notations>
        </note>
      <note default-x="183.56" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.15" default-y="43.98"/>
            </articulations>
          </notations>
        </note>
      <note default-x="218.27" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.15" default-y="41.52"/>
            </articulations>
          </notations>
        </note>
      <note default-x="252.98" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.16119" bezier-y="13.864324"/>
          <articulations>
            <staccato default-x="7.15" default-y="39.05"/>
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.71" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="79.42" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.14" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="148.85" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="183.56" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="218.27" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="252.98" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.89" default-y="-76.29" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II(SD)</text>
          </lyric>
        </note>
      <note default-x="148.85" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-63.490888" bezier-y="-34.14284"/>
          </notations>
        </note>
      </measure>
    <measure number="8" width="346.16">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="26.786726" bezier-y="19.285306" number="1"/>
          </notations>
        </note>
      <note default-x="10" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.85" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.575814" bezier-y="18.139078"/>
          </notations>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="253.41" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" show-number="none"/>
          <articulations>
            <staccato placement="below" default-x="4.18" default-y="-59.52"/>
            </articulations>
          </notations>
        </note>
      <note default-x="280.8" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.18" default-y="-49.52"/>
            </articulations>
          </notations>
        </note>
      <note default-x="308.18" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop"/>
          <articulations>
            <staccato placement="below" default-x="4.18" default-y="-32.6"/>
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="20.848559" bezier-y="-12.294897" number="1"/>
          </notations>
        </note>
      <note default-x="44.71" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="79.42" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.14" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.851049" bezier-y="-12.290674"/>
          </notations>
        </note>
      <note default-x="148.85" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no"/>
          <articulations>
            <staccato placement="above" default-x="4.18" default-y="-17.4"/>
            </articulations>
          </notations>
        </note>
      <note default-x="176.23" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="4.18" default-y="-7.4"/>
            </articulations>
          </notations>
        </note>
      <note default-x="203.61" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop"/>
          <articulations>
            <staccato placement="above" default-x="4.18" default-y="9.52"/>
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="10" default-y="-175">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.89" default-y="-76.29" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(T)</text>
          </lyric>
        </note>
      <note default-x="79.42" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="148.85" default-y="-175">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="253.41" default-y="-125">
        <rest/>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`;

/**
 * Analyse mesure par mesure de `PATHETIQUE2_MESURES_1_8`, identique aux paroles
 * du fichier (chiffrage romain + fonction sous chaque mesure).
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

/**
 * Analyse harmonique NARRATIVE — vérifiée mesure par mesure contre les hauteurs
 * RÉELLES du MusicXML ci-dessus (pas recopiée telle quelle d'un premier jet fourni
 * par Dany, généré ailleurs). Deux erreurs corrigées :
 *  - la mesure 4 (V) n'a PAS de septième : le premier jet y décrivait un triton
 *    sensible/7e ("la tétrade de V7") — l'accord réel est une simple triade
 *    mi♭-sol-si♭, sans ré♭ nulle part dans la mesure (vérifié note par note) ;
 *  - à la mesure 2 (I6), le do n'est affirmé QU'à la basse — ni le chant (qui
 *    chante mi♭ puis ré♭) ni l'accompagnement (qui alterne la♭-mi♭ puis
 *    la♭-si♭) ne le reprennent, contrairement à ce qu'affirmait le premier jet.
 *
 * Aucun conflit avec une lecture antérieure de Dany cette fois (contrairement à
 * BWV846/cours 1) — la couleur de chaque mesure correspond déjà exactement à sa
 * fonction chiffrée, rien à corriger de ce côté.
 */
export const PATHETIQUE2_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "La♭ majeur (4 bémols à l'armure : si♭, mi♭, la♭, ré♭).",
  metrique: "2/4.",
  forme: "Deux phrases de 4 mesures. La 1re (mes. 1-4) affirme la tonique sous ses trois visages (fondamentale, 1er renversement, fondamentale) puis atteint la dominante. La 2e (mes. 5-8) s'ouvre par un mouvement rare — la dominante glisse DIRECTEMENT vers la sous-dominante, sans passer par la tonique — avant de refermer la phrase par un retour complet à I.",
  sections: [
    {
      label: "Mesures 1-3",
      titre: "Trois visages de la tonique",
      chiffrage: "Ab  |  Ab/C  |  Ab",
      fonctions: "I  |  I6  |  I",
      texte:
        "La mesure 1 pose l'accord de tonique à l'état fondamental : la fondamentale (la♭) est doublée entre la basse et l'accompagnement, pendant que le chant entonne la tierce (do). La mesure 2 renverse le même accord — la basse porte maintenant la <strong>tierce</strong> (do), et non plus la fondamentale : c'est le 1er renversement (I6), qui allège la basse sans changer la fonction (toujours bleu, toujours tonique). La mesure 3 revient à l'état fondamental, la basse redescendant sur la♭.",
    },
    {
      label: "Mesures 4-5",
      titre: "La dominante, puis une « rétrogression » vers la sous-dominante",
      chiffrage: "Eb  |  Db",
      fonctions: "V  |  IV",
      texte:
        "Premier changement de fonction de l'extrait : l'accord mi♭-sol-si♭ (V), à l'état fondamental, colore tout en rouge. C'est une triade simple, SANS septième — le sol (sensible du ton) y est bien présent, prêt à tirer vers la tonique. Mais au lieu de résoudre vers I comme l'oreille l'attend, l'harmonie recule vers la sous-dominante (mesure 5, ré♭ majeur) : une <strong>rétrogression</strong> authentique, pas une simplification d'écriture — le repos sur la tonique attendra encore trois mesures.",
    },
    {
      label: "Mesures 6-7",
      titre: "Un accord de passage, puis la seule triade mineure de l'extrait",
      chiffrage: "Ab/C  |  Bbm",
      fonctions: "I6  |  ii",
      texte:
        "La basse redescend par degrés conjoints (ré♭ → do → si♭), reliant la sous-dominante de la mesure 5 au ii de la mesure 7 par un bref retour à la tonique en 1er renversement (mesure 6 — un accord de PASSAGE, pas un vrai repos). La mesure 7 introduit si♭ mineur (ii), la <strong>seule triade mineure de tout l'extrait</strong> : couleur orange, comme IV — les deux degrés de la famille sous-dominante.",
    },
    {
      label: "Mesure 8",
      titre: "Retour et clôture",
      chiffrage: "Ab",
      fonctions: "I",
      texte:
        "La basse achève sa descente sur la♭, doublé à l'octave dans le grave : la phrase se referme sur la tonique. Le chant conclut sur un arpège complet de l'accord (la♭-do-mi♭-la♭), après une brève appoggiature.",
    },
  ],
  synthese: [
    {
      titre: "Le code couleur suit toujours la fonction",
      texte: "Bleu = tonique (I, I6), orange = sous-dominante (IV, ii), rouge = dominante (V) — même convention que dans les autres partitions du conservatoire. Ici, contrairement au Prélude de Bach (cours 1), aucune couleur ne contredit son propre chiffrage : chaque teinte correspond exactement à la forme de l'accord.",
    },
    {
      titre: "La rétrogression V→IV",
      texte: "Résoudre une dominante n'est pas une obligation mécanique : ici, elle glisse vers la sous-dominante avant que la tonique ne revienne, à la mesure 8 seulement — à repérer par contraste avec l'attente V→I que pose la règle générale.",
    },
    {
      titre: "Une seule triade mineure",
      texte: "Sur les 8 mesures, un seul accord est mineur : le ii (si♭ mineur) de la mesure 7 — la couleur d'ensemble reste résolument majeure, à l'image de la tonalité (la♭ majeur).",
    },
  ],
};
