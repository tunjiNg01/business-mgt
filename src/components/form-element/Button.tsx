import React from "react";
import loading from "@/../public/assets/onboarding/loading.gif";
import Image from "next/image";
import { Circles, Rings, SpinningCircles, TailSpin } from "react-loading-icons";

const Button = ({
  text,
  isLoading = false,
  onClick = () => {},
}: {
  text: string;
  isLoading: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`test-sm mt-7 w-full rounded-full ${isLoading ? "bg-opacity-[0.8]" : ""} bg-primary p-2 font-visbybold text-white antialiased`}
    >
      {isLoading ? <Circles speed={4} className="mx-auto h-auto w-6" /> : text}
    </button>
  );
};
{
  /* <Circles speed={4} className="mx-auto h-auto w-6" /> */
}
export default Button;
