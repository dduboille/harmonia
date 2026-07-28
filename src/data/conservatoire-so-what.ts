import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-so-what.ts
 * Harmonia — Extrait (mesures 1 a 9) de « So What » de Miles Davis (Kind of
 * Blue, 1959), pour la section « conservatoire » du cours 10 (niveau 2 —
 * les modes de la gamme majeure).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « so-what (1).musicxml », sous-titre "Transcription of Davis' Solo") —
 * jamais reconstruit a la main, cf. feedback-partitions-verbatim. Re dorien
 * (fifths=0, aucune tonalite au sens classique), 4/4. Premiere piece du
 * conservatoire qui N'EST PAS de la musique classique occidentale a
 * harmonie fonctionnelle : c'est un vamp modal (appel de la basse seule,
 * puis reponse en accords paralleles) — exactement le contre-exemple que le
 * cours 10 introduit.
 *
 * <sound tempo="90"> ajoute a la mesure 1 (absent du fichier d'origine),
 * comme pour Beethoven/BWV227/Chaconne/K550/Schubert cette meme session :
 * evite la desync surlignage/audio (Verovio suppose 120bpm par defaut).
 *
 * Structure de l'extrait (verifiee note a note, PAS supposee) : mesures
 * impaires (1,3,5,7,9) = la basse joue seule la phrase melodique ("l'appel"),
 * AUCUN accord vertical (kind="none"/N.C. ou simplement pas de <harmony>
 * du tout) — seul le chiffrage romain "I" (a la voix de basse) indique le
 * centre tonal. Mesures paires (2,4,6,8) = "la reponse" en accords
 * paralleles caracteristiques du morceau : Mim7 (ii7) PUIS Rém7 (i7), les
 * DEUX voicings rootless (le Mim7 ne montre que Ré-Sol-Si, le Rém7 que
 * Do-Fa-La — la fondamentale de chaque accord est sous-entendue). Aucune
 * dominante nulle part dans tout l'extrait : la piece ne cadence jamais,
 * elle colore un seul centre modal (Re dorien) du debut a la fin.
 *
 * Limite CONNUE et acceptee du moteur d'inference de mode (inferModeParProfil,
 * musicxml-parse.ts) : concu pour distinguer majeur/mineur classique, il n'a
 * pas de troisieme reponse pour « dorien » — sur ce fichier il infere
 * `mode: "major"` (le profil de hauteurs de re dorien est identique a celui
 * de do majeur). Attendu et documente ici, pas un bug : `score.mode` ne doit
 * pas etre lu comme « la piece est en majeur ».
 */
