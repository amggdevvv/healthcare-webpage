"use client";
import React from "react";

const Button = ({ name, type, className }) => {
  const cn = className;
  return (
    <div>
      <button
        tpe={type}
        className={`w-32 rounded-md px-4 py-[10px]  text-sm  sm:w-56 sm:text-base ${cn}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
