import React from "react";
import Image from "next/image";
import Link from "next/link";

// const articlesData = [
//   {
//     image: "/images/articles-image-1.webp",
//     title: "2021 SFTLA Ski And CLE Presentation And Materials",
//     description: "Trial template is a world of resources…",
//   },
//   {
//     image: "/images/articles-image-2.webp",
//     title: "Everything Has Changed. We Have Too. We Can Help.",
//     description:
//       "Trial Template was created as a means to offer small to mid-sized law offices access to the same quality of litigation graphics that larger firms have access to, no matter the case value. Our goal is to tell your clients stories clearly from big to s…",
//   },
// ];

// articlesData.forEach((obj, index) => (obj.id = Date.now() + index));

const Article = () => {
  // console.log("Articles data==>", articlesData);
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
      <div className="mx-16 my-[8%] grid h-full md:grid-cols-2 grid-cols-1 items-center  gap-6">
        <div className="grid min-h-[200px] max-w-[600px] grid-cols-1 gap-6 rounded-md border border-gray-200 px-6 py-10 md:grid-cols-2 md:gap-8">
          <div>
            <Image
              src={"/images/articles-image-1.webp"}
              width={500}
              height={500}
              alt="article-1"
              className="object-cover w-full h-full aspect-video"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium tracking-wide md:text-2xl">
              2021 SFTLA Ski And CLE Presentation And Materials
            </h1>
            <p className="py-2 text-sm text-gray-400">
              Trial template is a world of resources…
            </p>
            <Link
              href={"/articles/read-article-1"}
              className="text-sm font-semibold"
            >
              Read More...
            </Link>
          </div>
        </div>
        <div className="grid min-h-[200px] max-w-[600px] grid-cols-1 gap-6 rounded-md border border-gray-200 px-6 py-10 md:grid-cols-2 md:gap-8">
          <div>
            <Image
              src={"/images/articles-image-2.webp"}
              width={500}
              height={500}
              alt="article-1"
              className="object-cover w-full h-full aspect-video"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium tracking-wide md:text-2xl">
              Everything Has Changed. We Have Too. We Can Help.{" "}
            </h1>
            <p className="truncate py-2 text-sm text-gray-400">
              Trial Template was created as a means to offer small to mid-sized
              law offices access to the same quality of litigation graphics that
              larger firms have access to, no matter the case value. Our goal is
              to tell your clients stories clearly from big to s…{" "}
            </p>
            <Link
              href={"/articles/read-article-2"}
              className="text-sm font-semibold"
            >
              Read More...
            </Link>
          </div>
        </div>

        {/* {articlesData.map((article, index) => (
          <div
            key={index}
            className="mb-8 grid max-w-[600px] grid-cols-1 gap-6 border-b border-gray-200 pb-10 md:grid-cols-2 md:gap-0"
          >
            <div>
              <Image
                src={article.image}
                width={250}
                height={250}
                alt="article-1"
              />
            </div>
            <div>
              <h1 className="text-xl font-medium tracking-wide md:text-2xl">
                {article.title}
              </h1>
              <p className="py-2 text-sm text-gray-400">
                {article.description}{" "}
              </p>
              <Link
                href={`/articles/${article.id}`}
                as={`/articles/${article.id}`}
                className="text-sm font-semibold"
                passHref
              >
                Read More...
              </Link>
            </div>
          </div>
        ))} */}

        {/* <div className="grid grid-cols-2">
          <div>left</div>
          <div>right</div>
        </div> */}
      </div>
    </div>
  );
};

export default Article;
