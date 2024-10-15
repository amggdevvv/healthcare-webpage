import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const SubscriptionPlansPage = () => {
  //   const router = useRouter();

  //   const handlePlanButtonClick = (plan) => {
  //     router.push(`/subscription-plans/${plan}`);
  //   };

  return (
    <div className="h-full w-full">
      <div className="mx-4 my-12 grid grid-cols-1 gap-8 md:mx-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-semibold">Basic</h1>
            <p className="pt-3 font-semibold text-gray-700">3 Cases</p>
          </div>
          <div className="border-b border-gray-200 py-6">
            <p className="text-sm font-semibold">Payment Options</p>
            <ul className="ml-4 list-disc text-sm font-semibold tracking-wider text-gray-700">
              <li className="pt-3">Annual — $18,000/year </li>
              <li className="pt-3">Monthly — $1,500/month </li>
            </ul>
          </div>
          <div className="my-3 border-b border-gray-200 pb-8">
            <Image
              src="/images/Pulmonary-Hypertrophy-image.webp"
              alt="Pulmonary-Hypertrophy"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="border-b border-gray-200 pb-8 pt-2">
            <p className="font-semibold tracking-wide">
              Covers 3 Complete Cases From Beginning To End. 3 Trial Or
              Mediation Presentations, Which Can Include:
            </p>
          </div>
          <div className="py-6">
            <ul className="ml-4 list-disc tracking-wider text-gray-700">
              <li className="pt-3 text-sm font-semibold">
                Two 3D animations per case{" "}
              </li>

              <li className="pt-3 text-sm font-semibold">
                Medical Illustrations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Graphics </li>
              <li className="pt-3 text-sm font-semibold">Animated Graphics </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Timelines{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Linking Presentations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Video Work </li>
              <li className="pt-3 text-sm font-semibold">Custom Audio Work </li>
              <li className="pt-3 text-sm font-semibold">
                3D Radiological Imagery{" "}
              </li>
            </ul>
          </div>

          <Link href={"/subscription-plans/plans-checkout"}>
            <Button
              name={"Continue"}
              type={"button"}
              className={
                "min-w-full bg-[radial-gradient(54.97%_272.54%_at_27.36%_-25.72%,_#66181f_75%,_rgba(0,_0,_0,_.9)_100%)] text-white"
              }
            />
          </Link>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-semibold">Pro</h1>
            <p className="pt-3 font-semibold text-gray-700">5 Cases</p>
          </div>
          <div className="border-b border-gray-200 py-6">
            <p className="text-sm font-semibold">Payment Options</p>
            <ul className="ml-4 list-disc text-sm font-semibold tracking-wider text-gray-700">
              <li className="pt-3">Annual — $25,000/year</li>
              <li className="pt-3">Monthly — $2,083.33/month</li>
            </ul>
          </div>
          <div className="my-3 border-b border-gray-200 pb-8">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="border-b border-gray-200 pb-8 pt-2">
            <p className="font-semibold tracking-wide">
              Covers 5 Complete Cases From Beginning To End. 5 Trial Or
              Mediation Presentations, Which Can Include:
            </p>
          </div>
          <div className="py-6">
            <ul className="ml-4 list-disc tracking-wider text-gray-700">
              <li className="pt-3 text-sm font-semibold">
                Two 3D animations per case{" "}
              </li>

              <li className="pt-3 text-sm font-semibold">
                Medical Illustrations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Graphics </li>
              <li className="pt-3 text-sm font-semibold">Animated Graphics </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Timelines{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Linking Presentations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Video Work </li>
              <li className="pt-3 text-sm font-semibold">Custom Audio Work </li>
              <li className="pt-3 text-sm font-semibold">
                3D Radiological Imagery{" "}
              </li>
            </ul>
          </div>
          <Link href={"/subscription-plans/plans-checkout"}>
            <Button
              name={"Continue"}
              type={"button"}
              className={
                "min-w-full bg-[radial-gradient(54.97%_272.54%_at_27.36%_-25.72%,_#66181f_75%,_rgba(0,_0,_0,_.9)_100%)] text-white"
              }
            />
          </Link>
        </div>

        <div className="p-8">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-semibold">Platinum</h1>
            <p className="pt-3 font-semibold text-gray-700">8 Cases</p>
          </div>
          <div className="border-b border-gray-200 py-6">
            <p className="text-sm font-semibold">Payment Options</p>
            <ul className="ml-4 list-disc text-sm font-semibold tracking-wider text-gray-700">
              <li className="pt-3">Annual — $32,000/year </li>
              <li className="pt-3">Monthly — $2,666.67/month </li>
            </ul>
          </div>
          <div className="my-3 border-b border-gray-200 pb-8">
            <Image
              src="/images/spine-illustration-image.webp"
              alt="spine-illustration"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="border-b border-gray-200 pb-8 pt-2">
            <p className="font-semibold tracking-wide">
              Covers 8 Complete Cases From Beginning To End. 8 Trial Or
              Mediation Presentations, Which Can Include:
            </p>
          </div>
          <div className="py-6">
            <ul className="ml-4 list-disc tracking-wider text-gray-700">
              <li className="pt-3 text-sm font-semibold">
                Two 3D animations per case{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">
                Medical Illustrations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Graphics </li>
              <li className="pt-3 text-sm font-semibold">Animated Graphics </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Timelines{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">
                Interactive Linking Presentations{" "}
              </li>
              <li className="pt-3 text-sm font-semibold">Custom Video Work </li>
              <li className="pt-3 text-sm font-semibold">Custom Audio Work </li>
              <li className="pt-3 text-sm font-semibold">
                3D Radiological Imagery{" "}
              </li>
            </ul>
          </div>
          <Link href={"/subscription-plans/plans-checkout"}>
            <Button
              name={"Continue"}
              type={"button"}
              className={
                "min-w-full bg-[radial-gradient(54.97%_272.54%_at_27.36%_-25.72%,_#66181f_75%,_rgba(0,_0,_0,_.9)_100%)] text-white"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPage;
