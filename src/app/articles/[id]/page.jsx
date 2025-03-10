import { articleData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import VideoBanner from "@/components/VideoBanner";

const ArticlePage = ({ params }) => {
  console.log("Params===>", params);

  const article = articleData.find(
    (article) => article.articleId === params?.id,
  );

  console.log("Data===>", article);

  return (
    <div className="h-full w-full">
      <div className="">
        <VideoBanner
          title=" TRIAL TEMPLATE ARTICLES"
          description="GRAPHICS, ILLUSTRATIONS & ANIMATIONS"
        />

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
