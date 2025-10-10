import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { TransformationProvider } from "@/contexts/TransformationContext";
import { ModalProvider } from "@/contexts/ModalContext";
import QuoteRequestModal from "@/components/modals/QuoteRequestModal";
import ConsultationModal from "@/components/modals/ConsultationModal";
import { GoogleAnalytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brightway Coatings - Jacksonville FL Concrete Floor Coatings",
  description: "Family-owned concrete coating experts in Jacksonville FL. Premium polyaspartic systems with 1-day installation. Licensed, insured, 30+ years experience.",
  keywords: ["concrete coating Jacksonville", "garage floor coating", "polyaspartic coating", "floor coatings FL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <TransformationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <StickyMobileCTA />
            <QuoteRequestModal />
            <ConsultationModal />
          </TransformationProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
