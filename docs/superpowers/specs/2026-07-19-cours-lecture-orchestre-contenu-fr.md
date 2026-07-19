# Contenu FR — « Orchestration et lecture d'orchestre »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables de référence, exemples note à note, quiz, exercices). Aucun code, aucune i18n, aucun composant. La priorité absolue est l'**exactitude des transpositions, des clés et des registres** : chaque calcul écrit → sonné a été vérifié dans les deux sens ; une erreur dans une table de référence discréditerait tout le cours.

---

## Bloc d'en-tête

- **Titre du cours** : Orchestration et lecture d'orchestre
- **Niveau** : Niveau 3 (≈ L3 · DNSPM) — deuxième cours du parcours interprète (DNSPM). Il **prolonge le cours 19** (*Introduction à l'orchestration* : les quatre familles, tessitures, rôles, doublures, distribution SATB) : ici on ne décrit plus l'orchestre, on apprend à **le lire** — ouvrir une partition de chef, déchiffrer chaque ligne (clés, transpositions), reconstituer l'harmonie réelle, la réduire au piano et juger l'équilibre.
- **Objectifs d'apprentissage**
  - Se repérer dans l'**architecture d'une page de conducteur** : ordre des familles, noms italiens/allemands des instruments, repères de répétition, méthode de balayage d'une page.
  - Lire couramment les **clés d'ut** (alto = ut 3e ligne, ténor = ut 4e ligne) avec la méthode des notes-ancres.
  - Maîtriser les **instruments transpositeurs** : pour chaque instrument courant, connaître l'intervalle réel écrit → sonné et savoir le calculer sans hésitation dans les deux sens.
  - Reconstituer la **verticalité harmonique** d'un tutti : basse d'abord, familles réduites en hauteurs réelles, doublures repliées, accord nommé.
  - Produire une **réduction pianistique jouable** sur deux portées : que garder, que sacrifier, comment resserrer les registres.
  - Juger l'**équilibre orchestral** : hiérarchie des puissances, compensations, les trois dispositions classiques d'un accord entre familles.
- **Moteurs Harmonia réutilisés**
  - **Verovio / satb-vers-musicxml** — gravure de tous les exemples, y compris la réduction sur deux portées (section 5).
  - **PianoPlayer** — écoute des exemples (noms FR : Do Ré Mi Fa Sol La Si ; Do4 = do central). **Dispositif pédagogique clé du cours : pour chaque instrument transpositeur, le piano joue d'abord la note ÉCRITE, puis la note RÉELLE** — l'oreille mémorise l'intervalle de transposition bien mieux que la règle verbale.
  - **Liens de cours et d'outils** — cours 19 (*Introduction à l'orchestration*) pour les tessitures, rôles et doublures (non répétés ici) ; outil **/analyse-partition** pour l'exercice de synthèse (import MusicXML d'une réduction d'extrait orchestral et vérification de l'harmonie).
- **Convention de notation** : noms de notes français partout (Do Ré Mi Fa Sol La Si), Do4 = do central. Quand une hauteur est ambiguë, on précise toujours **écrit** ou **sonné** (réel).

---

## Section 1 — Lire une partition d'orchestre

