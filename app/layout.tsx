import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelham Ružić — Creative Design & Consulting",
  description:
    "Pelham Ružić Ltd — Architectural & Interior Design, Creative Consulting. Founded by William Pelham and Jelena Ružić.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
