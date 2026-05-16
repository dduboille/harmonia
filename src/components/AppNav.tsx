"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";

export const APPNAV_H = 52;

function shouldShowNav(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length <= 1) return false;
  const segment = parts[1] ?? "";
  return !["preview", "sign-in", "sign-up"].includes(segment);
}

function NavItem({
  href,
  active,
  icon,
  label,
}: {
  href: string;
  active: boolean;
  icon: string;
  label: string;
}) {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: "6px 14px",
    borderRadius: 20,
    background: active ? "rgba(255,255,255,0.18)" : "transparent",
    color: active ? "#E9C97E" : "rgba(255,255,255,0.82)",
    textDecoration: "none",
    fontFamily: "system-ui, sans-serif",
  };
  return (
    <Link href={href} style={style}>
      <span style={{ fontSize: 15, lineHeight: 1 }}>{icon}</span>
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.07em" }}>{label}</span>
    </Link>
  );
}

function AppNav() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const active = (seg: string) => pathname.startsWith(`/${locale}/${seg}`);

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 300,
      height: APPNAV_H,
      background: "#5C3D6E",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 1.5rem",
      boxShadow: "0 2px 14px rgba(0,0,0,0.18)",
    }}>
      <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 17,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}>
          Harmonia<span style={{ color: "#E9C97E" }}>.</span>
        </span>
      </Link>

      <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            padding: "6px 14px",
            borderRadius: 20,
            background: "transparent",
            color: "rgba(255,255,255,0.82)",
            border: "none",
            cursor: "pointer",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ fontSize: 15, lineHeight: 1 }}>←</span>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.07em" }}>RETOUR</span>
        </button>

        <NavItem href={`/${locale}/dashboard`} active={active("dashboard")} icon="⌂" label="ACCUEIL" />
        <NavItem href={`/${locale}/cours`}     active={active("cours")}     icon="♩" label="COURS" />
        <NavItem href={`/${locale}/atelier`}   active={active("atelier")}   icon="✎" label="ATELIER" />
        <NavItem href={`/${locale}/dictee`}    active={active("dictee")}    icon="♫" label="DICTÉE" />
      </div>
    </div>
  );
}

export function ConditionalAppNav() {
  const pathname = usePathname();
  if (!shouldShowNav(pathname)) return null;
  return (
    <>
      <AppNav />
      <div style={{ height: APPNAV_H }} />
    </>
  );
}
