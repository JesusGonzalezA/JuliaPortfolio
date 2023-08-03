import "./globals.css";

export const metadata = {
  title: "Julia Garbin",
  description:
    "Portfolio. I am a digital specialist with marketing experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
