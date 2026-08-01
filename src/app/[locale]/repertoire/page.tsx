/**
 * src/app/[locale]/repertoire/page.tsx
 * Harmonia — Le répertoire : les 48 pièces analysées note à note dans les
 * sections « conservatoire » des cours, en frise chronologique (Renaissance à
 * aujourd'hui). Contenu français uniquement, même convention que la page
 * `/dissonance` et les AnalyseNarrative des pages de cours.
 */
import Link from "next/link";
import { getCours } from "@/lib/catalogue";
import { REPERTOIRE, REPERTOIRE_COUNT, ERE_LABELS, ERES_ORDONNEES, type RepertoirePiece } from "@/data/repertoire";

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
  fontSize: "clamp(22px, 2.8vw, 30px)",
  fontWeight: 400,
  margin: 0,
  letterSpacing: "-0.01em",
  fontFamily: "Georgia, 'Times New Roman', serif",
};

function PieceRow({ p, locale }: { p: RepertoirePiece; locale: string }) {
  const cours = getCours(p.cours);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        padding: "16px 0",
        borderBottom: "0.5px solid #e8e3db",
      }}
    >
      <div style={{ display: "flex", gap: 18, alignItems: "baseline", flex: 1, minWidth: 260 }}>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 13,
            fontWeight: 700,
            color: "#BA7517",
            minWidth: 68,
            flexShrink: 0,
          }}
        >
          {p.annee}
        </span>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 15.5, color: "#1a1a1a" }}>{p.compositeur}</span>
          {" — "}
          <em style={{ fontFamily: "Georgia, serif", fontSize: 15.5, fontStyle: "italic", color: "#1a1a1a" }}>{p.titre}</em>
          <div style={{ fontSize: 12, color: "#aaa", fontFamily: "system-ui, sans-serif", marginTop: 3 }}>
            Cours {p.cours}
            {cours ? ` · ${cours.title}` : ""}
          </div>
        </div>
      </div>
      <Link
        href={`/${locale}/cours/${p.cours}`}
        style={{ fontSize: 13, color: "#BA7517", fontFamily: "system-ui, sans-serif", textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0 }}
      >
        Voir la partition et l&rsquo;analyse →
      </Link>
    </div>
  );
}

export default async function RepertoirePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const parEre = ERES_ORDONNEES.map((ere) => ({
    ere,
    pieces: REPERTOIRE.filter((p) => p.ere === ere).sort((a, b) => a.anneeSort - b.anneeSort),
  }));
  const horsChronologie = REPERTOIRE.filter((p) => p.ere === "horscours");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#faf8f4", color: "#1a1a1a", overflowX: "hidden" }}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 2rem 60px", textAlign: "center" }}>
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
            <span aria-hidden="true">🎼</span> {REPERTOIRE_COUNT} pièces, huit siècles
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
            Le répertoire
            <br />
            <em style={{ color: "#BA7517", fontStyle: "italic" }}>de Palestrina à Morricone</em>
          </h1>

          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#555", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
            Chaque cours du catalogue s&rsquo;appuie sur une vraie partition, vérifiée note à note plutôt qu&rsquo;inventée
            pour l&rsquo;exercice. {REPERTOIRE_COUNT} pièces au total, de la Renaissance au jazz, classées ici par date de
            composition — la même musique que celle que racontent{" "}
            <Link href={`/${locale}/dissonance`} style={{ color: "#BA7517", textDecoration: "underline" }}>
              douze d&rsquo;entre elles
            </Link>{" "}
            dans « une histoire de la dissonance ».
          </p>
        </div>
      </section>

      {/* ── Frise chronologique ──────────────────────────────────── */}
      {parEre.map(({ ere, pieces }, i) => {
        if (pieces.length === 0) return null;
        return (
          <section key={ere} style={{ padding: "48px 2rem", background: i % 2 === 0 ? "#fff" : "#faf8f4", borderTop: "0.5px solid #e8e3db" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                <h2 style={H2}>{ERE_LABELS[ere]}</h2>
                <span style={{ fontSize: 13, color: "#999", fontFamily: "system-ui, sans-serif" }}>
                  {pieces.length} pièce{pieces.length > 1 ? "s" : ""}
                </span>
              </div>
              <div>
                {pieces.map((p) => (
                  <PieceRow key={p.cours} p={p} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Hors chronologie ─────────────────────────────────────── */}
      {horsChronologie.length > 0 && (
        <section style={{ padding: "48px 2rem", background: "#fff", borderTop: "0.5px solid #e8e3db" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={EYEBROW}>Hors chronologie</p>
            <p style={{ fontSize: 13.5, color: "#888", margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}>
              Un exercice d&rsquo;écriture, pas une pièce du répertoire — mais bâti et vérifié avec la même rigueur.
            </p>
            {horsChronologie.map((p) => (
              <PieceRow key={p.cours} p={p} locale={locale} />
            ))}
          </div>
        </section>
      )}

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
              { label: "Dissonance", href: `/${locale}/dissonance` },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#333" }}>Analyse non officielle · sources publiques ou domaine public</div>
        </div>
      </footer>
    </div>
  );
}
