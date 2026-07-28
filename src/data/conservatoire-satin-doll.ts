import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-satin-doll.ts
 * Harmonia — Extrait (mesures 1 a 8, la phrase A du standard) de « Satin
 * Doll » de Duke Ellington, pour la section « conservatoire » du cours 12
 * (niveau 2 — la substitution tritonique).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « satin-doll-duke-ellington.musicxml », source
 * musescore.com/user/801096/scores/9414118) — jamais reconstruit a la main,
 * cf. feedback-partitions-verbatim. Do majeur (fifths=0), 4/4. Avec
 * <harmony> et <lyric> (chiffrage romain) portes directement sous la
 * portee — format standard cette fois (contrairement a All the Things You
 * Are, chiffree en <words> texte libre).
 *
 * <sound tempo="90"> ajoute a la mesure 1 (absent du fichier d'origine).
 *
 * Limite CONNUE et acceptee du moteur d'inference de mode : cet extrait
 * n'expose jamais de triade franche de Do majeur (uniquement des enchainements
 * ii-V et une dominante substituee) — le profil de hauteurs penche vers
 * `mode: "minor"` bien que la piece soit reellement en Do majeur. Documente,
 * pas un bug (meme famille de limite que So What/cours10, qui infere "major"
 * pour une piece en re dorien).
 *
 * Piece choisie pour ce cours : la mesure 6 porte, chiffree PAR DANY
 * LUI-MEME, l'etiquette "subV7" sur un accord de Réb7 — la substitution
 * tritonique manifeste (Réb7 remplace Sol7 : les deux accords partagent le
 * triton Fa-Si en theorie) qui est le sujet exact du cours. Verifie note a
 * note avant construction du tableau ANALYSE : le voicing de main droite du
 * Réb7 (Réb-Cb-Mib-Lab, sans fondamentale ni tierce) ne fait PAS sonner le Fa
 * — seul le Si (7e, orthographie Cb) porte reellement le triton partage dans
 * cette realisation precise, le Fa restant seulement theorique tant qu'on ne
 * regarde que cette voix.
 */
