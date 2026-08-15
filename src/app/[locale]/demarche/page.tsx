/**
 * src/app/[locale]/demarche/page.tsx
 * Harmonia — « Pourquoi Harmonia est gratuit » : la démarche du projet, son
 * modèle de financement, et ses engagements.
 *
 * BROUILLON À VALIDER — ce texte parle à la première personne au nom de Dany.
 * Il est bâti sur ce que le dépôt démontre (48 cours, 48 partitions vérifiées,
 * 649 exercices SATB validés, 6 langues) et sur les intentions qu'il a
 * exprimées ; les ENGAGEMENTS de la dernière section (pas de publicité, pas de
 * revente de données) sont des promesses publiques : à relire mot à mot avant
 * mise en ligne.
 *
 * Contenu français uniquement pour l'instant, comme `/dissonance` et
 * `/repertoire` — à traduire une fois le texte arrêté, pas avant.
 */
import Link from "next/link";
import { COURS_COUNT } from "@/lib/catalogue";
import { REPERTOIRE_COUNT } from "@/data/repertoire";

/**
 * Lien de participation. Laisser vide tant qu'il n'est pas choisi : le bloc de
 * participation disparaît alors de la page plutôt que d'afficher un bouton mort.
 */
const LIEN_PARTICIPATION = "";

/** Exercices SATB du corpus, tous validés sans erreur (invariant vérifié en CI). */
const EXERCICES_SATB = 649;
const LANGUES = 6;

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

const P: React.CSSProperties = {
  fontSize: 15.5,
  color: "#444",
  lineHeight: 1.8,
  fontFamily: "system-ui, sans-serif",
};

function Chiffre({ valeur, libelle }: { valeur: string; libelle: string }) {
  return (
    <div style={{ textAlign: "center", padding: "0 12px" }}>
      <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "Georgia, serif", color: "#BA7517", lineHeight: 1.1 }}>
        {valeur}
      </div>
      <div style={{ fontSize: 13, color: "#777", fontFamily: "system-ui, sans-serif", marginTop: 6 }}>
        {libelle}
      </div>
    </div>
  );
}

