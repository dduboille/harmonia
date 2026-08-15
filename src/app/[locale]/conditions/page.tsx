import Link from "next/link";
import { COURS_COUNT } from "@/lib/catalogue";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ConditionsPage({ params }: Props) {
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
            Harmonia · Conditions d'utilisation
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, margin: "0 0 16px", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Conditions Générales d'Utilisation
          </h1>
          <p style={{ fontSize: 14, color: "#666", fontFamily: "system-ui, sans-serif", margin: 0 }}>
            Dernière mise à jour : 15 août 2026 · Version 2.0
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 2rem 100px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "28px 32px", marginBottom: 40 }}>
          <p style={bodyText}>
            Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et
            l'utilisation de la plateforme <strong>Harmonia</strong>, accessible à l'adresse{" "}
            <strong>getharmonia.app</strong>. En vous inscrivant ou en utilisant le service,
            vous acceptez l'intégralité des présentes CGU. Si vous n'acceptez pas ces conditions,
            veuillez ne pas utiliser le service.
          </p>
        </div>

        <Section title="0. Mentions légales">
          <p style={bodyText}>
            <strong>Éditeur du site</strong> : Dany Duboille, personne physique agissant
            à titre non professionnel. Contact :{" "}
            <a href="mailto:appliharmonia@gmail.com" style={{ color: "#185FA5" }}>appliharmonia@gmail.com</a>.
          </p>
          <p style={bodyText}>
            <strong>Directeur de la publication</strong> : Dany Duboille.
          </p>
          <p style={bodyText}>
            <strong>Hébergeur</strong> : Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5" }}>vercel.com</a>.
          </p>
          <p style={{ ...bodyText, fontSize: 13, color: "#666" }}>
            Conformément au 2 du III de l'article 6 de la loi n° 2004-575 du 21 juin 2004,
            l'éditeur, qui n'exerce pas à titre professionnel, a communiqué son identité
            à son hébergeur. Ces mentions seront remplacées par celles de l'association
            éditrice dès son immatriculation.
          </p>
        </Section>

        <Section title="1. Description du service">
          <p style={bodyText}>
            Harmonia est une plateforme éducative en ligne dédiée à la théorie musicale et à l'harmonie
            tonale. Le service propose notamment :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}><strong>{COURS_COUNT} cours structurés</strong> couvrant les fondements de l'harmonie classique, le jazz, l'impressionnisme et la composition, répartis en cinq niveaux progressifs (conservatoire, licence/master, DNSPM)</li>
            <li style={liStyle}><strong>Exercices interactifs SATB</strong> (Soprano, Alto, Ténor, Basse) avec validation harmonique en temps réel</li>
            <li style={liStyle}><strong>Quiz d'identification et de construction</strong> d'accords et de progressions harmoniques</li>
            <li style={liStyle}><strong>Dictée harmonique</strong>, comparateur de styles, éditeur mélodique et générateur d'exercices SATB</li>
            <li style={liStyle}><strong>Fonctionnalités Pro</strong> : assistant IA conversationnel, analyse de partition MusicXML, bibliothèque de progressions</li>
            <li style={liStyle}><strong>Fonctionnalité Conservatoire</strong> : espace pédagogique permettant à un professeur de créer une classe, assigner des devoirs et suivre la progression de ses élèves</li>
          </ul>
          <p style={bodyText}>
            Le service est disponible en six langues (français, anglais, espagnol, allemand,
            portugais, italien) et fonctionne sur tout navigateur web moderne. Aucune installation
            n'est requise.
          </p>
        </Section>

        <Section title="2. Accès au service et inscription">
          <p style={bodyText}>
            L'accès à Harmonia nécessite la création d'un compte via notre prestataire d'authentification
            Clerk. Vous pouvez vous inscrire avec une adresse e-mail ou via un fournisseur OAuth
            (Google, GitHub).
          </p>
          <p style={bodyText}>
            En créant un compte, vous déclarez :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}>Avoir au moins 13 ans, ou l'âge légal requis dans votre pays pour consentir à l'utilisation de services en ligne</li>
            <li style={liStyle}>Fournir des informations exactes et à jour</li>
            <li style={liStyle}>Être responsable de la confidentialité de vos identifiants de connexion</li>
            <li style={liStyle}>Ne pas partager votre compte avec des tiers</li>
          </ul>
          <p style={bodyText}>
            Harmonia se réserve le droit de suspendre ou supprimer tout compte en cas de violation
            des présentes CGU, de fraude avérée ou d'utilisation abusive du service.
          </p>
        </Section>

        <Section title="3. Conditions financières">
          <p style={bodyText}>
            <strong>L'accès individuel est gratuit et sans contrepartie.</strong> Les
            {" "}{COURS_COUNT} cours, leurs exercices, les analyses de partitions et
            l'ensemble des outils sont ouverts à toute personne disposant d'un compte,
            sans abonnement, sans carte bancaire et sans limitation de durée. Aucun
            paiement n'est demandé aux particuliers, et aucun moyen de paiement ne
            leur est réclamé.
          </p>
          <p style={bodyText}>
            <strong>Deux fonctions font exception</strong> : l'assistant conversationnel
            et le commentaire rédigé de l'analyseur de partitions. Elles reposent sur un
            modèle d'intelligence artificielle dont chaque requête a un coût, et elles
            sont réservées aux utilisateurs couverts par la licence d'un établissement.
          </p>
          <p style={bodyText}>
            <strong>Les établissements d'enseignement</strong> — conservatoires, écoles
            de musique, collèges et lycées — peuvent souscrire une licence annuelle :
            199 € par classe, ou 499 € pour l'établissement entier. Elle ouvre les
            fonctions ci-dessus à leurs élèves et à leurs professeurs, et donne accès au
            suivi de classe.
          </p>
          <p style={bodyText}>
            La licence est établie sur devis et réglée sur facture, par virement. Aucun
            paiement en ligne n'est proposé, et <strong>aucune donnée bancaire n'est
            collectée</strong> par Harmonia. Les tarifs sont exprimés en euros ; la
            mention de TVA applicable figure sur chaque devis et chaque facture.
          </p>
          <p style={bodyText}>
            <strong>Les participations volontaires</strong> des utilisateurs qui le
            souhaitent sont facultatives et sans contrepartie : elles n'ouvrent aucun
            droit, aucune fonction et aucun avantage, et ne conditionnent en rien
            l'accès au service.
          </p>
        </Section>

        <Section title="4. Durée de la licence des établissements">
          <p style={bodyText}>
            Cette section ne concerne que les établissements sous licence. Les comptes
            individuels n'ont ni durée ni échéance : l'accès est ouvert tant que le
            compte existe.
          </p>
          <p style={bodyText}>
            La licence court sur la période indiquée au devis, généralement une année
            scolaire. <strong>Elle ne se renouvelle pas automatiquement</strong> :
            aucune reconduction tacite, aucun prélèvement, aucune facture n'est émise
            sans une nouvelle commande de l'établissement.
          </p>
          <p style={bodyText}>
            À l'échéance, les élèves et les professeurs conservent l'intégralité de leur
            accès au site et de leur progression. Seules cessent les deux fonctions
            reposant sur l'intelligence artificielle et le suivi de classe.
          </p>
        </Section>

        <Section title="5. Propriété intellectuelle">
          <p style={bodyText}>
            L'ensemble du contenu d'Harmonia est protégé par le droit de la propriété intellectuelle.
          </p>

          <SubSection title="5.1 Contenu du service">
            <p style={bodyText}>
              Tous les éléments composant le service — textes des cours, exercices, explications
              harmoniques, exemples musicaux, interfaces, algorithmes de génération SATB, code source,
              graphismes, marque et logo Harmonia — sont la propriété exclusive de{" "}
              <strong>Dany Duboille</strong> ou font l'objet de licences accordées à Harmonia.
            </p>
            <p style={bodyText}>
              Il est strictement interdit, sans autorisation écrite préalable, de :
            </p>
            <ul style={listStyle}>
              <li style={liStyle}>Reproduire, copier ou distribuer tout ou partie du contenu pédagogique</li>
              <li style={liStyle}>Extraire automatiquement le contenu des cours ou des exercices (scraping)</li>
              <li style={liStyle}>Créer des œuvres dérivées à partir du contenu d'Harmonia à des fins commerciales</li>
              <li style={liStyle}>Revendre ou sous-licencier l'accès au service à des tiers</li>
            </ul>
          </SubSection>

          <SubSection title="5.2 Contenu de l'utilisateur">
            <p style={bodyText}>
              Vous conservez l'intégralité de la propriété de vos compositions et productions
              personnelles réalisées via les outils d'Harmonia (éditeur mélodique, composition guidée).
              En utilisant ces outils, vous accordez à Harmonia une licence non exclusive et limitée
              pour stocker et afficher vos données dans le cadre du service.
            </p>
          </SubSection>

          <SubSection title="5.3 Contenu musical de référence">
            <p style={bodyText}>
              Les extraits musicaux utilisés à titre pédagogique (œuvres de Bach, Beethoven, Chopin
              et autres compositeurs) sont dans le domaine public ou utilisés dans le cadre du droit
              de citation pédagogique. Les arrangements et analyses harmoniques restent la propriété
              d'Harmonia.
            </p>
          </SubSection>
        </Section>

        <Section title="6. Utilisation acceptable">
          <p style={bodyText}>
            Le service est destiné à un usage pédagogique personnel. En utilisant Harmonia, vous
            vous engagez à ne pas :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}>Utiliser le service à des fins illégales ou contraires aux bonnes mœurs</li>
            <li style={liStyle}>Tenter de contourner les systèmes de protection ou d'accès aux fonctionnalités payantes</li>
            <li style={liStyle}>Partager vos identifiants de connexion pour permettre à plusieurs personnes d'utiliser un seul compte</li>
            <li style={liStyle}>Automatiser l'utilisation du service (bots, scripts) sans autorisation écrite préalable</li>
            <li style={liStyle}>Publier, transmettre ou stocker tout contenu illicite, offensant ou portant atteinte aux droits de tiers via la fonctionnalité Conservatoire</li>
            <li style={liStyle}>Tenter de perturber le fonctionnement du service ou des serveurs d'Harmonia</li>
          </ul>
        </Section>

        <Section title="7. Disponibilité et maintenance">
          <p style={bodyText}>
            Harmonia s'efforce de maintenir le service disponible 24h/24 et 7j/7. Toutefois, des
            interruptions peuvent survenir pour :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}><strong>Maintenance planifiée</strong> : nous tâchons de prévenir les utilisateurs en avance et de programmer les opérations en heures creuses</li>
            <li style={liStyle}><strong>Incidents techniques</strong> : pannes chez nos prestataires d'infrastructure (Vercel, Supabase), indépendantes de notre volonté</li>
            <li style={liStyle}><strong>Mises à jour du service</strong> : l'ajout de nouvelles fonctionnalités peut nécessiter de brèves interruptions</li>
          </ul>
          <p style={bodyText}>
            Harmonia ne saurait être tenu responsable des préjudices liés à une interruption du service,
            quelle qu'en soit la cause. Pour les établissements sous licence, une interruption
            prolongée et significative pourrait donner lieu à un geste commercial, apprécié
            au cas par cas.
          </p>
        </Section>

        <Section title="8. Limitations de responsabilité">
          <div style={{ background: "#FFF8F0", border: "0.5px solid #F6AD55", borderRadius: 10, padding: "20px 24px", marginBottom: 20 }}>
            <p style={{ ...bodyText, margin: 0, color: "#744210" }}>
              Le service Harmonia est fourni <strong>« en l'état »</strong> (as is), sans garantie
              d'aucune sorte, expresse ou implicite, quant à son adéquation à un objectif particulier,
              son exhaustivité ou son exactitude.
            </p>
          </div>
          <p style={bodyText}>
            Dans les limites autorisées par la loi applicable, Harmonia ne pourra être tenu responsable :
          </p>
          <ul style={listStyle}>
            <li style={liStyle}><strong>Des dommages indirects</strong> : perte de données, manque à gagner, préjudice commercial, même si Harmonia avait été informé de la possibilité de tels dommages</li>
            <li style={liStyle}><strong>Des erreurs pédagogiques</strong> : bien que le contenu soit rédigé avec soin, les cours et exercices peuvent contenir des inexactitudes. Harmonia n'est pas un établissement d'enseignement agréé</li>
            <li style={liStyle}><strong>Du contenu tiers</strong> : liens vers des ressources externes, services de prestataires (Clerk, Supabase, Vercel) qui disposent de leurs propres conditions</li>
            <li style={liStyle}><strong>Des interruptions de service</strong> causées par des événements hors du contrôle d'Harmonia (force majeure, pannes de réseau, décisions de tiers)</li>
          </ul>
          <p style={bodyText}>
            En tout état de cause, la responsabilité totale d'Harmonia à votre égard ne saurait
            excéder le montant total des sommes versées par vous au cours des <strong>12 derniers mois</strong>{" "}
            précédant le fait générateur du dommage.
          </p>
        </Section>

        <Section title="9. Données personnelles">
          <p style={bodyText}>
            Le traitement de vos données personnelles est régi par notre{" "}
            <Link href={`/${locale}/confidentialite`} style={{ color: "#185FA5", fontWeight: 600 }}>
              Politique de confidentialité
            </Link>
            , qui fait partie intégrante des présentes CGU. En acceptant les CGU, vous acceptez
            également la politique de confidentialité.
          </p>
        </Section>

        <Section title="10. Modification des CGU">
          <p style={bodyText}>
            Harmonia se réserve le droit de modifier les présentes CGU à tout moment. En cas de
            modification substantielle, vous serez informé par e-mail et/ou par une notification
            visible sur le service au moins <strong>15 jours avant</strong> l'entrée en vigueur
            des nouvelles conditions.
          </p>
          <p style={bodyText}>
            Si vous n'acceptez pas les nouvelles conditions, vous pouvez cesser d'utiliser le
            service et demander la suppression de votre compte avant leur entrée en vigueur. La
            poursuite de l'utilisation du service après cette date vaut acceptation des CGU
            modifiées.
          </p>
          <p style={bodyText}>
            La version en vigueur est toujours accessible sur{" "}
            <strong>getharmonia.app/{locale}/conditions</strong> et datée en haut de ce document.
          </p>
        </Section>

        <Section title="11. Résiliation du service">
          <p style={bodyText}>
            <strong>Par l'utilisateur :</strong> vous pouvez fermer votre compte à tout moment en
            contactant appliharmonia@gmail.com. La résiliation entraîne la suppression de vos données
            de progression dans un délai de 30 jours, sous réserve des obligations légales de
            conservation (voir notre politique de confidentialité).
          </p>
          <p style={bodyText}>
            <strong>Par Harmonia :</strong> nous nous réservons le droit de résilier ou suspendre
            votre accès, sans préavis, en cas de violation grave des présentes CGU (fraude, abus,
            tentative de piratage). Si un établissement sous licence était concerné sans faute
            de sa part, les sommes correspondant à la période non consommée lui seraient
            remboursées au prorata.
          </p>
          <p style={bodyText}>
            <strong>Cessation du service :</strong> si Harmonia décide de mettre fin au service,
            l'ensemble des utilisateurs en sera informé avec un préavis d'au moins{" "}
            <strong>30 jours</strong>. Les établissements sous licence seraient remboursés au
            prorata de la période non consommée.
          </p>
        </Section>

        <Section title="12. Droit applicable et juridiction compétente">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 20 }}>
            {[
              {
                icon: "⚖",
                title: "Droit applicable",
                desc: "Les présentes CGU sont soumises au droit français, notamment le Code de la consommation, le Code civil et la loi n° 78-17 du 6 janvier 1978 relative à l'informatique et aux libertés.",
              },
              {
                icon: "🏛",
                title: "Tribunal compétent",
                desc: "En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents. Pour les consommateurs, le tribunal du lieu de résidence du consommateur peut s'appliquer.",
              },
              {
                icon: "🤝",
                title: "Résolution amiable",
                desc: "Avant toute procédure judiciaire, nous vous encourageons à nous contacter à appliharmonia@gmail.com. Nous nous engageons à répondre dans un délai de 15 jours ouvrés.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "20px 22px" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>{item.title}</div>
                <p style={{ ...bodyText, margin: 0, fontSize: 13 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ ...bodyText, fontSize: 13, color: "#888" }}>
            Conformément à l'article 14 du Règlement (UE) n° 524/2013, la Commission européenne met
            à disposition une plateforme de règlement en ligne des litiges (RLL) accessible à{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5" }}>
              ec.europa.eu/consumers/odr
            </a>.
          </p>
        </Section>

        <Section title="13. Dispositions diverses">
          <p style={bodyText}>
            <strong>Intégralité de l'accord :</strong> les présentes CGU, ainsi que la politique de
            confidentialité et, le cas échéant, les conditions spécifiques à certaines fonctionnalités,
            constituent l'intégralité de l'accord entre vous et Harmonia.
          </p>
          <p style={bodyText}>
            <strong>Divisibilité :</strong> si une clause des présentes CGU était déclarée invalide
            ou inapplicable, les autres clauses resteraient en vigueur.
          </p>
          <p style={bodyText}>
            <strong>Absence de renonciation :</strong> le fait pour Harmonia de ne pas se prévaloir
            d'une disposition des CGU ne saurait constituer une renonciation à s'en prévaloir
            ultérieurement.
          </p>
          <p style={bodyText}>
            <strong>Langue :</strong> les présentes CGU sont rédigées en français. En cas de
            traduction dans une autre langue, la version française fait foi.
          </p>
        </Section>

        <Section title="14. Contact">
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "24px 28px" }}>
            <p style={{ ...bodyText, margin: "0 0 18px" }}>
              Pour toute question relative aux présentes CGU, à votre licence ou à l'utilisation
              du service :
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, fontFamily: "system-ui, sans-serif" }}>
              <div>
                <span style={{ color: "#888", fontSize: 11, fontWeight: 600, display: "block", marginBottom: 3, letterSpacing: "0.06em" }}>E-MAIL</span>
                <a href="mailto:appliharmonia@gmail.com" style={{ color: "#185FA5", fontWeight: 600, textDecoration: "none", fontSize: 14 }}>appliharmonia@gmail.com</a>
              </div>
              <div>
                <span style={{ color: "#888", fontSize: 11, fontWeight: 600, display: "block", marginBottom: 3, letterSpacing: "0.06em" }}>RESPONSABLE</span>
                <span style={{ fontSize: 14, color: "#333" }}>Dany Duboille — Harmonia</span>
              </div>
              <div>
                <span style={{ color: "#888", fontSize: 11, fontWeight: 600, display: "block", marginBottom: 3, letterSpacing: "0.06em" }}>SITE WEB</span>
                <a href="https://getharmonia.app" target="_blank" rel="noopener noreferrer" style={{ color: "#185FA5", textDecoration: "none", fontSize: 14 }}>getharmonia.app</a>
              </div>
            </div>
          </div>
        </Section>

        {/* See also */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" as const, fontFamily: "system-ui, sans-serif", marginBottom: 14 }}>
            Voir aussi
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
            <Link href={`/${locale}/confidentialite`} style={{
              display: "inline-block", padding: "9px 18px",
              borderRadius: 8, border: "0.5px solid #e0dbd3",
              background: "#faf8f4", color: "#185FA5",
              textDecoration: "none", fontSize: 13, fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
            }}>
              Politique de confidentialité →
            </Link>
            <Link href={`/${locale}`} style={{
              display: "inline-block", padding: "9px 18px",
              borderRadius: 8, border: "0.5px solid #e0dbd3",
              background: "#faf8f4", color: "#555",
              textDecoration: "none", fontSize: 13,
              fontFamily: "system-ui, sans-serif",
            }}>
              Retour à l'accueil →
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center" as const }}>
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
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const }}>
            <Link href={`/${locale}/confidentialite`} style={{ fontSize: 12, color: "#767676", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>Confidentialité</Link>
            <Link href={`/${locale}/conditions`} style={{ fontSize: 12, color: "#185FA5", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>CGU</Link>
          </div>
          <div style={{ fontSize: 12, color: "#767676", fontFamily: "system-ui, sans-serif" }}>
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
