import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="my-16 h-full w-full">
      <div className="mx-6 mt-12 md:mx-[96px]">
        <div className="border-b border-gray-200 pb-20">
          <p className="text-lg font-semibold uppercase tracking-widest text-red-950">
            Trial Template
          </p>
          <h1 className="py-4 text-5xl font-semibold tracking-widest">
            Surgical Animations{" "}
          </h1>
          <p className="text-lg  font-semibold text-gray-500">
            At the vanguard of surgical animations for the legal domain. From
            demands to courtroom engagements, our animations depict surgical
            procedures with unmatched clarity, enhancing understanding and
            amplifying case potency. Fast-paced, intricate, and unequivocally
            persuasive.
          </p>
        </div>
        <div className="mt-8 flex justify-between border-b border-gray-200 pb-2">
          <p>Written By Trial Template Team</p>
          <p>February 26, 2024</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <Image
            src="/images/sugical-animation.jpg"
            alt="spine-illustration"
            width={1000}
            height={1000}
            layout="resposnive"
            className="object-cover"
          />
        </div>
          <div className="col-span-1 border-l border-gray-200 px-8">
            <p className="border-b border-gray-200 text-lg font-semibold uppercase tracking-widest text-red-950">
              Other Projects
            </p>
            <Link href={"/portfolios/portfolio1"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Truck Animation{" "}
              </h2>

              <p className="border-b border-gray-200 pb-8 font-semibold text-gray-600">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations...
              </p>
            </Link>
            <Link href={"/portfolios/portfolio3"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Custom Medical Graphics And Animations{" "}
              </h2>

              <p className="text-sm font-semibold text-gray-600 ">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
