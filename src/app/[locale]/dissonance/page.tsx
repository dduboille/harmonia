/**
 * src/app/[locale]/dissonance/page.tsx
 * Harmonia — « Une histoire de la dissonance » : synthèse en douze pièces du
 * corpus conservatoire (niveaux 1 à 3), reliant Bach à Evans par deux fils
 * rouges (la demi-diminuée / 7e diminuée, et la cadence). Contenu français
 * uniquement, même convention que les AnalyseNarrative des pages de cours.
 */
import Link from "next/link";

type Fn = "warm" | "cool";

interface Piece {
  composer: string;
  work: string;
  coursNum: number;
  coursTitle: string;
  sujet: string;
  takeaway: string;
  tag?: { label: string; fn: Fn };
}

interface Cluster {
  roman: string;
  title: string;
  sub: string;
  pieces: Piece[];
}

const CLUSTERS: Cluster[] = [
  {
    roman: "I",
    title: "Les fondations",
    sub: "Bach — le contrepoint qui engendre l'harmonie",
    pieces: [
      {
        composer: "Bach",
        work: "Invention n°1, BWV 772",
        coursNum: 13,
        coursTitle: "Contrepoint à 2 voix",
        sujet: "contrepoint à 2 voix",
        takeaway:
          "La dissonance naît du simple croisement des lignes, pas d'un chiffrage voulu : un vii° complet traverse les mesures 3-4 sans que Bach l'ait même noté. L'harmonie comme sous-produit de la conduite des voix.",
      },
      {
        composer: "Bach",
        work: "Wachet auf, ruft uns die Stimme, BWV 645",
        coursNum: 26,
        coursTitle: "Basse et soprano donnés",
        sujet: "harmonisation DEM",
        takeaway:
          "Le modèle historique dont l'exercice d'examen est la simulation. Le choral n'entre même pas sur la tonique — sa première harmonie est un vi7, une fausse entrée qui retarde d'une phrase entière la vraie tonique.",
      },
      {
        composer: "Bach",
        work: "Jesu, meine Freude (choral intégral)",
        coursNum: 27,
        coursTitle: "Schenker",
        sujet: "analyse fonctionnelle profonde",
        takeaway:
          "La demi-diminuée (iiø6/5) revient trois fois comme simple ouvrière de cadence. Sous la surface animée, une seule prolongation structure tout le Stollen : tonique → dominante → tonique.",
        tag: { label: "iiø6/5", fn: "warm" },
      },
    ],
  },
  {
    roman: "II",
    title: "La grammaire classique, et sa dramatisation",
    sub: "Mozart — Beethoven, dix ans plus tard, même squelette",
    pieces: [
      {
        composer: "Mozart",
        work: "Sonate K.545, 1er mouvement (exposition)",
        coursNum: 28,
        coursTitle: "Forme sonate",
        sujet: "forme sonate",
        takeaway:
          "Chaque rouage de la forme sonate à l'état pur, sans un gramme de chair superflue. La cadence finale (ii6 – I6/4 – V7 – I) est exactement le squelette que Beethoven reprendra dix ans plus tard, note pour note.",
      },
      {
        composer: "Beethoven",
        work: "Sonate Pathétique, Grave (introduction)",
        coursNum: 39,
        coursTitle: "Les 7èmes d'espèce",
        sujet: "7èmes d'espèce",
        takeaway:
          "Même squelette cadentiel que Mozart (iiø6/5 – i6/4 – V7♭9), mais le mode mineur, le point d'orgue et le refus de résoudre transforment la lumière en gouffre. Le romantisme ne change pas la grammaire — il change la dramaturgie.",
        tag: { label: "vii°7", fn: "warm" },
      },
    ],
  },
  {
    roman: "III",
    title: "Le chromatisme et la suspension",
    sub: "Chopin — Wagner, le même accord, deux siècles de débat",
    pieces: [
      {
        composer: "Chopin",
        work: "Prélude op.28 n°20",
        coursNum: 24,
        coursTitle: "Les sixtes augmentées",
        sujet: "sixtes augmentées",
        takeaway:
          "Une sixte augmentée française authentique (Réb7♭5/Lab en lecture jazz) gouverne la descente chromatique. Le même accord, note pour note, réapparaît vingt ans plus tard chez Wagner.",
      },
      {
        composer: "Wagner",
        work: "Prélude de Tristan und Isolde",
        coursNum: 25,
        coursTitle: "Chromatisme avancé",
        sujet: "chromatisme avancé",
        takeaway:
          "Le même accord que chez Chopin (Fa-La-Si-Ré# une fois résolu), désormais au centre d'une ambiguïté volontaire — demi-diminuée autonome, ou sixte augmentée qui se résout ? Chaque dominante résout « au suivant », jamais au présent.",
        tag: { label: "acc. de Tristan", fn: "cool" },
      },
    ],
  },
  {
    roman: "IV",
    title: "La dissolution",
    sub: "Satie — Debussy, la fonction remplacée par la couleur",
    pieces: [
      {
        composer: "Satie",
        work: "Première Gymnopédie",
        coursNum: 14,
        coursTitle: "Harmonisation modale",
        sujet: "harmonisation modale",
        takeaway:
          "IVmaj7 et Imaj7 alternent neuf mesures durant — la dominante n'est jamais entendue. La dissonance (7e, 9e) devient couleur pure, sans jamais réclamer de résolution.",
      },
      {
        composer: "Debussy",
        work: "La Cathédrale engloutie",
        coursNum: 29,
        coursTitle: "Analyse comparative du répertoire",
        sujet: "analyse comparative",
        takeaway:
          "Le mode, la pédale, le registre et la nuance remplacent entièrement la fonction. Sur 89 mesures, une seule vraie cadence (V7–I de sol#) existe — enfouie dans la section la plus sombre, comme une relique de grammaire au fond de l'eau.",
        tag: { label: "Ré#ø7", fn: "cool" },
      },
    ],
  },
  {
    roman: "V",
    title: "La relexicalisation",
    sub: "Le jazz repêche ce que le XXe siècle avait dissous",
    pieces: [
      {
        composer: "Duke Ellington",
        work: "Satin Doll",
        coursNum: 12,
        coursTitle: "Substitution tritonique",
        sujet: "substitution tritonique",
        takeaway:
          "Réb7 remplace Sol7 en partageant le même triton (Fa-Si) : la substitution devient un vocabulaire codifié, enseignable, réutilisable à volonté.",
      },
      {
        composer: "Joseph Kosma",
        work: "Autumn Leaves",
        coursNum: 15,
        coursTitle: "Progressions jazz avancées",
        sujet: "progressions jazz avancées",
        takeaway:
          "Presque chaque mesure est une dominante secondaire. La marche par quintes qui, chez Mozart, n'était qu'une séquence à l'intérieur de la forme (K.545, m.18-21) devient ici la forme elle-même — un chorus entier bâti sur ce seul circuit.",
      },
      {
        composer: "Bill Evans Trio",
        work: "My Funny Valentine",
        coursNum: 16,
        coursTitle: "Réharmonisation",
        sujet: "réharmonisation",
        takeaway:
          "Le vocabulaire hérité de Bach et transformé par Debussy — demi-diminuées, dominantes altérées — est désormais un lexique disponible à volonté. Le voicing devient l'objet expressif lui-même, plus que la fonction qu'il porte.",
        tag: { label: "Aø9", fn: "cool" },
      },
    ],
  },
];