export const SATIN_DOLL_MESURES_1_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Satin doll</work-title>
    </work>
  <identification>
    <rights>©G.Guerretti</rights>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/801096/scores/9414118</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2022-10-15</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99912</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1696.93</page-height>
      <page-width>1200.48</page-width>
      <page-margins type="even">
        <left-margin>85.725</left-margin>
        <right-margin>85.725</right-margin>
        <top-margin>85.725</top-margin>
        <bottom-margin>85.725</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.725</left-margin>
        <right-margin>85.725</right-margin>
        <top-margin>85.725</top-margin>
        <bottom-margin>85.725</bottom-margin>
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
    <credit-words default-x="600.241173" default-y="1611.208292" justify="center" valign="top" font-size="22">Satin doll</credit-words>
    </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="600.241173" default-y="85.725036" justify="center" valign="bottom" font-size="9">©G.Guerretti</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
      <part-abbreviation>Pf.</part-abbreviation>
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
    <measure number="1" width="341.56">
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
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward"/>
        </barline>
      <attributes>
        <divisions>6</divisions>
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
      <direction placement="above"><direction-type><metronome parentheses="no"><beat-unit>quarter</beat-unit><per-minute>90</per-minute></metronome></direction-type><sound tempo="90"/></direction>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.32" default-y="-49.5" relative-y="-25">
            <mp/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11"/>
        </direction>
      <note default-x="110.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="137.57" default-y="-30">
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
      <note default-x="164.86" default-y="-25">
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
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44"/>
            </articulations>
          </notations>
        </note>
      <note default-x="192.15" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="219.44" default-y="-30">
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
      <note default-x="246.73" default-y="-25">
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
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44"/>
            </articulations>
          </notations>
        </note>
      <note default-x="274.01" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="110.29" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="219.44" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="11.54" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="274.01" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="306.3" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="2" width="190.84">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="13" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="40.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.28" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="92.18" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="124.47" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.75" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="92.18" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        <lyric number="1" default-x="11.54" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="156.75" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="3" width="256.81">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.29" default-y="-25">
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
      <note default-x="67.58" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44"/>
            </articulations>
          </notations>
        </note>
      <note default-x="94.86" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="122.15" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="149.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44"/>
            </articulations>
          </notations>
        </note>
      <note default-x="176.73" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>III7</text>
          </lyric>
        </note>
      <note default-x="122.15" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/II</text>
          </lyric>
        </note>
      <note default-x="176.73" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no"/>
          </notations>
        </note>
      <note default-x="198.25" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="227.01" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="4" width="189.48">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="13" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="40.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.28" default-y="-15"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="92.18" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="119.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44"/>
            </articulations>
          </notations>
        </note>
      <note default-x="146.75" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>III7</text>
          </lyric>
        </note>
      <note default-x="92.18" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/II</text>
          </lyric>
        </note>
      </measure>
    <measure number="5" width="281.12">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>258.06</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="61.36" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="95.41" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.4" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.41" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.4" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.41" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.4" default-y="-5"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="160.15" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="160.15" default-y="-30">
        <chord/>
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
      <note default-x="160.15" default-y="-15">
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
      <note default-x="194.2" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="194.2" default-y="-30">
        <chord/>
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
      <note default-x="194.2" default-y="-10">
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
      <note default-x="228.25" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.54" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI7</text>
          </lyric>
        </note>
      <note default-x="160.15" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/V</text>
          </lyric>
        </note>
      </measure>
    <measure number="6" width="271.1">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="17.12" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="56.39" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="74.39" default-y="-45"/>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.39" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="74.39" default-y="-35"/>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.39" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="74.39" default-y="-15"/>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="121.14" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3"/>
            </articulations>
          </notations>
        </note>
      <note default-x="121.14" default-y="-40">
        <chord/>
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
        </note>
      <note default-x="121.14" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.19" default-y="-20">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="189.24" default-y="-50">
        <pitch>
          <step>C</step>
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
      <note default-x="189.24" default-y="-40">
        <chord/>
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
        </note>
      <note default-x="189.24" default-y="-20">
        <chord/>
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
        </note>
      <note default-x="229.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="229.41" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="241.31" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="229.41" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="17.12" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.74" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>bVI7</text>
          </lyric>
        </note>
      <note default-x="121.14" default-y="-125">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="12.14" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>subV7</text>
          </lyric>
        </note>
      </measure>
    <measure number="7" width="219.1">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="maj9">major-ninth</kind>
        </harmony>
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="13" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="13" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <note default-x="115.15" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="115.15" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.05" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="115.15" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
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
      <note default-x="13" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Imaj9</text>
          </lyric>
        </note>
      <note default-x="64.07" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.15" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II9</text>
          </lyric>
        </note>
      <note default-x="166.22" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="257.38">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="dim">diminished</kind>
        </harmony>
      <note default-x="29.07" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.97" default-y="-55"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="29.07" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.97" default-y="-45"/>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.98" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.97" default-y="-35"/>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="29.07" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="58.97" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.69" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="105.69" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="117.59" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="105.69" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        </harmony>
      <note default-x="144.58" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="144.58" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="156.48" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="144.58" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="29.07" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="19.4" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>bIII</text>
          <text font-family="Leland Text"></text>
          <text font-family="Edwin">7</text>
          </lyric>
        </note>
      <note default-x="80.15" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.58" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.94" default-y="-44.52" relative-y="-30">
          <syllabic>single</syllabic>
          <text>III7</text>
          </lyric>
        </note>
      <note default-x="195.65" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
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
 * chaque mesure, transcrit depuis le chiffrage <harmony>/<lyric> deja ecrit
 * par Dany dans le fichier (voir commentaire d'en-tete).
 *
 * Mesure 6 : la pastille montre le PREMIER accord (Lábm7, "bVI7" — la
 * predominante chromatique), pas le second (Réb7, "subV7", la substitution
 * tritonique elle-meme — cf. commentaire d'en-tete). Convention identique a
 * toutes les autres pieces a 2 accords par mesure de ce chantier ; le
 * moment-cle du cours sera detaille dans l'analyse narrative.
 *
 * Mesure 8 : accord de passage chromatique (basse Do-Ré-Mib-Mi ascendante),
 * sans fonction T/SD/D nette — fonction "?" choisie plutot que de forcer une
 * etiquette qui ne conviendrait pas. "nom" corrige en "Mibdim7" (et non
 * "Mibdim") apres verification des hauteurs reelles : les 4 notes d'une
 * septieme diminuee complete sonnent bel et bien (Mib-Fa#-La-Do), pas
 * seulement la triade — la balise <harmony> du fichier dit juste "diminished"
 * (triade) mais Dany n'a pas ecrit de "7" dans son propre chiffrage romain
 * ("bIII", inchange ici) : le "nom" reflete les hauteurs verifiees, le
 * "degre" reste fidele a son chiffrage.
 */
export const SATIN_DOLL_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Rém7",    degre: "II7",   fonction: "SD" },
  { numero: 2, nom: "Rém7",    degre: "II7",   fonction: "SD" },
  { numero: 3, nom: "Mim7",    degre: "III7",  fonction: "T" },
  { numero: 4, nom: "Mim7",    degre: "III7",  fonction: "T" },
  { numero: 5, nom: "Lam7",    degre: "VI7",   fonction: "T" },
  { numero: 6, nom: "Lábm7",   degre: "bVI7",  fonction: "SD" },
  { numero: 7, nom: "DoMaj9",  degre: "Imaj9", fonction: "T" },
  { numero: 8, nom: "Mibdim7", degre: "bIII",  fonction: "?" },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les hauteurs
 * reelles, mesure par mesure) avant redaction. Brouillon de reference fourni
 * par Dany (Gemini) : plusieurs erreurs trouvees et corrigees.
 *  - Le brouillon affirme un tempo de "120 bpm" et une indication "Swing"
 *    explicite (ratio 5:3) — VERIFIE FAUX : le fichier d'origine ne contient
 *    aucun tempo ni aucune mention de swing (recherche texte, 0 occurrence).
 *    Le tempo affiche (90) est celui que nous avons nous-memes ajoute par
 *    prudence (cf. commentaire d'en-tete) — probable confusion avec le
 *    fichier du cours precedent (All the Things You Are), qui lui a une
 *    vraie indication de swing.
 *  - Mesure 5 : le brouillon decrit la 7e du Ré7 (Do5) comme « la tonique a
 *    l'octave » — incoherent (Do n'est pas la tonique de Ré7). C'est
 *    simplement sa 7e mineure. Le brouillon omet aussi la 11e (Sol4)
 *    presente dans ce meme accord.
 *  - Le brouillon generalise la basse chromatique de fin de mesure (mesures
 *    1-2) comme menant "vers le Ré" — vrai seulement pour cette occurrence
 *    precise (Mib->Ré) ; la meme figure reapparait a chaque charniere de 2
 *    mesures mais vise a chaque fois la fondamentale SUIVANTE (Mi a la
 *    mesure 3, etc.), pas toujours Ré.
 * Confirme par verification : l'identite de tous les accords, la
 * substitution tritonique (mesure 6), et surtout l'anticipation liee de
 * Cmaj9 sur le contretemps final de la mesure 6 (confirme par les balises
 * <tie> elles-memes : 4 "start" en mesure 6, 4 "stop" correspondants en
 * mesure 7).
 */
export const SATIN_DOLL_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Do majeur (armure vierge) — mais jamais affirmé directement avant la mesure 7 : toute la " +
    "phrase n'est qu'une chaîne de ii-V qui ne se pose sur la tonique qu'à la toute fin.",
  metrique: "4/4.",
  forme:
    "8 mesures = la phrase A du standard : une marche de paires ii-V (ou substituts) qui " +
    "s'élève degré par degré avant de résoudre sur Do majeur à la mesure 7, puis relance " +
    "aussitôt le cycle vers une reprise de la section.",
  sections: [
    {
      label: "Mesures 1-2",
      titre: "ii7-V7, la marche de base",
      chiffrage: "Rém7 – Sol7",
      fonctions: "II7 – V7",
      texte:
        "L'extrait s'ouvre sur l'enchaînement le plus classique du jazz : ii7-V7 en Do majeur. " +
        "La basse glisse chromatiquement (Mib) tout à la fin de la mesure 1 — une note de " +
        "passage qui descend d'un demi-ton vers la fondamentale (Ré) qui ouvre la mesure 2.",
    },
    {
      label: "Mesures 3-4",
      titre: "iii7-V7/II, la marche remonte",
      chiffrage: "Mim7 – La7",
      fonctions: "III7 – V7/II",
      texte:
        "La même paire ii-V remonte d'une tierce : Mim7 (iii7, un accord de la famille tonique) " +
        "puis La7, la dominante secondaire du degré ii (<strong>V7/II</strong>) — une couleur " +
        "qui prépare un retour vers Rém7 qui n'arrive plus dans cet extrait. La basse reprend " +
        "son glissement chromatique en fin de mesure, cette fois vers Mi.",
    },
    {
      label: "Mesure 5",
      titre: "vi7-V7/V, une dominante de la dominante bien parée",
      chiffrage: "Lam7 – Ré7",
      fonctions: "VI7 – V7/V",
      texte:
        "Nouvelle paire ii-V, encore transposée. Les voicings s'enrichissent nettement ici : " +
        "Lam7 sonne sans fondamentale ni tierce — seulement 5te, 7e et <strong>11e</strong> " +
        "(Mi-Sol-Ré). Ré7 (V7/V) ajoute la <strong>9e</strong> (Mi) et la " +
        "<strong>11e</strong> (Sol) à sa 7e mineure (Do) — un accord bien plus riche qu'un " +
        "simple D7 de manuel.",
    },
    {
      label: "Mesure 6",
      titre: "bVI7-subV7, la substitution tritonique",
      chiffrage: "Lábm7 – Réb7",
      fonctions: "bVI7 – subV7",
      texte:
        "Le moment-clé du cours : au lieu du ii7-V7 attendu (Rém7-Sol7), Dany a écrit " +
        "Lábm7-Réb7. Réb7 (<strong>subV7</strong>) remplace Sol7 par substitution " +
        "tritonique — les deux accords partagent en théorie le même triton (Fa-Si), que " +
        "cette réalisation précise ne fait sonner que par le Si (7e de Réb7). Sur le dernier " +
        "contretemps de la mesure, la main droite anticipe déjà l'accord de résolution " +
        "(Cmaj9) et le tient lié par-dessus la barre de mesure.",
    },
    {
      label: "Mesure 7",
      titre: "Résolution — déjà entamée avant d'arriver",
      chiffrage: "DoMaj9 – Rém9",
      fonctions: "Imaj9 – II9",
      texte:
        "Résolution enfin sur la tonique — préparée dès la fin de la mesure précédente : " +
        "DoMaj9 (7e majeure Si, 9e Ré) occupe les deux premiers temps sans même être " +
        "réattaqué, avant que la basse ne glisse vers Rém9 pour amorcer la relance du cycle.",
    },
    {
      label: "Mesure 8",
      titre: "Un passage chromatique vers la relance",
      chiffrage: "Mibdim7 – Mim7",
      fonctions: "— – III7",
      texte:
        "Un accord de <strong>septième diminuée complet</strong> (Mib-Fa#-La-Do, vérifié " +
        "note à note) sert de passage chromatique, prolongeant la ligne de basse ascendante " +
        "entamée à la mesure 7 (Do-Ré-Mib-Mi) jusqu'à Mim7 (iii7), qui referme cette phrase " +
        "et relance le cycle vers une reprise de la section A.",
    },
  ],
  synthese: [
    {
      titre: "Une seule marche, transposée trois fois",
      texte:
        "ii7-V7 (mesures 1-2), iii7-V7/II (mesures 3-4), vi7-V7/V (mesure 5) : le même geste " +
        "harmonique, rejoué à trois hauteurs différentes, avant que la substitution " +
        "tritonique (mesure 6) ne vienne le remplacer une dernière fois pour ramener enfin " +
        "la tonique.",
    },
    {
      titre: "La substitution, un simple mouvement de basse",
      texte:
        "Remplacer Sol7 par Réb7 ne change presque rien à l'oreille (même triton, même " +
        "tension) — mais transforme la résolution de la basse d'un saut de quarte (Sol→Do) " +
        "en un simple demi-ton descendant (Réb→Do) : la vraie raison pour laquelle les " +
        "jazzmen l'utilisent autant.",
    },
    {
      titre: "La résolution est là avant même d'arriver",
      texte:
        "L'accord de tonique (Cmaj9) est déjà tenu, lié depuis la mesure précédente, quand la " +
        "mesure 7 commence officiellement — une respiration rythmique typique du jazz qui " +
        "brouille la frontière entre tension et résolution.",
    },
  ],
};
