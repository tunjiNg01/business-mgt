import React from "react";
import Image from "next/image";
import onboardingImg from "@/../public/assets/onboarding/onbording01.svg";
import logo from "@/../public/next.svg";

const Onboarding = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-[100vh] grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div className="ml-4 mr-4 mt-8 lg:ml-24 lg:mr-0">
        <div className="">
          <Image className="w-32 lg:w-32" src={logo} alt="logo" />
        </div>
        {children}
      </div>
      <div className="hidden h-full bg-onboardingImg object-fit p-12 lg:block">
        <h1 className="font-visbybold text-5xl text-gray-900 antialiased">
          Manage your
          <br /> customer ticket
        </h1>
        <p className="mt-4 font-visbymedium text-gray-900 antialiased">
          Extensive company profiles: Create profiles with fields for company
          name, address, contact details, and contact persons.
        </p>
        {/* <Image
              src={onboardingImg}
              className="object-cover"
              alt="onboarding-img"
            /> */}
      </div>
    </div>
  );
};

export default Onboarding;
