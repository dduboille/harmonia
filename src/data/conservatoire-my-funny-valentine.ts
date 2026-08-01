import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-my-funny-valentine.ts
 * Harmonia — Extrait (9 mesures) de « My Funny Valentine » (Richard
 * Rodgers), transcription d'un arrangement du Bill Evans Trio, pour la
 * section « conservatoire » du cours 16 (niveau 2 — la réharmonisation).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « my-funny-valentine-bill-evans-transcription.musicxml », source
 * musescore.com/user/1431431/scores/8970407) — jamais reconstruit à la
 * main, cf. feedback-partitions-verbatim. Do mineur (fifths=-3), 4/4. Avec
 * <harmony> et <lyric> (chiffrage romain) portés directement sous la
 * portée.
 *
 * Tempo (100) DEPLACE de la mesure 7 vers la mesure 1 — nouveau cas de
 * figure pour project_playback_tempo_desync : le fichier original avait un
 * `<sound tempo="100">` mais UNIQUEMENT à la mesure 7, pas à la mesure 1.
 * Vérifié (avant correction) que cela causait bien une désynchronisation
 * réelle, d'une nature différente des 5 cas déjà réparés cette session (qui
 * n'avaient AUCUN tempo écrit) : notre moteur (`construireHorloge`)
 * "remonte" le seul tempo trouvé jusqu'à l'onset 0, donc joue tout l'extrait
 * à 100bpm (2,4s/mesure) ; Verovio, lui, ignore ce tempo tardif dans sa
 * propre table MIDI (`renderToMIDI`) et surligne tout l'extrait à son
 * défaut de 120bpm (2,0s/mesure, mesuré par échantillonnage fin de
 * `getElementsAtTime`, transitions exactement toutes les 2000ms). Fixé en
 * déplaçant le `<sound tempo="100">` (+ `<metronome>` assorti) de la mesure
 * 7 vers la mesure 1 — revérifié après coup, transitions Verovio alignées
 * sur 2400ms, conformes à notre moteur.
 *
 * Structure vérifiée : Do mineur (armure -3), avec une « excursion » par la
 * sous-dominante (Fam9 puis Fa13sus4, mesures 5-6) avant la cadence mineure
 * classique iiø7-V7alt-i (mesures 7-9) — exactement la personnalité
 * harmonique la plus célèbre du standard, déjà réharmonisée par la
 * transcription (dominantes secondaires V/V et V/IV insérées), matière
 * idéale pour le cours 16 (réharmonisation).
 *
 * `<print new-system="yes">` ajouté aux mesures 3 et 7 (en plus de celui déjà
 * présent à la mesure 5, qui lui vient du fichier d'origine) — signalé par
 * Dany : à 4 mesures par ligne (mise en page d'origine), les nombreux
 * chiffrages (jusqu'à 3 par mesure, ex. mesures 4/6/8) se chevauchent
 * visuellement. Passage à 2 mesures par ligne partout (1-2 / 3-4 / 5-6 / 7-8
 * / 9) pour laisser à chaque accord la place d'être lisible.
 */
export const MY_FUNNY_VALENTINE_MESURES_1_9 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>My Funny Valentine</work-title>
    </work>
  <identification>
    <creator type="composer">Bill Evans Trio, Comp.: Richard Rogers</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/1431431/scores/8970407</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2022-11-08</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Linux</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.8</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1746.65</page-height>
      <page-width>1235.65</page-width>
      <page-margins type="even">
        <left-margin>88.5882</left-margin>
        <right-margin>88.2353</right-margin>
        <top-margin>88.2353</top-margin>
        <bottom-margin>88.2353</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>88.2353</left-margin>
        <right-margin>88.5882</right-margin>
        <top-margin>88.2353</top-margin>
        <bottom-margin>88.2353</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.6</line-width>
      <line-width type="heavy barline">5.2</line-width>
      <line-width type="beam">4.5</line-width>
      <line-width type="bracket">4.4</line-width>
      <line-width type="dashes">1.3</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">0.8</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">0.8</line-width>
      <line-width type="octave shift">0.8</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.7</line-width>
      <line-width type="staff">0.8</line-width>
      <line-width type="stem">0.9</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.7</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1</line-width>
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
    <credit-words default-x="617.823624" default-y="1658.418145" justify="center" valign="top" font-weight="bold" font-size="22">My Funny Valentine</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="617.823624" default-y="1599.594615" justify="center" valign="top" font-size="16">Bill Evans Transcription</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1147.059069" default-y="1488.284145" justify="right" valign="bottom">Comp.: Richard Rogers.</credit-words>
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
    <measure number="1" width="366.08">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>240.13</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.79</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>6</divisions>
        <key>
          <fifths>-3</fifths>
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
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m/6">minor-sixth</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-63.89" relative-y="-25">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44"/>
        </direction>
      <note default-x="137.43" default-y="0">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="190.63" default-y="0">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="226.1" default-y="-15">
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
      <note default-x="261.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="279.56" default-y="-5"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.01" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="136.47" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>1</staff>
        </note>
      <note default-x="122.45" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="136.47" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="136.47" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="136.47" default-y="-133.79">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <lyric number="1" default-x="26.08" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I(6/9)</text>
          </lyric>
        </note>
      </measure>
    <measure number="2" width="207.82">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" parentheses-degrees="yes">dominant</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="18.76" default-y="-35">
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
      <note default-x="18.76" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.76" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7" parentheses-degrees="yes">dominant</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="103.31" default-y="-40">
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
      <note default-x="103.31" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.31" default-y="-10">
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
      <note default-x="138.78" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.77" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.78" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.77" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.78" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.77" default-y="-5"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="18.76" default-y="-118.79">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V/V</text>
          </lyric>
        </note>
      <note default-x="18.76" default-y="-98.79">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.31" default-y="-118.79">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7alt</text>
          </lyric>
        </note>
      <note default-x="103.31" default-y="-103.79">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.78" default-y="-118.79">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="156.77" default-y="-113.79"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.78" default-y="-103.79">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="156.77" default-y="-103.79"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="248.37">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>143</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.75</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m/6">minor-sixth</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="25.09" default-y="-10">
        <rest/>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-76.85" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="104.9" default-y="-10">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="140.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="9">dominant-ninth</kind>
        <degree>
          <degree-value>11</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="175.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no"/>
          </notations>
        </note>
      <note default-x="211.3" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="25.09" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-65"/>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-45"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="25.09" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-35"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="25.09" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-25"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.74" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.83" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="25.09" default-y="-133.79">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="104.9" default-y="-93.79">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.83" default-y="-103.79">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/IV</text>
          </lyric>
        </note>
      </measure>
    <measure number="4" width="236.55">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind use-symbols="yes">half-diminished</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.85" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="16.84" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.84" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.84" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.84" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="13">dominant-13th</kind>
        <degree>
          <degree-value>11</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>alter</degree-type>
          </degree>
        </harmony>
      <note default-x="79.72" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.72" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.72" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.72" default-y="-5">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="13">dominant-13th</kind>
        <degree>
          <degree-value>11</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>alter</degree-type>
          </degree>
        </harmony>
      <note default-x="155.15" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.15" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.15" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.15" default-y="-10">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.84" default-y="-108.79">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V/IV</text>
          </lyric>
        </note>
      <note default-x="79.72" default-y="-113.79">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>subV/IV</text>
          </lyric>
        </note>
      <note default-x="79.72" default-y="-103.79">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.15" default-y="-118.79">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.15" default-y="-108.79">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="277.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>143</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.75</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <note default-x="101.51" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.61" default-y="-60">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.51" default-y="-50">
        <chord/>
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
      <note default-x="176.27" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="176.27" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.11" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.11" default-y="-50">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.11" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="100.55" default-y="-152.75">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="10.93" default-y="-54.93" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV9</text>
          </lyric>
        </note>
      <note default-x="100.55" default-y="-132.75">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="6" width="207.16">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="13sus">suspended-fourth</kind>
        <degree>
          <degree-value>7</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>11</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        <bass arrangement="horizontal">
          <bass-step>E</bass-step>
          <bass-alter>-1</bass-alter>
          </bass>
        <offset>12</offset>
        </harmony>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-45"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="25.1" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="43.09" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.14" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="151.35" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="177.56" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="177.56" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-152.75">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        <lyric number="1" default-x="9.82" default-y="-54.93" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IV(sus)</text>
          </lyric>
        </note>
      <note default-x="13" default-y="-132.75">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="87.76" default-y="-157.75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.76" default-y="-117.75">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="285.32">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>143</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.75</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" use-symbols="yes">half-diminished</kind>
        </harmony>
      <note default-x="13" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="13" default-y="-50">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="25.1" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="13" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="78.53" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="78.53" default-y="-50">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="90.63" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="78.53" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="117.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="129.94" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="117.84" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="149.94" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="162.04" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="149.94" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="177.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="177.09" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="177.09" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="216.41" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="216.41" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="216.41" default-y="-5">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="255.72" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="255.72" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="255.72" default-y="5">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-127.75">
        <rest/>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <staff>2</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        <lyric number="1" default-x="19.36" default-y="-34.93" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II</text>
          <text font-family="Leland Text"></text>
          <text font-family="Edwin">7</text>
          </lyric>
        </note>
      <note default-x="39.21" default-y="-162.75">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
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
          <tied type="start"/>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="78.53" default-y="-162.75">
        <pitch>
          <step>D</step>
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
      <note default-x="78.53" default-y="-127.75">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="117.84" default-y="-117.75">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="149.94" default-y="-117.75">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="177.09" default-y="-107.75">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="216.41" default-y="-97.75">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="255.72" default-y="-87.75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          <tuplet type="stop"/>
          </notations>
        </note>
      </measure>
    <measure number="8" width="288.79">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="13" default-y="5">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="39.21" default-y="-30">
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
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="39.21" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="39.21" default-y="0">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="78.53" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.53" default-y="-15">
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
      <note default-x="111.75" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="123.85" default-y="-45">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.75" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="7" parentheses-degrees="yes">dominant</kind>
        <degree>
          <degree-value>9</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        <degree>
          <degree-value>13</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="152.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.48" default-y="-40">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.58" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.48" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.77" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="232.98" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="259.19" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
        <duration>24</duration>
        </backup>
      <note default-x="13" default-y="-87.75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="39.21" default-y="-92.75">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="stop"/>
          </notations>
        </note>
      <note default-x="78.53" default-y="-107.75">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="111.75" default-y="-117.75">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="152.48" default-y="-147.75">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-54.93" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7alt</text>
          </lyric>
        </note>
      <note default-x="185.71" default-y="-147.75">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="203.7" default-y="-142.75"/>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="185.71" default-y="-117.75">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="203.7" default-y="-112.75"/>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="270.68">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>143</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="101.51" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="119.51" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.46" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes"/>
          </notations>
        </note>
      <note default-x="213.87" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="232.28" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
        <duration>24</duration>
        </backup>
      <note default-x="101.51" default-y="-125">
        <rest/>
        <duration>3</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-20" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="124.85" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="142.84" default-y="-90"/>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.21" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degré/fonction) — premier accord de
 * chaque mesure, transcrit depuis le chiffrage <harmony>/<lyric> déjà écrit
 * par Dany dans le fichier. Do mineur (degré "I" à la mesure 1 et 3, sur un
 * Cm6/9 — l'accord de tonique typique du jazz, sans tierce mineure « dure »).
 */
export const MY_FUNNY_VALENTINE_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Dom6/9",  degre: "I(6/9)",  fonction: "T" },
  { numero: 2, nom: "Ré7",     degre: "V/V",     fonction: "D", dominanteSecondaire: true },
  { numero: 3, nom: "Dom6/9",  degre: "I",       fonction: "T" },
  { numero: 4, nom: "Lam7b5",  degre: "V/IV",    fonction: "D", dominanteSecondaire: true },
  { numero: 5, nom: "Fam9",    degre: "IV9",     fonction: "SD" },
  { numero: 6, nom: "Fa13sus4",degre: "IV(sus)", fonction: "SD" },
  { numero: 7, nom: "Rém7b5",  degre: "II7",     fonction: "SD" },
  { numero: 8, nom: "Sol7",    degre: "V7alt",   fonction: "D" },
  { numero: 9, nom: "Dom",     degre: "I",       fonction: "T" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée note à note (onset par onset, les
 * deux voix, en tenant compte des liaisons qui traversent les barres de
 * mesure) contre le MusicXML ci-dessus, à partir d'un brouillon très détaillé
 * fourni par Dany. Le brouillon est globalement remarquable (voicings
 * altérés recalculés et confirmés à 100 % aux mesures 2, 4, 6, 7, 8 — y
 * compris des enharmonies précises comme Fa♭ pour la 7e d'un Réb13#11, et
 * l'observation fine du "shell" 3-7/7-3 dont le voice-leading colle F#→F,
 * Do→Si). MAIS le brouillon affirme aussi TROIS choses inexactes sur l'état
 * du fichier lui-même — troisième occurrence cette session de ce piège
 * précis (déjà rencontré sur Autumn Leaves) : ne jamais confondre « ce que
 * je m'attendrais à voir » avec « ce qui est réellement écrit » :
 *  1. Il affirme que la mesure 1 est chiffrée « Cm » sec et propose de la
 *     « re-chiffrer en Cm6/9 » — FAUX, la balise <harmony> dit déjà
 *     `kind="m/6"` + `degree 9 add`, soit Cm6/9 exactement, et le romain dit
 *     déjà "I(6/9)". Rien à corriger.
 *  2. Il affirme que la mesure 6 a un chiffrage vide (« artefact
 *     d'encodage ») — FAUX, la balise dit déjà `kind text="13sus"` avec les
 *     degrés 7/9/11/13 ajoutés, soit F13sus9 exactement. Rien à corriger.
 *  3. Une erreur de temps réelle, elle : le brouillon place le basculement
 *     harmonique de la mesure 3 (vers le C7#11 rootless) "au 3e temps" —
 *     vérifié faux, la note qui sonne au temps 3 est un Ré4 de passage à la
 *     basse ; le nouvel accord (Mi-Fa#-Sib) n'apparaît qu'au temps 4.
 * Un point nuancé plutôt que corrigé : l'accord d'ouverture de la mesure 4
 * (chiffré Aø9 par Dany) est décrit comme « aussi un C9 sans fondamentale » ;
 * vérifié que les hauteurs réelles (La-Mib-Sol-Si-Ré, SANS Do) ne contiennent
 * pas la tierce/7e (Mi/Sib) qui justifierait cette équivalence — la structure
 * réelle est b5-b7-9-11 d'un La, sans tierce du tout. Le romain "V/IV" reste
 * transcrit tel quel (verbatim, chiffrage de Dany), sans reprendre cette
 * justification précise.
 * La coquille « Rogers » (au lieu de « Rodgers ») dans les métadonnées
 * <creator>/<credit-words> du fichier source est réelle mais sans
 * conséquence : le champ affiché aux utilisateurs (`repertoire.compositeur`
 * dans conservatoireData.ts) écrit déjà correctement « Richard Rodgers ».
 *
 * Ces constats de vérification (points 1-3 ci-dessus) sont un JOURNAL DE
 * RELECTURE — ils ne doivent PAS apparaître dans les champs affichés aux
 * étudiants (`sections[].texte`, `synthese[].texte`) : un·e étudiant·e n'a
 * aucune raison de lire « le brouillon disait X, en fait c'est Y ». Retiré
 * de la synthèse et des sections après retour de Dany (2026-07-29) — même
 * correctif appliqué à conservatoire-autumn-leaves.ts, qui avait la même
 * fuite dans son 1er item de synthèse.
 */
export const MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Do mineur (armure à 3 bémols). La grille standard de la section A est célèbre pour son " +
    "<em>line cliché</em> : Cm-Cm(maj7)-Cm7-Cm6, la ligne descendante Do-Si-Sib-La sur pédale de " +
    "tonique, avant Abmaj7-Fm7-Dø7-G7. Cette transcription ne joue pas la ligne : elle la " +
    "<strong>comprime et la remplace</strong>.",
  metrique: "4/4.",
  forme:
    "9 mesures = la 1ère section A du standard. Le line cliché horizontal du modèle est " +
    "verticalisé dès le premier accord (mesure 1) ; les deux mesures ainsi libérées (2-3) sont " +
    "remplies de turnarounds altérés et d'une réharmonisation de la même mélodie ; deux accords " +
    "de la grille (Abmaj7/Fm7) sont fusionnés en un seul (mesure 5) ; et l'arrivée du iiø7 " +
    "(mesures 7-8) devient elle-même un geste formel — une vague en arche, pas un simple accord.",
  sections: [
    {
      label: "Mesure 1",
      titre: "Le line cliché déjà résumé dans un seul accord",
      chiffrage: "DoM6/9",
      fonctions: "i(6/9)",
      texte:
        "Basse Do3, et au-dessus La♮3-Ré4-Mib4-Sol4 : fondamentale, 6te majeure, 9e, tierce, " +
        "quinte — un <strong>Cm6/9</strong> complet. Le La♮, point d'arrivée du line cliché " +
        "standard (Do-Si-Sib-<em>La</em>), est ainsi intégré verticalement dès le premier " +
        "accord : quatre mesures d'harmonie horizontale résumées en un seul voicing. Le " +
        "frottement Ré4/Mib4 (seconde mineure au cœur de l'accord) est la signature-cluster de " +
        "toute la transcription. La mélodie entre en levée à la moitié du 2e temps : Do5-Ré5-Mib5, " +
        "la cellule génératrice du thème, sur nuance <em>p</em>.",
    },
    {
      label: "Mesure 2",
      titre: "Le turnaround substitué, entièrement altéré",
      chiffrage: "Ré7(♯9♭13) – Sol7(♭9♭13)",
      fonctions: "II7 alt (V/V) – V7 alt",
      texte:
        "À la place des mesures 2-3 du cliché standard, un turnaround II7-V7 entièrement altéré. " +
        "Ré7 : shell 3-7 à la basse (Fa♯3-Do4), Fa♮4 (=Mi♯, ♯9), Sib4 (♭13) et la fondamentale " +
        "en soprano. Sol7 (placé en anticipation, croche puis noire pointée) : shell 7-3 (Fa♮3-" +
        "Si♮3) — le voice-leading des shells est exact, Fa♯→Fa♮, Do→Si, chaque voix descend d'un " +
        "demi-ton — surmonté de Mib (♭13), Lab (♭9), quinte au sommet. Ces ♭9/♭13 sur Sol7 sont " +
        "les notes du mineur harmonique de Do : l'altération n'est pas un exotisme, c'est la " +
        "tonalité elle-même.",
    },
    {
      label: "Mesure 3",
      titre: "Même mélodie, harmonisation adverse",
      chiffrage: "DoM6/9 → Do7(♯11)",
      fonctions: "i → V7/iv",
      texte:
        "Retour exact du voicing de la mesure 1 (mêmes quatre notes), et la mélodie relance la " +
        "cellule Do-Ré-Mib. Mais l'harmonie bascule au <strong>4e temps</strong> (le Ré4 du 3e " +
        "temps n'est qu'une note de passage à la basse) : Mi♮4-Fa♯4 s'allument sur Sib3 — tierce, " +
        "♯11 lydienne et 7e d'un Do7 rootless, fonction V7/iv vers Fa mineur. Même mélodie, " +
        "harmonisation opposée : la première leçon de réharmonisation de l'extrait. Crescendo noté.",
    },
    {
      label: "Mesure 4",
      titre: "La vague chromatique",
      chiffrage: "Laø(9) – Solb13(♯11) – Fa13(♯11)",
      fonctions: "V/iv – subV/iv – (planing)",
      texte:
        "La mesure la plus dense. Laø9 (La3 à la basse, Mib-Sol-Si♮(9e)-Ré au-dessus, sans la " +
        "tierce Do) fonctionne comme V/iv vers Fa mineur. Puis Solb13(♯11) : le substitut " +
        "tritonique de Do7, voicing complet (Solb-Sib à la basse, Fab-Lab-Do-Mib au-dessus). Et " +
        "le geste remarquable : Fa13(♯11) est exactement la même structure glissée un demi-ton " +
        "plus bas (Fa-La / Mib-Sol-Si♮-Ré) — du <strong>planing parallèle</strong>, chaque voix " +
        "descend d'un demi-ton en bloc. Diminuendo noté : la vague retombe.",
    },
    {
      label: "Mesures 5-6",
      titre: "Deux accords fusionnés, puis la descente vers le iiø",
      chiffrage: "Fam9 – Fa13sus9 – Fam9/Mib",
      fonctions: "iv9 – iv(sus)",
      texte:
        "Fam9 (basse Fa2-Do3 en rondes liées) : trois positions successives du même accord à la " +
        "main droite — Sol-Lab-Do (9/3/5, encore un cluster de seconde), Sib-Ré♮ (11 et 13 " +
        "<em>dorienne</em>, pas la 6te bémolisée du mineur naturel), puis Lab-Do-Mib (3/5/7). La " +
        "grille standard donne ici Abmaj7 PUIS Fm7 — deux accords relatifs que la transcription " +
        "<strong>fusionne en un seul Fm9 étalé</strong> (Fm9 contient déjà tous les sons " +
        "d'Abmaj7). Mesure 6 : F13sus9 (11, 13, 9, 7, pas de tierce), puis la basse glisse vers " +
        "Mib sous Fa3 (Fm9/Mib) : Fa→Mib→Ré, le passage " +
        "obligé de la grille (mesures 6-7 du standard) — le seul endroit où cette transcription " +
        "la suit à la lettre.",
    },
    {
      label: "Mesures 7-8",
      titre: "L'arc autour du iiø : sommet, puis redescente",
      chiffrage: "Réø7 (arpège ascendant) → Sol7(♯9♭13)",
      fonctions: "iiø7 – V7 alt",
      texte:
        "Toute la mesure 7 est un arpège en triolets qui traverse les deux mains : la basse " +
        "égrène Ré2-Ré3-Fa3-Lab3-Do4-Mib4 (l'accord ø7 complet, plus une ♭9 qui déborde), " +
        "pendant que la main droite empile des voicings de trois sons qui montent en parallèle " +
        "jusqu'à Lab4-Do5-Sol5 — le point le plus aigu de tout l'extrait. La mesure 8 redescend " +
        "en un geste presque symétrique (mêmes empilements de trois sons, parcourus en sens " +
        "inverse), la basse redescendant Mib4-Ré4-Lab3-Fa3, avant d'atterrir au 3e temps sur " +
        "Sol7(♯9♭13) : Sol2 à la basse, shell Fa3, puis Si♮-Mib-Fa-Sib (3-♭13-7-♯9). La mélodie " +
        "descend Lab-Sol-Fa en triolet — Lab (♭9 de passage) : l'accord cumule ainsi ♯9 et ♭9 " +
        "mélodique, dominante saturée juste avant la résolution.",
    },
    {
      label: "Mesure 9",
      titre: "La résolution nue",
      chiffrage: "DoM",
      fonctions: "i",
      texte:
        "Résolution volontairement dépouillée après la houle précédente. Mélodie Mib4 (blanche " +
        "pointée) ; à la basse, Ré4→Do4 : une appoggiature 9-8 qui résout — le seul ornement " +
        "d'une mesure autrement vide. Puis le triolet Fa4-Sol4 relance une nouvelle levée vers la " +
        "suite du thème, coupée ici.",
    },
  ],
  synthese: [
    {
      titre: "Le substitut tritonique, sans même résoudre",
      texte:
        "Solb13(♯11) (mesure 4) est le substitut tritonique classique de Do7 — mais au lieu de " +
        "résoudre vers Fa mineur comme un subV7 attendu, il glisse d'un simple demi-ton vers " +
        "Fa13(♯11), une structure identique. La substitution devient ici un procédé purement " +
        "chromatique (le <em>planing</em>), détaché de toute idée de résolution — la couleur " +
        "prime sur la fonction.",
    },
    {
      titre: "Le line cliché, horizontal puis vertical",
      texte:
        "Le standard déroule Cm-Cm(maj7)-Cm7-Cm6 sur 4 mesures ; cette transcription empile les " +
        "mêmes notes (dont le La du cliché) dans un seul Cm6/9 dès la mesure 1, libérant tout le " +
        "reste de l'espace pour la réharmonisation.",
    },
    {
      titre: "Le voicing comme objet expressif autonome",
      texte:
        "Chez Bach (Invention n°1, cours 13), la forme naît de la conduite des voix ; chez Satie " +
        "(Gymnopédie, cours 14), de la répétition ; dans la grille jazz nue (Autumn Leaves, " +
        "cours 15), de l'enchaînement fonctionnel. Ici, la texture elle-même — l'arche des " +
        "mesures 7-8, le planing de la mesure 4 — devient un événement formel : le voicing, pas " +
        "seulement l'accord qu'il porte, est le sujet.",
    },
  ],
};
