import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-gymnopedie.ts
 * Harmonia — Extrait (les 9 premières mesures) de la Première Gymnopédie
 * d'Erik Satie (1888), pour la section « conservatoire » du cours 14
 * (niveau 2 — l'harmonisation modale).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « gymnopedie-no-1-single-page-erik-satie-1888.musicxml », source
 * musescore.com/user/58480/scores/2904571) — jamais reconstruit à la main,
 * cf. feedback-partitions-verbatim. Ré majeur (fifths=2), 3/4. Avec
 * <harmony> et <lyric> (chiffrage romain) portés directement sous la portée.
 *
 * `<sound tempo="60">` ajouté à la mesure 1 (absent du fichier d'origine,
 * qui ne porte aucune indication de tempo malgré la mention "Lent et
 * douloureux" du manuscrit original de Satie, non reprise dans cette
 * réduction) — choix délibéré (pas la valeur de repli 90 du moteur du site)
 * pour respecter le caractère très lent de la pièce ; cf.
 * project_playback_tempo_desync : sans tempo écrit, Verovio (surlignage) et
 * notre moteur audio dérivent chacun vers un défaut différent (120 vs 90) et
 * se désynchronisent — un tempo explicite, quel qu'il soit, élimine le
 * problème pour les deux à la fois.
 *
 * Structure vérifiée : l'extrait entier n'alterne QUE deux accords, IVmaj7
 * (Sol) et Imaj7 (Ré), sans jamais faire entendre la dominante (V/La) — la
 * basse oscille Sol2-Ré2-Sol2... par quintes, la main du milieu rejoue la
 * même paire de "voicings" figés (3e-5e-7e, sans fondamentale) sur chaque
 * accord. Aucune tension/résolution classique : c'est l'illustration même de
 * l'harmonie « coloriste » (pas fonctionnelle) qu'enseigne le cours 14.
 */
export const GYMNOPEDIE_MESURES_1_9 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Première Gymnopédie</work-title>
    </work>
  <identification>
    <creator type="composer">Erik Satie</creator>
    <rights>Domaine public</rights>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <source>http://musescore.com/user/58480/scores/2904571</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2021-06-04</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Linux</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.056</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.27</page-height>
      <page-width>1190.81</page-width>
      <page-margins type="both">
        <left-margin>42.5171</left-margin>
        <right-margin>42.5171</right-margin>
        <top-margin>56.6892</top-margin>
        <bottom-margin>56.6892</bottom-margin>
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
    <credit-words default-x="595.404654" default-y="1576.579138" justify="center" valign="middle" font-size="27">Première Gymnopédie</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1148.292243" default-y="1526.579138" justify="right" valign="bottom" font-size="13">Erik Satie</credit-words>
    </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="595.404654" default-y="56.689229" justify="center" valign="bottom">Domaine public</credit-words>
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
    <measure number="1" width="205.84">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>85.3</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>2</fifths>
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
            <per-minute>60</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="60"/>
        </direction>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="142.61" default-y="-10">
        <rest measure="yes"/>
        <duration>3</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="114.19" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="150.13" default-y="-120.3">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.13" default-y="-110.3">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.13" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="114.19" default-y="-165.3">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="132.18" default-y="-170.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IVmaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="2" width="104.65">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="44.93" default-y="-10">
        <rest measure="yes"/>
        <duration>3</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-125.3">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-115.3">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-180.3">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-180.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Imaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="3" width="104.65">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="ma7">major-seventh</kind>
        </harmony>
      <note default-x="44.93" default-y="-10">
        <rest measure="yes"/>
        <duration>3</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-120.3">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-110.3">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-165.3">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-170.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IVmaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="4" width="104.65">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="44.93" default-y="-10">
        <rest measure="yes"/>
        <duration>3</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-125.3">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-115.3">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-180.3">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-180.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Imaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="5" width="122.62">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="maj9">major-ninth</kind>
        </harmony>
      <note default-x="13" default-y="-20">
        <rest/>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-61.35" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="48.94" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="47.280946" bezier-y="30.091964" number="1"/>
          </notations>
        </note>
      <note default-x="84.88" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-120.3">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-110.3">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-165.3">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-170.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IVmaj9</text>
          </lyric>
        </note>
      </measure>
    <measure number="6" width="122.62">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.94" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.88" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-125.3">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-115.3">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-180.3">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-180.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Imaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="7" width="122.62">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="maj7" parentheses-degrees="yes">major-seventh</kind>
        <degree>
          <degree-value>11</degree-value>
          <degree-alter>1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.94" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-61.35" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="84.88" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-120.3">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-110.3">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-165.3">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-170.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="35.5" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IVmaj7(#11)</text>
          </lyric>
        </note>
      </measure>
    <measure number="8" width="104.65">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-46.768061" bezier-y="33.195829"/>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1"/>
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-125.3">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-115.3">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-180.3">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-180.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Imaj7</text>
          </lyric>
        </note>
      </measure>
    <measure number="9" width="113.5">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.31" default-y="-40.95" relative-y="-25">
            <f/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89"/>
        </direction>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-35"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-135.3">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-120.3">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-110.3">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.94" default-y="-100.3">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3</duration>
        </backup>
      <note default-x="13" default-y="-165.3">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.99" default-y="-170.3"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="11.9" default-y="-69.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>IVmaj7</text>
          </lyric>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degré/fonction) — transcrit depuis le
 * chiffrage <harmony>/<lyric> déjà écrit par Dany dans le fichier. Seuls
 * deux accords apparaissent, IVmaj7 (Sol) et Imaj7 (Ré) — "fonction"
 * suit la convention standard du site (I=T, IV=SD), mais le PROPOS du
 * cours 14 est justement que ces étiquettes fonctionnelles n'agissent pas
 * ici comme en harmonie tonale : aucun mouvement vers V, aucune résolution
 * — deux couleurs qui alternent sans jamais créer de tension à résoudre.
 * À détailler dans l'analyse narrative si elle est demandée.
 */