export default async function DemarchePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#faf8f4", color: "#1a1a1a", overflowX: "hidden" }}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 2rem 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#FAEEDA", border: "0.5px solid #F6AD55", borderRadius: 20,
              padding: "5px 14px", fontSize: 12, fontWeight: 500, color: "#BA7517",
              marginBottom: 32, letterSpacing: "0.04em",
            }}
          >
            <span aria-hidden="true">✦</span> La démarche
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.12,
              letterSpacing: "-0.02em", margin: "0 0 24px",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Pourquoi Harmonia
            <br />
            <em style={{ color: "#BA7517", fontStyle: "italic" }}>est gratuit</em>
          </h1>

          <p style={{ ...P, fontSize: "clamp(15px, 2vw, 18px)", color: "#555", maxWidth: 620, margin: "0 auto" }}>
            Depuis le premier jour, ce site porte en sous-titre : « Niveau conservatoire.
            Accessible à tous. » La première moitié était tenue. La seconde ne l&rsquo;était
            qu&rsquo;à moitié — trois cours ouverts, quarante-cinq derrière un abonnement.
            Cette page explique pourquoi cela change, et comment le projet vit.
          </p>
        </div>
      </section>

      {/* ── Le métier d'abord ────────────────────────────────────── */}
      <section style={{ padding: "56px 2rem 64px", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={EYEBROW}>Ce qui vient en premier</p>
          <h2 style={{ ...H2, marginBottom: 20 }}>Transmettre</h2>
          <p style={{ ...P, marginBottom: 18 }}>
            Je suis professeur. L&rsquo;harmonie tonale s&rsquo;apprend encore trop souvent
            dans des conditions inégales : selon le conservatoire où l&rsquo;on est inscrit,
            selon ce qu&rsquo;on peut payer, selon la ville où l&rsquo;on habite. Or ce
            savoir-là n&rsquo;a rien de confidentiel : il est écrit dans les traités depuis
            deux siècles, et il est dans les partitions, qui appartiennent à tout le monde.
          </p>
          <p style={{ ...P, margin: 0 }}>
            Un élève motivé, où qu&rsquo;il soit, doit pouvoir travailler la conduite des
            voix, entendre une sixte augmentée se résoudre et lire une analyse rigoureuse
            sans avoir à sortir sa carte bancaire. C&rsquo;est la raison d&rsquo;être de ce
            changement, et elle passe avant le reste.
          </p>
        </div>
      </section>

      {/* ── Ce que contient l'outil ──────────────────────────────── */}
      <section style={{ padding: "64px 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, textAlign: "center" }}>Ce que vous obtenez, sans rien payer</p>
          <div
            style={{
              display: "flex", justifyContent: "center", flexWrap: "wrap",
              gap: "28px 8px", margin: "28px 0 36px",
            }}
          >
            <Chiffre valeur={String(COURS_COUNT)} libelle="cours, cinq niveaux" />
            <Chiffre valeur={String(REPERTOIRE_COUNT)} libelle="partitions analysées" />
            <Chiffre valeur={String(EXERCICES_SATB)} libelle="exercices SATB corrigés" />
            <Chiffre valeur={String(LANGUES)} libelle="langues" />
          </div>
          <p style={{ ...P, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            Les cours, les partitions, les analyses, les exercices et leur correction
            automatique : tout cela est ouvert. Le parcours va des fondements de la gamme
            jusqu&rsquo;aux spécialisations du DNSPM.
          </p>
        </div>
      </section>

      {/* ── Ce que ça coûte de faire ─────────────────────────────── */}
      <section style={{ padding: "64px 2rem", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={EYEBROW}>Pourquoi il faut quand même de l&rsquo;argent</p>
          <h2 style={{ ...H2, marginBottom: 20 }}>La rigueur a un coût</h2>
          <p style={{ ...P, marginBottom: 18 }}>
            Gratuit ne veut pas dire bâclé, et c&rsquo;est précisément là que le projet
            dépense. Chacune des {REPERTOIRE_COUNT} partitions du répertoire a été vérifiée
            note à note, contre la partition elle-même : les chiffrages recoupés mesure par
            mesure, les affirmations douteuses écartées, les erreurs corrigées — y compris
            les miennes. Aucune analyse n&rsquo;est reprise telle quelle d&rsquo;une source
            non vérifiée.
          </p>
          <p style={{ ...P, marginBottom: 18 }}>
            Les {EXERCICES_SATB} exercices SATB sont tenus, eux, par un contrôle automatique
            qui refuse la moindre faute de conduite des voix : quintes parallèles,
            croisements, fausses relations. Si un seul exercice du corpus s&rsquo;écarte de
            la règle, la mise en ligne échoue.
          </p>
          <p style={{ ...P, margin: 0 }}>
            C&rsquo;est ce travail-là — long, invisible, et impossible à automatiser
            entièrement — qui distingue Harmonia d&rsquo;un cours trouvé au hasard. C&rsquo;est
            lui qu&rsquo;il faut financer.
          </p>
        </div>
      </section>

      {/* ── Le modèle ────────────────────────────────────────────── */}
      <section style={{ padding: "72px 2rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={EYEBROW}>Comment le projet vit</p>
          <h2 style={{ ...H2, marginBottom: 28 }}>Trois sources, dans cet ordre</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                titre: "Les établissements",
                corps:
                  "Conservatoires, écoles de musique et établissements d'enseignement paient une licence annuelle par classe. Ils y gagnent le suivi de leurs élèves, un tableau de bord pour l'équipe pédagogique et un interlocuteur. C'est la source principale, et c'est elle qui finance le développement.",
              },
              {
                titre: "Votre participation, si vous le pouvez et le voulez",
                corps:
                  "Rien n'est demandé, rien n'est bloqué, aucune fonctionnalité n'est retenue en otage. Si l'outil vous sert et que vous en avez les moyens, vous pouvez contribuer. Si ce n'est pas le cas, utilisez-le sans y penser : c'est exactement pour cela qu'il est ouvert.",
              },
              {
                titre: "Les fonctions d'intelligence artificielle, comptées",
                corps:
                  "L'assistant et l'analyse automatique de partition me coûtent à chaque utilisation. Elles restent accessibles, mais avec un quota. C'est la seule limite du site, et elle n'a rien d'un argument commercial : c'est une facture que je paie réellement.",
              },
            ].map((bloc, i) => (
              <div
                key={bloc.titre}
                style={{
                  display: "flex", gap: 18, alignItems: "flex-start",
                  padding: "22px 24px", borderRadius: 10,
                  border: "0.5px solid #e8e3db", background: "#fff",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: "#BA7517",
                    background: "#FAEEDA", borderRadius: 6, padding: "4px 9px", flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 500, margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
                    {bloc.titre}
                  </h3>
                  <p style={{ ...P, fontSize: 14.5, margin: 0 }}>{bloc.corps}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagements ──────────────────────────────────────────── */}
      <section style={{ padding: "72px 2rem", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, color: "#E9C97E" }}>Ce qu&rsquo;Harmonia ne fera pas</p>
          <h2 style={{ ...H2, color: "#fff", marginBottom: 28 }}>Quatre engagements</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              ["Pas de publicité.", "Nulle part, sous aucune forme."],
              ["Pas de revente de données.", "Ni les vôtres, ni celles de vos élèves — jamais, à personne."],
              ["Pas de contenu retenu en otage.", "Aucun cours ne sera refermé pour faire pression. Ce qui est ouvert le reste."],
              ["Pas d'approximation.", "Une erreur d'analyse signalée est corrigée, et l'erreur est reconnue."],
            ].map(([titre, corps]) => (
              <li key={titre} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span aria-hidden="true" style={{ color: "#E9C97E", fontWeight: 700, flexShrink: 0, lineHeight: 1.7 }}>—</span>
                <p style={{ ...P, color: "#ccc", margin: 0, lineHeight: 1.7 }}>
                  <strong style={{ color: "#fff", fontWeight: 600 }}>{titre}</strong> {corps}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Passer à l'acte ──────────────────────────────────────── */}
      <section style={{ padding: "72px 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ ...H2, marginBottom: 16 }}>Vous voulez aider ?</h2>
          <p style={{ ...P, marginBottom: 32 }}>
            La façon la plus utile, de loin : si vous enseignez dans un établissement,
            parlez-en autour de vous. Une licence de conservatoire finance bien plus de
            développement que n&rsquo;importe quelle contribution individuelle — et elle
            ouvre l&rsquo;outil à toute une promotion.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href={`/${locale}/landing-conservatoire`}
              style={{
                display: "inline-block", padding: "14px 30px", borderRadius: 6,
                background: "#1a1a1a", color: "#fff", textDecoration: "none",
                fontSize: 15, fontWeight: 500,
              }}
            >
              L&rsquo;offre pour les établissements
            </Link>
            {LIEN_PARTICIPATION && (
              <a
                href={LIEN_PARTICIPATION}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block", padding: "14px 30px", borderRadius: 6,
                  background: "transparent", color: "#1a1a1a", textDecoration: "none",
                  fontSize: 15, border: "1px solid #a8792c",
                }}
              >
                Faire une participation
              </a>
            )}
          </div>
          <p style={{ ...P, fontSize: 13, color: "#888", marginTop: 28, marginBottom: 0 }}>
            Et si vous n&rsquo;êtes ni l&rsquo;un ni l&rsquo;autre : servez-vous, c&rsquo;est fait pour ça.
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ padding: "40px 2rem", background: "#111", borderTop: "0.5px solid #222" }}>
        <div
          style={{
            maxWidth: 960, margin: "0 auto", display: "flex",
            justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", fontFamily: "Georgia, serif" }}>
            Harmonia<span style={{ color: "#BA7517" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Cours", href: `/${locale}/cours` },
              { label: "Répertoire", href: `/${locale}/repertoire` },
              { label: "Cursus", href: `/${locale}/cursus` },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#333" }}>Projet indépendant</div>
        </div>
      </footer>
    </div>
  );
}
