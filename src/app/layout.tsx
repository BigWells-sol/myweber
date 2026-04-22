import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weber — Build anything, visually.",
  description:
    "Weber is the no-code builder that lets you describe what you need and generates it instantly. Start building for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
