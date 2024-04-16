"use client";
import React from "react";

const Button = ({ name, type, className, onClick }) => {
  const cn = className;
  return (
    <div>
      <button
        tpe={type}
        onClick={onClick}
        className={`w-32 rounded-md px-4 py-[10px] text-[12px] sm:w-56 sm:text-base ${cn}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
