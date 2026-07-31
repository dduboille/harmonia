import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-sibelius-op76-2.ts
 * Harmonia — Jean Sibelius, Étude op. 76 n°2 (Treize Pièces, années 1910),
 * pour la section "conservatoire" du cours 18 (niveau 3 — le développement
 * motivique).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "sibelius-op76-2-annote.musicxml")
 * — jamais reconstruit à la main, cf. feedback-partitions-verbatim. 72
 * mesures, 2/4, la mineur, Leggiero (♩=60) : moto perpetuo d'arpèges intégral,
 * une seule strophe de 36 mesures (A-B-A') jouée deux fois (m.1-36 puis
 * m.37-72). Domaine public en France à partir de 2028 (Sibelius mort en
 * 1957) — usage privé/pédagogique d'ici là, cf. remarque de Dany.
 *
 * Le fichier porte 12 balises <harmony> aux points structurels clés,
 * cohérentes avec les repères <direction><words> que Dany a embarqués dans
 * le XML (non affichés à la gravure) : "a : i" (m.1), "V7 avec Do♮ : la ♭13
 * éolienne d'office" (m.2), "iv (pédale de La)" (m.5), "III∆ 6/4 (le relatif
 * effleuré)" (m.6), "voisines chromatiques (Ré#, Fa#) autour de V" (m.7),
 * "V — période close m.16" (m.8), "B : ♭VII7…" (m.17), "♭VI∆7…" (m.18),
 * "V7 : DESCENTE ANDALOUSE harmonisée en septièmes" (m.19), "i" (m.20),
 * "chaîne ascendante Sol7–La7–Si7 (cresc.)" (m.21), "V au sommet (f)…"
 * (m.24), "A' : V7 saturé…" (m.29), "GRANDE REPRISE…" (m.37), "poco rit. —
 * clausule variée" (m.70), "i final (La1), mineur assumé" (m.72) — tous
 * retrouvés par mapping ligne→mesure, concordance totale avec le brouillon.
 *
 * CURIOSITÉ D'ENCODAGE (à noter, pas une erreur musicale) : 2 des 12 balises
 * <harmony> détournent le champ <root-alter> (normalement un DEMI-TON
 * numérique) pour y loger la lettre de la BASSE d'un accord renversé/pédale
 * — m.5 "D root-alter=A" pour Ré m/La (iv sur pédale de La), m.6
 * "C root-alter=G" pour Do∆7/Sol (III∆7 en 6/4). Probablement un artefact
 * de l'outil ayant généré ces balises (pas de <bass> MusicXML standard
 * utilisé) — non consommé par le rendu (l'affichage vient du
 * `MesureAnalyse[]` ci-dessous, pas d'une lecture des <harmony> à
 * l'exécution), donc sans conséquence, mais à connaître si quelqu'un
 * rouvre ce fichier en pensant lire un <root-alter> normal.
 *
 * Vérifié note à note (script d'extraction dédié, tsx standalone) :
 *  - m.2 : Mi-Sol#-Si-Ré + Do♮ (E7 avec un Do ajouté) — confirme la ♭13
 *    éolienne "d'office" dès la 2e mesure ;
 *  - m.17-20 : Sol7 (♭VII7) → Fa∆7 (♭VI∆7) → Mi7 (V7) → La m (i) — la
 *    descente andalouse confirmée accord par accord, le tétracorde
 *    phrygien La-Sol-Fa-Mi harmonisé en septièmes ;
 *  - m.24 : Mi-Sol#-Si (accord de Mi, V) au sommet du registre (Mi6) ;
 *  - m.72 (accord final) : La-Do-Mi — la TIERCE (Do, tierce MINEURE) EST
 *    présente : "sans tierce picarde" signifiait bien l'absence
 *    d'altération majorisante, pas l'absence de tierce tout court (à ne
 *    pas confondre avec Dido's Lament/cours38, dont l'accord final n'a
 *    littéralement AUCUNE tierce) ;
 *  - la basse la plus grave de toute la pièce est bien La1 (m.72), confirmé.
 *
 * VÉRIFICATION SYSTÉMATIQUE DE LA "RÉPLIQUE EXACTE" (script de comparaison
 * dédié, comparant les 36 signatures de hauteurs des mesures 1-36 contre
 * 37-72) : SUR 36 MESURES, 30 SONT STRICTEMENT IDENTIQUES NOTE POUR NOTE.
 * Les 6 qui diffèrent :
 *  - m.1 vs m.37 : la reprise s'ouvre sur un voicing de main gauche
 *    légèrement différent (basse Do2 au lieu de La2, un Mi3 ajouté dans
 *    l'accord) — un geste de "relance" à l'entrée de la reprise, pas une
 *    erreur ;
 *  - m.25 vs m.61, m.27 vs m.63, m.34 vs m.70 : une seule note mélodique
 *    diffère à chaque fois (substitution d'un degré voisin) ;
 *  - m.35-36 vs m.71-72 : la CLAUSULE FINALE, qui varie EXPLICITEMENT
 *    (poco rit., et la fin réelle sur La1) — exactement ce que le brouillon
 *    annonçait ("seule la clausule finale variant").
 * Le brouillon parlait d'une "réplique exacte... agrégat par agrégat" : vrai
 * à l'écrasante majorité (30/36), mais pas littéralement note pour note sur
 * la totalité — nuance apportée ici plutôt que recopiée telle quelle.
 *
 * Note de comptage (le brouillon annonçait "960 notes vérifiées" — NON
 * confirmé) : 963 <note> bruts, 17 silences, 0 note d'ornement, 0 liaison de
 * tenue → 943 évènements sonores retenus par le parseur (lib/musicxml-
 * parse) — 3e occurrence consécutive du même écart mineur déjà rencontré
 * sur Dido's Lament ("879" vs 838 vérifié) et Haydn 94 ("2229" vs 2086
 * vérifié) : le brouillon (ou sa source) surestime systématiquement le
 * compte de quelques pour cent — toujours vérifier plutôt que recopier.
 *
 * `score.mode` infère correctement "minor" cette fois (contrairement à Dido
 * et à la famille So What/Satin Doll/Jesu) — la mineur est ici assez
 * clairement établi (armure neutre + collecte de hauteurs) pour ne pas
 * dérouter le profil de Krumhansl-Kessler.
 */
export const SIBELIUS_OP76_2_MESURES_1_72 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Etude op. 76 n.2</work-title>
    </work>
  <identification>
    <creator type="composer">Jean Sibelius</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-31</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/30090221/scores/5489821</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2019-03-17</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.056</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.28</page-height>
      <page-width>1190.82</page-width>
      <page-margins type="both">
        <left-margin>28.3446</left-margin>
        <right-margin>28.3446</right-margin>
        <top-margin>51.0205</top-margin>
        <bottom-margin>17.0068</bottom-margin>
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
    <music-font font-family="Leland" />
    <word-font font-family="FreeSerif" font-size="10" />
    <lyric-font font-family="FreeSerif" font-size="11" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="595.41" default-y="1632.26" justify="center" valign="top" font-weight="bold" font-family="Times New Roman" font-size="24">Etude op. 76 n.2</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1162.47" default-y="1532.26" justify="right" valign="bottom" font-weight="bold" font-family="Times New Roman" font-size="13">Jean Sibelius</credit-words>
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
    <measure number="1" width="338.65">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>203.34</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" default-y="60.54" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>60</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="60" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-47.52" relative-x="-24.61" relative-y="-27.32">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-x="-46.03" relative-y="57.9" font-size="11">Leggiero</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-70.24" relative-x="-76.82" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">a : i — étude-moto perpetuo : une texture, l'harmonie seule fait événement</words></direction-type><staff>2</staff></direction><note default-x="83.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.56986" bezier-y="-38.354608" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="115.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
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
      <note default-x="146.83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.925367" bezier-y="-36.999101" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-54.15" relative-x="-7.46" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="210.17" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.56986" bezier-y="-38.354608" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="241.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
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
      <note default-x="273.51" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="305.18" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.925367" bezier-y="-36.999101" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-106.34" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="83.49" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-26.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.83" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.83" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-106.34" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="210.17" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="273.51" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="273.51" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="2" width="265.16">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-70.24" relative-x="-5.22" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="7(♭13)">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 avec Do♮ : la ♭13 éolienne d'office</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.672592" bezier-y="-33.762473" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="41.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
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
      <note default-x="73.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="54.75">3</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="105.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.930677" bezier-y="-28.180233" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="47.99">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-70.24" relative-x="-0.75" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="136.68" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.528751" bezier-y="-20.988983" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="168.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="200.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.166039" bezier-y="-9.160557" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-106.34" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.34" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.34" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-106.34" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="136.68" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-36.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="200.02" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="200.02" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="3" width="265.16">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="41.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="73.34" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="105.01" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.68" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="168.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="231.69" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <words relative-x="3.28" relative-y="23.28" font-style="italic">segue</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="yes" default-y="-91.34" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-24.91" relative-y="-70.8" font-style="italic" font-size="11">simile</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="73.34" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="73.34" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-80.77" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="136.68" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="200.02" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.02" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="265.16">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="41.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="73.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="54.75">3</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="105.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="136.68" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="168.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="231.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="73.34" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="73.34" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.68" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="200.02" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.02" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="265.58">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>149.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.58</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-80.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>A</root-alter></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv (pédale de La)</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="86.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.97" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.27" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="162.57" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="187.87" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="213.18" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="238.48" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="111.97" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="111.97" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.57" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="213.18" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="213.18" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="214.22">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-80.1" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>G</root-alter></root><kind text="∆7">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">III∆ 6/4 (le relatif effleuré)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.6" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.91" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.21" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.81" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-153.58">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.6" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.6" default-y="-108.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.21" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.81" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.81" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="217.78">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">voisines chromatiques (Ré#, Fa#) autour de V</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.3" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.6" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.51" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.37" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.6" default-y="-108.58">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="111.21" default-y="-133.58">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.37" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="8" width="222.34">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V — période close m.16</words></direction-type><staff>2</staff></direction><note default-x="14.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="40.26" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="65.57" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="59.77">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="94.03" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="47.99">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="119.33" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="144.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="62.96">1</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="169.93" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="52.96">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="195.24" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.08">3</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-128.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="14.96" default-y="-118.58">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.33" default-y="-133.58">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="214.22">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-2.24" relative-y="-42.98">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.3" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.6" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.91" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.21" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.81" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.6" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.6" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.21" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.81" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.81" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="267.92">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>149.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.58</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="86.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="112.55" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="54.76">3</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="138.15" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="163.74" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="189.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="214.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="240.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-143.58">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.55" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.55" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.74" default-y="-163.58">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="214.93" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="214.93" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="216.55">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.19" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="112.38" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.56" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.16" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.19" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.19" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.38" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.56" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.56" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="216.55">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.78" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="112.38" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.97" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-143.58">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.19" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.19" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.38" default-y="-163.58">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.56" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.56" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="216.55">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.19" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.38" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="137.97" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.56" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.16" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.19" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.19" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.38" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.56" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.56" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="14" width="216.55">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.1" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.59" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.78" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.38" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="137.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.56" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.16" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-153.58">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.19" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.19" default-y="-108.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.38" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.56" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.56" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="273.98">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>149.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="87.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.35" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="139.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="165.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="191.33" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="220.19" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="246.19" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="113.35" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="165.34" default-y="-125">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="220.19" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="16" width="196.23">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.99" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.99" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="90.45" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="47.99">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="116.44" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.44" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="35.7" relative-x="1.8" relative-y="10.63">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="155.43" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.99" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.44" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.44" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.43" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="17" width="219.75">
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-39.23" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">B : ♭VII7…</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.99" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.99" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="87.98" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="113.98" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="139.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.96" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="191.96" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.99" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.99" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.98" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.96" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="165.96" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="219.75">
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="∆7">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">♭VI∆7…</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.99" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.99" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="87.98" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.98" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="139.97" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.96" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="191.96" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.99" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.99" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.98" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.96" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="165.96" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="224.42">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>B</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 : DESCENTE ANDALOUSE harmonisée en septièmes</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.99" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.99" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="87.98" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="118.64" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="144.64" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.63" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="196.63" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.99" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.99" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.64" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.63" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="170.63" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="20" width="263.43">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>149.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65.94</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="86.4" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.43" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="136.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="161.5" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="186.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="25.46">1</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="211.56" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="236.6" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-140.94">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="111.43" default-y="-105.94">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="111.43" default-y="-95.94">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.5" default-y="-130.94">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="211.56" default-y="-95.94">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="211.56" default-y="-85.94">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="212.07">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">chaîne ascendante Sol7–La7–Si7 (cresc.)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.03" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.07" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.1" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <words font-family="FreeSerif" font-size="12" font-style="italic" default-y="-70.3">cresc.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="-70.3" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="110.13" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="135.17" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="160.2" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.24" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-125.94">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.07" default-y="-90.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.07" default-y="-80.94">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.13" default-y="-110.94">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="160.2" default-y="-90.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="160.2" default-y="-80.94">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="220.8">
      <note default-x="10" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.07" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.1" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="118.86" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="143.9" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.93" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.96" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-120.94">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.07" default-y="-85.94">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.07" default-y="-75.94">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.86" default-y="-105.94">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.93" default-y="-85.94">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.93" default-y="-75.94">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="220.8">
      <note default-x="10" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.03" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.07" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.1" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="118.86" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="143.9" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.93" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.96" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-115.94">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.07" default-y="-80.94">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.07" default-y="-70.94">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.86" default-y="-100.94">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.93" default-y="-80.94">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.93" default-y="-70.94">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="217.03">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-40" relative-x="3.73" relative-y="-28.06">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V au sommet (f) — balancé par sa voisine Fa/Ré# : le ♭6→5 en climax</words></direction-type><staff>2</staff></direction><note default-x="14.96" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="39.99" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="65.03" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="90.06" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="115.1" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="140.13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.16" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.2" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="14.96" default-y="-145.94">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-140.94" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="14.96" default-y="-135.94">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-130.94" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.16" default-y="-125.94">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-22.38" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="25" width="327.63">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.4" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="93.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.59" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="159.69" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="193.45" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="226.54" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="259.64" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="292.73" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.38" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="60.4" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="76.9" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="41.465476" bezier-y="26.305974" number="1" />
          <technical>
            <fingering default-x="-1.5" default-y="15" relative-x="9.93" relative-y="29.78">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="259.64" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="292.73" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="60.4" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering default-x="14.5" default-y="-15" relative-x="-4.51" relative-y="-6.32">4</fingering>
            </technical>
          </notations>
        </note>
      </measure>
    <measure number="26" width="281.52">
      <note default-x="14.96" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="48.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="81.15" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.25" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="147.34" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="180.43" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="213.53" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="246.62" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-41.427195" bezier-y="26.366218" />
          </notations>
        </note>
      <note default-x="14.96" default-y="-135">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.15" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="147.34" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="276.56">
      <note default-x="10" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="43.09" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="76.19" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="109.28" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.38" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="175.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="208.57" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="241.66" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.01" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="26.5" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="41.364885" bezier-y="26.273988" number="1" />
          <technical>
            <fingering default-x="-1.5" default-y="15" relative-x="9.93" relative-y="29.77">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="208.57" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="241.66" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering default-x="14.5" default-y="-15" relative-x="-3.99" relative-y="-6.95">4</fingering>
            </technical>
          </notations>
        </note>
      </measure>
    <measure number="28" width="248.42">
      <note default-x="14.96" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="48.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="81.15" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.25" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.34" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="196.98" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-41.326557" bezier-y="26.334232" />
          </notations>
        </note>
      <note default-x="14.96" default-y="-135">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-130" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="196.98" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="29" width="268.81">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>110.75</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>78.62</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-54.78" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="7(♭9♭13)">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">A' : V7 saturé (Fa = ♭9, Do = ♭13) — la dominante éolienne complète</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.350567" bezier-y="13.938975" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="15.98" relative-y="9">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="86.68" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-26.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.14" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.45" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.350567" bezier-y="13.938975" />
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.523114" bezier-y="-36.745029" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="191.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-76.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="216.39" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="241.7" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.330457" bezier-y="-34.937686" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-138.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.14" default-y="-123.62">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.14" default-y="-113.62">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.76" default-y="-143.62">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.39" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.39" default-y="-118.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="219.26">
      <direction placement="below">
        <direction-type>
          <words default-y="-63.14" relative-y="-35" font-style="italic" font-size="11">segue</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="14.96" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="40.27" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="65.59" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="90.9" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="116.21" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="141.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.84" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.15" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-148.62">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="65.59" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="65.59" default-y="-103.62">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.21" default-y="-153.62">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.84" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.84" default-y="-108.62">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="214.3">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.31" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.63" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.94" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.25" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.88" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.19" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-168.62">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.63" default-y="-118.62">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.63" default-y="-108.62">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.25" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.88" default-y="-123.62">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.88" default-y="-103.62">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="32" width="214.3">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-74.03" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.15">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.31" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.63" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="58.1">3</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="85.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.15">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.88" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-153.62">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.63" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.63" default-y="-118.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.63" default-y="-108.62">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-118.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-108.62">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-3.97" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="33" width="217.45">
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.31" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="63.78" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="89.09" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="114.4" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="139.71" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.03" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.34" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-138.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="63.78" default-y="-123.62">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.78" default-y="-113.62">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.4" default-y="-143.62">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.03" default-y="-133.62">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="165.03" default-y="-118.62">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="34" width="268">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>110.75</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>85.73</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-83.68" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.32" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="88.68" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="139.4" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="164.76" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="190.12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="240.84" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="63.32" default-y="-155.73">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="114.04" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.04" default-y="-110.73">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.76" default-y="-160.73">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="215.48" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="215.48" default-y="-115.73">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="219.02">
      <note default-x="13.04" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="38.4" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="63.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="89.12" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-80.1" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="114.48" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="139.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.5" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="191.86" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13.04" default-y="-165.73">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="63.76" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.76" default-y="-120.73">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.48" default-y="-170.73">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.5" default-y="-135.73">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.5" default-y="-125.73">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="36" width="217.77">
      <note default-x="10" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.72" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.08" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.44" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.79" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.26" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.62" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-175.73">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.72" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.72" default-y="-130.73">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.44" default-y="-180.73">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.26" default-y="-135.73">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="165.26" default-y="-120.73">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="37" width="214.67">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">GRANDE REPRISE : toute la strophe de 36 mesures rejouée (m.37-72 = 1-36)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.36" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.72" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.08" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="111.44" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="136.79" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.15" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.51" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-94.16" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-185.73">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.72" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.72" default-y="-125.73">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.72" default-y="-115.73">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.15" default-y="-140.73">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.15" default-y="-125.73">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.15" default-y="-115.73">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-4.96" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="38" width="214.67">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.36" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.08" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="136.79" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-155.73">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.72" default-y="-130.73">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.72" default-y="-110.73">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.44" default-y="-175.73">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.15" default-y="-130.73">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.15" default-y="-110.73">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="267.25">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>110.75</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.58</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="86.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="112.38" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.89" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="163.4" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="188.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="214.42" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="239.94" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.38" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.38" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.4" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="214.42" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="214.42" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="40" width="215.88">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="112.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.57" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-143.58">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.02" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.02" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.04" default-y="-163.58">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.06" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.06" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="41" width="215.88">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.53" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.04" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="137.55" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.57" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.02" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.02" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.04" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.06" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.06" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="42" width="215.88">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.1" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.51" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.53" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.04" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="137.55" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="163.06" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.57" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-153.58">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.02" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.02" default-y="-108.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.04" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.06" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="163.06" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="219.23">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.51" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.02" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.53" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.04" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="137.55" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.41" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="191.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.02" default-y="-108.58">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.04" default-y="-133.58">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.41" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="44" width="271.88">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>110.75</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="63.32" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="88.79" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.26" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="142.73" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="47.99">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="168.2" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="193.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="62.96">1</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="219.14" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.61" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="63.32" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.32" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="168.2" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="215.56">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-34.5" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.47" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.88" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.94" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.94" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.88" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.82" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.82" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="215.56">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.47" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.88" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.82" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.94" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.94" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.88" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.82" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.82" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="47" width="215.56">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.47" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.88" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.94" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.94" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.88" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.82" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.82" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="48" width="215.56">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.47" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="86.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="111.88" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="137.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.82" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.94" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.94" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.88" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="162.82" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="162.82" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="49" width="272.12">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>110.75</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.58</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="61.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="87.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.6" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="139.72" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="165.84" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="191.96" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="218.08" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.2" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="113.6" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="113.6" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.84" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="218.08" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="218.08" default-y="-98.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="50" width="220.76">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.1" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="36.12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.24" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="88.36" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="114.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="140.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.72" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-153.58">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="62.24" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="62.24" default-y="-108.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.48" default-y="-138.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.72" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.72" default-y="-103.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="51" width="223.5">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="36.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.24" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="88.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="114.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="140.6" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="169.46" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="195.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="62.24" default-y="-108.58">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.48" default-y="-133.58">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="169.46" default-y="-113.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="52" width="196.98">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.17">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="36.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="90.7" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="116.82" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.82" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="156" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-128.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="62.24" default-y="-118.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.82" default-y="-148.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.82" default-y="-128.58">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="156" default-y="-133.58">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="220.76">
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-43.52" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="10" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="36.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.24" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="88.36" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="114.48" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="140.6" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.72" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.84" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-133.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="62.24" default-y="-98.58">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="62.24" default-y="-88.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.48" default-y="-118.58">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.72" default-y="-98.58">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.72" default-y="-88.58">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="265.13">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>82.48</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="86.61" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.85" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.1" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="162.35" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="187.59" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="212.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="238.08" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-147.48">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="111.85" default-y="-112.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="111.85" default-y="-102.48">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.35" default-y="-132.48">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="212.84" default-y="-112.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="212.84" default-y="-102.48">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="219.18">
      <note default-x="10" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.25" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.49" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.74" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="116.4" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="141.65" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.14" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-152.48">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.49" default-y="-117.48">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.49" default-y="-107.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.4" default-y="-137.48">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.89" default-y="-117.48">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.89" default-y="-107.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="56" width="213.77">
      <note default-x="10" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.25" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.49" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.74" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="110.98" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="136.23" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.47" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="186.72" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-157.48">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.49" default-y="-122.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.49" default-y="-112.48">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.98" default-y="-147.48">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.47" default-y="-112.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.47" default-y="-102.48">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="57" width="213.77">
      <note default-x="10" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.74" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-69.55" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="110.98" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="136.23" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.47" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="186.72" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-142.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.49" default-y="-107.48">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.49" default-y="-97.48">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="110.98" default-y="-127.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.47" default-y="-107.48">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.47" default-y="-97.48">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="222.28">
      <note default-x="10" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="60.49" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="85.74" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="119.5" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="144.75" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="169.99" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="195.24" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-137.48">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.49" default-y="-102.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.49" default-y="-92.48">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.5" default-y="-122.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="169.99" default-y="-102.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="169.99" default-y="-92.48">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="319.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>96.08</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="93.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="125.03" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="156.86" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="190.63" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="222.46" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.3" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="286.13" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="61.36" default-y="-146.08">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="125.03" default-y="-111.08">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="125.03" default-y="-101.08">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.63" default-y="-131.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="254.3" default-y="-111.08">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="254.3" default-y="-101.08">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="274.53">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-31.2" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="18.06" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="49.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="81.73" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.56" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="145.4" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="177.23" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="209.06" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="240.9" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="18.06" default-y="-116.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="34.56" default-y="-111.08" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-106.08">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="34.56" default-y="-101.08" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="209.06" default-y="-156.08">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="268.4">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="10" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="41.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="73.67" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="105.5" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="139.26" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="171.1" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.93" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="234.77" default-y="25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-71.03" relative-x="14.89" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-161.08">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="26.5" default-y="-161.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="40.136595" bezier-y="25.880229" number="1" />
          <technical>
            <fingering default-x="-1.5" default-y="15" relative-x="9.95" relative-y="28.77">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="202.93" default-y="-156.08">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="234.77" default-y="-161.08">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-171.08">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering default-x="14.5" default-y="-15" relative-x="-5" relative-y="-6">4</fingering>
            </technical>
          </notations>
        </note>
      </measure>
    <measure number="62" width="271.43">
      <note default-x="14.96" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="46.8" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.63" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="110.46" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.3" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="174.13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="205.96" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="237.8" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-176.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-40.097685" bezier-y="25.940474" />
          </notations>
        </note>
      <note default-x="14.96" default-y="-166.08">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="78.63" default-y="-156.08">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="142.3" default-y="-156.08">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="272.78">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>70.66</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="60.4" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="86.08" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="111.76" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.43" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="168.27" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="193.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="219.63" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="245.3" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="60.4" default-y="-135.66">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="76.9" default-y="-135.66" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="33.206754" bezier-y="23.535645" number="1" />
          <technical>
            <fingering default-x="-1.5" default-y="15" relative-x="10" relative-y="28">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="219.63" default-y="-130.66">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="245.3" default-y="-135.66">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="60.4" default-y="-145.66">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering default-x="14.5" default-y="-15" relative-x="-2.97" relative-y="-7.95">4</fingering>
            </technical>
          </notations>
        </note>
      </measure>
    <measure number="64" width="201.97">
      <note default-x="14.96" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="40.64" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="66.31" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="91.99" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="117.67" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.18" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-150.66">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-145.66" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.163972" bezier-y="23.595889" />
          </notations>
        </note>
      <note default-x="14.96" default-y="-140.66">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-135.66" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.18" default-y="-130.66">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="220">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-50.8" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="35.68" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.14" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="89.82" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-76.14" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="115.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="141.17" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.52" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-130.66">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="64.14" default-y="-115.66">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.14" default-y="-105.66">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.49" default-y="-135.66">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.84" default-y="-125.66">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="166.84" default-y="-110.66">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="66" width="222.17">
      <note default-x="14.96" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="40.64" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="66.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="91.99" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="117.67" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.98">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="143.34" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="169.02" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="194.69" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-140.66">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="66.31" default-y="-125.66">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="66.31" default-y="-95.66">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="117.67" default-y="-145.66">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="169.02" default-y="-125.66">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="169.02" default-y="-100.66">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="67" width="217.21">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.68" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.35" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="87.03" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="112.7" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="138.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="164.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.73" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="42.96">4</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-160.66">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="61.35" default-y="-110.66">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.35" default-y="-100.66">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.7" default-y="-125.66">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="164.06" default-y="-115.66">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="164.06" default-y="-95.66">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="68" width="279.69">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.58</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.15">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="88.43" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.5" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="142.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-69.01" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="169.63" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="196.69" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="223.76" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="250.82" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-69.39" relative-x="-5.01" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="61.36" default-y="-143.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-108.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="223.76" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="223.76" default-y="-108.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="223.76" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-6.99" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="69" width="229.72">
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="37.07" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="65.53" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="92.59" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.1" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="119.66" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="146.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="173.79" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.86" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="43.2">5</fingering>
            </technical>
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-128.58">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="65.53" default-y="-113.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="65.53" default-y="-103.58">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.66" default-y="-133.58">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="173.79" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="173.79" default-y="-108.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="70" width="233.29">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">poco rit. — clausule variée</words></direction-type><staff>2</staff></direction><note default-x="14.96" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" default-y="15.74">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="42.03" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="69.09" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="96.16" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-x="16.88" relative-y="32.9">poco rit.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="123.22" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="150.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="177.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="204.42" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="14.96" default-y="-138.58">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="69.09" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="69.09" default-y="-93.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.22" default-y="-143.58">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="177.36" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="177.36" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="228.33">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="37.07" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="91.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="118.26" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="145.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="172.4" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-158.58">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="64.13" default-y="-108.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.13" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.26" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="172.4" default-y="-113.58">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="172.4" default-y="-93.58">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="72" width="163.1">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="0.3" default-y="-38.85" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i final (La1), mineur assumé</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-123.84" relative-x="-3.97" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-118.58">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="50.6" default-y="-123.58">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.6" default-y="-108.58">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.6" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.2" default-y="-108.58">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.2" default-y="-98.58">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.2" default-y="-88.58">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="10.92" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="10" default-y="-178.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
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

export const SIBELIUS_OP76_2_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "La m",     degre: "i (thème, moto perpetuo)",         fonction: "T" },
  { numero: 2,  nom: "Mi7(♭13)", degre: "V7♭13 (♭13 éolienne d'office)",    fonction: "D" },
  { numero: 5,  nom: "Ré m/La",  degre: "iv (pédale de La)",                fonction: "SD" },
  { numero: 6,  nom: "Do∆7/Sol", degre: "III∆7 6/4 (le relatif effleuré)",  fonction: "?" },
  { numero: 7,  nom: "(voisines)", degre: "chromatismes (Ré#, Fa#) autour de V", fonction: "D" },
  { numero: 8,  nom: "Mi",       degre: "V (période close à m.16)",         fonction: "D" },
  { numero: 17, nom: "Sol7",     degre: "♭VII7 (descente andalouse)",       fonction: "?" },
  { numero: 18, nom: "Fa∆7",     degre: "♭VI∆7 (descente andalouse)",       fonction: "?" },
  { numero: 19, nom: "Mi7",      degre: "V7 (descente andalouse)",          fonction: "D" },
  { numero: 20, nom: "La m",     degre: "i (fin de la descente)",           fonction: "T" },
  { numero: 21, nom: "Sol7",     degre: "♭VII7 (chaîne ascendante, départ)", fonction: "?" },
  { numero: 24, nom: "Mi",       degre: "V (climax, ff)",                   fonction: "D" },
  { numero: 29, nom: "Mi7♭9♭13", degre: "V7♭9♭13 (dominante éolienne complète)", fonction: "D" },
  { numero: 37, nom: "La m",     degre: "i (grande reprise, m.37-72 = 1-36)", fonction: "T" },
  { numero: 70, nom: "(instable)", degre: "poco rit. — clausule variée",     fonction: "?" },
  { numero: 72, nom: "La m",     degre: "i (final, mineur assumé, sans tierce picarde)", fonction: "T" },
];

export const SIBELIUS_OP76_2_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "La mineur du début à la fin — jamais de modulation réelle, seulement des couleurs (♭13 éolienne, tétracorde andalou) posées sur la même tonique.",
  metrique: "2/4. Leggiero, ♩=60, moto perpetuo (arpèges ininterrompus du début à la fin).",
  forme: "Une strophe de 36 mesures en trois volets (A m.1-16, B m.17-28, A' m.29-36) jouée deux fois intégralement (m.37-72 = m.1-36), avec une clausule finale variée.",
  sections: [
    {
      label: "Mesures 1-16",
      titre: "A : l'alternance i-V, à l'école — et la ♭13 éolienne d'office",
      chiffrage: "i | V7♭13 | ... iv (pédale) ... III∆7 6/4 ... | (voisines chromatiques) | V (période close)",
      fonctions: "T | D ... SD ... ? ... | D | D",
      texte: "Une période d'école sur la polarité tonique-dominante la plus simple — mais dès la deuxième mesure, le V7 porte un Do naturel qui n'a rien de diatonique : la sixte mineure du mode éolien (♭13), posée d'emblée sans qu'aucune modulation ne l'appelle. Le détour passe par un iv sur pédale de La, puis un III∆7 en 6/4 qui effleure le relatif majeur sans jamais l'établir, avant que des voisines chromatiques (Ré#, Fa#) ne resserrent la tension sur V. La période se referme, puis se répète note pour note.",
    },
    {
      label: "Mesures 17-28",
      titre: "B : la descente andalouse et la chaîne ascendante",
      chiffrage: "♭VII7 – ♭VI∆7 – V7 – i | ♭VII7 → V7 (chaîne ascendante, cresc.) → V (climax, ff)",
      fonctions: "? – ? – D – T | ? → D → D",
      texte: "Le cœur de la pièce, et une descente qui n'a plus rien de classique : le tétracorde phrygien La-Sol-Fa-Mi, harmonisé en septièmes-couleurs (Sol7-Fa∆7-Mi7-La m) — le même geste que le lamento de Purcell (cours 38), mais en version diatonique et dansante, avec l'habillage harmonique du début du XXe siècle. Puis l'inverse : une chaîne ascendante de dominantes (Sol7 → La7 → Si7, en crescendo) hisse la ligne jusqu'à un climax fortissimo sur V, où la note aiguë est balancée par sa voisine chromatique — le ♭6→5, déjà rencontré ailleurs dans ce corpus, promu ici figure de sommet.",
    },
    {
      label: "Mesures 29-36",
      titre: "A' : la dominante éolienne au complet",
      chiffrage: "V7♭9♭13 ...",
      fonctions: "D ...",
      texte: "La reprise assombrie s'ouvre sur l'accord le plus saturé de toute la pièce : un V7 qui porte SIMULTANÉMENT sa neuvième mineure et sa treizième mineure — la dominante éolienne au grand complet, le même agrégat que le Grave de Beethoven ou les cadences de Chopin, ici en simple couleur de passage, pianissimo. Une descente chromatique à la basse referme la strophe sur la tonique.",
    },
    {
      label: "Mesures 37-69",
      titre: "La grande reprise : presque à l'identique",
      chiffrage: "(la strophe entière, rejouée)",
      fonctions: "(identiques)",
      texte: "Toute la strophe de 36 mesures revient, et l'immense majorité est une réplique note pour note (30 des 36 mesures, vérifiées une à une) — mais pas absolument toutes : la reprise s'ouvre sur un voicing de main gauche légèrement redistribué (un geste de relance), et trois mesures isolées portent chacune une seule note mélodique différente. La répétition n'est donc pas un simple copier-coller : c'est un dispositif qui se permet d'infimes écarts, invisibles à moins de les chercher un par un — le paradoxe même de la répétition en musique, où répéter à l'identique et transformer un tout petit détail peuvent produire, à l'oreille, une impression rigoureusement semblable.",
    },
    {
      label: "Mesures 70-72",
      titre: "La clausule finale : poco rit., mineur assumé",
      chiffrage: "... i (La1)",
      fonctions: "... T",
      texte: "Seule variation annoncée d'avance : la toute fin. Un poco rit. ralentit le moto perpetuo pour la première fois de la pièce, et la strophe s'achève sur la note la plus grave de tout le morceau (La1) — un accord de la mineur qui garde sa tierce mineure jusqu'au bout, sans tierce picarde : la couleur modale de la pièce est assumée jusqu'à la toute dernière verticalité.",
    },
  ],
  synthese: [
    {
      titre: "Le paradoxe de la répétition, à l'échelle de la forme entière",
      texte: "Cette étude pousse à l'extrême ce que le cours explore à l'échelle du motif : ici, c'est une strophe ENTIÈRE de 36 mesures qui est répétée — et la vérification note à note révèle que la répétition n'est jamais tout à fait totale (30 mesures sur 36 strictement identiques, mais une reprise légèrement redistribuée et 3 substitutions mélodiques isolées). Répéter à l'identique et transformer un détail infime peuvent produire, à l'oreille, l'impression d'une seule et même chose : le matériau musical peut se répéter sans jamais être un simple copier-coller.",
    },
    {
      titre: "Du vocabulaire nouveau sur une syntaxe ancienne",
      texte: "La ♭13 éolienne systématique et la descente en septièmes-couleurs (Sol7-Fa∆7-Mi7-i) appartiennent au vocabulaire harmonique du début du XXe siècle — mais la forme qui les porte (période fermée, cadences franches, alternance i-V) reste d'une clarté toute classique. Le vocabulaire change, la grammaire formelle ne bouge pas.",
    },
    {
      titre: "Lien de corpus : la descente andalouse et le lamento de Purcell",
      texte: "Le tétracorde phrygien harmonisé en septièmes (♭VII7-♭VI∆7-V7-i) de la section B reprend, sous un tout autre habillage, le même principe que le tétracorde chromatique descendant du ground de Dido's Lament (cours 38, 1689) : une ligne mélodique fixe et ancienne, redécouverte comme grille harmonique à peu près à chaque grande période de l'histoire de la tonalité.",
    },
  ],
};
