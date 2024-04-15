import React from "react";
import Link from "next/link";
import Image from "next/image";

function PortFolios() {
  return (
    <div className="my-12 h-full w-full">
      {/* mt-16 grid grid-cols-1 gap-8 px-8 md:grid-cols-2 */}
      <div className="mt-16 grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
        <Link
          href={"/portfolios/portfolio1"}
          className="flex-shrink-1 group w-full cursor-pointer overflow-hidden"
        >
          <div className="relative w-full group-hover:opacity-100">
            <div className="h-0 pt-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/898607139?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                // width="100%"
                // height="500"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full h-full absolute top-0 left-0"
              ></iframe>
            </div>

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

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            {/* <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/742413974?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            {/* <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col overflow-hidden group-hover:overflow-visible">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Custom Medical Graphics And Animations
              </h3>
              <p className="text-semibold absolute left-0 top-48 h-full w-full translate-y-0 tracking-wide text-white duration-300 group-hover:translate-y-[-10rem]">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div> */}
            <div className="absolute bottom-2/4  left-12 z-10 flex min-w-[500px] translate-y-2/4 transform flex-col overflow-hidden group-hover:overflow-visible">
              <div>
                <h3 className="text-xl font-semibold tracking-wider text-white hover:hidden">
                  Custom Medical Graphics And Animations
                </h3>
              </div>
              <div className="text-semibold absolute left-0 top-0 w-full translate-y-full tracking-wide text-white duration-300 group-hover:translate-y-0">
                <p>
                  In addition to being helpful for understanding injuries,
                  animations can also be used to explain medical procedures. For
                  example, it can show how a surgeon will repair a broken bone
                  or spinal fusion. Or, it can depict the steps involved in a
                  particular medical operation. This can be helpful for jurors
                  to understand the nature of the injuries and the treatment
                  that the injured person has received.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio3"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="flex items-center justify-center">
              <Image
                src="/images/sugical-animation.jpg"
                alt="spine-illustration"
                width={1000}
                height={1000}
                layout="resposnive"
                className="object-cover"
              />
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Surgical Animations
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                At the vanguard of surgical animations for the legal domain.
                From demands to courtroom engagements, our animations depict
                surgical procedures with unmatched clarity, enhancing
                understanding and amplifying case potency. Fast-paced,
                intricate, and unequivocally persuasive.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/849565783?h=4272b3347b?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Wrist Arthroscopy
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/849556238?h=ca29201c75?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                2023 Interactive Location of Injuries Presentation{" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/838423197?h=eec94f45e5?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Collision Animation Evolution{" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/661490695?h=a2422cc5ba?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Rear End Whiplash Animation
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/688558954?h=dc296aa66a?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Intracranial Hemorrhage (20 minute production time){" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/688558954?h=dc296aa66a?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Intracranial Hemorrhage (20 minute production time){" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/672018661?h=a8fb3e1d2f?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Intracranial Hemorrhage (20 minute production time){" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/678925353?h=ca07129451?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Intracranial Hemorrhage (20 minute production time){" "}
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PortFolios;
