import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis XV - Yara Ximena",
  description: "Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños, metas y grandes logros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
