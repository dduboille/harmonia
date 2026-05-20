"use client";
import React, { useState } from "react";
import DicteeHarmonique from "@/components/DicteeHarmonique";
import DicteeIntervalles from "@/components/DicteeIntervalles";

type Mode = "accords" | "intervalles";
const PURPLE = "#5C3D6E";

export default function DicteePage() {
  const [mode, setMode] = useState<Mode>("accords");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", paddingTop: "1.5rem", paddingBottom: "0.25rem", background: "#faf8fc", fontFamily: "system-ui, sans-serif" }}>
        {(["accords", "intervalles"] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "0.45rem 1.2rem",
              borderRadius: 24,
              border: `2px solid ${mode === m ? PURPLE : "#ddd"}`,
              background: mode === m ? PURPLE : "#fff",
              color: mode === m ? "#fff" : "#666",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: "pointer",
            }}
          >
            {m === "accords" ? "🎵 Accords" : "🎼 Intervalles"}
          </button>
        ))}
      </div>
      {mode === "accords" ? <DicteeHarmonique /> : <DicteeIntervalles />}
    </div>
  );
}
