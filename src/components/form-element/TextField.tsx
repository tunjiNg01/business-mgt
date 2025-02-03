"use client";
import React from "react";
import PropTypes from "prop-types";
import type { AppProps } from "next/app";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";

const TextField = ({
  label,
  type,
  placeholder,
  name,
  below,
  belowText,
  id,
  defaultValue,
  imgsrc,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  below?: boolean;
  belowText?: string;
  id?: string;
  defaultValue?: string;
  imgsrc: string;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="mt-8 space-y-1">
          <label
            htmlFor=""
            className="font-visbybold text-sm text-gray9 antialiased"
          >
            Email
          </label>
          <div
            className={`border-1 ${!!error ? "border-red-500 bg-red-100" : "bg-white"} flex space-x-4 rounded-md border px-4`}
          >
            <Image src={imgsrc} alt="icon" />
            <input
              type={type}
              className={`w-full py-2 font-visbymedium ${!!error ? "bg-red-100" : "bg-white"} text-gray9 antialiased outline-none placeholder:font-visbyregular placeholder:text-xs placeholder:text-gray-500`}
              placeholder="Please enter your email"
              {...field}
            />
          </div>
        </div>
      )}
    />
  );
};

TextField.protoTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default TextField;
