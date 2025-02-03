import React from "react";
import Image from "next/image";
import searchIcon from "@/../public/assets/organizer/search-status.svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const CustomInput = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `flex w-[30%] items-center space-x-2 rounded-full bg-layoutBg200 px-4 font-visbysemibold text-xs text-gray-600 antialiased`,
        className,
      )}
    >
      <Image src={searchIcon} alt="icon" />
      <input
        type=" text"
        className="h-full w-full bg-layoutBg200 py-3 outline-none"
        placeholder="Search resources..."
      />
    </div>
  );
};

export default CustomInput;
