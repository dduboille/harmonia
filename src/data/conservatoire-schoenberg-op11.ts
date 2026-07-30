import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-schoenberg-op11.ts
 * Harmonia — Drei Klavierstücke op. 11, n° 1 (Arnold Schoenberg, 1909),
 * intégrale (64 mesures, 3/4, Moderato), pour la section "conservatoire" du
 * cours 44 (niveau 5/maîtrise — analyse post-tonale, théorie des ensembles).
 *
 * MusicXML fourni par Dany (fichier "schoenberg-op11-1-annote.musicxml") —
 * VERBATIM à DEUX coquilles de métadonnées corrigées, signalées par Dany
 * lui-même et directement spécifiées par lui : le compositeur était
 * orthographié "Schoemberg" (corrigé en "Schoenberg") et le titre générique
 * "3 pieces" a été précisé en "I. Mäßige ♩" (le titre que Dany a lui-même
 * fourni). AUCUNE note ni hauteur touchée.
 *
 * LIMITE CONNUE, NON CORRIGÉE : les indications expressives allemandes de
 * Schoenberg (zart, mit Dämpfung, les flageolets notés comme tels) sont
 * presque toutes absentes de cette transcription — seul "Moderato" survit.
 * Dany a explicitement noté qu'une réinjection depuis une édition de
 * référence serait souhaitable pour un usage pédagogique complet, mais
 * n'a fourni ni le texte exact ni une source vérifiable pour ces marques —
 * plutôt que de les inventer de mémoire (risque réel d'erreur sur un
 * document aussi canonique), elles sont documentées ici comme un manque
 * assumé, pas corrigées. Le repère "FLAGEOLETS" (m.14-17) reste présent
 * car c'est une annotation de Dany lui-même, pas de Schoenberg.
 *
 * STATUT : Schoenberg est dans le domaine public depuis 2022 (règle des 70
 * ans post mortem, mort en 1951) — pièce LIBREMENT PUBLIABLE, avec Debussy
 * (Voiles, cours 30) et la fiche Petrouchka (originale) les trois portes de
 * sortie de 1909-1911 du "second récit" du corpus.
 *
 * Vérifications effectuées (scripts jetables, supprimés après usage) :
 * - 64 mesures, 3/4, armure à 0 (atonal). 977 <note> bruts (178 silences),
 *   692 événements sonores distincts après fusion des liaisons (115 paires
 *   de liaisons — cohérent avec le compte de Dany : 977 notes vérifiées).
 * - ZÉRO balise <harmony> dans tout le fichier — confirmé exactement : la
 *   première pièce de tout ce chantier où il n'y a RIEN à chiffrer.
 * - Le thème inaugural (Si4-Sol#4 puis Sol4-La4-Fa4, m.1-2, sans harmonie)
 *   confirmé note à note. Ses 3 premières notes (Si-Sol#-Sol) forment bien
 *   la cellule [0,1,4] (tierce mineure + demi-ton) une fois normalisées.
 * - Les 2 accords d'accompagnement (m.2-3) confirmés note à note, y compris
 *   leur orthographe exacte dans le fichier : Fa-Sol♭-Si (PAS Fa-Fa#-Si) et
 *   La-Sib-Réb (PAS La-Sib-Do#) — [0,1,6] puis [0,1,4], cette dernière
 *   étant la cellule mélodique elle-même dressée verticalement. Confirmé.
 * - Le passage "flageolets" (m.14-17) porte une annotation déjà présente
 *   dans le fichier ("accord-résonance Fa-La-Do#-Mi tenu — triade augmentée
 *   + Mi, l'ombre d'un ∆7#5"), avec les liaisons de tenue confirmées sur
 *   ces 4 mesures. Confirmé.
 * - La reprise (mesure 53) est confirmée exactement : Si et Sol# chacun
 *   doublés sur DEUX octaves simultanément (Si4+Si5, puis Sol#4+Sol#5).
 * - Aucune erreur trouvée dans le brouillon de Dany.
 */
export const SCHOENBERG_OP11_MESURES_1_64 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>I. Mäßige ♩ </work-title>
    </work>
  <identification>
    <creator type="composer">Arnold Schoenberg (1874-1951)</creator>
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
      <miscellaneous-field name="creationDate">2019-10-06</miscellaneous-field>
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
      <page-height>2381.64</page-height>
      <page-width>1683.28</page-width>
      <page-margins type="even">
        <left-margin>56.6894</left-margin>
        <right-margin>56.6894</right-margin>
        <top-margin>56.6894</top-margin>
        <bottom-margin>113.379</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>56.6894</left-margin>
        <right-margin>56.6894</right-margin>
        <top-margin>56.6894</top-margin>
        <bottom-margin>113.379</bottom-margin>
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
    <credit-words default-x="841.64" default-y="2324.95" justify="center" valign="top" font-size="24">Piece No.1 </credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="841.64" default-y="2268.26" justify="center" valign="top" font-size="14">3 pieces, Op.11 (1909)</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1626.59" default-y="2224.95" justify="right" valign="bottom" font-size="12">Arnold Schoenberg (1874-1951)
</credit-words>
    <credit-words>Trascrizione di Xaluc Vanistia
</credit-words>
    <credit-words />
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <part-abbreviation print-object="no">Pf.</part-abbreviation>
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
    <measure number="1" width="346.18">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>126.57</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>0</fifths>
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
          <words default-x="-37.68" relative-y="20" font-weight="bold" font-size="12">Moderato</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="114" />
        </direction>
      <note default-x="83.49" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-46.44" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.84" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">THÈME : Si–Sol#–Sol–La–Fa — cellule [0,1,4] (3ce mineure + ½ ton), la Grundgestalt</words></direction-type><staff>2</staff></direction><note default-x="170.45" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="53.409889" bezier-y="36.555317" number="1" />
          </notations>
        </note>
      <note default-x="257.42" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="197.43" default-y="-176.57">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="278.36">
      <note default-x="12.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.54" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">1er accord : Fa–Sol♭–Si = [0,1,6] ; 2e accord (m.3) : La–Si♭–Ré♭ = [0,1,4] — la cellule mélodique verticalisée</words></direction-type><staff>2</staff></direction><note default-x="131.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="189.59" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-52.005941" bezier-y="32.062008" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-55">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="99.01" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-186.57">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="99.01" default-y="-206.57">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.01" default-y="-176.57">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="252.99">
      <note default-x="12.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.511854" bezier-y="18.585662" number="1" />
          </notations>
        </note>
      <note default-x="164.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.800431" bezier-y="19.670068" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-60">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="99.01" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-186.57">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="99.01" default-y="-196.57">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.01" default-y="-166.57">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="330.67">
      <note default-x="10" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-116.39" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="96.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.931133" bezier-y="26.02591" number="1" />
          </notations>
        </note>
      <note default-x="212.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="96.96" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="36.371051" bezier-y="-24.468561" number="2" />
          </notations>
        </note>
      <note default-x="154.94" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="212.92" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
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
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-186.57">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="96.96" default-y="-186.57">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.6" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="212.92" default-y="-186.57">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="270.89" default-y="-176.57">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="212.92" default-y="-206.57">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="5" width="361.7">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-116.39" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-36.985172" bezier-y="23.013672" />
          </notations>
        </note>
      <note default-x="70.02" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="127.99" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-131.18" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="185.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="202.47" default-y="-35" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
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
          <wedge type="stop" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-36.147703" bezier-y="-24.797327" />
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="185.97" default-y="-60">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="243.95" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.542849" bezier-y="-16.5446" number="1" />
          </notations>
        </note>
      <note default-x="301.92" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-166.57">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="70.02" default-y="-166.57">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="127.99" default-y="-161.57">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="185.97" default-y="-186.57">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="243.95" default-y="-186.57">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.04" default-y="-206.57">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="28.54" default-y="-211.57" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="6" width="398.45">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>108.91</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-93.6" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="80.01" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.08" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="285.6" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="63.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="80.01" default-y="-55" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-1.792351" bezier-y="-6.426311" />
          </notations>
        </note>
      <forward>
        <duration>4</duration>
        </forward>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="63.5" default-y="-168.91">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.6" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="119.03" default-y="-168.91">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="27.701803" bezier-y="28.446822" number="1" />
          </notations>
        </note>
      <note default-x="174.55" default-y="-158.91">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="230.08" default-y="-148.91">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-78.6" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="285.6" default-y="-148.91">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="341.13" default-y="-143.91">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.731221" bezier-y="19.474639" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="119.03" default-y="-188.91">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="135.53" default-y="-193.91" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="285.6" default-y="-188.91">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="289.42">
      <note default-x="10" default-y="-10">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-105.54" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="107.17" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="123.67" default-y="-35" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.526275" bezier-y="23.397284" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-104.01" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="232.1" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="65.52" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.42703" bezier-y="-24.933801" number="2" />
          </notations>
        </note>
      <note default-x="148.81" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="165.31" default-y="-55" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-158.91">
        <rest />
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="190.46" default-y="-173.91">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="107.17" default-y="-168.91">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="29.538231" bezier-y="-22.560933" number="3" />
          </notations>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="8" width="350.09">
      <note default-x="15.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-29.825804" bezier-y="20.385046" />
          </notations>
        </note>
      <note default-x="126.19" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="237.24" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-35.469121" bezier-y="-23.427682" />
          </notations>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="15.14" default-y="-173.91">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="3" bezier-x="-29.922414" bezier-y="-22.048853" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.6" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="70.67" default-y="-168.91">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="23.963016" bezier-y="28.40179" number="1" />
          </notations>
        </note>
      <note default-x="126.19" default-y="-158.91">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="181.72" default-y="-148.91">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-78.6" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="237.24" default-y="-148.91">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="292.77" default-y="-143.91">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.696441" bezier-y="18.390717" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-198.91">
        <rest />
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="70.67" default-y="-188.91">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="87.17" default-y="-193.91" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="237.24" default-y="-188.91">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="9" width="261.66">
      <note default-x="10" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-63.58" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-98.98" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="93.29" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="50.073247" bezier-y="-34.900376" number="1" />
          </notations>
        </note>
      <note default-x="176.57" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="123.43" default-y="-158.91">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="270.27">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-98.98" relative-x="-7.12" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="15.14" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.64" default-y="-45" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-80.75" relative-x="56.18" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="129.66" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.19" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-53.502928" bezier-y="-27.800795" />
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
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-168.91">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="98.43" default-y="-188.91">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.43" default-y="-163.91">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.43" default-y="-148.91">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="330.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>84.16</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-95.96" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.5" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="34.473688" bezier-y="-19.607123" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.44" relative-x="-1.49" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="232.13" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.251377" bezier-y="-21.615281" />
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
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="63.5" default-y="-144.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="159.86" default-y="-164.16">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="159.86" default-y="-154.16">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="159.86" default-y="-134.16">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="622.38">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">transition : la cellule en diminutions</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="190.44" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-90.44" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="218.99" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="247.54" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="276.09" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="334.86" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="391.96" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="0" bezier-y="-84.864933" />
          </notations>
        </note>
      <note default-x="434.79" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-93.98" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="499.02" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="42.804245" bezier-y="7.606426" number="2" />
          </notations>
        </note>
      <note default-x="527.57" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="563.48" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
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
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-144.16">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.4" relative-x="-5.96" relative-y="27.21">
            <ppp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="17.78" />
        </direction>
      <note default-x="74.24" default-y="-144.16">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="103.42" default-y="-154.16">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="66.558028" bezier-y="-83.738199" number="1" />
          </notations>
        </note>
      <note default-x="131.97" default-y="-149.16">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="160.52" default-y="-154.16">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="190.44" default-y="-174.16">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.99" default-y="-144.16">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="276.09" default-y="-144.16">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="334.86" default-y="-139.16">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="363.41" default-y="-129.16">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="391.96" default-y="-144.16">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="434.79" default-y="-144.16">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="499.02" default-y="-144.16">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="563.48" default-y="-129.16">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="592.03" default-y="-164.16">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      </measure>
    <measure number="13" width="617.24">
      <note default-x="18.06" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="146.54" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="175.09" default-y="-75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.64" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="232.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.37" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="290.55" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="320.48" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="352.58" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.13" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="409.68" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="438.23" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="467.41" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="496.06" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="528.16" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="556.71" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="586.89" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="18.06" default-y="-204.16">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="0" bezier-y="43.923128" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.4" relative-y="33.16">
            <ppp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="17.78" />
        </direction>
      <note default-x="82.3" default-y="-144.16">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="146.54" default-y="-174.16">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="31.122725" bezier-y="-15.635027" number="1" />
          </notations>
        </note>
      <note default-x="175.09" default-y="-154.16">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="203.64" default-y="-149.16">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="261.37" default-y="-149.16">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="290.55" default-y="-154.16">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.718921" bezier-y="-22.342277" />
          </notations>
        </note>
      <note default-x="320.48" default-y="-174.16">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="32.758252" bezier-y="-14.087162" number="1" />
          </notations>
        </note>
      <note default-x="352.58" default-y="-149.16">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="381.13" default-y="-144.16">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="397.63" default-y="-139.16" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="467.41" default-y="-149.16">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.256294" bezier-y="-24.127955" />
          </notations>
        </note>
      <note default-x="496.06" default-y="-174.16">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="25.897961" bezier-y="-11.452281" number="1" />
          </notations>
        </note>
      <note default-x="528.16" default-y="-149.16">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="556.71" default-y="-144.16">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="14" width="568.91">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>79.92</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">FLAGEOLETS (m.14-17) : accord-résonance Fa–La–Do#–Mi tenu — triade augmentée + Mi, l'ombre d'un ∆7#5</words></direction-type><staff>2</staff></direction><note default-x="61.36" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="265.02" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notehead smufl="noteheadDiamondHalfOld">other</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="265.02" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notehead smufl="noteheadDiamondHalfOld">other</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="265.02" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notehead smufl="noteheadDiamondHalfOld">other</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="265.02" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notehead smufl="noteheadDiamondHalfOld">other</notehead>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-139.92">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.73" default-y="-144.92">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="126.1" default-y="-169.92">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="158.47" default-y="-144.92">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.687823" bezier-y="-43.935436" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-40" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="190.83" default-y="-139.92">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="263.66" default-y="-139.92">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="372.9" default-y="-139.92">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="421.45" default-y="-199.92">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.224239" bezier-y="-9.267256" number="1" />
          </notations>
        </note>
      <note default-x="421.45" default-y="-189.92">
        <chord />
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="421.45" default-y="-164.92">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="470.01" default-y="-179.92">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="518.56" default-y="-169.92">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.775489" bezier-y="-21.316208" />
          </notations>
        </note>
      </measure>
    <measure number="15" width="436.63">
      <note default-x="10" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-139.92">
        <rest />
        <duration>4</duration>
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
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.4" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="82.83" default-y="-114.92">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="21.485511" bezier-y="17.281087" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="192.07" default-y="-114.92">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.033676" bezier-y="17.265854" />
          </notations>
        </note>
      <note default-x="264.9" default-y="-139.92">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="313.45" default-y="-119.92">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.524922" bezier-y="11.83797" number="1" />
          </notations>
        </note>
      <note default-x="386.27" default-y="-129.92">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.037323" bezier-y="15.201636" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="16" width="564.37">
      <note default-x="42.52" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="59.02" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="42.52" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="59.02" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="42.52" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="59.02" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="42.52" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="59.02" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="42.52" default-y="-139.92">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-73.65" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="91.07" default-y="-199.92">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.224239" bezier-y="-9.267256" number="1" />
          </notations>
        </note>
      <note default-x="91.07" default-y="-189.92">
        <chord />
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="91.07" default-y="-164.92">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.63" default-y="-179.92">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.18" default-y="-169.92">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.775489" bezier-y="-21.316208" />
          </notations>
        </note>
      <note default-x="236.73" default-y="-139.92">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="295.53" default-y="-149.92">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="38.220481" bezier-y="-26.477117" number="1" />
          </notations>
        </note>
      <note default-x="368.36" default-y="-149.92">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="416.91" default-y="-149.92">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="489.74" default-y="-154.92">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="17" width="325.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.16</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.4" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.4" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.4" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="60.4" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="149.92" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="219.05" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="0" bezier-y="-37.278011" />
          </notations>
        </note>
      <note default-x="248.89" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="2.266203" bezier-y="-18.664651" number="3" />
          </notations>
        </note>
      <note default-x="293.65" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-15.541361" bezier-y="-8.080884" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="60.4" default-y="-167.16">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="105.16" default-y="-177.16">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="149.92" default-y="-192.16">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.85831" bezier-y="-20.211547" />
          <slur type="start" bezier-x="31.833801" bezier-y="19.819369" number="2" />
          </notations>
        </note>
      <backup>
        <duration>4</duration>
        </backup>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="219.05" default-y="-172.16">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.05" default-y="-147.16">
        <chord />
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.05" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="201.57">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-102.99" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="15.14" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="22.391673" bezier-y="-18.873262" number="1" />
          </notations>
        </note>
      <note default-x="132.63" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.461865" bezier-y="-16.905718" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="82.28" default-y="-177.16">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.28" default-y="-167.16">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.28" default-y="-147.16">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="235.59">
      <note default-x="10" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="77.14" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-65.44" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-100.84" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="144.28" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="77.14" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="144.28" default-y="-152.16">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="189.04" default-y="-167.16">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="189.04" default-y="-157.16">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="189.04" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="20" width="269.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-100.84" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="15.14" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="177.79" default-y="0">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-75">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="88.27" default-y="-75">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-48.5" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="133.03" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.848935" bezier-y="-19.11108" number="1" />
          </notations>
        </note>
      <note default-x="177.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="222.55" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-167.16">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-157.16">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="59.9" default-y="-167.16">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="76.4" default-y="-167.16" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.9" default-y="-147.16">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="76.4" default-y="-147.16" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.9" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="76.4" default-y="-127.16" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="177.79" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="261.02">
      <note default-x="13.04" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="57.8" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.032587" bezier-y="-24.051959" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.56" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-63.01" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-98.41" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="169.7" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
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
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="102.56" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="169.7" default-y="-152.16">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="214.46" default-y="-167.16">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.46" default-y="-157.16">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.46" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="277.33">
      <note default-x="23.36" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="68.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="84.62" default-y="-45" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.01" default-y="0">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="23.36" default-y="-80">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="96.49" default-y="-80">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-48.5" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="141.25" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="27.098491" bezier-y="-14.651997" number="1" />
          </notations>
        </note>
      <note default-x="186.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="230.77" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="23.36" default-y="-167.16">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="23.36" default-y="-147.16">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="23.36" default-y="-132.16">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="186.01" default-y="-152.16">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="23" width="352.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.9</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.4" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.923482" bezier-y="-12.683495" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.49" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="245.31" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.4" default-y="-135.9">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="166.49" default-y="-135.9">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="245.31" default-y="-135.9">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="297.85" default-y="-150.9">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="297.85" default-y="-140.9">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="297.85" default-y="-115.9">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="24" width="332.2">
      <note default-x="15.14" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31.64" default-y="-65" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="67.68" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="25.840751" bezier-y="-26.934308" number="1" />
          </notations>
        </note>
      <note default-x="120.23" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="172.77" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="225.32" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="277.86" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.425875" bezier-y="-21.405731" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-150.9">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-140.9">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-115.9">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="67.68" default-y="-150.9">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="84.19" default-y="-150.9" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.68" default-y="-130.9">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="84.19" default-y="-130.9" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="67.68" default-y="-115.9">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="84.19" default-y="-110.9" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="225.32" default-y="-150.9">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="225.32" default-y="-130.9">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="225.32" default-y="-115.9">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
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
    <measure number="25" width="247.6">
      <attributes>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <note default-x="127.46" default-y="-10">
        <rest measure="yes" />
        <duration>16</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="35.62" default-y="-135.9">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="88.17" default-y="-130.9">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="90.009361" bezier-y="-56.734133" number="1" />
          </notations>
        </note>
      <note default-x="140.71" default-y="-140.9">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="193.25" default-y="-155.9">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="88.17" default-y="-160.9">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="104.67" default-y="-160.9" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="359.14">
      <attributes>
        <time>
          <beats>3</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <note default-x="42.08" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="94.63" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="79.632372" bezier-y="33.13865" number="2" />
          </notations>
        </note>
      <note default-x="147.17" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="199.71" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="252.26" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
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
      <backup>
        <duration>24</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="94.63" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="111.13" default-y="-45" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="42.08" default-y="-125.9">
        <rest />
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="252.26" default-y="-125.9">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="304.8" default-y="-150.9">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="47.42865" bezier-y="26.490248" number="3" />
          </notations>
        </note>
      <note default-x="304.8" default-y="-120.9">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="42.08" default-y="-160.9">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="58.58" default-y="-160.9" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.71" default-y="-150.9">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="252.26" default-y="-160.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="27" width="278.77">
      <note default-x="13.32" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="65.86" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="118.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.32" default-y="-150.9">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="13.32" default-y="-130.9">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.86" default-y="-140.9">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="118.41" default-y="-145.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="134.91" default-y="-140.9" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="224.42" default-y="-135.9">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.32" default-y="-160.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="185.02" default-y="-165.9">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-100.992002" bezier-y="-44.210289" />
          </notations>
        </note>
      </measure>
    <measure number="28" width="574.27">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>118.87</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>130.73</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-65.47" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-100.87" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="61.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-5.21688" bezier-y="8.384393" />
          </notations>
        </note>
      <note default-x="103.96" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="70.907923" bezier-y="37.076669" number="1" />
          </notations>
        </note>
      <note default-x="146.55" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="231.73" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="274.33" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="316.92" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="402.1" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="444.7" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="487.29" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
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
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-205.73">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-5.21688" bezier-y="8.384393" />
          </notations>
        </note>
      <note default-x="231.73" default-y="-190.73">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="316.92" default-y="-190.73">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="359.51" default-y="-230.73">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="36.280572" bezier-y="-18.406312" number="2" />
          </notations>
        </note>
      <note default-x="402.1" default-y="-215.73">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="444.7" default-y="-200.73">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="487.29" default-y="-185.73">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="529.88" default-y="-175.73">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="29" width="483.36">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-65.47" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="13.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-73.185182" bezier-y="32.350304" />
          </notations>
        </note>
      <note default-x="55.63" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="72.13" default-y="5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="36.44" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-67.05" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="183.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-30">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="55.63" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.275925" bezier-y="-14.003028" number="1" />
          </notations>
        </note>
      <note default-x="98.23" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="140.82" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="183.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.623013" bezier-y="-22.192576" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-140.73">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="183.41" default-y="-140.73">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="35.221717" bezier-y="17.35185" number="1" />
          </notations>
        </note>
      <note default-x="226" default-y="-135.73">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="268.6" default-y="-150.73">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="332.48" default-y="-150.73">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="375.08" default-y="-140.73">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="417.67" default-y="-170.73">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.438791" bezier-y="18.858041" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-165.73">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="29.54" default-y="-165.73" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-29.32666" bezier-y="-28.196085" />
          </notations>
        </note>
      </measure>
    <measure number="30" width="512.27">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-50.45" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="14.96" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31.46" default-y="5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="36.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.74" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-113.21" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="185.33" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="254.92" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="340.1" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="382.7" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="425.29" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
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
        <duration>24</duration>
        </backup>
      <note default-x="14.96" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="20.847238" bezier-y="-10.378046" number="1" />
          </notations>
        </note>
      <note default-x="57.55" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="100.15" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.412813" bezier-y="-11.208402" />
          </notations>
        </note>
      <note default-x="142.74" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>2</voice>
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
      <note default-x="185.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="254.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.121512" bezier-y="-11.270992" number="1" />
          </notations>
        </note>
      <note default-x="297.51" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="340.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="382.7" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="399.2" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.992997" bezier-y="-15.287405" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="14.96" default-y="-190.73">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="29.5" default-y="-185.73" />
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="142.74" default-y="-200.73">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="9.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="185.33" default-y="-195.73">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="8.801729" bezier-y="-11.855176" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.92" default-y="-210.73">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="244.42" default-y="-205.73" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.079316" bezier-y="-8.49151" />
          </notations>
        </note>
      <note default-x="340.1" default-y="-190.73">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="382.7" default-y="-205.73">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="6.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="425.29" default-y="-200.73">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="8.535857" bezier-y="-10.775702" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-44.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="467.88" default-y="-215.73">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-10.588049" bezier-y="-8.767543" />
          </notations>
        </note>
      </measure>
    <measure number="31" width="279.62">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>84.78</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-89.31" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.32" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="79.83" default-y="-5" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="39.69123" bezier-y="26.680526" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="63.32" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="79.83" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.99" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="204.72" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="63.32" default-y="-169.78">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="79.83" default-y="-169.78" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="242.01">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="57.46" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="73.97" default-y="-5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-40.663171" bezier-y="25.174407" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="57.46" default-y="-30">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="167.11" default-y="-35">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="57.46" default-y="-194.78">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="73.97" default-y="-189.78" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-79.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="57.46" default-y="-174.78">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="73.97" default-y="-169.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="33" width="257.08">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-44.39" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="121.14" default-y="-10">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="16.42" default-y="-194.78">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.919928" bezier-y="-24.101451" number="1" />
          </notations>
        </note>
      <note default-x="16.42" default-y="-159.78">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.15" default-y="-184.78">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="65.15" default-y="-149.78">
        <chord />
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.89" default-y="-199.78">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="130.39" default-y="-199.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.89" default-y="-164.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="130.39" default-y="-159.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="206.55" default-y="-204.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.768874" bezier-y="-21.292419" />
          </notations>
        </note>
      <note default-x="206.55" default-y="-169.78">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="34" width="345.28">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">section centrale : tierces parallèles en planing chromatique, tempête</words></direction-type><staff>2</staff></direction><note default-x="41.6" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="56.14" default-y="-15" />
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-43.91" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-79.31" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="103.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="149.4" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="165.9" default-y="-5" />
        <dot default-x="170.9" default-y="-5" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="95.398748" bezier-y="36.088141" number="1" />
          </notations>
        </note>
      <note default-x="149.4" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="165.9" default-y="5" />
        <dot default-x="170.9" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.01" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="252.87" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="269.37" default-y="-15" />
        <dot default-x="274.37" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="252.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="269.37" default-y="-5" />
        <dot default-x="274.37" default-y="-5" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="320.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="182.04" default-y="-134.78">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="445.92">
      <note default-x="22.36" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="22.36" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="152.31" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="168.82" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="152.31" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="168.82" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="193.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="230.64" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="247.14" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="230.64" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="247.14" default-y="-5" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.72" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="271.82" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="307.41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="323.91" default-y="-25" />
        <dot default-x="328.91" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="307.41" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="323.91" default-y="-15" />
        <dot default-x="328.91" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="421.11" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="22.36" default-y="-144.78">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-68.44" relative-y="-40">
            <ppp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="17.78" />
        </direction>
      <note default-x="54.85" default-y="-204.78">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="55.611028" bezier-y="31.623925" number="2" />
          </notations>
        </note>
      <note default-x="87.34" default-y="-159.78">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="119.83" default-y="-199.78">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="152.31" default-y="-154.78">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="307.41" default-y="-154.78">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="339.89" default-y="-189.78">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="372.38" default-y="-149.78">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="404.87" default-y="-179.78">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="36" width="458.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.89</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-89.04" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="72" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="88.51" default-y="-25" />
        <dot default-x="93.51" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.022647" bezier-y="9.959712" />
          </notations>
        </note>
      <note default-x="72" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="88.51" default-y="-15" />
        <dot default-x="93.51" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="183.88" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="222.56" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="239.06" default-y="5" />
        <dot default-x="244.06" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="119.122246" bezier-y="45.453706" number="1" />
          </notations>
        </note>
      <note default-x="222.56" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="239.06" default-y="15" />
        <dot default-x="244.06" default-y="15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="311.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="339.66" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="356.16" default-y="-5" />
        <dot default-x="361.16" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="339.66" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="356.16" default-y="5" />
        <dot default-x="361.16" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="428.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="72" default-y="-170.89">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-8.068368" bezier-y="9.000712" />
          </notations>
        </note>
      <note default-x="135.93" default-y="-170.89">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="222.56" default-y="-170.89">
        <rest />
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="37" width="531.62">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-89.04" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="24" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="194.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="210.97" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="194.47" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="210.97" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="248.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="276.91" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="293.41" default-y="-5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="276.91" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="293.41" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="330.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="359.35" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="375.85" default-y="15" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="359.35" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="375.85" default-y="25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="487.2" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="24" default-y="-170.89">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="66.62" default-y="-210.89">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="75.674049" bezier-y="45.62933" number="2" />
          </notations>
        </note>
      <note default-x="109.24" default-y="-170.89">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.86" default-y="-205.89">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="194.47" default-y="-165.89">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="359.35" default-y="-165.89">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="401.97" default-y="-200.89">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="444.58" default-y="-160.89">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="487.2" default-y="-195.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="38" width="579.73">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-89.04" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="25.18" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="49.74" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-119.686083" bezier-y="43.947587" />
          </notations>
        </note>
      <note default-x="25.18" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="49.74" default-y="15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.82" default-y="-10">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-69.83" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="150.24" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="196.98" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="213.48" default-y="-15" />
        <dot default-x="218.48" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="363.5" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="400.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="25.18" default-y="-30">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="196.98" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.470835" bezier-y="-19.71749" number="1" />
          </notations>
        </note>
      <note default-x="239.6" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="289.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="331.94" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.526959" bezier-y="-16.727504" />
          </notations>
        </note>
      <note default-x="400.36" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.470835" bezier-y="-19.71749" number="1" />
          </notations>
        </note>
      <note default-x="442.98" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="492.7" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="535.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.526959" bezier-y="-16.727504" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="25.18" default-y="-155.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="67.8" default-y="-185.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="84.3" default-y="-185.89" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-59.713531" bezier-y="58.162441" />
          </notations>
        </note>
      <note default-x="196.98" default-y="-170.89">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="214.2" default-y="-165.89" />
        <staff>2</staff>
        </note>
      <note default-x="260.91" default-y="-190.89">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="13.750566" number="1" />
          </notations>
        </note>
      <note default-x="289.32" default-y="-150.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-17.64347" bezier-y="10.27529" />
          </notations>
        </note>
      <note default-x="400.36" default-y="-150.89">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="416.86" default-y="-145.89" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="464.29" default-y="-180.89">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="492.7" default-y="-140.89">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="39" width="802.02">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.28</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="203.93" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="265.39" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="295.96" default-y="50">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-50.234936" bezier-y="41.048994" />
          </notations>
        </note>
      <note default-x="357.11" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="387.69" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="418.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="448.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="506.25" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="567.4" default-y="45">
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-68.275738" bezier-y="85.128079" />
          </notations>
        </note>
      <note default-x="616.78" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-98.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="0" bezier-y="58.838644" number="1" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="112.21" default-y="-143.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="142.78" default-y="-128.28">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="173.36" default-y="-113.28">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="203.93" default-y="-128.28">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="265.39" default-y="-118.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="109.821284" number="2" />
          </notations>
        </note>
      <note default-x="295.96" default-y="-113.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="326.54" default-y="-118.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="357.11" default-y="-138.28">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="387.69" default-y="-128.28">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="448.83" default-y="-128.28">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="506.25" default-y="-103.28">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="536.83" default-y="-88.28">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="567.4" default-y="-128.28">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="616.78" default-y="-128.28">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="662.64" default-y="-123.28">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.024561" bezier-y="18.81945" number="1" />
          </notations>
        </note>
      <note default-x="708.5" default-y="-118.28">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="754.36" default-y="-123.28">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.024561" bezier-y="18.81945" />
          </notations>
        </note>
      </measure>
    <measure number="40" width="767.88">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.06" default-y="-32.25" relative-y="-40">
            <ppp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="17.78" />
        </direction>
      <note default-x="15.14" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="76.29" default-y="5">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.624618" bezier-y="-3.199886" number="1" />
          </notations>
        </note>
      <note default-x="106.86" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="16.8817" />
          </notations>
        </note>
      <note default-x="137.44" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="168.01" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="198.59" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-18.660589" number="1" />
          </notations>
        </note>
      <note default-x="229.16" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.978009" bezier-y="-5.120109" />
          </notations>
        </note>
      <note default-x="260.09" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="293.65" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="324.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-16.947345" number="1" />
          </notations>
        </note>
      <note default-x="354.8" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.614417" bezier-y="-8.11626" />
          </notations>
        </note>
      <note default-x="385.37" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="446.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-21.408025" number="1" />
          </notations>
        </note>
      <note default-x="478.09" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.230072" bezier-y="-11.028276" />
          </notations>
        </note>
      <note default-x="508.66" default-y="-20">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="525.88" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="585.1" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-16.947345" number="1" />
          </notations>
        </note>
      <note default-x="615.67" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.614417" bezier-y="-8.11626" />
          </notations>
        </note>
      <note default-x="646.25" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="676.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-21.408025" number="1" />
          </notations>
        </note>
      <note default-x="708.38" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.230072" bezier-y="-11.028276" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-178.28">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.105083" bezier-y="2.189222" number="1" />
          </notations>
        </note>
      <note default-x="45.72" default-y="-138.28">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-16.235633" />
          </notations>
        </note>
      <note default-x="76.29" default-y="-128.28">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="106.86" default-y="-128.28">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-49.936523" number="1" />
          </notations>
        </note>
      <note default-x="137.44" default-y="-173.28">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="168.01" default-y="-133.28">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.24831" bezier-y="-46.141694" />
          </notations>
        </note>
      <note default-x="198.59" default-y="-128.28">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="229.16" default-y="-123.28">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="260.09" default-y="-168.28">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.686897" bezier-y="1.656711" number="1" />
          </notations>
        </note>
      <note default-x="293.65" default-y="-128.28">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-0.163005" bezier-y="-16.768144" />
          </notations>
        </note>
      <note default-x="324.22" default-y="-118.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-16.96013" number="1" />
          </notations>
        </note>
      <note default-x="354.8" default-y="-153.28">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.396783" bezier-y="-5.603628" />
          </notations>
        </note>
      <note default-x="385.37" default-y="-108.28">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-21.4312" number="1" />
          </notations>
        </note>
      <note default-x="415.95" default-y="-148.28">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.197924" bezier-y="-10.23374" />
          </notations>
        </note>
      <note default-x="446.52" default-y="-128.28">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="508.66" default-y="-128.28">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="554.52" default-y="-118.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-16.96013" number="1" />
          </notations>
        </note>
      <note default-x="585.1" default-y="-153.28">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.396783" bezier-y="-5.603628" />
          </notations>
        </note>
      <note default-x="615.67" default-y="-108.28">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-21.4312" number="1" />
          </notations>
        </note>
      <note default-x="646.25" default-y="-148.28">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.197924" bezier-y="-10.23374" />
          </notations>
        </note>
      <note default-x="676.82" default-y="-128.28">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="708.38" default-y="-118.28">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="41" width="922.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>77.44</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef number="1" after-barline="yes">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-28.12" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="100.94" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="133.04" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="197.23" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="229.33" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-46.61" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="310.58" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="310.58" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="310.58" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
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
          <dynamics default-x="-3.4" default-y="-28.12" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="511.18" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="543.28" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="607.47" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="639.57" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-45.56" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="719.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="848.21" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <forward>
        <duration>16</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="719.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="719.82" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="100.94" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.180722" bezier-y="13.333144" number="1" />
          </notations>
        </note>
      <note default-x="133.04" default-y="-132.44">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="165.14" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="197.23" default-y="-132.44">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="229.33" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.180671" bezier-y="13.333241" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="310.58" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.179299" bezier-y="13.332767" number="1" />
          </notations>
        </note>
      <note default-x="342.68" default-y="-147.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="374.78" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="406.87" default-y="-147.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="438.97" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.179248" bezier-y="13.332864" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="511.18" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.179299" bezier-y="13.332767" number="1" />
          </notations>
        </note>
      <note default-x="543.28" default-y="-132.44">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="575.38" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="607.47" default-y="-132.44">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="639.57" default-y="-137.44">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.179248" bezier-y="13.332864" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="719.82" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.179299" bezier-y="13.332767" number="1" />
          </notations>
        </note>
      <note default-x="751.92" default-y="-147.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="784.02" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="816.11" default-y="-147.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="848.21" default-y="-152.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.179248" bezier-y="13.332864" />
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="100.94" default-y="-162.44">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="310.58" default-y="-187.44">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-39.2" default-y="-49.7" />
          </notations>
        </note>
      <note default-x="310.58" default-y="-172.44">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-39.2" default-y="-49.7" />
          </notations>
        </note>
      <note default-x="511.18" default-y="-162.44">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="719.82" default-y="-187.44">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-38.2" default-y="-49.7" />
          </notations>
        </note>
      <note default-x="719.82" default-y="-172.44">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-38.2" default-y="-49.7" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="647.68">
      <attributes>
        <time>
          <beats>3</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <note default-x="35.62" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-46.84" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.24" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="71.4" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="103.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.5" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="159.67" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="159.67" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-44.28" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="231.89" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="31.323545" bezier-y="18.255378" number="1" />
          </notations>
        </note>
      <note default-x="280.03" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="336.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-73.16" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="384.34" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.210055" bezier-y="23.554253" />
          </notations>
        </note>
      <note default-x="445.28" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="32.960358" bezier-y="15.857604" number="1" />
          </notations>
        </note>
      <note default-x="493.42" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="549.59" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="597.73" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.271229" bezier-y="23.207465" />
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
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="231.89" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot placement="below" default-x="248.39" default-y="5" />
        <dot placement="below" default-x="253.39" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="408.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="445.28" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="35.62" default-y="-137.44">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="52.84" default-y="-132.44" />
        <staff>2</staff>
        </note>
      <backup>
        <duration>1</duration>
        </backup>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <forward>
        <duration>1</duration>
        </forward>
      <note default-x="127.57" default-y="-147.44">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="159.67" default-y="-107.44">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="231.89" default-y="-137.44">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="249.11" default-y="-132.44" />
        <staff>2</staff>
        </note>
      <note default-x="304.1" default-y="-127.44">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="336.2" default-y="-87.44">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="445.28" default-y="-137.44">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="462.5" default-y="-132.44" />
        <staff>2</staff>
        </note>
      <note default-x="517.49" default-y="-142.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="549.59" default-y="-102.44">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="43" width="594.66">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>103.51</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="0">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-76.27" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-111.67" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="87.71" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="124.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="124.25" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.55" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-46.1" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="239.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="256.33" default-y="-5" />
        <dot default-x="261.33" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="384.74" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="421.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="438.1" default-y="-15" />
        <dot default-x="443.1" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="566.51" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-50">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="239.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="start" bezier-x="23.816967" bezier-y="-18.534942" number="1" />
          </notations>
        </note>
      <note default-x="279.35" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="325.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-108.4" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="364.98" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.241391" bezier-y="-16.542799" />
          </notations>
        </note>
      <note default-x="421.6" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.461393" bezier-y="-19.02399" number="1" />
          </notations>
        </note>
      <note default-x="461.12" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="507.23" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="546.75" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.596965" bezier-y="-16.035728" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-163.51">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="78.58" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="144.01" default-y="-188.51">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="180.55" default-y="-148.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="239.83" default-y="-163.51">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="257.05" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="299.11" default-y="-168.51">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="325.46" default-y="-128.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="421.6" default-y="-163.51">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="438.82" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="480.88" default-y="-183.51">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="507.23" default-y="-143.51">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="44" width="490.62">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-111.67" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="23.36" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="39.86" default-y="-15" />
        <dot default-x="44.86" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.51" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="205.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.23" default-y="-20">
        <rest />
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="394.78" default-y="-15" />
        <dot default-x="399.78" default-y="-15" />
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
          <dynamics default-x="-3.4" default-y="-64.05" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="462.47" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="1.58253" bezier-y="24.417103" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="23.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.461393" bezier-y="-19.02399" number="2" />
          </notations>
        </note>
      <note default-x="62.88" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="108.99" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="148.51" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.596965" bezier-y="-16.035728" />
          </notations>
        </note>
      <note default-x="205.37" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.891619" bezier-y="-19.253847" number="2" />
          </notations>
        </note>
      <note default-x="244.89" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="301.19" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="340.71" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-27.260984" bezier-y="-17.260513" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="23.36" default-y="-163.51">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="40.58" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="82.64" default-y="-183.51">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="108.99" default-y="-143.51">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="205.37" default-y="-163.51">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="222.59" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="264.65" default-y="-193.51">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="301.19" default-y="-153.51">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="380.23" default-y="-163.51">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="45" width="484.63">
      <note default-x="27.1" default-y="10">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.759195" bezier-y="10.076177" />
          </notations>
        </note>
      <note default-x="27.1" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.11" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="213.22" default-y="-25">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="26.655369" number="1" />
          </notations>
        </note>
      <note default-x="252.18" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="268.68" default-y="5" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.42515" bezier-y="14.775114" />
          </notations>
        </note>
      <note default-x="252.18" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="268.68" default-y="15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="367.43" default-y="-20">
        <rest />
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="381.97" default-y="-15" />
        <dot default-x="386.97" default-y="-15" />
        <staff>1</staff>
        </note>
      <note default-x="449.67" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="1.15243" bezier-y="5.824022" number="1" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="27.1" default-y="-163.51">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="53.45" default-y="-218.51">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="82.31" default-y="-183.51">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.83" default-y="-183.51">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="181.11" default-y="-163.51">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="195.65" default-y="-158.51" />
        <staff>2</staff>
        </note>
      <note default-x="302.28" default-y="-163.51">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="328.62" default-y="-228.51">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="367.43" default-y="-193.51">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="601.65">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.26" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="75.47" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="91.97" default-y="5" />
        <dot default-x="96.97" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.272664" bezier-y="10.088753" />
          </notations>
        </note>
      <note default-x="75.47" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="91.97" default-y="15" />
        <dot default-x="96.97" default-y="15" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.24" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="23.486843" number="1" />
          </notations>
        </note>
      <note default-x="244.92" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="261.42" default-y="15" />
        <dot default-x="266.42" default-y="15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.934812" bezier-y="10.968788" />
          </notations>
        </note>
      <note default-x="244.92" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="261.42" default-y="25" />
        <dot default-x="266.42" default-y="25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="374.41" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="start" bezier-x="18.838477" bezier-y="11.809528" number="1" />
          </notations>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="441.13" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="457.64" default-y="-35" />
        <dot default-x="462.64" default-y="-35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.660422" bezier-y="16.084931" />
          </notations>
        </note>
      <note default-x="441.13" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="457.64" default-y="-25" />
        <dot default-x="462.64" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="571.9" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="start" bezier-x="17.606306" bezier-y="-5.530115" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="75.47" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="105.93" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="122.43" default-y="-130" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="159.07" default-y="-135">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="244.92" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="274.1" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="290.6" default-y="-140" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="327.25" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="441.13" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="471.6" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="488.1" default-y="-140" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="524.74" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="47" width="511.56">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-46.86" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="22.08" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="38.58" default-y="-25" />
        <dot default-x="43.58" default-y="-25" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.414515" bezier-y="-16.424376" />
          </notations>
        </note>
      <note default-x="22.08" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="38.58" default-y="-15" />
        <dot default-x="43.58" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-85.66" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="152.85" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="start" bezier-x="15.967362" bezier-y="-0.795732" number="1" />
          </notations>
        </note>
      <note default-x="188.71" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="205.21" default-y="-25" />
        <dot default-x="210.21" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-2.036641" bezier-y="-15.856921" />
          </notations>
        </note>
      <note default-x="188.71" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="205.21" default-y="-15" />
        <dot default-x="210.21" default-y="-15" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="319.48" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="10.307652" number="1" />
          </notations>
        </note>
      <note default-x="347.94" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="364.45" default-y="-15" />
        <dot default-x="369.45" default-y="-15" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.061297" bezier-y="4.833365" />
          </notations>
        </note>
      <note default-x="347.94" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>7</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="364.45" default-y="-5" />
        <dot default-x="369.45" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="481.81" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <beam number="3">backward hook</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="22.08" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="52.54" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="69.05" default-y="-140" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="105.69" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="188.71" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="219.18" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="235.68" default-y="-150" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="272.32" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="347.94" default-y="-125">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="381.51" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="398.01" default-y="-150" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="434.65" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="48" width="456.69">
      <note default-x="25.18" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-90.55" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="119.51" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="287.2" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="329.12" default-y="5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="345.62" default-y="5" />
        <accidental>sharp</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="25.18" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="119.51" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="49.269142" bezier-y="-29.851594" number="1" />
          </notations>
        </note>
      <note default-x="161.43" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="203.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="245.28" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="287.2" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="329.12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="371.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="412.97" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="220.94" default-y="-115">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="49" width="537.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>147.15</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>118.78</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-72.36" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-107.76" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="70.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.701034" bezier-y="-8.064114" />
          </notations>
        </note>
      <note default-x="70.48" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="346.43" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="417.51" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="456.93" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="496.35" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
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
        <duration>24</duration>
        </backup>
      <note default-x="70.48" default-y="-188.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="28.4117" bezier-y="-28.863215" number="1" />
          </notations>
        </note>
      <note default-x="109.91" default-y="-183.78">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.33" default-y="-198.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="208.46" default-y="-198.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="247.88" default-y="-188.78">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="287.3" default-y="-218.78">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-33.375416" bezier-y="-21.549934" />
          </notations>
        </note>
      <note default-x="346.43" default-y="-178.78">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="417.51" default-y="-208.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="446.01" default-y="-203.78" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="417.51" default-y="-188.78">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="446.01" default-y="-193.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="429.51" default-y="-183.78">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="446.01" default-y="-183.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="50" width="563.78">
      <note default-x="22" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="66.47" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="105.89" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="145.31" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184.73" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="230.91" default-y="20">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="270.33" default-y="-10">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-73" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="329.47" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="102.318061" bezier-y="42.677839" number="1" />
          </notations>
        </note>
      <note default-x="329.47" default-y="40">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="22" default-y="-90">
        <rest />
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="329.47" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="43.262525" bezier-y="-19.81615" number="2" />
          </notations>
        </note>
      <note default-x="440.43" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="22" default-y="-208.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
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
      <note default-x="10" default-y="-188.78">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="22" default-y="-183.78">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.47" default-y="-173.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="82.97" default-y="-173.78" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="54.46" default-y="-153.78">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="82.97" default-y="-153.78" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.47" default-y="-148.78">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="82.97" default-y="-143.78" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="184.73" default-y="-178.78">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="230.91" default-y="-198.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="230.91" default-y="-178.78">
        <chord />
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="242.91" default-y="-173.78">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="270.33" default-y="-178.78">
        <rest />
        <duration>4</duration>
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
      <note default-x="329.47" default-y="-178.78">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="355.75" default-y="-243.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="46.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="387.87" default-y="-208.78">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="49.39" />
            </articulations>
          </notations>
        </note>
      <note default-x="414.15" default-y="-193.78">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="51.72" />
            </articulations>
          </notations>
        </note>
      <note default-x="440.43" default-y="-178.78">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="54.05" />
            </articulations>
          </notations>
        </note>
      <note default-x="466.71" default-y="-163.78">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="56.38" />
            </articulations>
          </notations>
        </note>
      <note default-x="495.35" default-y="-148.78">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="58.92" />
            </articulations>
          </notations>
        </note>
      <note default-x="523.99" default-y="-138.78">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="61.46" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="51" width="468.56">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-73" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="23.64" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-35.795446" bezier-y="-31.353021" />
          </notations>
        </note>
      <note default-x="23.64" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="141.9" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="158.41" default-y="35" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="407.63" default-y="35">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="23.64" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="82.77" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="141.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="31.893962" bezier-y="-20.448567" number="2" />
          </notations>
        </note>
      <note default-x="141.9" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.51" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="256.51" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="348.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-28.829396" bezier-y="-24.581185" />
          </notations>
        </note>
      <note default-x="348.49" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="23.64" default-y="-168.78">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <strong-accent type="up" default-x="0.6" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="141.9" default-y="-178.78">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="168.19" default-y="-233.78">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="199.03" default-y="-218.78">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="229.69" default-y="-203.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="256.51" default-y="-188.78">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="282.79" default-y="-178.78">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="309.07" default-y="-153.78">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="348.49" default-y="-153.78">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="407.63" default-y="-178.78">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="501.42">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>94.25</staff-distance>
          </staff-layout>
        </print>
      <note default-x="71.45" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.72" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.426988" bezier-y="30.223792" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="71.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="32.115853" bezier-y="-20.572565" number="1" />
          </notations>
        </note>
      <note default-x="71.45" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.88" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="181.88" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="279.7" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.108272" bezier-y="-24.644816" />
          </notations>
        </note>
      <note default-x="279.7" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-56.47" />
            </articulations>
          </notations>
        </note>
      <note default-x="364.72" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="405.15" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-53.92" />
            </articulations>
          </notations>
        </note>
      <note default-x="405.15" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="442.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="442.93" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="71.45" default-y="-154.25">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="96.64" default-y="-209.25">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="39.634299" bezier-y="-2.067951" number="1" />
          </notations>
        </note>
      <note default-x="127.48" default-y="-184.25">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="156.34" default-y="-169.25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="181.88" default-y="-154.25">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="210.35" default-y="-144.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="241.91" default-y="-119.25">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.256049" bezier-y="-36.167452" />
          </notations>
        </note>
      <note default-x="279.7" default-y="-154.25">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="364.72" default-y="-154.25">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="266.88">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">REPRISE : le thème en octaves ff — forme ternaire assumée</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-63.18" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-98.58" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="95.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="88.399029" bezier-y="-50.505588" number="1" />
          </notations>
        </note>
      <note default-x="95.03" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.05" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.05" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
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
        <duration>24</duration>
        </backup>
      <note default-x="126.04" default-y="-144.25">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="411.62">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-98.58" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="13.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot placement="below" default-x="29.54" default-y="-35" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.04" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot placement="below" default-x="29.54" default-y="5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.77" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.77" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.46" default-y="20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="353.14" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="353.14" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="353.14" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
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
        <duration>24</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="296.46" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="13.04" default-y="-154.25">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="50.83" default-y="-174.25">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="88.62" default-y="-154.25">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.41" default-y="-144.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="164.2" default-y="-134.25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="201.99" default-y="-134.25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="239.77" default-y="-129.25">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="296.46" default-y="-154.25">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="353.14" default-y="-199.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.056526" bezier-y="-13.9895" number="2" />
          </notations>
        </note>
      <note default-x="353.14" default-y="-164.25">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="389.99">
      <attributes>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">empilements de cellules [0,1,4] : l'espace musical unifié (horizontal = vertical)</words></direction-type><staff>2</staff></direction><note default-x="43.54" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="60.04" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="288.99" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
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
      <note default-x="288.99" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="288.99" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
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
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="43.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-83.665676" bezier-y="-54.147807" />
          </notations>
        </note>
      <note default-x="43.54" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="43.54" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="128.57" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.57" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.57" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.99" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="43.54" default-y="-189.25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="60.04" default-y="-189.25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-18.920544" bezier-y="-18.005817" />
          </notations>
        </note>
      <note default-x="43.54" default-y="-154.25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="60.04" default-y="-149.25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.45" default-y="-189.25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="16.321225" bezier-y="-9.351259" number="1" />
          </notations>
        </note>
      <note default-x="160.45" default-y="-154.25">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="217.14" default-y="-179.25">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="233.64" default-y="-179.25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.136059" bezier-y="-14.371656" />
          </notations>
        </note>
      <note default-x="217.14" default-y="-144.25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="233.64" default-y="-139.25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="331.5" default-y="-184.25">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="11.394902" bezier-y="-11.582742" number="1" />
          </notations>
        </note>
      <note default-x="331.5" default-y="-149.25">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="56" width="438.61">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>93.83</staff-distance>
          </staff-layout>
        </print>
      <note default-x="61.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.36" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.36" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="149.34" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="177.84" default-y="-25" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="149.34" default-y="-20">
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
        <dot default-x="177.84" default-y="-15" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="149.34" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="177.84" default-y="-5" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="73.37" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="161.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="177.84" default-y="-35" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-64" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-67.74" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="260.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="319.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-75.36" />
            </articulations>
          </notations>
        </note>
      <note default-x="378.16" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-74.23" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="60.4" default-y="-173.83">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>32</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-4.544342" bezier-y="-7.964552" />
          </notations>
        </note>
      <note default-x="60.4" default-y="-138.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>32</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="57" width="456.29">
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>32</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>32</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>32</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="23.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="40.42" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-64" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.25" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-81.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.9" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="278.55" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="337.19" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="395.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>32</duration>
        </backup>
      <note default-x="10.96" default-y="-173.83">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="10.96" default-y="-138.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="69.61" default-y="-183.83">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="16.780265" bezier-y="-9.561163" number="1" />
          </notations>
        </note>
      <note default-x="69.61" default-y="-148.83">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.26" default-y="-173.83">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-12.663777" bezier-y="-14.581559" />
          </notations>
        </note>
      <note default-x="128.26" default-y="-138.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="337.19" default-y="-173.83">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="337.19" default-y="-138.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="395.84" default-y="-183.83">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="25.430279" bezier-y="-16.188375" number="1" />
          </notations>
        </note>
      <note default-x="395.84" default-y="-148.83">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="313.83">
      <attributes>
        <time>
          <beats>3</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.52" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="61.08" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.08" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.08" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.04" default-y="-10">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
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
          <dynamics default-x="-0.7" default-y="-51.48" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="267.88" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="267.88" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
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
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.08" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.04" default-y="-40">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="253.38" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.08" default-y="-173.83">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.993481" bezier-y="-20.075823" />
          </notations>
        </note>
      <note default-x="61.08" default-y="-138.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="193.04" default-y="-153.83">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="361.18">
      <note default-x="31.26" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="47.76" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="31.26" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="47.76" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="17.26" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="75.91" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="134.56" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="222.53" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="261.63" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="300.73" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="17.26" default-y="-203.83">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="33.76" default-y="-198.83" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="17.26" default-y="-173.83">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <dot default-x="33.76" default-y="-168.83" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="60" width="345.53">
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
      <note default-x="65.36" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="81.86" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="65.36" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="81.86" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="112.7" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="164.04" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="241.05" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
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
      <note default-x="241.05" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="292.39" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="61.36" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="77.86" default-y="-180" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="318.98">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">coda : dissolution par raréfaction</words></direction-type><staff>2</staff></direction><note default-x="14" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="14" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <dot default-x="30.5" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="61.34" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.68" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="189.69" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="223.91" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="265.84" default-y="-155">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-180" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
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
        <duration>2</duration>
        </forward>
      <note default-x="235.91" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>7</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="265.84" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="62" width="316.42">
      <note default-x="15.14" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="194.83" default-y="20">
        <rest />
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-40">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="66.48" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="117.82" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="194.83" default-y="-5">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="229.06" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="263.28" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.83" default-y="-145">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="15.14" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31.64" default-y="-180" />
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.14" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="31.64" default-y="-160" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="294.17">
      <note default-x="139.68" default-y="0">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
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
      <note default-x="61.34" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.68" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.02" default-y="-30">
        <rest />
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="215.36" default-y="-30">
        <rest />
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="22.9" default-y="-120" />
        <staff>2</staff>
        </note>
      <note default-x="164.02" default-y="-175">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="30.26" relative-x="4.2" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="215.36" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="31.290644" bezier-y="-19.817381" number="1" />
          </notations>
        </note>
      <note default-x="215.36" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="64" width="294.81">
      <note default-x="135.4" default-y="0">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="135.4" default-y="-30">
        <rest measure="yes" />
        <duration>24</duration>
        <voice>2</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-115">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="87.01" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="31.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.01" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.01" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="121.24" default-y="-105">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="155.46" default-y="-105">
        <rest />
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="206.8" default-y="-105">
        <rest />
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-190">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="87.01" default-y="-190">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.290644" bezier-y="-19.817381" />
          </notations>
        </note>
      <note default-x="87.01" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="206.8" default-y="-145">
        <rest />
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const SCHOENBERG_OP11_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Si–Sol#",                    degre: "cellule génératrice — Si-Sol#(-Sol) = [0,1,4], la Grundgestalt",         fonction: "?" },
  { numero: 2,  nom: "Sol-La-Fa / Fa-Sol♭-Si",     degre: "fin du thème + 1er accord d'accompagnement = [0,1,6]",                    fonction: "?" },
  { numero: 3,  nom: "La-Sib-Réb",                 degre: "2e accord — la cellule mélodique [0,1,4] dressée verticalement",         fonction: "?" },
  { numero: 14, nom: "Fa-La-Do#-Mi (flageolets)",  degre: "accord-résonance tenu 4 mesures — l'ombre d'un ∆7#5",                     fonction: "?" },
  { numero: 34, nom: "tempête",                    degre: "section centrale — tierces parallèles en planing chromatique",           fonction: "?" },
  { numero: 53, nom: "Si-Sol# (octaves ff)",       degre: "reprise — le thème doublé sur deux octaves, fortissimo",                 fonction: "?" },
  { numero: 54, nom: "empilements [0,1,4]",        degre: "la cellule superposée plusieurs fois",                                    fonction: "?" },
  { numero: 60, nom: "coda",                       degre: "dissolution par raréfaction",                                             fonction: "?" },
  { numero: 64, nom: "dernier événement",          degre: "extinction",                                                              fonction: "?" },
];

export const SCHOENBERG_OP11_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Aucune. Pour la première fois de tout ce corpus, il n'y a littéralement rien à chiffrer — l'analyse change d'unités : des cellules d'intervalles, pas des degrés.",
  metrique: "3/4, Moderato (noté ♩=114 dans cette transcription).",
  forme: "Une forme ternaire d'une orthodoxie totale : A (m.1-11, thème et sa suite), transition et flageolets (m.12-17), développement de la cellule et section centrale en tempête (m.34 sq.), reprise (m.53, le thème en octaves fortissimo), empilements de la cellule (m.54-56), coda en dissolution par raréfaction. Schoenberg change la matière, pas la maçonnerie.",
  sections: [
    {
      label: "Mesures 1-3 (la Grundgestalt : une cellule engendre tout)",
      titre: "La mélodie et l'harmonie faites de la même substance",
      chiffrage: "[0,1,4] (thème) → [0,1,6] puis [0,1,4] (accompagnement)",
      fonctions: "? (aucune fonction possible — pas d'accord au sens classique)",
      texte: "Le thème inaugural — Si-Sol# puis Sol-La-Fa — est seul, sans harmonie, comme le motto de la Cinquième de Beethoven ou l'anacrouse de Tristan. Ses trois premières notes (Si-Sol#-Sol) forment la cellule [0,1,4] : une tierce mineure et un demi-ton, la Grundgestalt de toute la pièce. Le geste fondateur suit aussitôt : le premier accord d'accompagnement (Fa-Sol♭-Si) est [0,1,6], mais le second (La-Sib-Réb) est exactement [0,1,4] — la cellule mélodique elle-même, dressée verticalement. Plus de différence de nature entre l'horizontal et le vertical : c'est l'unité de l'espace musical que Schoenberg théorisera lui-même.",
    },
    {
      label: "Mesures 12-17 (transition et flageolets : les fantômes tonals)",
      titre: "Deux lectures, toutes deux vraies",
      chiffrage: "accord-résonance Fa-La-Do#-Mi, tenu 4 mesures",
      fonctions: "? (résonance, pas fonction — mais l'ombre d'une couleur reconnaissable)",
      texte: "Le débat classique sur cette pièce mérite d'être présenté loyalement. Lecture radicale : aucune fonction, que des cellules. Lecture résiduelle : le passage le plus fameux, les accords-flageolets des mesures 14-17, fait résonner une triade augmentée plus septième majeure — l'ombre exacte d'un Fa∆7#5, l'objet de Voiles (l'augmenté, seule triade des tons entiers) et la ∆7 de Satie, fondus en pure résonance. Schoenberg se tient volontairement au seuil : assez près de la tonalité pour qu'on entende ce qu'il quitte, assez loin pour qu'aucun chiffre n'y reprenne pied.",
    },
    {
      label: "Mesures 34 et suivantes (la tempête : planing atonalisé)",
      titre: "La technique de Debussy, changée de monde",
      chiffrage: "tierces parallèles en mouvement chromatique",
      fonctions: "?",
      texte: "La section centrale déploie la cellule en tempête : des tierces parallèles glissent chromatiquement, la même technique de planing que Debussy — mais ici sans gamme par tons ni collection stable pour l'ancrer, seulement le mouvement chromatique intégral. Le procédé traverse la frontière tonale ; son sens en est changé du tout au tout.",
    },
    {
      label: "Mesure 53 et suivantes (la reprise : la forme classique dans le langage nouveau)",
      titre: "L'architecture reste, la matière a changé",
      chiffrage: "Si-Sol#, doublé sur 2 octaves, fortissimo → empilements de [0,1,4]",
      fonctions: "?",
      texte: "Le thème revient en octaves fortissimo — Si et Sol# chacun doublés sur deux octaves simultanément — puis la cellule s'empile sur elle-même à plusieurs hauteurs. La forme ternaire est d'une orthodoxie totale : Schoenberg change la matière, pas la maçonnerie. C'est l'exact inverse de ce que fera Coltrane un demi-siècle plus tard, qui gardera la matière (les cadences) et changera l'orbite.",
    },
    {
      label: "Coda (dissolution par raréfaction)",
      titre: "La pièce s'éteint comme elle a commencé : sans harmonie",
      chiffrage: "raréfaction progressive",
      fonctions: "?",
      texte: "La pièce se referme par un amincissement progressif de la texture, un écho de l'énigme sans harmonie de son ouverture. Aucun accord ne vient conclure ce qui n'a jamais été un système d'accords.",
    },
  ],
  synthese: [
    {
      titre: "L'unité de l'espace musical",
      texte: "Ce corpus a suivi la frontière entre horizontal et vertical pendant vingt extraits : Bach où la verticalité résulte des lignes, Satie où elle s'en émancipe, Evans qui verticalise un cliché mélodique. Ici, cette frontière est abolie par principe — la mélodie et l'harmonie sont littéralement la même cellule, vue sous deux angles.",
    },
    {
      titre: "Les deux lectures, comme il se doit",
      texte: "Aucune fonction que des cellules, ou un frôlement tonal jamais confirmé : les deux lectures de cette pièce sont vraies, et leur coexistence — plutôt que leur résolution — est l'œuvre elle-même.",
    },
    {
      titre: "Le triptyque de 1909-1911",
      texte: "Trois réponses simultanées à la même saturation harmonique ouverte par Wagner : Debussy (Voiles, 1909) rend la fonction inconstructible par choix de collection ; Schoenberg (op. 11, la même année) la rend sans objet par chromatisme intégral organisé en cellules ; Stravinsky (1911, la fiche Petrouchka) la garde en double et fait du conflit le matériau lui-même.",
    },
  ],
};