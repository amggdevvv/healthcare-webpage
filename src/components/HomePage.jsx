import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

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
        <div className="mb-12 mt-8 flex gap-6 sm:mt-16 ">
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
              className={"border border-white bg-gray-400 text-white "}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
