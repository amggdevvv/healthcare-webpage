"use client";
import React from "react";
import Link from "next/link";
import { portfolioData } from "../page";

const PortfolioPage = ({ params }) => {
  const portrfolio = portfolioData[params.id - 1];
  console.log("Portfolio Data==>", portrfolio);

  return (
    <div className="my-16 h-full w-full">
      <div className="mx-6 mt-12 md:mx-[96px]">
        <div className="border-b border-gray-200 pb-20">
          <p className="text-lg font-semibold uppercase tracking-widest text-red-950">
            Trial Template
          </p>
          <h1 className="py-4 text-5xl font-semibold tracking-widest">
            {portrfolio.title}
          </h1>
          <p className="text-lg  font-semibold text-gray-500">
            {portrfolio.description}
          </p>
          {/* <p>{portfolioItem.description}</p> */}
        </div>
        <div className="mt-8 flex justify-between border-b border-gray-200 pb-2">
          <p>Written By Trial Template Team</p>
          <p>February 26, 2024</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-2 aspect-auto w-full">
            <iframe
              title="vimeo-player"
              src={portrfolio.video}
              width="800"
              height="500"
              className="w-full"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-1 h-[500px] overflow-y-scroll border-l border-gray-200 px-8">
            <p className="border-b border-gray-200 text-lg font-semibold uppercase tracking-widest text-red-950">
              Other Projects
            </p>
            {portfolioData.map((data, index) => (
              <Link key={index} href={`/portfolios/${index + 1}`} className="">
                <h2 className="py-3 text-2xl font-semibold tracking-wide">
                  {data.title}
                </h2>

                <div className="h-[5rem] overflow-hidden border-b border-gray-200 pb-8 font-semibold text-gray-600">
                  <p className="line-clamp-3">{data.description}</p>
                </div>
              </Link>
            ))}
            {/* <Link href={"/portfolios/portfolio2"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Custom Medical Graphics and Animations{" "}
              </h2>

              <p className="border-b border-gray-200 pb-8 font-semibold text-gray-600">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical...
              </p>
            </Link>
            <Link href={"/portfolios/portfolio3"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Surgical Animations{" "}
              </h2>

              <p className="font-semibold text-gray-600 ">
                At the vanguard of surgical animations for the legal domain.
                From demands to courtroom engagements, our animations depict
                surgical...
              </p>
            </Link> */}
          </div>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        id="video"
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
      >
        <source
          src="https://player.vimeo.com/video/661490695?h=a2422cc5ba"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortfolioPage;
