import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Home = () => {
  return (
    <main className="flex h-full w-full flex-col">
      <div className="relative flex h-screen flex-col items-center justify-center">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="absolute inset-0 z-[-1] h-full w-full object-cover"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 mt-20 flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 sm:text-sm">
            Trial Template
          </p>
          <h2 className="w-[90%] pt-3 text-lg font-semibold capitalize text-white sm:w-[400px] sm:text-4xl">
            Flat Rate Subscriptions For Trial Graphics
          </h2>
          <p className="pt-3 text-xs font-bold tracking-wide text-gray-400 sm:text-sm">
            Litigation & Medical Graphics, Illustrations and Animations
          </p>
          <div className="mb-8 mt-6 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <Link href="/subscription-plans">
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

      <div className="relative h-screen items-center justify-center">
        <Image
          src="/images/spine-illustration-image.webp"
          alt="spine-illustration"
          // layout="fill"
          width={1000}
          height={1000}
          // objectFit="contain"
          className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        />

        <div className="z-20 ml-20 mt-14 max-w-[450px]">
          <p className="font-semibold uppercase tracking-widest text-red-950">
            Trial Template
          </p>
          <h1 className="py-3 text-4xl font-semibold tracking-wide">
            Illustrations
          </h1>
          <p className="text-pretty font-semibold tracking-widest text-gray-700">
            Illustrations can help to make complex injuries more understandable.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 z-10 mx-10 max-w-4xl pb-6">
          <div className="w-full pt-20">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Link href="#">
                <Button
                  name={"Find Out More"}
                  type={"button"}
                  className={"border border-white bg-black text-white"}
                />
              </Link>
              <p className="text-sm">
                When you work with us, you know exactly what each case will
                cost. No Surprises. It is important that trial and litigation
                graphics be affordable so that all law firms, regardless of
                their size or resources, can have access to these powerful
                tools. This will ensure that all cases, large or small, have the
                opportunity to receive the best possible representation to tell
                their story.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-center">
        <video autoPlay loop muted id="video" className="m-0 object-cover p-0">
          <source src="/videos/overview-of-injuries.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex w-full flex-col items-end justify-center bg-black py-12 pb-32">
          <div className="w-full max-w-6xl px-12 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <Link href="#">
                <Button
                  name={"View Presentation"}
                  type={"button"}
                  className={"border border-white bg-black text-white"}
                />
              </Link>
              <p className="text-sm text-white lg:w-2/3 lg:text-base">
                You may have seen a Powerpoint before. However you haven&apos;t
                seen anything like the ones that we design. The jury should be
                able to understand the evidence and the legal arguments without
                getting bogged down in technical details. Second, the
                presentations should be persuasive. The lawyer should use clear
                and powerful language to convince the jury that the plaintiff is
                entitled to compensation. Third, the presentation should be
                visually appealing and hold the attention of the jury.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-white lg:grid-cols-3 ">
        <div className="col-span-1 lg:col-span-1">
          <div className="m-10 ">
            <div className="border-b border-gray-200 pb-6">
              <p className="font-semibold uppercase tracking-widest text-red-950">
                Trial Template
              </p>
              <h1 className="py-3 text-4xl font-semibold tracking-wide">
                We Prepare You From The Begining{" "}
              </h1>
            </div>
            <div className="border-b border-gray-200  py-6">
              <h1 className="py-3 text-2xl font-semibold tracking-wide">
                Demand
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                We Create Graphics For Your Demand letters that will help to
                explain complex concepts and increase clarity.{" "}
              </p>
            </div>
            <div className="border-b border-gray-200  py-6">
              <h1 className="py-3 text-2xl font-semibold tracking-wide">
                Depos
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                Medical illustrations, animations and graphics for your expert
                depos that will come in as important exhibits
              </p>
            </div>
            <div className="border-b border-gray-200  py-6">
              <h1 className="py-3 text-2xl font-semibold tracking-wide">
                Mediation
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                Mediation is an important deadline and we create entire trial
                presentations for mediation to increase your case value.
              </p>
            </div>
            <div className="border-b border-gray-200  py-6">
              <h1 className="py-3 text-2xl font-semibold tracking-wide">
                Time
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                Since we do not bill hourly, we tend to accomplish our work
                faster than you might have come to expect.
              </p>
            </div>
            <div className="py-6">
              <h1 className="py-3 text-2xl font-semibold tracking-wide">
                Trial
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                Other than animations, we create interactive editable
                presentations for openings, cross examinations and closing.
              </p>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <Link href="#">
                <Button
                  name={"Explore"}
                  type={"button"}
                  className={"min-w-full border-2 border-black bg-white"}
                />
              </Link>
              <Link href="#">
                <Button
                  name={"Schedule A Demo"}
                  type={"button"}
                  className={" min-w-full bg-gray-200"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Image
            src="/images/ayers-rd-animation.webp"
            alt="ayers-rd-animation"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="order-1 flex items-center justify-center">
          <Image
            src="/images/scaled.webp"
            alt="skull"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-2 flex flex-col justify-center bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] px-16 py-16 text-white">
          <h1 className="py-3 text-2xl font-semibold tracking-wide">
            We&apos;re Creative With Medical Records
          </h1>
          <p className="text-sm font-semibold text-white">
            CT scans are objective. They are created by machines and are not
            subject to the interpretation of a medical illustrator. This can
            make them more persuasive to juries, who are often skeptical of
            expert testimony.
          </p>
        </div>

        <div className="order-4 flex flex-col justify-center bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] px-16 py-16 text-white sm:order-3">
          <h1 className="py-3 text-2xl font-semibold tracking-wide">
            From Flat Slices To An Animated 3D Model
          </h1>
          <p className="text-sm font-semibold text-white">
            CT Scans are more dynamic. They can be rotated and viewed from
            different angles. They can output to video and rotated around. This
            allows the jury to see the injuries from different perspectives and
            to better understand how they occurred.
          </p>
        </div>
        <div className="order-3 flex items-center justify-center sm:order-4">
          <Image
            src="/images/leg-image.webp"
            alt="skull"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-5 flex h-full w-full items-center justify-center bg-black">
          <video autoPlay loop muted id="video" className="object-cover">
            <source src="/videos/face-to-ct-scan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="order-6 flex flex-col justify-center bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] px-16 py-16 text-white">
          <h1 className="py-3 text-2xl font-semibold tracking-wide">
            Humanize The Injuries With A Face
          </h1>
          <p className="text-sm font-semibold text-white">
            If the person being scanned is scared, in pain, unconscious or
            crying, the CT Scan will pick up those important details which will
            help others empathize with their pain rather than look at the
            injuries as they would a skeleton in some biology class.
          </p>
        </div>
      </div>

      <div className="relative h-full">
        <div className="relative flex h-full flex-col justify-center">
          <video
            autoPlay
            loop
            muted
            id="video"
            className="aspect-w-16 aspect-h-9 z-[-1] w-full max-w-none object-cover"
          >
            <source src="/videos/car-crash-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="flex w-full flex-col items-end justify-center py-12">
            <div className="w-full max-w-6xl px-6 lg:px-12">
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <Link href="#">
                  <Button
                    name={"View Animations"}
                    type={"button"}
                    className={
                      "border border-white bg-transparent/40 text-white"
                    }
                  />
                </Link>
                <p className="text-sm text-white lg:w-2/3 lg:text-base">
                  3D Animations can be a powerful tool in personal injury cases.
                  They can be used to recreate the accident scene, show the path
                  of travel of the vehicles involved, and the injuries
                  sustained. Animations can also be used to explain complex
                  scientific or medical concepts. They are an important part of
                  a successful case, and now at long last, they are affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen bg-black">
        <Image
          src="/images/timelines-image.webp"
          alt="Timelines"
          layout="fill"
          objectFit="contain"
          className="z-0"
        />

        <div className="z-10 mt-14 w-full px-6 sm:w-[450px] sm:pl-20">
          <h1 className="py-3 text-4xl font-semibold tracking-wide text-white">
            Innovative Timelines
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 z-10 mx-6 max-w-full pb-6 sm:mx-10 sm:max-w-4xl">
          <div className="w-full">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Link href="#">
                <Button
                  name={"View Timelines"}
                  type={"button"}
                  className={"border border-white bg-black text-white"}
                />
              </Link>
              <p className="text-sm text-white sm:max-w-[75%]">
                A timeline is a powerful tool that can be used to show the jury
                the extent of a person&apos;s injuries and the amount of
                treatment they have undergone. The timeline can show the dates
                of the injuries, the types of treatment. This information can be
                very helpful to understanding the severity of the injuries and
                the impact that they have had on someone&apos;s life. When these
                timelines hyperlink to the actual treatment documents these
                timelines become an essential part of trial.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen">
        <Image
          src="/images/Pulmonary-Hypertrophy-image.webp"
          alt="Timelines"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        />

        <div className="z-20 ml-6 mt-6 sm:ml-20 sm:mt-14 sm:w-[450px]">
          <h1 className="py-3 text-4xl font-semibold tracking-wide text-black">
            Illustrations
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 z-10 mx-6 max-w-full pb-6 sm:mx-10 sm:max-w-4xl">
          <div className="w-full pt-6 sm:pt-20">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Link href="#">
                <Button
                  name={"Find Out More"}
                  type={"button"}
                  className={"border border-white bg-black text-white"}
                />
              </Link>
              <p className="text-sm">
                When you work with us, you know exactly what each case will
                cost. No Surprises. It is important that trial and litigation
                graphics be affordable so that all law firms, regardless of
                their size or resources, can have access to these powerful
                tools. This will ensure that all cases, large or small, have the
                opportunity to receive the best possible representation to tell
                their story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
