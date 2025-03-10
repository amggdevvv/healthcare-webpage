import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articleData } from "@/utils/data";
import VideoBanner from "@/components/VideoBanner";

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
      <VideoBanner
        title="TRIAL TEMPLATE ARTICLES"
        description="GRAPHICS, ILLUSTRATIONS & ANIMATIONS"
      />
      <div className="mx-16 my-[8%] grid h-full grid-cols-1 items-center gap-6  md:grid-cols-2">
        {articleData?.map((data) => (
          <div
            key={data?.id}
            className="grid min-h-[200px] max-w-[600px] grid-cols-1 gap-6 rounded-md border border-gray-200 px-6 py-10 md:grid-cols-2 md:gap-8"
          >
            <div>
              <Image
                src={data?.img_url}
                width={500}
                height={500}
                alt="article-1"
                className="aspect-video h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-medium tracking-wide md:text-2xl">
                {data?.title}
              </h1>
              <Link
                href={`/articles/${data?.articleId}`}
                className="text-sm font-semibold"
              >
                <p className="my-2 line-clamp-4 text-sm text-gray-400">
                  {data?.description}
                </p>
              </Link>
            </div>
          </div>
        ))}
        {/* <div className="grid min-h-[200px] max-w-[600px] grid-cols-1 gap-6 rounded-md border border-gray-200 px-6 py-10 md:grid-cols-2 md:gap-8">
          <div>
            <Image
              src={"/images/articles-image-1.webp"}
              width={500}
              height={500}
              alt="article-1"
              className="aspect-video h-full w-full object-cover"
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
              className="aspect-video h-full w-full object-cover"
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
        </div> */}
      </div>
    </div>
  );
};

export default Article;
