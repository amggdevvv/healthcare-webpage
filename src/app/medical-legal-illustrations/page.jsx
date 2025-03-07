"use client";
import React from "react";
import VideoBanner from "@/components/VideoBanner";
import { FaCheckCircle } from "react-icons/fa";
import { medical_Illustration as data } from "@/utils/data";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const LegalIllustration = () => {
  const router = useRouter();
  return (
    <>
      <VideoBanner title="Medical Illustrations" />
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Page Header */}

        <p className="mt-4 text-center text-lg text-gray-600">
          {data.introduction}
        </p>

        {/* Sections */}
        {data.sections.map((section, index) => (
          <div key={index} className="mt-12">
            <h2 className="border-l-4 border-red-950 pl-4 text-2xl font-semibold text-gray-800">
              {section.heading}
            </h2>
            {section.content && (
              <p className="mt-3 text-gray-700">{section.content}</p>
            )}

            {/* Services List as Cards */}
            {section.services && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {section.services.map((service, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-red-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Benefits List with Icons */}
            {section.benefits && (
              <ul className="mt-4 space-y-3">
                {section.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    {/* <FaCheckCircle className="text-red-950" size={30} /> */}
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Call-to-Action Section */}
        <div className="mt-16 rounded-lg bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] p-8 text-center text-white shadow-md">
          <h2 className="text-2xl font-bold">{data.sections[4]?.heading}</h2>
          <p className="mt-2 text-lg">{data.sections[4]?.content}</p>
          <p className="mt-4 font-semibold">{data.sections[4]?.callToAction}</p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition-all hover:bg-gray-100"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </>
  );
};

export default LegalIllustration;
