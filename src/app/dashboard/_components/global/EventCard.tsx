import Image from "next/image";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";

type Props = {
  event: {
    image: string;
    title: string;
    city: string;
    country: string;
    date: string;
    time: string;
    status: string;
    member: string;
  };
};

const EvenStatus = ({ status }: { status: string }) => {
  switch (status) {
    case "cancelled":
      return (
        <Badge className="mt-4 bg-red-300 font-visbymedium text-red-800 antialiased hover:bg-red-300">
          cancelled
        </Badge>
      );

    case "published":
      return (
        <Badge className="mt-4 bg-green-300 font-visbymedium text-green-800 antialiased hover:bg-green-300">
          Published
        </Badge>
      );
    case "draft":
      return (
        <Badge className="mt-4 bg-gray-300 text-gray-800 hover:bg-gray-300">
          Draft
        </Badge>
      );

    default:
      return <div></div>;
  }
};

function EventCard({ event }: Props) {
  return (
    <div className="rounded-xl border p-3">
      <div className="relative h-[150px] w-full overflow-hidden rounded-xl">
        <Image src={event.image} className="w-full" alt="event-poster" />
      </div>

      <h2 className="mt-4 font-visbybold text-base text-gray9 antialiased">
        {event.title}
      </h2>
      <div className="mt-3 flex items-center space-x-2 text-sm text-gray-800">
        <GrLocation />
        <span className="font-visbysemibold text-xs antialiased">
          {event.city}, {event.country}
        </span>
      </div>
      <div className="mt-2 flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <FaRegCalendarAlt className="text-xs" />
          <span className="font-visbysemibold text-xs antialiased">
            {event.date}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <FaRegClock className="text-xs" />
          <span className="font-visbysemibold text-xs antialiased">
            {event.time}
          </span>
        </div>
      </div>

      {/* status badge */}
      <EvenStatus status={event.status} />
    </div>
  );
}

export default EventCard;
