import type { Metadata } from "next";
import CookieConsent from "./CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dental Namay | Odontologia Integral",
  description: "Clinica odontologica integral en Trujillo, La Libertad.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem("dental_namay_theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const theme = storedTheme || (prefersDark ? "dark" : "light");
                  document.documentElement.dataset.theme = theme;
                } catch {
                  document.documentElement.dataset.theme = "light";
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
