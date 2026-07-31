import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-dido-lament.ts
 * Harmonia — Henry Purcell, "When I am laid in earth" (le lamento de Didon),
 * Dido and Aeneas (1689), pour la section "conservatoire" du cours 38
 * (niveau 1 — les notes étrangères).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "dido-lament-annote.musicxml",
 * arr. Connor Sannipoli pour piano seul) — jamais reconstruit à la main, cf.
 * feedback-partitions-verbatim. 65 mesures, 4/4 : récitatif "Thy hand, Belinda"
 * (m.1-9, Largo ♩=50) puis l'air sur ground (m.10-65, Adagio con moto ♩=80 —
 * le changement de tempo tombe EXACTEMENT sur la mesure 10, vérifié par
 * onset : 27648 ticks = 36 noires = 9 mesures de 4/4).
 *
 * AUCUNE balise <harmony> dans le fichier (une première dans ce corpus — tous
 * les extraits précédents en portaient, ou Dany fournissait un chiffrage
 * explicite à recouper). Le chiffrage romain ci-dessous est donc une lecture
 * DÉRIVÉE directement des hauteurs réelles (script d'extraction onset par
 * onset, cf. lib/musicxml-parse), pas une vérification d'un chiffrage
 * préexistant — à revoir par Dany comme n'importe quelle pièce du corpus.
 *
 * 1689, domaine public absolu : la plus ancienne pièce du corpus.
 *
 * Recoupé note à note contre le fichier :
 *  - le ground (voix de basse, m.10 et rebouclé 10 fois derrière chaque
 *    "ground N" annoté par Dany dans le fichier lui-même, cf. plus bas) :
 *    Sol3–Fa#3/Fa3–Mi3/Mib3–Ré3/Sib2–Do3/Ré3, IDENTIQUE aux 11 occurrences
 *    (m.10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59,
 *    60-64) — confirme "répété onze fois sans une note de variante" ;
 *  - la queue cadentielle Sib2–Do3–Ré3–Sol2 (m.13-15, puis à l'identique à
 *    chaque retour) : confirmée note à note, résolution sur Sol pile au
 *    premier temps de la mesure qui suit chaque groupe de 5 ;
 *  - l'accord final (m.65) : Sol2+Ré3+Sol3+Sol4 — SANS TIERCE (ni Sib ni Si
 *    nulle part dans cette dernière verticalité), plus radical que "sol
 *    mineur sans éclaircie" : une quinte à vide, aucune couleur modale du
 *    tout ;
 *  - récitatif (m.1-9) : Do2-Mib2-Sol2 (i, ut mineur, m.1) → Do2-Mi2-Sol2 (I
 *    majeur "passager", m.2) → Fa2-Lab2-Do3 (iv, fa mineur, m.3) →
 *    Fa#2-La2-Do3 (V7 de sol mineur, m.8, LE "frottement de Fa#" du
 *    brouillon) → Ré2-Fa#2-La2-Ré3 (V, seuil, m.9) ;
 *  - la relation V7(Ré7)–i6(Sol m, basse Sib) se vérifie textuellement à
 *    CHAQUE fois que le ground passe de sa 4e à sa 5e note (Ré→Sib) — repérée
 *    et confirmée aux mesures 23 et 38 (donc pas un hasard isolé, un vrai
 *    geste fonctionnel récurrent, même si Purcell "réhabille" le reste de
 *    l'accord différemment d'un passage à l'autre, cf. remarque du brouillon).
 *
 * Note de comptage (l'ancien brouillon annonçait "879 notes vérifiées" — NON
 * confirmé) : 882 <note> bruts, 35 silences, 4 notes d'ornement (<grace/>),
 * 6 liaisons de tenue fusionnées → 838 évènements sonores réels retenus par
 * le parseur (lib/musicxml-parse), même convention que pour la Cathédrale
 * engloutie ("1952 notes brutes / 1716 après fusion").
 *
 * `score.mode` (profil de Krumhansl-Kessler) infère "major" alors que la
 * pièce est réellement en SOL MINEUR (tonique confirmée par le tétracorde du
 * ground et la cadence finale) — même famille de limite déjà documentée pour
 * So What / Satin Doll / Jesu meine Freude, non corrigée.
 *
 * Dany a lui-même annoté la structure DANS le fichier XML (balises
 * <direction><words>, retirées de l'affichage gravé mais lisibles dans les
 * données) : "RÉCITATIF... ut mineur, descente chromatique vers V de sol"
 * (m.1), "LE GROUND (énoncé seul)..." (m.10), "ground 2 — entrée du chant :
 * les phrases vocales sont DÉPHASÉES du cycle de 5 mesures" (m.15), "ground 3"
 * … "ground 10" (m.20 à m.55, tous les 5 mesures), "ground 6 — Remember me :
 * la supplique sur note répétée contre la basse qui descend" (m.35),
 * "(il canto ben marcato)" (m.38 précisément), "ground final : contre-chants
 * chromatiques descendants (ritournelle), cadence en sol mineur" (m.60). Ces
 * repères ont servi de charpente aux sections de l'analyse narrative
 * ci-dessous.
 */
export const DIDO_LAMENT_MESURES_1_65 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>When I am laid in earth</work-title>
    </work>
  <identification>
    <creator type="composer">Henry Purcell</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-31</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2019-09-30</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.656</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1679.09</page-height>
      <page-width>1297.48</page-width>
      <page-margins type="even">
        <left-margin>60.0962</left-margin>
        <right-margin>60.0962</right-margin>
        <top-margin>60.0962</top-margin>
        <bottom-margin>120.192</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>60.0962</left-margin>
        <right-margin>60.0962</right-margin>
        <top-margin>60.0962</top-margin>
        <bottom-margin>120.192</bottom-margin>
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
      <line-width type="extend">1.6</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">1</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">1</line-width>
      <line-width type="tuplet bracket">1.6</line-width>
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
    <credit-words default-x="648.74" default-y="1618.99" justify="center" valign="top" font-size="24">Dido's Lament.</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1237.38" default-y="1548.99" justify="right" valign="bottom" font-size="12">Henry Purcell.</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="648.74" default-y="1558.89" justify="center" valign="top" font-size="14">"When I am laid in earth".</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1237.38" default-y="1518.99" justify="right" valign="bottom" font-size="12">arr. Connor Sannipoli.
</credit-words>
    <credit-words>
</credit-words>
    <credit-words />
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
    <measure number="1" width="266.81">
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
        <divisions>4</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time symbol="common">
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
          <words default-x="-46.94" relative-y="20" font-weight="bold" font-size="12">Largo.</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="50" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">RÉCITATIF « Thy hand, Belinda » : ut mineur, descente chromatique vers V de sol</words></direction-type><staff>2</staff></direction><note default-x="93.31" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="118" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.7" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="159.2" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="174.01" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="190.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="206.98" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="240.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="93.31" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.31" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.31" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.7" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.7" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.7" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.79" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.79" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.79" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="216.72">
      <note default-x="10" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.476178" bezier-y="27.913544" number="1" />
          </notations>
        </note>
      <note default-x="37.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="53.62" default-y="-15" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.09" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
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
      <note default-x="100.55" default-y="-25">
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
      <note default-x="117.02" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
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
      <note default-x="133.48" default-y="-30">
        <pitch>
          <step>G</step>
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
      <note default-x="160.61" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="177.11" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.80862" bezier-y="22.92823" />
          </notations>
        </note>
      <note default-x="191.92" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="52.78" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="52.78" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="52.78" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.61" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.61" default-y="-120">
        <chord />
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
      <note default-x="160.61" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="162.72">
      <note default-x="13.62" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.12" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.56" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="81.06" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.53" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.22" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.62" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.62" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.62" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.67" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.67" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.67" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.53" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.53" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="111.53" default-y="-95">
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
      </measure>
    <measure number="4" width="181.63">
      <note default-x="13.62" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="4.332509" bezier-y="-10.19702" number="1" />
          </notations>
        </note>
      <note default-x="40.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.304705" bezier-y="-6.014343" />
          </notations>
        </note>
      <note default-x="77.73" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="94.23" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.43" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="155.13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.62" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="40.68" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="57.18" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.38" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.38" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.43" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="155.13" default-y="-115">
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
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.62" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.62" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.62" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.38" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.38" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="153.82">
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.62" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="127.32" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.57" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.62" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.57" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.57" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.62" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.62" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="195.59">
      <note default-x="13.62" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="5.678775" bezier-y="-8.338748" number="1" />
          </notations>
        </note>
      <note default-x="38.32" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.767722" bezier-y="-7.482055" />
          </notations>
        </note>
      <note default-x="75.37" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.43" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="8.03169" bezier-y="-10.915848" number="1" />
          </notations>
        </note>
      <note default-x="139.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="155.98" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.638055" bezier-y="-8.396163" />
          <ornaments>
            <inverted-mordent />
            </ornaments>
          </notations>
        </note>
      <note default-x="170.79" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.62" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.43" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.62" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.62" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.43" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.43" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="249.06">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>131.92</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="88.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.93" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="137.39" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="10.787078" bezier-y="-8.479939" number="1" />
          </notations>
        </note>
      <note default-x="175.07" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.202359" bezier-y="-10.999624" />
          </notations>
        </note>
      <note default-x="213.69" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="61.36" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.39" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="153.89" default-y="-140" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.39" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="153.89" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.69" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.69" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="61.36" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.36" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.39" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="153.89" default-y="-170" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.39" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="153.89" default-y="-160" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.69" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.69" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="212.64">
      <note default-x="15.26" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="4.932286" bezier-y="-9.271857" number="1" />
          </notations>
        </note>
      <note default-x="41.01" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.043814" bezier-y="-6.752172" />
          </notations>
        </note>
      <note default-x="79.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.7" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.021347" bezier-y="-7.649359" number="1" />
          </notations>
        </note>
      <note default-x="132.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.954753" bezier-y="-8.506052" />
          </notations>
        </note>
      <note default-x="158.2" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-10.452097" number="1" />
          </notations>
        </note>
      <note default-x="178.2" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="194.7" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.253284" bezier-y="-2.036349" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="29.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="45.76" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.63" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="106.7" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.2" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="15.26" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="106.7" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="106.7" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.2" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.2" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="113.23">
      <note default-x="18.06" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="18.06" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="18.06" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="10" width="121.96">
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        <time>
          <beats>3</beats>
          <beat-type>2</beat-type>
          </time>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-28.58" relative-y="20" font-weight="bold" font-size="12">Adagio con moto.</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="80" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">LE GROUND (énoncé seul) : Sol–Fa#–Fa–Mi–Mi♭–Ré + queue cadentielle Si♭–Do–Ré–Sol — le passus duriusculus</words></direction-type><staff>2</staff></direction><note default-x="62.22" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-1.18" default-y="0.5" relative-y="30">
            <mp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="62.22" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="79.89993" bezier-y="-37.85273" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="11" width="162.86">
      <note default-x="74.03" default-y="-10">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="103.13" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="159.94">
      <note default-x="72.57" default-y="-10">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="100.21" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="157.6">
      <note default-x="71.4" default-y="-10">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="97.86" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="14" width="258.73">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>131.92</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="128.3" default-y="-10">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.18" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.838201" bezier-y="-15.459048" />
          </notations>
        </note>
      <note default-x="203.03" default-y="-145">
        <grace />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <tie type="start" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="5" relative-y="70">5</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="215.13" default-y="-135">
        <grace />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <tie type="start" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="5" relative-y="62.5">4</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="227.23" default-y="-125">
        <grace />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <tie type="start" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="5" relative-y="55">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="239.33" default-y="-110">
        <grace />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <tie type="start" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="5" relative-y="42.5">1</fingering>
            </technical>
          </notations>
        </note>
      </measure>
    <measure number="15" width="212.35">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 2 — entrée du chant : les phrases vocales sont DÉPHASÉES du cycle de 5 mesures</words></direction-type><staff>2</staff></direction><note default-x="10.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.49" default-y="-25">
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
      <note default-x="144.02" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="-5">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="144.02" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.02" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.02" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
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
    <measure number="16" width="212.35">
      <note default-x="10.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="16.431745" bezier-y="-13.424619" number="1" />
          </notations>
        </note>
      <note default-x="77.49" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.095902" bezier-y="-12.567926" />
          </notations>
        </note>
      <note default-x="144.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="144.02" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="23.92" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="23.92" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="144.02" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.02" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="17" width="286.23">
      <note default-x="13.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.8" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="35.274016" bezier-y="20.854889" number="1" />
          </notations>
        </note>
      <note default-x="69.53" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="99.1" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="115.6" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.32" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="194.65" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="211.15" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.459113" bezier-y="22.147014" />
          </notations>
        </note>
      <note default-x="250.87" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="29.8" default-y="-35" />
        <dot default-x="34.8" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>2</duration>
        </forward>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.3" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="20.750879" bezier-y="12.871798" number="1" />
          </notations>
        </note>
      <note default-x="99.1" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.957437" bezier-y="15.391483" />
          </notations>
        </note>
      <note default-x="194.65" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="182.65" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.65" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="207.61">
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="116.02" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="132.52" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.25" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="116.02" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="116.02" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="116.02" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.02" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="299.18">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>131.92</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="107.11" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="15.501716" bezier-y="16.392187" number="1" />
          </notations>
        </note>
      <note default-x="138.2" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="181.76" default-y="-15" />
        <dot default-x="186.76" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.251429" bezier-y="17.907618" />
          </notations>
        </note>
      <note default-x="263.82" default-y="-25">
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
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.3" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.6" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="165.26" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-89.2" relative-x="10" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="221.58" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-17.1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.58" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.58" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="20" width="181.72">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 3 (« When I am laid » bis : mêmes harmonies, autre couture)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="123.6" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="123.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="10" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="67.28" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.6" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.6" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="21" width="243.3">
      <note default-x="16.22" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="12.017037" bezier-y="7.07917" number="1" />
          </notations>
        </note>
      <note default-x="53.77" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.90397" bezier-y="12.11854" />
          </notations>
        </note>
      <note default-x="91.31" default-y="-25">
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
      <note default-x="166.41" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="166.41" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.22" default-y="-85">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.31" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.86" default-y="-95">
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
      <note default-x="166.41" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.41" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.41" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="22" width="294.26">
      <note default-x="13.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.937692" bezier-y="2.007695" number="1" />
          </notations>
        </note>
      <note default-x="38.33" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-0.676313" bezier-y="12.086436" />
          </notations>
        </note>
      <note default-x="63.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.51" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="23.04746" bezier-y="-17.741119" number="1" />
          </notations>
        </note>
      <note default-x="211.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="227.81" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.731331" bezier-y="-13.558442" />
          <ornaments>
            <inverted-mordent />
            </ornaments>
          </notations>
        </note>
      <note default-x="258.9" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-89.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="13.3" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.36" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="114.51" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="131.01" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.51" default-y="-140">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="131.01" default-y="-140" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="173.62" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.3" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.3" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="23" width="158.82">
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="15.26" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="100.7" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="100.7" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="100.7" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="100.7" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="100.7" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="100.7" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="299.84">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>131.92</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.12</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.6" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.6" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="151.88" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-111.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.84" default-y="-111.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="49.2" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="215.07" default-y="-101.12">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="256.56" default-y="-101.12">
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
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-136.12">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-126.12">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.84" default-y="-131.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.84" default-y="-121.12">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.07" default-y="-166.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.07" default-y="-131.12">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.56" default-y="-131.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.56" default-y="-121.12">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="198.5">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 4</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.19" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.19" default-y="-25">
        <chord />
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
      <note default-x="134.46" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.46" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="71.27" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-4.18" default-y="23" relative-x="5">
            <f />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-106.12">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.23" default-y="-111.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="14.986673" bezier-y="10.559285" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="134.46" default-y="-116.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.846766" bezier-y="13.07897" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-151.12">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-131.12">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.27" default-y="-131.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="208">
      <note default-x="20.46" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="14.21526" bezier-y="11.103719" number="1" />
          <non-arpeggiate type="top" number="1" default-x="-13.96" default-y="-14.7" />
          </notations>
        </note>
      <note default-x="81.73" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.134251" bezier-y="12.363561" />
          </notations>
        </note>
      <note default-x="143.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="18.54" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="143.96" default-y="-96.12">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="18.54" default-y="-156.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-22.78" default-y="15.4" />
          </notations>
        </note>
      <note default-x="18.54" default-y="-131.12">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-22.78" default-y="15.4" />
          </notations>
        </note>
      <note default-x="18.54" default-y="-121.12">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-22.78" default-y="15.4" />
          </notations>
        </note>
      <note default-x="18.54" default-y="-101.12">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-22.78" default-y="15.4" />
          </notations>
        </note>
      <note default-x="143.96" default-y="-121.12">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.96" default-y="-106.12">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="273.42">
      <note default-x="13.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.8" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="33.684831" bezier-y="22.045666" number="1" />
          </notations>
        </note>
      <note default-x="65.89" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.55" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.05" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.15" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.47" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="201.97" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.582373" bezier-y="23.1317" />
          </notations>
        </note>
      <note default-x="238.06" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="29.8" default-y="-35" />
        <dot default-x="34.8" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>2</duration>
        </forward>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.3" default-y="-96.12">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="19.387039" bezier-y="12.363408" number="1" />
          </notations>
        </note>
      <note default-x="93.55" default-y="-101.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.527256" bezier-y="14.883093" />
          </notations>
        </note>
      <note default-x="185.47" default-y="-101.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-126.12">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-116.12">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="173.47" default-y="-126.12">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="185.47" default-y="-121.12">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="28" width="197.52">
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="109.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="126.07" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.16" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="109.57" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="15.26" default-y="-101.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <non-arpeggiate type="top" number="1" default-x="-16.42" default-y="15.4" relative-x="-10" />
          </notations>
        </note>
      <note default-x="109.57" default-y="-141.12">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.57" default-y="-131.12">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.57" default-y="-116.12">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-166.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="-20">5</fingering>
            </technical>
          <arpeggiate number="2" default-x="-22.78" default-y="-4.6" relative-x="-10" />
          </notations>
        </note>
      <note default-x="15.26" default-y="-146.12">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="-20">3</fingering>
            </technical>
          <arpeggiate number="2" default-x="-22.78" default-y="-4.6" relative-x="-10" />
          </notations>
        </note>
      <note default-x="15.26" default-y="-131.12">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="-20">1</fingering>
            </technical>
          <arpeggiate number="2" default-x="-22.78" default-y="-4.6" relative-x="-10" />
          </notations>
        </note>
      <note default-x="15.26" default-y="-121.12">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        <notations>
          <technical>
            <fingering font-size="6" font-weight="bold" relative-x="-20">2</fingering>
            </technical>
          <arpeggiate number="2" default-x="-22.78" default-y="-4.6" relative-x="-10" />
          </notations>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="29" width="326.59">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>91.6</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="107.11" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="15.151965" bezier-y="15.728139" number="1" />
          </notations>
        </note>
      <note default-x="136.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.81" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="180.32" default-y="-15" />
        <dot default-x="185.32" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.86799" bezier-y="18.203256" />
          </notations>
        </note>
      <note default-x="291.23" default-y="-25">
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
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="180.32" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="273.03" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.6" default-y="-131.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.81" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="28.6" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="200.22" default-y="-141.6">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="236.62" default-y="-151.6">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="273.03" default-y="-151.6">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-156.6">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-146.6">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.81" default-y="-151.6">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.22" default-y="-221.6">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.22" default-y="-186.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.62" default-y="-186.6">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.62" default-y="-176.6">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="273.03" default-y="-176.6">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="172.99">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 5</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-47.68" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="116.59" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.59" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="116.59" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.59" default-y="-116.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-171.6">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-176.6" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10.96" default-y="-151.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-156.6" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="80.18" default-y="-171.6">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="31" width="208.18">
      <note default-x="15.26" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="11.766255" bezier-y="6.922059" number="1" />
          </notations>
        </note>
      <note default-x="51.67" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.579047" bezier-y="11.961429" />
          </notations>
        </note>
      <note default-x="88.07" default-y="-25">
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
      <note default-x="151.78" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-111.6">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="31.76" default-y="-106.6" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="115.37" default-y="-141.6">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="151.78" default-y="-141.6">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.78" default-y="-131.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.78" default-y="-116.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-141.6">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31.76" default-y="-146.6" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-131.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31.76" default-y="-136.6" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.37" default-y="-176.6">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="32" width="278.33">
      <note default-x="13.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.798488" bezier-y="1.857223" number="1" />
          </notations>
        </note>
      <note default-x="37.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-0.431713" bezier-y="11.935963" />
          </notations>
        </note>
      <note default-x="61.84" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.99" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="19.681528" bezier-y="-16.646531" number="1" />
          </notations>
        </note>
      <note default-x="196.82" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="213.32" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.563729" bezier-y="-12.463854" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-50.36" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="242.96" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-116.6">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="55.94" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="61.84" default-y="-126.6">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="112.99" default-y="-181.6">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="129.49" default-y="-176.6" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.99" default-y="-166.6">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="129.49" default-y="-166.6" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="159.13" default-y="-176.6">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="10.375972" bezier-y="-5.098797" number="1" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="196.82" default-y="-146.6">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-3.573734" bezier-y="-10.99486" />
          </notations>
        </note>
      <note default-x="196.82" default-y="-136.6">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-146.6">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-136.6">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="33" width="191.19">
      <note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="116.59" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.99" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="116.59" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.59" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.99" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="152.99" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-121.6">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-116.6" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="35" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="80.18" default-y="-131.6">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="116.59" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.99" default-y="-136.6">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-151.6">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-156.6" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10.96" default-y="-131.6">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-136.6" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.18" default-y="-196.6">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.18" default-y="-161.6">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.59" default-y="-171.6">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.59" default-y="-151.6">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.99" default-y="-151.6">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="34" width="291.39">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>145.26</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>81.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-56.84" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="90.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.75" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="162.25" default-y="-35" />
        <dot default-x="167.25" default-y="-35" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.6" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-121.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.75" default-y="-121.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="200.89" default-y="-111.84">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="237.65" default-y="-111.84">
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
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-146.84">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-136.84">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.75" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.75" default-y="-131.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.89" default-y="-176.84">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.89" default-y="-141.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="237.65" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="237.65" default-y="-131.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="222.67">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 6 — « Remember me » : la supplique sur note répétée contre la basse qui descend</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="26.5" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.14" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="92.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.34" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.76" default-y="-126.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.2" default-y="-116.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="147.34" default-y="-101.84">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="184.11" default-y="-106.84">
        <pitch>
          <step>D</step>
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
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-161.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-151.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.76" default-y="-151.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.76" default-y="-141.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.2" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="92.2" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.34" default-y="-161.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.34" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.11" default-y="-126.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.11" default-y="-116.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="36" width="235.39">
      <note default-x="16.22" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="19.601604" bezier-y="12.181667" number="1" />
          </notations>
        </note>
      <note default-x="89.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.449066" bezier-y="15.104502" />
          </notations>
        </note>
      <note default-x="144.89" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="161.39" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="144.89" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>20</duration>
        </backup>
      <note default-x="16.22" default-y="-116.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="14.818586" bezier-y="15.44479" number="1" />
          </notations>
        </note>
      <note default-x="28.22" default-y="-111.84">
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
      <note default-x="52.98" default-y="-111.84">
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
      <note default-x="89.74" default-y="-101.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.704525" bezier-y="10.40542" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-108.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="144.89" default-y="-106.84">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="181.65" default-y="-106.84">
        <pitch>
          <step>D</step>
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
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-131.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="144.89" default-y="-166.84">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.89" default-y="-131.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.65" default-y="-131.84">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.65" default-y="-121.84">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="37" width="226.01">
      <note default-x="13.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.84" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.54" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.69" default-y="-10">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="105.6" default-y="-30">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>2</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.34" default-y="-106.84">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.1" default-y="-116.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.54" default-y="-111.84">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.69" default-y="-111.84">
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
      <note default-x="187.45" default-y="-116.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.34" default-y="-136.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.34" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.1" default-y="-146.84">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="50.1" default-y="-136.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.54" default-y="-136.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.54" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.69" default-y="-136.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.69" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.45" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.45" default-y="-126.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="38" width="201.83">
      <note default-x="16.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="17.249847" bezier-y="12.363007" number="1" />
          </notations>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">(il canto ben marcato)</words></direction-type><staff>2</staff></direction><note default-x="89.74" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.273264" bezier-y="13.62285" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="0.25" relative-y="20" font-style="italic">il canto ben marcato</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="144.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="144.89" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.22" default-y="-121.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.737108" bezier-y="11.719379" number="1" />
          </notations>
        </note>
      <note default-x="16.22" default-y="-111.84">
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
      <note default-x="52.98" default-y="-121.84">
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
      <note default-x="89.74" default-y="-116.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.786003" bezier-y="14.239064" />
          </notations>
        </note>
      <note default-x="144.89" default-y="-126.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-141.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-131.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="144.89" default-y="-151.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.89" default-y="-141.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="290.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.81</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="31.109394" bezier-y="22.378309" number="1" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.65" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.65" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="161.15" default-y="-45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.74" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.65" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="180.68" default-y="-115">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="216.71" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="252.74" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.65" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.65" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.68" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.68" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="216.71" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="216.71" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="252.74" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="40" width="234.83">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 7</words></direction-type><staff>2</staff></direction><note default-x="10.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="27.46" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.551452" bezier-y="23.134215" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="56.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="21.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="83.7" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="100.2" default-y="-15" />
        <dot default-x="105.2" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.74" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.544918" bezier-y="11.642067" number="1" />
          </notations>
        </note>
      <note default-x="10.96" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="83.7" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="112.2" default-y="-120" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.582255" bezier-y="14.161752" />
          </notations>
        </note>
      <note default-x="95.7" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="112.2" default-y="-110" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129.37" default-y="-95">
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
      <note default-x="158.93" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.93" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="158.93" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="41" width="201.38">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="0.24" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.5" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="151.54" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="175.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" relative-x="15" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="115.5" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="23.92" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="40.42" default-y="-120" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="23.92" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="40.42" default-y="-100" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.47" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="-14.21" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="151.54" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="42" width="236.57">
      <note default-x="18.3" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="34.8" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.98" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="88" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="104.5" default-y="5" />
        <dot default-x="109.5" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="18.3" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="16.802123" bezier-y="11.338339" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.792715" bezier-y="13.858024" />
          </notations>
        </note>
      <note default-x="166.21" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="17.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="170.21" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.34" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>14</duration>
        <voice>7</voice>
        <type>half</type>
        <dot default-x="29.84" default-y="-110" />
        <dot default-x="34.84" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" relative-x="15" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="128.53" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.21" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>7</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="213.93">
      <note default-x="10.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.656953" bezier-y="19.329535" number="1" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="8.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="34.98" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="59" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.06" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="158.09" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.656953" bezier-y="19.329535" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="10.43" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="18.114593" bezier-y="11.869774" number="1" />
          </notations>
        </note>
      <note default-x="86.02" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.185595" bezier-y="14.389459" />
          </notations>
        </note>
      <note default-x="122.06" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="8.782934" bezier-y="7.263951" number="1" />
          </notations>
        </note>
      <note default-x="158.09" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.846826" bezier-y="9.783636" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="158.09" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.09" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="44" width="308.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>131.86</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="9.536645" bezier-y="9.135717" number="1" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="126.66" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.634852" bezier-y="9.99241" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.72" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="234.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="7.381093" bezier-y="8.539977" number="1" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="270.9" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.262846" bezier-y="8.640765" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="13" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="270.9" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="8.789333" bezier-y="7.268199" number="1" />
          </notations>
        </note>
      <note default-x="126.66" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.854606" bezier-y="9.787884" />
          </notations>
        </note>
      <note default-x="162.72" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="198.78" default-y="-115">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="234.84" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="270.9" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.72" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.78" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.78" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="234.84" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="234.84" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="270.9" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="214.6">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 8</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="-1.68" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.14" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="155.2" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="179.24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10.96" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.05" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.14" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.14" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="119.14" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="195.95">
      <note default-x="16.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.72" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.97" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.06" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="140.06" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="30.18" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="13.43098" bezier-y="9.842165" number="1" />
          </notations>
        </note>
      <note default-x="85.97" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.155451" bezier-y="12.36185" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="140.06" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="140.06" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.06" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="47" width="228.96">
      <note default-x="13.3" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="11.911289" bezier-y="10.884943" number="1" />
          </notations>
        </note>
      <note default-x="67.39" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.818398" bezier-y="10.985731" />
          </notations>
        </note>
      <note default-x="139.51" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.01" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.6" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.39" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.45" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.51" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="67.39" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.758328" bezier-y="12.9189" number="1" />
          </notations>
        </note>
      <note default-x="103.45" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.51" default-y="-105">
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
      <note default-x="175.57" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.031218" bezier-y="18.966144" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="139.51" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="48" width="229.02">
      <note default-x="16.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.72" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="2.28" default-y="26.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="88.99" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="2.28" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.08" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="179.14" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="203.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.22" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.553641" bezier-y="11.645587" number="1" />
          </notations>
        </note>
      <note default-x="88.99" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.591506" bezier-y="14.165272" />
          </notations>
        </note>
      <note default-x="143.08" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="143.08" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.08" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="49" width="284.41">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>167.58</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.84</staff-distance>
          </staff-layout>
        </print>
      <note default-x="90.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.506236" bezier-y="34.750205" number="1" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.21" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="205.81" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="244.21" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-132.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.21" default-y="-127.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="209.81" default-y="-167.84">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="9.85495" bezier-y="5.565478" number="2" />
          </notations>
        </note>
      <note default-x="244.21" default-y="-177.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-3.953705" bezier-y="10.604848" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-157.84">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-147.84">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.21" default-y="-152.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.21" default-y="-142.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="205.81" default-y="-187.84">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="205.81" default-y="-152.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="50" width="213.45">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 9</words></direction-type><staff>2</staff></direction><note default-x="10.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="27.46" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.16942" bezier-y="36.962194" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="8.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.24" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="101.74" default-y="-15" />
        <dot default-x="106.74" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="186.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-152.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="14.073768" bezier-y="16.693435" number="1" />
          </notations>
        </note>
      <note default-x="85.24" default-y="-147.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.831914" bezier-y="9.13438" />
          </notations>
        </note>
      <note default-x="85.24" default-y="-132.84">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.84" default-y="-117.84">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-172.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-162.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="142.84" default-y="-137.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.84" default-y="-127.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="51" width="213.79">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="0.24" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.38" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="160.78" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="186.39" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="186.39" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-122.84">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="39.46" default-y="-117.84" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-98.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="68.98" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="83.98" default-y="-117.84">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="122.38" default-y="-117.84">
        <pitch>
          <step>D</step>
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
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="160.78" default-y="-107.84">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="22.96" default-y="-142.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="39.46" default-y="-147.84" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="22.96" default-y="-127.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="39.46" default-y="-127.84" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.98" default-y="-177.84">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="83.98" default-y="-142.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.38" default-y="-142.84">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="122.38" default-y="-132.84">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.78" default-y="-132.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.78" default-y="-117.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="248.07">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="18.3" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="34.8" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.3" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="34.8" default-y="45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.98" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="66.98" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="92.58" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.08" default-y="5" />
        <dot default-x="114.08" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="92.58" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="109.08" default-y="45" />
        <dot default-x="114.08" default-y="45" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="220.67" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="18.3" default-y="-117.84">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.922905" bezier-y="11.79364" number="1" />
          </notations>
        </note>
      <note default-x="92.58" default-y="-122.84">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.982778" bezier-y="14.313325" />
          </notations>
        </note>
      <note default-x="173.47" default-y="-137.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="17.34" default-y="-147.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="177.47" default-y="-147.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.34" default-y="-137.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>14</duration>
        <voice>7</voice>
        <type>half</type>
        <dot default-x="29.84" default-y="-137.84" />
        <dot default-x="34.84" default-y="-137.84" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.78" default-y="-132.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="173.47" default-y="-137.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>7</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="217.57">
      <note default-x="10.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="10.96" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="36.56" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="36.56" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="62.16" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="62.16" default-y="35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="119.76" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.76" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="158.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="158.17" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.96" default-y="-132.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="27.46" default-y="-127.84" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.76" default-y="-132.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="9.325234" bezier-y="7.614443" number="1" />
          </notations>
        </note>
      <note default-x="158.17" default-y="-137.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.499168" bezier-y="10.134128" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-152.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="158.17" default-y="-162.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="158.17" default-y="-152.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="339.91">
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
      <note default-x="90.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.6" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.86" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.86" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.11" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="173.11" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="255.61" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.61" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.86" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="9.984605" bezier-y="8.017565" number="1" />
          </notations>
        </note>
      <note default-x="131.86" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.275991" bezier-y="10.53725" />
          </notations>
        </note>
      <note default-x="173.11" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="214.36" default-y="-115">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="255.61" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="296.86" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="173.11" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.36" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.36" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.61" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.61" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.86" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="198.39">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground 10</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="28.42" default-y="-25" />
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="0.24" default-y="14.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>whole</type>
        <dot default-x="28.42" default-y="5" />
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10.96" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="72.84" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.84" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.71" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="134.71" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="134.71" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="56" width="234.59">
      <note default-x="16.22" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="14.364857" bezier-y="11.169136" number="1" />
          </notations>
        </note>
      <note default-x="78.1" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.289816" bezier-y="12.428978" />
          </notations>
        </note>
      <note default-x="150.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.750503" bezier-y="22.641749" number="1" />
          </notations>
        </note>
      <note default-x="191.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="150.29" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="31.18" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="47.68" default-y="-90" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.04" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="7.275991" bezier-y="10.53725" number="2" />
          </notations>
        </note>
      <note default-x="150.29" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-9.984605" bezier-y="8.017565" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="150.29" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.29" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="57" width="200.73">
      <note default-x="13.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.18" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.627762" bezier-y="20.768853" />
          </notations>
        </note>
      <note default-x="137.06" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="137.06" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.18" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.06" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="125.05" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.06" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="203.65">
      <note default-x="16.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="14.364857" bezier-y="11.169136" number="1" />
          </notations>
        </note>
      <note default-x="78.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.289816" bezier-y="12.428978" />
          </notations>
        </note>
      <note default-x="139.98" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>1</staff>
        </note>
      <note default-x="139.98" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="135.98" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.22" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="14.900714" bezier-y="10.520958" number="1" />
          </notations>
        </note>
      <note default-x="78.1" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.753959" bezier-y="13.040643" />
          </notations>
        </note>
      <note default-x="139.98" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.26" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="15.26" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="139.98" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.98" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="303.6">
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
      <note default-x="90.6" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.95" default-y="-25">
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
      <note default-x="221.34" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="12.351504" bezier-y="-12.873114" number="1" />
          </notations>
        </note>
      <note default-x="150.95" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.528704" bezier-y="-10.353429" />
          </notations>
        </note>
      <note default-x="221.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="86.6" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.95" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.34" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="107.11" default-y="-100" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="181.12" default-y="-115">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="221.34" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="261.57" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.57" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="107.11" default-y="-130" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="107.11" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.12" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.12" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.34" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.34" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.57" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="262.01">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ground final : contre-chants chromatiques descendants (ritournelle), cadence en sol mineur</words></direction-type><staff>2</staff></direction><note default-x="14" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-5" />
        <dot default-x="35.5" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="182.81" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="226.65" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="166.31" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="15.408711" bezier-y="-13.943854" number="1" />
          </notations>
        </note>
      <note default-x="74.34" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.666627" bezier-y="-12.996817" />
          </notations>
        </note>
      <note default-x="162.31" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="14" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="104.51" default-y="-95">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="166.31" default-y="-95">
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
      <note default-x="206.53" default-y="-95">
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
      <note default-x="206.53" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
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
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="14" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-150" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="14" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-140" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.51" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="104.51" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.31" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.31" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="206.53" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="210.04">
      <note default-x="28.18" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="26.26" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="147.9" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="26.26" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <non-arpeggiate type="top" number="1" default-x="-16.42" default-y="15.4" relative-x="-10" />
          </notations>
        </note>
      <note default-x="147.9" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="26.26" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <accidental>sharp</accidental>
        <staff>2</staff>
        </note>
      <note default-x="147.9" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.9" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="26.26" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>7</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="62" width="207.86">
      <note default-x="13.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="13.985296" bezier-y="11.002395" number="1" />
          </notations>
        </note>
      <note default-x="73.64" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.894911" bezier-y="12.262237" />
          </notations>
        </note>
      <note default-x="145.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.3" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="29.8" default-y="-25" />
        <dot default-x="34.8" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.9" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="145.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.34" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="12.34" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="145.71" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="145.71" default-y="-120">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.71" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="193.78">
      <note default-x="10.96" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="13.985296" bezier-y="11.002395" number="1" />
          </notations>
        </note>
      <note default-x="71.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.894911" bezier-y="12.262237" />
          </notations>
        </note>
      <note default-x="131.64" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="131.64" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="131.64" default-y="-100">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="131.64" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.64" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="708.86">
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
      <note default-x="90.6" default-y="-25">
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
      <note default-x="269.58" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="286.08" default-y="-25" />
        <dot default-x="291.08" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <inverted-mordent />
            </ornaments>
          </notations>
        </note>
      <note default-x="627.52" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="102.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="269.58" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>14</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="286.08" default-y="-35" />
        <dot default-x="291.08" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <inverted-mordent />
            </ornaments>
          </notations>
        </note>
      <note default-x="627.52" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="269.58" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="448.55" default-y="-115">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="567.86" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="90.6" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.6" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.58" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="281.58" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="448.55" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="448.55" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="567.86" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="567.86" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="468.43">
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="33.316511" bezier-y="22.127664" number="1" />
          </notations>
        </note>
      <note default-x="188.97" default-y="0">
        <rest />
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.005086" bezier-y="19.34599" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="35.844741" bezier-y="-21.709553" number="1" />
          </notations>
        </note>
      <note default-x="188.97" default-y="-30">
        <rest />
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-36.307067" bezier-y="-20.927185" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="34.870609" bezier-y="19.570182" number="1" />
          </notations>
        </note>
      <note default-x="188.97" default-y="-105">
        <rest />
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.450989" bezier-y="21.908508" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="36.64274" bezier-y="-20.355861" number="1" />
          </notations>
        </note>
      <note default-x="10" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.97" default-y="-135">
        <rest />
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.509068" bezier-y="-22.274595" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const DIDO_LAMENT_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Do m",           degre: "i (ut mineur)",              fonction: "T" },
  { numero: 2,  nom: "Do",             degre: "I (majeur, passager)",       fonction: "T" },
  { numero: 3,  nom: "Fa m",           degre: "iv",                         fonction: "SD" },
  { numero: 8,  nom: "Ré7",            degre: "V7 (de sol mineur)",         fonction: "D" },
  { numero: 9,  nom: "Ré",             degre: "V (seuil de l'air)",         fonction: "D" },
  { numero: 10, nom: "Sol",            degre: "i (ground énoncé seul)",     fonction: "T" },
  { numero: 14, nom: "Do – Ré",        degre: "queue cadentielle → V",      fonction: "D" },
  { numero: 15, nom: "Sol m",          degre: "i (1re cadence du ground)",  fonction: "T" },
  { numero: 23, nom: "Ré7 – Sol m6",   degre: "V7 – i6",                    fonction: "D" },
  { numero: 35, nom: "Sol m",          degre: "i (« Remember me »)",        fonction: "T" },
  { numero: 38, nom: "Ré7 – Sol m6",   degre: "V7 – i6 (il canto ben marcato)", fonction: "D" },
  { numero: 60, nom: "Sol m",          degre: "i (ground final, contre-chants)", fonction: "T" },
  { numero: 64, nom: "Ré",             degre: "V (dernière cadence)",       fonction: "D" },
  { numero: 65, nom: "Sol (5te seule)", degre: "i (sans tierce)",           fonction: "T" },
];

