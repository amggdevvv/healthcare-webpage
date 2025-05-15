import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation'
import LayoutWrapper from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trial Template",
  description:
    " Expert medical illustration services, including 3D animations and case illustrations for personal injury. Visualize complex medical concepts effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/trial-template-icon.png" />
      </head>
      <body className={inter.className}>
        {/* LayoutWrapper will decide whether to show Navbar/Footer */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

