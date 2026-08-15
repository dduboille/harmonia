/**
 * src/app/api/admin/etablissements/route.ts
 * Harmonia — Admin : établissements clients, leurs licences et les demandes de
 * devis. Réservé au compte dont l'e-mail correspond à ADMIN_EMAIL, comme les
 * routes des codes d'essai.
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { estAdmin } from "@/lib/admin";
import {
  listerEtablissements, creerEtablissement, creerLicence, majStatutLicence, rattacherClasse,
  listerClasses,
} from "@/lib/etablissements-db";
import { listerDemandes, majDemande, STATUTS_DEMANDE, type StatutDemande } from "@/lib/demandes-etablissement";

async function verifierAdmin() {
  const { userId } = await auth();
  if (!userId) return { ok: false as const, status: 401 };
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  if (!estAdmin(email, process.env.ADMIN_EMAIL)) return { ok: false as const, status: 403 };
  return { ok: true as const };
}

export async function GET() {
  const verif = await verifierAdmin();
  if (!verif.ok) return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });

  const [etablissements, demandes, classes] = await Promise.all([
    listerEtablissements(), listerDemandes(), listerClasses(),
  ]);
  return NextResponse.json({ etablissements, demandes, classes });
}

export async function POST(req: NextRequest) {
  const verif = await verifierAdmin();
  if (!verif.ok) return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });

  let corps: Record<string, unknown>;
  try {
    corps = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const action = corps.action;

  if (action === "creer-etablissement") {
    const nom = typeof corps.nom === "string" ? corps.nom.trim() : "";
    if (!nom) return NextResponse.json({ error: "Le nom est requis." }, { status: 400 });
    const e = await creerEtablissement({
      nom,
      type: (corps.type as string) ?? null,
      contact_nom: (corps.contact_nom as string) ?? null,
      contact_email: (corps.contact_email as string) ?? null,
      siret: (corps.siret as string) ?? null,
      adresse_facturation: (corps.adresse_facturation as string) ?? null,
      notes: (corps.notes as string) ?? null,
    });
    return e
      ? NextResponse.json({ etablissement: e })
      : NextResponse.json({ error: "Création impossible. La migration a-t-elle été passée ?" }, { status: 500 });
  }

  if (action === "creer-licence") {
    const sieges = Number(corps.sieges);
    const { etablissement_id, valid_from, valid_until } = corps as Record<string, string>;
    if (!etablissement_id || !valid_from || !valid_until) {
      return NextResponse.json({ error: "Établissement et période sont requis." }, { status: 400 });
    }
    if (!Number.isInteger(sieges) || sieges <= 0) {
      return NextResponse.json({ error: "Le nombre de sièges doit être un entier positif." }, { status: 400 });
    }
    if (valid_until < valid_from) {
      return NextResponse.json({ error: "La fin ne peut pas précéder le début." }, { status: 400 });
    }
    const l = await creerLicence({
      etablissement_id, sieges, valid_from, valid_until,
      reference: (corps.reference as string) ?? null,
    });
    return l
      ? NextResponse.json({ licence: l })
      : NextResponse.json({ error: "Création impossible." }, { status: 500 });
  }

  if (action === "statut-licence") {
    const { id, statut } = corps as Record<string, string>;
    if (!id || !["active", "suspendue", "annulee"].includes(statut)) {
      return NextResponse.json({ error: "Statut inconnu." }, { status: 400 });
    }
    return (await majStatutLicence(id, statut))
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Mise à jour impossible." }, { status: 500 });
  }

  if (action === "rattacher-classe") {
    const { classe_id } = corps as Record<string, string>;
    const etab = (corps.etablissement_id as string | null) ?? null;
    if (!classe_id) return NextResponse.json({ error: "Classe manquante." }, { status: 400 });
    return (await rattacherClasse(classe_id, etab))
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Rattachement impossible." }, { status: 500 });
  }

  if (action === "statut-demande") {
    const { id, statut } = corps as Record<string, string>;
    if (!id || !STATUTS_DEMANDE.includes(statut as StatutDemande)) {
      return NextResponse.json({ error: "Statut inconnu." }, { status: 400 });
    }
    return (await majDemande(id, {
      statut: statut as StatutDemande,
      ...(typeof corps.notes === "string" ? { notes: corps.notes } : {}),
    }))
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Mise à jour impossible." }, { status: 500 });
  }

  return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
}
