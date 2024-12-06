import type { Metadata } from "next";
import { Lato, Tenor_Sans, Mrs_Saint_Delafield } from "next/font/google";
import "./styles/globals.css";
import "./styles/global.scss";
import { Footer } from "@/components/ui/Footer/Footer";
import { Toaster } from "sonner";
import { HeaderContainer } from "@/components/ui/Header/HeaderContainer";
import "../lib/fontAwesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const tenorSans = Tenor_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-tenor-sans",
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-mrs-saint-delafield",
});

export const metadata: Metadata = {
  title: "Nonni Bakery",
  description: "by nehros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${lato.variable} ${tenorSans.variable} ${mrsSaintDelafield.variable} antialiased h-full flex flex-col`}
        style={{ fontFamily: `var(--font-tenor-sans)` }}
      >
        <div>
          <HeaderContainer />
        </div>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
