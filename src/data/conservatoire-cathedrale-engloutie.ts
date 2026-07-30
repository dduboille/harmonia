import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-cathedrale-engloutie.ts
 * Harmonia — La Cathédrale engloutie (Debussy, Préludes livre I n°10, 1910),
 * INTÉGRALE, 89 mesures, pour la section "conservatoire" du cours 29
 * (niveau 3 — analyse comparative du répertoire, styles historiques).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "cathedrale-engloutie-annote
 * .musicxml", transcription créditée « arranger: Ben Macarell », très
 * proche de l'original : 89 mesures, indications de jeu et nuances
 * conservées) — jamais reconstruit à la main, cf. feedback-partitions-
 * verbatim. Armature sans altération, divisions=24, 6/4.
 *
 * AVERTISSEMENT DE METHODE (pas une erreur, un choix délibéré) : chiffrer
 * cette pièce en fonctions T/SD/D serait un contresens que la pièce
 * elle-même dément. Le fichier annoté contient plus d'étiquettes
 * DESCRIPTIVES (quintes à vide, planing, quartes, mode, pédale) que de
 * chiffres romains — les rares fonctions réelles (m.55-64) en sont
 * d'autant plus visibles. Convention suivie dans ANALYSE/ANALYSE_NARRATIVE
 * ci-dessous : "degre" porte une étiquette descriptive dans la plupart des
 * mesures, "fonction" reste "?" sauf à la seule cadence authentique de
 * toute la pièce (V7-I, mesures 62-64).
 *
 * Chiffrage/étiquettes recoupées systématiquement contre le fichier réel
 * ET vérifiées note à note aux points clés : l'accord d'ouverture (pentatonique
 * {Sol-La-Si-Ré-Mi}, aucune tierce, G1 à D7 sur six octaves — confirmé) ; le
 * Fa## et Si# de la cadence V7-I de Sol# (mesures 62-64, confirmés
 * textuellement) ; l'accord final (Do-Mi-Sol pur, C1 à G5, la tierce enfin
 * accordée après en avoir été privée à l'ouverture — confirmé). AUCUNE
 * erreur trouvée.
 *
 * Note de comptage (pas une erreur) : Dany chiffre "1952 notes" (balises
 * <note> XML brutes, y compris silences et fragments de liaison) ; notre
 * moteur n'en compte que 1716 après fusion des liaisons (168 <tie stop>
 * fusionnées + 76 silences) — deux conventions de comptage différentes,
 * pas une divergence réelle.
 *
 * Tempo (60 à la noire pointée) et nuances (pp→ff→pp) déjà présents dans le
 * fichier — aucune réinjection nécessaire.
 */