export const SO_WHAT_MESURES_1_9 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>So What</work-title>
    </work>
  <identification>
    <creator type="composer">Miles Davis</creator>
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
      <miscellaneous-field name="creationDate">2017-02-15</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1584</page-height>
      <page-width>1224</page-width>
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
    <credit-words default-x="611.999614" default-y="1527.306138" justify="center" valign="top" font-size="24">So What</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="611.999614" default-y="1470.61326" justify="center" valign="top" font-size="14">Transcription of Davis' Solo</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1167.306365" default-y="1427.306138" justify="right" valign="bottom" font-size="12">Miles Davis</credit-words>
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
    <measure number="1" width="288.87">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <rehearsal default-x="-20" relative-y="30" justify="center" font-weight="bold" font-size="14">A</rehearsal>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="168.88" default-y="-10">
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="81.88" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="107.75" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="133.62" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="159.5" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="185.37" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="211.25" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="237.12" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="263" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="2" width="193.04">
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward"/>
        </barline>
      <harmony print-frame="no">
        <root>
          <root-step text="">C</root-step>
          </root>
        <kind text="N.C.">none</kind>
        </harmony>
      <note default-x="30.86" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="108.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.97" default-y="-45"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.48" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.97" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.48" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.97" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="157.68" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.68" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.68" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="30.86" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="69.67" default-y="-125">
        <rest/>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="108.48" default-y="-125">
        <rest/>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="121.37" default-y="-120"/>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="157.68" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      </measure>
    <measure number="3" width="220.8">
      <harmony print-frame="no">
        <root>
          <root-step text="">C</root-step>
          </root>
        <kind text="N.C.">none</kind>
        </harmony>
      <note default-x="103" default-y="-10">
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="37.87" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="63.75" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="89.62" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="115.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="141.37" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="167.25" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="193.12" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="4" width="187.12">
      <note default-x="12" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="102.56" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.05" default-y="-45"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.56" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.05" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.56" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.05" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="151.76" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.76" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.76" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="37.87" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.75" default-y="-125">
        <rest/>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="102.56" default-y="-125">
        <rest/>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="115.45" default-y="-120"/>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="151.76" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      </measure>
    <measure number="5" width="220.8">
      <harmony print-frame="no">
        <root>
          <root-step text="">C</root-step>
          </root>
        <kind text="N.C.">none</kind>
        </harmony>
      <note default-x="103" default-y="-10">
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="37.87" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="63.75" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="89.62" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="115.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="141.37" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="167.25" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="193.12" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="6" width="284.65">
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
      <note default-x="59.76" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="173.16" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="189.66" default-y="-45"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.16" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="189.66" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.16" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="189.66" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="245.05" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.05" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="245.05" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="59.76" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="116.46" default-y="-125">
        <rest/>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="173.16" default-y="-125">
        <rest/>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="186.06" default-y="-120"/>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="245.05" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      </measure>
    <measure number="7" width="259.52">
      <harmony print-frame="no">
        <root>
          <root-step text="">C</root-step>
          </root>
        <kind text="N.C.">none</kind>
        </harmony>
      <note default-x="122.36" default-y="-10">
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="49.8" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="23.626686" bezier-y="15.370979" number="1"/>
          </notations>
        </note>
      <note default-x="87.61" default-y="-125">
        <rest/>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="144.31" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.626686" bezier-y="15.370979"/>
          </notations>
        </note>
      <note default-x="201.01" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="233.17">
      <note default-x="12" default-y="-20">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="121.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="138.18" default-y="-45"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.68" default-y="-30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="138.18" default-y="-25"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.68" default-y="-20">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="138.18" default-y="-15"/>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="7" use-symbols="yes">minor-seventh</kind>
        </harmony>
      <note default-x="193.57" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.57" default-y="-35">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.57" default-y="-25">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="28.49" default-y="-120"/>
        <stem>down</stem>
        <staff>2</staff>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="83.88" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="9.450674" bezier-y="-9.721461" number="1"/>
          </notations>
        </note>
      <note default-x="121.68" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="138.18" default-y="-140"/>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.450674" bezier-y="-9.721461"/>
          </notations>
        <lyric number="1" default-x="11.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>II7</text>
          </lyric>
        </note>
      <note default-x="193.57" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <lyric number="1" default-x="11.5" default-y="-34.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I7</text>
          </lyric>
        </note>
      </measure>
    <measure number="9" width="333.28">
      <barline location="left">
        <ending number="1" type="start" default-y="70.8">1.</ending>
        </barline>
      <harmony print-frame="no">
        <root>
          <root-step text="">C</root-step>
          </root>
        <kind text="N.C.">none</kind>
        </harmony>
      <note default-x="150.71" default-y="-10">
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125">
        <rest/>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="49.8" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-x="6.5" default-y="-54.8" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <note default-x="87.61" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="125.41" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.21" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="201.01" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="238.82" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="276.62" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <ending number="1" type="stop"/>
        <repeat direction="backward"/>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure. Convention adaptee a cette piece modale (pas de
 * fonction D nulle part, cf. commentaire d'en-tete) : les mesures impaires
 * (appel de la basse seule, aucun accord vertical) sont notees comme la
 * tonique implicite (I, fonction T) ; les mesures paires (reponse en
 * accords paralleles) prennent le PREMIER accord reel qui sonne (Mim7 —
 * ii7 —, en ecartant le symbole N.C. qui n'est pas un accord). "SD" choisi
 * pour ii7 par coherence avec toutes les autres pieces du conservatoire
 * (ou ii/ii7 est toujours SD) — a rediscuter si Dany prefere une etiquette
 * differente pour un accord de couleur modale qui ne prepare aucune
 * dominante reelle.
 */
export const SO_WHAT_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Rém7", degre: "I",   fonction: "T" },
  { numero: 2, nom: "Mim7", degre: "II7", fonction: "SD" },
  { numero: 3, nom: "Rém7", degre: "I",   fonction: "T" },
  { numero: 4, nom: "Mim7", degre: "II7", fonction: "SD" },
  { numero: 5, nom: "Rém7", degre: "I",   fonction: "T" },
  { numero: 6, nom: "Mim7", degre: "II7", fonction: "SD" },
  { numero: 7, nom: "Rém7", degre: "I",   fonction: "T" },
  { numero: 8, nom: "Mim7", degre: "II7", fonction: "SD" },
  { numero: 9, nom: "Rém7", degre: "I",   fonction: "T" },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les hauteurs
 * reelles, mesure par mesure) avant redaction. Brouillon de reference fourni
 * par Dany (Gemini) : 3 erreurs factuelles trouvees et corrigees.
 *  - Les accords ne sont PAS les celebres voicings quartaux a 5 sons du
 *    vrai enregistrement de 1959 (que le brouillon decrit, "Dm11"/"Em11" sur
 *    2 octaves) : cette transcription simplifie en accords de 3 sons sans
 *    fondamentale (Ré-Sol-Si pour Mim7, Do-Fa-La pour Rém7).
 *  - Mesure 7 : le brouillon lui attribue une etiquette "I" — verifie, le
 *    fichier n'a AUCUN chiffrage a cet endroit (le seul "N.C." de toute la
 *    piece sans le moindre lyric).
 *  - Le brouillon place la "1ere boite de reprise" a la mesure 8 — verifie
 *    dans les balises <barline>, elle est bien sur la mesure 9 (repeat
 *    forward a la mesure 2, ending 1 en debut ET fin de la mesure 9).
 * Le reste (identite des accords ii7→i7, positions rythmiques exactes —
 * temps 3 puis 4et — et le caractere non cadentiel de l'ensemble) est exact.
 */
export const SO_WHAT_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Ré dorien — aucune altération à la clé, mais ce n'est ni Do majeur ni La mineur : le " +
    "centre modal est Ré (2ᵉ degré de Do majeur pris comme point de départ).",
  metrique: "4/4.",
  forme:
    "Un vamp modal en deux mesures (appel de la basse seule, puis réponse en accords), " +
    "répété quatre fois de suite (mesures 1-2, 3-4, 5-6, 7-8) avant l'anacrouse de reprise " +
    "(mesure 9, qui porte aussi la 1ʳᵉ fin du repeat noté dans la partition). Aucune des " +
    "9 mesures ne contient de dominante : la pièce ne cadence jamais, elle colore un seul " +
    "centre tonal du début à la fin — l'exact contre-exemple des 9 morceaux précédents du " +
    "conservatoire, tous fondés sur des enchaînements fonctionnels.",
  sections: [
    {
      label: "Mesure 1",
      titre: "L'appel : la basse seule",
      chiffrage: "Rém7 (N.C.)",
      fonctions: "I",
      texte:
        "La contrebasse expose seule le riff thématique du morceau — une levée d'une croche " +
        "puis une ligne ascendante (Ré-La-Si-Do-Ré-Mi) qui referme sur Do. Aucun accord " +
        "vertical n'est écrit (<em>N.C.</em>, « no chord ») : seul le chiffrage « I » sous la " +
        "portée de basse indique que Ré reste le centre modal, même sans harmonie posée.",
    },
    {
      label: "Mesure 2",
      titre: "La réponse : deux accords rootless",
      chiffrage: "Mim7 – Rém7",
      fonctions: "II7 – I7",
      texte:
        "Le piano répond par deux accords brefs, chacun sans sa fondamentale écrite : " +
        "Ré-Sol-Si (les 3ᵉ, 5ᵉ et 7ᵉ de Mi mineur 7, sans le Mi) au 3ᵉ temps, puis Do-Fa-La " +
        "(les mêmes degrés de Ré mineur 7, sans le Ré) sur le contretemps qui suit. Dans ce " +
        "contexte modal, <strong>II7 ne prépare aucune dominante</strong> : c'est une couleur " +
        "qui redescend directement vers la tonique modale, sans jamais passer par un accord " +
        "de tension classique.",
    },
    {
      label: "Mesures 3-6",
      titre: "Le cycle se répète",
      chiffrage: "Rém7 | Mim7 – Rém7  ·  Rém7 | Mim7 – Rém7",
      fonctions: "I | II7 – I7  ·  I | II7 – I7",
      texte:
        "Les mesures 3 et 5 reprennent note pour note le riff de basse de la mesure 1. Les " +
        "mesures 4 et 6 reprennent la même réponse en accords qu'à la mesure 2 — seule la " +
        "basse varie discrètement (un aller-retour Ré-La à la mesure 4, un Ré seul à la " +
        "mesure 6). Rien ne bouge harmoniquement : c'est la répétition qui construit le " +
        "morceau, pas une progression.",
    },
    {
      label: "Mesure 7",
      titre: "Une respiration différente",
      chiffrage: "(N.C.)",
      fonctions: "—",
      texte:
        "Seule vraie variation de tout l'extrait : au lieu du riff ascendant, la basse répète " +
        "trois fois la même note (Mi), dans un rythme syncopé (une note tenue à cheval sur " +
        "le 2ᵉ temps). Aucun chiffrage n'accompagne cette mesure — c'est la seule de tout " +
        "l'extrait à n'en porter aucun, pas même un « I » : la tension de l'appel reste " +
        "ouverte plus longtemps qu'ailleurs avant que la réponse ne revienne.",
    },
    {
      label: "Mesure 8",
      titre: "Dernière réponse avant la reprise",
      chiffrage: "Rém7 | Mim7 – Rém7",
      fonctions: "I | II7 – I7",
      texte:
        "Le cycle se referme comme aux mesures 2, 4 et 6 : même réponse en deux accords " +
        "rootless. Rien ne signale encore la fin de la section — c'est la mesure suivante " +
        "qui porte la marque de reprise.",
    },
    {
      label: "Mesure 9",
      titre: "Anacrouse et 1ʳᵉ fin",
      chiffrage: "Rém7 (N.C.)",
      fonctions: "I",
      texte:
        "Le riff de basse de la mesure 1 revient à l'identique. C'est aussi sur cette mesure, " +
        "et uniquement celle-ci, que la partition porte la <strong>1ʳᵉ fin</strong> du repeat " +
        "(le double-barre avec reprise démarre à la mesure 2) : après cette mesure, le cycle " +
        "recommence depuis la mesure 2, avant qu'une 2ᵉ fin (hors de cet extrait) ne " +
        "poursuive le morceau.",
    },
  ],
  synthese: [
    {
      titre: "Une seule couleur, jamais de cadence",
      texte:
        "Aucun accord de dominante n'apparaît dans ces 9 mesures. Le II7 (Mim7) n'est jamais " +
        "un prédominant qui prépare une résolution : c'est une simple coloration qui retombe " +
        "directement sur la tonique modale, à l'opposé de tout ce qu'enseignent les 9 " +
        "premiers morceaux du conservatoire.",
    },
    {
      titre: "La répétition comme moteur",
      texte:
        "Le morceau ne se développe pas par enchaînement d'accords mais par la répétition " +
        "presque exacte d'un même module de 2 mesures — seule la mesure 7 s'en écarte, par " +
        "un simple changement de rythme à la basse, sans jamais introduire de nouvel accord.",
    },
    {
      titre: "Des accords « rootless »",
      texte:
        "Les deux accords de la réponse (Mim7, Rém7) sont écrits sans leur fondamentale : " +
        "une technique de voicing très caractéristique du piano jazz, où la basse porte déjà " +
        "la fondamentale et où la main droite se concentre sur la couleur (3ᵉ, 5ᵉ, 7ᵉ).",
    },
  ],
};
