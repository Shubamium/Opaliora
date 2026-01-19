import type { Metadata } from "next";
import { Geist, Spectral, Spectral_SC } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";

export const revalidate = 0;

const spectral = Spectral({
  variable: "--fontS",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spectralSC = Spectral_SC({
  variable: "--fontSC",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const starlight = localFont({
  src: [
    {
      path: "./fonts/starlightrune.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Opaliora",
  description:
    "Opaliora — or Ora — is a fae-born crystal dragon from the radiant realm of Opalshine, a dimension of shimmering light suspended above the multiverse. Once a slumbering dragon who dreamt worlds into being, she now wanders the human realm in mortal guise, gathering positivity and laughter to restore balance to her fading homeland. With crystal-touched magic and a heart full of wonder, Ora seeks to mend the fractures between light and shadow — one kind soul at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectralSC.variable} ${spectral.variable}`}
        style={
          {
            "--fontSC": spectralSC.style.fontFamily,
            "--fontS": spectral.style.fontFamily,
            "--fontSR": starlight.style.fontFamily,
          } as CSSProperties
        }
      >
        {/* Enable Later */}
        <Loading />
        <Header />
        {children}
      </body>
    </html>
  );
}
