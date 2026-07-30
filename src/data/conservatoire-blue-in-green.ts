import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-blue-in-green.ts
 * Harmonia — Blue in Green (Miles Davis & Bill Evans, Kind of Blue, 1959),
 * transcription intégrale pour piano (311 mesures, 3/4 rubato), pour la
 * section "conservatoire" du cours 35 (niveau 5 — jazz avancé :
 * reharmonisation et improvisation).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "blue-in-green-annote.musicxml")
 * — jamais reconstruit à la main, cf. feedback-partitions-verbatim. Aucune
 * métadonnée ajoutée ici : le fichier porte déjà <movement-title>Blue in
 * Green</movement-title> et le compositeur "Miles Davis & Bill Evans"
 * (attribution volontairement partagée — Dany prend acte de la dispute de
 * paternité, Evans ayant toujours revendiqué la pièce).
 *
 * ŒUVRE PROTÉGÉE — usage privé exclusivement, même réserve que les autres
 * standards de jazz de ce chantier (Coltrane/Davis/Ellington).
 *
 * Numérotation des mesures COMMENÇANT À 0 (mesure 0 = intro rubato ;
 * "mesure 2" dans la prose de Dany = mesure XML n°1). 311 mesures (0-310).
 *
 * Vérifications effectuées (scripts jetables, supprimés après usage) :
 * - Structure : 311 mesures, 3/4, armure -1 (1 bémol). Confirmé.
 * - Ped. sempre dopo : présent une seule fois, mesure XML n°1 (= "mesure 2"
 *   de Dany). Note de précision : "sempre DOPO" signifie un re-pédalage
 *   légato après chaque nouvelle harmonie (technique Evans/Debussy), pas une
 *   unique pédale tenue sans interruption sur toute la pièce — nuance
 *   incorporée dans la prose ci-dessous sans remettre en cause l'observation
 *   de Dany sur la filiation stylistique.
 * - Le turnaround Cm9–F13 (ii–V de Sib, pas de Ré) est exactement aux
 *   mesures 31–32. Confirmé — c'est bien ce "ii–V qui ne ramène jamais à la
 *   tonique" qui rend le cycle décentré.
 * - E7 (m.11) résout bien sur du mineur (contenu La-Si-Ré-Mi à la mesure 14,
 *   sans Do# — donc Am, pas La majeur). Confirmé.
 * - Les 3 fautes du transcripteur signalées par Dany sont TOUTES confirmées
 *   note à note, et Dany avait déjà lui-même inséré ses propres corrections
 *   dans le fichier (balises <harmony> + <direction><words> supplémentaires,
 *   jamais retirées, conservées telles quelles dans cet embed verbatim) :
 *     - m.38 : le "B7" du transcripteur est faux — la basse réelle est
 *       Sib1, confirmée dans le relevé (subV de La7 : Sib7(#9#11)).
 *     - m.77 et m.219 : les deux "A# major" sont bien des Si♭ majeurs purs
 *       en enharmonie fautive (Fa-Sib-Ré) — confirmé sur les deux mesures.
 * - CORRECTION APPORTÉE au brouillon de Dany, confirmée avec lui avant
 *   rédaction : à la mesure 39 (saturation du A7), le fichier contient bien
 *   la 9e bémol (Sib) et la 9e dièse (Do naturel, absente de la liste de
 *   notes du brouillon qui ne citait que "Do#" = la tierce, une note
 *   d'accord) — mais AUCUN fa naturel n'existe dans cette mesure. La
 *   "13e bémol" annoncée est en réalité une 13e NATURELLE (Fa#), la couleur
 *   brillante et non altérée. Dany a confirmé : "b9 + #9 + 13 naturelle
 *   (pas ♭13)". Par ailleurs, l'empilement n'est pas un accord unique frappé
 *   d'un coup : c'est un geste linéaire (Ré-Mi-Fa#-Sol/Do/Do#-Sib) sur une
 *   pédale de Sol (basse La tenue), que la pédale "sempre dopo" fait sonner
 *   ensemble par résonance — cohérent avec l'esthétique décrite par Dany,
 *   reformulé avec précision plutôt que contredit.
 * - La fin (m.308-310) est confirmée exactement : Ré-Mi-La (couleur sus2)
 *   puis l'accord final tenu Ré + La + Do# (Do# écrit Réb dans le fichier,
 *   enharmonie déjà annotée par Dany lui-même dans une balise <direction>
 *   à la mesure 309) — un ∆7 sans tierce, ni majeur ni mineur.
 * - 2115 balises <note> dans le fichier brut (111 silences, 619 liaisons de
 *   tenue en "stop", 3 notes d'ornement) → 1382 événements sonores distincts
 *   après fusion des liaisons par notre parseur partagé (convention déjà
 *   établie sur BWV847 cette session, ici à plus grande échelle du fait du
 *   rubato/pédale qui multiplie les tenues liées).
 */
export const BLUE_IN_GREEN_MESURES_0_310 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <movement-title>Blue in Green</movement-title>
  <identification>
    <creator type="composer">Miles Davis &amp; Bill Evans</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-30</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/58141441/scores/9332566</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2022-12-26</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Apple Macintosh</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99912</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1697.35</page-height>
      <page-width>1200.15</page-width>
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
    <credit-words default-x="600.08" default-y="1611.63" justify="center" valign="top" font-size="22">Blue in Green</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.43" default-y="1511.63" justify="right" valign="bottom">Miles Davis &amp; Bill Evans
</credit-words>
    <credit-words>Transcr. P-C Langlais</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no" />
      <score-instrument id="P1-I1">
        <instrument-name />
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>94.4882</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="0" implicit="yes" width="241.69">
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
        <divisions>12</divisions>
        <key>
          <fifths>-1</fifths>
          <mode>major</mode>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" relative-x="7.97" relative-y="18.67">
            <beat-unit>quarter</beat-unit>
            <per-minute>172</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="172" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-x="-102.47" relative-y="19.26" font-style="italic">Rubato</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">intro rubato : Dm13 — la « tonique » posée hors cycle</words></direction-type><staff>2</staff></direction><note default-x="101.61" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-49.5" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="161.46" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="188.07" default-y="-20">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m13">minor-13th</kind>
        </harmony>
      <note default-x="206.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.83" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="206.83" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="101.61" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="161.46" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="188.07" default-y="-125">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="206.83" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="206.83" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="206.83" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="1" width="90.68">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="-19.35" relative-y="-75.92" font-style="italic">Ped. sempre dopo</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-99.56" relative-x="-0.21" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-185">
        <rest />
        <duration>36</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31" default-y="-180" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="130.18">
      <note default-x="18.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.64" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="58.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.64" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.48" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-1.89" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="3" width="125.31">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="7/">major</kind>
        <degree>
          <degree-value>7</degree-value>
          <degree-alter>-1</degree-alter>
          <degree-type>add</degree-type>
          </degree>
        </harmony>
      <note default-x="23.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="53.64" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="23.74" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="53.64" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="35.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="53.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="23.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="53.64" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="23.74" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="83.6" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="136.48">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.78" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.78" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.68" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.78" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="106.68" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-93.25" relative-x="19.51" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="0.81" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="5" width="97.6">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="maj9">major-ninth</kind>
        </harmony>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">LE CYCLE DE 10 TEMPS FORTS : ♭VI∆(#11) – V7alt – i – V7/v – v – i – ♭VI – V7 – i – (ii/♭VI–V/♭VI)</words></direction-type><staff>2</staff></direction><note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-90.28" relative-x="30.74" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-130" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="156.76">
      <note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.83" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="77.83" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="93.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="115.05" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-130" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="1.44" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="7" width="150.48">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>139.21</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="81.1" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.1" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-94.52" relative-x="17.08" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.1" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.1" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="103.64">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.51" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="48.54" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-2.28" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="9" width="82.37">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-52.11" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-76" relative-x="19.35" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="103.64">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-77.09" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="66.3" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="2.5" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="11" width="108.71">
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.86" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.86" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.86" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.86" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.86" default-y="-15" />
        <stem>up</stem>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-85.33" relative-x="35.9" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="48.54" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="12" width="147.81">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="58.05" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="58.05" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="87.97" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="110.47" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-3.12" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="13" width="139.15">
      <note default-x="13" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="66.3" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="97.45" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="97.45" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="109.35" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="66.3" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="97.45" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="97.45" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="14" width="82.37">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-77.98" relative-x="-4.36" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="2.84" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="15" width="110.54">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.69" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="81.69" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-76" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="18.64" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="16" width="157.04">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>139.21</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>69.08</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-51.76" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="79.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.38" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-79.71" relative-x="28.46" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.48" default-y="-164.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-164.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-144.08">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-144.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-129.08">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-124.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="17" width="134.32">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-72.96" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="52.84" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.68" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-164.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-164.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-144.08">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-144.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-129.08">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-124.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-1.94" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="18" width="97.48">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="maj7">major-seventh</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-52.56" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-25" />
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
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-65" relative-x="18.22" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-149.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-144.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-114.08">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-114.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="19" width="121.32">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
          <dynamics default-x="-1.18" relative-x="23.8" relative-y="28.65">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="59.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.76" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-149.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-144.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-114.08">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-114.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="20" width="115.81">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-x="51.18" relative-y="-34.21">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="above">
        <direction-type>
          <bracket type="start" number="1" line-end="none" line-type="solid" default-y="44.37" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
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
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-149.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-144.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-114.08">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-114.08" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="63.5" default-y="-104.08">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="81.5" default-y="-104.08" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.5" default-y="-94.08">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="81.5" default-y="-94.08" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="131.7">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.4" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="97.4" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-129.08">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="52.84" default-y="-129.08">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="79.4" default-y="-119.08">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.4" default-y="-114.08" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-0.53" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="22" width="145.11">
      <note default-x="24.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <bracket type="stop" number="1" line-end="none" relative-x="-22.65" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="72.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="103.47" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.9" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="24.9" default-y="-114.08">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.9" default-y="-94.08">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.47" default-y="-129.08">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="125.93">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="90.47" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="108.47" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="55.57" default-y="-40">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>2</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-129.08">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="72.76" default-y="-129.08">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="179.93">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>139.21</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="118.94" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="118.94" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.94" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-115">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="118.94" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.94" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>12</duration>
        </forward>
      </measure>
    <measure number="25" width="93.95">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-140" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="26" width="119.08">
      <note default-x="18.64" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="58.1" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="58.1" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-115">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-88.21" relative-x="-15.51" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="58.1" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="70" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-170" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="27" width="89.83">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="28" width="126.74">
      <note default-x="24.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="42.9" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="42.9" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="74.92" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="92.92" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-3.73" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="29" width="137.29">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m13">minor-13th</kind>
        </harmony>
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="56.58" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="96.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="96.04" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="168.43">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="49.17" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="76.29" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="94.29" default-y="-25" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="109.64" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="127.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="39.31" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="98.52" default-y="-125">
        <rest />
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="112.92" default-y="-120" />
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="113.44">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">turnaround Cm9–F13 : il ramène à Si♭, pas à Ré — le cercle n'a pas de début</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.19" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-79.83" relative-x="-23.41" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="72.19" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.19" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="18.22" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="32" width="229.35">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>139.21</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.1" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="165.94" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <staff>1</staff>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="13">dominant-13th</kind>
        </harmony>
      <note default-x="192.1" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
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
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="192.1" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
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
          <tied type="start" />
          </notations>
        </note>
      <note default-x="192.1" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <words default-y="8.41" relative-y="10">sourd.</words>
          </direction-type>
        <sound>
          <play>
            <mute>on</mute>
            </play>
          </sound>
        <staff>2</staff>
        </direction>
      <note default-x="81.1" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.05" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-87.43" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="192.1" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>quarter</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="149.62">
      <note default-x="13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
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
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="80.42" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="117.86" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="117.86" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="117.86" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="80.42" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="117.86" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="100.26">
      <note default-x="13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
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
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-1.98" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="35" width="107.19">
      <note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-90.42" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="107.19">
      <note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="0.23" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="37" width="158.88">
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.15" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.58" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.62" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="38" width="176.21">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="7(#9#11)">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">subV de La7 — le chiffrage « B7 » du fichier est FAUX (basse Si♭1)</words></direction-type><staff>2</staff></direction><note default-x="19.92" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.9" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.48" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="144.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <rest />
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-110" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="255.93">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>70.02</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">A7 saturé (♭9, #9, ♭13) : le voicing altéré d'Evans</words></direction-type><staff>2</staff></direction><note default-x="79.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-85.61" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="106.57" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="133.69" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="167.15" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="167.15" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="179.05" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="167.15" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.05" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="199.05" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="210.95" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="199.05" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.13" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-175.02" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="40" width="164.1">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-65.21" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="35.17" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="53.18" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="99.97" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="117.97" default-y="-175.02" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="134.3" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="116.35">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.93" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-175.02" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="140.38">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-175.02" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.49" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.12" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="117.79">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m11">minor-11th</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-93.35" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.49" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="82.5" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.49" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="82.5" default-y="-55" />
        <accidental>natural</accidental>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-165.02">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-165.02" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="44" width="116.35">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-72.95" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.93" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-165.02">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.93" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="45" width="117.79">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.49" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="82.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-180.02">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-175.02" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-130.02">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-125.02" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="177.47">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.81</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.58" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="145.58" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="47" width="140.2">
      <note default-x="18.64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="35.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="52.36" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>E</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="90.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="108.31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-170" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.3" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="108.31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="48" width="109.65">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.94" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="49" width="131.77">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.91" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="87.91" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="101.97" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.91" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="50" width="128.05">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-190" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="51" width="164.83">
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="50.94" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m9">minor-ninth</kind>
        </harmony>
      <note default-x="88.24" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="106.24" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="104.27" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="129.57" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="89.78">
      <note default-x="15.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="33.84" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="15.84" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="33.84" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="15.84" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="33.84" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-94.32" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="15.84" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="33.84" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.84" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="33.84" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="53" width="86.94">
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="54" width="194.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.53</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="99.49" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="81.48" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="99.49" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="81.48" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="99.49" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="145.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="163.65" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-88.95" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.48" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.48" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="108.49" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="145.64" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="163.65" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.64" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="163.65" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="171.1">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.75" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.75" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.71" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
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
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="129.45" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="92.71" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="117.48" default-y="-125">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-3.07" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="136.24" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="56" width="109.01">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m11">minor-11th</kind>
        </harmony>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-83.28" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.1" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="78.11" default-y="-100" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.1" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="78.11" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="1.41" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="57" width="109.01">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.1" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="78.11" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.1" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="78.11" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="111.85">
      <note default-x="15.84" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="33.84" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.84" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="33.84" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="62.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="80.95" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="15.84" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="33.84" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.84" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="33.84" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="62.95" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="80.95" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="62.95" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="80.95" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="112.85">
      <note default-x="16.84" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="16.84" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="34.84" default-y="-25" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="81.95" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.95" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="81.95" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.84" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.84" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.84" default-y="-75">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-70" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="92.38">
      <harmony print-frame="no">
        <root>
          <root-step>B</root-step>
          <root-alter>-1</root-alter>
          </root>
        <kind text="maj9">major-ninth</kind>
        </harmony>
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-65" relative-x="28.84" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.92" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="127.96">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.28" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.05" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="154.25">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.81</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="63" width="129.92">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.37" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.74" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="112.09">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="7">dominant</kind>
        </harmony>
      <note default-x="61.64" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.64" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.64" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="79.64" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="change" line="yes" sign="no" default-y="-99.28" relative-x="29.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="145.13">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="51.37" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.74" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="115.33" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="66" width="87.77">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="2.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="67" width="218.38">
      <note default-x="21.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="33.02" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="21.12" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.24" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="83.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.37" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="178.49" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="21.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="39.12" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.03" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="83.54" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="113" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.37" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="188.58" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="68" width="93.41">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m13">minor-13th</kind>
        </harmony>
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="87.77">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="70" width="150.74">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>105.92</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="166.13">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.22" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="66.22" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="98.69" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="123.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="98.69" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="116.69" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="136.33" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="72" width="137.05">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind text="13">dominant-13th</kind>
        </harmony>
      <note default-x="23.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="53.64" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="23.74" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="53.64" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="35.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="53.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.76" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.73" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="23.74" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="98.73" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="73" width="139.16">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="49.53" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="73.88" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="100.84" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="74" width="136.55">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="37.35" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="61.7" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.7" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="75" width="107.4">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.3" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.3" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.3" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-140" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.3" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.3" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="76" width="84.25">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="77" width="107.4">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">section solo : le cycle se comprime (harmonies aux durées divisées)</words></direction-type><staff>2</staff></direction><harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Si♭ majeur — « A# major » du fichier : enharmonie fautive (idem m. 219)</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.3" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.3" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.3" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.3" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="78" width="166.72">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.81</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89.9" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="107.91" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.9" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="107.91" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.9" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="107.91" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="89.9" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="107.91" default-y="-130" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.9" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="107.91" default-y="-100" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="79" width="170.12">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.37" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="119.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="140.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
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
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="98.82" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="80" width="124.85">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="46.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="63.87" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.87" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.87" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="63.87" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="81" width="130.56">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-70.77" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="52.45" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.45" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="78.75" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="96.75" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="82" width="167.39">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-50.37" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-73.49" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="87.76" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="114.72" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="132.25" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="150.25" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.62" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="57.62" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.96" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="83" width="137.84">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-53.09" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="56.57" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.03" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="104.03" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="84" width="131.22">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.41" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.41" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.41" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.41" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.41" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.41" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.41" default-y="-90">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.41" default-y="-90" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="85" width="202.14">
      <print new-page="yes" page-number="3">
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
      <note default-x="79.48" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.57" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.03" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-90">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="160.03" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="86" width="95.27">
      <note default-x="16.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="16.84" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.84" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="16.84" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="87" width="206.6">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="18.64" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="45.51" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.38" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="99.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="126.11" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.38" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="126.11" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="152.98" default-y="-125">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="171.74" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="88" width="164.49">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.87" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="66.74" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.58" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-83.25" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="111.6" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="129.6" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111.6" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="129.6" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111.6" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="129.6" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111.6" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="129.6" default-y="-15" />
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="89" width="133.06">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-62.85" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
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
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="53.3" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="80.17" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="98.17" default-y="-170" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="90" width="91.43">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="91" width="135.71">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.93" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="53.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.6" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.6" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="92" width="178.93">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-51.89" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="79.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.54" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.54" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.54" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="118.54" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="93" width="89.07">
      <note default-x="13" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="94" width="116.57">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.18" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="95" width="119.47">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="48.54" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.54" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="48.54" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="48.54" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.15" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="86.16" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.15" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="86.16" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.15" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="86.16" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="96" width="151.26">
      <note default-x="15.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.84" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.9" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="80.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="110.4" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="15.84" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="33.84" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="80.94" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="110.4" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="110.4" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="97" width="127.43">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="71.59" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="71.59" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="97.63" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="98" width="129.41">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="62.51" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="62.51" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.55" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="99" width="116.57">
      <note default-x="17.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="75.71" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="100" width="209.77">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="88.39" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="128.25" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.11" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="76.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="88.39" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="88.39" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="168.11" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="101" width="145.64">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.91" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="94.91" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="115.84" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="115.84" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="115.84" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="102" width="97.52">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="103" width="122.78">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="70.45" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="88.45" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.45" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="88.45" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.45" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="88.45" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-82.87" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="70.45" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="88.45" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.45" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="88.45" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="104" width="118.58">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.97" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.91" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.12" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="105" width="90.6">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-55.57" relative-y="-25">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="106" width="149.1">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.86" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.72" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="119.3" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="92.72" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="107" width="94.72">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-51.45" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.12" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="108" width="218.94">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.62" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="82.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="146.53" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="146.53" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="174.93" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="82.62" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="146.53" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="164.53" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="109" width="142.43">
      <note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="83.83" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="95.73" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.23" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="110" width="198.55">
      <note default-x="19.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.41" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="149.81" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="62.53" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="100.11" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="149.81" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="168.75" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="111" width="162.75">
      <note default-x="26.44" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="38.34" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="90.35" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="102.25" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="118.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="26.44" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.35" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="108.35" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="132.95" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="112" width="170.51">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="88.31" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.71" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="67.01" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.71" default-y="-125">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="135.65" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="113" width="135.51">
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.91" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="88.81" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="76.91" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="105.31" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="114" width="196.95">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.9" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.18" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="163.18" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.18" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="163.18" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="145.18" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="163.18" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="115" width="139.11">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.67" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="31.82" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="77.34" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="116" width="172.99">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-58.27" relative-y="-25">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="39.28" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="66.4" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="83.92" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
          <wedge type="diminuendo" default-y="-77.11" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="121.22" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="139.22" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="117" width="89.75">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-56.71" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="118" width="143.29">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="36.64" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="68.61" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.03" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="119" width="133.05">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.42" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.84" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.84" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="52.42" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.84" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="120" width="153.56">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.06" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="97.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="123.76" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="123.76" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="97.48" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="121" width="197.96">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="84.89" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.98" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="159.07" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="84.89" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.98" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.89" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="121.98" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="159.07" default-y="-85">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="159.07" default-y="-75">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="122" width="156.01">
      <note default-x="28.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.02" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.02" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.11" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.12" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="28.02" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="28.02" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.11" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="83.12" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.75" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="123" width="89.45">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="124" width="151.3">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.21" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.94" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.94" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.94" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.94" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.94" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.94" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="78.94" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.03" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="125" width="85.33">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
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
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="126" width="107.53">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.09" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="127" width="129.46">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="29.02" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="17.12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.76" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="84.66" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.76" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="99.66" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="99.66" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.76" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="128" width="111.65">
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="72.76" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="129" width="199.34">
      <print new-page="yes" page-number="4">
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
      <note default-x="81.1" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="81.1" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="99.11" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="81.1" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="142.33" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="169.54" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="130" width="171.96">
      <note default-x="17.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="57.94" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.15" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.55" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="105.55" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="123.55" default-y="-130" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="142.15" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="142.15" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="131" width="138.52">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="53.82" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="71.82" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="108.72" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="88.31" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="132" width="152.36">
      <note default-x="13" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="35.5" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="58" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="76" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="109.74" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.5" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="110.5" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="133" width="92.41">
      <note default-x="13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="134" width="142.89">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.46" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="100.27" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="135" width="131.23">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.22" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="101.43" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="136" width="216.94">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="97.49" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="79.48" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="115.61" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="131.76" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="169.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="187.06" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="131.76" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="137" width="89.56">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="138" width="154.83">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-78.23" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="71.86" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.68" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="36.64" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="49.36" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="71.86" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.32" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="119.32" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="139" width="133.97">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2.28" default-y="-57.83" relative-y="-25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="41.64" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="59.64" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="41.64" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="59.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="77.64" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="77.64" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="140" width="141.96">
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
          <wedge type="crescendo" default-y="-75.43" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="52.1" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="88.45" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="106.45" default-y="-45" />
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="103.81" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="141" width="165.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-55.03" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="48.62" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="48.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="111.96" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="29.5" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="48.62" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="130.14" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="142" width="126.05">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-66.11" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="55.62" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.52" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.52" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="91.75" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="143" width="159.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-59.45" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="82.1" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="112.01" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="94" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="112.01" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.1" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="112.01" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="82.1" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="100.11" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="82.1" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="100.11" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="144" width="181.03">
      <note default-x="28.44" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="46.44" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="28.44" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="46.44" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.44" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="46.44" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.44" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="46.44" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="62.18" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.61" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="151.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="28.44" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="46.44" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.65" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="122.65" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="145" width="90.72">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="146" width="170.69">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <tie type="start" />
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
          <tied type="stop" />
          <tied type="start" />
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <tie type="start" />
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
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="44.5" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="44.5" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.5" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="81" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="99" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="140.89" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="147" width="138.41">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.62" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="66.74" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="96.68" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="148" width="173.41">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="106.16" default-y="-20">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="135.04" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="159.61" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.93" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="79.54" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.16" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="149" width="114.62">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.89" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="150" width="209.4">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="119.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="159.57" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="119.53" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="137.53" default-y="-100" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.6" default-y="-90">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="151" width="150.33">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="43.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="61.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="88.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="152" width="175.96">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.88" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="94.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="112.38" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="130.38" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.38" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="130.38" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.38" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="130.38" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.88" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.88" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="123.66" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="123.66" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="146.16" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="153" width="90.95">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="154" width="162.94">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-79.69" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="53.05" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="79.74" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.44" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.44" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="133.14" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="133.14" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="155" width="97.87">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-59.29" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="19.92" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-190" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="156" width="141.26">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="42.9" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="42.9" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="42.9" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.82" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="81.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="99.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-190" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="157" width="193.17">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="158" width="128.27">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.73" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="87.73" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.73" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="87.73" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="159" width="132.32">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="30.54" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="63.39" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="63.39" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="160" width="163.7">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.73" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="99.57" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="119.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="137.46" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.73" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.57" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="132.07" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="161" width="99.9">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="162" width="178.9">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="57.75" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="87.59" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="117.42" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="147.26" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.75" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="163" width="132.45">
      <note default-x="18.76" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.89" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.76" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.76" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.76" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.76" default-y="-130" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.76" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.76" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="164" width="248.92">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.62" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-68.8" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="112.25" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="138.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="153.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="169.29" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.9" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="212.02" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
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
        <duration>36</duration>
        </backup>
      <note default-x="82.62" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="112.25" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="130.25" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="212.02" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="212.02" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="165" width="81.55">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-48.4" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="166" width="143.52">
      <note default-x="13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="59.81" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="83.21" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="106.61" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="167" width="136.83">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="36.4" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="36.4" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="63.4" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="63.4" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="90.53" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="108.53" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.53" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="108.53" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="63.4" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="168" width="137.31">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="36.4" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.81" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="75.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.01" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="109.01" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.81" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="91.01" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="109.01" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.01" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="109.01" default-y="-130" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="169" width="128.22">
      <note default-x="19.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.58" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="98.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="53.18" default-y="-140">
        <grace slash="yes" />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.58" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="170" width="152.36">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="40.52" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.65" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="92.05" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="115.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <forward>
        <duration>12</duration>
        </forward>
      <note default-x="68.65" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.65" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="68.65" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.65" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="171" width="248.69">
      <print new-page="yes" page-number="5">
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
      <note default-x="79.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="107.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-71.03" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="135.24" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="163.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="191" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="218.88" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="144.18" default-y="-50">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>2</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="191" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="218.88" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="218.88" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="172" width="205.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-50.63" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="40.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="58.71" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.59" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.6" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="114.47" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="145.61" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="175.23" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
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
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="145.61" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="173" width="178.86">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-61.2" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="48.34" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="66.93" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="94.81" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="122.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="66.93" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="84.93" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.6" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="174" width="120.83">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="66.01" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="84.02" default-y="-55" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.01" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="84.02" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.01" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="84.02" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="yes" sign="no" default-y="-82.89" relative-x="25.05" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="175" width="142">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="70.5" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.38" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.28" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="54.82" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="yes" sign="no" relative-x="-51.26" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="176" width="133.29">
      <note default-x="13" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.88" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="177" width="262.07">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.68</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.54</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-62.66" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="82.62" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="123.77" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="154.91" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="182.34" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="209.76" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="82.62" default-y="-181.54">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="100.63" default-y="-176.54" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="154.91" default-y="-181.54">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="154.91" default-y="-146.54">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="209.76" default-y="-181.54">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="209.76" default-y="-146.54">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="232.27" default-y="-166.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="178" width="176.78">
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.77" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="70.27" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="101.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-93.67" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="133.84" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-166.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-166.54" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="179" width="126.03">
      <note default-x="19.92" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="31.82" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-35" />
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
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-166.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-166.54" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.07" default-y="-166.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="90.08" default-y="-166.54" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="180" width="171.35">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-73.27" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="19.92" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.06" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="79.06" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="95.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="114.12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-151.54">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="114.12" default-y="-151.54">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="141.54" default-y="-151.54">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="181" width="154.26">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="99.4" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="117.69" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="135.69" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="117.69" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="135.69" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="117.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="135.69" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-146.54">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.12" default-y="-116.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.4" default-y="-146.54">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="117.69" default-y="-121.54">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="135.69" default-y="-116.54" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="182" width="138.22">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.14" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.28" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.18" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-121.54">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="95.28" default-y="-106.54">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="183" width="200.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.68</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.1" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.32" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.32" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="118.32" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="81.1" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="118.32" default-y="-110">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="136.32" default-y="-110" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.5" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="184" width="179.4">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">chiffrages du fichier réduits à des triades : sténographie du transcripteur</words></direction-type><staff>2</staff></direction><note default-x="19.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="47.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.04" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.47" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="149.59" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.59" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="102.87" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="185" width="147.5">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="86.82" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="50.21" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="87.43" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="112.24" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="186" width="142.86">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="55.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.07" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.07" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="109.61" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="127.61" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="187" width="173.4">
      <note default-x="19.92" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="57.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="94.72" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.13" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="138.13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="138.13" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="113.32" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="113.32" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="138.13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="188" width="184.79">
      <note default-x="13" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="37.81" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.93" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.23" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.93" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="101.23" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="138.45" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="154.99" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="189" width="258.54">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.68</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>80.96</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="79.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="154.15" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="181.28" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.28" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="223.28" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="223.28" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="223.28" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-140.96">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="135.49" default-y="-175.96">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="153.49" default-y="-175.96" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="223.28" default-y="-160.96">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="223.28" default-y="-120.96">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="190" width="140.81">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="97" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160.96">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-120.96">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="97" default-y="-155.96">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="191" width="154.81">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155.96">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-155.96" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83" default-y="-155.96">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="111" default-y="-175.96">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111" default-y="-155.96">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="111" default-y="-135.96">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="192" width="158.55">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-80.82" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="83" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="101" default-y="-35" />
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175.96">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-155.96">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-135.96">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="100.75" default-y="-155.96">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="100.75" default-y="-135.96">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="128.75" default-y="-160.96">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="193" width="143.22">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-60.42" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="19.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="38.59" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="56.59" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170.96">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="50.42" default-y="-180.96">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.42" default-y="-180.96">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="194" width="172.77">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-87.67" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="55" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="55" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.09" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="95.09" default-y="-25" />
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="113.97" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tuplet type="stop" />
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
          <dynamics default-x="-1.18" default-y="-67.27" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="128.97" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-180.96">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-175.96" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.42" default-y="-180.96">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="102.92" default-y="-155.96">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="128.97" default-y="-125.96">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="195" width="224.09">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.68</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="79.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="117.32" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.45" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.54" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.45" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.45" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="136.24" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.45" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.54" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.45" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="196" width="140.27">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="27.44" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="27.44" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.28" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.28" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="27.44" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="65.28" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="90.51" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="108.51" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.51" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="108.51" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="197" width="128.32">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.84" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="88.68" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="88.68" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="50.84" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.84" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.68" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="88.68" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="88.68" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="198" width="142.76">
      <harmony print-frame="no">
        <root>
          <root-step>C</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="27.44" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="27.44" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.28" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.28" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="27.44" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="27.44" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="27.44" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="65.28" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.12" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="199" width="154.78">
      <note default-x="18.64" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="56.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="94.32" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="94.32" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
          <wedge type="diminuendo" default-y="-74.01" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="114.32" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.32" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="114.32" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.32" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="94.32" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="124.98" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="200" width="86.75">
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="201" width="151.73">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-53.61" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.97" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="105.11" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.93" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.89" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="105.11" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="202" width="160.61">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.68</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="203" width="101.05">
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="31.82" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="204" width="94.13">
      <harmony print-frame="no">
        <root>
          <root-step>F</root-step>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="205" width="143.07">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.89" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="83.89" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="83.51" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="106.02" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="124.02" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="206" width="112.39">
      <note default-x="31.26" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.26" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-24.76" default-y="15.3" />
          </notations>
        </note>
      <note default-x="31.26" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.26" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-24.76" default-y="15.3" />
          </notations>
        </note>
      <note default-x="31.26" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.26" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-24.76" default-y="15.3" />
          </notations>
        </note>
      <note default-x="31.26" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.26" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-24.76" default-y="15.3" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="31.26" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="49.26" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="207" width="94.13">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="208" width="124.74">
      <note default-x="18.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.22" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="81.22" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="209" width="198.58">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="31.54" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="49.54" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="31.54" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="49.54" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.8" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="94.61" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="122.42" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="150.24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="122.42" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="210" width="200.46">
      <print new-page="yes" page-number="6">
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
      <note default-x="79.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="103.8" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="128.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.43" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="170.43" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="211" width="112.92">
      <note default-x="13" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="74.65" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.23" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="77.24" default-y="-160" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="212" width="115.68">
      <note default-x="13" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.64" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="85.65" default-y="-35" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="down" number="1" default-x="-27.64" default-y="5.3" />
          </notations>
        </note>
      <note default-x="67.64" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="85.65" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="down" number="1" default-x="-27.64" default-y="5.3" />
          </notations>
        </note>
      <note default-x="67.64" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="85.65" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="down" number="1" default-x="-27.64" default-y="5.3" />
          </notations>
        </note>
      <note default-x="67.64" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="85.65" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate direction="down" number="1" default-x="-27.64" default-y="5.3" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="27.4" default-y="-120" />
        <staff>2</staff>
        </note>
      <note default-x="67.64" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="85.65" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="213" width="111.39">
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="47.02" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="29.02" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="47.02" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="93.26" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.26" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="93.26" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.36" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="93.26" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.12" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-100" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.36" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="81.36" default-y="-100" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="214" width="105.98">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="67.71" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="215" width="127.47">
      <note default-x="18.64" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.35" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="97.66" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="216" width="91.07">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="217" width="163.73">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="109.62" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="133.93" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.16" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.12" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="111.12" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="133.93" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="218" width="219.39">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.1" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="106.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="131.53" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="180.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="81.1" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="131.53" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="219" width="136.18">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          <root-alter>1</root-alter>
          </root>
        <kind>major</kind>
        </harmony>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="39.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="57.96" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.71" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="103.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="121.22" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="60.69" default-y="-115">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="220" width="90.05">
      <note default-x="18.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.12" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.12" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.12" default-y="-90">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.12" default-y="-90" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="221" width="141.09">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="49.88" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="77.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="102.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-90">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="49.88" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="77.82" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="95.82" default-y="-120" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.92" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="95.82" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.82" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="95.82" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="222" width="122.71">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="68.32" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="68.32" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="92.91" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="223" width="108.31">
      <harmony print-frame="no">
        <root>
          <root-step>A</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.75" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="77.75" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="224" width="84.93">
      <harmony print-frame="no">
        <root>
          <root-step>D</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="225" width="126.04">
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.75" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="84.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="96.24" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="226" width="160.71">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony print-frame="no">
        <root>
          <root-step>G</root-step>
          </root>
        <kind text="m">minor</kind>
        </harmony>
      <note default-x="79.48" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="91.38" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.39" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="227" width="182.04">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.77" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="82.62" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="110.47" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="138.32" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="110.47" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="128.47" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="152.24" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      </measure>
    <measure number="228" width="160.06">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="35.12" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="52.42" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="70.99" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="98.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="128.74" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.74" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="128.74" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.84" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="128.74" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.84" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="128.74" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="116.49" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="229" width="119.23">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="75.66" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="230" width="200.8">
      <note default-x="13" default-y="-20">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="31.76" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="50.33" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="68.89" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="115.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="143.15" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="171" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.15" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="231" width="205.85">
      <note default-x="24.9" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="42.9" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.02" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.59" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="149.21" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.05" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="42.9" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="24.9" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="42.9" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="24.9" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="42.9" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.02" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.59" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.36" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="149.21" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="232" width="202.8">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="130.94" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="233" width="148.7">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.89" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="96.39" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>16th</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="118.89" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="234" width="134.84">
      <note default-x="13" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.89" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="105.03" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="235" width="185.36">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-74.69" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="94.19" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="121.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.25" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="139.25" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="155.56" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="236" width="117.72">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-54.29" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <forward>
        <duration>12</duration>
        </forward>
      <forward>
        <duration>6</duration>
        </forward>
      <note default-x="52.56" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.46" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.46" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="237" width="121.56">
      <note default-x="16.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.84" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.84" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="34.84" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.3" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="86.3" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="16.84" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="34.84" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="16.84" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="34.84" default-y="-100" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.3" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="86.3" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="238" width="117.72">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.46" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-55" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.46" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.46" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="82.46" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="239" width="181.02">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="129.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="159.25" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.35" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="159.25" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129.35" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="159.25" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.25" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="159.25" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="240" width="136.71">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.9" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="57.9" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="39.9" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="57.9" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.79" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="75.9" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="75.9" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="241" width="126.26">
      <note default-x="13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-56.39" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="65.45" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="242" width="143.99">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="52.34" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.82" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="92.32" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="110.32" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="243" width="122.98">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.84" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.34" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="244" width="193.21">
      <note default-x="19.92" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="37.92" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="59.26" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="71.16" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.26" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="98.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="110.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="98.16" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="159.55" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="46.15" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="98.16" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="245" width="124.53">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.01" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="89.49" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="107.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="246" width="187.96">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>103.18</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="132.82" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="162.72" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="132.82" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="162.72" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="144.72" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="162.72" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="247" width="155.66">
      <note default-x="13" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="42.9" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="48.56" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="71.06" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="100.52" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="118.52" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="248" width="141.62">
      <note default-x="18.64" default-y="-80">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.54" default-y="-85" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="30.54" default-y="-75">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.54" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.54" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="30.54" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.54" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="41.14" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="59.14" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.7" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="249" width="189.46">
      <note default-x="13" default-y="-80">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="24.9" default-y="-75">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="47.4" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="75.45" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="103.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="131.55" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="159.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="75.45" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="250" width="212.98">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="41.05" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="69.1" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="97.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="125.2" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="153.25" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="183.18" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="125.2" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="251" width="141.03">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="55.08" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="97.15" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="55.08" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="50.3" />
          </notations>
        </note>
      <note default-x="55.08" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="50.3" />
          </notations>
        </note>
      <note default-x="55.08" default-y="-60">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="50.3" />
          </notations>
        </note>
      </measure>
    <measure number="252" width="226.69">
      <print new-page="yes" page-number="7">
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
      <note default-x="83.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="83.9" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="123.62" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.33" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="181.33" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.33" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="181.33" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="196.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="83.9" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.9" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.62" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.62" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.62" default-y="-70">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.33" default-y="-85">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="163.33" default-y="-75">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="253" width="131.33">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.81" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-85">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-80" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-75">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-70" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="63.34" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.34" default-y="-75">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.81" default-y="-70">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="254" width="131.33">
      <note default-x="13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="52.71" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="79.19" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.19" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.19" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.19" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-70">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="52.71" default-y="-80">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.19" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.19" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="255" width="95.95">
      <note default-x="18.64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-170" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="256" width="174.33">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.54" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.54" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.97" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.97" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="45.42" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.54" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.54" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.97" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.97" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="257" width="121">
      <note default-x="19.92" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="19.92" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.49" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.49" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="258" width="148.08">
      <note default-x="19.92" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="37.92" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="70.26" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="259" width="188.41">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="83.9" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="101.91" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="83.9" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="101.91" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.26" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="153.26" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="260" width="177.95">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-77.09" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="40.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="94.13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="121.14" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="148.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="94.13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.14" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="261" width="129.69">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="40.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-56.95" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="67.13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="67.13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="262" width="120.19">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.24" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="17.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="57.63" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
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
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="35.12" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="263" width="191.22">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-60.84" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="28.44" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="46.44" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.44" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="46.44" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="28.44" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="46.44" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="28.44" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="68.95" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.41" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="138.92" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="161.42" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="264" width="97.47">
      <note default-x="18.64" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="18.64" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="265" width="123.78">
      <note default-x="13" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="81.47" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.35" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="82.35" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="266" width="178.07">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="118.2" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="267" width="171.85">
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="38.81" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="90.43" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.24" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="142.05" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="90.43" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="108.43" default-y="-170" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="268" width="178.87">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="55.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-71.56" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="81.64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="107.45" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="124.95" default-y="-30">
        <grace slash="yes" />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.35" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="162.35" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="55.83" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="81.64" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="99.65" default-y="-100" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="269" width="105.86">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-51.16" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="11.05" default-y="-15">
        <grace slash="yes" />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.45" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="48.45" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="30.45" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="48.45" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="270" width="125.52">
      <note default-x="13" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="65.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="271" width="139.61">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-68.55" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="62.08" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="87.89" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="105.09" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="123.09" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="62.08" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="80.08" default-y="-100" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="272" width="128.92">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-48.15" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="15.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="33.05" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="51.05" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="33.05" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="51.05" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.05" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.05" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="15.84" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="33.05" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="51.05" default-y="-140" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="33.05" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="51.05" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.05" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="69.05" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="273" width="192">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="81.48" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="107.33" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="132.83" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="81.48" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="99.49" default-y="-140" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="81.48" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="99.49" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="274" width="146.13">
      <note default-x="13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="67.83" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.73" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="45.33" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.83" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="275" width="133.45">
      <note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="70.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="103.65" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="70.38" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="92.88" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="110.88" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="92.88" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="110.88" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="276" width="155.05">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.96" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="64" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.5" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
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
          <dynamics default-x="-1.18" default-y="-52.56" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="115" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="89.5" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="107.5" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.5" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="107.5" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.5" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="107.5" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="277" width="110.43">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="70.38" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="278" width="157.21">
      <note default-x="13" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.6" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.61" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="45.33" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.83" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.83" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="102.83" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="117.15" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="279" width="134.43">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-42.13" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="39.96" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.21" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.21" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.21" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.21" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.21" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.21" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="94.38" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="280" width="194.32">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-38.7" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="84.89" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="102.89" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.7" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.71" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="138.7" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.71" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="72.98" default-y="-98">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="102.89" default-y="-103" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.89" default-y="-93">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="102.89" default-y="-93" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="84.89" default-y="-83">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="102.89" default-y="-83" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.7" default-y="-103">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="156.71" default-y="-103" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.7" default-y="-93">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="156.71" default-y="-93" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.7" default-y="-83">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="156.71" default-y="-83" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="281" width="146.29">
      <note default-x="17.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.58" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.03" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-103">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.58" default-y="-68">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.03" default-y="-103">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="282" width="155.61">
      <note default-x="26.44" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="56.34" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="38.34" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="56.34" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="26.44" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="56.34" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="26.44" default-y="-113">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.9" default-y="-143">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.35" default-y="-113">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="283" width="142.17">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="55.46" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.91" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.91" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.91" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-113">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="97.91" default-y="-128">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="284" width="125.06">
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.58" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.58" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="71.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-128">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.58" default-y="-133">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="285" width="102.45">
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
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
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-133">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="37.92" default-y="-133" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="286" width="162.81">
      <note default-x="17.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.94" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.94" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.55" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="127.55" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-153">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-153" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.12" default-y="-123">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="35.12" default-y="-123" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.94" default-y="-118">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.24" default-y="-128">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="127.55" default-y="-153">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="287" width="272.88">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>102.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="94.9" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="119.47" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="94.9" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="119.47" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="146.91" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="176.81" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.81" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="176.81" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.91" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="176.81" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="255.13" default-y="-35" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="230.56" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="255.13" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="94.9" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="112.91" default-y="-170" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="146.91" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="168.22" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="200.18" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="218.18" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="288" width="183.6">
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="41.68" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="41.68" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="57.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="57.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.64" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="57.64" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.64" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.29" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="165.85" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="141.29" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="165.85" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-125">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="35.12" default-y="-120" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="57.64" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.94" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="110.9" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="128.9" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="289" width="190.58">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.94" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.94" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.94" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.9" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="124.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="156.82" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.94" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="290" width="177.44">
      <note default-x="15.84" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="27.74" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.84" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.84" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.76" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.76" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.7" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.7" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.7" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="15.84" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="47.8" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="79.76" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="127.7" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="291" width="204.19">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.58" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.58" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.51" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.51" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.51" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.51" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="124.51" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.55" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="106.51" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="138.47" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.43" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="292" width="239.82">
      <print new-page="yes" page-number="8">
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
      <note default-x="79.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="109.21" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.21" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="153.8" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="183.7" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="165.7" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="183.7" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="153.8" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="183.7" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="97.49" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="153.8" default-y="-125">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="173.61" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="193.43" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="293" width="126.27">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="24.9" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.88" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="79.88" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="294" width="168.66">
      <note default-x="13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.68" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="50.68" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="77.68" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="77.68" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="122.27" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.27" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="134.17" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.68" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.27" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="295" width="148.05">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-79.34" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="19.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">flat</accidental>
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
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="31.82" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="49.82" default-y="-35" />
        <stem>up</stem>
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
        <duration>36</duration>
        </backup>
      <note default-x="19.92" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="49.65" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.37" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="296" width="156.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-58.94" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="17.12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
      <note default-x="95.15" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="124.87" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="124.87" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.87" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.71" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="297" width="189.51">
      <note default-x="13" default-y="-80">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="50.68" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="50.68" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.1" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="91.1" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="143.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.02" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.12" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-170" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.4" default-y="-170">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.12" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.12" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="298" width="219.11">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.7</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.1" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.1" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="139.27" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.27" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="166.27" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="184.27" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="166.27" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="184.27" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="81.1" default-y="-142.7">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="81.1" default-y="-112.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.37" default-y="-142.7">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.37" default-y="-112.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="139.27" default-y="-127.7">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="166.27" default-y="-162.7">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="184.27" default-y="-162.7" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="299" width="130.04">
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="73.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="73.4" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="73.4" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-162.7">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.4" default-y="-107.7">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.24" default-y="-157.7">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="300" width="143.9">
      <note default-x="17.12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="17.12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.67" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="43.96" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.06" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="109.06" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.06" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="109.06" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.06" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="109.06" default-y="-15" />
        <accidental>natural</accidental>
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
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-157.7">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.1" default-y="-137.7">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.06" default-y="-142.7">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="109.06" default-y="-142.7" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.06" default-y="-112.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="109.06" default-y="-112.7" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="301" width="132.95">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-58.27" relative-y="-25">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.11" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.01" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.01" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.01" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.11" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.01" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.11" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.01" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-142.7">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="13" default-y="-112.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.84" default-y="-177.7">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.11" default-y="-127.7">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="98.11" default-y="-122.7" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="302" width="132.66">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-62.63" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="70.47" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.47" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.47" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-87.7">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.84" default-y="-92.7">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="70.47" default-y="-92.7">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="303" width="130.32">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-42.23" relative-y="-25">
            <mp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="73.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
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
      <note default-x="73.4" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="73.4" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="100.52" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="100.52" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-147.7">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-142.7" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13" default-y="-102.7">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-102.7" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="304" width="139.72">
      <note default-x="17.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="97.65" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
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
      <note default-x="97.65" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="109.55" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="97.65" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="17.12" default-y="-127.7">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="57.39" default-y="-127.7">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="97.65" default-y="-142.7">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="305" width="240.97">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.91</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.48" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="91.38" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.48" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="164.42" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="164.42" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="176.32" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="164.42" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="191.32" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="209.32" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="79.48" default-y="-142.91">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.49" default-y="-142.91" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="306" width="122.47">
      <note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-142.91">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31" default-y="-142.91" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="307" width="128.11">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-70.84" relative-y="-25">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="18.64" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.64" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="18.64" default-y="-177.91">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-172.91" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <ornaments>
            <tremolo type="single">3</tremolo>
            </ornaments>
          </notations>
        </note>
      <note default-x="18.64" default-y="-142.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="36.64" default-y="-142.91" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="308" width="204.81">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">extinction : Ré–Mi–La (sus2)…</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="69.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
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
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-177.91">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          <ornaments>
            <tremolo type="single">3</tremolo>
            </ornaments>
          </notations>
        </note>
      <note default-x="13" default-y="-142.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.09" default-y="-177.91">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.09" default-y="-142.91">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="137.26" default-y="-157.91">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="175.01" default-y="-162.91">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      </measure>
    <measure number="309" width="167.13">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="∆ (sans 3ce)">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…puis Ré + Do# (écrit Ré♭) : ∆7 SANS TIERCE — ni majeur ni mineur, l'accord-couleur final</words></direction-type><staff>2</staff></direction><note default-x="13" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.78" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="102.78" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.78" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="102.78" default-y="-45" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-162.91">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.71" default-y="-127.91">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="310" width="165.21">
      <note default-x="13" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="97.94" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>36</duration>
        </backup>
      <note default-x="13" default-y="-127.91">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="97.94" default-y="-127.91">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    </part>
  </score-partwise>`;

export const BLUE_IN_GREEN_ANALYSE: MesureAnalyse[] = [
  { numero: 0,   nom: "Ré m13 (intro)",              degre: "i, rubato — le centre s'annonce",                          fonction: "T" },
  { numero: 5,   nom: "Sib maj9",                     degre: "♭VI de Ré m / I de Sib ? — l'ambiguïté fondatrice",         fonction: "?" },
  { numero: 7,   nom: "La7",                          degre: "V — dominante réelle de Ré m",                             fonction: "D" },
  { numero: 9,   nom: "Ré m9",                        degre: "i — résolution réelle",                                    fonction: "T" },
  { numero: 11,  nom: "Mi7",                          degre: "V7 de La — dominante déviée",                              fonction: "D" },
  { numero: 14,  nom: "La m9",                        degre: "v — résout en mineur, jamais en La majeur",                fonction: "T" },
  { numero: 18,  nom: "Sib maj7",                     degre: "♭VI de Ré m — deuxième passage",                           fonction: "?" },
  { numero: 23,  nom: "La7",                          degre: "V — deuxième passage",                                     fonction: "D" },
  { numero: 29,  nom: "Ré m13",                       degre: "i — retour, jamais en tête de section",                    fonction: "T" },
  { numero: 31,  nom: "Do m9 – Fa13",                 degre: "ii–V de Sib — le turnaround qui ne ramène JAMAIS à la tonique", fonction: "?" },
  { numero: 38,  nom: "Sib7(#9#11) / basse Sib1",     degre: "subV de La7 — corrige le « B7 » fautif du transcripteur",  fonction: "D" },
  { numero: 39,  nom: "La7 saturé (♭9 + #9 + 13)",    degre: "V — densité maximale, tensions liées par la pédale",       fonction: "D" },
  { numero: 77,  nom: "Sib majeur (corrigé)",         degre: "♭VI — « A# major » du fichier, enharmonie fautive (idem m. 219)", fonction: "?" },
  { numero: 308, nom: "Ré–Mi–La",                     degre: "couleur sus2 — la pièce s'éteint",                         fonction: "?" },
  { numero: 309, nom: "Ré + La + Do# (écrit Réb)",    degre: "∆7 sans tierce — accord final, ni majeur ni mineur",       fonction: "?" },
];

export const BLUE_IN_GREEN_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Ré mineur décentré / Si♭ majeur implicite — l'ambiguïté n'est pas une imprécision d'écoute, elle est le sujet de la pièce. Le matériau est authentiquement fonctionnel (de vraies dominantes, partout) mais mis en orbite sans jamais se fixer durablement sur un centre.",
  metrique: "3/4 rubato, armure à 1 bémol. Tempo nominal 172 (indicatif — la pièce se joue rubato). Pédale « sempre dopo » dès la 2e mesure : re-pédalage légato après chaque nouvelle harmonie, la signature Evans/Debussy.",
  forme:
    "Un cycle de dix mesures fonctionnelles (ni les douze du blues, ni les multiples de huit de la chanson), étalé sur une vingtaine de mesures de 3/4 par chorus : Sib maj9 – La7 – Ré m9 – Mi7 – La m9 – Ré m9 – Sib maj7 – La7 – Ré m – (Do m9–Fa13). Le turnaround final est un ii–V de Sib, pas de Ré : le cycle ne ramène jamais à sa tonique, il ramène à son propre point de départ harmonique — qui n'est pas la tonique. Pendant les sections de solo, le cycle se comprime (harmonies aux durées divisées, annotation présente dans le fichier à la mesure 77) : la même dérive tonale rejouée plus vite.",
  sections: [
    {
      label: "Mesures 0-9 (l'intro et le premier tour du cycle)",
      titre: "Un centre qui s'annonce sans s'imposer",
      chiffrage: "Ré m13 (intro) → Sib maj9 → La7 → Ré m9",
      fonctions: "T (i, rubato) → ? (♭VI/I ambigu) → D (V réel) → T (i, résolution réelle)",
      texte:
        "L'intro rubato pose Ré mineur (Dm13) comme centre — mais le cycle qui suit s'ouvre sur Sib majeur 9, un accord dont l'identité est double dès la première mesure : sixième degré abaissé de Ré mineur, ou tonique implicite d'un Si♭ majeur qui affleure sans jamais se déclarer. La7 qui suit est en revanche une vraie dominante de Ré mineur, et Ré m9 qui l'accueille est une vraie résolution — la pièce n'est pas atonale, elle est fonctionnelle par fragments.",
    },
    {
      label: "Mesures 9-32 (le cercle de dix mesures)",
      titre: "Un ii–V qui ne ramène jamais à la tonique",
      chiffrage: "Mi7 → La m9 → Sib maj7 → La7 → Ré m13 → (Do m9–Fa13)",
      fonctions: "D (V7 dévié) → T (v, résolution mineure) → ? (♭VI) → D (V) → T (i) → ? (turnaround décentré)",
      texte:
        "Mi7 est une vraie dominante — mais elle résout sur La mineur, jamais sur La majeur : une dominante mineure, un cinquième degré qui refuse la hiérarchie qu'il annonce. Le cycle referme son premier tour sur Ré m13, puis bascule sur le turnaround Do m9–Fa13 : un ii–V parfaitement en règle, mais de Si♭, pas de Ré. C'est le geste qui rend la forme circulaire au sens propre — le cycle ne revient jamais à son centre supposé, il revient à son propre point de départ, qui n'est pas ce centre. Ré mineur existe, affirmé trois fois dans le cycle, mais il n'occupe jamais un début de section : la tonalité est là, mais décentrée.",
    },
    {
      label: "Mesures 38-39 (les dominantes déviées, au plus dense)",
      titre: "L'altération comme densité, pas comme tension à résoudre",
      chiffrage: "Sib7(#9#11)/basse Sib1 → La7 (♭9 + #9 + 13 naturelle)",
      fonctions: "D (subV de La7) → D (V, saturé)",
      texte:
        "À la mesure 38, la basse Si♭1 sous un mouvement chromatique révèle un accord substitut du triton (subV) glissant sur La7 — le « B7 » du transcripteur est une coquille d'un demi-ton, la plus dangereuse à l'oreille comme à l'écrit. La mesure suivante sature ce La7 : neuvième bémol (Si♭) et neuvième dièse (Do naturel) coexistent avec la tierce (Do#) et une treizième naturelle (Fa#, la couleur brillante — pas de treizième bémol ici, aucun fa naturel dans toute la mesure). La pédale tenue depuis la mesure précédente fait sonner ensemble ce geste linéaire ascendant : Evans traite l'altération comme une couleur qui s'accumule, pas comme une tension qui appelle sa résolution.",
    },
    {
      label: "Mesures 77 et 219 (une même enharmonie fautive, deux fois)",
      titre: "Une orthographe illisible pour un instrumentiste",
      chiffrage: "Sib majeur (le « A# major » du fichier, aux deux occurrences)",
      fonctions: "? (couleur, non fonction)",
      texte:
        "Deux fois dans la transcription, le même accord de Si♭ majeur (Fa–Si♭–Ré) est orthographié « A# majeur » — une enharmonie exacte mais illisible à la lecture pour un instrumentiste, qui verrait un Fa## ou un Do## là où la main joue simplement un Fa naturel. La correction ne change aucune hauteur réelle ; elle rend simplement la partition jouable.",
    },
    {
      label: "Mesures 308-310 (la fin : la couleur comme dernier mot)",
      titre: "Ni majeur ni mineur — le dernier mot est un timbre",
      chiffrage: "Ré–Mi–La (sus2) → Ré + La + Do# (écrit Réb) : ∆7 sans tierce",
      fonctions: "? (couleur terminale, aucune fonction ne s'applique)",
      texte:
        "La pièce s'éteint sur une couleur suspendue (Ré-Mi-La, une neuvième sans tierce) avant de se refermer sur un accord de septième majeure totalement dépourvu de tierce : Ré, La (quinte), Do# (septième majeure, notée Réb par accident d'écriture — la sensible de Ré, à l'instant précis où elle cesse de fonctionner comme telle). Ni majeur ni mineur : la ∆7 comme pure couleur terminale, exactement la sonorité que Satie posait en 1888 comme provocation inaugurale (le balancement sol maj7/ré maj7 de la Gymnopédie), devenue soixante-dix ans plus tard le dernier mot naturel d'une ballade.",
    },
  ],
  synthese: [
    {
      titre: "1959, l'année aux deux réponses",
      texte: "La même année, sur le même disque, deux solutions opposées au même problème (la fonction tonale a-t-elle encore un avenir ?) : Giant Steps pousse la dominante à sa limite par symétrie hyperactive (trois tonalités à distance de tierce majeure, cycle refermé) ; Blue in Green suspend les mêmes matériaux (ii-V, subV, altérations) en un cercle décentré qui ne referme jamais sur sa tonique. Même vocabulaire, deux destins.",
    },
    {
      titre: "L'héritage Evans/Debussy",
      texte: "La pédale « sempre dopo », le maj7 sans tierce comme couleur terminale, l'ambiguïté modale du centre tonal : Bill Evans hérite directement du vocabulaire de Debussy, en le réinjectant dans une forme de trente-deux mesures étirée en cycle de dix. Le pont entre ce chantier et son propre passé (Voiles, la Cathédrale engloutie) se referme ici.",
    },
    {
      titre: "Le sub-V, toujours le même geste",
      texte: "Le substitut du triton entendu à la mesure 38 (Sib7 pour La7) est le même mécanisme qu'ailleurs dans ce corpus — une dominante remplacée par celle qui partage ses sensibles à distance de triton. Ici, il s'agit d'une texture de passage dans une improvisation ; ailleurs, d'une règle de réharmonisation enseignée. Le même outil, deux usages.",
    },
  ],
};
