import React from "react";
import Image from "next/image";

const OurClient = () => {
  return (
    <div className="my-8 h-full w-full">
      <div className="flex flex-col justify-center px-20">
        <div className="flex min-h-40 flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold tracking-wider">
            Meet Our Clients
          </h1>
          <p>
            Some Of The Most Respected Law Firms In The Country Trust Trial
            Template To Deliver.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <div className="flex h-28 w-full items-center justify-center rounded-t-2xl bg-gray-200">
            <Image
              src="/images/dolan-image.webp"
              alt="dolan"
              width={250}
              height={250}
            />
          </div>
          <div className="rounded-b-2xl bg-gradient-to-br from-red-950 to-zinc-900 p-6 text-white">
            <p>
              “I highly recommend Trial Template for all graphics and
              presentation projects. If you have a story to tell in trial, Trial
              Template has the tools to help you create narratives the jury can
              understand.”
            </p>
            <div className="mt-6 flex gap-6">
              <Image
                src="/images/client-image-1.webp"
                className="rounded-full"
                alt="dolan"
                width={70}
                height={70}
              />
              <div>
                <h2 className="text-lg font-semibold">Quinton Cutlip</h2>
                <p className="text-xs text-gray-300">Dolan Law Firm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-40 w-full items-center justify-center rounded-t-2xl bg-gray-200">
            <Image
              src="/images/clancy-image.webp"
              alt="dolan"
              width={250}
              height={250}
            />
          </div>
          <div className="rounded-b-2xl bg-gradient-to-br from-red-950 to-zinc-900 p-6 text-white">
            <p>
              “100% of my cases are Plaintiffs’ personal injury. I use Trial
              Template 100% of the time and would not think of approaching
              mediation, an MSC or trial without Trial Template. It enables me
              to convert lower value cases into mid-range value cases, and turns
              mid-range cases into significant cases. This is a boon to my firm
              and my clients and it is not just for trial. They showed me how to
              turn cases into Trial Template presentations that I can create
              myself and then export them into movies. That really move the
              needle with adjusters and decision makers.
              <br />
              <br />
              Trial Template is such an effective tool that I now view evidence
              in terms of how I can present it. Whether it is the great quote
              from a deposition or a smoking gun email, I know that it will make
              it more powerful. This product adds value to every one of my cases
              and is a blast to work with.”
            </p>
            <div className="mt-6 flex gap-6">
              <Image
                src="/images/client-image-2.webp"
                className="rounded-full"
                alt="dolan"
                width={70}
                height={70}
              />
              <div>
                <h2 className="text-lg font-semibold">Pete Clancy</h2>
                <p className="text-xs text-gray-300">
                  Clancy & Diaz Personal Injury Attorneys
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-28 w-full items-center justify-center rounded-t-2xl bg-gray-200">
            <Image
              src="/images/brady-image.png"
              alt="dolan"
              width={250}
              height={250}
            />
          </div>
          <div className="rounded-b-2xl bg-gradient-to-br from-red-950 to-zinc-900 p-6 text-white">
            <p>
              “Trial Template is an essential tool for preparing your
              presentations for opening statements, direct, cross examination
              and final argument. Not only is it a huge timesaver but it helps
              you beautifully prepare and organize. We have take our litigation
              graphics to the next level with Trial Template.”
            </p>
            <div className="mt-6 flex gap-6">
              <Image
                src="/images/client-image-3.webp"
                className="rounded-full"
                alt="dolan"
                width={70}
                height={70}
              />
              <div>
                <h2 className="text-lg font-semibold">Steven J. Brady</h2>
                <p className="text-xs text-gray-300">Brady Law Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-52 w-full items-center justify-center rounded-t-2xl bg-gray-200">
            <Image
              src="/images/scott-image.webp"
              alt="dolan"
              width={250}
              height={250}
            />
          </div>
          <div className="rounded-b-2xl bg-gradient-to-br from-red-950 to-zinc-900 p-6 text-white">
            <p>
              “Trial Template creates presentations that are invaluable with the
              modern jury. They cultivate an effortless flow of graphics that
              sync up and support the verbal arguments in a well-paced flow that
              drives home every crucial point. Documents that would otherwise
              dull the brain come alive. Complicated concepts are explained
              through animations and diagrams that break it all down into easily
              digestible components. Trial Template&apos;s creative team works
              with you hand in hand to get it exactly right for your case and
              your style. They are truly an indispensable resource!”
            </p>
            <div className="mt-6 flex gap-6">
              <Image
                src="/images/client-image-3.webp"
                className="rounded-full"
                alt="dolan"
                width={70}
                height={70} 
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Brittany Dawn Ashley Gardiner Rogers
                </h2>
                <p className="text-xs text-gray-300">Scott Righthand P.C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
