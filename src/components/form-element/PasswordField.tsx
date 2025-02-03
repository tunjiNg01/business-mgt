"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { TbEyeClosed } from "react-icons/tb";

const PasswordField = ({ name, label }: { name: string; label: string }) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (data: {}) => {
    console.log("it works");

    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="mt-4 space-y-1">
          <label
            htmlFor=""
            className="font-visbybold text-sm text-gray9 antialiased"
          >
            {label}
          </label>
          <div
            className={`border-1 ${!!error ? "border-red-500 bg-red-100" : "bg-white"} flex space-x-4 rounded-md border px-4`}
          >
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full py-2 font-visbymedium ${!!error ? "bg-red-100" : "bg-white"} text-gray9 antialiased outline-none placeholder:font-visbyregular placeholder:text-xs placeholder:text-gray-500`}
              placeholder="Please enter your password"
              {...field}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={showPassword ? "rotate-180" : ""}
            >
              <TbEyeClosed />
            </button>
          </div>
        </div>
      )}
    />
  );
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PasswordField;
