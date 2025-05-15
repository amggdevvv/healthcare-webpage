import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trial Template",
  description:
    " Expert medical illustration services, including 3D animations and case illustrations for personal injury. Visualize complex medical concepts effectively.",
};

export default function RootLayout({ children }) {

  const isNotFoundPage = typeof window !== 'undefined' && window.location.pathname === '/not-found'

  if (isNotFoundPage) {
    return <>{children}</> // No navbar/footer
  }

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
