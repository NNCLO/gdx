import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideLeft from "./components/SideLeft";
import SideRight from "./components/SideRight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GDX GoOlahData Experience",
  description: "Melayani analisis data untuk skripsi, thesis dan disertasi menggunakan spss, amos, eviews, lisrel, smartPLS dll. Free revisi sesuai arahan dosen - Sampai ACC dalam durasi 3 bulan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <SideLeft />
        <SideRight />
        {children}
      </body>
    </html>
  );
}
