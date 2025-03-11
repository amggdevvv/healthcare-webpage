import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <main>{children}</main>
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
