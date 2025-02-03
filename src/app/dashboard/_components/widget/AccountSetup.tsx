import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

const AccountSetupFlow = (props: Props) => {
  return (
    <div className="mt-6 rounded-xl bg-white p-4">
      <h1 className="font-visbybold text-lg text-[#040820] antialiased">
        Plan a successfull event
      </h1>
      <p className="font-visbymedium text-sm text-gray9 antialiased">
        Follow the step below to organise a successful event
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-primary60 bg-primary60 p-4">
          <h3 className="font-visbymedium text-sm text-white antialiased">
            Step 1
          </h3>

          <h3 className="mt-2 font-visbybold text-white">
            Setup your organization profile
          </h3>
          <p className="mt-3 font-visbymedium text-sm text-white antialiased">
            Publish in-person and virtual event and reach million of people
          </p>
          <Link href={"#"} className="mt-4">
            <button className="bg-se mt-4 flex items-center space-x-2 rounded-full bg-white px-5 py-2 font-visbysemibold text-sm text-secondary1 antialiased">
              <span>Start here</span>
              <GoArrowUpRight />
            </button>
          </Link>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="font-visbymedium text-sm text-gray9 antialiased">
            Step 2
          </h3>

          <h3 className="mt-2 font-visbybold text-gray9 antialiased">
            Create an event
          </h3>
          <p className="mt-3 font-visbymedium text-sm text-gray-600 antialiased">
            Publish in-person and virtual event and reach million of people
          </p>
          <Link href={"#"} className="mt-4">
            <button className="mt-4 flex space-x-2 rounded-full py-2 font-visbysemibold text-sm text-secondary1 antialiased">
              <span> Next up</span>
            </button>
          </Link>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="e font-visbymedium text-sm text-gray9 antialiased">
            Step 3
          </h3>

          <h3 className="mt-2 font-visbybold text-gray9 antialiased">
            Create an event
          </h3>
          <p className="mt-3 font-visbymedium text-sm text-gray-600 antialiased">
            Publish in-person and virtual event and reach million of people
          </p>
          <Link href={"#"} className="mt-4">
            <button className="mt-4 flex space-x-2 rounded-full py-2 font-visbysemibold text-sm text-secondary1 antialiased">
              <span>Next up</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSetupFlow;
