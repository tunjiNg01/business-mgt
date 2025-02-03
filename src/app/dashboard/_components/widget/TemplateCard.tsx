import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  label: string;
};

function TemplateCard({ image, label }: Props) {
  return (
    <div className="relative h-[150px] w-[150px] overflow-hidden rounded-xl">
      <Image src={image} alt="template" />
      <h1 className="text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform font-visbybold text-2xl text-white antialiased">
        {label}
      </h1>
    </div>
  );
}

export default TemplateCard;
