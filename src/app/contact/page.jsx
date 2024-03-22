"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    options: "",
    message: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("User Form Data==>", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="">
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute left-0 top-1/4 z-10 flex w-full flex-col items-center px-6 text-center">
        <form
          onSubmit={handleFormSubmit}
          className="mx-auto flex w-full flex-col justify-center gap-6 rounded-lg bg-white/80 p-12 py-10 md:w-[450px]"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/main-logo.webp"
              alt="Main-Logo"
              width={90}
              height={90}
            />
            <h1 className="pt-3 text-2xl font-semibold tracking-widest">
              SCHEDULE A DEMO
            </h1>
            <p className="py-1 uppercase tracking-wider text-red-950">
              Trial Template
            </p>
            <p className="text-sm font-semibold text-gray-600">
              +1 (415) 332-9100
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="rounded-md border border-red-900/50 px-3 py-2 outline-none"
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleInputChange}
              defaultValue={formData.fullName}
            />
            <input
              className="rounded-md border border-red-900/50 px-3 py-2 outline-none"
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              defaultValue={formData.phone}
            />
            <input
              className="rounded-md border border-red-900/50 px-3 py-2 outline-none"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              defaultValue={formData.email}
            />
            <div className="relative">
              <select
                className="block w-full appearance-none rounded-md border border-red-900/50 px-3 py-2 outline-none"
                name="country"
                id="country"
                onChange={handleInputChange}
              >
                <option defaultValue="" disabled selected>
                  Select Professional Category
                </option>
                <option defaultValue="attorney">Attorney</option>
                <option defaultValue="legal-professional">Legal Professional</option>
                <option defaultValue="medical-professional">
                  Medical Professional
                </option>
                <option defaultValue="administrative-professional">
                  Administrative Professional
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 14.293a1 1 1 011.414 0L14 17.586V18a2 2 0 01-2 2H8a2 2 0 01-2-2v-.414l3.293-3.293zM6 7H4V5h2v2zm0 4H4v-2h2v2zm0 4H4v-2h2v2zm6-8h-2V5h2v2zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2zm-2 3h2v2h-2v-2zm-4-3H6v-2h2v2zm0-4H6V5h2v2zm8 7h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                </svg>
              </div>
            </div>
            <textarea
              className="rounded-md border border-red-900/50 px-3 py-2 outline-none"
              cols="30"
              rows="3"
              name="message"
              placeholder="Message"
              onChange={handleInputChange}
              defaultValue={formData.message}
            ></textarea>
            <Button
              name={"Connect With Us"}
              type={"submit"}
              className={"min-w-full bg-black text-white"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
