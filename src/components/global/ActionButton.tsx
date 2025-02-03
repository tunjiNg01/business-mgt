import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick?: () => void;
  param: { details: string };
  type: "contact" | "follow";
};

export default function FollowButton({ className, param, type }: Props) {
  if (type == "follow") {
    return (
      <button
        className={twMerge(
          "rounded-full px-6 py-2 font-visbysemibold text-sm text-white antialiased",
          className,
        )}
      >
        Follow
      </button>
    );
  } else {
    return (
      <button
        className={twMerge(
          "rounded-full px-6 py-2 font-visbysemibold text-sm text-gray8 antialiased",
          className,
        )}
      >
        Contact Organizer
      </button>
    );
  }
}