Ouvrir un conducteur pour la première fois est intimidant : vingt portées, cinq clés, des noms en italien. Mais la page est **rigoureusement ordonnée**, et cet ordre est le même depuis le XIXe siècle, de haut en bas : **bois** (flûtes, hautbois, clarinettes, bassons), **cuivres** (cors, trompettes, trombones, tuba), **timbales et percussions**, puis les intermédiaires éventuels (**harpe, célesta, piano**, voix solistes et chœur), et enfin les **cordes** (violons I, violons II, altos, violoncelles, contrebasses). À l'intérieur de chaque famille, l'aigu est en haut, le grave en bas. Les instruments sont presque toujours nommés en **italien** — et une partition allemande réserve un piège célèbre : **« in B » signifie en Si♭** (le Si naturel allemand s'écrit « H »).

| Italien | Français | Allemand |
|---|---|---|
| Flauto (Fl.) / Ottavino | Flûte / Piccolo | Flöte / Kleine Flöte |
| Oboe (Ob.) / Corno inglese | Hautbois / Cor anglais | Oboe / Englischhorn |
| Clarinetto (Cl.) | Clarinette | Klarinette (« in B » = en Si♭ !) |
| Fagotto (Fg.) / Controfagotto | Basson / Contrebasson | Fagott / Kontrafagott |
| Corno (Cor.) | Cor | Horn |
| Tromba (Tr.) | Trompette | Trompete |
| Trombone (Trb.) — *Ottoni* = les cuivres | Trombone | Posaune |
| Timpani (Timp.) | Timbales | Pauken |
| Arpa | Harpe | Harfe |
| Violino (Vl.) / Viola (Vla.) | Violon / Alto | Violine (Geige) / Bratsche |
| Violoncello (Vc.) / Contrabbasso (Cb.) | Violoncelle / Contrebasse | Violoncello / Kontrabass |

**Comment balayer une page** — jamais ligne à ligne de haut en bas. Trois passes : **1) la basse** (violoncelles/contrebasses, bassons, tuba — c'est le fondement harmonique, cf. section 4) ; **2) la mélodie** (souvent violons I, flûte ou hautbois — cherchez la ligne la plus active ou marquée *solo*) ; **3) le remplissage** (qui tient les notes du milieu, qui double qui — les rôles et doublures sont ceux du cours 19). Les **repères de répétition** (lettres A, B, C… ou numéros de mesure encadrés) servent à naviguer en répétition : citez-les toujours (« 4 après B ») — c'est la langue commune du pupitre et du chef.

---

## Section 2 — Les clés

Pourquoi l'alto ne lit-il pas en clé de sol ? Parce que sa tessiture centrale (Do3–La5, cf. cours 19) tomberait en plein dans les lignes supplémentaires sous la portée. La **clé d'ut** résout ce problème : elle place le **do central (Do4)** sur la ligne qu'elle enlace. **Clé d'ut 3e ligne (clé d'alto)** : Do4 = 3e ligne — c'est la clé permanente de l'alto. **Clé d'ut 4e ligne (clé de ténor)** : Do4 = 4e ligne — violoncelles, bassons et trombones y passent dans leur registre aigu, pour éviter les lignes supplémentaires au-dessus de la clé de fa (un violoncelle qui chante autour de Sol3–Sol4 s'écrit bien plus lisiblement en clé d'ut 4).

| Clé | Instruments | Le Do central (Do4) s'écrit… |
|---|---|---|
| Clé de sol | Violons, flûte, hautbois, clarinette, cor, trompette | 1re ligne supplémentaire **sous** la portée |
| Clé d'ut 3e ligne (alto) | Alto (permanente) ; trombone alto (répertoire ancien) | **3e ligne** |
| Clé d'ut 4e ligne (ténor) | Violoncelle, basson, trombone ténor — en registre aigu | **4e ligne** |
| Clé de fa | Violoncelle, contrebasse, basson, trombones, tuba, timbales | 1re ligne supplémentaire **au-dessus** de la portée |

**Méthode des notes-ancres** (la seule qui tienne en situation) : mémoriser les lignes. En clé d'ut 3, les lignes sont **Fa3 – La3 – Do4 – Mi4 – Sol4** ; en clé d'ut 4, **Ré3 – Fa3 – La3 – Do4 – Mi4**. Deux exemples exacts à retenir comme étalons : **La3 en clé d'alto = 2e ligne** ; **Mi4 en clé de ténor = 5e ligne** (la ligne du haut). Dépannage possible mais à abandonner vite : lire « comme en clé de sol » puis corriger — en clé d'ut 3, monter d'une seconde et descendre d'une octave ; en clé d'ut 4, descendre d'une seconde puis d'une octave. Entraînez-vous cinq minutes par jour : la fluidité en clés d'ut est un prérequis absolu de la section 4.

---

## Section 3 — Les instruments transpositeurs

Le principe tient en une phrase : **un instrument « en X » fait entendre X quand il lit Do**. La partie est écrite dans une hauteur conventionnelle qui préserve les doigtés du musicien (toute la famille des clarinettes ou des saxophones se lit avec les mêmes doigtés) ou qui hérite des cors et trompettes naturels, jadis fabriqués dans tous les tons. Pour le lecteur de conducteur, une seule chose compte : **de combien, et dans quel sens, transposer pour entendre la hauteur réelle**.

LA table de référence du cours — chaque ligne vérifiée, à connaître par cœur :

| Instrument | Écrit → sonne | Exemple exact | Pour entendre la hauteur réelle |
|---|---|---|---|
| **Piccolo** | une **octave plus haut** | écrit Do4 → sonne Do5 | transposez d'une octave **vers le haut** |
| **Cor anglais (en Fa)** | une **5te juste plus bas** | écrit Do4 → sonne Fa3 | transposez d'une 5te juste **vers le bas** |
| **Clarinette en Si♭** | une **2de majeure plus bas** | écrit Ré4 → sonne Do4 | transposez d'une 2de majeure **vers le bas** |
| **Clarinette en La** | une **3ce mineure plus bas** | écrit Mi♭4 → sonne Do4 (écrit Do4 → sonne La3) | transposez d'une 3ce mineure **vers le bas** |
| **Cor en Fa** | une **5te juste plus bas** | écrit Sol4 → sonne Do4 (écrit Do4 → sonne Fa3) | transposez d'une 5te juste **vers le bas** |
| **Trompette en Si♭** | une **2de majeure plus bas** | écrit Ré4 → sonne Do4 | transposez d'une 2de majeure **vers le bas** |
| **Saxophone alto en Mi♭** | une **6te majeure plus bas** | écrit Do4 → sonne Mi♭3 (écrit La4 → sonne Do4) | transposez d'une 6te majeure **vers le bas** |
| **Saxophone ténor en Si♭** | une **9e majeure plus bas** (octave + 2de M) | écrit Do4 → sonne Si♭2 (écrit Ré5 → sonne Do4) | transposez d'une octave puis d'une 2de majeure **vers le bas** |
| **Contrebasse** | une **octave plus bas** | écrit Do3 → sonne Do2 | transposez d'une octave **vers le bas** |
| **Contrebasson** | une **octave plus bas** | écrit Do3 → sonne Do2 | transposez d'une octave **vers le bas** |
| **Célesta** | une **octave plus haut** | écrit Do4 → sonne Do5 | transposez d'une octave **vers le haut** |

Remarques de terrain. Flûte, hautbois, bassons, trombones, tuba, timbales et toutes les cordes sauf la contrebasse sonnent **comme écrit** (la trompette « en Ut » aussi). Dans le répertoire classique et romantique, les cors changent de ton d'une œuvre à l'autre (« Corni in E♭, in D… ») : la règle reste la même — écrit Do → sonne la note du nom du cor, **en dessous** (un cor en Mi♭ sonne une 6te majeure plus bas : écrit Do4 → sonne Mi♭3). Conséquence d'armure à connaître : pour qu'un ensemble sonne en Do majeur, la partie de clarinette ou de trompette en Si♭ est écrite en **Ré majeur** (2 dièses), celle du cor en Fa en **Sol majeur** (les parties de cor sont d'ailleurs traditionnellement écrites sans armure, avec altérations accidentelles).

**Exemple travaillé — un « cluster » qui n'en est pas un.** Sur le papier, trois notes voisines : Clarinette en Si♭ **écrit Fa♯4**, Cor en Fa **écrit Sol4**, Trompette en Si♭ **écrit La4**. Calculons : Cl. Si♭ Fa♯4 − 2de M = **Mi4 réel** ; Cor en Fa Sol4 − 5te J = **Do4 réel** ; Tr. Si♭ La4 − 2de M = **Sol4 réel**. Résultat sonnant : **Do4 – Mi4 – Sol4**, un accord parfait de **Do majeur** serré, à l'état fondamental. Ce qui ressemblait à un agrégat Fa♯–Sol–La est une consonance parfaite : voilà pourquoi on ne lit **jamais** un conducteur « à l'œil nu ». (PianoPlayer : jouer d'abord Fa♯4–Sol4–La4 écrits, puis Do4–Mi4–Sol4 réels — le contraste s'entend immédiatement.)

---

## Section 4 — La verticalité : retrouver l'harmonie sous l'orchestre

Méthode en quatre temps, toujours dans cet ordre. **1) La basse réelle** : repérez la ligne la plus grave effectivement sonnante — violoncelles/contrebasses (attention : les contrebasses sonnent une octave sous ce qu'elles lisent), bassons, tuba. C'est elle qui donne l'état de l'accord. **2) Chaque famille en hauteurs réelles** : réduisez les bois, puis les cuivres, puis les cordes à leur contenu de hauteurs, en transposant ce qui doit l'être (section 3) et en lisant les clés d'ut (section 2). **3) Replier les doublures et les octaves** : une note doublée à l'unisson ou à l'octave (cours 19) ne compte qu'une fois comme classe de hauteur. **4) Nommer l'accord** au-dessus de la basse : fondamentale, renversement, éventuelle 7e — puis son chiffrage dans la tonalité.

**Exemple travaillé — un tutti de quatre accords en Do majeur.** Voici, instrument par instrument, les hauteurs **écrites** (les clés indiquées sont celles de la partition) :

| Instrument (clé) | Accord 1 | Accord 2 | Accord 3 | Accord 4 |
|---|---|---|---|---|
| Flûte (sol) | Mi6 | Fa6 | Ré6 | Mi6 |
| Hautbois (sol) | Sol5 | La5 | Si5 | Do6 |
| Clarinette en Si♭ (sol) | **Fa♯4** | **Sol4** | **Sol4** | **Fa♯4** |
| Basson (fa) | Do3 | Fa3 | Sol3 | Do3 |
| Cor en Fa (sol) | **Sol4** | **Sol4** | **La4** | **Sol4** |
| Trompette en Si♭ (sol) | **La4** | **Si4** | **La4** | **La4** |
| Timbales Do–Sol (fa) | Do3 | — | Sol2 | Do3 |
| Violons I (sol) | Mi5 | Fa5 | Ré5 | Mi5 |
| Violons II (sol) | Sol4 | La4 | Si4 | Do5 |
| Altos (ut 3) | Mi4 | Fa4 | Fa4 | Mi4 |
| Violoncelles (fa) | Do3 | Fa3 | Sol3 | Do3 |
| Contrebasses (fa) | **Do3** | **Fa3** | **Sol3** | **Do3** |

Résolution des transpositions (tout le reste sonne comme écrit) :

- **Clarinette en Si♭** (− 2de M) : Fa♯4 → **Mi4** ; Sol4 → **Fa4** ; Sol4 → **Fa4** ; Fa♯4 → **Mi4**.
- **Cor en Fa** (− 5te J) : Sol4 → **Do4** ; Sol4 → **Do4** ; La4 → **Ré4** ; Sol4 → **Do4**.
- **Trompette en Si♭** (− 2de M) : La4 → **Sol4** ; Si4 → **La4** ; La4 → **Sol4** ; La4 → **Sol4**.
- **Contrebasses** (− 8ve) : Do3 → **Do2** ; Fa3 → **Fa2** ; Sol3 → **Sol2** ; Do3 → **Do2**.

Contenu réel accord par accord (basse réelle en tête, doublures repliées) :

1. **Accord 1** : Do2 (Cb) ; Do3 (Vc, Bn, Timb.) ; Do4 (Cor) ; Mi4 (Alt., Cl.) ; Sol4 (Vl. II, Tr.) ; Mi5 (Vl. I) ; Sol5 (Htb.) ; Mi6 (Fl.) → classes {Do, Mi, Sol}, basse Do → **Do majeur, état fondamental : I**.
2. **Accord 2** : Fa2 (Cb) ; Fa3 (Vc, Bn) ; Do4 (Cor) ; Fa4 (Alt., Cl.) ; La4 (Vl. II, Tr.) ; Fa5 (Vl. I) ; La5 (Htb.) ; Fa6 (Fl.) → {Fa, La, Do}, basse Fa → **Fa majeur : IV**. Remarquez : la quinte Do n'est présente **qu'au cor** (note commune tenue), et les timbales se taisent — accordées Do/Sol, elles n'ont pas de Fa.
3. **Accord 3** : Sol2 (Cb, Timb.) ; Sol3 (Vc, Bn) ; Ré4 (Cor) ; Fa4 (Alt., Cl.) ; Sol4 (Tr.) ; Si4 (Vl. II) ; Ré5 (Vl. I) ; Si5 (Htb.) ; Ré6 (Fl.) → {Sol, Si, Ré, Fa}, basse Sol → **7e de dominante complète : V7**. La 7e (Fa4, altos + clarinette) est une note **tenue** depuis l'accord 2 — préparation audible.
4. **Accord 4** : Do2 (Cb) ; Do3 (Vc, Bn, Timb.) ; Do4 (Cor) ; Mi4 (Alt., Cl.) ; Sol4 (Tr.) ; Do5 (Vl. II) ; Mi5 (Vl. I) ; Do6 (Htb.) ; Mi6 (Fl.) → {Do, Mi, Sol}, basse Do → **I**. Conduite exemplaire : la sensible Si4 (Vl. II) monte à Do5, la 7e Fa4 (Alt., Cl.) descend à Mi4, Ré (Cor, Vl. I, Fl.) rejoint Do ou Mi.

Bilan : **I – IV – V7 – I en Do majeur**, cadence parfaite. Sous ses douze portées, ce tutti est une simple marche harmonique d'école — c'est exactement ce que l'exercice de verticalité doit révéler.

---

## Section 5 — La réduction au piano

Réduire, c'est **traduire les hauteurs réelles en deux portées jouables** — pas recopier. Hiérarchie de ce qu'on garde : **la basse réelle** (toujours), **la mélodie** (toujours, à sa hauteur d'origine si possible), **la conduite intérieure caractéristique** (ici la ligne des altos Mi4–Fa4–Fa4–Mi4, qui porte la préparation et la résolution de la 7e), puis le remplissage harmonique. Ce qu'on élimine : les **doublures** d'unisson et d'octave (la flûte qui double les violons I à l'octave disparaît), les **trémolos et batteries** (on les replie en accords tenus), les **notes répétées** (une note tenue suffit). Règle de sacrifice quand la main ne suffit pas : on abandonne d'abord **la quinte** de l'accord, jamais la tierce ni la 7e. Et l'on resserre les octaves extrêmes vers le centre du clavier.

Le tutti de la section 4 se réduit ainsi (hauteurs réelles, deux portées) :

| | Accord 1 (I) | Accord 2 (IV) | Accord 3 (V7) | Accord 4 (I) |
|---|---|---|---|---|
| **Main droite (clé de sol)** | Mi4 – Sol4 – Mi5 | Fa4 – La4 – Fa5 | Fa4 – Si4 – Ré5 | Mi4 – Sol4 – Do5 – Mi5 |
| **Main gauche (clé de fa)** | Do2 – Do3 | Fa2 – Fa3 | Sol2 – Sol3 | Do2 – Do3 |

Justification note à note. Main gauche : la basse réelle en octaves (Cb sonnant + Vc). Main droite : la mélodie des violons I au sommet (Mi5–Fa5–Ré5–Mi5), la voix intérieure des altos en bas de main (Mi4–Fa4–Fa4–Mi4 : la 7e Fa4 préparée puis résolue sur Mi4), et entre les deux le complément harmonique (Sol4 puis La4 puis Si4 → Do5 : la ligne des violons II, avec la sensible qui monte). À l'accord 2, la quinte Do (qui ne sonnait qu'au cor) est **sacrifiée** — application directe de la règle. À l'accord 4, Sol4 (trompette) réapparaît sous les doigts : l'accord final est complet. Chaque main tient dans l'octave : la réduction est **jouable à vue** — c'est le critère. (Verovio : graver ces deux portées ; PianoPlayer : comparer le tutti « complet » et la réduction — l'harmonie est identique.)

---

## Section 6 — L'équilibre et les registres

Réduire ne suffit pas : il faut aussi juger **ce qui s'entendra**. La hiérarchie des puissances est sans appel — le cours 19 l'a posée : **une seule trompette fortissimo couvre un pupitre entier de violons**. Les cuivres dominent, puis les bois aigus perçants (piccolo, hautbois), puis la masse des cordes, enfin les bois moyens. L'orchestrateur compense par trois moyens : **des nuances différenciées par famille** (cuivres *mf* quand cordes et bois sont *f* — les nuances d'un conducteur ne sont pas uniformes, et c'est volontaire) ; **la doublure de la mélodie à l'octave** pour la projeter (flûte sur violons I, comme dans notre tutti) ; **l'espacement calqué sur la série harmonique** : intervalles larges au grave, serrés à l'aigu — notre tutti empile Do2–Do3 (octave), puis Do4–Mi4–Sol4 (tierces), jamais l'inverse.

**Les trois dispositions classiques d'un accord entre deux familles** — sur l'accord Do4–Mi4–Sol4–Do5 (Do majeur, quatre sons), confié à 2 flûtes et 2 clarinettes en Si♭ (hauteurs réelles, partie écrite des clarinettes entre parenthèses) :

| Disposition | Do5 | Sol4 | Mi4 | Do4 |
|---|---|---|---|---|
| **Juxtaposition** (chaque famille en bloc) | Fl. 1 | Fl. 2 | Cl. 1 (écrit Fa♯4) | Cl. 2 (écrit Ré4) |
| **Encastrement** (voix alternées) | Fl. 1 | Cl. 1 (écrit La4) | Fl. 2 | Cl. 2 (écrit Ré4) |
| **Enrobage** (une famille enveloppe l'autre) | Fl. 1 | Cl. 1 (écrit La4) | Cl. 2 (écrit Fa♯4) | Fl. 2 |

La juxtaposition garde les couleurs distinctes (deux étages de timbre) ; l'encastrement fond les timbres en un alliage homogène ; l'enrobage donne la couleur de la famille **extérieure** avec le soutien de l'intérieure. **Pièges d'équilibre classiques** : mélodie confiée au registre médium d'un bois pendant que l'accompagnement des cordes occupe le même registre (elle disparaît) ; un cor seul en face d'un tutti de cordes *f* (insuffisant : le cor « compte » traditionnellement pour moitié d'un trombone) ; le **trou de médium** — graves et aigus fournis, rien entre Do3 et Do4 — qui rend le tutti creux (cours 19) ; et le *ff* uniforme écrit pour tout le monde, qui garantit qu'on n'entendra que les cuivres.

---

## Section 7 — Entraînement

**La méthode, en résumé — les passes de lecture** : 1) architecture de la page (qui joue ?) ; 2) basse réelle (contrebasses : − 8ve !) ; 3) mélodie et doublures ; 4) transpositions résolues, familles repliées ; 5) accords nommés ; 6) jugement d'équilibre. Dans cet ordre, toujours.

