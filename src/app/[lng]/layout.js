import { dir } from "i18next";
import { Analytics } from "@vercel/analytics/react";
import { languages } from "../i18n/settings";
import "./globals.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Julia Garbin",
  description:
    "Portfolio. I am a digital specialist with marketing experience.",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Julia Garbin Portfolio" />
        <meta
          name="description"
          content="Digital Marketing | Ad & Public relationship | Social Media"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://julia-garbin-lourido.vercel.app/"
        />
        <meta property="og:title" content="Julia Garbin Portfolio" />
        <meta
          property="og:description"
          content="Digital Marketing | Ad & Public relationship | Social Media"
        />
        <meta
          property="og:image"
          content="https://julia-garbin-lourido.vercel.app/_next/image?url=%2Fassets%2Flogo.png&w=3840&q=75"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://julia-garbin-lourido.vercel.app/"
        />
        <meta property="twitter:title" content="Julia Garbin Portfolio" />
        <meta
          property="twitter:description"
          content="Digital Marketing | Ad & Public relationship | Social Media"
        />
        <meta
          property="twitter:image"
          content="https://julia-garbin-lourido.vercel.app/_next/image?url=%2Fassets%2Flogo.png&w=3840&q=75"
        />
        <link rel="icon" hreaf="./favicon.ico" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
