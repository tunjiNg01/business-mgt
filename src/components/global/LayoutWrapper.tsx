import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function LayoutWrapper({ className, children }: Props) {
  return (
    <div className={twMerge("px-4 md:px-[58px]", className)}>{children}</div>
  );
}
