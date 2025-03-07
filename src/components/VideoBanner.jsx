import Image from "next/image";
import React from "react";

const VideoBanner = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative z-[-1] h-72 w-full">
        <div className="absolute h-full w-full bg-transparent/70"></div>
        <video
          autoPlay
          loop
          muted
          id="video"
          className=" h-full w-full  object-cover"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute left-0 top-1/4 z-10 flex w-full flex-col items-center text-center text-white">
        <h1 className="text-3xl font-semibold uppercase tracking-widest md:text-5xl">
          {title}
        </h1>
        <p className="py-4 text-lg uppercase tracking-widest">{description}</p>

        <Image
          src="/images/main-logo.webp"
          alt="Main-Logo"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default VideoBanner;