### Quiz (réponses vérifiées)

1. **La clarinette en Si♭ lit Mi4. Quelle est la hauteur réelle ?**
   a) Fa♯4 — b) Ré4 — c) Mi4 — d) Ré♭4
   **Réponse : b) Ré4.** La clarinette en Si♭ sonne une 2de majeure plus bas que l'écrit : Mi4 − 2de M = Ré4.
2. **Le cor en Fa lit Ré5. Hauteur réelle ?**
   a) La4 — b) Sol4 — c) Ré4 — d) La5
   **Réponse : b) Sol4.** Le cor en Fa sonne une 5te juste plus bas : Ré5 − 5te J = Sol4.
3. **Le saxophone alto en Mi♭ lit Sol4. Hauteur réelle ?**
   a) Mi♭4 — b) Si♭3 — c) Si3 — d) Sol3
   **Réponse : b) Si♭3.** Le sax alto sonne une 6te majeure plus bas : Sol4 − 6te M = Si♭3.
4. **La clarinette en La lit Do5. Hauteur réelle ?**
   a) La4 — b) Si♭4 — c) La3 — d) Mi♭5
   **Réponse : a) La4.** La clarinette en La sonne une 3ce mineure plus bas : Do5 − 3ce m = La4.
5. **Le saxophone ténor en Si♭ lit Do4. Hauteur réelle ?**
   a) Si♭3 — b) Si♭2 — c) Ré3 — d) Do3
   **Réponse : b) Si♭2.** Le ténor sonne une 9e majeure plus bas (octave + 2de M) : Do4 − 8ve = Do3, − 2de M = Si♭2. Ne pas confondre avec la clarinette en Si♭ (2de M seulement).