const THESIS = [
  { chip: "iiø6/5", who: "Bach", role: "ouvrière de cadence", fn: "warm" as Fn },
  { chip: "vii°7", who: "Beethoven", role: "rhétorique du drame", fn: "warm" as Fn },
  { chip: "+6 fr.", who: "Chopin", role: "chromatisme de conduite", fn: "warm" as Fn },
  { chip: "acc. de Tristan", who: "Wagner", role: "énigme insoluble", fn: "cool" as Fn },
  { chip: "Aø9", who: "Evans", role: "couleur lexicalisée", fn: "cool" as Fn },
  { chip: "Ré#ø7", who: "Debussy", role: "pur timbre", fn: "cool" as Fn },
];

const EYEBROW: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.15em",
  color: "#BA7517",
  textTransform: "uppercase",
  fontFamily: "system-ui, sans-serif",
  marginBottom: 12,
};

const H2: React.CSSProperties = {
  fontSize: "clamp(24px, 3.2vw, 34px)",
  fontWeight: 400,
  margin: 0,
  letterSpacing: "-0.01em",
  fontFamily: "Georgia, 'Times New Roman', serif",
};

function fnColor(fn: Fn) {
  return fn === "warm" ? "#BA7517" : "#8a8477";
}
function fnBg(fn: Fn) {
  return fn === "warm" ? "#FAEEDA" : "#eeece5";
}

