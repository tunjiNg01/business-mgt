"use client";
import React from "react";
import Image from "next/image";
import logo from "@/../public/brand-logo.svg";
import findevent from "@/../public/assets/onboarding/onboarding04.svg";
import organize from "@/../public/assets/onboarding/onboarding03.svg";
// import { MdArrowOutward } from "react-icons/md";
import { web_app } from "@/helpers/path.helpers";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="px-4 pt-8 md:px-12">
        <div className="">
          <Image src={logo} className="w-32 lg:w-48" alt="logo" />
        </div>
        <div className="mt-10">
          <h1 className="text-left font-visbybold text-xl text-black antialiased md:text-center lg:text-4xl">
            Welcome to EventPeddle
          </h1>
          <p className="pt-2 text-left font-visbyregular antialiased md:text-center">
            What kind of adventure are you looking for today?
          </p>
          <div className="mt-12 block justify-center text-[#3D424F] md:flex md:space-x-6">
            <div className="z-30 flex h-[25vh] w-full cursor-pointer flex-col justify-between rounded-lg bg-[#FDE6F6] p-4 outline-dashed outline-[#3D424F] md:w-[239px] lg:h-[40vh]">
              <div className="">
                <Image
                  src={findevent}
                  className="w-[40px] lg:w-[50px]"
                  alt="icon"
                />
              </div>

              <div className="">
                <h1 className="font-visbybold text-xl antialiased lg:text-2xl">
                  Event <br /> Attendee
                </h1>
                <p className="font-visbyregular text-[12px] antialiased">
                  Eventpeddle is your one-stop shop for discovering and snagging
                  ticket
                </p>
                <div className="flex justify-end">
                  {/* <MdArrowOutward className="text-3xl" /> */}
                </div>
              </div>
            </div>
            <div className="z-30 mt-4 flex h-[25vh] w-full cursor-pointer flex-col justify-between rounded-lg bg-[#DEFE98] p-4 outline-dashed outline-[#3D424F] md:mt-0 md:w-[239px] lg:h-[40vh]">
              <div className="">
                <Image
                  src={organize}
                  className="w-[40px] lg:w-[50px]"
                  alt="icon"
                />
              </div>
              <div
                className=""
                onClick={() => {
                  router.push(`/`);
                }}
              >
                <h1 className="font-visbybold text-xl antialiased lg:text-2xl">
                  Organize an <br /> Event
                </h1>
                <p className="font-visbyregular text-[12px] antialiased">
                  Eventpeddle is your one-stop shop for discovering and snagging
                  ticket
                </p>
                <div className="flex justify-end">
                  {/* <MdArrowOutward className="text-3xl" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 hidden h-[35vh] bg-[#336DFF] md:block"></div>
    </div>
  );
};

export default Page;
