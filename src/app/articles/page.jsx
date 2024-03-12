import React from "react";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
  return (
    <div className="h-full w-full">
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
          <h1 className="text-3xl font-semibold tracking-widest md:text-5xl">
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
      </div>
      <div className="h-full flex flex-col items-center my-[8%] mx-16">
        <div className="grid max-w-[600px] md:grid-cols-2 grid-cols-1 md:gap-0 gap-6 border-b border-gray-200 pb-10">
          <div>
            <Image
              src={"/images/articles-image-1.webp"}
              width={250}
              height={250}
              alt="article-1"
            />
          </div>
          <div>
            <h1 className="md:text-2xl text-xl font-medium tracking-wide">
              2021 SFTLA Ski And CLE Presentation And Materials
            </h1>
            <p className="py-2 text-sm text-gray-400">
              Trial template is a world of resources…
            </p>
            <Link href={"#"} className="text-sm font-semibold">
              Read More...
            </Link>
          </div>
          
        </div>
        <div className="grid max-w-[600px] md:grid-cols-2 grid-cols-1 md:gap-0 gap-6 border-b border-gray-200 py-10">
          <div>
            <Image
              src={"/images/articles-image-2.webp"}
              width={250}
              height={250}
              alt="article-1"
            />
          </div>
          <div>
            <h1 className="md:text-2xl text-xl font-medium tracking-wide">
              2021 SFTLA Ski And CLE Presentation And Materials
            </h1>
            <p className="py-2 text-sm text-gray-400">
              Trial template is a world of resources…
            </p>
            <Link href={"#"} className="text-sm font-semibold">
              Read More...
            </Link>
          </div>
          
        </div>
        {/* <div className="grid grid-cols-2">
          <div>left</div>
          <div>right</div>
        </div> */}
      </div>
    </div>
  );
};

export default Article;
