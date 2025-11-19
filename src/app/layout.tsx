import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis XV - Yara Ximena",
  description: "Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños, metas y grandes logros.",
  openGraph: {
    title: "Mis XV - Yara Ximena",
    description: "Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños, metas y grandes logros.",
    url: "https://worrington.github.io/sweet-15-invitation-ximena/",
    siteName: "Invitación Mis XV - Yara Ximena",
    images: [
      {
        url: "https://worrington.github.io/sweet-15-invitation-ximena/icono-sobre.png",
        width: 1200,
        height: 630,
        alt: "Invitación",
      },
    ],
    type: "website",
  },
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
