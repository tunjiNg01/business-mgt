"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/../public/next.svg";
// import searchIcon from "@/../public/assets/organizer/search-status.svg";
// import avatar from "@/../public/affiliate04.svg";
import Image from "next/image";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { Bolt, NotepadText, UserRound } from "lucide-react";
import { Building2 } from "lucide-react";
import { BsMegaphone } from "react-icons/bs";
import { Landmark } from "lucide-react";
import { Gift } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiNotification3Line } from "react-icons/ri";

import { usePathname } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { OrganizerComboBox } from "./OrganizerComboBox";

type Props = {
  children: React.ReactNode;
};
const PortalLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const [isShown, setIsShown] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  let title = "Dashboard";
  //   if (pathname.match(affiliateApp.affiliates)) {
  //     title = "Affiliates";
  //   } else if (pathname.match(affiliateApp.payouts)) {
  //     title = "Payouts";
  //   } else if (pathname.match(affiliateApp.setting)) {
  //     title = "Settings";
  //   } else if (pathname.match(affiliateApp.dashboard)) {
  //     title = "Dashboard";
  //   }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideBarRef.current &&
      !sideBarRef.current.contains(event.target as Node)
    ) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-white">
        {/* <div className="bg-[#F8F9FB] "> */}

        <div
          // ref={sideBarRef as any}
          className={`fixed left-0 right-0 flex min-h-screen flex-col justify-between ${
            isShown ? "translate-x-0" : ""
          } z-[40] w-[60%] -translate-x-[100%] bg-white p-4 duration-200 ease-in-out scrollbar-thin md:w-[40%] lg:w-[18%] lg:translate-x-0`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <Image
                src={logo}
                alt="logo"
                className="w-[40%] py-2 lg:w-[50%]"
              />
              <button
                onClick={() => setIsShown(!isShown)}
                className="flex cursor-pointer items-center bg-transparent text-2xl lg:hidden"
              >
                {isShown ? <LiaTimesSolid /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>

            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  href={"/dashboard"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/dashboard")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <TbSmartHome className="text-xl" />
                  <span className="text-sm font-semibold antialiased">
                    Dashboard
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/dashboard/company-management"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/dashboard/company-management")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <Building2 size={18} />
                  <span className="text-sm font-semibold antialiased">
                    Company Management
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/dashboard/manage-branches"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/dashboard/manage-branches")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <Building2 size={18} />
                  <span className="text-sm font-semibold antialiased">
                    Branch Management
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/dashboard/customers"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/dashboard/customers")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <UserRound size={18} className="text-xl" />
                  {/* <Landmark size={18} className="text-xl" /> */}
                  <span className="text-sm font-semibold antialiased">
                    Customers
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/dashboard/manage-admin"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/dashboard/manage-admin")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <Bolt size={18} className="text-xl" />
                  {/* <Landmark size={18} className="text-xl" /> */}
                  <span className="text-sm font-semibold antialiased">
                    System Users
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/organizer/123/reporting"}
                  className={`flex items-center space-x-3 px-4 py-3 text-base ${
                    pathname.endsWith("/organizer/123/reporting")
                      ? "bg-[#EFF8FF] text-primary60"
                      : ""
                  } hover: rounded-md border-primary60 font-visbymedium text-gray-600 antialiased duration-100 ease-in hover:bg-[#EFF8FF] hover:text-primary60`}
                >
                  <ChartNoAxesColumn size={18} className="text-xl" />
                  <span className="text-sm font-semibold antialiased">
                    Reporting
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-x-3 rounded-md bg-layoutBg100 px-4 py-8">
            <BiSupport className="text-secondary1" />
            <div className="flex space-x-1 font-visbymedium text-sm antialiased">
              <h2>Need help?</h2>
              <button className="font-visbybold text-secondary1">Ask us</button>
            </div>
          </div>
        </div>

        <div className="absolute min-h-screen w-[100%] lg:left-[18%] lg:w-[82%]">
          <div className="fixed left-0 right-0 z-30 max-w-[100%] bg-white lg:left-[18%] lg:w-[82%]">
            <div className="flex max-w-full items-center justify-between border-transparent border-b-gray-200 py-3 pr-4">
              <div className="flex flex-1 items-center space-x-2">
                <button
                  onClick={() => setIsShown(!isShown)}
                  className="flex cursor-pointer items-center bg-transparent text-2xl lg:hidden"
                >
                  {isShown ? <LiaTimesSolid /> : <HiOutlineMenuAlt3 />}
                </button>
                <button className="flex w-[30%] items-center space-x-2 rounded-full bg-layoutBg200 px-4 py-2.5 font-visbysemibold text-xs text-gray-600 antialiased">
                  {/* <Image src={searchIcon} alt="icon" /> */}
                  <span>Search app...</span>
                </button>
              </div>
              <div className="flex items-center space-x-8 antialiased">
                <button className="font-visbysemibold text-sm">
                  Switch to attendee
                </button>
                <button className="relative">
                  <RiNotification3Line />
                  <div className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-red-800"></div>
                </button>
                <button>
                  <Avatar className="h-7 w-7">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </button>
              </div>
            </div>
          </div>
          {/* <PortalHeader title={title} /> Pass the title prop */}
          <div className="font-sans mt-[4.25rem] min-h-screen rounded-tl-2xl bg-layoutBg100 px-6 py-4 antialiased">
            {children}
          </div>
        </div>
      </div>
      {isShown && (
        <div
          onClick={() => setIsShown(!isShown)}
          className="fixed left-0 top-0 z-[35] flex h-[100vh] w-full items-center justify-center bg-[#00000080]"
        >
          <h6>.</h6>
        </div>
      )}
    </div>
  );
};

export default PortalLayout;
