// components/LayoutWrapper.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isNotFound = pathname === "/not-found";

    if (isNotFound) return <>{children}</>; // No layout

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
