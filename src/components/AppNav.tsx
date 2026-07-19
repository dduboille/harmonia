"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useUser } from "@clerk/nextjs";

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
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const active = (seg: string) => pathname.startsWith(`/${locale}/${seg}`);

  const items = [
    { href: `/${locale}/dashboard`, icon: "⌂", label: t("home").toUpperCase(), active: active("dashboard"), pro: false },
    { href: `/${locale}/cours`, icon: "♩", label: t("courses").toUpperCase(), active: active("cours") || active("cursus"), pro: false },
    {
      href: `/${locale}/entrainement`, icon: "✎", label: t("training").toUpperCase(), pro: false,
      active: active("entrainement") || active("atelier") || active("dictee") || active("notes-etrangeres"),
    },
    {
      href: `/${locale}/creation`, icon: "♬", label: t("creation").toUpperCase(), pro: false,
      active: active("creation") || active("composition") || active("composer") || active("squelette-harmonique") || active("comparateur") || active("progressions") || active("generateur-satb") || active("releve"),
    },
    {
      href: `/${locale}/analyse`, icon: "◎", label: t("analyser").toUpperCase(), pro: true,
      active: active("analyse") || active("analyse-partition") || active("assistant"),
    },
    ...(isSignedIn
      ? [{ href: `/${locale}/prof`, icon: "🎓", label: t("ecole"), active: active("prof"), pro: false }]
      : []),
  ];

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 300,
      background: "#5C3D6E",
      boxShadow: "0 2px 14px rgba(0,0,0,0.18)",
    }}>
      {/* La barre alignait 6 entrées + le sélecteur de langue + un bouton retour
          sans aucune media query : au-delà de 5 entrées elle débordait sur
          mobile. Sous 820px, elle bascule sur un tiroir. */}
      <style>{`
        .appnav-desktop { display: flex; gap: 2px; align-items: center; }
        .appnav-burger { display: none; }
        @media (max-width: 820px) {
          .appnav-desktop { display: none; }
          .appnav-burger { display: flex; }
        }
      `}</style>

      <div style={{
        height: APPNAV_H,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
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

        <div className="appnav-desktop">
          <LangSwitcher locale={locale} pathname={pathname} />
          <button
            onClick={() => router.back()}
            aria-label={t("back")}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              padding: "6px 14px", borderRadius: 20, background: "transparent",
              color: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 15, lineHeight: 1 }}>←</span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.07em" }}>{t("back").toUpperCase()}</span>
          </button>

          {items.map(item =>
            item.pro
              ? <NavItemPro key={item.href} href={item.href} active={item.active} icon={item.icon} label={item.label} />
              : <NavItem key={item.href} href={item.href} active={item.active} icon={item.icon} label={item.label} />
          )}
        </div>

        <button
          className="appnav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Menu"
          style={{
            width: 44, height: 44, borderRadius: 8,
            background: "rgba(255,255,255,0.12)", border: "none", color: "#fff",
            fontSize: 18, cursor: "pointer", alignItems: "center", justifyContent: "center",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          padding: "8px 1rem 16px",
          display: "flex", flexDirection: "column", gap: 2,
        }}>
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                minHeight: 48, padding: "0 8px", borderRadius: 8,
                textDecoration: "none", fontFamily: "system-ui, sans-serif",
                fontSize: 14, fontWeight: 600, letterSpacing: "0.04em",
                color: item.active ? "#E9C97E" : "rgba(255,255,255,0.92)",
                background: item.active ? "rgba(255,255,255,0.1)" : "transparent",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: 16, width: 20, textAlign: "center" }}>{item.icon}</span>
              {item.label}
              {item.pro && (
                <span style={{
                  marginLeft: "auto", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em",
                  background: "#E9C97E", color: "#3B2650", padding: "2px 7px", borderRadius: 6,
                }}>
                  PRO
                </span>
              )}
            </Link>
          ))}
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <LangSwitcher locale={locale} pathname={pathname} />
          </div>
        </div>
      )}
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
