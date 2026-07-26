import type { Fonction } from "@/app/api/analyse-partition/route";

/**
 * data/conservatoire-bwv846.ts
 * Harmonia — Extrait (mesures 1 à 8) du Prelude en Do majeur BWV 846 de J.S. Bach
 * (Le Clavier bien tempere, livre I), pour la section « conservatoire » du cours 1.
 *
 * MusicXML VERBATIM : export MuseScore Studio 4.6.3 de Dany, repris tel quel (pas
 * de reencodage manuel) pour garantir une fidelite exacte a sa presentation - gravure
 * (groupes de ligature explicites, beam), couleurs de tete de note par fonction
 * tonale (notehead color, bleu=tonique #0000FF, orange=sous-dominante #FFAA00,
 * rouge=dominante #FF0000 - appliquees note par note dans le fichier source, PAS de
 * facon uniforme sur toute la mesure), symboles d'accords (harmony) au-dessus de
 * la portee, et chiffrage romain + fonction en paroles (lyric) sous la basse de
 * chaque mesure (ex. "V6/5(T)"). Voix : 1 = main droite (portee 1), 2 = pedale de
 * tenor tenue (portee 1), 5 = basse (portee 2) - numerotation MuseScore, conservee.
 *
 * Analyse harmonique des 8 mesures (cf. BWV846_ANALYSE plus bas, qui reprend les
 * memes lectures que les paroles du fichier) : I - ii7 (3e renv.) - V7 (1er renv.,
 * lu en TONIQUE par prolongation - la basse Si est un passage entre les Do des
 * mesures 1 et 4, lecture de Dany conservee telle quelle) - I - vi (1er renv.) -
 * V7/V (3e renv., d'ou le fa# de la mesure 6) - V (1er renv.) - IDelta7 (3e renv.,
 * basse commune avec la mesure 7 : la sensible reste tenue au grave pendant que
 * l'harmonie glisse de la dominante vers une tonique enrichie).
 */
export const BWV846_MESURES_1_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Prélude en Do Majeur</work-title>
    </work>
  <identification>
    <creator type="composer">J.S. Bach</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-25</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2017-08-26</miscellaneous-field>
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
    <credit-words default-x="595.439625" default-y="1626.666075" justify="center" valign="top" font-size="24">Prélude en Do Majeur</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="595.439625" default-y="1569.973198" justify="center" valign="top" font-size="14">BWV 846</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1134.186386" default-y="1526.666075" justify="right" valign="bottom" font-size="12">J.S. Bach</credit-words>
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
    <measure number="1" width="406.68">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>193.39</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time symbol="common">
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
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-38.52" relative-x="-63.97" relative-y="31.99">
            <beat-unit>quarter</beat-unit>
            <per-minute>80</per-minute>
            </metronome>
          </direction-type>
        <direction-type>
          <words default-x="-38.52" relative-x="-63.97" relative-y="31.99" font-weight="bold" font-size="12">
</words>
          <words></words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="80"/>
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal default-x="-20" default-y="28.8" relative-x="-59.97" relative-y="38" justify="center" font-weight="bold" font-size="14">A</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="83.27" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="120.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="141.11" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="161.43" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="181.76" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.09" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="222.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="242.74" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="280.25" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="300.57" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="320.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="341.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="361.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="381.88" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="83.27" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="103.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="120.1" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="161.43" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="242.74" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="263.07" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="279.56" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="320.9" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="83.27" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(T)</text>
          </lyric>
        </note>
      <note default-x="242.74" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="335.41">
      <note default-x="12" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="49.51" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="69.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="90.16" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="110.49" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="130.81" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.14" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="171.47" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="208.97" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="229.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="249.63" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="269.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="290.28" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="310.61" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m7">minor-seventh</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="32.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="48.82" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="90.16" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="171.47" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="191.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="208.29" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="249.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="12" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II2(SD)</text>
          </lyric>
        </note>
      <note default-x="171.47" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="335.41">
      <note default-x="12" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="49.51" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="69.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="90.16" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="110.49" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="130.81" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.14" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="171.47" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="208.97" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="229.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="249.63" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="269.95" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="290.28" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="310.61" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="32.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="48.82" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="90.16" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="171.47" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="191.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="208.29" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="249.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="12" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6/5(T)</text>
          </lyric>
        </note>
      <note default-x="171.47" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="384.78">
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
      <note default-x="59.76" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="97.46" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="117.9" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="138.34" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="158.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="179.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.65" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="220.09" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="257.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="278.23" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="298.67" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="319.1" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="339.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="359.98" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="59.76" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="80.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="96.69" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="138.34" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="220.09" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="240.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="257.02" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="298.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="59.76" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(T)</text>
          </lyric>
        </note>
      <note default-x="220.09" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="337.02">
      <note default-x="12" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="49.71" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="70.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="90.58" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="111.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.89" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="172.33" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="210.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="230.47" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="250.91" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="271.35" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="291.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="312.22" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="32.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="48.93" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="90.58" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="172.33" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="192.77" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="209.26" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="250.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="12" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI6(T)</text>
          </lyric>
        </note>
      <note default-x="172.33" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="355.69">
      <note default-x="12" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="68.38" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="88.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="109.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="129.69" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="150.13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="191" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="228.71" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="249.15" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="269.58" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="290.02" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="310.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="330.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>C</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="32.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="48.93" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="109.25" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="191" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="211.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="227.93" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="269.58" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="12" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V2/V(DS)</text>
          </lyric>
        </note>
      <note default-x="191" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="558.02">
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
      <note default-x="59.76" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="118.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="149.78" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="181.42" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="213.06" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.71" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="276.35" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="307.99" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="366.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="398.02" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="429.66" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="461.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="492.94" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="524.58" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="59.76" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="91.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="107.89" default-y="-45"/>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="181.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="307.99" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="339.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="356.13" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="429.66" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="59.76" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6(D)</text>
          </lyric>
        </note>
      <note default-x="307.99" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="519.47">
      <note default-x="12" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="70.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="102.02" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="133.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="165.31" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="196.95" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="228.59" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="260.23" default-y="-10">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="318.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="350.26" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="381.9" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="413.54" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="445.18" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="476.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="12" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="43.64" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="60.14" default-y="-55"/>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="133.67" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="260.23" default-y="-40">
        <rest/>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="291.88" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="308.37" default-y="-55"/>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="381.9" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="12" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <lyric number="1" default-x="9.7" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          <text font-family="Leland Text"></text>
          <text font-family="FreeSerif">2(T)</text>
          </lyric>
        </note>
      <note default-x="260.23" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
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