export const CATHEDRALE_ENGLOUTIE_MESURES_1_89 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>La Cathédrale Engloutie</work-title>
    </work>
  <identification>
    <creator type="arranger">Ben Macarell</creator>
    <creator type="composer">Charles Debussy</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-30</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2016-07-29</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.60244</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1693.01</page-height>
      <page-width>1308</page-width>
      <page-margins type="both">
        <left-margin>90.0001</left-margin>
        <right-margin>90.0001</right-margin>
        <top-margin>90.0001</top-margin>
        <bottom-margin>90.0001</bottom-margin>
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
    <music-font font-family="Leland" />
    <word-font font-family="FreeSerif" font-size="10" />
    <lyric-font font-family="Plantin MT Std" font-size="10.8159" />
    </defaults>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1218" default-y="1467.07" justify="right" valign="bottom" font-size="12">Claude Debussy</credit-words>
    </credit>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="654" default-y="1603.01" justify="center" valign="top" font-size="24">La cathédrale engloutie</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <part-abbreviation print-object="no">Pia.</part-abbreviation>
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
    <measure number="1" width="431.62">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>257.5</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>105.91</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>24</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>6</beats>
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
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-34.38" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <sound tempo="60" />
      <direction placement="above">
        <direction-type>
          <words default-y="18.85" relative-y="40" font-weight="bold">Profondément calme</words>
          <words font-weight="normal"> (dans une brume doucement sonore)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="87.96" font-family="Bernard MT Condensed" font-size="13">2</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="112.13" font-family="Bernard MT Condensed" font-size="12.3">3</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="53.47" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="5">power</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">quintes à vide + cloches pentatoniques {Ré–Mi–Sol–La–Si}</words></direction-type><staff>2</staff></direction><note default-x="90.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="90.93" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="90.93" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="25" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="81.89" default-y="-40">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-0.88" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="139.87" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="37.361954" bezier-y="-19.35394" number="1" />
          </notations>
        </note>
      <note default-x="139.87" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.86" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.86" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="255.85" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="255.85" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="255.85" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.84" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.84" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.84" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.984277" bezier-y="-28.468669" />
          </notations>
        </note>
      <note default-x="371.83" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="371.83" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <words default-y="20.47" font-family="Bernard MT Condensed" font-size="12.3">3</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="44.64" font-family="Bernard MT Condensed" font-size="13">2</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.89" default-y="-155.91">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="139.87" default-y="-165.91">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.772713" bezier-y="27.943094" number="1" />
          </notations>
        </note>
      <note default-x="139.87" default-y="-150.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.86" default-y="-160.91">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.86" default-y="-145.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.85" default-y="-140.91">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.85" default-y="-125.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="313.84" default-y="-130.91">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="313.84" default-y="-115.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="371.83" default-y="-125.91">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-36.661827" bezier-y="19.587925" />
          </notations>
        </note>
      <note default-x="371.83" default-y="-110.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="90.93" default-y="-220.91">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="-220.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.93" default-y="-200.91">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="-200.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.93" default-y="-185.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="109.35" default-y="-190.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="2" width="333.7">
      <note default-x="159.45" default-y="-10">
        <rest measure="yes" />
        <duration>144</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-155.91">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-56.94" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-70" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="70.95" default-y="-165.91">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="34.909547" bezier-y="20.868941" number="1" />
          <articulations>
            <staccato default-x="7.93" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="128.94" default-y="-185.91">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="7.93" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="186.93" default-y="-185.91">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="244.91" default-y="-165.91">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.753256" bezier-y="21.128189" />
          <articulations>
            <tenuto default-x="3.18" default-y="14" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-220.91">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-220.91" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-200.91">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-200.91" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-185.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-190.91" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="362.69">
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="53.47" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="5">power</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">planing : basse Sol→Fa</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="25" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-40">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="70.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="37.361954" bezier-y="-19.35394" number="1" />
          </notations>
        </note>
      <note default-x="70.95" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.94" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.94" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.94" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.93" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.93" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.91" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.91" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.984277" bezier-y="-28.468669" />
          </notations>
        </note>
      <note default-x="302.9" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.9" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-155.91">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="70.95" default-y="-165.91">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.772713" bezier-y="27.943094" number="1" />
          </notations>
        </note>
      <note default-x="70.95" default-y="-150.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.94" default-y="-160.91">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.94" default-y="-145.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="186.93" default-y="-140.91">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="186.93" default-y="-125.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.91" default-y="-130.91">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.91" default-y="-115.91">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="302.9" default-y="-125.91">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-36.661827" bezier-y="19.587925" />
          </notations>
        </note>
      <note default-x="302.9" default-y="-110.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-225.91">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-230.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-205.91">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-210.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-190.91">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-190.91" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="331.79">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>172.94</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="175.88" default-y="-10">
        <rest measure="yes" />
        <duration>144</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="62.72" default-y="-115">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-58.11" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-71.17" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="111.32" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="29.20854" bezier-y="19.071301" number="1" />
          <articulations>
            <staccato default-x="7.93" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="159.91" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="7.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.51" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="257.1" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.037617" bezier-y="19.330548" />
          <articulations>
            <tenuto default-x="3.18" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="61.76" default-y="-185">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="80.19" default-y="-190" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.76" default-y="-165">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="80.19" default-y="-170" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.76" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="80.19" default-y="-150" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="5" width="306.97">
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="89.07" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="5">power</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…→Mi (parallélisme intégral)</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="50">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="6.78" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="61.55" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="61.685706" bezier-y="43.493132" number="1" />
          </notations>
        </note>
      <note default-x="61.55" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.55" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.15" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.15" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.15" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.74" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.74" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.74" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.98" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.98" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.57" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="256.57" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="25" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-115">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="61.55" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="57.346208" bezier-y="40.398404" number="2" />
          </notations>
        </note>
      <note default-x="61.55" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.15" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.15" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.74" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.74" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="207.98" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.98" default-y="-135">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.57" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-190" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-170">
        <chord />
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-170" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-160" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="256.77">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">thème modal en octaves</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.59" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="133.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="133.49" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="182.08" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-68.196213" bezier-y="32.34278" />
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="182.08" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.59" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="133.49" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="182.08" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-62.082814" bezier-y="36.956409" />
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="7" width="232.47">
      <direction placement="above">
        <direction-type>
          <words default-y="27.29" relative-y="40">Doux et fluide</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="31.131534" bezier-y="26.084364" number="1" />
          </notations>
        </note>
      <note default-x="12" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.89" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.78" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="79.39" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.39" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="28.128157" bezier-y="25.666793" number="2" />
          </notations>
        </note>
      <note default-x="94.89" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.78" default-y="-155">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="157.78" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="71.89" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="13.14" default-y="-49.4" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="8" width="266.88">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>82.05</staff-distance>
          </staff-layout>
        </print>
      <note default-x="75.68" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="134.18" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.63" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.63" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="67.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="67.76" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="73.68" default-y="-172.05">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="134.18" default-y="-167.05">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.18" default-y="-132.05">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.63" default-y="-152.05">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="67.76" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="1.14" default-y="-25.92" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="9" width="215.66">
      <note default-x="37.5" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.95" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.4" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="148.4" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.4" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="37.5" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.95" default-y="-172.05">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.95" default-y="-137.05">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.4" default-y="-187.05">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.4" default-y="-152.05">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-49.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="145.4" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-69" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="10" width="213.12">
      <note default-x="20.96" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="87.37" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.87" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-90.176089" bezier-y="39.014021" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="14.96" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="14.96" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.45" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.45" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="20.96" default-y="-187.05">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="20.96" default-y="-152.05">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.37" default-y="-182.05">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.37" default-y="-147.05">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.87" default-y="-167.05">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-91.278589" bezier-y="38.818132" />
          </notations>
        </note>
      <note default-x="145.87" default-y="-132.05">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="14.96" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="71.45" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="1.14" default-y="-25.92" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="11" width="216.12">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-66.22" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="24.92" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="49.734871" bezier-y="30.74071" number="1" />
          </notations>
        </note>
      <note default-x="83.41" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.87" default-y="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
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
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="17" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="17" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="148.87" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.87" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="22.92" default-y="-177.05">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="58.300051" bezier-y="33.101148" number="2" />
          </notations>
        </note>
      <note default-x="22.92" default-y="-142.05">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.41" default-y="-187.05">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.41" default-y="-152.05">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.87" default-y="-182.05">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.87" default-y="-147.05">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="1.14" default-y="-25.92" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.87" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-69" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="12" width="216.22">
      <note default-x="31.06" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-63.87" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="90.47" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.97" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-51.489048" bezier-y="27.702467" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="18.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-14.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.55" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="29.06" default-y="-167.05">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="29.06" default-y="-132.05">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.47" default-y="-172.05">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.47" default-y="-137.05">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.97" default-y="-167.05">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.97" default-y="-132.05">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="18.06" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.55" default-y="-162.05">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-49.4" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="13" width="386.79">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>95.85</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-49.92" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="57.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="57.84" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="15" />
        <staff>1</staff>
        </note>
      <note default-x="57.84" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="35" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="57.84" default-y="-190.85">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="-190.85" />
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-5.443701" bezier-y="7.425022" />
          <slur type="start" bezier-x="30.822497" bezier-y="-29.313913" number="1" />
          </notations>
        </note>
      <note default-x="57.84" default-y="-175.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="-170.85" />
        <staff>2</staff>
        </note>
      <note default-x="57.84" default-y="-155.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="76.26" default-y="-150.85" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>96</duration>
        </backup>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <forward>
        <duration>96</duration>
        </forward>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="-215.85">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="118.11" default-y="-215.85">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="177.42" default-y="-220.85">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="177.42" default-y="-185.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="236.72" default-y="-220.85">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="236.72" default-y="-185.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="296.03" default-y="-225.85">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-38.215011" bezier-y="-18.680061" />
          </notations>
        </note>
      <note default-x="296.03" default-y="-190.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="236.72" default-y="-165.85">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>72</duration>
        <voice>7</voice>
        <type>half</type>
        <dot default-x="253.23" default-y="-160.85" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="9" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="14" width="370.6">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2.24" default-y="-47.18" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="79.07" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="5">power</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">cloches sur Do (diatonique sans Fa)</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="40">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="10.85" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="72.27" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="87.143261" bezier-y="65.4486" number="1" />
          </notations>
        </note>
      <note default-x="72.27" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.27" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-49.88" relative-y="-35" font-style="italic" font-size="11">(sans nuances)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="131.57" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.57" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.57" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.5" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.5" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="15" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-145.85">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="72.27" default-y="-175.85">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="34.446993" bezier-y="25.053626" number="2" />
          </notations>
        </note>
      <note default-x="72.27" default-y="-155.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.27" default-y="-135.85">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.57" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="131.57" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="131.57" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="250.19" default-y="-175.85">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.19" default-y="-155.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.19" default-y="-135.85">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="309.5" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-35.502206" bezier-y="23.534504" />
          </notations>
        </note>
      <note default-x="309.5" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="309.5" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-230.85">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-230.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-210.85">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-210.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-195.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-200.85" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="370.6">
      <note default-x="12.96" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="50">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.27" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.27" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.27" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.57" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.57" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.88" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.19" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-87.143261" bezier-y="65.4486" />
          </notations>
        </note>
      <note default-x="309.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.27" default-y="-175.85">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="34.446993" bezier-y="25.053626" number="1" />
          </notations>
        </note>
      <note default-x="72.27" default-y="-155.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.27" default-y="-135.85">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.57" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="131.57" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="131.57" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="190.88" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="250.19" default-y="-175.85">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.19" default-y="-155.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.19" default-y="-135.85">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="309.5" default-y="-170.85">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.502206" bezier-y="23.534504" />
          </notations>
        </note>
      <note default-x="309.5" default-y="-150.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="309.5" default-y="-130.85">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-230.85">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-230.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-210.85">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-210.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-195.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-200.85" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="16" width="574.71">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>81.04</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>109.68</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-16.51" default-y="-48.34" relative-y="-40">
            <other-dynamics>sempre </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Si M : accords parallèles, pédale — « sortant de la brume »</words></direction-type><staff>2</staff></direction><note default-x="59.76" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="26.72" relative-y="40">Peu à peu sortant de la brume</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="147.88" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="51.692174" bezier-y="29.53843" number="1" />
          </notations>
        </note>
      <note default-x="147.88" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.88" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.88" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.63" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.63" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.63" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.63" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="318.67" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="318.67" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="318.67" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="318.67" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="403.41" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="403.41" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="391.41" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="403.41" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="488.16" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-51.692174" bezier-y="29.53843" />
          </notations>
        </note>
      <note default-x="488.16" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="488.16" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="488.16" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="59.76" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="76.366895" bezier-y="57.664938" number="1" />
          </notations>
        </note>
      <note default-x="91.39" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="119.64" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="147.88" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="176.13" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="204.38" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="232.63" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="260.88" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="289.34" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
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
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="318.67" default-y="-154.68">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="346.92" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="375.16" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="403.41" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="431.66" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="459.91" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="488.16" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="516.41" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="544.66" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-68.678117" bezier-y="62.640593" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="-249.68">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-254.68" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="318.67" default-y="-144.68">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="17" width="553.29">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="32.71" default-y="-34.87" relative-y="-40">
            <p />
            <other-dynamics> marqué</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="39.38" default-y="65">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-42.88" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="124.27" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="52.026599" bezier-y="29.633826" number="1" />
          </notations>
        </note>
      <note default-x="124.27" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.27" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.27" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.01" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.01" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.01" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.01" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="297.25" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.25" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.25" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.25" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="382" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="382" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="369.99" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="382" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="466.74" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-52.026599" bezier-y="29.633826" />
          </notations>
        </note>
      <note default-x="466.74" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="466.74" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="466.74" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="38.42" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-5" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-0.78" default-y="49.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="52.34" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="5" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="38.42" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="25" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="38.42" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="35" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="39.38" default-y="-99.68">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-78.11" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-91.17" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="67.77" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>8</duration>
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
          <slur type="start" bezier-x="68.191521" bezier-y="53.819393" number="1" />
          </notations>
        </note>
      <note default-x="96.02" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="124.27" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="152.51" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="180.76" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="209.01" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="239.68" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="267.93" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="297.25" default-y="-154.68">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="325.5" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="353.75" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="382" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="410.25" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="438.49" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="466.74" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="494.99" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="523.24" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-60.483985" bezier-y="62.554416" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="38.42" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-164.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-0.78" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="52.34" default-y="-154.68">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-154.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="38.42" default-y="-144.68">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-144.68" />
        <staff>2</staff>
        </note>
      <note default-x="52.34" default-y="-124.68">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-124.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="38.42" default-y="-119.68">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="70.77" default-y="-114.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="297.25" default-y="-144.68">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="18" width="586.35">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>109.68</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="32.71" default-y="-34.87" relative-y="-40">
            <p />
            <other-dynamics> marqué</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="86.15" default-y="65">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-46.07" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="169.2" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="39.007536" bezier-y="21.993855" number="1" />
          </notations>
        </note>
      <note default-x="169.2" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.2" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.2" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.21" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.21" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.21" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.21" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="338.53" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.587151" bezier-y="28.430477" />
          </notations>
        </note>
      <note default-x="338.53" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.53" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.53" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="420.54" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.904536" bezier-y="-20.406082" number="1" />
          </notations>
        </note>
      <note default-x="420.54" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="420.54" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="420.54" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="502.54" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="502.54" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="490.54" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="502.54" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="85.19" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-5" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-0.78" default-y="49.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.11" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="5" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="85.19" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="25" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="85.19" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="35" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="86.15" default-y="-99.68">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-78.11" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-91.17" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="114.53" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>0</octave>
          </pitch>
        <duration>8</duration>
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
          <slur type="start" bezier-x="28.896056" bezier-y="37.87698" number="2" />
          </notations>
        </note>
      <note default-x="141.87" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="169.2" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="196.54" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="223.87" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="251.21" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="281.87" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="309.21" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="338.53" default-y="-154.68">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="365.87" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-22.235092" bezier-y="40.763252" />
          </notations>
        </note>
      <note default-x="393.2" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="start" bezier-x="35.502137" bezier-y="16.737498" number="2" />
          </notations>
        </note>
      <note default-x="420.54" default-y="-179.68">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="447.87" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="475.21" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="502.54" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="529.88" default-y="-214.68">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="557.22" default-y="-194.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.940005" bezier-y="24.150811" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="85.19" default-y="-159.68">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-164.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-0.78" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.11" default-y="-154.68">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-154.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="85.19" default-y="-144.68">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-144.68" />
        <staff>2</staff>
        </note>
      <note default-x="99.11" default-y="-124.68">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-124.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="85.19" default-y="-119.68">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="117.53" default-y="-114.68" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="338.53" default-y="-144.68">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="19" width="541.65">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-56.84" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Mi♭ : planing transposé (triton Si→Mi♭)</words></direction-type><staff>2</staff></direction><note default-x="36.42" default-y="55">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="118.43" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.890703" bezier-y="23.057817" number="2" />
          </notations>
        </note>
      <note default-x="118.43" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.43" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.43" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.43" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.43" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.43" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.43" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="282.44" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-33.715745" bezier-y="16.98133" />
          </notations>
        </note>
      <note default-x="294.44" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="282.44" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="282.44" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.3" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="31.058273" bezier-y="21.638974" number="2" />
          </notations>
        </note>
      <note default-x="363.3" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="375.3" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.3" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="445.3" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="445.3" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="445.3" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="445.3" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="35.46" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="53.88" default-y="-5" />
        <accidental>flat</accidental>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.298827" bezier-y="-29.824636" />
          </notations>
        </note>
      <note default-x="35.46" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="53.88" default-y="15" />
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="35.46" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="53.88" default-y="25" />
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-62.98" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-76.04" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="36.42" default-y="-199.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="30.129592" bezier-y="22.463351" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-13.07" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="63.76" default-y="-199.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="91.09" default-y="-179.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="118.43" default-y="-179.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="145.76" default-y="-179.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="173.1" default-y="-164.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="200.43" default-y="-164.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="227.77" default-y="-164.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="255.11" default-y="-144.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.401076" bezier-y="12.615795" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-72.88" relative-y="-35" font-style="italic" font-size="12">marqué</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="282.44" default-y="-134.68">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.82965" bezier-y="6.630165" number="1" />
          <slur type="start" bezier-x="11.82965" bezier-y="6.630165" number="3" />
          </notations>
        </note>
      <note default-x="305.54" default-y="-139.68">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="328.64" default-y="-144.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.047567" bezier-y="9.107475" />
          <slur type="stop" number="3" bezier-x="-10.047567" bezier-y="9.107475" />
          </notations>
        </note>
      <note default-x="363.3" default-y="-159.68">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="390.63" default-y="-179.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="417.97" default-y="-199.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="445.3" default-y="-199.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="477.43" default-y="-214.68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="507.35" default-y="-234.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-38.333864" bezier-y="-18.409933" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="16.42" default-y="-199.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="39.92" default-y="-194.68" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="282.44" default-y="-164.68">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.606484" bezier-y="-29.523785" number="1" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-51.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="282.44" default-y="-154.68">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="20" width="582.48">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>174.17</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>123.55</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words default-y="2.58" relative-y="40" font-weight="bold" font-size="11">Augmentez progressivement</words>
          <words font-weight="normal"> (sans presser)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="66.7" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-7.115888" bezier-y="9.525932" />
          </notations>
        </note>
      <note default-x="66.7" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.7" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.7" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.47" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.757577" bezier-y="-18.393505" number="1" />
          </notations>
        </note>
      <note default-x="175.47" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.47" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.47" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.11" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.11" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.11" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="253.11" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="355.7" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.001079" bezier-y="-24.469991" />
          </notations>
        </note>
      <note default-x="367.7" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="355.7" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="355.7" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="430.93" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="36.088953" bezier-y="-16.07748" number="1" />
          </notations>
        </note>
      <note default-x="430.93" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="442.93" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="430.93" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.81" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.81" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="505.81" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="66.7" default-y="-138.55">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="21.51887" bezier-y="7.007223" number="2" />
          <articulations>
            <tenuto default-x="3.18" default-y="61.45" />
            </articulations>
          </notations>
        </note>
      <note default-x="98.83" default-y="-143.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="121.33" default-y="-148.55">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="143.83" default-y="-153.55">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-17.78792" bezier-y="13.99117" />
          </notations>
        </note>
      <note default-x="175.47" default-y="-173.55">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="201.33" default-y="-178.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="228.15" default-y="-193.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="253.11" default-y="-193.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="283.03" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="315.16" default-y="-228.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-40.919512" bezier-y="-20.640842" />
          </notations>
        </note>
      <note default-x="336.23" default-y="-248.55">
        <grace slash="yes" />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="25.072068" number="3" />
          </notations>
        </note>
      <note default-x="355.7" default-y="-148.55">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-12.432569" bezier-y="-20.967481" />
          <slur type="start" bezier-x="12.708802" bezier-y="4.803024" number="3" />
          <articulations>
            <tenuto default-x="3.18" default-y="51.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="378.2" default-y="-153.55">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="399.29" default-y="-158.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-8.605939" bezier-y="10.512873" />
          </notations>
        </note>
      <note default-x="430.93" default-y="-173.55">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="455.89" default-y="-193.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="480.85" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="505.81" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="530.77" default-y="-228.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="555.72" default-y="-248.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="3" bezier-x="-34.670353" bezier-y="-16.645358" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="65.74" default-y="-248.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="84.17" default-y="-248.55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="65.74" default-y="-168.55">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="34.857664" bezier-y="-29.755571" number="2" />
          </notations>
        </note>
      <note default-x="65.74" default-y="-158.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="355.7" default-y="-178.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="26.101732" bezier-y="-28.24537" number="3" />
          </notations>
        </note>
      <note default-x="355.7" default-y="-168.55">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="21" width="545.52">
      <note default-x="13.32" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.699739" bezier-y="-24.86813" />
          </notations>
        </note>
      <note default-x="13.32" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.32" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.54" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="37.046496" bezier-y="-16.385658" number="1" />
          </notations>
        </note>
      <note default-x="122.54" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.54" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.33" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.33" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.33" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.33" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="292.33" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.73462" bezier-y="-25.176309" />
          </notations>
        </note>
      <note default-x="292.33" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="292.33" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="391.93" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="20.386538" bezier-y="-12.763074" number="1" />
          </notations>
        </note>
      <note default-x="391.93" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="403.93" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="391.93" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="468.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.562643" bezier-y="-15.294943" />
          </notations>
        </note>
      <note default-x="468.84" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="468.84" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="468.84" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24.32" default-y="-173.55">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="41.568303" bezier-y="16.969708" number="1" />
          </notations>
        </note>
      <note default-x="24.32" default-y="-138.55">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.44" default-y="-178.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="56.44" default-y="-143.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.95" default-y="-183.55">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.95" default-y="-148.55">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="101.45" default-y="-188.55">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="101.45" default-y="-153.55">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.54" default-y="-183.55">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" placement="below" />
          </notations>
        </note>
      <note default-x="148.4" default-y="-193.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="148.4" default-y="-158.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="178.32" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="178.32" default-y="-178.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="205.33" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="205.33" default-y="-178.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="237.45" default-y="-228.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="237.45" default-y="-193.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="267.37" default-y="-248.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.364067" bezier-y="32.127715" />
          </notations>
        </note>
      <note default-x="267.37" default-y="-213.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="303.33" default-y="-173.55">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="37.415025" bezier-y="15.857403" number="1" />
          </notations>
        </note>
      <note default-x="303.33" default-y="-138.55">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="325.83" default-y="-178.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="325.83" default-y="-143.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="348.33" default-y="-183.55">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="348.33" default-y="-148.55">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="370.83" default-y="-188.55">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="370.83" default-y="-153.55">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="391.93" default-y="-183.55">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" placement="below" />
          </notations>
        </note>
      <note default-x="416.88" default-y="-193.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="416.88" default-y="-158.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="441.84" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="441.84" default-y="-178.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="468.84" default-y="-213.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="468.84" default-y="-178.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="493.8" default-y="-228.55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="493.8" default-y="-193.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="518.76" default-y="-248.55">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.126702" bezier-y="30.256956" />
          </notations>
        </note>
      <note default-x="518.76" default-y="-213.55">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="13.32" default-y="-168.55">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.32" default-y="-158.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="292.33" default-y="-168.55">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="292.33" default-y="-158.55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="22" width="268.69">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>171.11</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.58</staff-distance>
          </staff-layout>
        </print>
      <sound tempo="80" />
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="sus4">suspended-fourth</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">accords sur quartes {Sol–Do–Ré}</words></direction-type><staff>2</staff></direction><note default-x="59.76" default-y="70">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-39.39" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="133.77" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.604394" bezier-y="-16.596104" number="1" />
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-44.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="133.77" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.85" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="197.85" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="113.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="127.85" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>3</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>3</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="25" />
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>3</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="45" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="59.76" default-y="-113.58">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="127.85" default-y="-103.58">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="141.77" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="148.81" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="25.372044" bezier-y="-25.141796" number="2" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="197.85" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="-188.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-188.58" />
        <staff>2</staff>
        </note>
      <note default-x="58.8" default-y="-168.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-168.58" />
        <staff>2</staff>
        </note>
      <note default-x="58.8" default-y="-153.58">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-148.58" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="281.84">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="26.88" default-y="40">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="95.93" default-y="45">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="91.65" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="141.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="70.673942" bezier-y="28.517797" number="3" />
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.95" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="193.98" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="234.01" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="234.01" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-15" />
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.13395" bezier-y="-23.766358" />
          <articulations>
            <tenuto default-x="1.14" default-y="-24.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="25.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="15" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="25" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="187.98" default-y="0">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>4</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.98" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>4</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="26.88" default-y="-148.58">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="38.88" default-y="-143.58">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="26.88" default-y="-138.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="26.88" default-y="-128.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.04" default-y="-163.58">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="104.97" default-y="-158.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="91.04" default-y="-148.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="26.88" default-y="-158.58">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-33.273729" bezier-y="-12.988824" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-74" />
            </articulations>
          </notations>
        </note>
      <note default-x="104.97" default-y="-178.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="31.886565" bezier-y="-19.25481" number="1" />
          </notations>
        </note>
      <note default-x="104.97" default-y="-143.58">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.98" default-y="-173.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.98" default-y="-138.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="290.93">
      <note default-x="17.92" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="17.92" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.99" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="58.99" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.02" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.05" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-44.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="151.05" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.08" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="197.08" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.1" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="243.1" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="12.96" default-y="-143.58">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.96" default-y="-138.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-128.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.96" default-y="-123.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.14" default-y="-163.58">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="104.06" default-y="-158.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="90.14" default-y="-148.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24.96" default-y="-158.58">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.309818" bezier-y="-25.331296" />
          </notations>
        </note>
      <note default-x="24.96" default-y="-148.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.06" default-y="-178.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="33.209005" bezier-y="-19.77126" number="1" />
          </notations>
        </note>
      <note default-x="104.06" default-y="-143.58">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.08" default-y="-173.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.08" default-y="-138.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="286.53">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">descente de basse vers le choral</words></direction-type><staff>2</staff></direction><note default-x="24" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-65.385161" bezier-y="39.151649" />
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="24" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="2.18" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-18.43" default-y="-53.76" relative-y="-40">
            <other-dynamics>più </other-dynamics>
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="113.33" />
        </direction>
      <note default-x="108.51" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="31.284343" bezier-y="21.158252" number="2" />
          </notations>
        </note>
      <note default-x="108.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="192.68" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="192.68" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="92.08" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="92.08" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="92.08" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-158.58">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.73386" bezier-y="-25.847746" />
          </notations>
        </note>
      <note default-x="24" default-y="-148.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-143.58">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-138.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-128.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.04" default-y="-133.58">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="146.65" default-y="-168.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="25.363832" bezier-y="-18.948417" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.65" default-y="-133.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.68" default-y="-173.58">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.68" default-y="-138.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="238.7" default-y="-178.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.7" default-y="-143.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="294.68">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>75.65</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">[1</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="21.93" relative-y="40">2]</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="59.76" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-5.261919" bezier-y="8.456777" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.93" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.119448" bezier-y="21.076614" number="2" />
          </notations>
        </note>
      <note default-x="152.93" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.18" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.18" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="57.76" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="136.51" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="136.51" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="122.59" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="136.51" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="69.76" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.76" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="59.76" default-y="-220.65">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.76" default-y="-185.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.62" default-y="-215.65">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="98.62" default-y="-180.65">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.47" default-y="-220.65">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.47" default-y="-185.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="176.32" default-y="-225.65">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-84.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="176.32" default-y="-190.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.18" default-y="-230.65">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-89.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="215.18" default-y="-195.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="254.03" default-y="-235.65">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.90398" bezier-y="-20.236596" />
          <articulations>
            <tenuto default-x="0.18" default-y="-94.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="254.03" default-y="-200.65">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="248.92">
      <note default-x="14" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.139998" bezier-y="17.957351" />
          </notations>
        </note>
      <note default-x="14" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.71" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-65.11" relative-y="-40">
            <other-dynamics>sff</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="140" />
        </direction>
      <note default-x="169.41" default-y="-40">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="24" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="36" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="14" default-y="-240.65">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="29.207516" bezier-y="-22.203545" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-99.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="14" default-y="-205.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="52.85" default-y="-210.65">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="52.85" default-y="-175.65">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.71" default-y="-220.65">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="91.71" default-y="-185.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.56" default-y="-225.65">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-84.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.56" default-y="-190.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.41" default-y="-230.65">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-89.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="169.41" default-y="-195.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.27" default-y="-240.65">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.207516" bezier-y="-22.203545" />
          <articulations>
            <tenuto default-x="0.18" default-y="-99.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.27" default-y="-205.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="28" width="189.6">
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-weight="bold" font-size="12">Sonore sans dureté</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2.46" default-y="-59.84" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">DO MIXOLYDIEN : choral d'orgue, pédale de Do</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="71.24" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="76.77183" bezier-y="-35.944104" number="1" />
          </notations>
        </note>
      <note default-x="71.24" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.52" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.52" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.52" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.52" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-78.31" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.96" default-y="-160.65">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-190.65">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="73.646861" bezier-y="43.622182" number="2" />
          </notations>
        </note>
      <note default-x="71.24" default-y="-175.65">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-165.65">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-155.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.52" default-y="-185.65">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.52" default-y="-170.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.52" default-y="-160.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.52" default-y="-150.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-210.65">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-215.65" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="1.14" default-y="-75.4" />
            <strong-accent type="down" default-x="1.56" default-y="-81.24" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="29" width="205.2">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">triades parallèles diatoniques (organum)</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.84" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.84" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.84" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.84" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.69" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.69" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.69" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.55" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.55" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.55" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.55" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-170.65">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-165.65" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-155.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-155.65" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-145.65">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-145.65" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-135.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-135.65" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.84" default-y="-175.65">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.84" default-y="-160.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.84" default-y="-150.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.84" default-y="-140.65">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.69" default-y="-180.65">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.69" default-y="-165.65">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.69" default-y="-155.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.69" default-y="-145.65">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.55" default-y="-185.65">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.55" default-y="-170.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.55" default-y="-160.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.55" default-y="-150.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-210.65">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-215.65" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="30" width="189.6">
      <note default-x="12.96" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.24" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-185.65">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-170.65">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-160.65">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.96" default-y="-150.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-200.65">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-185.65">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-175.65">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.24" default-y="-165.65">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.52" default-y="-180.65">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-165.65">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-155.65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.52" default-y="-145.65">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-210.65">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-215.65" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="31" width="282.94">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>94.29</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.93" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.93" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.93" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.93" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.09" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.09" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.09" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.98" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.98" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.98" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="59.76" default-y="-164.29">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-139.29">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-129.29">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.93" default-y="-159.29">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.93" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.93" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.93" default-y="-124.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.09" default-y="-169.29">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-169.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.09" default-y="-154.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-149.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.09" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-139.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.09" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="166.59" default-y="-129.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.98" default-y="-174.29">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.98" default-y="-159.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.98" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.98" default-y="-139.29">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-199.29" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="201.07">
      <note default-x="12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-40.103687" bezier-y="-24.223065" />
          </notations>
        </note>
      <note default-x="12" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="47.095222" bezier-y="-26.391566" number="1" />
          </notations>
        </note>
      <note default-x="131.52" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-174.29">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-33.880559" bezier-y="34.012763" />
          </notations>
        </note>
      <note default-x="12" default-y="-159.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-139.29">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-184.29">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="40.127484" bezier-y="36.945175" number="2" />
          </notations>
        </note>
      <note default-x="131.52" default-y="-169.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-159.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-65.36" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.75" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="221.46">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="">major</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">♭VII — le Si♭ mixolydien</words></direction-type><staff>2</staff></direction><note default-x="16.42" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="16.42" default-y="-179.29">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-164.29">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-154.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-169.29">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-154.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-159.29">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-124.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="15.46" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="33.88" default-y="-199.29" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="201.07">
      <note default-x="12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-45.258823" bezier-y="-29.429809" />
          </notations>
        </note>
      <note default-x="12" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="40.464332" bezier-y="27.372492" number="1" />
          </notations>
        </note>
      <note default-x="131.52" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.52" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-174.29">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-34.182557" bezier-y="39.884767" />
          </notations>
        </note>
      <note default-x="12" default-y="-159.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-139.29">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-184.29">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="38.454618" bezier-y="30.456586" number="2" />
          </notations>
        </note>
      <note default-x="131.52" default-y="-169.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-159.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.52" default-y="-149.29">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-65.36" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.75" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="35" width="221.46">
      <note default-x="16.42" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.17" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.92" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="16.42" default-y="-179.29">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-164.29">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-154.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-169.29">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-154.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.17" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-159.29">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-144.29">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-134.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.92" default-y="-124.29">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="15.46" default-y="-194.29">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="33.88" default-y="-199.29" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="291.77">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>116.88</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-63.58" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v mineur (mixture)</words></direction-type><staff>2</staff></direction><note default-x="63.18" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="79.69" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.18" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="79.69" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.18" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="79.69" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.18" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot placement="below" default-x="79.69" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.58" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.58" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.58" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.58" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.38" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.38" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.38" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.18" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.18" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.18" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.18" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="63.18" default-y="-176.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="79.69" default-y="-171.88" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.18" default-y="-161.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="79.69" default-y="-161.88" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.18" default-y="-151.88">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="79.69" default-y="-151.88" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.18" default-y="-141.88">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="79.69" default-y="-141.88" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-146.88">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-131.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-121.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-111.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <note default-x="200.38" default-y="-176.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.38" default-y="-161.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.38" default-y="-151.88">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.38" default-y="-141.88">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.18" default-y="-166.88">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.18" default-y="-151.88">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.18" default-y="-141.88">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.18" default-y="-131.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="63.18" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-66.25" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="129.42" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="155.58" default-y="-181.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>8</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-166.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>8</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>8</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.58" default-y="-146.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>8</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="37" width="203.97">
      <note default-x="16.42" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="134.98" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.98" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.98" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="16.42" default-y="-176.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-161.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-151.88">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        </note>
      <note default-x="16.42" default-y="-141.88">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="134.98" default-y="-171.88">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.98" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.98" default-y="-146.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.98" default-y="-136.88">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="17.38" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-65" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="83.62" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="38" width="199.55">
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.919518" bezier-y="56.646359" />
          </notations>
        </note>
      <note default-x="12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-90.61" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="130.56" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="44.072621" bezier-y="26.853033" number="1" />
          </notations>
        </note>
      <note default-x="130.56" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="130.56" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="130.56" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-181.88">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-48.919518" bezier-y="56.646359" />
          </notations>
        </note>
      <note default-x="12" default-y="-166.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-146.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="130.56" default-y="-181.88">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="44.072621" bezier-y="26.853033" number="2" />
          </notations>
        </note>
      <note default-x="130.56" default-y="-166.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="130.56" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="130.56" default-y="-146.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-65.22" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.2" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="39" width="216.35">
      <note default-x="12.96" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.16" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.16" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.16" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.16" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.35" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.35" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.35" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-181.88">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-166.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-146.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.16" default-y="-191.88">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.16" default-y="-176.88">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.16" default-y="-166.88">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.16" default-y="-156.88">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.35" default-y="-186.88">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.35" default-y="-171.88">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.35" default-y="-161.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.35" default-y="-151.88">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-221.88" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="40" width="216.35">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I — pédale tenue</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-45" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-36.048396" bezier-y="32.888104" />
          </notations>
        </note>
      <note default-x="12" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-35" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-25" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-15" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-70">
        <rest />
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="80.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-79" />
            <strong-accent type="down" default-x="-2.4" default-y="-84.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.35" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-74" />
            <strong-accent type="down" default-x="-2.4" default-y="-79.84" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-196.88">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-191.88" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-36.048396" bezier-y="34.686284" />
          </notations>
        </note>
      <note default-x="12" default-y="-181.88">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-181.88" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-171.88">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-171.88" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-161.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-161.88" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-65.05" relative-y="-35" font-weight="bold" font-size="12">8</words>
          <words>a</words>
          <words> bassa</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.2" default-y="-216.88">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="249.04">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>199.02</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>84.85</staff-distance>
          </staff-layout>
        </print>
      <note default-x="56.76" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="75.19" default-y="-45" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="56.76" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="75.19" default-y="-35" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="56.76" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="75.19" default-y="-25" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="56.76" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="75.19" default-y="-15" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="92.76" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-59" />
            <strong-accent type="down" default-x="-2.4" default-y="-64.84" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-87.71" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="144.26" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="16.5" />
            <strong-accent type="up" default-x="3.6" default-y="22.34" />
            </articulations>
          </notations>
        </note>
      <note default-x="205.75" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="19" />
            <strong-accent type="up" default-x="3.6" default-y="24.84" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="61.8" default-y="-164.85">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="80.22" default-y="-159.85" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.8" default-y="-149.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="80.22" default-y="-149.85" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.8" default-y="-139.85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="80.22" default-y="-139.85" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.8" default-y="-129.85">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="80.22" default-y="-129.85" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="61.8" default-y="-184.85">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="80.22" default-y="-189.85" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="219.74">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-52.31" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">engloutissement : basse Si♭…</words></direction-type><staff>2</staff></direction><note default-x="25.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="5" />
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-10.61" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-50">
        <rest />
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="78.87" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="74.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="3.18" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="86.45" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.45" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-60">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-129.85">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-129.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-114.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-119.85" />
        <staff>2</staff>
        </note>
      <note default-x="25.92" default-y="-109.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-109.85" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-154.85">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="74.45" default-y="-189.85">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.45" default-y="-154.85">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
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
      <note default-x="135.95" default-y="-189.85">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-154.85">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-154.85">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="219.74">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.37" default-y="-41.66" relative-y="-40">
            <other-dynamics>più </other-dynamics>
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="45.56" />
        </direction>
      <note default-x="25.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="5" />
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-12.54" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-50">
        <rest />
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="78.87" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="74.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="3.18" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="86.45" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.45" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-60">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-129.85">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-129.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-114.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-119.85" />
        <staff>2</staff>
        </note>
      <note default-x="25.92" default-y="-109.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-109.85" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-154.85">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="74.45" default-y="-189.85">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.45" default-y="-154.85">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
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
      <note default-x="135.95" default-y="-189.85">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-154.85">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-154.85">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="44" width="219.74">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2.24" default-y="-39.48" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">…La♭ — descente chromatique, cloches aiguës</words></direction-type><staff>2</staff></direction><note default-x="25.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="5" />
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-14.47" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-50">
        <rest />
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="78.87" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="74.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="3.18" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="86.45" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.45" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-60">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-129.85">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-129.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-114.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-119.85" />
        <staff>2</staff>
        </note>
      <note default-x="25.92" default-y="-109.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-109.85" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-154.85">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="74.45" default-y="-194.85">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-99" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.45" default-y="-159.85">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
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
      <note default-x="135.95" default-y="-194.85">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-159.85">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-154.85">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="219.74">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="12.85" default-y="-41.66" relative-y="-40">
            <other-dynamics>più </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="27.78" />
        </direction>
      <note default-x="25.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="5" />
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-6.75" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-50">
        <rest />
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="78.87" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="74.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="3.18" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="86.45" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.45" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.95" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.95" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.94" default-y="-60">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-129.85">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-129.85" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-114.85">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-119.85" />
        <staff>2</staff>
        </note>
      <note default-x="25.92" default-y="-109.85">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-109.85" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-154.85">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="73.49" default-y="-194.85">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="1.14" default-y="-79.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.49" default-y="-159.85">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="46" width="238.13">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>77.98</staff-distance>
          </staff-layout>
        </print>
      <note default-x="126.29" default-y="-10">
        <rest measure="yes" />
        <duration>144</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="61.76" default-y="-187.98">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.76" default-y="-152.98">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="128.43" default-y="-192.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-0.78" default-y="-84.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="128.43" default-y="-157.98">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="47" width="236.97">
      <attributes>
        <key>
          <fifths>4</fifths>
          <mode>major</mode>
          </key>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="37.45" default-y="-36.32" relative-y="-40">
            <pp />
            <other-dynamics> expressif
         et concentré</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words default-y="7.16" relative-y="40" font-weight="bold">Un peu moins lent</words>
          <words font-weight="normal"> (dans une expression allant grandissante)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <sound tempo="120" />
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">sol# : section médiane, pédale de Sol#</words></direction-type><staff>2</staff></direction><note default-x="65.14" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="122.601401" bezier-y="48.083272" number="1" />
          </notations>
        </note>
      <note default-x="167.54" default-y="-25">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="65.14" default-y="-192.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="83.57" default-y="-192.98" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="65.14" default-y="-157.98">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="83.57" default-y="-152.98" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="48" width="217.64">
      <note default-x="12.96" default-y="-25">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.59" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.21" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-192.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-192.98" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-157.98">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-152.98" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="49" width="217.64">
      <note default-x="12.96" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.59" default-y="-25">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.21" default-y="-40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
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
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-157.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.59" default-y="-127.98">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="148.21" default-y="-127.98">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-192.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-192.98" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="50" width="217.64">
      <note default-x="12.96" default-y="-40">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.59" default-y="-35">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.21" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-192.98">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-192.98" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="51" width="283.4">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>76.96</staff-distance>
          </staff-layout>
        </print>
      <note default-x="112.41" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.01148" bezier-y="7.895446" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-68.8" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="168.8" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="46.871826" bezier-y="34.767601" number="1" />
          </notations>
        </note>
      <note default-x="225.2" default-y="0">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="112.41" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="167.84" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="112.41" default-y="-126.96">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="168.8" default-y="-156.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="36.728281" bezier-y="27.24336" number="2" />
          </notations>
        </note>
      <note default-x="225.2" default-y="-151.96">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="111.45" default-y="-191.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="129.87" default-y="-191.96" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="52" width="200.83">
      <note default-x="29.84" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.24" default-y="10">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.64" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="28.88" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="47.31" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="14.96" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="47.31" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="28.88" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>2</voice>
        <type>whole</type>
        <dot default-x="47.31" default-y="5" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="29.84" default-y="-136.96">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.24" default-y="-141.96">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.64" default-y="-136.96">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-39.297822" bezier-y="23.384791" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="28.88" default-y="-191.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="47.31" default-y="-191.96" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="53" width="183.95">
      <note default-x="12.96" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.05572" bezier-y="32.72983" />
          </notations>
        </note>
      <note default-x="12.96" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-28.04" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="74.32" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="48.260264" bezier-y="27.922576" number="1" />
          </notations>
        </note>
      <note default-x="74.32" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.75" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.75" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.4" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-126.96">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="69.36" default-y="-121.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="43.362625" bezier-y="-49.793166" number="2" />
          </notations>
        </note>
      <note default-x="125.75" default-y="-116.96">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-146.96">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="68.4" default-y="-96.96">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-191.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-191.96" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="54" width="275.87">
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="62.76" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="109.84" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.84" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.27" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.27" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.67" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-46.361721" bezier-y="32.149546" />
          </notations>
        </note>
      <note default-x="217.67" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="90" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="103.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="43.92" default-y="-191.96">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="143.22" default-y="-191.96" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="124.8" default-y="-156.96">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="143.22" default-y="-151.96" />
        <staff>2</staff>
        </note>
      <note default-x="110.88" default-y="-146.96">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="143.22" default-y="-141.96" />
        <staff>2</staff>
        </note>
      <note default-x="124.8" default-y="-141.96">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="143.22" default-y="-141.96" />
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="110.88" default-y="-251.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="126.8" default-y="-251.96" />
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="113.92" default-y="-161.96">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>8</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.27" default-y="-166.96">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>8</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="217.67" default-y="-161.96">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>8</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-50.072802" bezier-y="-43.212535" />
          </notations>
        </note>
      </measure>
    <measure number="55" width="183.95">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2.24" default-y="-47.84" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø7 de do# — couleur pure sur pédale</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.304646" bezier-y="17.243022" number="1" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.36" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.36" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.75" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="125.75" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="73.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.36" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-116.96">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="73.36" default-y="-126.96">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="25.023083" bezier-y="-15.919193" number="2" />
          </notations>
        </note>
      <note default-x="73.36" default-y="-116.96">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="69.36" default-y="-141.96">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="69.36" default-y="-106.96">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.75" default-y="-136.96">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.75" default-y="-101.96">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-191.96">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-191.96" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-156.96">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-151.96" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="56" width="353.67">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>163.22</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>106.5</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-95.41" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="124.41" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.41" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="161.67" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.67" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.94" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.94" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.94" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.94" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="272.34" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="272.34" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.6" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.814447" bezier-y="21.417727" />
          </notations>
        </note>
      <note default-x="309.6" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
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
        <duration>144</duration>
        </backup>
      <note default-x="109.41" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="109.41" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="257.34" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="257.34" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="119.41" default-y="-156.5" print-object="no">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="216.94" default-y="-156.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="216.94" default-y="-146.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="216.94" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="119.41" default-y="-161.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.41" default-y="-146.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.41" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.41" default-y="-121.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.94" default-y="-166.5">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.94" default-y="-131.5">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="267.34" default-y="-171.5">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-33.81138" bezier-y="-20.688885" />
          </notations>
        </note>
      <note default-x="267.34" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="123.41" default-y="-221.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="141.83" default-y="-221.5" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="123.41" default-y="-186.5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="141.83" default-y="-181.5" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="57" width="204.95">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-60.01" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12.96" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="61.51239" bezier-y="33.5036" number="1" />
          </notations>
        </note>
      <note default-x="12.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.96" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-87.6" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="76.36" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.36" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.76" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.76" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="80.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="80.36" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-146.5">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="76.36" default-y="-171.5">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="45.653645" bezier-y="31.183594" number="2" />
          </notations>
        </note>
      <note default-x="76.36" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.76" default-y="-166.5">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.76" default-y="-131.5">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="80.36" default-y="-156.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="80.36" default-y="-146.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-221.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-221.5" />
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-186.5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-181.5" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="282.51">
      <note default-x="29" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="29" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.27" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.27" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.53" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.53" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.53" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.93" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.93" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="214.2" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-61.319562" bezier-y="31.623639" />
          </notations>
        </note>
      <note default-x="214.2" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="14" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="14" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="171.93" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-151.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-146.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-131.5">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-116.5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.53" default-y="-166.5">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.53" default-y="-131.5">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.93" default-y="-171.5">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-45.653645" bezier-y="31.183594" />
          </notations>
        </note>
      <note default-x="171.93" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="121.53" default-y="-156.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="121.53" default-y="-146.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="121.53" default-y="-136.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>12</duration>
        </forward>
      <forward>
        <duration>6</duration>
        </forward>
      <forward>
        <duration>3</duration>
        </forward>
      <note default-x="257.66" default-y="-221.5">
        <grace slash="yes" />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <voice>8</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="-831.300476" bezier-y="82.33639" number="1" />
          </notations>
        </note>
      <note default-x="250.36" default-y="-221.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <voice>8</voice>
        <type size="cue">32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-821.874775" bezier-y="82.33639" />
          <slur type="start" bezier-x="29.047286" bezier-y="-13.460333" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="59" width="286.87">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-52.2" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">F#7 : couleur (IV7) sur pédale</words></direction-type><staff>2</staff></direction><note default-x="105.88" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.438692" bezier-y="17.216453" number="2" />
          </notations>
        </note>
      <note default-x="105.88" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.24" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.24" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.67" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.67" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="94.88" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="94.88" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.39" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="157.32" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="43.92" default-y="-221.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="98.38" default-y="-221.5" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="95.84" default-y="-196.5">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.78033" bezier-y="-22.494042" />
          </notations>
        </note>
      <note default-x="107.84" default-y="-186.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.84" default-y="-181.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.84" default-y="-171.5">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.84" default-y="-161.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.24" default-y="-211.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.24" default-y="-176.5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.67" default-y="-216.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.67" default-y="-181.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="93.92" default-y="-281.5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="109.84" default-y="-281.5" />
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="157.32" default-y="-206.5">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="143.39" default-y="-196.5">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="157.32" default-y="-191.5">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="397.48">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>115.31</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-73.4" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="118.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="104.95" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="118.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="118.87" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="291.71" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="291.71" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.53" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-37.34718" bezier-y="24.066641" />
          </notations>
        </note>
      <note default-x="329.53" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="275.71" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="287.71" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="119.83" default-y="-145.31">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="162.24" default-y="-230.31">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="8.883392" bezier-y="39.534446" number="1" />
          </notations>
        </note>
      <note default-x="204.06" default-y="-195.31">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.89" default-y="-175.31">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.71" default-y="-165.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.71" default-y="-130.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="329.53" default-y="-155.31">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-37.154182" bezier-y="2.296898" />
          </notations>
        </note>
      <note default-x="329.53" default-y="-120.31">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="118.87" default-y="-210.31">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="104.95" default-y="-205.31">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="118.87" default-y="-200.31">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="118.87" default-y="-190.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="118.87" default-y="-175.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="287.71" default-y="-155.31">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="275.71" default-y="-145.31">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="287.71" default-y="-140.31">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>12</duration>
        </forward>
      <forward>
        <duration>6</duration>
        </forward>
      <forward>
        <duration>3</duration>
        </forward>
      <note default-x="372.64" default-y="-230.31">
        <grace slash="yes" />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <voice>8</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notehead>none</notehead>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="-381.995031" bezier-y="82.33639" number="1" />
          </notations>
        </note>
      <note default-x="365.33" default-y="-230.31">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <voice>8</voice>
        <type size="cue">32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-374.594825" bezier-y="82.33639" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="274.87">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-38" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <sound tempo="112" />
      <note default-x="95.88" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="39.654136" bezier-y="26.093913" number="1" />
          </notations>
        </note>
      <note default-x="95.88" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.57" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.57" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="210.34" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="210.34" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="84.88" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.88" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.73" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="146.65" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="43.92" default-y="-230.31">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="88.38" default-y="-230.31" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="85.84" default-y="-205.31">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="97.84" default-y="-195.31">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.84" default-y="-190.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.84" default-y="-180.31">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.84" default-y="-170.31">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.57" default-y="-220.31">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="30.263495" bezier-y="-23.56634" number="2" />
          </notations>
        </note>
      <note default-x="161.57" default-y="-185.31">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="210.34" default-y="-225.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="210.34" default-y="-190.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="83.92" default-y="-290.31">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>7</voice>
        <type>whole</type>
        <dot default-x="99.84" default-y="-290.31" />
        <notehead>none</notehead>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <forward>
        <duration>48</duration>
        </forward>
      <note default-x="146.65" default-y="-215.31">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="132.73" default-y="-205.31">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="146.65" default-y="-200.31">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>8</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="62" width="216.88">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-97.96" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="31.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="31.84" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 de Sol#</words></direction-type><staff>2</staff></direction><note default-x="89.61" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-32.951645" bezier-y="32.202949" />
          </notations>
        </note>
      <note default-x="89.61" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="17.98" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words font-family="FreeSerif" font-size="12" font-style="italic" default-y="-103.3">molto dim.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="-103.3" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="152.35" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="44.367064" bezier-y="-27.202741" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.35" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>2</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>double-sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.35" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.35" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.35" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="25.92" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>96</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <backup>
        <duration>120</duration>
        </backup>
      <note default-x="40.84" default-y="-210.31">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="40.84" default-y="-175.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.61" default-y="-225.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.387444" bezier-y="-22.047219" />
          </notations>
        </note>
      <note default-x="89.61" default-y="-190.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="152.35" default-y="-175.31">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="45.308313" bezier-y="25.668037" number="2" />
          <articulations>
            <tenuto default-x="0.18" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.35" default-y="-155.31">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.35" default-y="-145.31">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="25.92" default-y="-205.31">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-200.31">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="25.92" default-y="-190.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="63" width="238.77">
      <note default-x="17.26" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="17.26" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.26" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="29.26" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.26" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.99" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.99" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.99" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.99" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.99" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.73" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.73" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.73" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.73" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.73" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.15" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.15" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.15" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="207.15" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.15" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="17.26" default-y="-180.31">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="17.26" default-y="-160.31">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.26" default-y="-150.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.99" default-y="-185.31">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-59" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.99" default-y="-165.31">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.99" default-y="-155.31">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.73" default-y="-190.31">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-64" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.73" default-y="-170.31">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.73" default-y="-160.31">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="195.15" default-y="-180.31">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.15" default-y="-160.31">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="195.15" default-y="-150.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="283.66">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>104.98</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>95.56</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Sol# : I(7) — la cadence la plus fonctionnelle de la pièce</words></direction-type><staff>2</staff></direction><note default-x="130.43" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.621311" bezier-y="-10.811776" />
          <articulations>
            <tenuto placement="above" default-x="-0.78" default-y="-15.92" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.43" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="130.43" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="144.35" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="130.43" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-65.13" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-100.53" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="221.67" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.506132" bezier-y="3.032128" number="1" />
          </notations>
        </note>
      <note default-x="221.67" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <alter>2</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>double-sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.67" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.67" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.67" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="130.43" default-y="-175.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-10.249889" bezier-y="10.188499" />
          <articulations>
            <tenuto default-x="-0.78" default-y="-49.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.43" default-y="-155.56">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="130.43" default-y="-145.56">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="221.67" default-y="-190.56">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="23.156904" bezier-y="-10.493773" number="2" />
          </notations>
        </note>
      <note default-x="221.67" default-y="-170.56">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.67" default-y="-160.56">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="171.29">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="18.06" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.515145" bezier-y="24.147918" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="18.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="31.98" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="18.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-100.53" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="109.3" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="17.864372" bezier-y="-18.089381" number="1" />
          </notations>
        </note>
      <note default-x="109.3" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.3" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.3" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.3" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="18.06" default-y="-175.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-17.864372" bezier-y="-18.089381" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-155.56">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-145.56">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="109.3" default-y="-160.56">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.581479" bezier-y="11.37605" number="2" />
          </notations>
        </note>
      <note default-x="109.3" default-y="-140.56">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.3" default-y="-130.56">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="66" width="171.29">
      <note default-x="18.06" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-65" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-23.156904" bezier-y="-10.493773" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-55" />
        <accidental>sharp</accidental>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-45" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.98" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-35" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-25" />
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="18.06" default-y="-175.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-170.56" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-18.439797" bezier-y="17.300624" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-155.56">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-150.56" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-145.56">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-140.56" />
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="19.02" default-y="-195.56">
        <rest />
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="78.25" default-y="-210.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="1.14" default-y="-90.4" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="67" width="171.29">
      <note default-x="18.06" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-65" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-45" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="31.98" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-35" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="50.41" default-y="-25" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="18.06" default-y="-175.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-170.56" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-155.56">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-150.56" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.06" default-y="-145.56">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="36.48" default-y="-140.56" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="19.02" default-y="-210.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="78.25" default-y="-210.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="-84.4" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="68" width="165.23">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">transition : dyades Fa#/Sol# – Do/Ré (triton)</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="72.19" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-0.78" default-y="-69.4" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-64.03" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <octave-shift type="up" size="8" number="1" default-y="-77.09" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12" default-y="-180.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-180.56" />
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-0.78" default-y="-54.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="25.92" default-y="-175.56">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-170.56" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="69" width="165.23">
      <note default-x="12.96" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="72.19" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-0.78" default-y="-69.4" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-180.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-180.56" />
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-0.78" default-y="-54.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="25.92" default-y="-175.56">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="44.34" default-y="-170.56" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="70" width="433.15">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>100.95</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-75.95" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="112.41" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="29.645724" bezier-y="138.148333" number="1" />
          </notations>
        </note>
      <note default-x="143.25" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.09" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="199.82" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="225.54" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="251.27" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="276.99" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="302.72" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="328.45" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="354.17" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="379.9" default-y="-60">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="405.62" default-y="-55">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-81.14" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="111.45" default-y="-185.95">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="143.79" default-y="-185.95" />
        <staff>2</staff>
        </note>
      <note default-x="125.37" default-y="-180.95">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="143.79" default-y="-175.95" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="328.05">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-84.3" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="153.87" default-y="-10">
        <rest measure="yes" />
        <duration>144</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.04" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.77" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.49" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="89.22" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.94" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="140.67" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="166.39" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="192.12" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="217.84" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="243.57" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="269.29" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="295.02" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="153.010829" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="72" width="366.81">
      <attributes>
        <key>
          <fifths>0</fifths>
          <mode>major</mode>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-48.9" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-weight="bold">au Mouv</words>
          <words>t</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <sound tempo="104" />
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Do : écho du choral, submergé (pédale Do–Sol–Ré)</words></direction-type><staff>2</staff></direction><note default-x="56.3" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic">Comme un écho de la
</words>
          <words>phrase entendue précédemment</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="159.21" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.294029" bezier-y="23.262151" number="1" />
          </notations>
        </note>
      <note default-x="159.21" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="159.21" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="159.21" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.11" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.11" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.11" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.11" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-78.43" relative-y="-35" font-style="italic">Flottant
