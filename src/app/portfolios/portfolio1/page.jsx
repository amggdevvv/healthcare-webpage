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
            Truck Animation
          </h1>
          <p className="text-lg  font-semibold text-gray-500">
            Spearheading truck animations for the legal landscape. From initial
            demands to court confrontations, our animations vividly depict truck
            scenarios, enhancing comprehension and bolstering case impact.
            Efficient, precision-driven, and crafted to captivate the courtroom.
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
              src="https://player.vimeo.com/video/898607139?h=cc3dbdaaac"
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
            <Link href={"#"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Custom Medical Graphics and Animations{" "}
              </h2>

              <p className="border-b border-gray-200 pb-8 font-semibold text-gray-600">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical...
              </p>
            </Link>
            <Link href={"#"} className="">
              <h2 className="py-3 text-2xl font-semibold tracking-wide">
                Custom Medical Graphics and Animations{" "}
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
