import { Resources } from "@/lib/types.lib";
import Link from "next/link";
import React from "react";
import { RiCalendarLine } from "react-icons/ri";

type Props = {
  data: Resources;
};

const ResourceCard = ({ data }: Props) => {
  return (
    <div className="rounded-xl border p-4">
      <h1 className="font-visbysemibold text-gray-800 antialiased">
        {data.title}
      </h1>
      <p className="mt-2 font-visbymedium text-sm text-gray-500 antialiased">
        {data.description}
      </p>
      <div className="my-2 flex items-center space-x-2">
        <RiCalendarLine />{" "}
        <span className="font-visbymedium text-sm antialiased">
          {data.date}
        </span>
      </div>
      <Link
        href={data.slug}
        className="font-visbysemibold text-primary60 antialiased"
      >
        Read article
      </Link>
    </div>
  );
};

export default ResourceCard;