</words>
          <words>     et sourd</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="56.3" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="43.082044" bezier-y="-44.452333" number="2" />
          </notations>
        </note>
      <note default-x="82.03" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="107.75" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="133.48" default-y="-180.95">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="159.21" default-y="-200.95">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="184.93" default-y="-180.95">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="210.66" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="236.38" default-y="-160.95">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.11" default-y="-165.95">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="287.83" default-y="-180.95">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="313.56" default-y="-200.95">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="339.28" default-y="-180.95">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="73" width="407.84">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>162.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.76" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="76.26" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.76" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="76.26" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.76" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="76.26" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.76" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="76.26" default-y="35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.9" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.9" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.9" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.9" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.62" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.62" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.62" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.62" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="348.33" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="348.33" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="348.33" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="348.33" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-98.16" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="59.76" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="88.62" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="117.48" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="146.33" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="175.19" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="204.05" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="232.9" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.76" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="290.62" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="319.47" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="348.33" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="377.19" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.334732" bezier-y="-64.854462" />
          </notations>
        </note>
      </measure>
    <measure number="74" width="360.08">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="-25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="242.85" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="242.85" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="242.85" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="242.85" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="88.019768" bezier-y="-65.552212" number="2" />
          </notations>
        </note>
      <note default-x="40.86" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="69.71" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.57" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="127.43" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="156.28" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.14" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="242.85" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="271.71" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="300.57" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="329.42" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="75" width="360.08">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.71" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.71" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.71" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.71" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="143.93" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="143.93" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.43" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="143.93" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.57" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.57" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.57" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.57" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.86" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="69.71" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.57" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="127.43" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="156.28" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.14" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="242.85" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="271.71" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="300.57" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="329.42" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-88.918057" bezier-y="-62.236579" />
          </notations>
        </note>
      </measure>
    <measure number="76" width="407.08">
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
      <note default-x="58.8" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.583249" bezier-y="8.033103" />
          </notations>
        </note>
      <note default-x="58.8" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="290.11" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="72.375301" bezier-y="38.351169" number="1" />
          </notations>
        </note>
      <note default-x="290.11" default-y="-25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.11" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.11" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-98.15" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="59.76" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="88.001652" bezier-y="-65.543596" number="2" />
          </notations>
        </note>
      <note default-x="88.56" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="117.35" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="146.14" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.94" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="203.73" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="232.52" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.32" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="290.11" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="318.9" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="347.7" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="376.49" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="77" width="360.64">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">♭VII (écho mixolydien)</words></direction-type><staff>2</staff></direction><note default-x="13.32" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.32" default-y="-20">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.32" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.32" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.49" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.49" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.49" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.49" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.67" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.67" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.67" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.67" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="13.32" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="42.11" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="70.91" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="99.7" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="128.49" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.29" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="186.08" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214.87" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.67" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="272.46" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="301.25" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.05" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-88.900517" bezier-y="-62.227841" />
          </notations>
        </note>
      </measure>
    <measure number="78" width="360.28">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-72.509213" bezier-y="36.795702" />
          </notations>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="243.31" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="21.116682" bezier-y="17.003816" number="1" />
          </notations>
        </note>
      <note default-x="243.31" default-y="-25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.31" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="243.31" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="48.868669" bezier-y="-47.061143" number="2" />
          </notations>
        </note>
      <note default-x="41.75" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="70.55" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="99.34" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="128.13" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="156.93" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.72" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="214.51" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="243.31" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="272.1" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="300.89" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="329.69" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="79" width="404.79">
      <print new-page="yes" page-number="6">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>79.42</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.08" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.08" default-y="-20">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.08" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.08" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.39" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.39" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.39" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.39" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.69" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.69" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.69" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="288.69" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-98.09" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="60.08" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="88.66" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="117.23" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="145.81" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="174.39" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="202.96" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="231.54" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="260.11" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="288.69" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="317.26" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="345.84" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="374.41" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.155727" bezier-y="-64.436047" />
          </notations>
        </note>
      </measure>
    <measure number="80" width="361.13">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v (écho)</words></direction-type><staff>2</staff></direction><note default-x="16.42" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="32.92" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="32.92" default-y="5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="32.92" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="32.92" default-y="35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-69.7" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="187.87" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.87" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.87" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.87" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.02" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.02" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.02" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.02" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.18" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.18" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.18" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.18" default-y="40">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
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
        <duration>144</duration>
        </backup>
      <note default-x="16.42" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="87.875678" bezier-y="-65.483667" number="2" />
          </notations>
        </note>
      <note default-x="45" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.57" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="102.15" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="130.72" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="159.3" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="187.87" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="216.45" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="245.02" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="273.6" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="302.18" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.75" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="81" width="362.09">
      <note default-x="16.42" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>flat</accidental>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="16.42" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-67.47" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="245.98" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.98" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.98" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.98" default-y="35">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="17.38" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="45.96" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="74.53" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="103.11" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.68" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="160.26" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="188.83" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="217.41" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="245.98" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="274.56" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.14" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="331.71" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-88.778542" bezier-y="-62.167067" />
          </notations>
        </note>
      </measure>
    <measure number="82" width="438.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>84.6</staff-distance>
          </staff-layout>
        </print>
      <note default-x="58.8" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="-5" />
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.583249" bezier-y="8.033103" />
          </notations>
        </note>
      <note default-x="58.8" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="15" />
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="77.22" default-y="25" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-99.95" relative-y="-35" font-weight="bold" font-style="italic" font-size="12">a</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="59.76" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="95.733199" bezier-y="-67.112318" number="1" />
          </notations>
        </note>
      <note default-x="91.15" default-y="-144.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="122.53" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="153.92" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.31" default-y="-184.6">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="216.69" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="248.08" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="279.46" default-y="-144.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="310.85" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="342.23" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="373.62" default-y="-184.6">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="405" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="83" width="390.43">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="13.81" default-y="-46.48" relative-y="-40">
            <other-dynamics>più </other-dynamics>
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="28.0237" bezier-y="22.72981" number="2" />
          </notations>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.31" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="216.81" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-29.190388" bezier-y="21.210689" />
          </notations>
        </note>
      <note default-x="200.31" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="216.81" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.31" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="216.81" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.31" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>72</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="216.81" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.39" default-y="-144.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="74.77" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="106.16" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="137.54" default-y="-184.6">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="168.93" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="200.31" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="231.7" default-y="-144.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="263.08" default-y="-149.6">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="294.47" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="325.86" default-y="-184.6">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="357.24" default-y="-164.6">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-96.391395" bezier-y="-65.177214" />
          </notations>
        </note>
      </measure>
    <measure number="84" width="299.39">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <sound tempo="60" />
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">« Dans la sonorité du début » : cloches pentatoniques</words></direction-type><staff>2</staff></direction><note default-x="12.96" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="15.7" relative-y="40">Dans la sonorité du début</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="60.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="28.679173" bezier-y="28.867571" number="1" />
          </notations>
        </note>
      <note default-x="60.04" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.04" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.04" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.2" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.19" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.2" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="154.2" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="2" default-y="50.45" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="203.43" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.43" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.43" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.43" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.18987" bezier-y="28.350866" />
          </notations>
        </note>
      <note default-x="250.51" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="238.51" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.51" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12.96" default-y="-134.6">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="60.04" default-y="-179.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="13.387068" bezier-y="48.3086" number="1" />
          </notations>
        </note>
      <note default-x="60.04" default-y="-164.6">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.04" default-y="-149.6">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="107.12" default-y="-139.6">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="107.12" default-y="-124.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="107.12" default-y="-109.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.2" default-y="-119.6">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.19" default-y="-114.6">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="154.2" default-y="-94.6">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="203.43" default-y="-169.6">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.43" default-y="-154.6">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.43" default-y="-139.6">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.51" default-y="-164.6">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.159911" bezier-y="38.256933" />
          </notations>
        </note>
      <note default-x="250.51" default-y="-149.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.51" default-y="-134.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-184.6">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="85" width="345.56">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>77.54</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <sound tempo="54" />
      <note default-x="72.72" default-y="5">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="91.15" default-y="5" />
        <staff>1</staff>
        </note>
      <note default-x="72.72" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="91.15" default-y="15" />
        <staff>1</staff>
        </note>
      <note default-x="58.8" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="91.15" default-y="25" />
        <staff>1</staff>
        </note>
      <note default-x="72.72" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>7</octave>
          </pitch>
        <duration>144</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="91.15" default-y="45" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="59.76" default-y="-30">
        <rest />
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="102.81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="28.622709" bezier-y="-21.952706" number="1" />
          </notations>
        </note>
      <note default-x="102.81" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.8" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.81" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.85" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.85" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="133.85" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.85" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="211.73" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.72" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="211.73" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="211.73" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="53.28" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="254.77" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="254.77" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="242.77" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="254.77" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.81" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.876837" bezier-y="-23.548306" />
          </notations>
        </note>
      <note default-x="297.81" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="285.81" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.81" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="59.76" default-y="-127.54">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="102.81" default-y="-137.54">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="31.450378" bezier-y="20.38475" number="1" />
          </notations>
        </note>
      <note default-x="102.81" default-y="-122.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.81" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.85" default-y="-132.54">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.85" default-y="-117.54">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.85" default-y="-102.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="199.72" default-y="-172.54">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.73" default-y="-167.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.73" default-y="-147.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="254.77" default-y="-162.54">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="254.77" default-y="-147.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="254.77" default-y="-132.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="297.81" default-y="-157.54">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.51104" bezier-y="24.532039" />
          </notations>
        </note>
      <note default-x="297.81" default-y="-142.54">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="297.81" default-y="-127.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="58.8" default-y="-212.54">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="58.8" default-y="-192.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="58.8" default-y="-177.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="86" width="203.35">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="24" default-y="5">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="7.71" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="87.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="1.14" default-y="14.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.6" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="87.6" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="87.6" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-122.54">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="18.321555" bezier-y="6.168707" number="1" />
          <slur type="start" bezier-x="18.321555" bezier-y="6.168707" number="2" />
          </notations>
        </note>
      <note default-x="24" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="36" default-y="-102.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-87.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.6" default-y="-132.54">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.560669" bezier-y="16.802558" />
          <slur type="stop" number="2" bezier-x="-9.560669" bezier-y="16.802558" />
          </notations>
        </note>
      <note default-x="87.6" default-y="-122.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="87.6" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="87.6" default-y="-97.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-147.54">
        <rest />
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="136.99" default-y="-212.54">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.99" default-y="-192.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.99" default-y="-177.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="87" width="203.35">
      <sound tempo="40" />
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="68.31" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="24" default-y="5">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>7</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="87.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="1.14" default-y="14.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.6" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.6" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.6" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-122.54">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="18.321555" bezier-y="6.168707" number="1" />
          <slur type="start" bezier-x="18.321555" bezier-y="6.168707" number="2" />
          </notations>
        </note>
      <note default-x="24" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="36" default-y="-102.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="24" default-y="-87.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.6" default-y="-132.54">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-9.560669" bezier-y="16.802558" />
          <slur type="stop" number="2" bezier-x="-9.560669" bezier-y="16.802558" />
          </notations>
        </note>
      <note default-x="87.6" default-y="-122.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.6" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.6" default-y="-97.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>96</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="24" default-y="-147.54">
        <rest />
        <duration>96</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="136.99" default-y="-212.54">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="136.99" default-y="-192.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="136.99" default-y="-177.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="88" width="137.53">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I — Do majeur pur, conclusion</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-25" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-15" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-5" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="5" />
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-132.54">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-132.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-122.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-122.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-102.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-97.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-92.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-212.54">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-212.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-192.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-192.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="-177.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>144</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <dot default-x="30.42" default-y="-182.54" />
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="89" width="238.21">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="55.04" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="98.08" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="162.65" default-y="-20">
        <rest />
        <duration>48</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-132.54">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-122.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-107.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-97.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="55.04" default-y="-137.54">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="98.08" default-y="-137.54">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="162.65" default-y="-137.54">
        <rest />
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>144</duration>
        </backup>
      <note default-x="12" default-y="-212.54">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-192.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="-177.54">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>48</duration>
        </forward>
      <forward>
        <duration>24</duration>
        </forward>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — une pastille par mesure porteuse d'un
 * événement sonore distinct (les mesures de continuation pure ne sont pas
 * dupliquées). "degre" porte un chiffre romain SEULEMENT quand une vraie
 * fonction existe (mesures 62-64) ; ailleurs, une étiquette descriptive
 * (l'objet sonore lui-même), conformément à l'avertissement de méthode du
 * commentaire d'en-tête.
 */
export const CATHEDRALE_ENGLOUTIE_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Quintes à vide + pentatonique", degre: "{Sol-La-Si-Ré-Mi}, aucune tierce", fonction: "?" },
  { numero: 3,  nom: "Planing (quintes)",              degre: "basse Sol→Fa",                    fonction: "?" },
  { numero: 5,  nom: "Planing (quintes)",               degre: "basse →Mi",                       fonction: "?" },
  { numero: 6,  nom: "Thème modal en octaves",          degre: "Mi-Do#-Sol#-Ré#… (monodie)",       fonction: "?" },
  { numero: 14, nom: "Cloches sur Do",                  degre: "{Do-Ré-Mi-Sol-La-Si}, sans Fa",    fonction: "?" },
  { numero: 16, nom: "Accords parallèles (Si M)",        degre: "pédale de Si",                     fonction: "?" },
  { numero: 19, nom: "Planing transposé (Mib)",          degre: "triton Si→Mib",                    fonction: "?" },
  { numero: 22, nom: "Accords de quartes",               degre: "{Sol-Do-Ré}",                      fonction: "?" },
  { numero: 28, nom: "Choral d'orgue (Do mixolydien)",   degre: "organum, pédale de Do",             fonction: "?" },
  { numero: 33, nom: "Sib (triade parallèle)",           degre: "♭VII mixolydien",                  fonction: "?" },
  { numero: 36, nom: "Sol m (triade parallèle)",         degre: "v (mixture)",                      fonction: "?" },
  { numero: 38, nom: "Fa (triade parallèle)",            degre: "IV (organum)",                     fonction: "?" },
  { numero: 40, nom: "Do (retour, pédale tenue)",        degre: "I (organum)",                      fonction: "?" },
  { numero: 42, nom: "Engloutissement",                  degre: "basse Sib… (quartes)",              fonction: "?" },
  { numero: 44, nom: "Cloches aiguës",                   degre: "…Lab, chromatisme descendant",      fonction: "?" },
  { numero: 47, nom: "Pédale de Sol#",                   degre: "section médiane",                  fonction: "?" },
  { numero: 55, nom: "Ré#ø7 (couleur pure)",             degre: "iiø7 de do#, timbre seul",          fonction: "?" },
  { numero: 59, nom: "Fa#7 (couleur)",                   degre: "IV7 sur pédale",                    fonction: "?" },
  { numero: 62, nom: "Ré#7",                             degre: "V7 de Sol#",                        fonction: "D" },
  { numero: 64, nom: "Sol#(7)",                          degre: "I(7) — cadence authentique",        fonction: "T" },
  { numero: 68, nom: "Dyades en triton",                 degre: "Fa#/Sol# – Do/Ré",                  fonction: "?" },
  { numero: 72, nom: "Écho du choral (Do)",              degre: "pédale composite Do-Sol-Ré",       fonction: "?" },
  { numero: 77, nom: "Sib (écho)",                       degre: "♭VII, écho mixolydien",             fonction: "?" },
  { numero: 80, nom: "Sol m (écho)",                     degre: "v (écho)",                          fonction: "?" },
  { numero: 84, nom: "Cloches pentatoniques (retour)",   degre: "{Sol-La-Si-Ré-Mi}",                 fonction: "?" },
  { numero: 88, nom: "Do majeur pur",                    degre: "I — la tierce enfin accordée",      fonction: "T" },
];

