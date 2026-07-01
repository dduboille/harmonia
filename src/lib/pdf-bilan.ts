// lib/pdf-bilan.ts
// Génération des bilans PDF (classe / élève) côté client via jsPDF + autotable.
// Importé uniquement depuis des composants client.

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ACCENT: [number, number, number] = [45, 90, 142]; // #2D5A8E
const INK: [number, number, number] = [26, 26, 26];
const GREY: [number, number, number] = [136, 136, 136];

function slug(s: string): string {
  return s.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "") || "bilan";
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

// En-tête commun : bandeau Harmonia + titre + sous-titre + date.
function header(doc: jsPDF, titre: string, sousTitre: string): number {
  doc.setFontSize(18);
  doc.setTextColor(...ACCENT);
  doc.setFont("helvetica", "bold");
  doc.text("Harmonia", 14, 18);

  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.setFont("helvetica", "normal");
  doc.text("Conservatoire · Bilan pédagogique", 14, 24);

  doc.setFontSize(15);
  doc.setTextColor(...INK);
  doc.setFont("helvetica", "bold");
  doc.text(titre, 14, 36);

  doc.setFontSize(11);
  doc.setTextColor(...GREY);
  doc.setFont("helvetica", "normal");
  doc.text(sousTitre, 14, 43);
  doc.text(`Généré le ${new Date().toLocaleDateString("fr-FR")}`, 14, 49);

  doc.setDrawColor(230, 226, 218);
  doc.line(14, 53, 196, 53);
  return 60; // Y de départ du contenu
}

// ─── Bilan de classe ──────────────────────────────────────────────────────────

export interface ClasseBilanData {
  classeNom: string;
  eleves: Array<{
    nom: string;
    email: string;
    coursCompletes: number;
    exercicesReussis: number;
    scoreMoyen: number;
    derniereActivite: string; // déjà formatée FR ou "—"
  }>;
  erreurs: Array<{ label: string; count: number }>;
}

export function downloadClasseBilan(data: ClasseBilanData) {
  const doc = new jsPDF();
  let y = header(doc, `Bilan de classe — ${data.classeNom}`, `${data.eleves.length} élève${data.eleves.length !== 1 ? "s" : ""}`);

  autoTable(doc, {
    startY: y,
    head: [["Élève", "Cours", "Exercices", "Score moy.", "Dernière activité"]],
    body: data.eleves.map((e) => [
      e.nom || e.email,
      String(e.coursCompletes),
      String(e.exercicesReussis),
      e.scoreMoyen > 0 ? `${e.scoreMoyen}%` : "—",
      e.derniereActivite,
    ]),
    headStyles: { fillColor: ACCENT, fontStyle: "bold" },
    styles: { fontSize: 9, cellPadding: 3 },
    alternateRowStyles: { fillColor: [248, 246, 243] },
  });

  y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12;

  if (data.erreurs.length > 0) {
    doc.setFontSize(12);
    doc.setTextColor(...INK);
    doc.setFont("helvetica", "bold");
    doc.text("Erreurs d'écriture les plus fréquentes", 14, y);
    y += 4;
    autoTable(doc, {
      startY: y,
      head: [["Type d'erreur", "Occurrences"]],
      body: data.erreurs.map((e) => [e.label, `${e.count}×`]),
      headStyles: { fillColor: [197, 48, 48], fontStyle: "bold" },
      styles: { fontSize: 9, cellPadding: 3 },
    });
  }

  doc.save(`harmonia_bilan_${slug(data.classeNom)}_${today()}.pdf`);
}

// ─── Bilan d'élève ──────────────────────────────────────────────────────────

export interface EleveBilanData {
  eleveNom: string;
  eleveEmail: string;
  classeNom?: string;
  stats: { coursCompletes: number; exercicesReussis: number; scoreMoyen: number };
  progression: Array<{ cours: number; nom: string; completed: number; total: number; pct: number; avg: number }>;
  difficultes: Array<{ label: string; count: number }>;
  devoirs: Array<{ titre: string; note: number | null; date: string; commentaire: string | null }>;
}

export function downloadEleveBilan(data: EleveBilanData) {
  const doc = new jsPDF();
  const sousTitre = data.classeNom ? `${data.eleveNom || data.eleveEmail} · ${data.classeNom}` : (data.eleveNom || data.eleveEmail);
  let y = header(doc, "Bilan de l'élève", sousTitre);

  // Statistiques
  autoTable(doc, {
    startY: y,
    head: [["Cours complétés", "Exercices réussis", "Score moyen"]],
    body: [[
      String(data.stats.coursCompletes),
      String(data.stats.exercicesReussis),
      data.stats.scoreMoyen > 0 ? `${data.stats.scoreMoyen}%` : "—",
    ]],
    headStyles: { fillColor: ACCENT, fontStyle: "bold" },
    styles: { fontSize: 10, cellPadding: 4, halign: "center" },
  });
  y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12;

  // Progression par cours
  if (data.progression.length > 0) {
    doc.setFontSize(12); doc.setTextColor(...INK); doc.setFont("helvetica", "bold");
    doc.text("Progression par cours", 14, y); y += 4;
    autoTable(doc, {
      startY: y,
      head: [["Cours", "Réussis", "Progression", "Score moy."]],
      body: data.progression.map((p) => [
        `${p.cours} — ${p.nom}`,
        `${p.completed}/${p.total}`,
        `${p.pct}%`,
        p.avg > 0 ? `${p.avg}%` : "—",
      ]),
      headStyles: { fillColor: ACCENT, fontStyle: "bold" },
      styles: { fontSize: 8.5, cellPadding: 2.5 },
      alternateRowStyles: { fillColor: [248, 246, 243] },
    });
    y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12;
  }

  // Difficultés récurrentes
  if (data.difficultes.length > 0) {
    doc.setFontSize(12); doc.setTextColor(...INK); doc.setFont("helvetica", "bold");
    doc.text("Difficultés récurrentes", 14, y); y += 4;
    autoTable(doc, {
      startY: y,
      head: [["Type d'erreur", "Occurrences"]],
      body: data.difficultes.map((d) => [d.label, `${d.count}×`]),
      headStyles: { fillColor: [197, 48, 48], fontStyle: "bold" },
      styles: { fontSize: 9, cellPadding: 3 },
    });
    y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12;
  }

  // Devoirs notés
  if (data.devoirs.length > 0) {
    doc.setFontSize(12); doc.setTextColor(...INK); doc.setFont("helvetica", "bold");
    doc.text("Devoirs notés", 14, y); y += 4;
    autoTable(doc, {
      startY: y,
      head: [["Devoir", "Note", "Date", "Commentaire"]],
      body: data.devoirs.map((d) => [
        d.titre,
        d.note != null ? `${d.note}%` : "—",
        d.date,
        d.commentaire ?? "",
      ]),
      headStyles: { fillColor: ACCENT, fontStyle: "bold" },
      styles: { fontSize: 8.5, cellPadding: 2.5 },
      columnStyles: { 3: { cellWidth: 70 } },
      alternateRowStyles: { fillColor: [248, 246, 243] },
    });
  }

  doc.save(`harmonia_bilan_${slug(data.eleveNom || data.eleveEmail)}_${today()}.pdf`);
}
