"use client";
import React from "react";
import { interactive_media_data as data } from "@/utils/data";
import { useRouter } from "next/navigation";

const DemandLetterTemplate = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      {/* Hero Section with Split Layout */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-8 lg:flex-row lg:justify-between lg:px-20">
        {/* Text Content */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-extrabold">{data.title}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{data.description}</p>

          <button
            onClick={() => router.push(data.cta.buttonLink)}
            className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition-all hover:bg-gray-100"
          >
            {data.cta.buttonText}
          </button>
        </div>

        {/* Video Background (Split Layout) */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg lg:h-[600px] lg:w-1/2">
          <iframe
            title="vimeo-player"
            src={data.videoUrl}
            className="absolute left-0 top-0 h-full w-full object-cover"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Content Sections with Cards */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-8 py-16 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="transform rounded-lg bg-gray-800 p-6 text-center shadow-lg transition-all hover:scale-105"
            >
              <span className="text-4xl">{section.icon}</span>
              <h2 className="mt-4 text-2xl font-semibold">{section.title}</h2>
              <p className="mt-2 text-gray-300">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <button
          onClick={() => router.push(data.cta.buttonLink)}
          className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition-all hover:bg-gray-100"
        >
          {data.cta.buttonText}
        </button>
      </div>
    </div>
    // <div className="relative h-screen w-full overflow-hidden">
    //   {/* Background Video */}
    //   <iframe
    //     title="vimeo-player"
    //     src={data.videoUrl}
    //     className="absolute left-0 top-0 h-full w-full object-cover"
    //     allow="autoplay"
    //     allowFullScreen
    //   ></iframe>

    //   {/* Content Overlay */}
    //   <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 px-6 text-center text-white">
    //     <h1 className="text-5xl font-extrabold">
    //       {data.title}
    //     </h1>
    //     <p className="mt-4 max-w-3xl text-lg">
    //       {data.description}
    //     </p>

    //     {/* Dynamic Sections */}
    //     <div className="mt-8 max-w-4xl space-y-6">
    //       {data.sections.map((section, index) => (
    //         <div
    //           key={index}
    //           className="rounded-lg bg-white bg-opacity-10 p-6 shadow-lg"
    //         >
    //           <h2 className="text-2xl font-bold">{section.title}</h2>
    //           <p className="mt-2 text-lg">{section.content}</p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Call to Action Button */}
    //     <a href={data.cta.buttonLink}>
    //       <button className="mt-8 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700">
    //         {data.cta.buttonText}
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
};

export default DemandLetterTemplate;