export const DIDO_LAMENT_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Récitatif en ut mineur, modulant par degrés vers Ré (dominante de sol mineur) qui devient le seuil de l'air. L'air lui-même — le ground — est en SOL MINEUR, la tonalité réelle de toute la seconde moitié de la pièce.",
  metrique: "4/4. Largo (♩=50) pour le récitatif, Adagio con moto (♩=80) à partir de la mesure 10 — le changement de tempo tombe exactement sur le début du ground.",
  forme: "Récitatif accompagné 'Thy hand, Belinda' (m.1-9) puis air sur ground (m.10-65) : onze énoncés d'une basse obstinée de 5 mesures (le passus duriusculus, tétracorde chromatique descendant Sol-Ré), chacun réharmonisé différemment, plus une ritournelle finale (m.60-65).",
  sections: [
    {
      label: "Mesures 1-9",
      titre: "Récitatif : « Thy hand, Belinda »",
      chiffrage: "i | I | iv | ... | V7 | V",
      fonctions: "T | T | SD | ... | D | D",
      texte: "Le récitatif ouvre en ut mineur (Do-Mib-Sol) puis s'éclaircit un instant en Do majeur « passager » (m.2, Do-Mi-Sol) avant de s'assombrir vers fa mineur (m.3, Fa-Lab-Do) : une basse qui descend par degrés et mutations, exactement l'image du texte (« darkness shades me »). Les frottements de Fa# s'accumulent jusqu'à cristalliser, à la mesure 8, un vrai accord de Ré7 (Fa#-La-Do) — la dominante de sol mineur, la tonalité qui n'est pas encore nommée mais déjà préparée. La mesure 9 y répond en Ré majeur pur, à découvert : le seuil sur lequel le récitatif dépose l'air.",
    },
    {
      label: "Mesures 10-14",
      titre: "Le ground, énoncé seul",
      chiffrage: "i (Sol-Fa#-Fa-Mi-Mib-Ré, à la basse seule)",
      fonctions: "T → D",
      texte: "Comme le violoncelle de l'original, la basse expose seule, sans aucune harmonie au-dessus, le tétracorde chromatique qui va porter toute la suite : Sol-Fa#-Fa-Mi-Mib-Ré, puis la queue cadentielle Sib-Do-Ré avant de retomber sur Sol. Cinq mesures exactement, qui vont se répéter onze fois sans une seule note de variante — le passus duriusculus des théoriciens baroques, l'emblème du lamento.",
    },
    {
      label: "Mesures 15-19",
      titre: "Ground 2 : entrée du chant, le déphasage",
      chiffrage: "i … (réharmonisé)",
      fonctions: "T … D",
      texte: "La voix entre sur ce même ground, mais Purcell l'écrit délibérément déphasée : la phrase vocale ne calque pas les 5 mesures de la basse, si bien que la cadence du chant et celle du ground ne tombent presque jamais ensemble. La plainte flotte au-dessus d'une roue qui tourne à son propre rythme.",
    },
    {
      label: "Mesures 20-34",
      titre: "Grounds 3 à 5 : la réharmonisation",
      chiffrage: "… V7 – i6 (Ré7 → Sol m, basse Sib) …",
      fonctions: "… D – T …",
      texte: "La basse ne change pas une note, mais son habillage change à chaque passage : chaînes de retards 7-6 et 4-3 qui se déplacent le long de la descente chromatique. Un geste fonctionnel précis revient au moins deux fois à l'identique (ici à la mesure 23, puis encore à la mesure 38) : chaque fois que le ground bascule de sa 4e note à sa 5e (Ré → Sib, l'octave chutant), l'harmonie forme un Ré7 (V7 de sol mineur) qui se résout sur un Sol mineur en 1er renversement (i6, basse Sib) — la seule régularité fonctionnelle stricte au milieu d'une réharmonisation par ailleurs changeante.",
    },
    {
      label: "Mesures 35-39",
      titre: "Ground 6 : « Remember me »",
      chiffrage: "i … V7 – i6 (il canto ben marcato, m.38)",
      fonctions: "T … D – T",
      texte: "Sommet expressif de la pièce : la voix insiste sur une même note répétée (Ré5) pendant que la basse, elle, continue implacablement sa descente — l'immobilité du chant contre le mouvement obstiné du ground, le contraste le plus simple et le plus dévastateur de la pièce. Purcell marque lui-même la partie chantée « il canto ben marcato » à la mesure 38 : l'instruction d'interprétation tombe exactement sur le second Ré7–i6 vérifié de cette analyse.",
    },
    {
      label: "Mesures 40-59",
      titre: "Grounds 7 à 10 : la plainte continue",
      chiffrage: "… (4 passages supplémentaires, mêmes 5 mesures)",
      fonctions: "T … D",
      texte: "Quatre passages supplémentaires du même ground, chacun encore réharmonisé différemment — la plainte continue de se dérouler sans jamais que la basse ne cède un seul demi-ton de sa trajectoire.",
    },
    {
      label: "Mesures 60-65",
      titre: "Ground final : ritournelle et cadence",
      chiffrage: "i … V – i (5te seule, sans tierce)",
      fonctions: "T … D – T",
      texte: "Le dernier ground ajoute des contre-chants chromatiques descendants qui gagnent les voix supérieures — comme si la basse avait fini par entraîner tout l'édifice dans sa propre descente. La pièce s'achève sur un Sol qui n'est même pas franchement mineur : l'accord final (Sol-Ré-Sol-Sol) ne contient aucune tierce du tout, une quinte à vide, sans la moindre éclaircie.",
    },
  ],
  synthese: [
    {
      titre: "Le retard, laboratoire de la dissonance préparée",
      texte: "Sur une basse qui ne bouge jamais, tout le travail expressif se loge dans les voix supérieures : des chaînes de retards (7-6, 4-3) dont les frottements se déplacent le long de la descente chromatique. C'est l'exemple le plus canonique du répertoire pour faire entendre ce qu'est une note étrangère préparée puis résolue — le sujet même du cours.",
    },
    {
      titre: "La basse fixe, l'harmonie mobile",
      texte: "Le ground de Purcell partage son principe avec la Chaconne BWV 1004 de Bach déjà étudiée au cours 9 (une même basse répétée porte des harmonies changeantes) — sauf qu'ici la basse elle-même ne varie jamais d'une seule note en onze passages : la totalité de l'invention se loge dans l'habillage, pas dans le motif.",
    },
    {
      titre: "1689 : la source commune du corpus",
      texte: "Le tétracorde chromatique descendant de ce ground (Sol-Fa#-Fa-Mi-Mib-Ré) est, cent cinquante ans avant, exactement le même dessin que la basse de lamento du Prélude op. 28 n°20 de Chopin (cours 24). La pièce la plus ancienne du corpus s'avère aussi la source commune de plusieurs de ses fils rouges : la descente chromatique, le retard préparé, et la basse obstinée sous une harmonie changeante.",
    },
  ],
};
