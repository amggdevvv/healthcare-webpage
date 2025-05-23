import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

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

// Mark the component as a Server Component and make it async
async function Page() {
  return (
    <main className="my-20 flex h-full w-full flex-col">
      <div className="mt-16 grid grid-cols-1 gap-8 px-8 lg:grid-cols-2">
        {portfolioData.map((portfolio, index) => (
          <Link
            key={index}
            href={`/portfolios/${index + 1}`}
            className="flex-shrink-1 group w-full cursor-pointer overflow-hidden"
          >
            <div className="relative w-full group-hover:opacity-100">
              <div className="h-0 pt-[56.25%]">
                <iframe
                  src={portfolio.url}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={portfolio.title}
                  data-ready="true"
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>

              <div className="absolute left-12 lg:top-[50%] top-[20%] z-10 flex  sm:min-w-[500px] w-[300px] flex-col">
                <h3 className="text-base font-semibold tracking-wider text-white lg:text-xl pb-6">
                  {portfolio.title}
                </h3>
                <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full text-xs tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base lg:text-sm">
                  {portfolio.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Page;
