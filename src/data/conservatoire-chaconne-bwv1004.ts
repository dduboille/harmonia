import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-chaconne-bwv1004.ts
 * Harmonia — Extrait (mesure 0 = levee, mesures 1 a 8) de la Chaconne de la
 * Partita n 2 en re mineur BWV 1004 de J.S. Bach (transcription pour piano
 * de Ferruccio Busoni — cf. credit-words du fichier, "F. Busoni" ; le nom de
 * fichier mentionne le marimba mais la partition embarquee est bien la
 * transcription piano de Busoni), pour la section « conservatoire » du
 * cours 9 (marche harmonique / basse obstinee).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « chaconne-from-bach-violin-partita-no-2-in-d-minor-arranged-for-solo-
 * marimba.musicxml », source musescore.com/user/27264174/scores/6066998) —
 * jamais reconstruit a la main, cf. feedback-partitions-verbatim. Ré mineur
 * (fifths=-1), 3/4. Avec <harmony> et <lyric> (chiffrage romain) portes
 * directement sous la portee. Pas de balise <mode> (comme tous les exports
 * de Dany) : le mode mineur est INFERE.
 *
 * Mesure 0 = la levee celebre (l'accord de re mineur brise qui ouvre la
 * piece) — OMISE de l'ANALYSE mesure par mesure (meme convention que les
 * levees precedentes) mais bien presente dans le MusicXML gravee/jouee.
 *
 * Les mesures 1-2 et 5-6 portent EXACTEMENT le meme chiffrage (II-V6/5,
 * I-VI) : deux variations successives sur la meme basse obstinee, la
 * matiere meme du theme du cours (marche/basse repetee). Les mesures 3 et 7
 * en revanche DIFFERENT (IV-I6/4-V7 contre II-V-V7) — Bach varie aussi
 * l'harmonie d'une repetition a l'autre, pas seulement la figuration.
 *
 * `<sound tempo="90">` ajoute a la mesure 0 (absent du fichier d'origine) :
 * sans tempo ecrit, notre horloge audio suppose 90 bpm mais Verovio suppose
 * 120 bpm pour sa PROPRE table de temps MIDI (celle qui pilote le
 * surlignage des notes pendant la lecture) — les deux derivent l'une de
 * l'autre. Un tempo explicite fait lire le meme chiffre aux deux systemes ;
 * ne change pas la vitesse de lecture (90 etait deja le repli utilise).
 * Detail complet du diagnostic dans conservatoire-beethoven-op27n2.ts.
 */
export const CHACONNE_BWV1004_MESURES_0_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Chaconne</work-title>
    </work>
  <identification>
    <creator type="composer">J. S. Bach</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/27264174/scores/6066998</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2018-01-16</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.856</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1422.61</page-height>
      <page-width>1099.29</page-width>
      <page-margins type="even">
        <left-margin>50.9165</left-margin>
        <right-margin>50.9165</right-margin>
        <top-margin>50.9165</top-margin>
        <bottom-margin>101.833</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>50.9165</left-margin>
        <right-margin>50.9165</right-margin>
        <top-margin>50.9165</top-margin>
        <bottom-margin>101.833</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.4</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">2</line-width>
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
    <word-font font-family="FreeSerif" font-size="10"/>
    <lyric-font font-family="FreeSerif" font-size="11"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="549.643585" default-y="1371.6904" justify="center" valign="top" font-size="24">CHACONNE</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="549.643585" default-y="1333.550023" justify="center" valign="top" font-family="Arial Narrow" font-size="12">Partita No. 2 in D Minor</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1048.370645" default-y="1271.6904" justify="right" valign="bottom" font-size="12">J. S. Bach
</credit-words>
    <credit-words>F. Busoni
</credit-words>
    <credit-words>
</credit-words>
    <credit-words></credit-words>
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
    <measure number="0" implicit="yes" width="170.86">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>162.87</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>-1</fifths>
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
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="99.99" default-y="-20">
        <rest/>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="99.99" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="116.49" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="99.99" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="116.49" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.99" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="116.49" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.26" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.26" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="1" width="179.14">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        <offset>8</offset>
        </harmony>
      <note default-x="82.17" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="25.54" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          <text font-family="Leland Text"></text>
          <text font-family="FreeSerif">42</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-100">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-130">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-130"/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="16.91" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65</text>
          </lyric>
        </note>
      <note default-x="96.28" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-80"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-130">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="141.54" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="124.53">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <offset>8</offset>
        </harmony>
      <note default-x="54.87" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-80">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="53.67" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="70.16" default-y="-130"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI</text>
          </lyric>
        </note>
      <note default-x="53.67" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="70.16" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="53.67" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="70.16" default-y="-90"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.93" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="191.81">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        <offset>8</offset>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        <offset>16</offset>
        </harmony>
      <note default-x="88.51" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-100">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="53.31" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="17.27" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I64</text>
          </lyric>
        </note>
      <note default-x="53.31" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="53.31" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.4" default-y="-165">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric number="1" default-x="11.53" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="119.4" default-y="-140">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.4" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.27" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.14" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="167.01" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="4" width="151.98">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="68.59" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-140">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="27.87" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="43.74" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="59.61" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="81.11" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.6" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.11" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.6" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.11" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.6" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.37" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.37" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.37" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="179.14">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        <offset>8</offset>
        </harmony>
      <note default-x="82.17" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="25.54" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          <text font-family="Leland Text"></text>
          <text font-family="FreeSerif">42</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-100">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-130">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-130"/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="16.91" default-y="-59.77" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65</text>
          </lyric>
        </note>
      <note default-x="96.28" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.27" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="124.76" default-y="-80"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-130">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="141.54" default-y="-110">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.53" default-y="-85">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="317.37">
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
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind>major</kind>
        <offset>8</offset>
        </harmony>
      <note default-x="177.72" default-y="-10">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="77.88" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="77.88" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.88" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.88" default-y="-80">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.88" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="175.37" default-y="-130"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI</text>
          </lyric>
        </note>
      <note default-x="158.88" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="175.37" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.88" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="175.37" default-y="-90"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.57" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="331.71">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>G</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="108.99" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="125.48" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="177.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="201.45" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="225.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="241.94" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="293.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="25.54" default-y="-59.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          <text font-family="Leland Text"></text>
          <text font-family="FreeSerif">42</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-120">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.99" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-59.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V</text>
          </lyric>
        </note>
      <note default-x="108.99" default-y="-120">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.99" default-y="-95">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="225.45" default-y="-125">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        <lyric number="1" default-x="11.53" default-y="-39.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      </measure>
    <measure number="8" width="348.38">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.46" default-y="-20">
        <rest/>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="28.49" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-59.37" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="28.49" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-90">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="28.49" default-y="-90"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.46" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="116.46" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="132.95" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.46" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="132.95" default-y="-110"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.46" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="132.95" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.92" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="208.92" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="232.92" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="249.41" default-y="-100"/>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="301.38" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="301.38" default-y="-115">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="301.38" default-y="-105">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
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
 * Analyse mesure par mesure (accord/degre/fonction) — premier accord de
 * chaque mesure. Le "degre" a ete affine par rapport au <lyric> brut de Dany
 * (qui ecrivait juste "II" partout) apres verification des hauteurs reelles :
 * mesures 1 et 5 ont leur septieme (Ré) a la basse (3e renversement, 4/2),
 * mesure 7 a sa tierce (Sol) a la basse (1er renversement, 6/5) — deux
 * renversements differents du meme accord, cf. commentaire d'en-tete.
 * Mesure 0 (levee) omise, comme les levees precedentes.
 */
export const CHACONNE_BWV1004_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Mim7b5", degre: "iiø4/2", fonction: "SD" },
  { numero: 2, nom: "Rém",    degre: "I",      fonction: "T" },
  { numero: 3, nom: "Solm",   degre: "IV",     fonction: "SD" },
  { numero: 4, nom: "Rém",    degre: "I",      fonction: "T" },
  { numero: 5, nom: "Mim7b5", degre: "iiø4/2", fonction: "SD" },
  { numero: 6, nom: "Rém",    degre: "I",      fonction: "T" },
  { numero: 7, nom: "Mim7b5", degre: "iiø6/5", fonction: "SD" },
  { numero: 8, nom: "Rém",    degre: "I",      fonction: "T" },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les hauteurs
 * reelles, mesure par mesure) avant redaction. Brouillon de reference fourni
 * par Dany (Gemini) : verifie exhaustivement, AUCUNE erreur factuelle trouvee
 * cette fois (contrairement aux morceaux precedents) — probablement parce
 * que cette piece tres celebre est abondamment documentee. Seules deux
 * nuances de formulation ecartees : la description de la levee en « temps 2
 * et 3 » (convention valable de nommage d'une anacrouse, gardee) et le
 * chiffrage "V7" de la fin de la mesure 3 (le trait rapide de la basse la
 * fait passer par son 1er renversement avant de se stabiliser — les deux
 * lectures sont defendables pour une note de passage, non tranchees ici).
 */
export const CHACONNE_BWV1004_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Ré mineur (armure d'un bémol, Sib).",
  metrique:
    "3/4 — le rythme de sarabande/chaconne, avec sa tension caractéristique sur le 2ᵉ " +
    "temps.",
  forme:
    "Un thème de basse obstinée (une levée de 2 temps puis 4 mesures) rejoué deux fois de " +
    "suite (mesures 1-4 puis 5-8) : c'est le principe même de la variation en chaconne. La " +
    "figuration se complique progressivement, et la voix mélodique proprement dite " +
    "n'apparaît qu'à partir de la seconde répétition (mesure 7) — jusque-là, tout repose " +
    "sur une seule ligne de basse arpégée.",
  sections: [
    {
      label: "Levée (mesure 0)",
      titre: "L'accord d'ouverture",
      chiffrage: "Rém",
      fonctions: "i",
      texte:
        "La pièce s'ouvre sur l'accord de tonique brisé (Ré-Fa-La), rejoué deux fois sur " +
        "les deux temps de l'anacrouse — un geste d'affirmation avant même que la mesure " +
        "ne commence vraiment.",
    },
    {
      label: "Mesure 1",
      titre: "De la sus-tonique à la dominante",
      chiffrage: "Mim7b5/Ré — La7/Do#",
      fonctions: "iiø4/2 — V6/5",
      texte:
        "Premier maillon de la descente chromatique de la basse (Ré→Do#) : un accord de " +
        "sus-tonique demi-diminué en <strong>3ᵉ renversement</strong> (la 7ᵉ, Ré, à la " +
        "basse), qui glisse vers la dominante avec sensible (Do#) en " +
        "<strong>1ᵉʳ renversement</strong>. Cette tension harmonique par retard de la " +
        "basse est typique de l'écriture des sarabandes.",
    },
    {
      label: "Mesure 2",
      titre: "Tonique puis couleur du VI",
      chiffrage: "Rém — Sib",
      fonctions: "I — VI",
      texte:
        "Retour à la tonique à l'état fondamental, puis coloration par le <strong>VI</strong> " +
        "(Sib majeur) — la basse continue sa descente diatonique (Ré→Sib). Une brève note " +
        "de passage (Do) referme la mesure et prépare la suite.",
    },
    {
      label: "Mesures 3-4",
      titre: "Sous-dominante, 6/4 de passage et cadence",
      chiffrage: "Solm — Rém/La — La7/Do# — Rém",
      fonctions: "iv — i6/4 — V7 — I",
      texte:
        "La sous-dominante mineure (<strong>iv</strong>) mène à un accord de tonique en " +
        "2ᵉ renversement (<strong>i6/4</strong>, basse La) qui prolonge encore la descente " +
        "de la basse (Sib→Sol→Ré/La), avant qu'un rapide trait en doubles-croches à la " +
        "basse ne plonge vers l'accord de dominante avec septième " +
        "(<strong>V7</strong>). Nouvelle fusée à la basse en ouverture de la mesure 4, puis " +
        "résolution : cette cadence authentique referme le premier passage complet de la " +
        "basse obstinée, quatre mesures après la levée.",
    },
    {
      label: "Mesures 5-6",
      titre: "Deuxième passage : note pour note identique",
      chiffrage: "Mim7b5/Ré — La7/Do# | Rém — Sib",
      fonctions: "iiø4/2 — V6/5 | I — VI",
      texte:
        "La seconde répétition de la basse obstinée commence par reprendre à l'identique " +
        "les mesures 1 et 2, sans la moindre variante harmonique — seule la figuration qui " +
        "les habille change d'une répétition à l'autre, l'essence de la variation en " +
        "chaconne.",
    },
    {
      label: "Mesures 7-8",
      titre: "Un autre renversement, et l'entrée de la mélodie",
      chiffrage: "Mim7b5/Sol — La — La7 — Rém",
      fonctions: "iiø6/5 — V — V7 — I",
      texte:
        "Ici, la basse obstinée se pare enfin d'une vraie voix mélodique au-dessus d'elle " +
        "(jusque-là, la pièce n'était qu'une seule ligne). Le même accord de sus-tonique " +
        "demi-diminuée qu'aux mesures 1 et 5 revient, mais cette fois en " +
        "<strong>1ᵉʳ renversement</strong> (la tierce, Sol, à la basse — pas la 7ᵉ) : la " +
        "basse obstinée n'est donc pas rigoureusement identique à chaque passage, Bach " +
        "varie aussi l'harmonie, pas seulement l'ornementation. La dominante arrive " +
        "d'abord en triade simple (<strong>V</strong>), puis sa 7ᵉ (Sol) apparaît — non à " +
        "la basse, mais dans l'ornement mélodique lui-même — pour former " +
        "<strong>V7</strong> juste avant la cadence authentique qui referme cette seconde " +
        "répétition à la mesure 8.",
    },
  ],
  synthese: [
    {
      titre: "Une seule basse, deux fois racontée",
      texte:
        "Les mesures 1-2 et 5-6 partagent exactement le même chiffrage — la preuve la " +
        "plus nette que la chaconne varie la figuration (le dessin des notes) bien plus " +
        "que l'harmonie sous-jacente, qui reste souvent fixe d'une répétition à l'autre.",
    },
    {
      titre: "Mais pas complètement figée",
      texte:
        "Les mesures 3 et 7 montrent que Bach s'autorise aussi de vraies variantes " +
        "harmoniques (accords différents, renversements différents du même accord) — la " +
        "basse obstinée est un guide, pas un carcan absolu.",
    },
    {
      titre: "La mélodie naît de la basse",
      texte:
        "Pendant six mesures, toute la pièce n'est qu'une seule ligne arpégée. La voix " +
        "mélodique proprement dite n'apparaît qu'à la mesure 7 — une entrée tardive qui " +
        "marque un vrai moment de bascule dans le discours.",
    },
  ],
};
