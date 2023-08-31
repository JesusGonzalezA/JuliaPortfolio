import "./globals.css";

export const metadata = {
  title: "Julia Garbin",
  description:
    "Portfolio. I am a digital specialist with marketing experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" hreaf="./favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
