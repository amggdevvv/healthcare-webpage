import React from "react";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="my-16 h-full w-full">
      <div className="mx-6 mt-12 md:mx-[96px]">
        <div className="border-b border-gray-200 pb-20">
          <p className="text-lg font-semibold uppercase tracking-widest text-red-950">
            Trial Template
          </p>
          <h1 className="py-4 text-5xl font-semibold tracking-widest">
            Custom Medical Graphics And Animations{" "}
          </h1>
          <p className="text-lg  font-semibold text-gray-500">
            In addition to being helpful for understanding injuries, animations
            can also be used to explain medical procedures. For example, it can
            show how a surgeon will repair a broken bone or spinal fusion. Or,
            it can depict the steps involved in a particular medical operation.
            This can be helpful for jurors to understand the nature of the
            injuries and the treatment that the injured person has received.
          </p>
        </div>
        <div className="mt-8 flex justify-between border-b border-gray-200 pb-2">
          <p>Written By Trial Template Team</p>
          <p>February 26, 2024</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-2 aspect-auto w-full">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/742413974?h=9abac872fc"
              width="800"
              height="500"
              className="w-full"
              frameborder="0"
              allowfullscreen
            ></iframe>
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
                Surgical Animations{" "}
              </h2>

              <p className="text-sm font-semibold text-gray-600 ">
                At the vanguard of surgical animations for the legal domain.
                From demands to courtroom engagements, our animations depict
                surgical...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
