import { articleData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticlePage = ({ params }) => {
  console.log("Params===>", params);

  const article = articleData.find(
    (article) => article.articleId === params?.id,
  );

  console.log("Data===>", article);

  return (
    <div className="h-full w-full">
      <div className="">
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
        <div className="mx-20">
          <div className="mx-auto my-16 flex max-w-[900px] flex-col items-center justify-center text-center">
            <Image
              src={article?.img_url}
              alt="Main-Logo"
              width={600}
              height={600}
            />
            <p className="pt-8 font-semibold tracking-wider">
              {article?.title}
            </p>
            <p className="pt-2 tracking-wider text-gray-500">
              {article?.sub_title}
            </p>
            <p className="py-6 text-gray-500">{article?.description}</p>
            <Link href={"#"}>
              <p className="pb-6 font-medium tracking-wider text-[#c36] hover:text-blue-950">
                {article?.sub_title2}
              </p>
            </Link>
            <p className="text-gray-500">{article?.details}</p>
            <p className="py-6 text-gray-500">{article?.sub_title3}</p>

            <div className="aspect-auto w-full">
              <iframe
                title="vimeo-player"
                src={article?.video_url}
                width="800"
                height="500"
                className="w-full"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <p className="py-12 text-gray-500">{article?.offer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
