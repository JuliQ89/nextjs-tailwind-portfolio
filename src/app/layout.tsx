import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ein Beispiel Portfolio Projekt 🎨.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="min-h-screen">
      <head></head>
      <body className="min-h-screen bg-foreground">{children}</body>
    </html>
  );
}
