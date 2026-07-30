import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-voiles.ts
 * Harmonia — Voiles (Debussy, Préludes livre I n°2, 1909), INTÉGRALE,
 * 64 mesures, pour la section "conservatoire" du cours 30 (niveau 4 —
 * harmonie impressionniste et modalité avancée).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "voiles-annote.musicxml") —
 * jamais reconstruit à la main, cf. feedback-partitions-verbatim. Seul ajout :
 * la balise <work-title> (absente du fichier source, signalé par Dany
 * lui-même comme lacune à combler si archivage) — aucun contenu musical
 * modifié.
 *
 * AVERTISSEMENT DE MÉTHODE (comme pour la Cathédrale engloutie, cours29) :
 * chiffrer cette pièce en degrés serait un contresens plus radical encore —
 * la gamme par tons ne contient NI quinte juste NI sensible NI triade
 * majeure/mineure, aucune fonction n'y est même constructible. La grille
 * ANALYSE ci-dessous nomme des collections (tons entiers / pentatonique /
 * chromatisme d'ornement), fonction "?" partout sans exception.
 *
 * Relevé exhaustif des classes de hauteurs des 64 mesures (script dédié,
 * pas une lecture partition en main) : CONFIRME que 63 mesures n'utilisent
 * que la collection par tons entiers {Do,Ré,Mi,Fa#,Sol#,Sib}, à deux
 * exceptions : la mesure 31 (figure chromatique d'ornement, Sol et Réb
 * confirmés comme seules notes étrangères aux deux collections) et les
 * mesures 42-46 (îlot pentatonique des touches noires {Réb,Mib,Solb,Lab,Sib}
 * du climax). Pédale de Sib confirmée ininterrompue de la mesure 5 à la
 * mesure 61 (57 mesures), glissant sur Fa# pour les mesures 62-63. Accord
 * final : tierce Do-Mi nue (sans basse), confirmée apparaître exactement
 * deux fois dans la coda (à l'avant-dernier et au tout dernier événement),
 * comme décrit. AUCUNE erreur trouvée.
 *
 * Trouvaille de corpus vérifiée par simple arithmétique de classes de
 * hauteurs : les 4 notes de la sixte augmentée française de Chopin
 * (Lab-Do-Ré-Fa#, cours24) appartiennent TOUTES à la collection par tons
 * entiers de cette pièce — {0,2,4,6,8,10} en classes de hauteurs contient
 * Lab(8), Do(0), Ré(2), Fa#(6) : confirmé.
 */
export const VOILES_MESURES_1_64 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Voiles</work-title>
    </work>
  <identification>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-30</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/18230801/scores/7074797</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2021-10-20</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.4</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1856.25</page-height>
      <page-width>1312.5</page-width>
      <page-margins type="even">
        <left-margin>93.75</left-margin>
        <right-margin>93.75</right-margin>
        <top-margin>93.75</top-margin>
        <bottom-margin>93.75</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>93.75</left-margin>
        <right-margin>93.75</right-margin>
        <top-margin>93.75</top-margin>
        <bottom-margin>93.75</bottom-margin>
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
    <music-font font-family="Leland" />
    <word-font font-family="Edwin" font-size="10" />
    <lyric-font font-family="Edwin" font-size="10" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="93.75" default-y="1762.5" justify="left" valign="top" font-size="22">_II. </credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1218.75" default-y="1662.5" justify="right" valign="bottom">Claude Debussy</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <part-abbreviation print-object="no">Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="322.54">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>100</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>206.02</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        <measure-layout>
          <measure-distance>50</measure-distance>
          </measure-layout>
        </print>
      <attributes>
        <divisions>70224</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>2</beats>
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
      <sound tempo="44" />
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-37.68" default-y="62.21" relative-y="20" font-weight="bold" font-size="12">Modéré (</words>
          <words font-weight="normal" font-family="Leland Text"></words>
          <words font-weight="bold" font-family="Edwin"> </words>
          </direction-type>
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" default-y="62.21" relative-y="20">
            <beat-unit />
            </metronome>
          </direction-type>
        <direction-type>
          <words default-x="-37.68" default-y="62.21" relative-y="20" font-weight="bold" font-size="12"> 88)</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="44" />
        </direction>
      <note default-x="83.49" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-55.76" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="6.1" relative-x="-124.67" relative-y="53.25">(Dans un rythme sans rigueur et caressant.)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">TONS ENTIERS (Do·Ré·Mi·Fa#·Sol#·Si♭) : tierces majeures parallèles</words></direction-type><staff>2</staff></direction><note default-x="161.62" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="40.170208" bezier-y="31.908233" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.62" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-40.19" relative-x="-11" relative-y="-38.18" font-style="italic">très doux</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="213.7" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="213.7" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="242.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="242.47" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="265.62" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="265.62" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="292.74" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="292.74" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="185.61" default-y="-115">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="210.1">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-82.52" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="17.12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="35.12" default-y="-25" />
        <dot default-x="41.62" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="35.12" default-y="-15" />
        <dot default-x="41.62" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.38" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="89.38" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.52" relative-x="-5.72" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="130.16" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-37.716745" bezier-y="32.320151" />
          </notations>
        </note>
      <note default-x="130.16" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="97.65" default-y="-115">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="252.05">
      <note default-x="13" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-55.76" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="91.13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="56.051569" bezier-y="30.17694" number="1" />
          </notations>
        </note>
      <note default-x="91.13" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.86" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="143.22" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="143.22" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="171.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="171.98" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="195.13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="222.25" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="222.25" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="118.63" default-y="-115">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="240.31">
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-56.46" relative-x="4" relative-y="-25">
            <other-dynamics>piu </other-dynamics>
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="17.12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-77.09" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="95.25" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="95.25" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="134.34" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="134.34" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.06" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="169.06" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.78" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-55.567737" bezier-y="31.058858" />
          </notations>
        </note>
      <note default-x="203.78" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="112.75" default-y="-115">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="217.1">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>257.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">entrée de la pédale de Si♭ (tenue jusqu'à la m. 61)</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.36" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="61.36" default-y="-125">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-33.52" relative-y="-58.75">
            <pp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="138.33" default-y="-115" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>70224</duration>
        </forward>
      <note default-x="138.33" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="48.932005" bezier-y="-28.669757" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="6" width="226.97">
      <note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="122.55" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="106.09" default-y="-105" print-object="no">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.23" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.55" default-y="-135">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="173.86" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="7" width="226.97">
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-x="52.34" relative-y="-43.02">
            <pp />
            <other-dynamics> expressif</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="71.23" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.765706" bezier-y="21.638414" number="2" />
          <slur type="start" bezier-x="18.765706" bezier-y="21.638414" number="3" />
          </notations>
        </note>
      <note default-x="122.55" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="173.86" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-22.608173" bezier-y="17.79327" />
          <slur type="stop" number="3" bezier-x="-22.608173" bezier-y="17.79327" />
          </notations>
        </note>
      <note default-x="173.86" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="71.23" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="13.307424" bezier-y="-10.983927" number="2" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-x="-6.72" relative-y="-62">
            <other-dynamics>toujours </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="122.55" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-12.551251" bezier-y="-11.84062" />
          </notations>
        </note>
      <note default-x="173.86" default-y="-115" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.932005" bezier-y="-28.669757" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.55" default-y="-160">
        <rest />
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="226.97">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.55" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="122.55" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="173.86" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="106.09" default-y="-105" print-object="no">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="34.27743" bezier-y="-23.523762" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.23" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.55" default-y="-135">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="173.86" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="9" width="226.97">
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="71.23" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.765706" bezier-y="21.638414" number="2" />
          <slur type="start" bezier-x="18.765706" bezier-y="21.638414" number="3" />
          </notations>
        </note>
      <note default-x="122.55" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="173.86" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-22.608173" bezier-y="17.79327" />
          <slur type="stop" number="3" bezier-x="-22.608173" bezier-y="17.79327" />
          </notations>
        </note>
      <note default-x="173.86" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="71.23" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="13.307424" bezier-y="-10.983927" number="2" />
          </notations>
        </note>
      <note default-x="122.55" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-12.551251" bezier-y="-11.84062" />
          </notations>
        </note>
      <note default-x="173.86" default-y="-115" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.746219" bezier-y="-24.279667" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.55" default-y="-160">
        <rest />
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="335.59">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>257.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>88.34</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-85.51" relative-x="-3.34" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="64.78" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above">
        <direction-type>
          <words default-y="41.23" relative-y="10" font-style="italic">très doux</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="172.27" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="25.354557" bezier-y="-24.531521" number="1" />
          <slur type="start" bezier-x="25.354557" bezier-y="-24.531521" number="2" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="43.99" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.27" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="226.02" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="226.02" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="254.78" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="254.78" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="278.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="278.67" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.79" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="305.79" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="119.210879" bezier-y="23.168075" number="3" />
          </notations>
        </note>
      <note default-x="64.78" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="172.27" default-y="-148.34">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="3.16" default-y="44" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.27" default-y="-113.34">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="43.884434" bezier-y="-26.699722" number="4" />
          <slur type="start" bezier-x="43.884434" bezier-y="-26.699722" number="5" />
          <slur type="start" bezier-x="43.884434" bezier-y="-26.699722" number="6" />
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.53" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.27" default-y="-168.34">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="226.02" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="11" width="236.7">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.049635" bezier-y="-18.484277" />
          <slur type="stop" number="2" bezier-x="-30.049635" bezier-y="-18.484277" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.41" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-148.34">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-113.34">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.67" default-y="-143.34">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.67" default-y="-108.34">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="127.41" default-y="-148.34">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="127.41" default-y="-113.34">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-56.95" relative-x="-10.33" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="181.15" default-y="-153.34">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="181.15" default-y="-118.34">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="4" bezier-x="-43.415518" bezier-y="-27.455627" />
          <slur type="stop" number="5" bezier-x="-43.415518" bezier-y="-27.455627" />
          <slur type="stop" number="6" bezier-x="-43.415518" bezier-y="-27.455627" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="127.41" default-y="-178.34">
        <rest />
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="293.17">
      <note default-x="18.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="under" placement="below" bezier-x="56.94888" bezier-y="-38.898808" number="1" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="43.99" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.76" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.42" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="90.42" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="119.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="119.18" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.07" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="143.07" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.19" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="170.19" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.31" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="197.31" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="18.76" default-y="-158.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="18.76" default-y="-123.34">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="54.59" default-y="-163.34">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="54.59" default-y="-128.34">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.42" default-y="-158.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.42" default-y="-123.34">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="237.62" default-y="-163.34">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-103.970407" bezier-y="62.754665" />
          </notations>
        </note>
      <note default-x="237.62" default-y="-128.34">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="13" width="259.55">
      <note default-x="17.12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-98.57" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="56.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="56.2" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="92.03" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-64.379536" bezier-y="-24.729891" />
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="127.86" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="163.69" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="163.69" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="17.12" default-y="-163.34">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="29" />
            </articulations>
          </notations>
        </note>
      <note default-x="17.12" default-y="-128.34">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="17.12" default-y="-183.34">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="92.03" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="20.955535" bezier-y="-18.297858" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="204" default-y="-193.34">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.377728" bezier-y="-15.080712" />
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="14" width="249.33">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>257.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.36" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="63.36" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="155.44" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.36" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.16" default-y="29" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.36" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.36" default-y="-160">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="115.98" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.491358" bezier-y="-19.599569" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.91" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="15" width="290.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-55.76" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="19.92" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="66.169847" bezier-y="38.206391" number="2" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="+">augmented</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">triades augmentées parallèles : les seules triades du système</words></direction-type><staff>2</staff></direction><note default-x="77.47" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="77.47" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="106.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="106.23" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="129.61" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.74" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="156.74" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="+">augmented</kind></harmony><note default-x="183.86" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="183.86" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="77.47" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="32.919933" bezier-y="-17.932356" number="3" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.47" default-y="-155">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.47" default-y="-145">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.47" default-y="-130">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="183.86" default-y="-150">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-140">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-125">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.48" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="3" bezier-x="-30.37895" bezier-y="-21.963852" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="236.48" default-y="-145">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="236.48" default-y="-130">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="236.48" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-155">
        <grace />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-145">
        <grace />
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-130">
        <grace />
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-120">
        <grace />
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.491358" bezier-y="-19.599569" />
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="16" width="293.88">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-68.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="53.98" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>61446</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="71.99" default-y="-25" />
        <dot default-x="78.49" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="53.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="71.99" default-y="-15" />
        <dot default-x="78.49" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="146.07" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="146.07" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-68.35" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="186.85" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-64.207808" bezier-y="37.732978" />
          </notations>
        </note>
      <note default-x="186.85" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="156.82" default-y="-105" print-object="no">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="53.98" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="38.433949" bezier-y="-26.413565" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.6" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="186.85" default-y="-135">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="239.47" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="17" width="290.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-47.95" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="19.92" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="41.650978" bezier-y="21.816069" number="2" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="77.47" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="77.47" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="106.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="106.23" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="129.61" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.74" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="156.74" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="183.86" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="183.86" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="77.47" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="32.919933" bezier-y="-17.932356" number="3" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.47" default-y="-155">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.47" default-y="-145">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.47" default-y="-130">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="183.86" default-y="-150">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-140">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.86" default-y="-125">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.48" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="3" bezier-x="-30.37895" bezier-y="-21.963852" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="236.48" default-y="-145">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="236.48" default-y="-130">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="236.48" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-155">
        <grace />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-145">
        <grace />
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-130">
        <grace />
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="267.24" default-y="-120">
        <grace />
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-39.521577" bezier-y="-24.756611" />
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>35112</duration>
        </forward>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="18" width="333.88">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>92.43</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.57</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-82.53" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="73.98" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>61446</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="91.99" default-y="-25" />
        <dot default-x="98.49" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="91.99" default-y="-15" />
        <dot default-x="98.49" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.07" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-28.549459" bezier-y="16.965701" />
          </notations>
        </note>
      <note default-x="176.07" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-62.13" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-82.53" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="201.99" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="219.99" default-y="-15" />
        <dot default-x="226.49" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.325977" bezier-y="14.798422" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="4.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="201.99" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="219.99" default-y="-5" />
        <dot default-x="226.49" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="304.08" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.425615" bezier-y="17.217319" />
          </notations>
        </note>
      <note default-x="304.08" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="177.72" default-y="-108.57" print-object="no">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="73.98" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.225979" bezier-y="-22.460273" number="1" />
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.32" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="201.99" default-y="-138.57">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="260.33" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.512098" bezier-y="-20.803319" />
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="19" width="266.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-62.13" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="19.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-15" />
        <dot default-x="44.42" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.67322" bezier-y="17.160958" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-5" />
        <dot default-x="44.42" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="122" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.346357" bezier-y="17.608386" />
          </notations>
        </note>
      <note default-x="122" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="64.809199" bezier-y="34.824475" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.93" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="39.97" relative-x="23.06" spread="11.5" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-118.57">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="78.25" default-y="-168.57">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="26.817625" bezier-y="-15.844818" number="2" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="78.25" default-y="-158.57">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.25" default-y="-148.57">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.25" default-y="-133.57">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.93" default-y="-163.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.93" default-y="-153.57">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.93" default-y="-143.57">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.93" default-y="-128.57">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="206.26" default-y="-158.57">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-23.982815" bezier-y="-19.876314" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.26" default-y="-148.57">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="206.26" default-y="-133.57">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="206.26" default-y="-123.57">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="242.75" default-y="-158.57">
        <grace />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="242.75" default-y="-148.57">
        <grace />
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="242.75" default-y="-133.57">
        <grace />
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="242.75" default-y="-123.57">
        <grace />
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="20" width="298.84">
      <note default-x="53.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="53.98" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.32" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="112.32" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-90.33" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="170.65" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="188.65" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="170.65" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="188.65" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="258.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="258.15" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="159.3" default-y="-108.57" print-object="no">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="53.98" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="34.208558" bezier-y="-22.059739" number="2" />
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="112.32" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="170.65" default-y="-138.57">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="228.98" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-35.536129" bezier-y="-19.850467" />
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="21" width="225.89">
      <note default-x="19.92" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>140448</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-63.375982" bezier-y="35.458388" />
          </notations>
        </note>
      <note default-x="19.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>140448</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-60">
        <rest />
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="107.42" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="21.702677" bezier-y="-26.029576" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.42" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.75" default-y="-30">
        <rest />
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-118.57" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.4" relative-x="-3.95" relative-y="11.7">
            <pp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="107.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="20.901345" bezier-y="16.227262" number="2" />
          <articulations>
            <staccato default-x="7.91" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.75" default-y="-10">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-173.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="22" width="367.47">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>176.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.36" default-y="-10" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="126.49" default-y="-10">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="189.61" default-y="-10">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="252.74" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="33.581242" bezier-y="17.381561" number="3" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-41.2" relative-x="-13.48" relative-y="-44.19">
            <pp />
            <other-dynamics> très souple</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="280.79" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="308.85" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="337.61" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.36" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.101931" bezier-y="-8.333544" />
          <articulations>
            <staccato default-x="7.91" default-y="96.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.36" default-y="60">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="126.49" default-y="-40">
        <rest />
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="189.61" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-74" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-5.101931" bezier-y="8.333544" />
          <articulations>
            <staccato default-x="1.96" default-y="-49.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="126.49" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="189.61" default-y="-115">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.36" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="23" width="380.9">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">strate grave sur Fa# (l'autre pôle de la collection)</words></direction-type><staff>2</staff></direction><note default-x="24.9" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-61.67" relative-x="-20.1" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="66.98" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="66.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.07" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="3" bezier-x="-33.17954" bezier-y="18.136609" />
          </notations>
        </note>
      <note default-x="109.07" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="182.71" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="182.71" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="224.8" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-36.14" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="266.88" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="32.791829" bezier-y="22.994243" number="1" />
          </notations>
        </note>
      <note default-x="294.94" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="322.99" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="351.05" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>70224</duration>
        </backup>
      <note default-x="24.9" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="42.9" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="19.744674" bezier-y="-20.820675" number="2" />
          </notations>
        </note>
      <note default-x="140.63" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.702027" bezier-y="-12.757683" />
          </notations>
        </note>
      <note default-x="182.71" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="200.72" default-y="-110" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.037371" bezier-y="22.174299" number="2" />
          </notations>
        </note>
      <note default-x="322.99" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.515538" bezier-y="15.441701" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="24.9" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="376.63">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-61.69" relative-x="13.63" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="62" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.09" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-32.249193" bezier-y="23.749291" />
          </notations>
        </note>
      <note default-x="104.09" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="177.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="177.73" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="219.82" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-58.84" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="261.9" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="23.281955" bezier-y="17.233922" number="1" />
          </notations>
        </note>
      <note default-x="289.96" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="318.01" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="346.77" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="19.744674" bezier-y="-20.820675" number="2" />
          </notations>
        </note>
      <note default-x="135.65" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.702027" bezier-y="-12.757683" />
          </notations>
        </note>
      <note default-x="177.73" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="195.73" default-y="-110" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.037371" bezier-y="22.174299" number="2" />
          </notations>
        </note>
      <note default-x="318.01" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.515538" bezier-y="15.441701" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="25" width="313.11">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>176.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72.25</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="64.78" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="86.01" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.13" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="131.13" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-18.89587" bezier-y="14.997809" />
          </notations>
        </note>
      <note default-x="113.13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="131.13" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="185.33" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="185.33" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-66.78" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="233.08" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="below" />
          <slur type="start" orientation="over" placement="above" bezier-x="30.444317" bezier-y="13.645213" number="1" />
          </notations>
        </note>
      <note default-x="233.08" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="258.2" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
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
        </note>
      <note default-x="258.2" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="283.31" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
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
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="283.31" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-97.25">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="82.79" default-y="-97.25" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.196287" bezier-y="13.737239" number="2" />
          </notations>
        </note>
      <note default-x="153.49" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-21.505624" bezier-y="16.256924" />
          </notations>
        </note>
      <note default-x="185.33" default-y="-122.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="203.33" default-y="-117.25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.672356" bezier-y="18.799416" number="2" />
          </notations>
        </note>
      <note default-x="270.75" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-24.377333" bezier-y="10.383668" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-177.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="26" width="282.88">
      <note default-x="20.1" default-y="-35">
        <grace slash="yes" />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="8.937084" bezier-y="-11.947261" number="2" />
          </notations>
        </note>
      <note default-x="20.1" default-y="-20">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>105336</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="100.02" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.041333" bezier-y="23.131419" />
          <slur type="stop" number="2" bezier-x="-12.212636" bezier-y="-8.570883" />
          </notations>
        </note>
      <note default-x="60.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>105336</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="100.02" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.47" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="71.17">Cédez</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="71.17" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="202.85" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
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
          <tuplet type="start" bracket="yes" placement="below" />
          <slur type="start" orientation="over" placement="above" bezier-x="27.403273" bezier-y="10.377818" number="1" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="16.47" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.85" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="227.97" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
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
            <tenuto placement="above" default-x="3.16" default-y="15.25" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.97" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
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
          <tuplet type="stop" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="14.03" />
            </articulations>
          </notations>
        </note>
      <note default-x="253.08" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>11704</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="82.02" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="100.02" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="9.787678" bezier-y="-10.4486" number="2" />
          </notations>
        </note>
      <note default-x="130.66" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-13.210212" bezier-y="-5.519255" />
          </notations>
        </note>
      <note default-x="162.49" default-y="-122.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="180.49" default-y="-117.25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.681943" bezier-y="18.128053" number="2" />
          </notations>
        </note>
      <note default-x="240.52" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-22.640332" bezier-y="9.712305" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="70.12" default-y="-177.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="256.67">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-41.27" relative-x="-36.43" relative-y="-39.81">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="20.1" default-y="-35">
        <grace slash="yes" />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.934204" bezier-y="20.5036" />
          <slur type="start" bezier-x="8.937084" bezier-y="-11.947261" number="1" />
          </notations>
        </note>
      <note default-x="20.1" default-y="-20">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <slur type="stop" number="1" bezier-x="-12.212636" bezier-y="-8.570883" />
          <articulations>
            <caesura default-x="-15.2" default-y="-9.8" relative-x="9.63" relative-y="54.36" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="42.61" relative-x="14.63" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="82.02" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="100.02" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="9.787678" bezier-y="-10.4486" number="1" />
          </notations>
        </note>
      <note default-x="130.66" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.210212" bezier-y="-5.519255" />
          </notations>
        </note>
      <note default-x="162.49" default-y="-122.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="180.49" default-y="-117.25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.895363" bezier-y="16.381691" number="1" />
          </notations>
        </note>
      <note default-x="223.03" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.611911" bezier-y="7.965943" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="70.12" default-y="-177.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="28" width="272.34">
      <note default-x="19.92" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.3" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-53.12" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="160.05" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="20.02768" bezier-y="10.656459" number="1" />
          </notations>
        </note>
      <note default-x="187.17" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="213.07" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="242.54" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.02844" bezier-y="10.655031" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-97.25">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-97.25" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.883993" bezier-y="8.443894" number="1" />
          </notations>
        </note>
      <note default-x="80.46" default-y="-102.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.11147" bezier-y="9.679825" />
          </notations>
        </note>
      <note default-x="112.3" default-y="-122.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="130.3" default-y="-117.25" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="26.226872" bezier-y="-13.226108" number="1" />
          </notations>
        </note>
      <note default-x="213.07" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.047513" bezier-y="-18.209638" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-177.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="29" width="387.2">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>176.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.95</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="6.795993" bezier-y="7.043785" number="1" />
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="21.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.88" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.864261" bezier-y="5.826992" />
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="23.96" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.89" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="132.89" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="19.676513" bezier-y="15.281976" number="1" />
          </notations>
        </note>
      <note default-x="153.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="174.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="195.07" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="224.99" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.979438" bezier-y="6.759475" />
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="41.44" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-42.63" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="287.18" default-y="-10" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>35112</duration>
        </forward>
      <note default-x="132.89" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="224.99" default-y="-30">
        <rest />
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="287.18" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="30.996084" bezier-y="-27.368147" number="1" />
          </notations>
        </note>
      <note default-x="307.9" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="328.63" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="357.39" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="95.88" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="132.89" default-y="-146.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.34" default-y="-141.95">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="28.73" />
            </articulations>
          </notations>
        </note>
      <note default-x="224.99" default-y="-131.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.08" default-y="-126.95">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="287.18" default-y="-121.95">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="328.63" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-176.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="375.88">
      <note default-x="53.98" default-y="-10" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.54" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="116.17" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="38.403637" bezier-y="31.476038" number="2" />
          </notations>
        </note>
      <note default-x="136.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="157.62" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="178.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="208.27" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="270.45" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="301.08" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="323.58" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="346.08" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="53.98" default-y="-30" print-object="no">
        <rest />
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="73.17" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato placement="above" default-x="-6.97" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.17" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.1745" bezier-y="-25.03318" />
          </notations>
        </note>
      <note default-x="208.27" default-y="-30">
        <rest />
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="53.98" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="53.98" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-103.73" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.08" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="116.17" default-y="-146.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="28.73" />
            </articulations>
          </notations>
        </note>
      <note default-x="157.62" default-y="-141.95">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="28.73" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.27" default-y="-131.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="239.36" default-y="-126.95">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="270.45" default-y="-121.95">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="323.58" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="53.98" default-y="-176.95">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="361.92">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.54" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">figure chromatique ornementale : seuls sons hors collection, ornement et non harmonie</words></direction-type><staff>2</staff></direction><note default-x="20.76" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-44.88984" bezier-y="21.224575" />
          <slur type="start" bezier-x="25.609557" bezier-y="17.962897" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="97.69" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>4389</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        </note>
      <note default-x="128.31" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4389</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        </note>
      <note default-x="150.81" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>26334</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="168.81" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.610358" bezier-y="17.961754" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-51.48" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-71.88" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="195.04" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.756136" bezier-y="17.30072" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="262.77" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>4389</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        </note>
      <note default-x="293.39" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4389</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        </note>
      <note default-x="315.89" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>26334</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="333.9" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.756969" bezier-y="17.299577" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="20.76" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.217573" bezier-y="-7.941371" number="1" />
          </notations>
        </note>
      <note default-x="41.49" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="71.41" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>26334</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="89.41" default-y="5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.794966" bezier-y="-8.556474" />
          </notations>
        </note>
      <forward>
        <duration>8778</duration>
        </forward>
      <forward>
        <duration>17556</duration>
        </forward>
      <note default-x="195.04" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.923599" bezier-y="-7.103705" number="1" />
          </notations>
        </note>
      <note default-x="215.77" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="236.5" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>26334</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="254.5" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.455427" bezier-y="-7.715915" />
          </notations>
        </note>
      <forward>
        <duration>8778</duration>
        </forward>
      <backup>
        <duration>122892</duration>
        </backup>
      <note default-x="20.76" default-y="-121.95">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="12.381623" bezier-y="11.766523" number="1" />
          </notations>
        </note>
      <note default-x="71.41" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.142727" bezier-y="10.909831" />
          </notations>
        </note>
      <note default-x="163.95" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.04" default-y="-121.95">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="10.024835" bezier-y="10.684479" number="1" />
          <slur type="start" bezier-x="26.523227" bezier-y="18.791947" number="2" />
          </notations>
        </note>
      <note default-x="236.5" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.866003" bezier-y="9.827786" />
          </notations>
        </note>
      <note default-x="329.03" default-y="-116.95">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-27.092722" bezier-y="17.96116" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="32" width="426.95">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>176.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>89.91</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-8.62" relative-y="-19.61">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="69.23" relative-x="25.68">Cédez</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="69.23" relative-x="25.68" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.82" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>140448</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="49" />
            <caesura default-x="-15.2" default-y="-9.8" relative-x="14.8" relative-y="52.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.82" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>140448</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="63.82" default-y="-139.91">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="38.362521" bezier-y="-5.154888" number="1" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.48" default-y="-134.91">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="155.03" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.68" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.985526" bezier-y="-36.141746" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <words relative-x="-9.42" relative-y="69.41" font-style="italic">dim.</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="234.33" default-y="-139.91">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="38.362521" bezier-y="-5.154888" number="1" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="273.98" default-y="-134.91">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="325.54" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="365.19" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.985526" bezier-y="-36.141746" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="33" width="338.94">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-61.96" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">amplification (registres extrêmes, collection inchangée)</words></direction-type><staff>2</staff></direction><note default-x="19.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.575296" bezier-y="17.234025" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.57" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.22" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="138.88" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.575296" bezier-y="17.234025" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.63" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.34569" bezier-y="12.58393" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.18" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.83" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="297.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.34569" bezier-y="12.58393" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-30">
        <rest />
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="99.22" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="67.322234" bezier-y="-30.613805" number="1" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.53" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="269.73" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-139.91">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="99.22" default-y="-189.91">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="65.647407" bezier-y="33.946917" number="2" />
          <articulations>
            <staccato default-x="7.91" default-y="14.02" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.22" default-y="-179.91">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.22" default-y="-169.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.22" default-y="-154.91">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.53" default-y="-184.91">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.53" default-y="-174.91">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.53" default-y="-164.91">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.53" default-y="-149.91">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="257.83" default-y="-179.91">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <articulations>
            <staccato default-x="7.91" default-y="18.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.83" default-y="-169.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="257.83" default-y="-154.91">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="257.83" default-y="-144.91">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-194.91">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="359.12">
      <note default-x="46.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.34569" bezier-y="12.58393" number="3" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.75" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.41" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="159.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-22.34569" bezier-y="12.58393" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.81" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.34569" bezier-y="12.58393" number="3" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="278.01" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="317.67" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-22.34569" bezier-y="12.58393" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="40.1" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="198.71" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <slur type="stop" number="1" bezier-x="-64.635123" bezier-y="-35.941468" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="40.1" default-y="-179.91">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="40.1" default-y="-169.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="40.1" default-y="-154.91">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="40.1" default-y="-144.91">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="198.71" default-y="-174.91">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="2" bezier-x="-66.30995" bezier-y="32.633813" />
          <articulations>
            <tenuto default-x="3.16" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.71" default-y="-164.91">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="198.71" default-y="-149.91">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="198.71" default-y="-139.91">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="40.1" default-y="-254.91">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        <notations print-object="no">
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="40.1" default-y="-194.91">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <voice>7</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="410.88">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>106.65</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>74.89</staff-distance>
          </staff-layout>
        </print>
      <note default-x="98.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.338995" bezier-y="12.582044" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.24" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.88" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.338995" bezier-y="12.582044" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.338995" bezier-y="12.582044" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="290.16" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="329.8" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="369.44" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.338995" bezier-y="12.582044" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="91.95" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="171.24" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.52" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="341.7" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="91.95" default-y="-159.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.95" default-y="-149.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.95" default-y="-134.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.95" default-y="-124.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="171.24" default-y="-154.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="82.141863" bezier-y="33.098656" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="171.24" default-y="-139.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.24" default-y="-129.89">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.24" default-y="-119.89">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.52" default-y="-159.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.52" default-y="-149.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.52" default-y="-134.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.52" default-y="-124.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.8" default-y="-164.89">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="329.8" default-y="-154.89">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.8" default-y="-139.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.8" default-y="-129.89">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="91.95" default-y="-239.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations print-object="no">
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="91.95" default-y="-179.89">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="375.27">
      <note default-x="62.45" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.338995" bezier-y="12.582044" number="2" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.09" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-57.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="135.63" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.27" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-22.338995" bezier-y="12.582044" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.568601" bezier-y="12.923683" number="2" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="254.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="294.19" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="333.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-23.568601" bezier-y="12.923683" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="56.35" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="95.99" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="135.63" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="31.750542" bezier-y="-17.550896" number="2" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="294.19" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-29.160439" bezier-y="-21.582392" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="56.35" default-y="-169.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="16.47" />
            </articulations>
          </notations>
        </note>
      <note default-x="56.35" default-y="-159.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.35" default-y="-149.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.35" default-y="-134.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.99" default-y="-174.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="14.03" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.99" default-y="-164.89">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.99" default-y="-154.89">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.99" default-y="-139.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.63" default-y="-169.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.88525" bezier-y="19.097344" number="2" />
          <slur type="start" orientation="under" placement="below" bezier-x="31.915741" bezier-y="-19.75701" number="3" />
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.63" default-y="-159.89">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.63" default-y="-149.89">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.63" default-y="-134.89">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.19" default-y="-174.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-78.808831" bezier-y="40.397709" />
          <slur type="stop" number="2" bezier-x="-30.217371" bezier-y="20.13747" />
          <slur type="stop" number="3" bezier-x="-31.605778" bezier-y="-20.249167" />
          </notations>
        </note>
      <note default-x="294.19" default-y="-164.89">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.19" default-y="-154.89">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.19" default-y="-139.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="56.35" default-y="-239.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations print-object="no">
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="56.35" default-y="-179.89">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="338.85">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="26.02" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.338995" bezier-y="12.582044" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.56" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.2" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="138.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.338995" bezier-y="12.582044" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.568601" bezier-y="12.923683" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.77" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="297.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.568601" bezier-y="12.923683" />
          <articulations>
            <staccato default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>140448</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-174.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.16" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="19.92" default-y="-164.89">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-154.89">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="19.92" default-y="-139.89">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>70224</duration>
        </backup>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <forward>
        <duration>70224</duration>
        </forward>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-199.89">
        <rest />
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="178.48" default-y="-179.89">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="38" width="388">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>265.61</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>108.93</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-83.85" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="67.62" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="40.534246" bezier-y="27.900953" number="1" />
          </notations>
        </note>
      <note default-x="67.62" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.73" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="108.73" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.73" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="149.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="149.84" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="149.84" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="227.87" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="227.87" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="262.88" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="303.98" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="345.09" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-42.4535" bezier-y="24.883501" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>70224</duration>
        </forward>
      <note default-x="221.77" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="67.62" default-y="-158.93">
        <rest />
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="83.67" default-y="-153.93" />
        <staff>2</staff>
        </note>
      <note default-x="180.67" default-y="-168.93">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="16.378917" bezier-y="47.125542" number="1" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-57.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="221.77" default-y="-133.93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="303.98" default-y="-138.93">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="345.09" default-y="-143.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-42.504421" bezier-y="32.201873" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="67.62" default-y="-213.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="39" width="343.13">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-83.85" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="22.76" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="40.534246" bezier-y="27.900953" number="1" />
          </notations>
        </note>
      <note default-x="22.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="22.76" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.87" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="63.87" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.87" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.97" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="104.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="104.97" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="183.01" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="183.01" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-73.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="218.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="259.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="300.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-42.4535" bezier-y="24.883501" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>70224</duration>
        </forward>
      <note default-x="176.91" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="22.76" default-y="-158.93">
        <rest />
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="38.8" default-y="-153.93" />
        <staff>2</staff>
        </note>
      <note default-x="135.8" default-y="-168.93">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="16.378917" bezier-y="47.125542" number="1" />
          <articulations>
            <tenuto default-x="-2.8" default-y="-57.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="176.91" default-y="-133.93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="259.12" default-y="-138.93">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="300.23" default-y="-143.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-42.504421" bezier-y="32.201873" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="22.76" default-y="-213.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="40" width="393.87">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-73.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="83.75">Serrez</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="83.75" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="29.08" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.072631" bezier-y="19.012181" number="1" />
          </notations>
        </note>
      <note default-x="70.19" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.29" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="159.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.470521" bezier-y="17.012094" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-73.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="208.57" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.072631" bezier-y="19.012181" number="1" />
          </notations>
        </note>
      <note default-x="249.68" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="290.78" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="339.42" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-26.470521" bezier-y="17.012094" />
          <articulations>
            <caesura default-x="-15.2" default-y="-9.8" relative-x="9.9" relative-y="66.94" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="29.08" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="208.57" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="208.57" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="29.08" default-y="-133.93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="33.091562" bezier-y="13.459496" number="1" />
          <articulations>
            <tenuto placement="above" default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="70.19" default-y="-138.93">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.29" default-y="-143.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="143.72" default-y="-148.93">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="176.15" default-y="-158.93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-25.794211" bezier-y="24.715747" />
          </notations>
        </note>
      <note default-x="208.57" default-y="-133.93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="33.091562" bezier-y="13.459496" number="1" />
          <articulations>
            <tenuto placement="above" default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="249.68" default-y="-138.93">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="290.78" default-y="-143.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="323.21" default-y="-148.93">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="355.64" default-y="-158.93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>11704</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-25.794211" bezier-y="24.715747" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="29.08" default-y="-213.93">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="460.39">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>265.61</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.09</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-style="italic" default-y="-88.93">dim. molto</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="56.23">Cédez</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="56.23" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="80.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="179.53" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="278.11" default-y="-20" print-object="no">
        <rest />
        <duration>23408</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <staff>1</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="336.44" default-y="-20" print-object="no">
        <rest />
        <duration>46816</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <staff>1</staff>
        <notations>
          <articulations>
            <caesura default-x="-15.2" default-y="-9.8" relative-x="10.6" relative-y="39.42" />
            </articulations>
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="80.95" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.95" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <forward>
        <duration>35112</duration>
        </forward>
      <backup>
        <duration>70224</duration>
        </backup>
      <note default-x="80.95" default-y="-117.09">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="29.469777" bezier-y="18.995877" number="1" />
          </notations>
        </note>
      <note default-x="130.24" default-y="-122.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="179.53" default-y="-127.09">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="228.82" default-y="-132.09">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <slur type="stop" number="1" bezier-x="-23.134788" bezier-y="24.4652" />
          </notations>
        </note>
      <note default-x="278.11" default-y="-132.09">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>23408</duration>
        <tie type="stop" />
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
          <tied type="stop" />
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="0" bezier-y="70.300392" number="1" />
          </notations>
        </note>
      <note default-x="336.44" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>23408</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="394.77" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>23408</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-47.524197" bezier-y="69.568962" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="80.95" default-y="-197.09">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="42" width="664.61">
      <attributes>
        <key>
          <fifths>-5</fifths>
          </key>
        </attributes>
      <direction placement="above">
        <direction-type>
          <words relative-x="-40.31" relative-y="30.1" font-weight="bold">En animant</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <sound tempo="40" />
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">PENTATONIQUE touches noires (Ré♭·Mi♭·Sol♭·La♭·Si♭) : le climax est un changement de collection</words></direction-type><staff>2</staff></direction><note default-x="75.1" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="56.539573" bezier-y="43.582145" number="1" />
          </notations>
        </note>
      <note default-x="107.97" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="140.83" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="173.69" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="206.55" default-y="-147.09">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2508</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="46.974103" />
          <slur type="start" bezier-x="0" bezier-y="80.116483" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="224.29" default-y="-137.09">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="240.08" default-y="-132.09">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="255.88" default-y="-127.09">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="271.67" default-y="-117.09">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.73" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="289.27" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="305.06" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="320.85" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="336.64" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="352.43" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="368.23" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="384.02" default-y="5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="399.81" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="415.6" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2508</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>14</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="432.78" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.667118" bezier-y="8.556405" number="2" />
          <articulations>
            <accent default-x="-0.72" default-y="38.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="482.07" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.600877" bezier-y="70.813765" />
          <slur type="stop" number="2" bezier-x="-10.173068" bezier-y="13.595776" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-x="-19.63" relative-y="-43.33">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="531.36" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="564.22" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="597.08" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="629.95" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="75.1" default-y="-142.09" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="206.55" default-y="-147.09">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>none</stem>
        <staff>2</staff>
        </note>
      <note default-x="432.78" default-y="-147.09">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="75.1" default-y="-197.09">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>70224</duration>
        </forward>
      <forward>
        <duration>35112</duration>
        </forward>
      <note default-x="531.36" default-y="-132.09">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="24.567358" bezier-y="-16.249869" number="1" />
          </notations>
        </note>
      <note default-x="564.22" default-y="-127.09">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="597.08" default-y="-132.09">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="629.95" default-y="-137.09">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.113013" bezier-y="-15.393176" />
          </notations>
        </note>
      </measure>
    <measure number="43" width="736.73">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>265.61</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>99.38</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-x="-19.63" relative-y="-43.33">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="123.97" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="154.22" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="184.48" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="214.74" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <words relative-x="146.87" relative-y="3.5" font-style="italic">(rupide)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="245" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="4" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="156.01" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="523.12" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>7</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.773531" bezier-y="8.089755" number="1" />
          <articulations>
            <accent default-x="-0.72" default-y="38.3" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="123.64" relative-x="19.96">Emporté</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="123.64" relative-x="19.96" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="568.51" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-44.306687" bezier-y="75.967574" />
          <slur type="stop" number="1" bezier-x="-9.098372" bezier-y="13.129125" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <sound tempo="35" />
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-50.18" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="618" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="67.697546" bezier-y="35.84631" number="1" />
          </notations>
        </note>
      <note default-x="618" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-67.35" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="644.15" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="644.15" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <sound tempo="33" />
      <note default-x="678.51" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="678.51" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="704.67" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="704.67" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <forward>
        <duration>70224</duration>
        </forward>
      <forward>
        <duration>35112</duration>
        </forward>
      <note default-x="613.9" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="674.41" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-149.38" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="246.95" default-y="-154.38">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="82.305129" number="2" />
          </notations>
        </note>
      <note default-x="259.11" default-y="-144.38">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="271.27" default-y="-139.38">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="283.43" default-y="-134.38">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="297.43" default-y="-124.38">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <words relative-x="6.24" relative-y="19.98" font-style="italic">cresec.</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="321.5" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="333.66" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="345.82" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="357.98" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="370.14" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="382.31" default-y="-144.38">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="394.47" default-y="-134.38">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="408.47" default-y="-129.38">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="424.22" default-y="-124.38">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="439.97" default-y="-114.38">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <words relative-x="5.67" relative-y="33.25" font-style="italic">molto</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="464.03" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="476.2" default-y="5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="490.2" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="505.95" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1848</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>19</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="523.12" default-y="-149.38" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="613.9" default-y="-154.38">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="133.911847" number="2" />
          </notations>
        </note>
      <note default-x="613.9" default-y="-134.38">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="674.41" default-y="-144.38">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="674.41" default-y="-124.38">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-204.38">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-139.38">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="22.950624" bezier-y="-19.517639" number="3" />
          </notations>
        </note>
      <note default-x="154.22" default-y="-134.38">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="184.48" default-y="-139.38">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="214.74" default-y="-144.38">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>7</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="246.95" default-y="-154.38">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>7</voice>
        <type size="cue">eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-25.84277" bezier-y="-15.486143" />
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="44" width="388.27">
      <sound tempo="30" />
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">Emporté, f : sommet dynamique, sans aucune cadence</words></direction-type><staff>2</staff></direction><note default-x="17.1" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="17.1" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="43.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="43.26" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.62" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="77.62" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.77" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="103.77" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="134.03" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <articulations>
            <caesura default-x="-15.2" default-y="-9.8" relative-x="-22.42" relative-y="108.68" />
            </articulations>
          </notations>
        </note>
      <note default-x="134.03" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="134.03" default-y="45">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-78.35" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="123.64">Cédez</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="123.64" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="202.11" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="202.11" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="202.11" default-y="45">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-80.25" relative-y="-25" font-style="italic">molto</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="247.5" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="247.5" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="292.88" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="292.88" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.27" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-69.574874" bezier-y="32.050781" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-33.44" />
            <caesura default-x="-15.2" default-y="-9.8" relative-x="10.27" relative-y="106.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="338.27" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="73.52" default-y="5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <forward>
        <duration>35112</duration>
        </forward>
      <note default-x="202.11" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="202.11" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="202.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-134.38">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="13" default-y="-119.38">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.52" default-y="-124.38">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="73.52" default-y="-109.38">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-4.18" relative-x="-16.65" relative-y="42.23">
            <f />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="134.03" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-56.946069" bezier-y="144.435081" />
          </notations>
        </note>
      <note default-x="134.03" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="134.03" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="202.11" default-y="-159.38">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="332.31">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>147.75</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.47</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-25.11" relative-y="-45.81">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.65" relative-x="-0.72" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-weight="bold" default-y="105.74">Très retenu</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="105.74" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="128.07" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="17.284888" bezier-y="14.77347" number="1" />
          </notations>
        </note>
      <note default-x="128.07" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.07" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="174.71" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.71" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="203.33" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.131435" bezier-y="12.288652" />
          </notations>
        </note>
      <note default-x="203.33" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-x="-11.37" relative-y="-47.18">
            <other-dynamics>più </other-dynamics>
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="235.24" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="235.24" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.25" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="272.89" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="290.89" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="272.89" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="290.89" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="161.61" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="179.61" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="231.14" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="268.79" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="290.89" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-170.47">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.615382" bezier-y="-7.570685" number="1" />
          </notations>
        </note>
      <note default-x="123.97" default-y="-150.47">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.61" default-y="-165.47">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="179.61" default-y="-165.47" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.354648" bezier-y="-11.753362" />
          </notations>
        </note>
      <note default-x="161.61" default-y="-155.47">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="179.61" default-y="-155.47" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="231.14" default-y="-170.47">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.615382" bezier-y="-7.570685" number="1" />
          </notations>
        </note>
      <note default-x="231.14" default-y="-150.47">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="66.71" relative-x="-1.14" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="268.79" default-y="-165.47">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="286.79" default-y="-165.47" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.354648" bezier-y="-11.753362" />
          </notations>
        </note>
      <note default-x="268.79" default-y="-155.47">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="286.79" default-y="-155.47" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="123.97" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="182.47" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.14" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="288.79" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="46" width="221.34">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-3.95" relative-y="-43.17">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="17.1" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="16.825514" bezier-y="15.374806" number="1" />
          </notations>
        </note>
      <note default-x="17.1" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-80.86" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="32.1" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="63.74" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.74" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="92.36" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.59081" bezier-y="11.648293" />
          </notations>
        </note>
      <note default-x="92.36" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-x="-7.14" relative-y="-42.7">
            <other-dynamics>più </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="124.28" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="124.28" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.28" relative-x="6.56" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="139.28" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="161.92" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="179.92" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="161.92" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="179.92" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="50.64" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="68.65" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="120.18" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="157.82" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="179.92" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-170.47">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.615382" bezier-y="-7.570685" number="1" />
          </notations>
        </note>
      <note default-x="13" default-y="-150.47">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.64" default-y="-165.47">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="68.65" default-y="-165.47" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.354648" bezier-y="-11.753362" />
          </notations>
        </note>
      <note default-x="50.64" default-y="-155.47">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="68.65" default-y="-155.47" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.18" default-y="-170.47">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.615382" bezier-y="-7.570685" number="1" />
          </notations>
        </note>
      <note default-x="120.18" default-y="-150.47">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>17556</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.82" default-y="-165.47">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="175.82" default-y="-165.47" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-7.354648" bezier-y="-11.753362" />
          </notations>
        </note>
      <note default-x="157.82" default-y="-155.47">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>52668</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="175.82" default-y="-155.47" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="71.5" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.18" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="177.82" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="47" width="179.88">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="96.44" default-y="-20">
        <rest />
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <caesura default-x="-15.2" default-y="-9.8" relative-x="10.06" relative-y="88.94" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-165.47">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-155.47">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="96.44" default-y="-160.47">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="13" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="54.72" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.44" default-y="-190.47">
        <rest />
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="138.16" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="48" width="391.47">
      <attributes>
        <key>
          <fifths>0</fifths>
          </key>
        </attributes>
      <direction placement="above">
        <direction-type>
          <words relative-x="-11.48" relative-y="37.95" font-weight="bold" font-size="12">au Mouvt</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <sound tempo="44" />
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-77.22" relative-y="-39.19" font-size="9">(comme un très
</words>
          <words>léger glissando)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">retour aux tons entiers : thème et ostinato superposés</words></direction-type><staff>2</staff></direction><note default-x="81.93" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-22.59" relative-y="-95.59">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="123.65" default-y="-160.47">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="41.175998" bezier-y="4.283849" number="1" />
          </notations>
        </note>
      <note default-x="292.32" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.825264" bezier-y="-40.215399" />
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="28.93" />
            </articulations>
          </notations>
        </note>
      <note default-x="320.13" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="347.95" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="81.93" default-y="-160.47" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="135.55" default-y="-160.47">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9576</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="153.55" default-y="-165.47" />
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="167.84" default-y="-155.47">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="186.83" default-y="-145.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="200.83" default-y="-140.47">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="216.58" default-y="-135.47">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="240.38" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="260.52" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="271.02" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="281.52" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="292.32" default-y="-160.47" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="81.93" default-y="-215.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="99.93" default-y="-215.47" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="347.95" default-y="-180.47">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="49" width="420.21">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>101.4</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>85</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="120.32" default-y="-125">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="38.769947" bezier-y="-0.527908" number="1" />
          </notations>
        </note>
      <note default-x="288.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.178273" bezier-y="-36.811373" />
          </notations>
        </note>
      <note default-x="325.85" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="362.87" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="132.22" default-y="-125">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9576</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="150.22" default-y="-130" />
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="159.75" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="173.75" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="189.5" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="205.25" default-y="-105">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="230.81" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="249.8" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="263.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="277.11" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="288.82" default-y="-135" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-190">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="82.79" default-y="-190" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="362.87" default-y="-155">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="50" width="373.11">
      <note default-x="19.92" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="48.86" relative-y="10" font-style="italic">doucement en dehors</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="75.46" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="51.844375" bezier-y="-81.715129" number="1" />
          </notations>
        </note>
      <note default-x="260.23" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="50.34" />
            </articulations>
          </notations>
        </note>
      <note default-x="315.77" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="51.49" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="77.41" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="90.01" default-y="-130" />
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="15.579425" bezier-y="36.039311" number="2" />
          </notations>
        </note>
      <note default-x="103.84" default-y="-130">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="122.83" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="136.83" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="152.58" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="177.46" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="197.59" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="210.57" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="223.56" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="236.54" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-34.853917" bezier-y="17.515659" />
          </notations>
        </note>
      <note default-x="260.23" default-y="-135" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-190">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-190" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="315.77" default-y="-155">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="51" width="331.69">
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="27.44" relative-x="25.95" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="232.7" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="54" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="63.52" default-y="-125">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="76.12" default-y="-120" />
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="16.054061" bezier-y="39.980012" number="2" />
          </notations>
        </note>
      <note default-x="88.81" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="102.81" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="118.56" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="134.31" default-y="-105">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="159.19" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="178.18" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="191.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="204.14" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="217.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-40.562854" bezier-y="16.509776" />
          </notations>
        </note>
      <note default-x="232.7" default-y="-135" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-190">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-190" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="274.35" default-y="-155">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="52" width="436.54">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>169.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>80</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="126.71" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="310.89" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="372.82" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="61.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-130" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="128.66" default-y="-130">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="141.26" default-y="-125" />
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="20.272468" bezier-y="34.431899" number="2" />
          </notations>
        </note>
      <note default-x="156.18" default-y="-125">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="175.16" default-y="-115">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="189.64" default-y="-110">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="205.39" default-y="-105">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="231.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="251.9" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="266.37" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="280.84" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="295.32" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-35.836555" bezier-y="16.322534" />
          </notations>
        </note>
      <note default-x="310.89" default-y="-130" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-185">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="82.79" default-y="-185" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="372.82" default-y="-150">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="53" width="404.88">
      <note default-x="19.92" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="51.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.2" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.91" default-y="51.5" />
            </articulations>
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="46.62" relative-x="40.77" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="102.49" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="51.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="279.24" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="12.99901" bezier-y="-14.211265" number="2" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="341.16" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-103.748527" bezier-y="-52.958237" />
          <slur type="stop" number="2" bezier-x="-16.442681" bezier-y="-10.028588" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-130" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="104.44" default-y="-120">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="117.04" default-y="-115" />
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="39.682272" bezier-y="-11.032883" number="1" />
          </notations>
        </note>
      <note default-x="131.96" default-y="-115">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="146.43" default-y="-110">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="162.18" default-y="-105">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="177.93" default-y="-100">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="204.31" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="223.29" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="237.77" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="252.24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="266.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.902854" bezier-y="-35.052833" />
          </notations>
        </note>
      <note default-x="279.24" default-y="-130" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-185">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-185" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="341.16" default-y="-150">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="54" width="283.58">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-57" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="34.08" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.782562" bezier-y="16.202234" number="1" />
          <articulations>
            <staccato default-x="7.91" default-y="71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="45.98" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="34.08" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.01" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.91" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.01" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-58.07" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="157.93" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.91" default-y="71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="169.83" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.93" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.85" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-27.782562" bezier-y="16.202234" />
          <articulations>
            <staccato default-x="7.91" default-y="71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.75" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="219.85" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="259.92" default-y="15">
        <grace />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="259.92" default-y="20">
        <grace />
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="259.92" default-y="40">
        <grace />
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="45.98" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="34.08" default-y="-130">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="96.01" default-y="-145">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="22.403843" bezier-y="20.548301" number="1" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.01" default-y="-130">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="96.01" default-y="-115">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.93" default-y="-135">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="157.93" default-y="-115">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.93" default-y="-105">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.85" default-y="-130">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-26.718611" bezier-y="14.501057" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.85" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="219.85" default-y="-100">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="259.92" default-y="-130">
        <grace />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="259.92" default-y="-110">
        <grace />
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="259.92" default-y="-100">
        <grace />
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="34.08" default-y="-185">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="55" width="455.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>169.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>104.3</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.78" default-y="-20" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="126.2" default-y="-154.3">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="42.643268" bezier-y="2.0201" number="1" />
          </notations>
        </note>
      <note default-x="310.73" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.153763" bezier-y="-40.614131" />
          </notations>
        </note>
      <note default-x="351.67" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="392.61" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-154.3">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="138.1" default-y="-154.3">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9576</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="156.1" default-y="-159.3" />
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="170.4" default-y="-149.3">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="189.38" default-y="-139.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="204.48" default-y="-134.3">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="220.23" default-y="-129.3">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="247.24" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="267.37" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="282.48" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="297.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="310.73" default-y="-154.3" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="64.78" default-y="-209.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="82.79" default-y="-209.3" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="392.61" default-y="-174.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="56" width="267.37">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-75.43" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="65.51" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.384651" bezier-y="-29.420262" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="31.82" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.33" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.23" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.33" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.59" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="142.74" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="154.64" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.74" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="204.15" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.218962" bezier-y="-37.058644" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.05" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="204.15" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-154.3">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="81.33" default-y="-164.3">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="22.188437" bezier-y="20.473396" number="1" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.33" default-y="-144.3">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.33" default-y="-134.3">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.74" default-y="-154.3">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.74" default-y="-134.3">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.74" default-y="-124.3">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="204.15" default-y="-144.3">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.521177" bezier-y="14.426152" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.15" default-y="-129.3">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="204.15" default-y="-119.3">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-209.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>140448</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="57" width="401.81">
      <note default-x="19.92" default-y="-20" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="81.33" default-y="-144.3">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="41.347876" bezier-y="2.385008" number="1" />
          </notations>
        </note>
      <note default-x="256.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.681113" bezier-y="-39.735207" />
          </notations>
        </note>
      <note default-x="297.66" default-y="-20">
        <rest />
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="338.6" default-y="-20">
        <rest />
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-154.3">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="93.23" default-y="-144.3">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9576</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="111.23" default-y="-149.3" />
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="120.76" default-y="-139.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="135.86" default-y="-134.3">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="151.61" default-y="-129.3">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="167.36" default-y="-124.3">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="194.37" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="213.35" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="228.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="243.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3192</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>11</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="256.71" default-y="-154.3" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-209.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>105336</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-209.3" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="338.6" default-y="-174.3">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>35112</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.96" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="58" width="332.27">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>169.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words default-y="66.6" relative-y="10" font-weight="bold">Très apaisé et très atténué jusqu'à la fin</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-y="-25">
            <other-dynamics>più </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">coda : Très apaisé et très atténué jusqu'à la fin</words></direction-type><staff>2</staff></direction><note default-x="70.42" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.489505" bezier-y="-14.145578" number="1" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.32" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.42" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="126.55" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.785534" bezier-y="-9.106208" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="138.45" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="126.55" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="178.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="43.004517" bezier-y="31.907078" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.06" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="229.56" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="229.56" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="252.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="252.46" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="275.35" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.47" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="302.47" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="70.42" default-y="-30">
        <rest />
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>70224</duration>
        </backup>
      <note default-x="70.42" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="126.55" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="17.996571" bezier-y="18.953048" number="2" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="126.55" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.55" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.06" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.06" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.06" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="229.56" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-22.727403" bezier-y="12.905804" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="229.56" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="229.56" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="70.42" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="59" width="255.66">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-25" />
        <dot default-x="44.42" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>61446</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-15" />
        <dot default-x="44.42" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.06" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="110.06" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.84" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-41.205987" bezier-y="31.493673" />
          </notations>
        </note>
      <note default-x="150.84" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="71.43" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="23.889076" bezier-y="21.057059" number="1" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.43" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.43" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.84" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.84" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.84" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="202.35" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.085461" bezier-y="15.009815" />
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.35" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="202.35" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="60" width="287.41">
      <note default-x="25.56" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="11.489505" bezier-y="-14.145578" number="1" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="37.46" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="25.56" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.69" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.785534" bezier-y="-9.106208" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.59" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.69" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="133.19" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="59.492663" bezier-y="31.145179" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="133.19" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>35112</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="184.7" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="184.7" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.59" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="207.59" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="230.48" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="257.61" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="257.61" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8778</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="25.56" default-y="-30">
        <rest />
        <duration>70224</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>70224</duration>
        </backup>
      <note default-x="25.56" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="81.69" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="17.996571" bezier-y="18.953048" number="2" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.69" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.69" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="133.19" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="133.19" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="133.19" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.7" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-22.727403" bezier-y="12.905804" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.7" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.7" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="25.56" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="61" width="249.66">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.94" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="122.94" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>17556</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="162.02" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.02" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="213.53" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="213.53" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>17556</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="71.43" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="10.231941" bezier-y="13.620859" number="2" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.43" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.43" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.94" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-14.716605" bezier-y="8.581489" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.94" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.94" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.77" default-y="-125">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.8" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="62" width="609.3">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>169.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>85</staff-distance>
          </staff-layout>
        </print>
      <sound tempo="30" />
      <note default-x="59.95" default-y="-45">
        <grace slash="yes" />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-0.895116" bezier-y="8.853286" />
          <slur type="start" bezier-x="2.803288" bezier-y="-9.081465" number="1" />
          <slur type="start" orientation="over" placement="above" bezier-x="0" bezier-y="9.784425" number="2" />
          </notations>
        </note>
      <note default-x="59.95" default-y="-35">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">la pédale glisse sur Fa# ; balayages de la collection</words></direction-type><staff>2</staff></direction><note default-x="79.34" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.954839" bezier-y="-5.20115" />
          <slur type="stop" number="2" bezier-x="-10.437013" bezier-y="-2.298038" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.34" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="274.13" default-y="-45">
        <grace slash="yes" />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="2.803288" bezier-y="-9.081465" number="1" />
          <slur type="start" orientation="over" placement="above" bezier-x="0" bezier-y="11.279873" number="2" />
          </notations>
        </note>
      <note default-x="274.13" default-y="-35">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="293.52" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="311.52" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.954839" bezier-y="-5.20115" />
          <slur type="stop" number="2" bezier-x="-11.703049" bezier-y="-3.322274" />
          <fermata type="upright" default-y="14.84" relative-y="17.35" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="9" />
            <breath-mark default-x="-7.64" default-y="5" relative-x="-253.27" relative-y="-0.82">comma</breath-mark>
            </articulations>
          </notations>
        </note>
      <note default-x="293.52" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>52668</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="311.52" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="472.31" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="20.427359" bezier-y="-17.342907" number="1" />
          <fermata type="upright" default-y="9" relative-y="27.06" />
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            <breath-mark default-x="-7.64" default-y="5" relative-x="-56.55" relative-y="8.06">comma</breath-mark>
            </articulations>
          </notations>
        </note>
      <note default-x="472.31" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="559.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="559.5" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="579.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-21.980255" bezier-y="-15.327159" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="579.5" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>5852</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-73.83" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="93.35" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="105.95" default-y="-130" />
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="39.281641" bezier-y="-11.017854" number="1" />
          </notations>
        </note>
      <note default-x="119.78" default-y="-130">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="138.76" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="152.77" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="168.52" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="193.23" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="213.37" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="226.18" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="239" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="251.82" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.189394" bezier-y="-36.326615" />
          </notations>
        </note>
      <note default-x="262.68" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="307.52" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="320.13" default-y="-130" />
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="36.687537" bezier-y="-7.387836" number="1" />
          </notations>
        </note>
      <note default-x="327.48" default-y="-130">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="340.29" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="354.29" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="370.04" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="394.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="407.58" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="420.39" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="433.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="446.02" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.557834" bezier-y="-34.157547" />
          </notations>
        </note>
      <note default-x="456.89" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="79.34" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.52" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="368.67">
      <note default-x="14.11" default-y="-45">
        <grace slash="yes" />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="2.803288" bezier-y="-9.081465" number="1" />
          <slur type="start" orientation="over" placement="above" bezier-x="0" bezier-y="10.323026" number="2" />
          </notations>
        </note>
      <note default-x="14.11" default-y="-35">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="33.51" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.954839" bezier-y="-5.20115" />
          <slur type="stop" number="2" bezier-x="-10.812473" bezier-y="-1.759436" />
          <articulations>
            <tenuto placement="above" default-x="3.16" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="33.51" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="247.69" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <fermata type="upright" relative-y="27.06" />
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-59.3" />
            <breath-mark default-x="-7.64" default-y="5" relative-x="-88.55" relative-y="8.06">comma</breath-mark>
            </articulations>
          </notations>
        </note>
      <note default-x="247.69" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>70224</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="114.09" relative-y="-108.56" font-size="12">(... Voiles )</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="47.51" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8778</duration>
        <voice>5</voice>
        <type size="cue">16th</type>
        <dot default-x="60.11" default-y="-130" />
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="39.281641" bezier-y="-11.017854" number="1" />
          </notations>
        </note>
      <note default-x="73.94" default-y="-130">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="92.93" default-y="-120">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="106.93" default-y="-115">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="122.68" default-y="-110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="147.4" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="167.53" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="180.35" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="193.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="205.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2926</duration>
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>12</actual-notes>
          <normal-notes>4</normal-notes>
          <normal-type>32nd</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.189394" bezier-y="-36.326615" />
          </notations>
        </note>
      <note default-x="216.84" default-y="-135" print-object="no">
        <rest />
        <duration>35112</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="247.69" default-y="-145" print-object="no">
        <rest />
        <duration>70224</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="33.51" default-y="-135">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70224</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>70224</duration>
        </forward>
      </measure>
    <measure number="64" width="147.02">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="(3ce)">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">tierce Do–Mi nue : fin suspendue, sans résolution ni basse</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>140448</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>140448</duration>
        </backup>
      <note default-x="61.68" default-y="-135">
        <rest measure="yes" />
        <duration>140448</duration>
        <voice>5</voice>
        <staff>2</staff>
        <notations>
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — étiquettes de COLLECTION (pas de degrés : la
 * gamme par tons ne permet la construction d'aucune fonction). Fonction "?"
 * sans aucune exception sur toute la pièce.
 */
export const VOILES_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Tons entiers",           degre: "tierces parallèles descendantes, sans basse", fonction: "?" },
  { numero: 5,  nom: "Tons entiers",           degre: "pédale de Sib (m.5-61)",                       fonction: "?" },
  { numero: 15, nom: "Tons entiers",           degre: "triades augmentées parallèles (organum)",      fonction: "?" },
  { numero: 23, nom: "Tons entiers",           degre: "strate grave sur Fa#",                         fonction: "?" },
  { numero: 31, nom: "Chromatisme d'ornement", degre: "hors collection (Sol, Réb)",                   fonction: "?" },
  { numero: 42, nom: "Pentatonique (touches noires)", degre: "climax — changement de collection",     fonction: "?" },
  { numero: 48, nom: "Tons entiers",           degre: "retour, décrue",                               fonction: "?" },
  { numero: 62, nom: "Tons entiers",           degre: "pédale de Fa#",                                fonction: "?" },
  { numero: 64, nom: "Tons entiers",           degre: "tierce Do-Mi nue, suspension finale",          fonction: "?" },
];

export const VOILES_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Aucune — collection par tons entiers {Do, Ré, Mi, Fa#, Sol#, Sib}, sans tonique ni fonction constructible.",
  metrique: "2/4. Modéré (44 à la noire au départ, très variable ensuite).",
  forme: "Arche unique par densité et registre (pas par tension harmonique) : exposition — accumulation — climax pentatonique — décrue — coda éteinte.",
  sections: [
    {
      label: "Mesures 1-4",
      titre: "Le thème : l'objet-voile",
      chiffrage: "Tons entiers — tierces majeures parallèles, sans basse",
      fonctions: "? (aucune fonction constructible)",
      texte:
        "Des tierces majeures parallèles descendent sans aucune basse (Sol#/Mi → Fa#/Ré → Mi/Do → Ré/Sib) : le thème glisse dans la collection par tons entiers comme sur un plan sans relief, sans le moindre repère de hauteur hiérarchisée.",
    },
    {
      label: "Mesures 5-14",
      titre: "La pédale s'installe",
      chiffrage: "Tons entiers — pédale de Sib",
      fonctions: "?",
      texte:
        "Une pédale de Sib s'installe à la basse — elle y restera cinquante-sept mesures durant, jusqu'à la mesure 61. Motifs de tierces et descentes se répètent pianissimo par-dessus.",
    },
    {
      label: "Mesures 15-22",
      titre: "L'organum augmenté",
      chiffrage: "Tons entiers — triades augmentées parallèles (Lab-Do-Mi, Sib-Ré-Fa#)",
      fonctions: "?",
      texte:
        "Sous le thème, l'ostinato d'accompagnement révèle la seule « harmonie » que la collection autorise : des triades augmentées parallèles — l'augmenté étant l'unique triade que la gamme par tons puisse produire. Debussy en fait son organum, écho direct des triades parallèles de la Cathédrale engloutie.",
    },
    {
      label: "Mesures 23-32",
      titre: "La strate de Fa# et l'ornement chromatique",
      chiffrage: "Tons entiers — strate grave sur Fa# ; figure chromatique isolée (m.31)",
      fonctions: "?",
      texte:
        "Une strate grave s'installe sur Fa#, l'autre pôle de la collection. La mesure 31 introduit la seule vraie exception de toute la pièce : une petite figure chromatique (le tour Do-Ré-Réb-Do, la glissade Fa#-Sol-Lab) qui fait entendre les seuls sons étrangers à la collection — du chromatisme d'ornement, pas d'harmonie, l'exception qui confirme la règle.",
    },
    {
      label: "Mesures 33-41",
      titre: "Amplification",
      chiffrage: "Tons entiers (inchangés)",
      fonctions: "?",
      texte:
        "La collection ne change pas ; ce qui change, c'est la densité et le registre — Serrez, dim. molto, Cédez. L'intensification se fait par des paramètres que l'harmonie classique traitait en simples auxiliaires.",
    },
    {
      label: "Mesures 42-47",
      titre: "Le climax : changement d'alphabet",
      chiffrage: "Pentatonique des touches noires {Réb, Mib, Solb, Lab, Sib}",
      fonctions: "?",
      texte:
        "Le seul moment de toute la pièce où quelque chose change vraiment — et ce n'est ni un accord ni une tonalité, c'est la collection entière. Glissandi et volées pentatoniques, mf puis f (le seul f de la pièce), Emporté : l'unique « modulation » de Voiles est ce basculement d'un alphabet à un autre.",
    },
    {
      label: "Mesures 48-61",
      titre: "Retour et décrue",
      chiffrage: "Tons entiers — pédale de Sib reprise",
      fonctions: "?",
      texte:
        "Le thème et l'ostinato reviennent superposés en strates, pianissimo, sur la même pédale de Sib qu'au début.",
    },
    {
      label: "Mesures 62-64",
      titre: "Coda : la pièce s'éteint",
      chiffrage: "Pédale de Fa# — tierce Do-Mi nue (×2), sans basse",
      fonctions: "?",
      texte:
        "La pédale abandonne Sib pour Fa# durant les trois dernières mesures, portée par des balayages doux de la collection. Puis la tierce Do-Mi seule apparaît deux fois, sans basse — la pièce ne conclut pas, elle s'éteint.",
    },
  ],
  synthese: [
    {
      titre: "Une collection qui rend la fonction impossible",
      texte:
        "La gamme par tons ne contient ni quinte juste, ni sensible, ni triade majeure ou mineure : aucune dominante, aucune cadence n'y est même constructible. Là où la Cathédrale engloutie évitait la fonction tout en en gardant une, enfouie, Voiles la rend impossible par construction — on ne renonce plus à la cadence, on choisit un matériau où elle n'existe pas.",
    },
    {
      titre: "La forme comme courbe de densité",
      texte:
        "Sans tension harmonique disponible, c'est le nombre de sons par mesure, le registre et la nuance qui dessinent la forme — une accumulation progressive jusqu'au climax pentatonique, puis une décrue jusqu'à l'extinction. La pédale de Sib, seule hiérarchie qui survive, n'est « centre » que parce qu'elle est tenue.",
    },
    {
      titre: "La sixte augmentée, réduite à un sous-ensemble",
      texte:
        "L'accord le plus tendu du chromatisme romantique — la sixte augmentée française, celle du sommet dramatique de Chopin — n'est, note pour note, qu'un sous-ensemble de la collection par tons entiers dans laquelle Debussy fait flotter ses voiles pendant soixante-quatre mesures. Même matériau, tension maximale devenue apesanteur.",
    },
  ],
};
