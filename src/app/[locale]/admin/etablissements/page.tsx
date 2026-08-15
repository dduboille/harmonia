"use client";

/**
 * Écran d'administration des établissements clients.
 *
 * Deux moitiés : les DEMANDES qui arrivent des formulaires de la vitrine, et
 * les ÉTABLISSEMENTS déjà clients avec leurs licences. C'est le circuit
 * complet : une demande arrive, on la suit, puis on crée le client et sa
 * licence — qui ouvre réellement les cours à ses élèves.
 *
 * Interface française uniquement : elle n'est vue que par le compte ADMIN_EMAIL.
 */

import React, { useState, useEffect, useCallback } from "react";

interface Licence {
  id: string;
  sieges: number;
  valid_from: string;
  valid_until: string;
  statut: string;
  reference: string | null;
}

interface Etablissement {
  id: string;
  nom: string;
  type: string | null;
  contact_nom: string | null;
  contact_email: string | null;
  siret: string | null;
  licences: Licence[];
  siegesOuverts: number;
  siegesConsommes: number;
  sousLicence: boolean;
}

interface Classe {
  id: string;
  nom: string;
  code_acces: string;
  etablissement_id: string | null;
  nb_eleves: number;
}

interface Demande {
  id: string;
  nom: string;
  email: string;
  etablissement: string;
  fonction: string | null;
  ville: string | null;
  nb_eleves: string | null;
  message: string | null;
  statut: string;
  created_at: string;
}

const STATUTS = ["nouveau", "contacte", "devis_envoye", "signe", "perdu"] as const;
const LIBELLE: Record<string, string> = {
  nouveau: "Nouveau", contacte: "Contacté", devis_envoye: "Devis envoyé",
  signe: "Signé", perdu: "Perdu",
};
const COULEUR: Record<string, string> = {
  nouveau: "#9A5F12", contacte: "#185FA5", devis_envoye: "#5C3D6E",
  signe: "#0F6E56", perdu: "#8a8477",
};

