import React from "react";
import { GrNotification } from "react-icons/gr";

const PortalHeader = ({ title }: { title: string }) => {
  return (
    <div className="fixed left-[20%] right-0 max-w-[100%] bg-white">
      {/* // <div className=" fixed left-[20%] right-0 max-w-[100%] bg-[#F8F9FB] "> */}
      <div className="z-30 flex max-w-full items-center justify-between border border-b border-transparent border-b-gray-200 px-4 py-6">
        <div className="text-3xl font-bold text-[#1F2937]">
          <h2>{title}</h2>
        </div>
        <div className="">
          <GrNotification />
        </div>
      </div>
    </div>
  );
};

export default PortalHeader;
