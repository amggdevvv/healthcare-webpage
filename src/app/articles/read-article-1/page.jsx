"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ArticlePage() {
  // const [articleData, setArticleData] = useState(null);
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("Query parameter==>", id);

  // useEffect(() => {
  //   if (id) {
  //     const article = articlesData.find((article) => article.id === id);
  //     setArticleData(article);
  //   }
  // }, [id]);
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
              src="/images/articles-image-1.webp"
              alt="Main-Logo"
              width={600}
              height={600}
            />
            <p className="pt-8 font-semibold tracking-wider">
              2021 SFTLA Ski And CLE Presentation And Materials
            </p>
            <p className="pt-2 tracking-wider text-gray-500">
              A RESOURCE LIST OF VENDORS AND RESOURCES.
            </p>
            <p className="py-6 text-gray-500">
              We were honored to present at this year&apos;s SFTLA Ski and CLE
              conference where we discussed various graphic resources that will
              decrease your case costs and increase case value. Thank you for
              attending! Grab your “Goody Bag” resources by clicking the link
              below. Your download will include a pre-made file structure to
              help you organize graphics projects as well as a file of tutorials
              containing resources for you including how to use Google Earth,
              how to give effective presentations, and using radiology software.
              A PDF version of our SFTLA presentation is also included.
            </p>
            <Link href={"#"}>
              <p className="pb-6 font-medium tracking-wider text-[#c36] hover:text-blue-950">
                GET YOUR SFTLA GOODY BAG BY CLICKING HERE
              </p>
            </Link>
            <p className="text-gray-500">
              CONTACT US by calling 866.504.8647 or email
              info@trialtemplate.com. You can email Matthew Kimmins directly at
              matthew.kimmins@trialtemplate.com
            </p>
            <p className="py-6 text-gray-500">
              TRIAL TEMPLATE IS HERE TO ASSIST YOU. WHETHER OR NOT YOU ARE A
              CUSTOMER, WE ARE ALWAYS AVAILABLE TO ANSWER QUESTIONS AND HELP
              OUT.
            </p>

            <div className="aspect-auto w-full">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/294456446?h=2210fa8966"
                width="800"
                height="500"
                className="w-full"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
