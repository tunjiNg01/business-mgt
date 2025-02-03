import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateEvent = () => {
  return (
    <Link href={""}>
      <div className="flex h-[150px] w-[150px] flex-col items-center justify-center space-y-1 rounded-xl border border-[#EDEDF1] bg-layoutBg500">
        <Plus size={24} className="text-primary50" />
        <h2 className="font-visbysemibold text-sm antialiased">Create Event</h2>
      </div>
    </Link>
  );
};

export default CreateEvent;
