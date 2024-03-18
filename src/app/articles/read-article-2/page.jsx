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
              src="/images/articles-image-2.webp"
              alt="Main-Logo"
              width={600}
              height={600}
            />
            <p className="pt-8 font-semibold tracking-wider">
              Everything Has Changed. We Have Too. We Can Help.
            </p>

            <p className="py-6 text-gray-500">
              Trial Template was created as a means to offer small to mid-sized
              law offices access to the same quality of litigation graphics that
              larger firms have access to, no matter the case value. Our goal is
              to tell your clients stories clearly from big to small trials,
              mediations and arbitrations. <br /> <br />
              Now, so much has changed. We are all learning what it is to make
              sacrifices and face circumstances beyond our control. We know
              these times are difficult so we are reducing the cost of Trial
              Template to $8000 for the year and increasing available custom
              graphics time which now includes marketing. In addition to
              litigation graphics, firms will have access to utilize their
              yearly allotted 20+ Trial Template custom hours with our staff to
              help create videos, illustrations, 3d-modeling and animations,
              website design, print production, and more. <br /> <br />
              We are proud to say that since sheltering in place, we have helped
              several clients increase their case value and come to successful
              settlements in mediation. We have created stunning marketing
              campaigns so that our clients can continue to put out their
              message and earn the attention of new clients, and we have helped
              several clients revamp out of date graphics and tackle projects
              that had been set to the back burner.
            </p>

            <div className="aspect-auto  w-full">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/373050487?h=8cd1dbfb55"
                width="800"
                height="500"
                className="w-full"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <p className="py-12 text-gray-500">
                We offer the highest return on investment and we want to help
                you get back up on your feet. Let&apos;s get to work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
