import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Planet Patna - Explore the Rich Heritage of Patna",
  description: "Discover ancient artifacts, cultural treasures, and the fascinating history of one of India's oldest cities at Planet Patna Museum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'&&window.location.pathname==='/'){window.history.scrollRestoration='manual';window.scrollTo(0,0);}})();`,
          }}
        />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
