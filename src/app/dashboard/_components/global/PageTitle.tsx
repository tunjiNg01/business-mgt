import React from "react";

type Props = {
  header: string;
  description: string;
};
const PageTitle = ({ header, description }: Props) => {
  return (
    <div>
      <div className="antiliased">
        <h1 className="font-visbybold text-xl text-gray9">{header}</h1>
        <h3 className="font-visbymedium text-sm text-gray-500 antialiased">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default PageTitle;