6. **En clé d'ut 3e ligne (alto), quelle note occupe la première ligne (en bas) ?**
   a) Mi3 — b) Fa3 — c) Sol3 — d) Ré3
   **Réponse : b) Fa3.** Lignes de la clé d'alto : Fa3 – La3 – Do4 – Mi4 – Sol4 (Do central sur la 3e ligne).
7. **En clé d'ut 4e ligne (ténor), quelle note occupe la 5e ligne (en haut) ?**
   a) Ré4 — b) Sol4 — c) Mi4 — d) Do4
   **Réponse : c) Mi4.** Lignes de la clé de ténor : Ré3 – Fa3 – La3 – Do4 – Mi4 (Do central sur la 4e ligne).
8. **Violoncelles et contrebasses lisent la même partie : Do3. Quelle est la vraie basse de l'accord ?**
   a) Do3 (unisson) — b) Do2, aux contrebasses — c) Do4 — d) Do1
   **Réponse : b) Do2.** La contrebasse sonne une octave sous l'écrit : la basse réelle est Do2, une octave sous les violoncelles — c'est la doublure d'octave automatique des pupitres graves.
9. **Un choral confie la mélodie aux hautbois (*f*) doublés par les trompettes (*f*). Qu'entendra-t-on ?**
   a) Un alliage équilibré — b) Surtout les trompettes : il faudrait les noter *mf* — c) Surtout les hautbois — d) Rien : les timbres s'annulent
   **Réponse : b).** Les cuivres dominent acoustiquement les bois à nuance égale (cours 19) : on différencie les nuances (trompettes *mf*, hautbois *f*) pour équilibrer la doublure.
