"use client";
import React from "react";
import Link from "next/link";

const portfolioData = [
  {
    url: "https://player.vimeo.com/video/898607139?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/898607139?h=cc3dbdaaac",
    title: "Truck Animation",
    description:
      "Spearheading truck animations for the legal landscape. From initial demands to court confrontations, our animations vividly depict truck scenarios, enhancing comprehension and bolstering case impact. Efficient, precision-driven, and crafted to captivate the courtroom.",
  },

  {
    url: "https://player.vimeo.com/video/742413974?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/742413974?h=9abac872fc",
    title: "Custom Medical Graphics And Animations",
    description:
      " In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/849565783?h=4272b3347b?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/849565783?h=4272b3347b",
    title: "Wrist Arthroscopy",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/849556238?h=ca29201c75?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/849556238?h=ca29201c75",
    title: "2023 Interactive Location of Injuries Presentation",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/838423197?h=eec94f45e5?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/838423197?h=eec94f45e5",
    title: "Collision Animation Evolution",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/922132591?h=2506773c63?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/922132591?h=2506773c63",
    title: "RV Collision",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/728630859?h=adc178befa?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/728630859?h=adc178befa",
    title: "Hyperlinked Timelines",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/728621053?h=88b7bde085?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/728621053?h=88b7bde085",
    title: "Custom Illustrations",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/359122413?h=34ba9f54c5?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/359122413?h=34ba9f54c5",
    title: "TBI and Axonal Shearing",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },

  {
    url: "https://player.vimeo.com/video/346308016?h=d4e5dbed31?muted=1&autoplay=1&loop=1&background=1&app_id=122963",
    video: "https://player.vimeo.com/video/346308016?h=d4e5dbed31",
    title: "Rural Truck Collision",
    description:
      "In addition to being helpful for understanding injuries, animations can also be used to explain medical procedures. For example, it can show how a surgeon will repair a broken bone or spinal fusion. Or, it can depict the steps involved in a particular medical operation. This can be helpful for jurors to understand the nature of the injuries and the treatment that the injured person has received.",
  },
];

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
