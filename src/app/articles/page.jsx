import React from "react";
import Image from "next/image";

const Article = () => {
  return (
    <div className="h-screen w-full">
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
        <div className="absolute flex flex-col items-center left-0 top-1/4 z-10 w-full text-center text-white">
          <h1 className="text-5xl font-semibold tracking-widest">
            TRIAL TEMPLATE ARTICLES
          </h1>
          <p className="py-4 text-lg tracking-widest">
            GRAPHICS, ILLUSTRATIONS & ANIMATIONS
          </p>

          <Image
            src="/images/main-logo.webp"
            alt="Main-Logo"
            width={70}
            height={70}
            
          />
        </div>

        <div className="flex flex-col items-center">
          <div>
            Articales 1
          </div>
          <div>
            Article 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
