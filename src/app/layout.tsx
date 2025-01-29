import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "DDoong Dev",
  description: "Portfolio Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${soraFont.className}`}>{children}</body>
    </html>
  );
}
