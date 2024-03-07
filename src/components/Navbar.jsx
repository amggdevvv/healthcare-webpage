import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="bg-gradient-to-br from-red-900 to-zinc-900 py-2 text-white">
        <p className="text-center italic">
          “With Trial Template I have been able to turn my ideas for trial
          graphics into reality…” — Chris Dolan, The Dolan Law Firm
        </p>
      </div>
      <div className="flex items-center justify-between bg-white lg:px-24 px-8 py-1">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image
            width={50}
            height={50}
            src="/images/main-logo.webp"
            alt="Logo"
          />
          <p className="text-xs font-semibold">+1 (866) 520-9939</p>
        </Link>

        <div className="hidden font-semibold lg:flex">
          <ul className="flex list-none flex-wrap gap-5 text-sm uppercase">
            <li className="flex items-center justify-center gap-5">
              <Link href="/">Home</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/subscription-plans">Subscription Plans</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/articles">Articles</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/our-client">Our Client</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <FaBars className="cursor-pointer" size={22} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
