import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviders from "@/providers/ThemeProviders";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link shorter",
  description: "Link shorter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <Header />
          <main>{children}</main>
          <Toaster />
          {/* <Footer /> */}
        </ThemeProviders>
      </body>
    </html>
  );
}
