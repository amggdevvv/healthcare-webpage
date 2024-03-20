import React from "react";
import Link from "next/link";
import Image from "next/image";

function PortFolios() {
  return (
    <div className="my-12 h-full w-full">
      <div className="mx-[96px] mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Link href={"/portfolios/portfolio1"} className="group cursor-pointer">
          <div className="relative border-b border-gray-200 group-hover:opacity-100">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Truck Animation
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations vividly
                depict truck scenarios, enhancing comprehension and bolstering
                case impact. Efficient, precision-driven, and crafted to
                captivate the courtroom.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio1"} className="group cursor-pointer">
          <div className="relative border-b border-gray-200 group-hover:opacity-100">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Truck Animation
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations vividly
                depict truck scenarios, enhancing comprehension and bolstering
                case impact. Efficient, precision-driven, and crafted to
                captivate the courtroom.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio1"} className="group cursor-pointer">
          <div className="relative border-b border-gray-200 group-hover:opacity-100">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Truck Animation
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations vividly
                depict truck scenarios, enhancing comprehension and bolstering
                case impact. Efficient, precision-driven, and crafted to
                captivate the courtroom.{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PortFolios;
