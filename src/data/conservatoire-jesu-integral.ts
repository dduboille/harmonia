import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-jesu-integral.ts
 * Harmonia — Choral "Jesu, meine Freude" (mélodie J. Crüger, harmonisation
 * dans la tradition de Bach BWV 227), INTÉGRAL, 19 mesures, si mineur, 4/4,
 * pour la section "conservatoire" du cours 27 (niveau 3 — analyse
 * fonctionnelle profonde, Schenker).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "jesu-annote-propre.musicxml",
 * source musescore.com/user/370826/scores/6851486) — jamais reconstruit à
 * la main, cf. feedback-partitions-verbatim. La grille guitare fautive du
 * hymnal d'origine (retirée par Dany avant livraison) contenait sept fautes
 * vérifiées (dominantes avancées d'un temps, tierces picardes inventées aux
 * cadences du Stollen) — le fichier livré ne porte que le chiffrage romain
 * corrigé (63 verticalités).
 *
 * DIFFÈRE de l'extrait "Choral BWV 227" déjà utilisé au cours4 (mesures 1-8
 * seulement, conservatoire-bwv227.ts, sujet "la cadence") : fichier
 * indépendant, mesures 1-19 intégrales, sujet différent (structure
 * profonde). Ne pas confondre les deux fichiers.
 *
 * PIÈGE méthodologique découvert en vérifiant : l'ordre TEXTUEL des balises
 * <harmony> ne suit pas toujours l'ordre chronologique réel quand deux
 * accords s'enchaînent sans qu'aucune nouvelle note n'apparaisse dans la
 * voix qui porte l'étiquette (mesures 1, 2, 4, et leurs miroirs 7, 8, 10) —
 * un second <harmony> peut être inséré AVANT le premier dans le flux XML
 * quand aucun accroche mélodique n'est disponible au bon instant. Confirmé
 * note à note (mesure 1 : vii°4/2 précède réellement VI, pas l'inverse,
 * malgré l'ordre inverse dans le fichier) avant de fixer l'ordre du
 * chiffrage ci-dessous.
 *
 * Chaque affirmation précise du commentaire de Dany vérifiée indépendamment
 * (structure AAB, Stollen répété note pour note m.7-12=m.1-6, le retard 4-3
 * de la mesure 5 avec le V7 qui ne se complète qu'au tout dernier huitième
 * de la mesure, la coquille d'édition Mi#/Fa♮ à l'alto m.16 confirmée
 * textuellement dans le XML, la tierce picarde finale au ténor, seule
 * occurrence de toute la pièce) — AUCUNE erreur trouvée.
 *
 * NOTE structurelle : le fichier porte une reprise forward/backward (times=4)
 * encadrant les 19 mesures — convention de recueil de cantiques (les 4
 * strophes du texte se chantent sur la même musique), SANS RAPPORT avec la
 * répétition écrite du Stollen (m.7-12=m.1-6), qui elle est entièrement
 * notée en toutes notes et vérifiée indépendamment.
 *
 * score.mode de notre moteur infère "major" (profil de hauteurs proche de
 * Ré majeur, le relatif) — la pièce est bien en SI MINEUR (tonique confirmée
 * par le chiffrage "i" omniprésent et la tierce picarde finale) : même
 * limite déjà documentée pour So What/Satin Doll, non corrigée.
 */
export const JESU_INTEGRAL_MESURES_1_19 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Jesus, Priceless Treasure</work-title>
    </work>
  <identification>
    <creator type="composer">J. Crüger, J. S. Bach</creator>
    <creator type="lyricist">J. Franck, C. Winkworth</creator>
    <rights>S.D.G.</rights>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-29</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/370826/scores/6851486</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2021-07-01</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1980</page-height>
      <page-width>1400</page-width>
      <page-margins type="both">
        <left-margin>84</left-margin>
        <right-margin>84</right-margin>
        <top-margin>84</top-margin>
        <bottom-margin>84</bottom-margin>
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
    <lyric-font font-family="Edwin" font-size="9.8327" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="700" default-y="1896" justify="center" valign="top" font-size="18.8681">Jesus, Priceless Treasure</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1316" default-y="1825" justify="right" valign="top" font-size="9.4341">J. Crüger, J. S. Bach</credit-words>
    </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="700" default-y="84" justify="center" valign="bottom" font-size="9">S.D.G.</credit-words>
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
    <measure number="1" width="357.26">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>236.21</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>201.41</staff-distance>
          </staff-layout>
        </print>
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>2</fifths>
          <mode>major</mode>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-75.44" relative-x="-59.76" relative-y="32.05">
            <beat-unit>quarter</beat-unit>
            <per-minute>64</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="64" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">b : i — Stollen 1</words></direction-type><staff>2</staff></direction><note default-x="151.96" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>In</text>
          </lyric>
        <lyric number="3" default-x="2.4" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Hence,</text>
          </lyric>
        <lyric number="4" default-x="2.4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Hence,</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="m">minor</kind><bass><bass-step>A</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v6</words></direction-type><staff>2</staff></direction><note default-x="198.35" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.68" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus,</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Your</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>all</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>all</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m">minor</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6</words></direction-type><staff>2</staff></direction><note default-x="251.93" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>price</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>arms</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>world</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>thoughts</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/2</words></direction-type><staff>2</staff></direction><note default-x="308.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>less</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ly</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>of</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="151.96" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="198.35" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.93" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="284.19" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="308.92" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="151.96" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.35" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="251.93" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="284.19" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="308.92" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="151.96" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.35" default-y="-276.41">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="251.93" default-y="-281.41">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="269.93" default-y="-286.41" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="327.46" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="184.11">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind><bass><bass-step>E</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø6/5</words></direction-type><staff>2</staff></direction><note default-x="14.53" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>trea</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>rest</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>trea</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>sad</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — cad. parfaite</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="108.14" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.61" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure,</text>
          </lyric>
        <lyric number="2" default-x="2.47" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me:</text>
          </lyric>
        <lyric number="3" default-x="2.4" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure!</text>
          </lyric>
        <lyric number="4" default-x="2.4" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ness,</text>
          </lyric>
        </note>
      <note default-x="145.23" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="26.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.7" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.14" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.23" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.53" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="58.7" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="83.42" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="108.14" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.23" default-y="-241.41">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.53" default-y="-291.41">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="58.7" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.14" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.23" default-y="-281.41">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="224.72">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="24.69" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>source</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>foes</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>for</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">A : V</words></direction-type><staff>2</staff></direction><note default-x="78.18" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>of</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>who</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>the</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="">major</kind><bass><bass-step>C</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I6</words></direction-type><staff>2</staff></direction><note default-x="127.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>pur</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>would</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>is</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Lord</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">b : III</words></direction-type><staff>2</staff></direction><note default-x="170.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>est</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>mo</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>my</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>of</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="24.69" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="49.42" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="78.18" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.62" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.2" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="24.69" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="49.42" default-y="-241.41">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="78.18" default-y="-246.41">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="102.9" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="127.62" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.2" default-y="-261.41">
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
        </note>
      <note default-x="194.92" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="24.69" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.18" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="102.9" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="127.62" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.2" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="194.92" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="4" width="190.17">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="15.31" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>plea</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>lest</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>plea</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>glad</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V — demi-cadence</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind><bass><bass-step>D</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6</words></direction-type><staff>2</staff></direction><note default-x="114.2" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.61" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure,</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me</text>
          </lyric>
        <lyric number="3" default-x="2.61" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure,</text>
          </lyric>
        <lyric number="4" default-x="2.4" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ness,</text>
          </lyric>
        </note>
      <note default-x="151.28" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="15.31" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.28" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="15.31" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.76" default-y="-226.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.2" default-y="-231.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.28" default-y="-241.41">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="15.31" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.03" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="64.76" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="89.48" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.2" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.28" default-y="-281.41">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="225.74">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>friend</text>
          <extend />
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>can</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        </note>
      <note default-x="46.29" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6/4</words></direction-type><staff>2</staff></direction><note default-x="85.41" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>most</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>not</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus</text>
          </lyric>
        <lyric number="4" default-x="2.68" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus,</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="sus4">suspended-fourth</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V, retard 4–3</words></direction-type><staff>2</staff></direction><note default-x="134.86" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="152.86" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>sure</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>reach</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>is</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>en</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 (résolution)</words></direction-type><staff>2</staff></direction><note default-x="190.48" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>and</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>my</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ters</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="46.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="85.41" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.86" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="152.86" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.41" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.86" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.94" default-y="-241.41">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.41" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="110.13" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="134.86" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.94" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="199.99">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>132.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>201.41</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — point d'orgue</words></direction-type><staff>2</staff></direction><note default-x="92.09" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.4" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>true:</text>
          </lyric>
        <lyric number="2" default-x="2.05" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>here.</text>
          </lyric>
        <lyric number="3" default-x="2.19" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>choice.</text>
          </lyric>
        <lyric number="4" default-x="2.4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>in;</text>
          </lyric>
        </note>
      <note default-x="161.62" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.62" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-246.41" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.62" default-y="-241.41">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-276.41" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.62" default-y="-281.41">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="228.76">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — Stollen 2 (reprise écrite)</words></direction-type><staff>2</staff></direction><note default-x="31.04" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.61" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>ah,</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Though</text>
          </lyric>
        <lyric number="3" default-x="2.4" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Hence,</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>in</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="m">minor</kind><bass><bass-step>A</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v6</words></direction-type><staff>2</staff></direction><note default-x="82.72" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>how</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>the</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>all</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>the</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m">minor</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6</words></direction-type><staff>2</staff></direction><note default-x="124.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>long</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>earth</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>emp</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>face</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/2</words></direction-type><staff>2</staff></direction><note default-x="180.67" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>in</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>be</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ty</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>of</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.72" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.03" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.29" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="180.67" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.72" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.03" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.29" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="180.67" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.72" default-y="-276.41">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.03" default-y="-281.41">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="142.03" default-y="-286.41" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.95" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="180.86">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind><bass><bass-step>E</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø6/5</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>an</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>sha</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>glo</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>fail</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — cad. parfaite</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="105.92" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.4" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>guish,</text>
          </lyric>
        <lyric number="2" default-x="1.98" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>king,</text>
          </lyric>
        <lyric number="3" default-x="2.05" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ry!</text>
          </lyric>
        <lyric number="4" default-x="2.26" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ure,</text>
          </lyric>
        </note>
      <note default-x="142.49" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="24.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="57.16" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.92" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.49" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.16" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="81.54" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="105.92" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.49" default-y="-241.41">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-291.41">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.16" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.92" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.49" default-y="-281.41">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="220.81">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="27.52" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>shall</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>eve</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>What's</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>those</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">A : V</words></direction-type><staff>2</staff></direction><note default-x="80.66" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>my</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ry</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>to</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>who</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="">major</kind><bass><bass-step>C</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I6</words></direction-type><staff>2</staff></direction><note default-x="129.42" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>spi</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>heart</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>love</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">b : III</words></direction-type><staff>2</staff></direction><note default-x="166.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>rit</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>be</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>your</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>the</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="27.52" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="51.9" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="80.66" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.42" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.63" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="27.52" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="51.9" default-y="-241.41">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="80.66" default-y="-246.41">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="105.04" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="129.42" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.63" default-y="-261.41">
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
        </note>
      <note default-x="191.01" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="27.52" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.66" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="105.04" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="129.42" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.63" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="191.01" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="10" width="191.15">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="18.7" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>lan</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>quak</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>sto</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Sa</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V — demi-cadence</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind><bass><bass-step>D</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6</words></direction-type><staff>2</staff></direction><note default-x="116.22" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.4" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>guish,</text>
          </lyric>
        <lyric number="2" default-x="2.05" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ing,</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ry</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>end</syllabic>
          <text>vior</text>
          </lyric>
        </note>
      <note default-x="152.79" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.7" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.46" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.22" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.79" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.7" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.46" default-y="-226.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.22" default-y="-231.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.79" default-y="-241.41">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.7" default-y="-271.41">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.08" default-y="-266.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="67.46" default-y="-261.41">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="91.84" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.22" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.79" default-y="-281.41">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="210.42">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>year</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>told</text>
          <extend />
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>still</text>
          <extend />
          </lyric>
        </note>
      <note default-x="39.46" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6/4</words></direction-type><staff>2</staff></direction><note default-x="70.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.12" default-y="-84.31" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ning,</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>single</syllabic>
          <text>with</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>have</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="sus4">suspended-fourth</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V, retard 4–3</words></direction-type><staff>2</staff></direction><note default-x="119.74" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="137.74" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.4" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Lord,</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>calms</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>temp</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>single</syllabic>
          <text>peace</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 (résolution)</words></direction-type><staff>2</staff></direction><note default-x="174.59" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-84.31" relative-y="-30">
          <syllabic>single</syllabic>
          <text>for</text>
          </lyric>
        <lyric number="2" default-y="-108.02" relative-y="-30">
          <syllabic>single</syllabic>
          <text>my</text>
          </lyric>
        <lyric number="3" default-y="-131.73" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ting</text>
          </lyric>
        <lyric number="4" default-y="-155.43" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>with</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="70.98" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="119.74" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="137.74" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.98" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.74" default-y="-236.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.31" default-y="-241.41">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13" default-y="-246.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.98" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="95.36" default-y="-256.41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="119.74" default-y="-251.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.31" default-y="-286.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="231.95">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>132.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>196.14</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — point d'orgue</words></direction-type><staff>2</staff></direction><note default-x="92.09" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="3.95" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>You?</text>
          </lyric>
        <lyric number="2" default-x="1.41" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>fear.</text>
          </lyric>
        <lyric number="3" default-x="3.74" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>voice?</text>
          </lyric>
        <lyric number="4" default-x="2.12" default-y="-145.72" relative-y="-30">
          <syllabic>end</syllabic>
          <text>in.</text>
          </lyric>
        </note>
      <note default-x="182.57" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="182.57" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-246.14">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-241.14" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="182.57" default-y="-236.14">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="92.09" default-y="-266.14">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="110.09" default-y="-271.14" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="182.57" default-y="-276.14">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="240.38">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i — Abgesang</words></direction-type><staff>2</staff></direction><note default-x="31.04" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Yours</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Light</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Pain</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Though</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">III</words></direction-type><staff>2</staff></direction><note default-x="94.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>end</syllabic>
          <text>nings</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>or</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="7">dominant</kind><bass><bass-step>C</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6/5/III</words></direction-type><staff>2</staff></direction><note default-x="143.42" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.61" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>am,</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>flash</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>loss</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>bear</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">III</words></direction-type><staff>2</staff></direction><note default-x="191" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>O</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>and</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>or</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>much</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="94.49" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-231.14">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="94.49" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.42" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="191" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="31.04" default-y="-266.14">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="62.77" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="94.49" default-y="-256.14">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.42" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="191" default-y="-256.14">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="14" width="261.07">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m7">minor-seventh</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">ii6/5 (de Ré)</words></direction-type><staff>2</staff></direction><note default-x="53.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="71.33" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="-14" default-y="-74.6" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>spot</text>
          </lyric>
        <lyric number="2" default-x="-14" default-y="-98.3" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>thun</text>
          </lyric>
        <lyric number="3" default-x="-14" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>shame</text>
          </lyric>
        <lyric number="4" default-x="-14" default-y="-145.72" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>sor</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/III</words></direction-type><staff>2</staff></direction><note default-x="118.64" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>end</syllabic>
          <text>less</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>end</syllabic>
          <text>ders</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>or</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>end</syllabic>
          <text>row</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">III — cad. en Ré Majeur</words></direction-type><staff>2</staff></direction><note default-x="164.11" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.33" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Lamb,</text>
          </lyric>
        <lyric number="2" default-x="2.54" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>crash;</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>cross</text>
          </lyric>
        <lyric number="4" default-x="2.26" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>here,</text>
          </lyric>
        </note>
      <note default-x="211.69" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="39.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.92" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.11" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="211.69" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="39.33" default-y="-231.14">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.92" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="118.64" default-y="-241.14">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="164.11" default-y="-246.14">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.69" default-y="-236.14">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="39.33" default-y="-276.14">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.92" default-y="-271.14">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.11" default-y="-256.14">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.69" default-y="-276.14">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="257.44">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">III</words></direction-type><staff>2</staff></direction><note default-x="28.72" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>naught</text>
          </lyric>
        <lyric number="2" default-x="2.26" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>yet,</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>shall</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>still</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step><root-alter>1</root-alter></root><kind text="°">diminished</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°/La (basse de passage)</words></direction-type><staff>2</staff></direction><note default-x="81.17" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>though</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>not</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>in</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="">major</kind><bass><bass-step>C</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">A : I6</words></direction-type><staff>2</staff></direction><note default-x="144.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>suf</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>sin</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>move</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>You</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">b : III</words></direction-type><staff>2</staff></direction><note default-x="192.2" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="1.62" default-y="-74.6" relative-y="-30">
          <syllabic>end</syllabic>
          <text>fer,</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>and</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>single</syllabic>
          <text>lies</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="28.72" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="192.2" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="223.92" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="28.72" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.17" default-y="-231.14">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.62" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.2" default-y="-236.14">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="28.72" default-y="-256.14">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.17" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.89" default-y="-266.14">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="144.62" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.2" default-y="-256.14">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="223.92" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="16" width="241.15">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="17.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="2.4" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Lord,</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>single</syllabic>
          <text>hell</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>from</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>pur</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v</words></direction-type><staff>2</staff></direction><note default-x="64.87" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>to</text>
          <extend />
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>as</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>single</syllabic>
          <text>my</text>
          <extend />
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>end</syllabic>
          <text>est</text>
          <extend />
          </lyric>
        </note>
      <note default-x="96.59" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind><bass><bass-step>B</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø4/3 de fa#</words></direction-type><staff>2</staff></direction><note default-x="128.32" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.6" relative-y="-30">
          <syllabic>single</syllabic>
          <text>hide</text>
          </lyric>
        <lyric number="2" default-y="-98.3" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sail</text>
          </lyric>
        <lyric number="3" default-y="-122.01" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Sa</text>
          </lyric>
        <lyric number="4" default-y="-145.72" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>plea</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="17.29" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.22" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/v — Mi# écrit Fa♮ !</words></direction-type><staff>2</staff></direction><note default-x="175.9" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="17.29" default-y="-221.14">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.87" default-y="-226.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.32" default-y="-221.14">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.9" default-y="-226.14">
        <pitch>
          <step>C</step>
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
      <note default-x="207.62" default-y="-231.14">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="17.29" default-y="-266.14">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.87" default-y="-281.14">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.32" default-y="-266.14">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.9" default-y="-261.14">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="17" width="542.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>132.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>188.72</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">fa# : I = b : V — arrivée</words></direction-type><staff>2</staff></direction><note default-x="95.35" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-x="1.98" default-y="-74.68" relative-y="-30">
          <syllabic>single</syllabic>
          <text>You,</text>
          </lyric>
        <lyric number="2" default-x="2.33" default-y="-98.38" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me,</text>
          </lyric>
        <lyric number="3" default-x="1.55" default-y="-122.09" relative-y="-30">
          <syllabic>end</syllabic>
          <text>vior,</text>
          </lyric>
        <lyric number="4" default-x="2.61" default-y="-145.8" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure,</text>
          </lyric>
        </note>
      <note default-x="190.74" default-y="0">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">b : i</words></direction-type><staff>2</staff></direction><note default-x="286.12" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.68" relative-y="-30">
          <syllabic>single</syllabic>
          <text>naught</text>
          </lyric>
        <lyric number="2" default-y="-98.38" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        <lyric number="3" default-y="-122.09" relative-y="-30">
          <syllabic>single</syllabic>
          <text>since</text>
          </lyric>
        <lyric number="4" default-y="-145.8" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>Je</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="m">minor</kind><bass><bass-step>A</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v6</words></direction-type><staff>2</staff></direction><note default-x="413.31" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.68" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        <lyric number="2" default-y="-98.38" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus</text>
          </lyric>
        <lyric number="3" default-y="-122.09" relative-y="-30">
          <syllabic>single</syllabic>
          <text>I</text>
          </lyric>
        <lyric number="4" default-x="2.68" default-y="-145.8" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sus,</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="95.35" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.74" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="286.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="413.31" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="95.35" default-y="-228.72">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.74" default-y="-228.72">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="286.12" default-y="-223.72">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="349.72" default-y="-258.72">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="413.31" default-y="-253.72">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="476.9" default-y="-248.72">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="95.35" default-y="-273.72">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.74" default-y="-268.72">
        <rest />
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="286.12" default-y="-258.72">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="413.31" default-y="-263.72">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="436.88">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m">minor</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6</words></direction-type><staff>2</staff></direction><note default-x="21.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.68" relative-y="-30">
          <syllabic>single</syllabic>
          <text>seek</text>
          </lyric>
        <lyric number="2" default-y="-98.38" relative-y="-30">
          <syllabic>single</syllabic>
          <text>will</text>
          </lyric>
        <lyric number="3" default-y="-122.09" relative-y="-30">
          <syllabic>single</syllabic>
          <text>found</text>
          </lyric>
        <lyric number="4" default-y="-145.8" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>price</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6/4 cadentiel</words></direction-type><staff>2</staff></direction><note default-x="117.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.68" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>be</text>
          </lyric>
        <lyric number="2" default-y="-98.38" relative-y="-30">
          <syllabic>single</syllabic>
          <text>not</text>
          </lyric>
        <lyric number="3" default-y="-122.09" relative-y="-30">
          <syllabic>single</syllabic>
          <text>His</text>
          </lyric>
        <lyric number="4" default-y="-145.8" relative-y="-30">
          <syllabic>end</syllabic>
          <text>less</text>
          </lyric>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind><bass><bass-step>E</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø6/5</words></direction-type><staff>2</staff></direction><note default-x="212.51" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <lyric number="1" default-y="-74.68" relative-y="-30">
          <syllabic>end</syllabic>
          <text>side</text>
          </lyric>
        <lyric number="2" default-y="-98.38" relative-y="-30">
          <syllabic>single</syllabic>
          <text>fail</text>
          </lyric>
        <lyric number="3" default-y="-122.09" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>fa</text>
          </lyric>
        <lyric number="4" default-y="-145.8" relative-y="-30">
          <syllabic>begin</syllabic>
          <text>trea</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="21.73" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="117.12" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="224.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="307.9" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="21.73" default-y="-243.72">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="117.12" default-y="-238.72">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="212.51" default-y="-233.72">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="307.9" default-y="-238.72">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="371.49" default-y="-243.72">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="21.73" default-y="-268.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="117.12" default-y="-273.72">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="212.51" default-y="-278.72">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="307.9" default-y="-273.72">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="252.83">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I — tierce picarde (Ré#)</words></direction-type><staff>2</staff></direction><note default-x="18.76" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <lyric number="1" default-x="1.02" default-y="-74.68" relative-y="-30">
          <syllabic>single</syllabic>
          <text>You!</text>
          </lyric>
        <lyric number="2" default-x="1.16" default-y="-98.38" relative-y="-30">
          <syllabic>single</syllabic>
          <text>me.</text>
          </lyric>
        <lyric number="3" default-x="0.38" default-y="-122.09" relative-y="-30">
          <syllabic>end</syllabic>
          <text>vor.</text>
          </lyric>
        <lyric number="4" default-x="1.44" default-y="-145.8" relative-y="-30">
          <syllabic>end</syllabic>
          <text>sure!</text>
          </lyric>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-248.72">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.76" default-y="-258.72">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" times="4" />
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — une pastille par mesure (convention du site),
 * chiffrage transcrit depuis les <direction><words> de Dany déjà présentes
 * dans le fichier (63 verticalités au total, condensées ici à 19 pastilles,
 * une par mesure). L'ordre chronologique de chaque mesure à accords multiples
 * a été revérifié note à note (cf. commentaire d'en-tête) plutôt que copié
 * dans l'ordre d'apparition textuelle des balises <harmony>.
 */
export const JESU_INTEGRAL_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Sim – Fa#m/La – Mim/Sol – Réb°7/Sol – Sol", degre: "i – v6 – iv6 – vii°4/2 – VI", fonction: "T" },
  { numero: 2,  nom: "Do#ø7/Mi – Fa#7 – Sim",                     degre: "iiø6/5 – V7 – i (cad. parfaite)", fonction: "SD" },
  { numero: 3,  nom: "Sim – Mi – La/Do# – Ré",                    degre: "i – V/La (tonicisé) – I6/La – III", fonction: "T" },
  { numero: 4,  nom: "Sim – Sim/Ré – Fa#",                        degre: "i – i6 – V (demi-cadence)", fonction: "T" },
  { numero: 5,  nom: "Sol – Sim/Fa# – Fa#(sus4) – Fa#7",          degre: "VI – i6/4 – V (retard 4-3) – V7", fonction: "T" },
  { numero: 6,  nom: "Sim",                                       degre: "i (point d'orgue)", fonction: "T" },
  { numero: 7,  nom: "Sim – Fa#m/La – Mim/Sol – Réb°7/Sol – Sol", degre: "i — Stollen 2 (reprise écrite) – v6 – iv6 – vii°4/2 – VI", fonction: "T" },
  { numero: 8,  nom: "Do#ø7/Mi – Fa#7 – Sim",                     degre: "iiø6/5 – V7 – i (cad. parfaite)", fonction: "SD" },
  { numero: 9,  nom: "Sim – Mi – La/Do# – Ré",                    degre: "i – V/La (tonicisé) – I6/La – III", fonction: "T" },
  { numero: 10, nom: "Sim – Sim/Ré – Fa#",                        degre: "i – i6 – V (demi-cadence)", fonction: "T" },
  { numero: 11, nom: "Sol – Sim/Fa# – Fa#(sus4) – Fa#7",          degre: "VI – i6/4 – V (retard 4-3) – V7", fonction: "T" },
  { numero: 12, nom: "Sim",                                       degre: "i (point d'orgue)", fonction: "T" },
  { numero: 13, nom: "Sim – Ré – La7/Do# – Ré",                   degre: "i (Abgesang) – III – V6/5/III – III", fonction: "T" },
  { numero: 14, nom: "Mim7/Sol – La7 – Ré",                       degre: "ii6/5 (de Ré) – V7/III – III (cad. en Ré)", fonction: "SD" },
  { numero: 15, nom: "Ré – Sol#dim (passage) – La/Do# – Ré",      degre: "III – vii°/La – I6/La – III", fonction: "T" },
  { numero: 16, nom: "Sim – Fa#m – Sol#ø7/Si – Do#7",             degre: "i – v – iiø4/3 de fa# – V7/v", fonction: "T" },
  { numero: 17, nom: "Fa# (=V) – Sim – Fa#m/La",                  degre: "fa# : I = b : V (arrivée) – i – v6", fonction: "D" },
  { numero: 18, nom: "Mim/Sol – Sim/Fa# – Do#ø7/Mi – Fa#7",       degre: "iv6 – i6/4 cadentiel – iiø6/5 – V7", fonction: "SD" },
  { numero: 19, nom: "Si (tierce picarde)",                       degre: "I (Ré# au ténor)", fonction: "T" },
];

export const JESU_INTEGRAL_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Si mineur.",
  metrique: "4/4. Tempo 64 à la noire.",
  forme: "Forme de barre AAB : Stollen (3 phrases, m.1-6) répété note pour note (m.7-12), puis Abgesang (m.13-19).",
  sections: [
    {
      label: "Phrase 1 (m.1-2)",
      titre: "Une descente de basse qui monnaye la tonique",
      chiffrage: "i – v6 – iv6 – vii°4/2 – VI – iiø6/5 – V7 – i",
      fonctions: "T (prolongé) – SD – T (cadence parfaite)",
      texte:
        "La basse descend par degrés conjoints (Si-La-Sol) sous une tenue du soprano, chaque marche portant son propre accord — i, v6, iv6 — avant qu'un accord de passage ne s'invite sur le levé : une septième diminuée de la sensible en troisième renversement (vii°4/2, la 7e à la basse), qui se résout sur VI. La cadence qui suit expose la première demi-diminuée de la pièce (iiø6/5) avant le V7 et la tonique.",
    },
    {
      label: "Phrase 2 (m.3-4)",
      titre: "Une tonicisation éclair, une remontée vers la dominante",
      chiffrage: "i – V/La – I6/La – III – i – i6 – V",
      fonctions: "T – (tonicisation passagère) – T – D (demi-cadence)",
      texte:
        "Un bref détour tonicise La majeur (sa propre dominante, Mi, apparaît le temps d'un accord) avant de glisser sur III (Ré). La basse remonte ensuite par degrés conjoints (Si-Do#-Ré-Mi) vers la demi-cadence sur Fa# majeur, qui referme la phrase sur la dominante.",
    },
    {
      label: "Phrase 3 (m.5-6) — et sa reprise (m.7-12)",
      titre: "Le retard 4-3 et la tonique suspendue",
      chiffrage: "VI – i6/4 – V (retard 4-3) – V7 – i (point d'orgue)",
      fonctions: "T – T (cadentiel) – D – T",
      texte:
        "La plus belle cadence du Stollen : sur la dominante, une voix intérieure tient Si contre le Fa# de la basse (un retard 4-3) et ne cède qu'au tout dernier temps de la mesure — l'accord ne se complète en V7 qu'à l'instant même de la résolution. La tonique qui suit est tenue sous point d'orgue. L'ensemble des six mesures (m.1-6) revient ensuite note pour note (m.7-12) : même basse, mêmes accords, même résolution du retard — un Stollen entièrement écrit, pas seulement signalé par une reprise.",
    },
    {
      label: "Abgesang, phrases 4-5 (m.13-14)",
      titre: "La seule plage majeure de tout le choral",
      chiffrage: "i – III – V6/5/III – III – ii6/5 – V7/III – III",
      fonctions: "T – (modulation au relatif) – SD – D – T",
      texte:
        "L'Abgesang s'ouvre sur une véritable modulation au relatif majeur (Ré), proprement installée par sa propre dominante secondaire (La7) puis confirmée par une cadence complète (ii6/5 – V7 – I) en Ré majeur — le seul moment de toute la pièce qui quitte franchement le mode mineur.",
    },
    {
      label: "Phrase 6 (m.15-17)",
      titre: "Le sommet dramatique",
      chiffrage: "III – vii°/La – I6/La – III – i – v – iiø4/3 de fa# – V7/v – fa# : I = b : V",
      fonctions: "T – T (passage) – T (mineur) – D (arrivée sur la dominante majorisée)",
      texte:
        "Retour à si mineur via sa propre dominante (fa# mineur), puis une deuxième demi-diminuée (iiø4/3 de fa#, cette fois sous-dominante de la dominante) qui prépare un Do#7 (V7/v) résolvant sur Fa# majeur — un ii–V–i complet vers la dominante, mais majorisée. Cette mesure porte une coquille d'édition : le Mi# attendu dans le Do#7 est noté Fa naturel à la voix intérieure, une enharmonie qui rendrait la lecture absurde à un exécutant lisant la tierce du chœur plutôt que jouant au clavier. La mesure suivante s'ouvre de silences après son premier accord — la respiration du texte allemand, conservée par le cantique.",
    },
    {
      label: "Phrase finale (m.18-19)",
      titre: "La formule cadentielle au grand complet",
      chiffrage: "iv6 – i6/4 cadentiel – iiø6/5 – V7 – I",
      fonctions: "SD – T (cadentiel) – SD – D – T",
      texte:
        "La cadence finale déploie la formule complète — sous-dominante, tonique cadentielle, demi-diminuée, dominante, tonique — et l'accord final porte le seul Ré# de toute la pièce : une tierce picarde, portée par la voix intérieure la plus grave après la basse.",
    },
  ],
  synthese: [
    {
      titre: "Une seule prolongation pour tout le Stollen",
      texte:
        "Sous les nombreux accords de surface (v6, iv6, vii°4/2, VI, iiø6/5…), le Stollen ne réalise en réalité qu'un seul geste structurel : une tonique qui s'arpège vers sa dominante (la demi-cadence de la mesure 4) avant d'y revenir (le point d'orgue de la mesure 6). Tout le reste — chaque accord chiffré phrase par phrase — prolonge l'un ou l'autre pôle de cette charpente i–V–i, sans le remettre en cause.",
    },
    {
      titre: "Du sommet à la tonique : une seule ligne mélodique",
      texte:
        "Le soprano s'ouvre sur la quinte (Fa#) et referme la pièce sur la tonique (Si) : la même trajectoire descendante qui organise la mélodie de surface — chaque phrase remontant puis retombant — se retrouve, à une échelle bien plus large, dans la forme entière du choral.",
    },
    {
      titre: "L'accord diminué, simple monnayage d'un intervalle",
      texte:
        "La septième diminuée de la mesure 1 et les demi-diminuées des mesures 2, 16 et 18 semblent, à la surface, des événements dramatiques. Ramenées à leur fonction structurelle, ce ne sont que des notes de passage chromatiques harmonisées — la basse aurait pu descendre sans elles. L'ornement fait la couleur ; il ne fait pas la structure.",
    },
  ],
};