10. **Le cor anglais lit Do5. Hauteur réelle ?**
    a) Fa4 — b) Sol4 — c) Fa5 — d) Do4
    **Réponse : a) Fa4.** Comme le cor en Fa, le cor anglais sonne une 5te juste plus bas : Do5 − 5te J = Fa4.

### Exercices

**Exercice a — drill de transposition** (échauffement clés compris). Donnez la hauteur réelle de chaque note écrite.

| Instrument | Écrit | Réel (corrigé) |
|---|---|---|
| Clarinette en Si♭ | Sol4 · La4 · Si4 | **Fa4 · Sol4 · La4** (− 2de M) |
| Cor en Fa | Do5 · Si4 · Sol4 | **Fa4 · Mi4 · Do4** (− 5te J) |
| Saxophone alto en Mi♭ | Mi5 · Do5 · La4 | **Sol4 · Mi♭4 · Do4** (− 6te M) |

Échauffement clés : en clé d'alto, écrivez La3 (2e ligne) et Mi4 (4e ligne) ; en clé de ténor, écrivez Fa3 (2e ligne) et Do4 (4e ligne). Vérifiez au clavier avec PianoPlayer : jouez l'écrit, puis le réel.

**Exercice b — mini-conducteur à réduire.** Quatre instruments, trois accords, tonalité de Sol majeur. Hauteurs **écrites** :