export const GYMNOPEDIE_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "SolMaj7",      degre: "IVmaj7",      fonction: "SD" },
  { numero: 2, nom: "RéMaj7",       degre: "Imaj7",        fonction: "T" },
  { numero: 3, nom: "SolMaj7",      degre: "IVmaj7",      fonction: "SD" },
  { numero: 4, nom: "RéMaj7",       degre: "Imaj7",        fonction: "T" },
  { numero: 5, nom: "SolMaj9",      degre: "IVmaj9",      fonction: "SD" },
  { numero: 6, nom: "RéMaj7",       degre: "Imaj7",        fonction: "T" },
  { numero: 7, nom: "SolMaj7(#11)", degre: "IVmaj7(#11)", fonction: "SD" },
  { numero: 8, nom: "RéMaj7",       degre: "Imaj7",        fonction: "T" },
  { numero: 9, nom: "SolMaj7",      degre: "IVmaj7",      fonction: "SD" },
];

/**
 * Analyse harmonique NARRATIVE — vérifiée note à note (durées/hauteurs des
 * deux voix + basse) contre le MusicXML ci-dessus, à partir d'un brouillon
 * très précis fourni par Dany. AUCUNE erreur trouvée (même constat que pour
 * BWV772, cours13, cette même session) : chaque intervalle cité (7e, 9e,
 * 11e, #11, quinte, "chute de quarte"...) a été recalculé indépendamment et
 * confirmé, y compris deux points fins qui recoupent le chiffrage de Dany
 * lui-même sans qu'il l'ait signalé explicitement dans le brouillon :
 *  - le Fa# (7e de Sol) est la SEULE note qui reste au même registre exact
 *    (Fa#4) dans les deux voicings d'accompagnement — le Ré, présent dans
 *    les deux accords en théorie, change d'octave (Ré2 à la basse, Ré4 dans
 *    l'accord) et ne « tient » donc pas de la même façon ;
 *  - les deux seules mesures où Dany a chiffré une extension explicite
 *    (Solmaj9 à la mesure 5, Solmaj7(#11) à la mesure 7) sont EXACTEMENT
 *    les deux mesures où la mélodie touche cette même extension (La5 = 9e,
 *    Do#5 = #11) — chiffrage et mélodie se confirment mutuellement.
 * Absence de tempo/caractère dans ce fichier (le manuscrit original porte
 * « Lent et douloureux », non repris dans cette réduction) déjà documentée
 * dans le commentaire d'en-tête de ce fichier — le tempo ajouté (60 à la
 * noire) est un choix éditorial, pas une donnée du fichier source.
 */
