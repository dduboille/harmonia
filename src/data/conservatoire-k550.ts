import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-k550.ts
 * Harmonia — Extrait (mesures 1 a 9, la mesure 9 n'occupant qu'une demi-mesure)
 * du 1er mouvement (Molto allegro, sol mineur) de la Symphonie n 40 K.550 de
 * Mozart, pour la section « conservatoire » du cours 3.
 *
 * MusicXML VERBATIM : export MuseScore Studio 4.6.3 de Dany, version FINALE
 * (fichier "40bon.musicxml", 2026-07-25 21:08 — ajoute une demi-mesure 9 par
 * rapport a la version precedente "40.musicxml", pour completer la cadence
 * IIø7-V7-I6/4 enseignee dans la lecon). Meme demarche que BWV846_MESURES_1_8 /
 * PATHETIQUE2_MESURES_1_8 (voir leurs commentaires d'en-tete) : groupes de
 * ligature explicites, couleurs de tete de note par fonction tonale (bleu
 * #0000FF = tonique, orange #FFAA00 = sous-dominante, rouge #FF0000 =
 * dominante), symboles d'accords (<harmony>), chiffrage + fonction en paroles
 * (<lyric>) sous la basse, sauts de systeme explicites (<print new-system>) aux
 * mesures 5 et 9. Pas de balise <mode> (comme tous les exports de Dany) : le
 * mode mineur est INFERE par correlation de profil tonal (cf. musicxml-parse.ts,
 * inferModeParProfil) plutot que suppose par defaut.
 *
 * Analyse harmonique (cf. K550_ANALYSE plus bas, qui reprend les memes lectures
 * que les paroles du fichier) : I6/4 (tonique, quinte a la basse) tenu sur les
 * mesures 1-4, puis IIø7 en 2e renversement (+4/3, sous-dominante) sur les
 * mesures 5-6, puis V7 (mesure 7) et V6/4-V7+6 (mesure 8), et enfin retour a
 * I6/4 sur la demi-mesure 9 - la cadence complete IIø7-V7-I qu'enseigne la
 * lecon.
 *
 * `<sound tempo="90">` ajoute a la mesure 1 (absent du fichier d'origine) :
 * sans tempo ecrit, notre horloge audio suppose 90 bpm mais Verovio suppose
 * 120 bpm pour sa PROPRE table de temps MIDI (celle qui pilote le
 * surlignage des notes pendant la lecture) — les deux derivent l'une de
 * l'autre. Un tempo explicite fait lire le meme chiffre aux deux systemes ;
 * ne change pas la vitesse de lecture (90 etait deja le repli utilise).
 * Detail complet du diagnostic dans conservatoire-beethoven-op27n2.ts.
 */
export const K550_MESURES_1_9 =
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
      <encoding-date>2026-07-25</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2026-07-25</miscellaneous-field>
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
    <credit-words default-x="600.241935" default-y="1611.210312" justify="center" valign="top" font-family="FreeSerif" font-size="24">Symphony No.40 in Gm, K550</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.7587" default-y="1511.210312" justify="right" valign="bottom" font-family="FreeSerif" font-size="12">W.A.Mozart</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="600.241935" default-y="1554.060198" justify="center" valign="top" font-size="14"></credit-words>
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
    <measure number="1" width="318">
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
        <divisions>2</divisions>
        <key>
          <fifths>-2</fifths>
          </key>
        <time symbol="cut">
          <beats>2</beats>
          <beat-type>2</beat-type>
          </time>
        <staves>2</staves>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
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
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="110.15" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="211.89" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="262.76" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="288.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="110.15" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.72" default-y="-45.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6/4(T)</text>
          </lyric>
        </note>
      <note default-x="135.59" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="161.02" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="186.46" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="211.89" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="237.33" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.76" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="288.2" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="2" width="220.35">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.37" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="88.81" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.11" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="190.55" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12.5" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.94" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.37" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.81" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.24" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="139.68" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.11" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="190.55" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="3" width="220.35">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.37" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.24" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="165.11" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="190.55" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12.5" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.94" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.37" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.81" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.24" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="139.68" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.11" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="190.55" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="4" width="220.35">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.37" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="88.81" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.24" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.11" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="190.55" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12.5" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.94" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.37" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.81" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.24" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="139.68" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="165.11" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="190.55" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="5" width="304.78">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>257.66</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          <bass-alter>-1</bass-alter>
          </bass>
        </harmony>
      <note default-x="86.63" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="140.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="194.26" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="248.07" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="274.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="86.63" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.72" default-y="-60.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II+4/3(SD)</text>
          </lyric>
        </note>
      <note default-x="113.54" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="140.45" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="167.35" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="194.26" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="221.17" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="248.07" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="274.98" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="6" width="230.65">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m7b5">half-diminished</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          <bass-alter>-1</bass-alter>
          </bass>
        </harmony>
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="66.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="93.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="120.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.94" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="200.85" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12.5" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.72" default-y="-60.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II+4/3(SD)</text>
          </lyric>
        </note>
      <note default-x="39.41" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="66.31" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="93.22" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FFAA00">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="120.13" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="147.03" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="173.94" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="200.85" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="7" width="236.91">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="18.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="72.57" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="126.38" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="180.2" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="207.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.32" default-y="-60.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7(D)</text>
          </lyric>
        </note>
      <note default-x="45.66" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="72.57" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="99.48" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="126.38" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="153.29" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="180.2" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="207.11" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="8" width="256.7">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind>major</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="18.76" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="72.57" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="101.33" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7">dominant</kind>
        <bass arrangement="horizontal">
          <bass-step>A</bass-step>
          </bass>
        </harmony>
      <note default-x="128.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="182.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="208.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.32" default-y="-60.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V6/4(D)</text>
          </lyric>
        </note>
      <note default-x="45.66" default-y="-165">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="72.57" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="101.33" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem color="#FF0000">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="128.23" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.32" default-y="-60.32" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7+6(D)</text>
          </lyric>
        </note>
      <note default-x="155.14" default-y="-165">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="182.05" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="208.95" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead color="#FF0000">normal</notehead>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="9" width="244.43">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>257.66</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        <bass arrangement="horizontal">
          <bass-step>D</bass-step>
          </bass>
        </harmony>
      <note default-x="87.59" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="134.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.93" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="87.59" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="9.72" default-y="-44.92" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I6/4(T)</text>
          </lyric>
        </note>
      <note default-x="110.93" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notehead color="#0000FF">normal</notehead>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="134.26" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.59" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="180.93" default-y="-125">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
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
 * Analyse mesure par mesure de `K550_MESURES_1_9` — voir le commentaire d'en-tête.
 *
 * Mesures 7-8 (V7 / V6/4) : fonction corrigée de "T" à "D" le 2026-07-26, en
 * écrivant l'analyse narrative de ce morceau. La basse de ces deux mesures est
 * celle de l'accord de dominante lui-même (ré puis la, tous deux membres du Ré7 —
 * pas une pédale de tonique décorée, contrairement à la mesure 3 de BWV846/cours1,
 * seul autre cas où couleur et fonction avaient semblé se contredire). Question
 * posée à Dany, qui a choisi de corriger l'étiquette (D) plutôt que la couleur
 * (rouge, déjà cohérente) ou le texte. Les `<lyric>` du MusicXML ci-dessus ont été
 * mis à jour en conséquence (V7(D), V6/4(D), V7+6(D)).
 */
export const K550_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 2, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 3, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 4, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 5, nom: "Lam7b5",  degre: "II+4/3", fonction: "SD" },
  { numero: 6, nom: "Lam7b5",  degre: "II+4/3", fonction: "SD" },
  { numero: 7, nom: "Ré7",     degre: "V7",     fonction: "D" },
  { numero: 8, nom: "Ré",      degre: "V6/4",   fonction: "D" },
  { numero: 9, nom: "Solm",    degre: "I6/4",   fonction: "T" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée mesure par mesure contre les hauteurs et
 * couleurs RÉELLES du MusicXML ci-dessus (pas recopiée telle quelle d'un premier
 * jet fourni par Dany, généré ailleurs). Plusieurs corrections :
 *  - « pédale de dominante » (mesures 1-4) est trompeur : le ré tenu à la basse
 *    est la QUINTE de l'accord de TONIQUE (i6/4), pas une pédale de dominante
 *    indépendante — corrigé en « quinte de la tonique à la basse » ;
 *  - mesures 7-8 : le premier jet écrivait la fonction "(D)" alors que le fichier
 *    portait encore "(T)" — CONFLIT du même type que la mesure 3 de BWV846/cours1.
 *    Mais ici, contrairement à BWV846, aucune pédale de tonique ne justifie une
 *    relecture fonctionnelle : la basse (ré puis la) est celle de l'accord de
 *    dominante lui-même. Question posée à Dany, qui a choisi de corriger
 *    l'étiquette en "(D)" (dans K550_ANALYSE ET dans les <lyric> du MusicXML)
 *    plutôt que la couleur (rouge, déjà cohérente) — décision inverse de celle
 *    prise pour BWV846, où c'est la couleur qui avait été corrigée ;
 *  - la mesure 9 n'est pas une « cadence authentique » au sens strict : elle
 *    revient au i, mais toujours en 2e renversement (i6/4, quinte à la basse,
 *    exactement la texture d'ouverture) — pas de fondamentale à la basse.
 */
export const K550_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Sol mineur (i) — 2 bémols à l'armure (si♭, mi♭). Mode mineur INFÉRÉ par corrélation de profil tonal (aucune balise <mode> dans l'export MuseScore) : confirmé par l'omniprésence du pôle I (Solm) et la dominante Ré7 avec sa sensible fa♯, seule note étrangère à l'armure de tout l'extrait.",
  metrique: "C (4/4, alla breve).",
  forme: "Le célèbre thème d'ouverture repose sur une pédale — la quinte de la tonique (ré) tenue à la basse pendant 4 mesures — puis glisse par un simple demi-ton vers une sous-dominante enrichie (IIø7, mesures 5-6), avant la progression cadentielle IIø7-V7-I qu'enseigne ce cours (mesures 7 à 9 — Dany a ajouté la demi-mesure 9 spécifiquement pour la compléter).",
  sections: [
    {
      label: "Mesures 1-4",
      titre: "Le thème, sur la quinte de la tonique tenue à la basse",
      chiffrage: "Gm/D",
      fonctions: "i6/4",
      texte:
        "La main gauche égraine un motif régulier en croches (sol-ré-sol-si♭ — la fondamentale, la quinte, la fondamentale, la tierce de sol mineur) : c'est un accord de TONIQUE tout du long, mais avec sa propre QUINTE (ré) à la basse — pas une pédale de dominante indépendante, seulement l'un des sons de la tonique elle-même. Au-dessus, le célèbre motif anacroustique (mi♭-ré-ré) lance le thème, développé sur les 4 mesures.",
    },
    {
      label: "Mesures 5-6",
      titre: "La sous-dominante enrichie, par degré conjoint",
      chiffrage: "Am7b5/Eb",
      fonctions: "ii+4/3",
      texte:
        "La basse passe de ré à mi♭ par un simple demi-ton — sans le moindre saut — pour rejoindre un accord de quinte diminuée et septième (la-do-mi♭-sol, IIe degré demi-diminué), sa PROPRE quinte (mi♭) cette fois à la basse. C'est la couleur orange : la sous-dominante enrichie s'éloigne franchement de la tonique.",
    },
    {
      label: "Mesures 7-8",
      titre: "La dominante et sa tension",
      chiffrage: "D7  |  D/A puis D7/A",
      fonctions: "V7  |  V6/4 puis V7+6",
      texte:
        "La sensible du ton (fa♯, seule altération de tout l'extrait) apparaît enfin à la mesure 7 : elle forme, avec le do (7e de l'accord), le <strong>triton</strong> qui porte toute la tension de la dominante. À la mesure 8, la basse reste proche (ré, la, fa♯) : le même accord de dominante, d'abord entendu comme une triade en 2e renversement (V6/4), puis enrichi de sa 7e (V7, toujours en 2e renversement, d'où le « +6 »).",
    },
    {
      label: "Mesure 9",
      titre: "Retour — pas encore une cadence fermée",
      chiffrage: "Gm/D",
      fonctions: "i6/4",
      texte:
        "La tension retombe sur la tonique — mais toujours en 2e renversement (i6/4), exactement la texture qui ouvrait l'extrait. Ce n'est pas une cadence authentique au sens strict (qui exigerait la fondamentale à la basse) : plutôt un retour à l'idée d'ouverture, la boucle qui referme la phrase pour relancer le thème.",
    },
  ],
  synthese: [
    {
      titre: "Une note, deux fonctions",
      texte: "Le ré porte toute l'harmonie des 4 premières mesures (5e de la tonique) puis, un ton plus haut à la basse (mi♭), fait glisser l'harmonie vers la sous-dominante — un déplacement d'un seul demi-ton suffit à changer complètement de fonction.",
    },
    {
      titre: "Le triton, moteur de la dominante",
      texte: "Fa♯ (la sensible) et do (la 7e) forment l'intervalle qui pousse tout vers la résolution — la seule altération étrangère à l'armure de tout l'extrait, réservée aux 2 mesures de dominante.",
    },
    {
      titre: "Une cadence qui ne referme pas tout à fait",
      texte: "IIø7-V7-I est bien la progression cadentielle que ce cours enseigne, mais elle boucle ici sur un I en 2e renversement (comme au départ), pas sur une fondamentale à la basse — la tension retombe sans que la phrase se ferme complètement.",
    },
  ],
};
