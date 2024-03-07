import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    // <div className="flex h-screen w-full flex-col justify-center">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     id="video"
    //     class="absolute z-[-1] w-full max-w-none "
    //   >
    //     <source src="/videos/video-1.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    //   <div className="absolute left-0 right-0 top-32">
    //     <div className="">
    //       <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-400">
    //         Trail Template
    //       </p>
    //       <h2 className="mx-auto w-80 pt-3 text-center text-4xl font-semibold capitalize text-white">
    //         Flat Rate Subscriptions For Trial Graphics
    //       </h2>
    //       <p className="pt-3 text-center text-sm font-bold tracking-wide text-gray-400">
    //         Litigation & Medical Graphics, Illustrations and Animations
    //       </p>
    //     </div>
    //     <div className="mb-12 mt-[250px] flex items-center justify-center gap-6 sm:mt-[400px]">
    //       <Link href="#">
    //         <Button
    //           name={"Explore This"}
    //           type={"button"}
    //           className={"bg-white text-black"}
    //         />
    //       </Link>
    //       <Link href="#">
    //         <Button
    //           name={"Scheduled A Demo"}
    //           type={"button"}
    //           className={"border-wite border bg-gray-400 text-white"}
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <main className="flex h-full w-full flex-col gap-10">
      <div className="relative flex h-screen flex-col justify-center">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="absolute z-[-1] w-full max-w-none"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Trail Template
            </p>
            <h2 className="w-full max-w-xs pt-3 text-lg font-semibold capitalize text-white sm:max-w-lg sm:text-4xl lg:max-w-2xl xl:max-w-3xl">
              Flat Rate Subscriptions For Trial Graphics
            </h2>
            <p className="pt-3 text-sm font-bold tracking-wide text-gray-400">
              Litigation & Medical Graphics, Illustrations and Animations
            </p>
          </div>
          <div className="mb-12 mt-8 flex gap-6 sm:mt-16">
            <Link href="#">
              <Button
                name={"Explore This"}
                type={"button"}
                className={"bg-white text-black"}
              />
            </Link>
            <Link href="#">
              <Button
                name={"Schedule A Demo"}
                type={"button"}
                className={"border border-white bg-gray-400 text-white"}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="flex h-screen"
          style={{
            backgroundImage: `url("/images/spine-illustration-image.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-20 mt-14 w-[450px]">
            <p className="font-semibold uppercase tracking-widest text-red-950">
              Trial Template
            </p>
            <h1 className="py-3 text-4xl font-semibold tracking-wide">
              Illustrations
            </h1>
            <p className="text-pretty font-semibold tracking-widest text-gray-700">
              Illustrations can help to make complex injuries more
              understandable.
            </p>
          </div>
        </div>
        <div className="mx-auto mb-20 flex max-w-xl flex-col items-center justify-end  sm:flex-row md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <div className="w-[300px] lg:w-[400px] xl:w-[500px]">
            <Link href="#">
              <Button
                name={"View Illustrations"}
                type={"button"}
                className={"bg-black text-white"}
              />
            </Link>
          </div>
          <div className="w-full">
            <p className="text-sm text-black">
              Illustrations can help to make complex injuries more
              understandable. This is especially important in cases involving
              technical or medical experts who need to opine on a particular
              aspect of the injury. Our illustrations can be animated, printed,
              or used in a hyperlinked presentation that increases the
              effectiveness of the work.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex h-screen flex-col justify-center">
        <video autoPlay loop muted id="video" className=" z-[-1] object-cover">
          <source src="/videos/overview-of-injuries.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 top-[200px] flex flex-col items-center justify-end">
          <div className="flex items-center justify-center gap-6">
            <Link href="#">
              <Button
                name={"View Presentation"}
                type={"button"}
                className={"border border-white bg-black text-white"}
              />
            </Link>
            <p className="text-white">
              You may have een a Powerpoint before. However you havn’t seen
              anything like the ones that we design. The jury should be able to
              understand the evidence and the legal arguments without getting
              bogged down in technical details. Second, the presentations should
              be persuasive. The lawyer should use clear and powerful language
              to convince the jury that the plaintiff is entitled to
              compensation. Third, the presentation should be visually appealing
              and hold the attention of the jury.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-white">
        <div className="col-span-1">Left Section</div>
        <div className="col-span-2">
          <Image
            src="/images/ayers-rd-animation.webp"
            alt="ayers-rd-animation"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
