"use client";
import React from "react";
import { threeD_models_data as data } from "@/utils/data";
import { useRouter } from "next/navigation";

const Medical3DModels = () => {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <iframe
        title="vimeo-player"
        src={`${data.videoUrl}&autoplay=1&muted=1&background=1`}
        className="absolute left-0 top-0 h-full w-full object-cover"
        allow="autoplay"
        allowFullScreen
      ></iframe>

      {/* Content Overlay */}
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
        <h1 className="text-5xl font-extrabold">{data.title}</h1>
        <p className="mt-4 max-w-3xl text-lg">{data.description}</p>

        {/* Dynamic Sections */}
        <div className="mt-8 max-w-4xl space-y-6">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="rounded-lg bg-white bg-opacity-10 p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-2 text-lg">{section.content}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("/contact")}
          className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition-all hover:bg-gray-100"
        >
          Contact Us Now
        </button>
      </div>
    </div>
    // <div className="mx-auto max-w-6xl px-6 py-12">
    //   {/* Header Section */}
    //   <div className="rounded-lg bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] p-10 text-center text-white shadow-lg">
    //     <h1 className="text-5xl font-extrabold">{data.title}</h1>
    //     <p className="mt-4 text-lg opacity-90">{data.description}</p>
    //   </div>

    //   {/* Video Section */}
    //   <div className="mt-12 flex justify-center">
    //     <iframe
    //       title="vimeo-player"
    //       src={`${data.videoUrl}&autoplay=1&muted=1&background=1`}
    //       width="800"
    //       height="450"
    //       className="rounded-lg border border-gray-300 shadow-xl"
    //       allow="autoplay"
    //       allowFullScreen
    //     ></iframe>
    //   </div>

    //   {/* Dynamic Sections */}
    //   {data.sections.map((section, index) => (
    //     <div
    //       key={index}
    //       className="mt-12 rounded-xl border border-gray-200 bg-white p-8 shadow-md"
    //     >
    //       <h2 className="border-l-4 border-blue-500 pl-4 text-3xl font-bold text-gray-800">
    //         {section.title}
    //       </h2>
    //       <p className="mt-3 leading-relaxed text-gray-700">
    //         {section.content}
    //       </p>
    //     </div>
    //   ))}

    //   {/* Call to Action Section */}
    //   <div className="mt-16 rounded-lg bg-blue-700 p-12 text-center text-white shadow-lg">
    //     <h2 className="text-3xl font-bold">{data.cta.title}</h2>
    //     <p className="mt-2 text-lg opacity-90">{data.cta.content}</p>

    //     <a href={data.cta.buttonLink}>
    //       <button className="mt-6 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition-all hover:scale-105 hover:bg-gray-100">
    //         {data.cta.buttonText}
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
};

export default Medical3DModels;