export const CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Sans tonalité fonctionnelle fixe — pentatonique et modes (mixolydien), avec une unique tonicisation réelle (sol# dièse, m.47-67).",
  metrique: "6/4. Tempo 60 à la noire pointée, très variable (jusqu'à 120 au climax, retombant à 40 en clôture).",
  forme: "Arche narrative épousant la légende d'Ys : émersion de la cathédrale, plein carillon, engloutissement, écho sous-marin, retour au silence.",
  sections: [
    {
      label: "Mesures 1-15",
      titre: "Les cloches",
      chiffrage: "Quintes à vide + pentatonique — planing Sol→Fa→Mi — cloches sur Do",
      fonctions: "? (aucune fonction, sonorité pure)",
      texte:
        "L'accord inaugural dit tout : des quintes à vide empilées sur six octaves (Sol1 à Ré7), et à l'intérieur un agrégat pentatonique complet {Sol-La-Si-Ré-Mi} — aucune tierce, aucune sensible, aucune note qui trancherait entre les modes. La basse descend ensuite Sol-Fa-Mi sous les mêmes cloches : du planing intégral, les accords glissant en parallèle sans qu'aucun ne « fonctionne ». Un thème modal en pures octaves flotte par-dessus, monodie sans harmonie. Les cloches reviennent sur Do (mesure 14) : même sonorité, transposée, toujours sans tierce.",
    },
    {
      label: "Mesures 16-27",
      titre: "L'émersion",
      chiffrage: "Si M (pédale) — Mib (triton) — quartes {Sol-Do-Ré}",
      fonctions: "?",
      texte:
        "Des accords parallèles s'installent sur pédale de Si — la cathédrale « sortant de la brume ». Puis, sans transition, la même matière est transposée à Mib : un saut de triton entre les deux plans, la relation la plus antitonale qui soit, utilisée ici comme un simple changement d'éclairage. Des accords de quartes {Sol-Do-Ré} et une longue descente de basse préparent le sommet à venir.",
    },
    {
      label: "Mesures 28-41",
      titre: "Le choral : le climax sans dominante",
      chiffrage: "Do mixolydien — Sol, Fa, ré m, la m, mi m, ♭Sib (♭VII), sol m (v) — Do",
      fonctions: "? (organum parallèle)",
      texte:
        "La cathédrale sonne à pleine voix : un choral d'orgue en Do mixolydien sur pédale de Do inamovible, des triades diatoniques parallèles traitées en organum géant, avec la couleur signature du mode — le Sib, septième abaissée (♭VII) — et le v mineur en mixture. Quatorze mesures de triomphe sans la moindre dominante fonctionnelle : le plus grand climax de la littérature pianistique construit exclusivement en plagal et en parallèle.",
    },
    {
      label: "Mesures 42-46",
      titre: "L'engloutissement",
      chiffrage: "Quartes {Sol-Do-Ré} — basse Sib…Lab (chromatique)",
      fonctions: "?",
      texte:
        "Sur les mêmes accords de quartes, la basse coule par degrés chromatiques (Sib, puis Lab), pendant que des cloches aiguës sonnent Do-Ré au sommet du clavier — la cathédrale s'enfonce par le grave tandis que l'aigu continue de carillonner.",
    },
    {
      label: "Mesures 47-67",
      titre: "La section médiane : une relique de grammaire au fond de l'eau",
      chiffrage: "Pédale de sol# — Ré#ø7 (couleur) — Fa#7 (couleur) — Ré#7 → Sol#(7)",
      fonctions: "? — ? — D — T (la seule vraie cadence de la pièce)",
      texte:
        "Une pédale de sol# quasi permanente porte une reprise en lamentation du thème. D'abord la couleur : un accord demi-diminué (Ré#ø7) oscille sur la pédale — ni sensible ni sixte augmentée, ici un pur timbre. Puis Fa#7, couleur encore. Et soudain, enfouie dans la section la plus sombre de la pièce, une authentique progression V7-I (Ré#7 vers Sol#, avec Fa## et Si# dûment épelés) : la seule cadence fonctionnelle de toute la Cathédrale engloutie.",
    },
    {
      label: "Mesures 68-83",
      titre: "Transition et écho",
      chiffrage: "Dyades en triton (Fa#/Sol# – Do/Ré) — écho du choral (pédale Do-Sol-Ré, ♭VII, v)",
      fonctions: "?",
      texte:
        "Une transition réduite à deux dyades en triton, comme un battement de brume. Puis le choral entier revient, mais pianissimo, sur une pédale composite (Do-Sol-Ré) — même grille harmonique qu'au climax, mais un autre monde : la fonction d'un accord, ici, c'est sa dynamique et son registre, pas son chiffrage.",
    },
    {
      label: "Mesures 84-89",
      titre: "La conclusion : la tierce enfin accordée",
      chiffrage: "Cloches pentatoniques {Sol-La-Si-Ré-Mi} — Do majeur pur (I)",
      fonctions: "? — T",
      texte:
        "Les cloches pentatoniques referment l'arche, identiques à l'ouverture. Mais le tout dernier accord est un Do majeur complet, étalé sur quatre octaves, pianissimo : la tierce (Mi), soigneusement évitée dans toutes les cloches de la pièce, n'est accordée qu'au tout dernier mot.",
    },
  ],
  synthese: [
    {
      titre: "Le parallélisme comme système, pas comme provocation",
      texte:
        "Chaque paramètre habituel de l'harmonie fonctionnelle trouve ici un substitut : le mode remplace la tonalité, la pédale remplace la fonction, le registre et la nuance remplacent la cadence. Ce n'est pas l'absence de règles — c'est un système entièrement différent, appliqué avec la même rigueur qu'une fugue.",
    },
    {
      titre: "La demi-diminuée, réduite au pur timbre",
      texte:
        "L'accord demi-diminué de la mesure 55 ne prépare rien, ne suspend rien, ne se substitue à rien : c'est une couleur sur une pédale, sans la moindre obligation de résolution. Le même agrégat qui, ailleurs, porte tout le poids d'une cadence ou d'une ambiguïté enharmonique, devient ici un simple objet sonore.",
    },
    {
      titre: "Une cadence, une seule, enfouie",
      texte:
        "Sur 89 mesures, une seule authentique progression V7-I — et elle survient dans la section la plus sombre et la plus intime de la pièce, presque cachée. La cadence, moteur de la musique tonale pendant trois siècles, n'est plus ici qu'une citation fugitive au milieu d'un tout autre langage.",
    },
  ],
};
