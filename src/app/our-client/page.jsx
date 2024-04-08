import React from "react";
import Image from "next/image";

const cardContent = [
  {
    logo: "/images/dolan-image.webp",
    review:
      "“I highly recommend Trial Template for all graphics and presentation projects. If you have a story to tell in trial, Trial Template has the tools to help you create narratives the jury can understand.”",
    clientImage: "/images/client-image-1.webp",
    clientName: "Quinton Cutlip",
    organization: "Dolan Law Firm",
  },
  {
    logo: "/images/scott-image.webp",
    review:
      "“Trial Template creates presentations that are invaluable with the modern jury. They cultivate an effortless flow of graphics that sync up and support the verbal arguments in a well-paced flow that drives home every crucial point. Documents that would otherwise dull the brain come alive. Complicated concepts are explained through animations and diagrams that break it all down into easily digestible components. Trial Template's creative team works with you hand in hand to get it exactly right for your case and your style. They are truly an indispensable resource!”",
    clientImage: "/images/client-image-4.webp",
    clientName: "Brittany Dawn Ashley Gardiner Rogers",
    organization: "Scott Righthand P.C.",
  },
  {
    logo: "/images/cartwright-image.webp",
    review:
      "“I have always been a strong proponent of visual presentation, and was a very early user of the first version of PowerPoint. I have used it in trial, and more importantly, in mediation for well over 10 years. We have prepared them “in-house” with great success. However, using Trial Template, with the help of Mathew, We have taken it to a whole new level. The slides are customized for plaintiffs trial work and include ready-made exhibits that would cost many thousands of dollars for you to order them from a vendor. I can't recommend this product, and service, highly enough. Get it now!”",
    clientImage: "/images/client-image-7.webp",
    clientName: "Brittany Dawn Ashley Gardiner Rogers",
    organization: "Cartwright Law Firm",
  },
  {
    logo: "/images/clancy-image.webp",
    review:
      "“100% of my cases are Plaintiffs’ personal injury. I use Trial Template 100% of the time and would not think of approaching mediation, an MSC or trial without Trial Template. It enables me to convert lower value cases into mid-range value cases, and turns mid-range cases into significant cases. This is a boon to my firm and my clients and it is not just for trial. They showed me how to turn cases into Trial Template presentations that I can create myself and then export them into movies. That really move the needle with adjusters and decision makers. Trial Template is such an effective tool that I now view evidence in terms of how I can present it. Whether it is the great quote from a deposition or a smoking gun email, I know that it will make it more powerful. This product adds value to every one of my cases and is a blast to work with.”",
    clientImage: "/images/client-image-2.webp",
    clientName: "Pete Clancy",
    organization: "Clancy & Diaz Personal Injury Attorneys",
  },

  {
    logo: "/images/rls-image.webp",
    review:
      "“Trial Template has expanded our firm's ability to create and utilize trial graphics and presentations, which have been instrumental in increasing the value of our cases. Trial Template is extremely user-friendly and the staff is very responsive in answering questions and aiding in the creation of our presentations.”",
    clientImage: "/images/client-image-5.webp",
    clientName: "Joseph Lucia    ",
    organization: "Rains, Lucia, Stern, St. Phalle & Silver, PC",
  },
  {
    logo: "/images/brady-image.png",
    review:
      "“Trial Template is an essential tool for preparing your presentations for opening statements, direct, cross examination and final argument. Not only is it a huge timesaver but it helps you beautifully prepare and organize. We have take our litigation graphics to the next level with Trial Template.”",
    clientImage: "/images/client-image-3.webp",
    clientName: "Steven J. Brady",
    organization: "Brady Law Group",
  },

  {
    logo: "/images/dolan-image.webp",
    review:
      "“In this age when most, if not all, jurors have been watching CSI on TV for a decade and expect a flashy “beyond a reasonable doubt” presentation to be laid out for them by counsel, Trial Template's abilities to assist in telling a story visually, captivating jurors and holding their attention, are beyond reproach. This product has never let me down.”",
    clientImage: "/images/client-image-8.webp",
    clientName: "Matthew Gramly",
    organization: "Dolan Law Firm",
  },

  {
    logo: "/images/dolan-image.webp",
    review:
      "“With Trial Template I have been able to turn my ideas for trial graphics into reality. Their library of animations and graphics have allowed me and my firm to take our presentations to a whole new and customized level. If you can imagine it, you can easily produce it with Trial Template.”",
    clientImage: "/images/client-image-6.webp",
    clientName: "Chris Dolan",
    organization: "Dolan Law Firm",
  },
];

const OurClient = () => {
  return (
    <div className="my-8 h-full w-full">
      <div className="flex flex-col justify-center px-20">
        <div className="flex min-h-40 flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold tracking-wider text-center">
            Meet Our Clients
          </h1>
          <p className="font-medium text-gray-600 text-center">
            Some Of The Most Respected Law Firms In The Country Trust Trial
            Template To Deliver.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 columns-1 gap-5 px-8 md:columns-2 lg:px-24 lg:columns-3">
        {cardContent.map((client, index) => (
          <div key={index} className="relative mb-3">
            <div className="flex flex-col overflow-hidden rounded-lg">
              <div className="flex h-36 w-full items-center justify-center rounded-t-2xl bg-gray-200 p-8">
                <Image
                  src={client.logo}
                  alt={client.organization}
                  width={500}
                  height={500}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="rounded-b-2xl bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] p-6 text-white">
                <p>{client.review}</p>
                <div className="mt-6 flex gap-6">
                  <Image
                    src={client.clientImage}
                    className="rounded-full"
                    alt={client.clientName}
                    width={70}
                    height={70}
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {client.clientName}
                    </h2>
                    <p className="text-xs text-gray-300">
                      {client.organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
