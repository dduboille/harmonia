import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-k550.ts
 * Harmonia — Extrait (mesures 1 a 8) du 1er mouvement (Molto allegro, sol mineur)
 * de la Symphonie n 40 K.550 de Mozart, pour la section « conservatoire » du
 * cours 3.
 *
 * MusicXML VERBATIM : export MuseScore Studio 4.6.3 de Dany, version FINALISEE
 * (fichier "40.musicxml", 2026-07-25 20:48 — remplace la version precedente sans
 * <harmony>/<lyric>). Meme demarche que BWV846_MESURES_1_8 / PATHETIQUE2_MESURES_1_8
 * (voir leurs commentaires d'en-tete) : groupes de ligature explicites, couleurs
 * de tete de note par fonction tonale (bleu #0000FF = tonique, orange #FFAA00 =
 * sous-dominante, rouge #FF0000 = dominante), symboles d'accords (<harmony>),
 * chiffrage + fonction en paroles (<lyric>) sous la basse, saut de systeme
 * explicite (<print new-system>) a la mesure 5. Pas de balise <mode> (comme tous
 * les exports de Dany) : le mode mineur est INFERE par correlation de profil
 * tonal (cf. musicxml-parse.ts, inferModeParProfil) plutot que suppose par
 * defaut.
 *
 * Analyse harmonique des 8 mesures (cf. K550_ANALYSE plus bas, qui reprend les
 * memes lectures que les paroles du fichier) : I6/4 (tonique, quinte a la basse)
 * tenu sur les mesures 1-4, puis IIø7 en 2e renversement (+4/3, sous-dominante)
 * sur les mesures 5-6, puis V7 sur la mesure 7 et V6/4-V7 sur la mesure 8 - un
 * schema I6/4-IIø7-V7 tres classique de phrase preparatoire.
 */
export const K550_MESURES_1_8 =
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
    <measure number="5" width="307.05">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>241.45</system-distance>
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
      <note default-x="141.09" default-y="-15">
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
      <note default-x="195.55" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="250.02" default-y="-10">
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
      <note default-x="277.25" default-y="-15">
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
      <note default-x="113.86" default-y="-145">
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
      <note default-x="141.09" default-y="-135">
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
      <note default-x="168.32" default-y="-130">
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
      <note default-x="195.55" default-y="-135">
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
      <note default-x="222.79" default-y="-145">
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
      <note default-x="250.02" default-y="-135">
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
      <note default-x="277.25" default-y="-130">
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
    <measure number="6" width="232.92">
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
      <note default-x="66.96" default-y="-10">
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
      <note default-x="94.19" default-y="-15">
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
      <note default-x="121.42" default-y="-15">
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
      <note default-x="175.89" default-y="-10">
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
      <note default-x="203.12" default-y="-15">
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
      <note default-x="39.73" default-y="-145">
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
      <note default-x="66.96" default-y="-135">
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
      <note default-x="94.19" default-y="-130">
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
      <note default-x="121.42" default-y="-135">
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
      <note default-x="148.65" default-y="-145">
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
      <note default-x="175.89" default-y="-135">
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
      <note default-x="203.12" default-y="-130">
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
    <measure number="7" width="239.17">
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
      <note default-x="73.22" default-y="10">
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
      <note default-x="127.68" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="182.14" default-y="10">
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
      <note default-x="209.37" default-y="5">
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
          <text>V7(T)</text>
          </lyric>
        </note>
      <note default-x="45.99" default-y="-150">
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
      <note default-x="73.22" default-y="-140">
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
      <note default-x="100.45" default-y="-130">
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
      <note default-x="127.68" default-y="-140">
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
      <note default-x="154.91" default-y="-150">
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
      <note default-x="182.14" default-y="-140">
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
      <note default-x="209.37" default-y="-130">
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
    <measure number="8" width="249.9">
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
      <note default-x="73.22" default-y="0">
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
      <note default-x="101.97" default-y="-5">
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
      <note default-x="129.21" default-y="-10">
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
      <note default-x="183.67" default-y="-10">
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
      <note default-x="210.9" default-y="-15">
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
          <text>V6/4(T)</text>
          </lyric>
        </note>
      <note default-x="45.99" default-y="-165">
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
      <note default-x="73.22" default-y="-150">
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
      <note default-x="101.97" default-y="-140">
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
      <note default-x="129.21" default-y="-150">
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
          <text>V7+6(T)</text>
          </lyric>
        </note>
      <note default-x="156.44" default-y="-165">
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
      <note default-x="183.67" default-y="-150">
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
      <note default-x="210.9" default-y="-140">
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
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`;

/** Analyse mesure par mesure de `K550_MESURES_1_8` — voir le commentaire d'en-tête. */
export const K550_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 2, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 3, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 4, nom: "Solm",    degre: "I6/4",   fonction: "T" },
  { numero: 5, nom: "Lam7b5",  degre: "II+4/3", fonction: "SD" },
  { numero: 6, nom: "Lam7b5",  degre: "II+4/3", fonction: "SD" },
  { numero: 7, nom: "Ré7",     degre: "V7",     fonction: "T" },
  { numero: 8, nom: "Ré",      degre: "V6/4",   fonction: "T" },
];
