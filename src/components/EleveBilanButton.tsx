"use client";

import React from "react";
import { downloadEleveBilan, type EleveBilanData } from "@/lib/pdf-bilan";

const ACCENT = "#2D5A8E";

export default function EleveBilanButton({ data }: { data: EleveBilanData }) {
  return (
    <button
      onClick={() => downloadEleveBilan(data)}
      style={{
        background: "#fff",
        color: ACCENT,
        border: `1px solid ${ACCENT}55`,
        borderRadius: 8,
        padding: "8px 16px",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      📄 Bilan PDF
    </button>
  );
}
