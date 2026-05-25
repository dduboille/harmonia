import Link from "next/link";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ConfidentialitePage({ params }: Props) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#faf8f4", color: "#1a1a1a", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2015 100%)",
        padding: "80px 2rem 60px",
        borderBottom: "0.5px solid #333",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href={`/${locale}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#888", textDecoration: "none", fontFamily: "system-ui, sans-serif", marginBottom: 32 }}>
            ← Retour à l'accueil
          </Link>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#BA7517", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 14 }}>
            Harmonia · Données personnelles
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, margin: "0 0 16px", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: 14, color: "#666", fontFamily: "system-ui, sans-serif", margin: 0 }}>
            Dernière mise à jour : 19 mai 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 2rem 100px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "28px 32px", marginBottom: 40 }}>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}>
            Harmonia prend la protection de vos données personnelles très au sérieux. Cette politique
            vous explique quelles données nous collectons, pourquoi, et comment vous pouvez les
            contrôler. Harmonia est une plateforme pédagogique de théorie musicale disponible sur{" "}
            <strong>getharmonia.app</strong>.
          </p>
        </div>

        <Section title="1. Responsable du traitement">
          <p style={bodyText}>
            Le responsable du traitement des données à caractère personnel est :{" "}
            <strong>Dany Duboille</strong>, opérant sous le nom commercial <strong>Harmonia</strong>.
          </p>
          <InfoGrid items={[
            { label: "Contact", value: "appliharmonia@gmail.com" },
            { label: "Site web", value: "getharmonia.app" },
            { label: "Pays", value: "France" },
          ]} />
        </Section>

        <Section title="2. Données collectées">
          <p style={bodyText}>
            Nous collectons uniquement les données nécessaires au fonctionnement du service.
          </p>

          <SubSection title="2.1 Compte utilisateur — via Clerk">
            <p style={bodyText}>
              Lors de votre inscription ou connexion, Clerk (notre fournisseur d'authentification) collecte :
            </p>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Adresse e-mail</strong> — identifiant unique du compte</li>
              <li style={liStyle}><strong>Prénom et nom</strong> — optionnels, affichés dans votre espace</li>
              <li style={liStyle}><strong>Méthode de connexion</strong> — e-mail/mot de passe ou OAuth (Google, GitHub)</li>
              <li style={liStyle}><strong>Identifiant technique</strong> — identifiant Clerk unique généré à la création du compte</li>
            </ul>
            <p style={{ ...bodyText, color: "#888", fontSize: 13 }}>
              Clerk est certifié SOC 2 Type II. Leurs propres politiques de confidentialité sont disponibles sur{" "}
              <a href="https://clerk.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5" }}>clerk.com/legal/privacy</a>.
            </p>
          </SubSection>

          <SubSection title="2.2 Progression pédagogique — via Supabase">
            <p style={bodyText}>
              Lorsque vous utilisez les exercices et cours, nous sauvegardons dans notre base de données :
            </p>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Score et statut de complétion</strong> par exercice</li>
              <li style={liStyle}><strong>Identifiant de cours</strong> et horodatage de la dernière activité</li>
              <li style={liStyle}><strong>Données de soumission</strong> dans le cadre de la fonctionnalité Conservatoire (devoirs envoyés à un professeur)</li>
            </ul>
            <p style={{ ...bodyText, color: "#888", fontSize: 13 }}>
              Ces données sont liées à votre identifiant Clerk et ne sont jamais vendues à des tiers.
            </p>
          </SubSection>

          <SubSection title="2.3 Paiement — via Stripe">
            <p style={bodyText}>
              Si vous souscrivez à un abonnement payant (Étudiant ou Pro), le paiement est entièrement
              traité par <strong>Stripe</strong>. Harmonia ne stocke ni ne voit jamais vos données bancaires.
            </p>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Ce que Stripe collecte</strong> : numéro de carte, date d'expiration, CVV, adresse de facturation</li>
              <li style={liStyle}><strong>Ce que Harmonia reçoit</strong> : votre identifiant Stripe, le plan souscrit, la date de renouvellement, le statut de l'abonnement</li>
            </ul>
            <p style={{ ...bodyText, color: "#888", fontSize: 13 }}>
              Stripe est certifié PCI DSS niveau 1.{" "}
              <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5" }}>stripe.com/fr/privacy</a>.
            </p>
          </SubSection>

          <SubSection title="2.4 Données d'audience — via Vercel Analytics">
            <p style={bodyText}>
              Nous utilisons Vercel Analytics pour mesurer l'audience du site. Ces données sont
              anonymisées et agrégées :
            </p>
            <ul style={listStyle}>
              <li style={liStyle}>Pages visitées et durée de session</li>
              <li style={liStyle}>Pays de provenance (sans IP complète)</li>
              <li style={liStyle}>Type d'appareil et navigateur</li>
            </ul>
            <p style={{ ...bodyText, color: "#888", fontSize: 13 }}>
              Aucun cookie de tracking tiers n'est utilisé. Vercel Analytics est respectueux du RGPD par défaut.
            </p>
          </SubSection>

          <SubSection title="2.5 Cookies techniques">
            <p style={bodyText}>
              Harmonia n'utilise que des cookies strictement nécessaires au fonctionnement du service :
            </p>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Cookie de session Clerk</strong> — maintient votre connexion entre les pages (durée : session ou 30 jours selon votre choix)</li>
              <li style={liStyle}><strong>Préférences locales</strong> — langue sélectionnée, stockées via <code style={{ background: "#f0ece6", padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>localStorage</code></li>
            </ul>
            <p style={{ ...bodyText, color: "#888", fontSize: 13 }}>
              Nous n'utilisons aucun cookie publicitaire, aucun pixel de tracking, aucun outil
              d'analyse comportementale intrusif.
            </p>
          </SubSection>
        </Section>

        <Section title="3. Finalités du traitement">
          <div style={{ overflowX: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: "0.5px solid #e8e3db", borderRadius: 10, overflow: "hidden", minWidth: 480 }}>
            {[
              { finalite: "Authentification", base: "Exécution du contrat", details: "Permettre la connexion et la gestion de votre compte" },
              { finalite: "Sauvegarde de progression", base: "Exécution du contrat", details: "Mémoriser vos scores et avancement dans les cours" },
              { finalite: "Facturation", base: "Obligation légale + contrat", details: "Traiter les paiements et émettre les factures" },
              { finalite: "Fonctionnalité Conservatoire", base: "Consentement / contrat", details: "Partager vos soumissions avec votre professeur" },
              { finalite: "Mesure d'audience", base: "Intérêt légitime", details: "Améliorer le service sur la base de statistiques anonymes" },
              { finalite: "Emails transactionnels", base: "Exécution du contrat", details: "Confirmations d'abonnement, notifications pédagogiques" },
            ].map((row, i) => (
              <div key={row.finalite} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 2fr",
                gap: 0, padding: "14px 18px",
                background: i % 2 === 0 ? "#fff" : "#fafaf8",
                borderBottom: i < 5 ? "0.5px solid #f0ece6" : "none",
                fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#444",
                alignItems: "start",
              }}>
                <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{row.finalite}</span>
                <span style={{ color: "#185FA5", fontSize: 12 }}>{row.base}</span>
                <span style={{ color: "#666" }}>{row.details}</span>
              </div>
            ))}
          </div>
          </div>
        </Section>

        <Section title="4. Hébergement et transferts de données">
          <p style={bodyText}>
            Vos données sont hébergées par les prestataires suivants :
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {[
              {
                name: "Vercel", flag: "🇺🇸",
                desc: "Hébergement de l'application web (Next.js). Serveurs principalement situés aux États-Unis. Vercel est certifié SOC 2 Type II.",
                link: "vercel.com/legal/privacy-policy",
              },
              {
                name: "Supabase", flag: "🇩🇪",
                desc: "Base de données PostgreSQL hébergée en Europe (AWS eu-west-1, Irlande). Stockage de vos données de progression et de classe.",
                link: "supabase.com/privacy",
              },
              {
                name: "Clerk", flag: "🇺🇸",
                desc: "Authentification et gestion des comptes utilisateurs. Serveurs aux États-Unis. Adhère au EU-US Data Privacy Framework.",
                link: "clerk.com/legal/privacy",
              },
              {
                name: "Stripe", flag: "🇺🇸",
                desc: "Traitement des paiements. Serveurs aux États-Unis et en Europe. Certifié PCI DSS niveau 1.",
                link: "stripe.com/fr/privacy",
              },
            ].map(h => (
              <div key={h.name} style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 18 }}>{h.flag}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{h.name}</span>
                </div>
                <p style={{ ...bodyText, margin: "0 0 6px", fontSize: 13 }}>{h.desc}</p>
                <a href={`https://${h.link}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#185FA5" }}>{h.link}</a>
              </div>
            ))}
          </div>
          <p style={{ ...bodyText, marginTop: 20 }}>
            Les transferts vers des pays tiers (États-Unis) sont encadrés par des clauses contractuelles
            types (CCT) approuvées par la Commission européenne, et/ou par l'adhésion au EU-US Data
            Privacy Framework selon les prestataires.
          </p>
        </Section>

        <Section title="5. Durée de conservation">
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, overflow: "hidden" }}>
            {[
              { type: "Données de compte", duree: "Jusqu'à suppression du compte + 30 jours" },
              { type: "Données de progression", duree: "Jusqu'à suppression du compte" },
              { type: "Données de facturation", duree: "10 ans (obligation légale comptable)" },
              { type: "Cookies de session", duree: "Session ou 30 jours selon le choix de connexion" },
              { type: "Logs serveur", duree: "90 jours maximum (Vercel)" },
              { type: "Données analytics", duree: "12 mois glissants (agrégées, anonymisées)" },
            ].map((row, i) => (
              <div key={row.type} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "13px 18px", gap: 16,
                background: i % 2 === 0 ? "#fff" : "#fafaf8",
                borderBottom: i < 5 ? "0.5px solid #f0ece6" : "none",
                fontFamily: "system-ui, sans-serif", fontSize: 13,
              }}>
                <span style={{ fontWeight: 600, color: "#333" }}>{row.type}</span>
                <span style={{ color: "#666", textAlign: "right" as const }}>{row.duree}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="6. Vos droits">
          <p style={bodyText}>
            Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679),
            vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 20 }}>
            {[
              { icon: "👁", right: "Droit d'accès", desc: "Obtenir une copie de vos données" },
              { icon: "✎", right: "Droit de rectification", desc: "Corriger des données inexactes" },
              { icon: "🗑", right: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
              { icon: "⊘", right: "Droit d'opposition", desc: "Vous opposer à certains traitements" },
              { icon: "↓", right: "Droit à la portabilité", desc: "Recevoir vos données en format structuré" },
              { icon: "⏸", right: "Droit à la limitation", desc: "Restreindre temporairement un traitement" },
            ].map(r => (
              <div key={r.right} style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 18px" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{r.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a1a", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{r.right}</div>
                <div style={{ fontSize: 12, color: "#888", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>{r.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#E6F1FB", border: "0.5px solid #A8C7EE", borderRadius: 10, padding: "20px 24px", marginTop: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#185FA5", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
              Comment exercer vos droits
            </div>
            <p style={{ ...bodyText, margin: 0, fontSize: 13 }}>
              Envoyez votre demande par e-mail à{" "}
              <a href="mailto:appliharmonia@gmail.com" style={{ color: "#185FA5", fontWeight: 600 }}>appliharmonia@gmail.com</a>{" "}
              en précisant votre adresse e-mail de compte Harmonia. Nous répondrons dans un délai
              de <strong>30 jours</strong> maximum.
            </p>
            <p style={{ ...bodyText, margin: "10px 0 0", fontSize: 13, color: "#666" }}>
              Pour la <strong>suppression de compte</strong>, vous pouvez également contacter directement
              Clerk via votre interface utilisateur. Nous supprimerons ensuite vos données de progression
              dans Supabase dans un délai de 30 jours.
            </p>
          </div>

          <p style={{ ...bodyText, fontSize: 13, color: "#888", marginTop: 16 }}>
            En cas de réponse insatisfaisante, vous avez le droit d'introduire une réclamation auprès
            de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés —{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5" }}>cnil.fr</a>).
          </p>
        </Section>

        <Section title="7. Sécurité">
          <p style={bodyText}>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}>Chiffrement des communications via HTTPS/TLS sur l'ensemble du site</li>
            <li style={liStyle}>Authentification sécurisée gérée par Clerk (MFA disponible)</li>
            <li style={liStyle}>Accès à la base de données restreint par Row Level Security (RLS) Supabase</li>
            <li style={liStyle}>Clés d'API secrètes jamais exposées côté client</li>
            <li style={liStyle}>Mots de passe jamais stockés en clair (gérés par Clerk)</li>
          </ul>
        </Section>

        <Section title="8. Partage des données">
          <p style={bodyText}>
            Harmonia ne vend, ne loue et ne partage pas vos données personnelles avec des tiers à des
            fins commerciales. Les seuls partages sont :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}><strong>Prestataires techniques</strong> : Clerk, Supabase, Stripe, Vercel — uniquement pour fournir le service, dans le cadre de contrats de traitement de données (DPA)</li>
            <li style={liStyle}><strong>Fonctionnalité Conservatoire</strong> : si vous êtes élève dans une classe Harmonia, votre professeur peut voir vos scores pour les devoirs qu'il a assignés</li>
            <li style={liStyle}><strong>Obligation légale</strong> : si une autorité compétente l'exige dans le cadre de la loi applicable</li>
          </ul>
        </Section>

        <Section title="9. Modifications de cette politique">
          <p style={bodyText}>
            Nous pouvons mettre à jour cette politique de confidentialité pour refléter des changements
            dans nos pratiques ou la réglementation applicable. En cas de modification substantielle,
            nous vous en informerons par e-mail ou par une notification visible sur le site.
          </p>
          <p style={bodyText}>
            La date de la dernière mise à jour est indiquée en haut de ce document. Nous vous
            encourageons à consulter cette page périodiquement.
          </p>
        </Section>

        <Section title="10. Contact">
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "24px 28px" }}>
            <p style={{ ...bodyText, margin: "0 0 16px" }}>
              Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos droits :
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, fontFamily: "system-ui, sans-serif", fontSize: 14 }}>
              <div>
                <span style={{ color: "#888", fontSize: 12, fontWeight: 600, display: "block", marginBottom: 2 }}>E-MAIL</span>
                <a href="mailto:appliharmonia@gmail.com" style={{ color: "#185FA5", fontWeight: 600, textDecoration: "none" }}>appliharmonia@gmail.com</a>
              </div>
              <div>
                <span style={{ color: "#888", fontSize: 12, fontWeight: 600, display: "block", marginBottom: 2 }}>SITE WEB</span>
                <a href="https://getharmonia.app" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5", textDecoration: "none" }}>getharmonia.app</a>
              </div>
            </div>
          </div>
        </Section>

        {/* Back link */}
        <div style={{ textAlign: "center" as const, marginTop: 60 }}>
          <Link href={`/${locale}`} style={{
            display: "inline-block",
            padding: "12px 28px",
            borderRadius: 8,
            background: "#1a1a1a",
            color: "#fff",
            textDecoration: "none",
            fontSize: 14,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
          }}>
            ← Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Footer minimal */}
      <footer style={{ borderTop: "0.5px solid #e8e3db", padding: "28px 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Harmonia<span style={{ color: "#BA7517" }}>.</span>
          </div>
          <div style={{ fontSize: 12, color: "#aaa", fontFamily: "system-ui, sans-serif" }}>
            © 2026 Harmonia · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontSize: 22, fontWeight: 400, margin: "0 0 20px",
        color: "#1a1a1a", letterSpacing: "-0.01em",
        paddingBottom: 12, borderBottom: "0.5px solid #e8e3db",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px", color: "#333", fontFamily: "system-ui, sans-serif" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginTop: 14 }}>
      {items.map(item => (
        <div key={item.label} style={{ display: "flex", gap: 12, fontFamily: "system-ui, sans-serif", fontSize: 14 }}>
          <span style={{ color: "#888", minWidth: 80 }}>{item.label}</span>
          <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

const bodyText: React.CSSProperties = {
  fontSize: 14,
  color: "#555",
  lineHeight: 1.8,
  fontFamily: "system-ui, sans-serif",
  margin: "0 0 12px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: 20,
  margin: "8px 0 12px",
  fontFamily: "system-ui, sans-serif",
};

const liStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#555",
  lineHeight: 1.8,
  marginBottom: 4,
};