| Instrument (clé) | Accord 1 | Accord 2 | Accord 3 |
|---|---|---|---|
| Flûte (sol) | Do5 | Do5 | Si4 |
| Clarinette en Si♭ (sol) | Fa♯4 | Sol♯4 | La4 |
| Cor en Fa (sol) | Ré4 | Mi4 | Ré4 |
| Violoncelle (fa) | Do3 | Ré3 | Sol2 |

*Consigne* : résolvez les transpositions, nommez les trois accords et le chiffrage en Sol majeur, puis proposez une réduction deux portées.

*Corrigé complet.* Transpositions — Cl. Si♭ (− 2de M) : Fa♯4 → **Mi4**, Sol♯4 → **Fa♯4**, La4 → **Sol4** ; Cor en Fa (− 5te J) : Ré4 → **Sol3**, Mi4 → **La3**, Ré4 → **Sol3** ; flûte et violoncelle sonnent comme écrit. Contenu réel : accord 1 = Do3–Sol3–Mi4–Do5 → **Do majeur = IV** ; accord 2 = Ré3–La3–Fa♯4–Do5 → **Ré 7e de dominante complète = V7** (la 7e Do5, tenue à la flûte depuis l'accord 1, est préparée) ; accord 3 = Sol2–Sol3–Sol4–Si4 → **Sol majeur = I**, quinte omise et fondamentale triplée — normal après un V7 complet : la sensible Fa♯4 monte à Sol4, la 7e Do5 descend à Si4. Bilan : **IV – V7 – I, cadence parfaite en Sol majeur.** Réduction proposée : MG Do3+Sol3 / Ré3+La3 / Sol2+Sol3 ; MD Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.

**Exercice c — synthèse avec /analyse-partition.** Prenez un court extrait orchestral libre de droits (4 à 8 mesures d'un choral de symphonie, d'un hymne, d'une réduction du domaine public), réduisez-le vous-même en hauteurs réelles sur deux portées, exportez la réduction en **MusicXML** et importez-la dans l'outil **/analyse-partition** : comparez les accords que l'outil identifie à votre analyse verticale. Tout écart a l'une de ces trois causes — une transposition oubliée (contrebasses !), une clé d'ut mal lue, une doublure prise pour une note nouvelle. C'est précisément la check-list de ce cours.

---

*Fin du contenu à valider. Après validation : transcription en `cours46Content.ts` (interfaces par sections, tables complètes dans les six langues), exemples gravés via satb-vers-musicxml/Verovio, écoute écrit/réel via PianoPlayer.*
