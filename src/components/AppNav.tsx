"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const LOCALES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "pt", label: "PT" },
  { code: "it", label: "IT" },
];

function LangSwitcher({ locale, pathname }: { locale: string; pathname: string }) {
  const [open, setOpen] = useState(false);
  const switchTo = (code: string) => {
    const parts = pathname.split("/");
    parts[1] = code;
    return parts.join("/");
  };
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 3,
          background: "rgba(255,255,255,0.10)",
          border: "0.5px solid rgba(255,255,255,0.25)",
          borderRadius: 12, padding: "4px 8px",
          cursor: "pointer", color: "#fff",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {locale.toUpperCase()}
        <span style={{ fontSize: 7, opacity: 0.7 }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", right: 0,
          background: "#fff", border: "0.5px solid #e0dbd3",
          borderRadius: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          overflow: "hidden", zIndex: 400, minWidth: 70,
        }}>
          {LOCALES.map(loc => (
            <a
              key={loc.code}
              href={switchTo(loc.code)}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "8px 14px",
                fontSize: 12, fontWeight: loc.code === locale ? 700 : 400,
                color: loc.code === locale ? "#5C3D6E" : "#444",
                background: loc.code === locale ? "#F0EBF8" : "transparent",
                textDecoration: "none", fontFamily: "system-ui, sans-serif",
              }}
            >
              {loc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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

function NavItemPro({
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
  return (
    <div style={{ position: "relative" }}>
      <NavItem href={href} active={active} icon={icon} label={label} />
      <span style={{
        position: "absolute", top: 2, right: 2,
        background: "#E9C97E", color: "#3a2547",
        fontSize: 5, fontWeight: 800,
        padding: "1px 3px", borderRadius: 3,
        letterSpacing: "0.05em", lineHeight: 1.3,
        pointerEvents: "none",
      }}>
        PRO
      </span>
    </div>
  );
}

function AppNav() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const t = useTranslations("nav");

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
        <LangSwitcher locale={locale} pathname={pathname} />
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
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.07em" }}>{t("back").toUpperCase()}</span>
        </button>

        <NavItem href={`/${locale}/dashboard`}    active={active("dashboard")}    icon="⌂" label={t("home").toUpperCase()} />
        <NavItem href={`/${locale}/cours`}        active={active("cours")}        icon="♩" label={t("courses").toUpperCase()} />
        <NavItem href={`/${locale}/atelier`}      active={active("atelier")}      icon="✎" label={t("atelier").toUpperCase()} />
        <NavItem href={`/${locale}/editeur-melodique`} active={active("editeur-melodique")} icon="♩" label={t("melodie").toUpperCase()} />
        <NavItem href={`/${locale}/dictee`}       active={active("dictee")}       icon="♫" label={t("dictee").toUpperCase()} />
        <NavItem href={`/${locale}/comparateur`}   active={active("comparateur")}   icon="⟳" label={t("styles").toUpperCase()} />
        <NavItem    href={`/${locale}/progressions`}       active={active("progressions")}      icon="♬" label={t("progressions").toUpperCase()} />
        <NavItemPro href={`/${locale}/analyse-partition`} active={active("analyse-partition")} icon="◎" label={t("analyser").toUpperCase()} />
        <NavItemPro href={`/${locale}/assistant`}         active={active("assistant")}         icon="✦" label={t("assistant").toUpperCase()} />
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
