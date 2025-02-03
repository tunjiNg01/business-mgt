import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  toggle: boolean;
  clickHandler: () => void;
  saveState?: () => Promise<any>;
};
const Switch = ({ toggle, clickHandler, saveState }: Props) => {
  return (
    <div
      onClick={clickHandler}
      className={cn(
        "flex h-5 w-10 cursor-pointer items-center rounded-full duration-200 ease-in",
        toggle ? "bg-[#6DAB05]" : "bg-gray-200",
      )}
    >
      <span
        className={cn(
          "h-5 w-5 rounded-full bg-white duration-100 ease-in",
          toggle ? "translate-x-5" : "",
        )}
      ></span>
    </div>
  );
};

export default Switch;
