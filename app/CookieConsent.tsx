"use client";

import { useEffect, useState } from "react";

const consentCookie = "dental_namay_cookie_consent";

function setConsent(value: "accepted" | "rejected") {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${consentCookie}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function hasConsent() {
  return document.cookie
    .split(";")
    .map((item) => item.trim())
    .some((item) => item.startsWith(`${consentCookie}=`));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(!hasConsent());
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  function handleChoice(value: "accepted" | "rejected") {
    setConsent(value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section className="cookie-banner" aria-label="Aviso de cookies">
      <div>
        <strong>Usamos cookies</strong>
        <p>
          Utilizamos cookies para mejorar tu experiencia, recordar preferencias y analizar el uso de la web.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-secondary" onClick={() => handleChoice("rejected")}>
          Rechazar
        </button>
        <button type="button" className="cookie-primary" onClick={() => handleChoice("accepted")}>
          Aceptar
        </button>
      </div>
    </section>
  );
}
