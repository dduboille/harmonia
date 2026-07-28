import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-beethoven-op27n2.ts
 * Harmonia — Extrait (mesures 1 a 9) de la Sonate n 14 "Clair de lune" op.27
 * n 2 de Beethoven (1er mouvement), pour la section « conservatoire » du
 * cours 8 (accords pivots / modulation).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « sonata-no-14-op-27-no-2-ludwig-van-beethoven.musicxml ») — jamais
 * reconstruit a la main, cf. feedback-partitions-verbatim. Do# mineur
 * (fifths=4), 4/4 (croches en triolets continus a la main droite). Piano a 2
 * portees, avec <harmony> et <lyric> (chiffrage romain) portes directement
 * sous la portee. Pas de balise <mode> (comme tous les exports de Dany) : le
 * mode mineur est INFERE.
 *
 * <sound tempo="90"> ajoute a la mesure 1 (absent du fichier d'origine) : sans
 * indication de tempo, notre horloge de lecture audio suppose 90 bpm (repli
 * de studio-playback.ts) mais Verovio, lui, suppose 120 bpm par defaut pour
 * SA propre table de temps MIDI (celle qui pilote le surlignage) — les deux
 * horloges divergent progressivement et le surlignage decale par rapport a
 * l'audio. Ajouter un tempo EXPLICITE fait lire le MEME chiffre aux deux
 * systemes (verifie : sans cet ajout, le surlignage de Verovio "finit" la
 * piece ~20 % plus tot que la duree reelle jouee). Ne change PAS la vitesse
 * de lecture (90 est deja le repli utilise depuis toujours).
 *
 * Mesure 8 : le <lyric> ecrit "V65/III" pour les DEUX moities de la mesure
 * (pedale de Si tenue tout du long), mais les hauteurs reellement jouees dans
 * la 1ere moitie ne forment qu'un Mi majeur (Mi-Sol#-Si, sans le Ré# du
 * septieme) — c'est-a-dire III6/4, pas encore la dominante appliquee. Le
 * septieme (Ré#) et donc le vrai V7/III n'arrivent que dans la 2e moitie
 * (confirme par la balise <harmony> elle-meme, qui distingue bien "Mi majeur"
 * puis "Si dominante7"). Transcrit tel quel (chiffrage de Dany fait foi),
 * mais a rediscuter si l'analyse narrative de ce morceau est demandee.
 *
 * Bug corrige (empechait Verovio de charger le fichier du tout — exception
 * WebAssembly opaque) : la balise <harmony> de la mesure 4 (Do mineur/Sol#)
 * portait un <degree> d'extension avec un <degree-value></degree-value> VIDE
 * (element requis laisse vierge, probablement un residu de l'editeur de
 * symboles d'accord de MuseScore). Supprime — ne change aucune note jouee,
 * seulement le symbole d'accord affiche (qui n'aurait de toute facon rien pu
 * afficher de sense pour un degre non precise).
 */
export const BEETHOVEN_OP27N2_MESURES_1_9 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <identification>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2026-07-27</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.256</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1898.98</page-height>
      <page-width>1342.71</page-width>
      <page-margins type="even">
        <left-margin>63.9386</left-margin>
        <right-margin>63.9386</right-margin>
        <top-margin>63.9386</top-margin>
        <bottom-margin>63.9386</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>63.9386</left-margin>
        <right-margin>63.9386</right-margin>
        <top-margin>63.9386</top-margin>
        <bottom-margin>63.9386</bottom-margin>
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
    <credit-words default-x="671.355499" default-y="1835.038378" justify="center" valign="top" font-size="24">Sonata No. 14, &quot;Moonlight&quot; </credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1278.772394" default-y="1735.038378" justify="right" valign="bottom" font-size="12">Ludwig van Beethoven</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="671.355499" default-y="1771.099759" justify="center" valign="top" font-size="14">Quasi una fantasia</credit-words>
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
    <measure number="1" width="444.2">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>124.19</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>80</staff-distance>
          </staff-layout>
        <measure-layout>
          <measure-distance>50</measure-distance>
          </measure-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>4</fifths>
          </key>
        <time symbol="cut">
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
          <root-step>C</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="134.5" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="160.16" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.82" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="211.48" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="237.13" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.79" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="288.45" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="314.11" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="339.77" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="365.43" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="391.09" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="416.74" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>48</duration>
        </backup>
      <note default-x="133.54" default-y="-180">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="5.53" default-y="-79.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="133.54" default-y="-145">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="322.67">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m7">minor-seventh</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="12.96" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="38.62" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="64.28" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="89.94" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="115.6" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="141.26" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="166.91" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="192.57" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="218.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="243.89" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="269.55" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="295.21" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>48</duration>
        </backup>
      <note default-x="12" default-y="-185">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="16.59" default-y="-79.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I42</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-150">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="323.78">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="12" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="28.451915" bezier-y="-18.864971" number="1"/>
          </notations>
        </note>
      <note default-x="37.66" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.32" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="88.98" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="114.63" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="140.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          <slur type="stop" number="1" bezier-x="-20.426934" bezier-y="-26.738891"/>
          </notations>
        </note>
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
      <note default-x="165.95" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="29.312992" bezier-y="-21.165507" number="1"/>
          </notations>
        </note>
      <note default-x="193.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="219.34" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="245" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="270.66" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          <slur type="stop" number="1" bezier-x="-17.543732" bezier-y="-30.620519"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12" default-y="-190">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-79.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>VI</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-155">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.95" default-y="-200">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.68" default-y="-79.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>N6</text>
          </lyric>
        </note>
      <note default-x="165.95" default-y="-165">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="470.62">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.67</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="110.98" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="47.991215" bezier-y="-31.234812" number="1"/>
          </notations>
        </note>
      <note default-x="147.76" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="176.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>G</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="205.22" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="237.05" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="265.78" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="294.51" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="323.24" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="353.89" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
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
      <note default-x="382.62" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="411.35" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="440.09" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          <slur type="stop" number="1" bezier-x="-40.07107" bezier-y="-37.55441"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="110.98" default-y="-225.67">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="17.1" default-y="-74.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65</text>
          </lyric>
        </note>
      <note default-x="110.98" default-y="-190.67">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.51" default-y="-225.67">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.46" default-y="-74.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7</text>
          </lyric>
        </note>
      <note default-x="294.51" default-y="-190.67">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="369.08">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="12.96" default-y="-10">
        <rest/>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="99.16" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="8.841206" bezier-y="18.567096" number="1"/>
          </notations>
        </note>
      <note default-x="127.89" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="156.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
          <slur type="stop" number="1" bezier-x="-20.107964" bezier-y="4.30973"/>
          </notations>
        </note>
      <note default-x="185.35" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="8.841206" bezier-y="18.567096" number="1"/>
          </notations>
        </note>
      <note default-x="214.08" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="242.81" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
          <slur type="stop" number="1" bezier-x="-20.107964" bezier-y="4.30973"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.1" default-y="-83.31" relative-y="-40">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67"/>
        </direction>
      <note default-x="271.54" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="8.841206" bezier-y="18.567096" number="1"/>
          </notations>
        </note>
      <note default-x="300.27" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="329.01" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
          <slur type="stop" number="1" bezier-x="-20.107964" bezier-y="4.30973"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.96" default-y="-115">
        <rest/>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="185.35" default-y="-115">
        <rest/>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="271.54" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="288.04" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="343" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12" default-y="-210.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="5.53" default-y="-74.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-190.67">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-175.67">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="13.93" default-y="-165.67">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" show-number="none"/>
          <slur type="start" bezier-x="18.675886" bezier-y="-6.103939" number="1"/>
          </notations>
        </note>
      <note default-x="41.69" default-y="-155.67">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="70.42" default-y="-140.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          <slur type="stop" number="1" bezier-x="-9.788383" bezier-y="-17.036266"/>
          </notations>
        </note>
      <forward>
        <duration>12</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="6" width="375.14">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          <bass-alter>1</bass-alter>
          </bass>
        </harmony>
      <note default-x="19.02" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="47.75" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="76.48" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="105.21" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="133.94" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="162.67" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="191.41" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="220.14" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="248.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="277.6" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="306.33" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="335.06" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="19.02" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="35.51" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="277.6" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="294.09" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="349.06" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.06" default-y="-215.67">
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <lyric number="1" default-x="16.14" default-y="-74.84" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65</text>
          </lyric>
        </note>
      <note default-x="18.06" default-y="-190.67">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-180.67">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="1214.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.41</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="110.98" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="202.82" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="294.66" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="386.49" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="478.33" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="570.17" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="662.01" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="753.85" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="845.68" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="937.52" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="1029.36" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="1121.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="110.98" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="104.175144" bezier-y="-131.348124" number="1"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="662.01" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="110.98" default-y="-210.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="81.924174" bezier-y="-40.40765" number="2"/>
          <slur type="start" bezier-x="81.924174" bezier-y="-40.40765" number="3"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-87.98" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="110.98" default-y="-175.41">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="662.01" default-y="-230.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-84.638011" bezier-y="-34.362124"/>
          <slur type="stop" number="3" bezier-x="-84.638011" bezier-y="-34.362124"/>
          </notations>
        <lyric number="1" default-x="11.68" default-y="-87.98" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV6</text>
          </lyric>
        </note>
      <note default-x="662.01" default-y="-195.41">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="651.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>94.25</staff-distance>
          </staff-layout>
        </print>
      <note default-x="110.98" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="155.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="200.82" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="245.74" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="290.66" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="335.58" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="380.5" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="425.42" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="470.34" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="515.27" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="560.19" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="605.11" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <backup>
        <duration>48</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>B</bass-step>
          </bass>
        </harmony>
      <note default-x="110.98" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="380.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="515.27" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.713147" bezier-y="-89.390406"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="110.98" default-y="-199.25">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-65.74" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V65/III</text>
          </lyric>
        </note>
      <note default-x="110.98" default-y="-164.25">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.5" default-y="-199.25">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-65.74" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/III</text>
          </lyric>
        </note>
      <note default-x="380.5" default-y="-164.25">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="563.01">
      <note default-x="12.96" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="57.88" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="102.8" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="147.72" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="192.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="237.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="282.49" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="327.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="372.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
      <note default-x="417.25" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" show-number="none"/>
          </notations>
        </note>
      <note default-x="462.17" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="507.09" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>48</duration>
        </backup>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="12.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.72" default-y="-90">
        <rest/>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="282.49" default-y="-90">
        <rest/>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12" default-y="-184.25">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="5.53" default-y="-65.74" relative-y="-30">
          <syllabic>single</syllabic>
          <text>III</text>
          </lyric>
        </note>
      <note default-x="12" default-y="-149.25">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
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
 * par Dany dans le fichier (voir commentaire d'en-tete, notamment sur la
 * mesure 8).
 */
export const BEETHOVEN_OP27N2_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Do#m",  degre: "I",       fonction: "T" },
  { numero: 2, nom: "Do#m7", degre: "I4/2",    fonction: "T" },
  { numero: 3, nom: "La",    degre: "VI",      fonction: "T" },
  { numero: 4, nom: "Sol#7", degre: "V6/5",    fonction: "D" },
  { numero: 5, nom: "Do#m",  degre: "I",       fonction: "T" },
  { numero: 6, nom: "Sol#7", degre: "V6/5",    fonction: "D" },
  { numero: 7, nom: "Do#m",  degre: "I",       fonction: "T" },
  { numero: 8, nom: "Mi",    degre: "V6/5/III", fonction: "D", dominanteSecondaire: true },
  { numero: 9, nom: "Mi",    degre: "III",     fonction: "T" },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les <harmony>/
 * <lyric>/hauteurs reelles) avant redaction. Une correction par rapport au
 * chiffrage ecrit :
 *  - Mesure 7, 2e accord : le <lyric> ecrit « IV6 » (1er renversement,
 *    basse La), mais la seule note reellement jouee a la basse (voix 5,
 *    l'unique voix de basse ici, aucune doublure concurrente comme aux cas
 *    precedents) est Fa# — la tierce La n'apparait qu'a une voix mediane
 *    (voix 2), pas a la basse. C'est donc un accord de IV a l'etat
 *    fondamental (Fa#m), pas un premier renversement. Signale dans la prose,
 *    le chiffrage de la pastille n'est pas concerne (seul le 1er accord de
 *    la mesure, « I », y figure).
 */
export const BEETHOVEN_OP27N2_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Do# mineur (armure de 4 dièses).",
  metrique:
    "4/4, avec l'accompagnement continu en croches de triolet à la main droite — le " +
    "fameux motif ostinato du mouvement. Chaque mesure ne change de couleur harmonique " +
    "qu'une ou deux fois sous ce bruissement constant.",
  forme:
    "Neuf mesures qui esquissent une phrase complète : un geste tonique enrichi d'une " +
    "couleur napolitaine, une pédale de dominante chromatique, un bref retour à la " +
    "tonique, puis une bascule progressive vers le relatif majeur (Mi majeur) sur lequel " +
    "la phrase s'achève, sans jamais revenir chez elle — exactement le terrain où peut " +
    "germer un accord pivot vers une nouvelle tonalité, thème de ce cours.",
  sections: [
    {
      label: "Mesures 1-2",
      titre: "La tonique et son premier passage",
      chiffrage: "Do#m | Do#m7",
      fonctions: "I | I4/2",
      texte:
        "L'arpège brisé de la main droite pose d'abord la triade de tonique à l'état " +
        "fondamental (<strong>I</strong>). La mesure 2 y ajoute une septième (Si), en " +
        "3ᵉ renversement (<strong>I4/2</strong>) : la basse descend d'un demi-ton (Do#→Si) " +
        "sans que la fonction change — c'est une simple coloration de passage, toujours la " +
        "tonique.",
    },
    {
      label: "Mesure 3",
      titre: "La sixte napolitaine",
      chiffrage: "La | Ré/Fa#",
      fonctions: "VI | N6",
      texte:
        "Premier accord de couleur : <strong>VI</strong> (La majeur), le relatif majeur du " +
        "ton, qui prolonge la fonction tonique. Le second est la carte de visite " +
        "harmonique de cette pièce : la <strong>sixte napolitaine</strong> — un accord " +
        "majeur construit sur le 2ᵉ degré abaissé (Ré, à la place du Ré# diatonique), " +
        "toujours utilisé en 1ᵉʳ renversement (basse Fa#, sa tierce). C'est l'accord " +
        "chromatique le plus célèbre du répertoire romantique pour colorer une " +
        "sous-dominante.",
    },
    {
      label: "Mesure 4",
      titre: "Une pédale de dominante chromatique",
      chiffrage: "Sol#7/Si# — Dom/Sol# — Sol#7",
      fonctions: "V6/5 — (couleur chromatique) — V7",
      texte:
        "Toute la mesure repose sur une <strong>pédale de Sol#</strong> (la dominante) " +
        "tenue à la basse sans interruption. Entre les deux accords de dominante (d'abord " +
        "en 1ᵉʳ renversement, puis à l'état fondamental), Beethoven glisse un accord de " +
        "Do mineur — une simple broderie chromatique au-dessus de la pédale, qui ne " +
        "modifie jamais la fonction dominante d'ensemble de la mesure.",
    },
    {
      label: "Mesures 5-6",
      titre: "Retour bref à la tonique",
      chiffrage: "Do#m | Sol#7/Si#",
      fonctions: "I | V6/5",
      texte:
        "Un bref retour chez soi avant une nouvelle préparation dominante, qui reproduit " +
        "presque note pour note le geste des mesures 1 et 4 — cette respiration " +
        "tonique-dominante est le moteur rythmique de tout le mouvement.",
    },
    {
      label: "Mesure 7",
      titre: "Tonique puis sous-dominante mineure",
      chiffrage: "Do#m — Fa#m",
      fonctions: "I — iv",
      texte:
        "Le chiffrage écrit « IV6 » pour le second accord, mais la seule note réellement " +
        "jouée à la basse à cet instant est Fa# — le La qu'on entend au même moment se " +
        "trouve à une voix médiane, pas à la basse. C'est donc un accord de " +
        "<strong>iv</strong> à l'état fondamental (Fa# mineur), la sous-dominante mineure, " +
        "et non son premier renversement.",
    },
    {
      label: "Mesures 8-9",
      titre: "Tonicisation du relatif majeur",
      chiffrage: "Mi/Si (pédale) — Si7 — Mi",
      fonctions: "D (préparatoire) — D — T (nouvelle couleur)",
      texte:
        "Une pédale de Si s'installe à la basse pour toute la mesure 8. Dans sa première " +
        "moitié, les voix supérieures ne forment qu'un simple accord de Mi majeur " +
        "(<strong>III6/4</strong>) : la vraie dominante appliquée n'arrive qu'à la seconde " +
        "moitié, quand la septième (Ré#) apparaît et transforme l'accord en " +
        "<strong>Si7 (V7/III)</strong>. La résolution à la mesure 9 sur <strong>Mi " +
        "majeur (III)</strong> referme la phrase — non pas chez la tonique, mais sur son " +
        "relatif majeur. Or Do# mineur est justement le relatif mineur de Mi majeur : la " +
        "paire d'accords communs entre ces deux tons (à commencer par la tonique de l'un, " +
        "qui est le vi de l'autre) est exactement la relation qu'exploite un accord pivot " +
        "— cette phrase s'arrête au bord exact d'une modulation, sans la franchir.",
    },
  ],
  synthese: [
    {
      titre: "Une seule pédale, deux couleurs",
      texte:
        "Aux mesures 4 et 8, Beethoven tient une seule note à la basse (Sol# puis Si) " +
        "pendant que les voix supérieures changent d'accord au-dessus — la pédale donne " +
        "sa cohérence à la mesure même quand l'harmonie semble bouger.",
    },
    {
      titre: "La napolitaine, signature du morceau",
      texte:
        "L'accord de la mesure 3 (Ré/Fa#, N6) est l'un des emblèmes harmoniques de ce " +
        "mouvement — un emprunt chromatique si caractéristique qu'il a donné son nom à " +
        "toute une catégorie d'accords dans la théorie classique.",
    },
    {
      titre: "Une fin ouverte sur le relatif majeur",
      texte:
        "En s'arrêtant sur III plutôt que de revenir sur I, cet extrait ne fait que " +
        "suggérer la modulation — il place le terrain (l'accord commun aux deux tons) " +
        "sans la déclencher, exactement la nuance que ce cours cherche à faire entendre.",
    },
  ],
};