function PieceCard({ p, locale }: { p: Piece; locale: string }) {
  return (
    <div
      style={{
        padding: "26px 28px",
        border: "0.5px solid #e8e3db",
        borderRadius: 8,
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
        <h3 style={{ fontSize: 17, fontWeight: 500, margin: 0, fontFamily: "Georgia, serif" }}>
          {p.composer} — <em style={{ fontStyle: "italic", fontWeight: 400 }}>{p.work}</em>
        </h3>
        {p.tag && (
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 3,
              color: fnColor(p.tag.fn),
              background: fnBg(p.tag.fn),
              whiteSpace: "nowrap",
            }}
          >
            {p.tag.label}
          </span>
        )}
      </div>
      <p style={{ fontSize: 12, color: "#aaa", fontFamily: "system-ui, sans-serif", margin: "0 0 12px" }}>
        Cours {p.coursNum} · {p.coursTitle}
      </p>
      <p style={{ fontSize: 14.5, color: "#444", lineHeight: 1.75, margin: "0 0 14px", fontFamily: "system-ui, sans-serif" }}>
        {p.takeaway}
      </p>
      <Link
        href={`/${locale}/cours/${p.coursNum}`}
        style={{ fontSize: 13, color: "#BA7517", fontFamily: "system-ui, sans-serif", textDecoration: "none", fontWeight: 500 }}
      >
        Voir la partition et l'analyse →
      </Link>
    </div>
  );
}

