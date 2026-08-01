import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-schubert-d845.ts
 * Harmonia — Extrait (mesures 1 a 10) du 1er mouvement (Moderato, la mineur)
 * de la Sonate pour piano n 16 D.845 de Schubert, pour la section
 * « conservatoire » du cours 5 (emprunts modaux).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « schubert sonate.musicxml ») — jamais reconstruit a la main, cf.
 * feedback-partitions-verbatim. Piano a 2 portees (voix 1/2 en cle de sol,
 * voix 5/6 en cle de fa), avec <harmony> et <lyric> (chiffrage romain) portes
 * directement sous la portee. Pas de balise <mode> (comme tous les exports de
 * Dany) : le mode mineur est INFERE par correlation de profil tonal. Armure
 * fifths=0 qui ne code aucune tonalite ici — toutes les alterations sont
 * ecrites en clair note par note.
 *
 * Piece choisie pour ce cours : elle expose deux sixtes augmentees (It+6 aux
 * mesures 4 et 9, Fr+6 a la mesure 10) — l'illustration meme de l'emprunt
 * chromatique pre-dominant qu'enseigne le cours 5.
 *
 * `<sound tempo="90">` ajoute a la mesure 1 (absent du fichier d'origine) :
 * sans tempo ecrit, notre horloge audio suppose 90 bpm mais Verovio suppose
 * 120 bpm pour sa PROPRE table de temps MIDI (celle qui pilote le
 * surlignage des notes pendant la lecture) — les deux derivent l'une de
 * l'autre. Un tempo explicite fait lire le meme chiffre aux deux systemes ;
 * ne change pas la vitesse de lecture (90 etait deja le repli utilise).
 * Detail complet du diagnostic dans conservatoire-beethoven-op27n2.ts.
 */
export const SCHUBERT_D845_MESURES_1_10 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Partition sans titre</work-title>
    </work>
  <identification>
    <creator type="composer">Compositeur / Arrangeur</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-26</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2026-07-26</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      <miscellaneous-field name="subtitle">Sous-titre</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1696.94</page-height>
      <page-width>1200.48</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
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
    <credit-words default-x="600.241935" default-y="1611.210312" justify="center" valign="top" font-size="22">Piano Sonata No. 16</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="600.241935" default-y="1554.060198" justify="center" valign="top" font-size="14">1er mouvement - Premières mesures</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.7587" default-y="1511.210312" justify="right" valign="bottom">Franz Schubert</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
      <part-abbreviation>Pia.</part-abbreviation>
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
    <measure number="1" width="265.26">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>186.13</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>74.12</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>0</fifths>
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
            <per-minute>90</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="90"/>
        </direction>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.1" default-y="-46.71" relative-y="-20">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67"/>
        </direction>
      <note default-x="82.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.479501" bezier-y="38.749266" number="1"/>
          </notations>
        </note>
      <note default-x="104.01" default-y="-20">
        <grace/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="116.1" default-y="-15">
        <grace/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="132.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="176.11" default-y="-25">
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
      <note default-x="219.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          <articulations>
            <accent default-x="-0.72" default-y="6"/>
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.1" default-y="-40" relative-y="-20">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="36.67"/>
        </direction>
      <note default-x="82.98" default-y="-104.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="36.799925" bezier-y="44.21352" number="2"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="102.24" default-y="-109.12">
        <grace/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="116.1" default-y="-104.12">
        <grace/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="132.43" default-y="-109.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="176.11" default-y="-114.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.78" default-y="-94.12">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          <articulations>
            <accent default-x="-0.72" default-y="31"/>
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="2" width="165.3">
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="41.62" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="61.03" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="98.44" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.520882" bezier-y="37.202229"/>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="12.5" default-y="-94.12">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="41.62" default-y="-104.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="61.03" default-y="-114.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.44" default-y="-129.12">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="98.44" default-y="-129.12"/>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-26.175456" bezier-y="50.863111"/>
          </notations>
        </note>
      </measure>
    <measure number="3" width="200.23">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.32" default-y="-77.59" relative-y="-20">
            <mf/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89"/>
        </direction>
      <note default-x="12.5" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-40">
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
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <direction placement="above">
        <direction-type>
          <words default-y="41.21" relative-y="10">un poco ritard.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="66.4" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="66.4" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.4" default-y="-40">
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
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="110.62" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="110.62" default-y="-50">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.62" default-y="-40">
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
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>G</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="154.75" default-y="-55">
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
          <articulations>
            <staccato default-x="4.93" default-y="-64.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="154.75" default-y="-40">
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
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="12.5" default-y="-139.12">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="11.94" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6</text>
          </lyric>
        </note>
      <note default-x="12.5" default-y="-129.12">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.4" default-y="-144.12">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="19.8" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V4/3</text>
          </lyric>
        </note>
      <note default-x="66.4" default-y="-129.12">
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
      <note default-x="110.62" default-y="-149.12">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="110.62" default-y="-129.12">
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
      <note default-x="154.75" default-y="-154.12">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="11.54" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6</text>
          </lyric>
        </note>
      <note default-x="154.75" default-y="-129.12">
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
    <measure number="4" width="149.89">
      <harmony print-frame="no">
        <root>
          <root-step></root-step>
          </root>
        <kind text="It+6">other</kind>
        </harmony>
      <note default-x="21.36" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="21.36" default-y="-45">
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
      <note default-x="21.36" default-y="-25">
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
      <note default-x="65.03" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="83.03" default-y="-65"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.03" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="83.03" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.03" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="83.03" default-y="-25"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="21.36" default-y="-159.12">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="17.79" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>it+6</text>
          </lyric>
        </note>
      <note default-x="21.36" default-y="-129.12">
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
      <note default-x="65.03" default-y="-164.12">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="83.03" default-y="-159.12"/>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V</text>
          </lyric>
        </note>
      <note default-x="65.03" default-y="-129.12">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="83.03" default-y="-129.12"/>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="198.36">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="dim">diminished</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="4.72" default-y="-43.88" relative-y="-20">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67"/>
        </direction>
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="28.074125" bezier-y="30.230983" number="1"/>
          </notations>
        </note>
      <note default-x="37.1" default-y="-15">
        <grace/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="49.2" default-y="-10">
        <grace/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="65.52" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.2" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.88" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          <articulations>
            <accent default-x="-0.72" default-y="11.25"/>
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.1" default-y="-40" relative-y="-20">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="36.67"/>
        </direction>
      <note default-x="12.5" default-y="-99.12">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.584098" bezier-y="35.321195" number="2"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-61.12" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          </lyric>
        </note>
      <note default-x="33.23" default-y="-104.12">
        <grace/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="48.69" default-y="-99.12">
        <grace/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="65.52" default-y="-104.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.2" default-y="-109.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.88" default-y="-89.12">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          <articulations>
            <accent default-x="-0.72" default-y="36.25"/>
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="6" width="210.46">
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
      <note default-x="60.86" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="89.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="108.98" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="127.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="145.85" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.875729" bezier-y="20.928942"/>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="60.86" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="89.18" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="108.98" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="127.86" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="145.85" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-3.936783" bezier-y="33.840154"/>
          </notations>
        </note>
      </measure>
    <measure number="7" width="214.03">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.32" default-y="-70.53" relative-y="-20">
            <mf/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89"/>
        </direction>
      <note default-x="24.49" default-y="-55">
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
          <articulations>
            <staccato default-x="4.93" default-y="-64.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="24.49" default-y="-40">
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
      <note default-x="24.49" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
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
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <direction placement="above">
        <direction-type>
          <words default-y="78.76" relative-y="10">un poco ritard.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="79" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="79" default-y="-40">
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
      <note default-x="79" default-y="-25">
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
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="127.25" default-y="-55">
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
          <articulations>
            <staccato default-x="4.93" default-y="-64.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="127.25" default-y="-40">
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
      <note default-x="127.25" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
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
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="169.74" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="169.74" default-y="-40">
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
      <note default-x="169.74" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="12.5" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="20" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V4/2</text>
          </lyric>
        </note>
      <note default-x="24.49" default-y="-120">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="11.94" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6</text>
          </lyric>
        </note>
      <note default-x="79" default-y="-120">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="127.25" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="20.21" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6/4</text>
          </lyric>
        </note>
      <note default-x="127.25" default-y="-120">
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
      <note default-x="169.74" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="169.74" default-y="-120">
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
    <measure number="8" width="156.18">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>G</bass-step>
          </bass>
        </harmony>
      <note default-x="15.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="15.84" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.84" default-y="-5">
        <chord/>
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
          <root-step>F</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-70.95" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="73.58" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="91.58" default-y="-25"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="73.58" default-y="-5">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="91.58" default-y="-5"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="73.58" default-y="10">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="91.58" default-y="15"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="15.84" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3"/>
            </articulations>
          </notations>
        <lyric number="1" default-x="11.54" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6</text>
          </lyric>
        </note>
      <note default-x="15.84" default-y="-120">
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
      <note default-x="73.58" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="91.58" default-y="-150"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II/V</text>
          </lyric>
        </note>
      <note default-x="73.58" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="91.58" default-y="-110"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="9" width="237.4">
      <note default-x="12.5" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="12.5" default-y="-5">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="12.5" default-y="10">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
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
          <root-step></root-step>
          </root>
        <kind text="It+6">other</kind>
        </harmony>
      <note default-x="54.99" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="38.108628" bezier-y="29.546666" number="1"/>
          </notations>
        </note>
      <note default-x="83.32" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="105.41" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="136.46" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="164.79" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="193.11" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="54.99" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="72.98" default-y="-25"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="54.99" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="72.98" default-y="-15"/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="12.5" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II/V</text>
          </lyric>
        </note>
      <note default-x="12.5" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="54.99" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="72.98" default-y="-150"/>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="17.79" default-y="-54.57" relative-y="-30">
          <syllabic>single</syllabic>
          <text>it+6</text>
          </lyric>
        </note>
      <note default-x="54.99" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="72.98" default-y="-110"/>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="10" width="210.96">
      <harmony print-frame="no">
        <root>
          <root-step></root-step>
          </root>
        <kind text="Fr+6">other</kind>
        </harmony>
      <note default-x="15.84" default-y="15">
        <pitch>
          <step>B</step>
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
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="58.33" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.488276" bezier-y="40.606611"/>
          </notations>
        </note>
      <note default-x="58.33" default-y="-5">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.33" default-y="5">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.65" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="114.98" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="15.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="15.84" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="15.84" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        <lyric number="1" default-x="17.99" default-y="-54.57" relative-x="-26.87" relative-y="-31.79">
          <syllabic>single</syllabic>
          <text>Fr+6</text>
          </lyric>
        </note>
      <note default-x="15.84" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="58.33" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.57" relative-x="3.58" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V</text>
          </lyric>
        </note>
      <note default-x="157.47" default-y="-120">
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
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="58.33" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.98" default-y="-145">
        <rest/>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="157.47" default-y="-145">
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
 * Analyse mesure par mesure — une mesure porte parfois PLUSIEURS accords
 * (ex. mesure 3 : I6-V4/3-I-V6, mesure 7 : V4/2-I6-V6/4-I) ; par convention,
 * chaque entree retient le PREMIER accord de la mesure (voir le chiffrage
 * complet dans les <lyric> du MusicXML pour le detail battement par battement).
 * Les mesures sans nouvelle harmonie (2, 6) prolongent celle qui precede.
 */
export const SCHUBERT_D845_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Lam",   degre: "i",    fonction: "T" },
  { numero: 2,  nom: "Lam",   degre: "i",    fonction: "T" },
  { numero: 3,  nom: "Lam",   degre: "i6",   fonction: "T" },
  { numero: 4,  nom: "It+6",  degre: "It+6", fonction: "SD" },
  { numero: 5,  nom: "Sidim", degre: "ii°",  fonction: "SD" },
  { numero: 6,  nom: "Sidim", degre: "ii°",  fonction: "SD" },
  { numero: 7,  nom: "Mi7",   degre: "V4/2", fonction: "D" },
  { numero: 8,  nom: "Mim",   degre: "V6",   fonction: "D" },
  { numero: 9,  nom: "It+6",  degre: "It+6", fonction: "SD" },
  { numero: 10, nom: "Fr+6",  degre: "Fr+6", fonction: "SD" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée note par note contre les hauteurs
 * RÉELLES du MusicXML ci-dessus (pas recopiée telle quelle d'un premier jet
 * fourni par Dany, généré ailleurs). Plusieurs erreurs corrigées :
 *  - la sixte italienne (mesure 4) n'est PAS fa-do-ré♯ : do n'apparaît nulle
 *    part dans cette mesure. Le vrai accord est fa-LA-ré♯ (avec un mi
 *    supplémentaire à la basse, anticipant la dominante) ;
 *  - la sixte française n'est pas non plus fa-do-ré-ré♯ : c'est fa-LA-SI-ré♯
 *    (le si, pas le ré, est la note ajoutée — la seconde majeure la-si) ;
 *  - et surtout, le premier jet plaçait la sixte française À LA MESURE 9 —
 *    c'est la mesure 10. La mesure 9 est en réalité le RAPPEL de la sixte
 *    ITALIENNE (2e occurrence, identique à la mesure 4) ;
 *  - le ii° de la mesure 5 est une triade (si-ré-fa), pas un accord de 4 sons
 *    « si-do-ré-fa » — le do qui apparaît dans la mesure est une note de
 *    passage à la basse, pas un son de l'accord ;
 *  - la mesure 7 ne contient PAS « Em/G → F#m7 » : ces deux accords
 *    appartiennent à la mesure 8 (erreur de frontière de mesure, même famille
 *    que celle déjà trouvée sur BWV227/cours4) ;
 *  - l'extrait ne se termine PAS par une résolution à la tonique : la
 *    mesure 10 s'arrête sur V (dominante), suspendue — la phrase continue
 *    au-delà de ces 10 mesures.
 *
 * Trouvé en vérifiant : la mesure 8 emprunte aussi au mode MINEUR ANCIEN
 * (naturel) — la dominante y perd sa sensible (sol♯→sol) et devient un accord
 * MINEUR (v, pas V) — un emprunt modal direct, à côté des emprunts
 * chromatiques des sixtes augmentées. Les mesures 5-6 reprennent en outre le
 * motif d'ouverture (mêmes intervalles, une octave/un degré plus haut),
 * réharmonisé sur le ii° puis réorienté vers fa — la même note qui sert de
 * basse aux deux sixtes augmentées de l'extrait.
 */
export const SCHUBERT_D845_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "La mineur (i). La sensible (sol♯) n'apparaît que dans les accords qui la réclament (V, V7) — ailleurs, l'extrait explore de vraies couleurs empruntées, pas seulement la gamme harmonique mineure.",
  metrique: "4/4.",
  forme: "Le thème d'ouverture (mes. 1-2) revient réharmonisé et réorienté vers fa (mes. 5-6), la note qui sert de basse aux deux sixtes augmentées de l'extrait : italienne (mes. 4, rappelée mes. 9), puis française (mes. 10, plus riche d'une note). L'extrait s'arrête suspendu sur la dominante (mes. 10) — la phrase continue au-delà de ces 10 mesures.",
  sections: [
    {
      label: "Mesures 1-2",
      titre: "Le thème, à l'unisson à l'octave",
      chiffrage: "Am",
      fonctions: "i",
      texte:
        "Chant et basse jouent EXACTEMENT la même ligne, à l'octave (do-si-la, puis mi tenu) : pas d'harmonie verticale, seulement le mode mineur exposé nu, en pianissimo. La tierce (do) colore d'emblée la tonalité de sa couleur mélancolique.",
    },
    {
      label: "Mesure 3",
      titre: "Une oscillation tonique-dominante, une basse qui descend par degrés conjoints",
      chiffrage: "Am/C  →  E7/B  →  Am  →  E/G♯",
      fonctions: "i6  →  V4/3  →  i  →  V6",
      texte:
        "Quatre accords en une seule mesure, mais une seule ligne directrice : la basse descend do-si-la-sol♯, degré par degré. Le sol♯ (la sensible) referme la mesure sur la dominante en 1er renversement — l'alternance i-V ancre solidement la tonalité avant l'emprunt qui va suivre.",
    },
    {
      label: "Mesure 4",
      titre: "La sixte augmentée italienne",
      chiffrage: "It+6 (fa-la-ré♯)  →  E",
      fonctions: "SD (emprunt)  →  V",
      texte:
        "Premier emprunt chromatique de l'extrait : sur une basse de fa (le VIe degré abaissé), l'accord fa-la-ré♯ forme une <strong>sixte augmentée</strong> — l'intervalle fa-ré♯ (10 demi-tons) qui donne son nom à l'accord. Les deux notes extrêmes divergent par mouvement contraire, chacune d'un demi-ton : le fa descend au mi (à la basse), le ré♯ monte au mi (au-dessus) — une résolution en éventail vers l'unisson mi, qui devient la dominante. Une demi-cadence d'une grande tension.",
    },
    {
      label: "Mesures 5-6",
      titre: "Le même motif, réharmonisé et réorienté",
      chiffrage: "Bdim",
      fonctions: "ii°",
      texte:
        "Le motif d'ouverture revient, mêmes intervalles, un degré plus haut (ré-do-si, puis fa tenu au lieu de mi) — mais cette fois harmonisé sur le IIe degré diminué (si-ré-fa), la seule triade diminuée de l'extrait. Le fa tenu qui conclut la phrase n'est pas un hasard : c'est la même note qui sert de basse aux deux sixtes augmentées de l'extrait.",
    },
    {
      label: "Mesure 7",
      titre: "Même geste qu'à la mesure 3, une couleur en moins",
      chiffrage: "E7/D  →  Am/C  →  E/B  →  Am",
      fonctions: "V4/2  →  i6  →  V6/4  →  i",
      texte:
        "Le même principe qu'à la mesure 3 (une basse qui relie i et V) revient, engagé cette fois par la 7e de la dominante (E7 en 3e renversement, ré à la basse). Le 3e accord (mi-si, V6/4) omet sa propre tierce (sol♯) — un accord de dominante réduit à sa fondamentale et sa quinte, sans sa couleur de sensible.",
    },
    {
      label: "Mesure 8",
      titre: "Un emprunt modal, puis un pivot vers la dominante",
      chiffrage: "Em/G  →  F♯m7",
      fonctions: "v (emprunt)  →  ii7/V",
      texte:
        "Coloration modale directe : la sensible (sol♯) s'efface, remplacée par le sol naturel du mode mineur ANCIEN — l'accord de dominante devient mineur (v, pas V), un emprunt au mode le plus ancien de la tonalité. Il enchaîne sur un fa♯m7 (sans sa quinte, do♯) : le ii7 DE LA DOMINANTE, qui prépare le retour de mi comme pôle d'attraction.",
    },
    {
      label: "Mesures 9-10",
      titre: "It+6 rappelée, puis Fr+6 — l'extrait se referme en suspens",
      chiffrage: "It+6  →  Fr+6 (fa-la-si-ré♯)  →  E",
      fonctions: "SD (emprunt)  →  SD (emprunt)  →  V",
      texte:
        "La sixte italienne (fa-la-ré♯) revient à l'identique, puis se colore d'une note supplémentaire à la mesure 10 : la sixte <strong>française</strong> ajoute le si (fa-la-si-ré♯) — la seconde majeure la-si qui la rend plus mordante que l'italienne. Les deux sixtes partagent la même basse (fa) et la même résolution en éventail vers mi. L'extrait s'arrête ici, suspendu sur la dominante : la phrase continue au-delà de ces 10 mesures.",
    },
  ],
  synthese: [
    {
      titre: "Une seule note-pivot pour deux sixtes",
      texte: "Fa (le VIe degré abaissé) sert de basse aux deux sixtes augmentées de l'extrait (mesures 4 et 9-10) — italienne d'abord (3 sons), française ensuite (4 sons, avec le si en plus). Une seule note, deux couleurs d'emprunt.",
    },
    {
      titre: "La résolution en éventail",
      texte: "Les deux sixtes augmentées résolvent de la même façon : leurs deux notes extrêmes (fa et ré♯) divergent par mouvement contraire, chacune d'un demi-ton, vers l'octave de mi — la dominante. C'est la signature de toute sixte augmentée, quelle que soit sa richesse (italienne, française, allemande).",
    },
    {
      titre: "Un emprunt modal, pas seulement chromatique",
      texte: "La mesure 8 emprunte au mode mineur ANCIEN (naturel) : la dominante y perd sa sensible (sol♯→sol) pour devenir un accord mineur. Un emprunt de mode, à côté des emprunts chromatiques des sixtes augmentées — deux visages du même principe : sortir de la gamme sans quitter la tonalité.",
    },
  ],
};
