"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import PaymentForm from "@/components/PaymentForm";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  // Add more countries here...
];

const PlanCard = ({ onClick, isActive, title, price }) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer justify-between rounded-md border border-[#ddd] p-4 font-semibold ${
        isActive
          ? "bg-[radial-gradient(54.97%_272.54%_at_27.36%_-134.72%,_#66181f_0,_rgb(20_0_0)_100%)] text-white"
          : "text-gray-800"
      }`}
    >
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

function PlansCheckout() {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handlePaymentForm = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className="my-16 h-full w-full">
      <div className="mx-10 mt-12 grid grid-cols-1 md:mx-[80px] md:grid-cols-3">
        <div className="col-span-2">
          <Image
            src="/images/spine-illustration-image.webp"
            alt="spine-illustration"
            width={1000}
            height={1000}
            layout="resposnive"
            className="object-cover"
          />
        </div>

        <div className="col-span-1 flex flex-col ">
          <div className="my-3 min-w-96 ">
            <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {!showPaymentForm ? (
            <div className="mt-8 flex flex-col gap-5">
              <PlanCard
                onClick={() => handleClick(0)}
                isActive={clickedIndex === 0}
                title="Basic"
                price="$18,000/annual"
              />
              <PlanCard
                onClick={() => handleClick(1)}
                isActive={clickedIndex === 1}
                title="Pro"
                price="$25,000/annual"
              />
              <PlanCard
                onClick={() => handleClick(2)}
                isActive={clickedIndex === 2}
                title="Platinum"
                price="$25,000/annual"
              />

              <Button
                onClick={handlePaymentForm}
                name={"Continue to Payment"}
                type={"button"}
                className={
                  "min-w-full bg-[radial-gradient(54.97%_272.54%_at_27.36%_-25.72%,_#66181f_75%,_rgba(0,_0,_0,_.9)_100%)] text-white"
                }
              />

              {/* <button onClick={handlePaymentForm}>Continue</button> */}
            </div>
          ) : (
            <PaymentForm />
          )}
        </div>
      </div>
    </div>
  );
}

export default PlansCheckout;