export default async function DissonancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#faf8f4", color: "#1a1a1a", overflowX: "hidden" }}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 2rem 70px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FAEEDA",
              border: "0.5px solid #F6AD55",
              borderRadius: 20,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 500,
              color: "#BA7517",
              marginBottom: 32,
              letterSpacing: "0.04em",
            }}
          >
            <span>𝄞</span> Douze pièces, un seul récit
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            De Bach à Evans
            <br />
            <em style={{ color: "#BA7517", fontStyle: "italic" }}>une histoire de la dissonance</em>
          </h1>

          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#555", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
            Douze extraits du répertoire, vérifiés partition en main, qui racontent la même histoire sous des angles
            différents : ce que l&rsquo;harmonie tonale fait de sa propre tension. Deux fils la traversent — l&rsquo;accord
            de septième diminuée et son cousin demi-diminué, et la cadence elle-même.
          </p>
        </div>
      </section>

      {/* ── Fil rouge ────────────────────────────────────────────── */}
      <section style={{ padding: "56px 2rem 64px", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={EYEBROW}>Fil rouge — un accord, cinq statuts</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${THESIS.length}, 1fr)`,
              gap: 4,
            }}
          >
            {THESIS.map((n, i) => (
              <div
                key={n.who}
                style={{
                  textAlign: "center",
                  padding: "0 6px",
                  borderTop: `2px solid ${i === 0 ? fnColor(n.fn) : "#e8e3db"}`,
                  paddingTop: 14,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 3,
                    color: fnColor(n.fn),
                    background: fnBg(n.fn),
                    marginBottom: 10,
                    whiteSpace: "nowrap",
                  }}
                >
                  {n.chip}
                </span>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", fontFamily: "Georgia, serif" }}>{n.who}</div>
                <div style={{ fontSize: 11.5, color: "#999", fontStyle: "italic", marginTop: 2 }}>{n.role}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 24, fontSize: 13, color: "#666", flexWrap: "wrap" }}>
            <span><span style={{ color: "#BA7517", fontWeight: 700 }}>●</span> fonction active (tension → résolution)</span>
            <span><span style={{ color: "#8a8477", fontWeight: 700 }}>●</span> couleur pure (aucune obligation)</span>
          </div>
        </div>
      </section>

      {/* ── Clusters ─────────────────────────────────────────────── */}
      {CLUSTERS.map((cluster, ci) => (
        <section key={cluster.roman} style={{ padding: "72px 2rem", background: ci % 2 === 0 ? "#faf8f4" : "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
              <span style={{ fontFamily: "monospace", fontSize: 15, color: "#BA7517", fontWeight: 700 }}>{cluster.roman}</span>
              <div>
                <h2 style={H2}>{cluster.title}</h2>
                <p style={{ fontSize: 13.5, color: "#888", margin: "4px 0 0" }}>{cluster.sub}</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {cluster.pieces.map((p) => (
                <PieceCard key={p.coursNum} p={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Synthèse ─────────────────────────────────────────────── */}
      <section style={{ padding: "88px 2rem", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, color: "#E9C97E" }}>Ce qu&rsquo;il faut retenir</p>
          <h2 style={{ ...H2, color: "#fff", marginBottom: 32 }}>Quatre idées à garder</h2>
          <ol style={{ margin: 0, padding: "0 0 0 1.3rem", color: "#ccc" }}>
            <li style={{ marginBottom: 22, lineHeight: 1.8, fontSize: 15.5 }}>
              <strong style={{ color: "#fff" }}>Un seul accord, cinq statuts.</strong> La demi-diminuée / septième diminuée
              naît chez Bach comme outil de cadence, se dramatise chez Beethoven, devient énigme chez Wagner, lexique chez
              Evans et pur timbre chez Debussy — sans jamais changer de notes.
            </li>
            <li style={{ marginBottom: 22, lineHeight: 1.8, fontSize: 15.5 }}>
              <strong style={{ color: "#fff" }}>La cadence, un empire qui rétrécit.</strong> Moteur omniprésent chez Bach et
              Mozart, dramatisée chez Beethoven, suspendue indéfiniment chez Wagner, elle n&rsquo;est plus qu&rsquo;une relique
              unique et cachée chez Debussy — une seule cadence authentique en 89 mesures.
            </li>
            <li style={{ marginBottom: 22, lineHeight: 1.8, fontSize: 15.5 }}>
              <strong style={{ color: "#fff" }}>Deux rimes structurelles, vérifiées note pour note.</strong> Le même accord de
              sixte augmentée relie Chopin et Wagner ; le même cycle de quintes relie l&rsquo;exposition de Mozart et la grille
              d&rsquo;Autumn Leaves — sous des habits stylistiques opposés, la même mécanique.
            </li>
            <li style={{ marginBottom: 0, lineHeight: 1.8, fontSize: 15.5 }}>
              <strong style={{ color: "#fff" }}>Le romantisme et le jazz n&rsquo;inventent pas de nouvelle grammaire.</strong> Ils
              redistribuent la dramaturgie et le statut des mêmes objets harmoniques hérités du contrepoint baroque.
            </li>
          </ol>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ padding: "40px 2rem", background: "#111", borderTop: "0.5px solid #222" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", fontFamily: "Georgia, serif" }}>
            Harmonia<span style={{ color: "#BA7517" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Cours", href: `/${locale}/cours` },
              { label: "Cursus", href: `/${locale}/cursus` },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#333" }}>Analyse non officielle · repertoire complet sur chaque page de cours</div>
        </div>
      </footer>
    </div>
  );
}
