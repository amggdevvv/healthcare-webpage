"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaVimeo } from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Footer = () => {
  return (
    <footer className="min-h-[140px] w-full bg-black">
      <div className="flex gap-3 flex-col md:flex-row items-center justify-between px-12 pt-4">
        <div className="flex items-center justify-center gap-4">
          <Image
            width={50}
            height={50}
            src="/images/main-logo.webp"
            alt="Logo"
          />
        </div>

        <div className="flex justify-center items-center font-semibold text-gray-400 ">
          <ul className="flex list-none md:flex-row  flex-col gap-2 md:gap-10 text-sm uppercase">
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/subscription-plans">Subscription Plans</Link>
            </li>
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/articles">Articles</Link>
            </li>
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/our-client">Our Clients</Link>
            </li>
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/portfolios">Portfolio</Link>
            </li>
            <li className="flex items-center justify-center duration-200 hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-6 my-3 border-b border-gray-500" />
      <div className="py-6 flex md:flex-row flex-col-reverse justify-between items-center px-12 gap-3">
        <p className="text-xs font-bold text-gray-400">
          {" "}
          &#169; 2024 Trial Template, LLC. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center gap-6 text-gray-400 md:mt-0">
          <Link className="duration-200 hover:text-gray-500" href="#">
            <FaLinkedin size={22} />
          </Link>
          <Link className="duration-200 hover:text-gray-500" href="#">
            <FaTwitter size={22} />
          </Link>
          <Link className="duration-200 hover:text-gray-500" href="#">
            <FaVimeo size={22} />
          </Link>
          <Link className="duration-200 hover:text-gray-500" href="#">
            <FaFacebook size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
