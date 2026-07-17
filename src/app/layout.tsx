import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlouseHub.in — Custom Made Blouses, Perfect Fit",
  description:
    "Get custom-made blouses tailored to your measurements. Choose from 200+ designs, premium fabrics, and expert tailors. Pan India delivery with free re-stitch guarantee.",
  keywords:
    "custom blouse, blouse designs, tailor made blouse, designer blouse, bridal blouse",
  openGraph: {
    title: "BlouseHub.in — Custom Made Blouses, Perfect Fit",
    description:
      "Custom made blouses that fit your style, your body & your moments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${inter.variable} ${bodoni.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
