"use client";
import React from "react";
import { OrganizerProfile } from "../../../types";
import { columns, team_member_columns } from "@/components/table/columns";
import CustomTable from "@/components/table/CustomTable";
import { Plus } from "lucide-react";
import { OrganizationUser } from "@/utils/types.utils";
import { useModal } from "@/providers/modal-providers";
import AddUserModal from "../../../_components/settings/AddUserModal";
type Props = {
  //   fetchData?: () => Promise<any>;
  organizer: OrganizerProfile | null;
};

const data: any[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const organizer_data: OrganizationUser[] = [
  {
    id: "m5gr84i9",
    first_name: "Jone ",
    last_name: " Doe",
    status: "success",
    email: "ken99@yahoo.com",
    role: {
      name: "Organizer",
      id: "m5gr84129",
    },
  },

  {
    id: "m5gr84349",
    first_name: "Jacob ",
    last_name: " Doe",
    status: "success",
    email: "jacob.doe@yahoo.com",
    role: {
      name: "Organizer",
      id: "m5gr84129",
    },
  },
];

function ActionButton() {
  const { setOpen } = useModal();
  return (
    <button
      className="flex items-center justify-center space-x-2 rounded-md border border-primary50 bg-[#EFF8FF] px-4 py-2"
      onClick={() => setOpen(<AddUserModal />)}
    >
      <Plus size={24} className="text-primary50" />
      <span className="font-visbysemibold text-sm text-primary50 antialiased">
        Add Team Member
      </span>
    </button>
  );
}
const TeamManagement = ({ organizer }: Props) => {
  return (
    <div>
      <CustomTable
        title="Merchandize Order"
        actionButton={ActionButton()}
        columns={team_member_columns}
        data={organizer_data}
      />
    </div>
  );
};

export default TeamManagement;
