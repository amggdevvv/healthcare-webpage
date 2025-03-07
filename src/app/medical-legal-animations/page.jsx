"use client";
import React from "react";
import { medical_animation as data } from "@/utils/data";
import VideoBanner from "@/components/VideoBanner";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const LegalAnimations = () => {
  const router = useRouter();
  return (
    <>
      <VideoBanner title={data.title} />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="mt-4 text-lg opacity-90">{data.introduction}</p>

        {/* Sections */}
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`mt-12 rounded-xl p-8 ${
              index % 2 === 0
                ? "border border-gray-200 bg-white"
                : "bg-gradient-to-r from-gray-100 to-gray-200"
            }`}
          >
            <h2 className="border-l-4 border-red-950 pl-4 text-3xl font-bold text-red-950">
              {section.heading}
            </h2>
            {section.content && (
              <p className="mt-3 leading-relaxed text-gray-700">
                {section.content}
              </p>
            )}

            {/* Services as Cards */}
            {section.services && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {section.services.map((service, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-300 bg-white p-6  transition-all "
                  >
                    <h3 className="text-xl font-semibold text-red-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Benefits with Icons */}

            {section.benefits && (
              <ul className="mt-6 space-y-3">
                {section.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <FaCheckCircle className="text-red-950" />
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Call-to-Action Section */}
        <div className="mt-16 rounded-lg bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] p-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold">{data.sections[4].heading}</h2>
          <p className="mt-2 text-lg opacity-90">{data.sections[4].content}</p>
          <p className="mt-4 text-xl font-semibold">
            {data.sections[4].callToAction}
          </p>

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

export default LegalAnimations;
