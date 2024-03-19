import React from "react";
import Link from "next/link";

function PortFolios() {
  return (
    <div className="h-screen w-full">
      <div className="mx-[96px] mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Link href={"/portfolios/portfolio1"} className="cursor-pointer">
          <div className="relative border-b border-gray-200">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute left-12 top-2/4 z-10 flex flex-col text-black">
              <h3 className="text-white">Truck Animation</h3>
              <p className="text-white opacity-0 absolute bottom-0 left-0 w-full h-full bg-black transition-opacity duration-300">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations vividly
                depict truck scenarios, enhancing comprehension and bolstering
                case impact. Efficient, precision-driven, and crafted to
                captivate the courtroom.{" "}
              </p>
            </div>
          </div>
          {/* <div className="absolute left-32 top-2/4 z-10 flex flex-col text-black">
            <h3 className="">Truck Animation</h3>
            <p>
              Spearheading truck animations for the legal landscape. From
              initial demands to court confrontations, our animations vividly
              depict truck scenarios, enhancing comprehension and bolstering
              case impact. Efficient, precision-driven, and crafted to captivate
              the courtroom.{" "}
            </p>
          </div> */}
        </Link>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default PortFolios;