export const GYMNOPEDIE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Ré majeur (armure à 2 dièses) — mais l'extrait ne fait jamais entendre l'accord de Ré en " +
    "position d'arrivée affirmée : il <strong>commence et finit sur Sol</strong> (IV), qui occupe " +
    "5 mesures sur 9. Une lecture en <strong>Sol lydien</strong> (avec Do# comme #4) est tout " +
    "aussi défendable sur ce seul extrait — les deux lectures partagent exactement les mêmes 2 " +
    "dièses. La suite de la pièce (hors de cet extrait) tranchera en faveur de Ré majeur.",
  metrique:
    "3/4. Aucun tempo ni caractère dans ce fichier (l'original porte « Lent et douloureux », non " +
    "repris ici) — 60 à la noire ajouté par choix éditorial pour la lecture synchronisée.",
  forme:
    "9 mesures = un pendule harmonique strict entre deux accords de 7e majeure, IVmaj7 (Sol) et " +
    "Imaj7 (Ré), sans jamais faire entendre la dominante (La) : mesures 1-4, l'accompagnement " +
    "seul installe le balancement ; mesures 5-9, la mélodie entre et descend d'une octave (Fa#5 " +
    "à Fa#4) en traversant systématiquement les degrés « colorés » de chaque accord (7e, 9e, 11e, " +
    "#11) plutôt que ses notes stables.",
  sections: [
    {
      label: "Mesures 1-4",
      titre: "Le pendule harmonique, sans mélodie",
      chiffrage: "SolMaj7 – RéMaj7 – SolMaj7 – RéMaj7",
      fonctions: "IV – I – IV – I",
      texte:
        "Texture figée sur les 4 premières mesures : une basse profonde tenue toute la mesure " +
        "(Sol2, puis Ré2), un silence de noire, puis un accord de 3 sons plaqué au 2e temps et " +
        "tenu jusqu'à la fin (Si3-Ré4-Fa#4 sur Sol ; La3-Do#4-Fa#4 sur Ré) — le fameux balancement " +
        "de sarabande dépouillée. <strong>Fa#4</strong> est la seule note qui reste exactement à " +
        "la même hauteur dans les deux voicings : un pivot, sans lequel les deux accords " +
        "n'auraient plus rien de commun à l'oreille. Aucune dominante (La) n'apparaît jamais : " +
        "sans V, pas de cadence — l'alternance IV-I est une oscillation plagale statique, qui " +
        "suspend la direction tonale plutôt qu'elle ne la construit. Fait notable, l'extrait " +
        "s'ouvre directement sur la sous-dominante, pas sur la tonique.",
    },
    {
      label: "Mesure 5",
      titre: "La mélodie entre : 7e, puis 9e",
      chiffrage: "SolMaj9",
      fonctions: "IV(9)",
      texte:
        "Après un silence, la mélodie entre sur <strong>Fa#5</strong> — la 7e majeure de Sol, " +
        "exactement deux octaves au-dessus du Fa#4 de l'accompagnement — puis saute vers " +
        "<strong>La5</strong>, la 9e. La partition chiffre explicitement cet accord « Solmaj9 » " +
        "(pas simplement « maj7 ») : la mélodie touche très précisément l'extension que le " +
        "chiffrage annonce. D'emblée, deux notes « dissonantes » posées comme une évidence, sans aucune " +
        "préparation.",
    },
    {
      label: "Mesure 6",
      titre: "Le seul geste « résolu » de l'extrait",
      chiffrage: "RéMaj7",
      fonctions: "I",
      texte:
        "Sol5 au 1er temps est une <strong>11e</strong> sur l'accord de tonique (Ré) — la seule " +
        "dissonance mélodique de tout l'extrait qui redescend par mouvement conjoint, vers Fa#5 " +
        "(la tierce), mais sur temps faible et sans préparation. La ligne chute ensuite d'une " +
        "quarte vers Do#5, la 7e de Ré.",
    },
    {
      label: "Mesure 7",
      titre: "La montée vers le #11",
      chiffrage: "SolMaj7(#11)",
      fonctions: "IV(#11)",
      texte:
        "Montée conjointe Si4-Do#5-Ré5 (tierce – quinte, en passant par Do#). Cette fois encore " +
        "le chiffrage annonce précisément la couleur : c'est la SEULE mesure de tout " +
        "l'extrait où un « (#11) » est ajouté à l'accord de Sol, et c'est exactement la note que " +
        "la mélodie touche au passage.",
    },
    {
      label: "Mesures 8-9",
      titre: "La quinte stable, puis la 7e majeure suspendue",
      chiffrage: "RéMaj7 – SolMaj7",
      fonctions: "I – IV",
      texte:
        "La4, tenu toute la mesure 8 : la quinte de Ré, seule note pleinement consonante et " +
        "stable de toute la phrase mélodique. Puis Fa#4, tenu toute la mesure 9 : la 7e majeure " +
        "de Sol, une octave sous le Fa#5 qui ouvrait la mélodie à la mesure 5. L'extrait se " +
        "referme ainsi en suspension complète, sans la moindre cadence — un arc descendant d'une " +
        "octave pile, du Fa# aigu au Fa# grave.",
    },
  ],
  synthese: [
    {
      titre: "Une seule vraie note commune : Fa#",
      texte:
        "Sol-Si-Ré-Fa# et Ré-Fa#-La-Do# partagent en théorie deux notes (Ré et Fa#), mais dans " +
        "les voicings réels de l'accompagnement, seul Fa#4 reste exactement à la même hauteur — " +
        "le Ré change d'octave à chaque fois (basse ou milieu de l'accord). C'est ce fil ténu qui " +
        "tient les deux couleurs ensemble.",
    },
    {
      titre: "La 7e majeure comme couleur, pas comme dissonance",
      texte:
        "Ni le Fa# de Sol ni le Do# de Ré ne sont préparés ou résolus — traitement impensable en " +
        "harmonie tonale stricte (celle de l'Invention de Bach analysée au cours précédent), où " +
        "une 7e majeure est une dissonance à diriger. Ici, elle est un état stable, constitutif " +
        "de l'accord : le geste le plus radical de la pièce.",
    },
    {
      titre: "Sol lydien ou Ré majeur ? Rien ne tranche",
      texte:
        "Sur ces 9 mesures seules, les deux lectures tonales restent également valides — c'est " +
        "précisément l'effet recherché. Chez Bach, chaque accord se justifie par la conduite des " +
        "voix ; chez Satie, l'harmonie est un objet sonore répété, sans conduite des voix (accords " +
        "plaqués, pas de lignes qui se répondent) : même exercice de lecture, deux grammaires " +
        "opposées.",
    },
  ],
};
