"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] py-3 ">
        <p className="text-center text-sm font-semibold tracking-wider text-white">
          <span className="italic">
            “With Trial Template I have been able to turn my ideas for trial
            graphics into reality…”
          </span>
          — Chris Dolan, The Dolan Law Firm
        </p>
      </div>
      <div className="flex items-center justify-between bg-white px-8 py-1 lg:px-24">
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
          <ul className="flex list-none flex-wrap gap-5 text-xs uppercase tracking-widest">
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
              <Link href="/our-client">Our Clients</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/test">Portfolio</Link>
              <div className="h-6 border-r border-gray-500" />
            </li>
            <li className="flex items-center justify-center gap-5">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <FaBars
            className="cursor-pointer"
            size={22}
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div
            // className={`${!menuToggle ? "hidden" : "flex"}
            //             absolute right-0 top-32 z-10 mx-4 my-2 min-w-[380px] rounded-xl
            //             p-6 text-white bg-white border border-gray-200`}

            className={`absolute right-0 z-20 mx-auto my-2 min-w-[380px] bg-white overflow-hidden text-white transition-all duration-300 ${
              menuToggle ? "translate-y-0 top-32 " : "translate-y-[-120%] top-0"
            }`}
          >
            <ul className="flex list-none flex-col items-start justify-end over tracking-wider">
              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-white bg-[#3f444b] w-full px-5 py-2"
              >
                <Link href={"/"}>Home </Link>
              </li>
              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-gray-500 w-full px-5 py-2 hover:bg-[#3f444b] hover:text-white"
              >
                <Link href="/subscription-plans">Subscription Plans</Link>
              </li>
              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-gray-500 w-full px-5 py-2 hover:bg-[#3f444b] hover:text-white"
              >
                <Link href="/articles">Articles</Link>
              </li>

              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-gray-500 w-full px-5 py-2 hover:bg-[#3f444b] hover:text-white"
              >
                <Link href="/our-client">Our Clients</Link>
              </li>
              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-gray-500 w-full px-5 py-2 hover:bg-[#3f444b] hover:text-white"
              >
                <Link href="/test">Portfolio</Link>
              </li>
              <li
                onClick={()=>setMenuToggle(!menuToggle)}
                className="cursor-pointer text-[16px] font-medium text-gray-500 w-full px-5 py-2 hover:bg-[#3f444b] hover:text-white"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="flex lg:hidden">
          <FaBars
            className="cursor-pointer"
            size={22}
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div
            className={`absolute right-0 top-32 z-10 mx-4 my-2 min-w-[380px] rounded-xl border border-gray-200 bg-white p-6 text-white transition-all duration-300 ${
              menuToggle ? "translate-y-0" : "translate-y-[-100%]"
            }`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/">Home </Link>
              </li>
              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/subscription-plans">Subscription Plans</Link>
              </li>
              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/articles">Articles</Link>
              </li>

              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/our-client">Our Clients</Link>
              </li>
              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/portfolios">Portfolios</Link>
              </li>
              <li
                // onClick={handlePopUp}
                className="cursor-pointer text-[16px] font-medium text-gray-500 hover:text-black"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
