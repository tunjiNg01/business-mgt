"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const TabsComponent = ({ items }: { items: Array<any> }) => {
  const [selectTab, setSelectedTab] = useState(0);
  const firstBtnRef = React.useRef<HTMLButtonElement>(null);
  useEffect(() => {
    firstBtnRef.current?.focus();
  }, []);
  return (
    <div className="mx-auto mt-8">
      <div>
        <div className="flex">
          <div className="flex w-full items-center overflow-x-scroll border-b px-0 duration-700 ease-in-out md:overflow-visible">
            <div className="flex items-center space-x-1 md:space-x-4">
              {items.map((item, index) => (
                <button
                  ref={index === 0 ? firstBtnRef : null}
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`box-border text-nowrap border-b-2 border-transparent px-2 py-2 font-visbysemibold text-sm font-medium transition-all duration-75 ${
                    selectTab === index
                      ? "border-b-2 border-primary text-primary60"
                      : "text-gray-600"
                  } hover:text-orange text-gray8 antialiased outline-none duration-300 ease-in-out`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 p-1.5">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectTab === index ? "" : "hidden"} `}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
