import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-tristan-prelude.ts
 * Harmonia — Ouverture du Prélude de Tristan und Isolde (Wagner, 1859) :
 * anacrouse + 13 mesures, les trois phrases du motif initial jusqu'à la
 * double barre sur la dominante de mi, pour la section "conservatoire" du
 * cours 25 (niveau 2 — le chromatisme et l'harmonie chromatique avancée).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.7.4, fichier
 * « tristan-prelude-annote.musicxml », source
 * musescore.com/user/9427446/scores/11680930) — jamais reconstruit à la
 * main, cf. feedback-partitions-verbatim. Armature sans altération
 * (fifths=0 — le "la mineur" jamais confirmé par un accord de tonique),
 * 6/8. Avec <harmony> ET chiffrage romain complet en <direction><words>
 * (même convention que la Pathétique et le Prélude de Chopin).
 *
 * Chiffrage recoupé mesure par mesure contre les 8 balises <harmony>
 * réelles : concordance totale. Chaque affirmation précise de l'analyse de
 * Dany vérifiée indépendamment note à note (les 3 formes transposées de
 * l'accord de Tristan par intervalles identiques depuis la basse, les
 * appoggiatures croisées de la mesure 10, la triade augmentée de passage
 * Do-Mi-Sol# en fin de mesure 10) — AUCUNE erreur trouvée.
 *
 * Orthographe mixte (Ré#/Sol# sur basse Fa à la mesure 2, puis Lab contre
 * Fa# à la mesure 6) : PAS une erreur de transcription, c'est le texte de
 * Wagner lui-même — l'ambiguïté d'épellation fait partie du problème
 * analytique (accord de Tristan lu soit comme demi-diminuée seule, soit
 * comme appoggiature sur sixte augmentée française), reproduite verbatim.
 *
 * Nuances AJOUTÉES (absentes du fichier source) : pp au début (m.0), un
 * crescendo par phrase (m.2-3 puis m.6-7, chacune se gonflant avant de
 * retomber), et le f de la troisième entrée du motif (m.8) — le tempo
 * (Lento, `<sound tempo="52.5">`, en noires par minute au sens de
 * musicxml-parse.ts, soit 3428.57ms par mesure de 6/8) était déjà écrit
 * dans le fichier.
 */
export const TRISTAN_PRELUDE_MESURES_0_13 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Tristan and Isolde</work-title>
    </work>
  <identification>
    <creator type="composer">Richard Wagner</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-29</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/9427446/scores/11680930</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2023-08-02</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      <miscellaneous-field name="sourceRevisionId">20993770</miscellaneous-field>
      <miscellaneous-field name="subtitle">Subtitle</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99912</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
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
    <music-font font-family="Leland" />
    <word-font font-family="Edwin" font-size="10" />
    <lyric-font font-family="Edwin" font-size="10" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="616.93" default-y="1511.05" justify="center" valign="top" font-size="22">Tristan and Isolde</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="616.93" default-y="1453.9" justify="center" valign="top" font-size="14">Prélude</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1148.14" default-y="1411.05" justify="right" valign="bottom">Richard Wagner</credit-words>
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
    <measure number="0" implicit="yes" width="116.35">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>74.77</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>6</beats>
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
          <words default-x="-35.72" relative-y="20" font-weight="bold" font-size="12">Lento</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="52.5" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics><pp/></dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="27" />
        </direction>
      <note default-x="80.99" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="30.060136" bezier-y="-14.428309" number="1" />
          </notations>
        </note>
      <backup>
        <duration>1</duration>
        </backup>
      <note default-x="80.99" default-y="-134.77">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="1" width="135.58">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.76" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="100.22" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.613748" bezier-y="-22.49336" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="60.39" default-y="-124.77">
        <rest measure="yes" />
        <duration>6</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="153.3">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="ø7">half-diminished</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">a : accord de Tristan</words></direction-type><staff>2</staff></direction><note default-x="30.72" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.72" default-y="-45" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="28.547129" bezier-y="-18.966832" number="1" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="30.72" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="48.72" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="over" placement="above" bezier-x="27.719913" bezier-y="25.879188" number="2" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">(rés. app. G#→A : +6 fr.)</words></direction-type><staff>2</staff></direction><note default-x="117.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="30.72" default-y="-124.77">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="48.72" default-y="-119.77" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.842542" bezier-y="18.113361" number="3" />
          </notations>
        </note>
      <note default-x="30.72" default-y="-109.77">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="48.72" default-y="-109.77" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="173.57">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 (app. A#→B)</words></direction-type><staff>2</staff></direction><note default-x="26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="44" default-y="-45" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-28.547129" bezier-y="-18.966832" />
          </notations>
        </note>
      <note default-x="91.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="118.59" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="144.23" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="26" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="53.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.53" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-23.520184" bezier-y="30.018202" />
          </notations>
        </note>
      <note default-x="118.59" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="144.23" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="26" default-y="-129.77">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="44" default-y="-129.77" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="3" bezier-x="-27.686116" bezier-y="22.034594" />
          </notations>
        </note>
      <note default-x="26" default-y="-119.77">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="44" default-y="-119.77" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.53" default-y="-129.77">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.53" default-y="-119.77">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="118.59" default-y="-134.77">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="144.23" default-y="-134.77">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      </measure>
    <measure number="4" width="150.93">
      <note default-x="13" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="51.46" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="77.1" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="115.57" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="31.3911" bezier-y="-14.465347" number="1" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="68.06" default-y="-124.77">
        <rest measure="yes" />
        <duration>6</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="141.34">
      <note default-x="18.76" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="36.76" default-y="-25" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.52" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="105.98" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.606017" bezier-y="-23.215927" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="63.27" default-y="-124.77">
        <rest measure="yes" />
        <duration>6</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="141.34">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Tristan T2 (enh.)</words></direction-type><staff>2</staff></direction><note default-x="18.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="36.76" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="22.66958" bezier-y="-17.542299" number="1" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="18.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="36.76" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="over" placement="above" bezier-x="18.584841" bezier-y="18.673565" number="2" />
          </notations>
        </note>
      <note default-x="67.52" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">(rés. app. B→C : +6 fr.)</words></direction-type><staff>2</staff></direction><note default-x="105.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="18.76" default-y="-114.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.76" default-y="-109.77" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.161225" bezier-y="17.354762" number="3" />
          </notations>
        </note>
      <note default-x="18.76" default-y="-99.77">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.76" default-y="-99.77" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="230.35">
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
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">C : V7 (app. C#→D)</words></direction-type><staff>2</staff></direction><note default-x="70.37" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot placement="below" default-x="88.37" default-y="-35" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-4.562741" bezier-y="-7.996732" />
          </notations>
        </note>
      <note default-x="142.27" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="171.03" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="199.79" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="70.37" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="99.13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="142.27" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-21.165537" bezier-y="16.477893" />
          </notations>
        </note>
      <note default-x="171.03" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="199.79" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="70.37" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="88.37" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="3" bezier-x="-7.099203" bezier-y="9.491113" />
          </notations>
        </note>
      <note default-x="70.37" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="88.37" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="142.27" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="142.27" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="171.03" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="199.79" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      </measure>
    <measure number="8" width="141.39">
      <direction placement="below">
        <direction-type>
          <dynamics><f/></dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="92" />
        </direction>
      <note default-x="13" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="56.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.518899" bezier-y="18.991791" number="1" />
          </notations>
        </note>
      <note default-x="84.9" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="102.9" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="63.29" default-y="-115">
        <rest measure="yes" />
        <duration>6</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="158.6">
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="41.76" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="84.9" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="113.66" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.843325" bezier-y="24.487975" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="71.9" default-y="-115">
        <rest measure="yes" />
        <duration>6</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="166.33">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="ø7">half-diminished</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Tristan T3 (7e au grave)</words></direction-type><staff>2</staff></direction><note default-x="18.76" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="36.76" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="32.963418" bezier-y="-19.778887" number="1" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="18.76" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <dot placement="above" default-x="36.76" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="over" placement="above" bezier-x="35.183913" bezier-y="27.52202" number="2" />
          <articulations>
            <accent default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.45" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="102.21" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="130.97" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="18.76" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot placement="below" default-x="36.76" default-y="-160" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="37.841116" bezier-y="23.386476" number="3" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="18.76" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <dot placement="below" default-x="36.76" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.45" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="130.97" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="191.91">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">e : V7 (app. E#→F#)</words></direction-type><staff>2</staff></direction><note default-x="21.36" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot placement="below" default-x="39.36" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-32.337148" bezier-y="-20.787018" />
          </notations>
        </note>
      <note default-x="103.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="132.59" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="161.35" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        <notations>
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="21.36" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.68" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.82" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-38.731768" bezier-y="22.253525" />
          </notations>
        </note>
      <note default-x="132.59" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="161.35" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="21.36" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="39.36" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="21.36" default-y="-150">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="39.36" default-y="-150" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.82" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="3" bezier-x="-35.838849" bezier-y="26.3525" />
          </notations>
        </note>
      <note default-x="103.82" default-y="-150">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="132.59" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="161.35" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <notations>
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      </measure>
    <measure number="12" width="173.83">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="ø7">half-diminished</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">T3 (8va)</words></direction-type><staff>2</staff></direction><note default-x="21.36" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="39.36" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="21.36" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <dot placement="below" default-x="39.36" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="over" placement="above" bezier-x="24.9228" bezier-y="20.801276" number="1" />
          </notations>
        </note>
      <note default-x="76.05" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="109.71" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.47" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="21.36" default-y="-120">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot placement="below" default-x="39.36" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="21.36" default-y="-105">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <dot placement="above" default-x="39.36" default-y="-100" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="start" orientation="over" placement="above" bezier-x="26.028785" bezier-y="16.98262" number="2" />
          </notations>
        </note>
      <note default-x="76.05" default-y="-105">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="138.47" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="226.89">
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
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 — suspendu</words></direction-type><staff>2</staff></direction><note default-x="64.76" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot placement="below" default-x="82.77" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.69" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="165.02" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="188.35" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        <notations>
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="64.76" default-y="30">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.69" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.69" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-21.242294" bezier-y="16.507359" />
          </notations>
        </note>
      <note default-x="165.02" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="188.35" default-y="-40">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="64.76" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.77" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.76" default-y="-115">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.77" default-y="-110" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.69" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-20.824876" bezier-y="16.199618" />
          </notations>
        </note>
      <note default-x="141.69" default-y="-115">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="165.02" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="188.35" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <notations>
          <fermata type="upright" relative-y="5" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure de `TRISTAN_PRELUDE_MESURES_0_13` — seules les
 * mesures 2, 3, 6, 7, 10, 11, 12 et 13 portent un accord (les mesures 0, 1,
 * 4, 5, 8, 9 sont l'anacrouse/le silence mélodique, sans `<harmony>`).
 *
 * Les trois occurrences de l'accord de Tristan (m.2, m.6, m.10/12) sont
 * chiffrées "?" à dessein : leur statut fonctionnel est précisément le débat
 * que la pièce met en scène (demi-diminuée autonome ou appoggiature sur
 * sixte augmentée française) — chiffrer l'une des deux lectures comme seule
 * vraie serait trancher un débat que l'objet lui-même refuse de trancher.
 */
export const TRISTAN_PRELUDE_ANALYSE: MesureAnalyse[] = [
  { numero: 2,  nom: "Faø7",    degre: "? (Tristan)",              fonction: "?" },
  { numero: 3,  nom: "Mi7",     degre: "V7",                       fonction: "D" },
  { numero: 6,  nom: "Sol#ø7",  degre: "? (Tristan, transp. 3m)",  fonction: "?" },
  { numero: 7,  nom: "Sol7",    degre: "V7/Do",                    fonction: "D", dominanteSecondaire: true },
  { numero: 10, nom: "Réø7/Do", degre: "? (Tristan, 7e au grave)", fonction: "?" },
  { numero: 11, nom: "Si7",     degre: "V7/mi",                    fonction: "D", dominanteSecondaire: true },
  { numero: 12, nom: "Réø7/Do", degre: "? (Tristan, 8va)",         fonction: "?" },
  { numero: 13, nom: "Si7",     degre: "V7 (suspendu)",            fonction: "D" },
];

export const TRISTAN_PRELUDE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "La mineur — jamais confirmée par un accord de tonique dans cet extrait : la pièce entière fuit la résolution.",
  metrique: "6/8. Lento (52.5 à la noire pointée).",
  forme: "Trois présentations du même motif d'appel (anacrouse + accord + résolution), chacune un ton plus tendue que la précédente.",
  sections: [
    {
      label: "Anacrouse – mesure 3",
      titre: "L'accord de Tristan : deux lectures pour un seul son",
      chiffrage: "Faø7 (m.2) – Mi7 (m.3)",
      fonctions: "? (Tristan) – V7",
      texte:
        "Le motif s'ouvre par une anacrouse de trois notes (La-Fa-Mi) qui monte puis retombe, comme une question. À la mesure 2, les quatre voix se figent sur Fa-Si-Ré#-Sol# : c'est l'accord le plus commenté de l'histoire de l'harmonie. Lu verticalement, c'est une simple 7e de dominante avec quinte diminuée sur Fa (Faø7), une sonorité autonome qui ne réclame aucune résolution particulière. Mais Sol# est une appoggiature : elle monte vers La, et l'accord qui apparaît alors — Fa-La-Si-Ré# — est une sixte augmentée française en bonne et due forme, qui tire mécaniquement vers la quinte de la dominante. Les deux lectures ne se contredisent pas : elles coexistent, et c'est cette ambiguïté qui fait tout l'effet du passage. La résolution arrive à la mesure 3 sur Mi7 (V7 de la mineur), via une seconde appoggiature au grave (La#→Si).",
    },
    {
      label: "Mesures 4–7",
      titre: "Le même accord, une tierce mineure plus haut",
      chiffrage: "Sol#ø7 (m.6) – Sol7 (m.7)",
      fonctions: "? (Tristan) – V7/Do",
      texte:
        "Après un silence qui prolonge l'anacrouse, le motif reprend note pour note, transposé d'une tierce mineure. L'accord de la mesure 6 est la même sonorité que celui de la mesure 2, déplacée : sa résolution par appoggiature produit Lab-Do-Ré-Fa#, une sixte augmentée française strictement identique — note à note — à celle du Prélude de Chopin étudié précédemment. Deux compositeurs, un siècle d'écart, un style harmonique radicalement différent, et pourtant exactement le même empilement de quatre notes au même endroit de la phrase. La résolution glisse cette fois vers Sol7, dominante non plus de la mineur mais de do majeur : la deuxième phrase ouvre une région tonale nouvelle sans jamais s'y poser.",
    },
    {
      label: "Mesures 8–13",
      titre: "Une tension qui ne se reçoit jamais",
      chiffrage: "Réø7/Do (m.10, m.12) – Si7 (m.11, m.13)",
      fonctions: "? (Tristan) – V7/mi puis V7 suspendu",
      texte:
        "La troisième présentation est la plus longue : l'anacrouse s'étire en une descente chromatique (Ré-Si-Sib-La) qui retarde l'arrivée de l'accord. Quand il paraît à la mesure 10, sa 7e (Do) est passée à la basse, et les deux voix supérieures divergent au lieu de se rejoindre — l'une monte (Ré-Ré#-Mi), l'autre descend (Fa-Mi) — avant qu'un fugace accord augmenté Do-Mi-Sol# ne traverse le tout dernier instant de la mesure. La résolution, à la mesure 11, se fait sur Si7 (V7 de mi), avec sa propre appoggiature (Mi#→Fa#) et une double tenue en fermata. L'accord revient une octave plus haut à la mesure 12, comme un écho, avant de retomber une dernière fois sur Si7 à la mesure 13 — mais cette fois sans résolution du tout : la dominante reste suspendue, l'extrait s'arrête sur la tension elle-même.",
    },
  ],
  synthese: [
    {
      titre: "Un accord, deux grammaires",
      texte:
        "L'accord de Tristan peut se lire comme une sonorité verticale autonome (une 7e de dominante à quinte diminuée) ou comme une appoggiature sur une sixte augmentée française. Aucune des deux lectures n'annule l'autre : le débat sur laquelle est « la vraie » dure depuis plus d'un siècle, et c'est précisément ce refus de trancher qui rend l'accord aussi célèbre.",
    },
    {
      titre: "La même sonorité, deux compositeurs",
      texte:
        "Une fois résolue par appoggiature, la version transposée de l'accord (mesure 6) donne Lab-Do-Ré-Fa#, exactement la sixte augmentée française du Prélude de Chopin étudié au cours précédent. Même empilement de notes, même fonction, deux langages harmoniques qui semblent pourtant très éloignés l'un de l'autre.",
    },
    {
      titre: "Une tension jamais reçue",
      texte:
        "L'extrait se termine sur une dominante (Si7) qui ne se résout pas : la tonique attendue n'arrive jamais dans ces treize mesures. Ce report de la résolution — la « mélodie infinie » wagnérienne — est déjà à l'œuvre dès l'ouverture du Prélude.",
    },
  ],
};