const S = {
  page: { minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1.5rem", fontFamily: "system-ui, sans-serif" } as React.CSSProperties,
  bloc: { maxWidth: 1000, margin: "0 auto 2.5rem", background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: "24px" } as React.CSSProperties,
  h2: { fontSize: 19, fontWeight: 600, margin: "0 0 4px", fontFamily: "Georgia, serif" } as React.CSSProperties,
  sous: { fontSize: 13, color: "#767676", margin: "0 0 20px" } as React.CSSProperties,
  champ: { width: "100%", padding: "9px 12px", borderRadius: 6, border: "1px solid #c8c4bc", fontSize: 14, boxSizing: "border-box" as const, marginBottom: 10 },
  bouton: { padding: "10px 20px", borderRadius: 6, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 14, fontWeight: 500, cursor: "pointer" } as React.CSSProperties,
  ligne: { padding: "14px 0", borderBottom: "0.5px solid #e8e3db" } as React.CSSProperties,
  pastille: (c: string) => ({ display: "inline-block", background: c, color: "#fff", fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 10 }) as React.CSSProperties,
};

export default function AdminEtablissementsPage() {
  const [etabs, setEtabs] = useState<Etablissement[] | null>(null);
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [classes, setClasses] = useState<Classe[]>([]);
  const [erreur, setErreur] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);

  const [nom, setNom] = useState("");
  const [type, setType] = useState("");
  const [contactNom, setContactNom] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [siret, setSiret] = useState("");

  const charger = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/etablissements");
      if (!r.ok) {
        setErreur(r.status === 403 ? "Accès refusé." : "Chargement impossible.");
        setEtabs([]);
        return;
      }
      const d = await r.json();
      setEtabs(d.etablissements ?? []);
      setDemandes(d.demandes ?? []);
      setClasses(d.classes ?? []);
      setErreur(null);
    } catch {
      setErreur("Chargement impossible.");
      setEtabs([]);
    }
  }, []);

  useEffect(() => { void charger(); }, [charger]);

  const envoyer = async (corps: Record<string, unknown>) => {
    setEnCours(true);
    try {
      const r = await fetch("/api/admin/etablissements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corps),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) setErreur(d.error ?? "Opération impossible.");
      else { setErreur(null); await charger(); }
    } catch {
      setErreur("Erreur réseau.");
    } finally {
      setEnCours(false);
    }
  };

  return (
    <main style={S.page}>
      <div style={{ maxWidth: 1000, margin: "0 auto 1.5rem" }}>
        <h1 style={{ fontSize: 26, fontWeight: 400, fontFamily: "Georgia, serif", margin: 0 }}>
          Établissements
        </h1>
        {erreur && (
          <p style={{ color: "#C53030", fontSize: 14, marginTop: 10 }}>{erreur}</p>
        )}
      </div>

      {/* ── Les demandes qui arrivent ─────────────────────────────── */}
      <section style={S.bloc}>
        <h2 style={S.h2}>Demandes de devis</h2>
        <p style={S.sous}>
          Les formulaires de la vitrine. Elles sont enregistrées avant l&rsquo;envoi des e-mails :
          un message perdu n&rsquo;emporte plus le prospect.
        </p>
        {demandes.length === 0 ? (
          <p style={{ fontSize: 14, color: "#767676" }}>Aucune demande pour l&rsquo;instant.</p>
        ) : (
          demandes.map((d) => (
            <div key={d.id} style={S.ligne}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <strong style={{ fontSize: 15 }}>{d.etablissement}</strong>
                  <span style={{ fontSize: 13, color: "#767676" }}>
                    {" — "}{d.nom}{d.fonction ? `, ${d.fonction}` : ""}{d.ville ? ` (${d.ville})` : ""}
                  </span>
                </div>
                <span style={S.pastille(COULEUR[d.statut] ?? "#767676")}>{LIBELLE[d.statut] ?? d.statut}</span>
              </div>
              <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>
                <a href={`mailto:${d.email}`} style={{ color: "#185FA5" }}>{d.email}</a>
                {d.nb_eleves ? ` · ${d.nb_eleves} élèves` : ""}
                {` · ${new Date(d.created_at).toLocaleDateString("fr-FR")}`}
              </div>
              {d.message && (
                <p style={{ fontSize: 13, color: "#444", margin: "8px 0 0", lineHeight: 1.6 }}>{d.message}</p>
              )}
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                {STATUTS.filter((s) => s !== d.statut).map((s) => (
                  <button
                    key={s}
                    disabled={enCours}
                    onClick={() => void envoyer({ action: "statut-demande", id: d.id, statut: s })}
                    style={{ ...S.bouton, background: "transparent", color: "#555", border: "1px solid #d8d3cb", padding: "5px 11px", fontSize: 12 }}
                  >
                    {LIBELLE[s]}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* ── Créer un établissement ────────────────────────────────── */}
      <section style={S.bloc}>
        <h2 style={S.h2}>Nouvel établissement</h2>
        <p style={S.sous}>Le SIRET et l&rsquo;adresse serviront à la facturation.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0 14px" }}>
          <input style={S.champ} placeholder="Nom de l'établissement" value={nom} onChange={(e) => setNom(e.target.value)} />
          <input style={S.champ} placeholder="Type (CRR, CRD, école agréée…)" value={type} onChange={(e) => setType(e.target.value)} />
          <input style={S.champ} placeholder="Contact — nom" value={contactNom} onChange={(e) => setContactNom(e.target.value)} />
          <input style={S.champ} placeholder="Contact — e-mail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
          <input style={S.champ} placeholder="SIRET" value={siret} onChange={(e) => setSiret(e.target.value)} />
        </div>
        <button
          style={{ ...S.bouton, opacity: !nom.trim() || enCours ? 0.5 : 1 }}
          disabled={!nom.trim() || enCours}
          onClick={async () => {
            await envoyer({
              action: "creer-etablissement", nom, type, contact_nom: contactNom,
              contact_email: contactEmail, siret,
            });
            setNom(""); setType(""); setContactNom(""); setContactEmail(""); setSiret("");
          }}
        >
          Créer
        </button>
      </section>

      {/* ── Les clients et leurs licences ─────────────────────────── */}
      <section style={S.bloc}>
        <h2 style={S.h2}>Clients</h2>
        <p style={S.sous}>
          Une licence ouvre les cours à tous les élèves des classes rattachées à l&rsquo;établissement,
          ainsi qu&rsquo;à leurs professeurs.
        </p>
        {etabs === null ? (
          <p style={{ fontSize: 14, color: "#767676" }}>Chargement…</p>
        ) : etabs.length === 0 ? (
          <p style={{ fontSize: 14, color: "#767676" }}>Aucun établissement.</p>
        ) : (
          etabs.map((e) => <CarteEtablissement key={e.id} e={e} enCours={enCours} envoyer={envoyer} />)
        )}
      </section>

      {/* ── Rattacher les classes ─────────────────────────────────── */}
      <section style={S.bloc}>
        <h2 style={S.h2}>Classes</h2>
        <p style={S.sous}>
          Une licence n&rsquo;ouvre les cours qu&rsquo;aux classes RATTACHÉES à l&rsquo;établissement :
          la couverture se calcule en remontant de l&rsquo;élève vers sa classe, puis vers la licence.
          Une classe non rattachée reste une classe personnelle, sans droits.
        </p>
        {classes.length === 0 ? (
          <p style={{ fontSize: 14, color: "#767676" }}>Aucune classe créée pour l&rsquo;instant.</p>
        ) : (
          classes.map((c) => {
            const etab = etabs?.find((e) => e.id === c.etablissement_id);
            return (
              <div key={c.id} style={{ ...S.ligne, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <strong style={{ fontSize: 15 }}>{c.nom}</strong>
                  <span style={{ fontSize: 13, color: "#767676" }}>
                    {" — "}code {c.code_acces} · {c.nb_eleves} élève{c.nb_eleves > 1 ? "s" : ""}
                  </span>
                  <div style={{ fontSize: 13, marginTop: 3 }}>
                    {etab
                      ? <span style={{ color: etab.sousLicence ? "#0F6E56" : "#C53030" }}>
                          {etab.nom}{etab.sousLicence ? "" : " — sans licence active, les élèves n'ont pas accès"}
                        </span>
                      : <span style={{ color: "#8a8477" }}>Classe personnelle, non rattachée</span>}
                  </div>
                </div>
                <select
                  value={c.etablissement_id ?? ""}
                  disabled={enCours}
                  onChange={(ev) => void envoyer({
                    action: "rattacher-classe",
                    classe_id: c.id,
                    etablissement_id: ev.target.value || null,
                  })}
                  style={{ ...S.champ, width: 240, marginBottom: 0 }}
                >
                  <option value="">— Aucun établissement —</option>
                  {(etabs ?? []).map((e) => (
                    <option key={e.id} value={e.id}>{e.nom}</option>
                  ))}
                </select>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

function CarteEtablissement({
  e, enCours, envoyer,
}: {
  e: Etablissement;
  enCours: boolean;
  envoyer: (corps: Record<string, unknown>) => Promise<void>;
}) {
  const [sieges, setSieges] = useState(30);
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [reference, setReference] = useState("");

  const trop = e.siegesConsommes > e.siegesOuverts && e.sousLicence;

  return (
    <div style={S.ligne}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
        <div>
          <strong style={{ fontSize: 15 }}>{e.nom}</strong>
          {e.type && <span style={{ fontSize: 13, color: "#767676" }}>{" — "}{e.type}</span>}
        </div>
        <span style={S.pastille(e.sousLicence ? "#0F6E56" : "#8a8477")}>
          {e.sousLicence ? "Sous licence" : "Sans licence active"}
        </span>
      </div>

      <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>
        {e.contact_email && <a href={`mailto:${e.contact_email}`} style={{ color: "#185FA5" }}>{e.contact_email}</a>}
        {e.siret ? ` · SIRET ${e.siret}` : ""}
        {" · "}
        <span style={{ color: trop ? "#C53030" : "#555", fontWeight: trop ? 600 : 400 }}>
          {e.siegesConsommes} / {e.siegesOuverts} sièges
        </span>
        {trop && " — dépassement"}
      </div>

      {e.licences.length > 0 && (
        <ul style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 13, color: "#555" }}>
          {e.licences.map((l) => (
            <li key={l.id} style={{ marginBottom: 4 }}>
              {l.sieges} sièges, du {l.valid_from} au {l.valid_until}
              {l.reference ? ` · ${l.reference}` : ""}
              {" · "}
              <span style={{ color: l.statut === "active" ? "#0F6E56" : "#8a8477" }}>{l.statut}</span>
              {l.statut === "active" && (
                <button
                  disabled={enCours}
                  onClick={() => void envoyer({ action: "statut-licence", id: l.id, statut: "suspendue" })}
                  style={{ marginLeft: 8, background: "none", border: "none", color: "#C53030", fontSize: 12, cursor: "pointer", textDecoration: "underline" }}
                >
                  suspendre
                </button>
              )}
              {l.statut === "suspendue" && (
                <button
                  disabled={enCours}
                  onClick={() => void envoyer({ action: "statut-licence", id: l.id, statut: "active" })}
                  style={{ marginLeft: 8, background: "none", border: "none", color: "#0F6E56", fontSize: 12, cursor: "pointer", textDecoration: "underline" }}
                >
                  réactiver
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
        <input type="number" min={1} value={sieges} onChange={(ev) => setSieges(Number(ev.target.value))}
          style={{ ...S.champ, width: 90, marginBottom: 0 }} title="Sièges" />
        <input type="date" value={debut} onChange={(ev) => setDebut(ev.target.value)}
          style={{ ...S.champ, width: 150, marginBottom: 0 }} title="Début" />
        <input type="date" value={fin} onChange={(ev) => setFin(ev.target.value)}
          style={{ ...S.champ, width: 150, marginBottom: 0 }} title="Fin" />
        <input value={reference} onChange={(ev) => setReference(ev.target.value)}
          placeholder="Bon de commande" style={{ ...S.champ, width: 170, marginBottom: 0 }} />
        <button
          style={{ ...S.bouton, padding: "9px 16px", fontSize: 13, opacity: !debut || !fin || enCours ? 0.5 : 1 }}
          disabled={!debut || !fin || enCours}
          onClick={async () => {
            await envoyer({
              action: "creer-licence", etablissement_id: e.id, sieges,
              valid_from: debut, valid_until: fin, reference,
            });
            setDebut(""); setFin(""); setReference("");
          }}
        >
          Ajouter une licence
        </button>
      </div>
    </div>
  );
}