/**
 * Une section de l'analyse harmonique NARRATIVE (prose), affichée sous la
 * partition du conservatoire — un cran plus détaillé que `MesureAnalyse` (qui ne
 * porte qu'un accord par mesure). Couvre en général un GROUPE de mesures (une
 * phrase ou demi-phrase), pas forcément une seule.
 */
export interface AnalyseSection {
  /** Repère affiché en tête de carte, ex. "Mesures 1-2". */
  label: string;
  /** Titre court de la section, ex. "Motif d'ouverture". */
  titre: string;
  /** Accords en notation anglaise, séparés par « – », les mesures par « | ». */
  chiffrage: string;
  /** Chiffres romains + fonctions, même découpage que `chiffrage`. */
  fonctions: string;
  /** Prose d'analyse. HTML autorisé (mise en forme légère : <strong>/<em>). */
  texte: string;
}

/** Analyse harmonique narrative complète d'un extrait du conservatoire. */
export interface AnalyseNarrative {
  tonalite: string;
  metrique: string;
  forme: string;
  sections: AnalyseSection[];
  synthese: Array<{ titre: string; texte: string }>;
}

/** Analyse mesure par mesure de `BWV846_MESURES_1_8` — voir le commentaire d'en-tête. */
export const BWV846_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Do",     degre: "I",    fonction: "T" },
  { numero: 2, nom: "Rém7",   degre: "ii2",  fonction: "SD" },
  { numero: 3, nom: "Sol7",   degre: "V6/5", fonction: "T" },
  { numero: 4, nom: "Do",     degre: "I",    fonction: "T" },
  { numero: 5, nom: "Lam",    degre: "vi6",  fonction: "T" },
  { numero: 6, nom: "Ré7",    degre: "V2/V", fonction: "D", dominanteSecondaire: true },
  { numero: 7, nom: "Sol",    degre: "V6",   fonction: "D" },
  { numero: 8, nom: "DoMaj7", degre: "IΔ2",  fonction: "T" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée mesure par mesure contre les hauteurs
 * réelles du MusicXML ci-dessus (pas recopiée telle quelle d'un premier jet fourni
 * par Dany, généré ailleurs). Le premier jet lisait la mesure 3 comme une vraie
 * DOMINANTE (« tension maximale », notes rouges) — ce qui contredisait le chiffrage
 * déjà présent dans le fichier (« V6/5(T) ») et le commentaire d'en-tête, qui
 * documentent une lecture délibérée de Dany : cette mesure, de FORME dominante,
 * est fonctionnellement une TONIQUE PROLONGÉE (la basse si est la voisine
 * inférieure du do tenu, pas une vraie basse de dominante). Question posée à Dany
 * le 2026-07-26, tranchée en faveur de la lecture d'origine — la couleur des têtes
 * de note de la mesure 3 a été corrigée de rouge à BLEU en conséquence (elle était
 * restée rouge, incohérente avec son propre chiffrage, depuis l'export initial).
 *
 * En creusant les hauteurs réelles (voix 5, la basse) pour vérifier cette lecture,
 * un plan structurel plus large est apparu, vérifié note par note : la basse ne
 * bouge quasiment pas sur tout l'extrait — do (mesures 1-2, 4-6, avec la voisine
 * si à la mesure 3) puis si (mesures 7-8). Toute l'harmonie « glisse » au-dessus de
 * ces deux pédales par le seul mouvement des voix supérieures. C'est ce plan, plus
 * riche et mieux étayé que le premier jet, qui structure le texte ci-dessous.
 */
export const BWV846_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Do majeur — aucune altération à l'armure. Les deux seuls demi-tons diatoniques naturels de la gamme (mi-fa entre le IIIe et le IVe degré, si-do entre le VIIe et le Ier) sont les moteurs de toute la pièce.",
  metrique: "4/4",
  forme: "Tout l'extrait (mes. 1-8) tient sur un plan de basse à seulement DEUX notes pédales : do (mes. 1-2, 4-6, avec une brève voisine si à la mesure 3) puis si (mes. 7-8, la sensible tenue jusqu'à la fin de l'extrait). L'harmonie change de couleur au-dessus de ces pédales par le seul mouvement des voix supérieures — la basse, elle, bouge à peine.",
  sections: [
    {
      label: "Mesures 1-3",
      titre: "Une pédale de tonique, décorée par sa voisine",
      chiffrage: "C  |  Dm7/C  |  G7/B",
      fonctions: "I  |  ii2  |  V6/5 (lu comme i prolongé)",
      texte:
        "La basse tient do sur les deux premières mesures : l'accord ne bouge qu'AU-DESSUS d'elle — d'abord l'arpège do-mi-sol (I), puis ré-fa-la qui, combiné à ce do tenu, dessine un <strong>Dm7 en 3e renversement</strong> (ii2). À la mesure 3, la basse descend d'un ton vers si : la FORME de l'accord (sol-si-ré-fa) est bien celle d'un G7 en 1er renversement (V6/5) — mais Bach l'utilise ici comme une simple <em>voisine inférieure</em> de la pédale de do, pas comme une vraie dominante en attente de résolution. D'où son chiffrage « V6/5(T) » : la forme est celle d'une dominante, la FONCTION reste la tonique.",
    },
    {
      label: "Mesures 4-5",
      titre: "Retour à la tonique, puis son substitut",
      chiffrage: "C  |  Am/C",
      fonctions: "i  |  vi6",
      texte:
        "La voisine se résout : le si de la basse remonte au do (mesure 4), pendant que le fa et le ré des voix supérieures redescendent au mi et au do — l'accord de tonique est retrouvé note pour note comme à la mesure 1. La mesure 5 change de couleur SANS changer de basse : le do tenu devient la <strong>tierce</strong> d'un accord de la mineur (vi6), le substitut le plus direct de la tonique — il partage deux notes avec elle (do, mi).",
    },
    {
      label: "Mesure 6",
      titre: "La seule altération de l'extrait",
      chiffrage: "D7/C",
      fonctions: "V2/V",
      texte:
        "Premier vrai déplacement harmonique depuis le début de l'extrait : la basse reste sur do (elle en devient la 7e, plus la fondamentale), mais l'harmonie au-dessus se transforme en un <strong>Ré7 complet</strong> (ré-fa♯-la-do). Le fa♯, seule note étrangère à l'armure de tout l'extrait, est une sensible ARTIFICIELLE qui tire vers sol : Bach vise maintenant la dominante (V), pas encore la tonique.",
    },
    {
      label: "Mesures 7-8",
      titre: "La dominante, puis une tonique qui ne se referme pas tout à fait",
      chiffrage: "G/B  |  Cmaj7/B",
      fonctions: "V6  |  IΔ2",
      texte:
        "La basse descend enfin sur si — la sensible du ton — et y reste pour les deux dernières mesures : d'abord sous un accord de sol majeur (V6), puis sous l'arrivée de la tonique (mesure 8). Mais cette tonique n'est pas dans son état le plus stable : sa <strong>7e majeure</strong> (si, justement — la basse ne bouge pas) la colore d'une tension suspendue qui appelle la suite de la pièce plutôt qu'elle ne la referme.",
    },
  ],
  synthese: [
    {
      titre: "Deux pédales, un seul geste",
      texte: "Toute l'harmonie de l'extrait tient sur deux notes de basse : do (mesures 1 à 6, avec un bref détour par sa voisine si à la mesure 3), puis si (mesures 7-8). Le mouvement musical ne vient pas de la basse, qui bouge à peine — il vient des voix supérieures, qui redessinent l'accord au-dessus d'elle.",
    },
    {
      titre: "Les deux demi-tons diatoniques",
      texte: "Mi-fa (dans le Dm7 de la mesure 2 et son entourage) et si-do (la sensible, mesures 3 et 7-8) sont les deux seuls demi-tons naturels de do majeur — ce sont eux qui créent toute la tension de la pièce, sans le moindre accident jusqu'à la mesure 6.",
    },
    {
      titre: "La couleur suit la fonction, pas la forme",
      texte: "La mesure 3 a la FORME d'une dominante (G7) mais la FONCTION d'une tonique prolongée — d'où sa couleur bleue malgré son chiffrage « V6/5 ». En harmonie tonale, c'est toujours la fonction qui l'emporte sur l'apparence de surface.",
    },
  ],
};
