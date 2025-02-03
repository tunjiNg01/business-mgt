"use client";
import React from "react";
import { OrganizerProfile } from "../../../types";
import {
  columns,
  order_columns,
  team_member_columns,
} from "@/components/table/columns";
import CustomTable from "@/components/table/CustomTable";
import { ListFilter, Plus } from "lucide-react";
import { Order, OrganizationUser } from "@/utils/types.utils";
import { useModal } from "@/providers/modal-providers";
import AddUserModal from "../../../_components/settings/AddUserModal";
import CustomSheet from "@/components/global/CustomSheet";
import FilterForm from "./FilterForm";
type Props = {
  //   fetchData?: () => Promise<any>;
  organizer: OrganizerProfile | null;
};

const data: Order[] = [
  {
    id: "m5gr84i9",
    ticket_id: "m5gr84i9",
    event_title: "ERAS NEW TOUR 20219",
    price: "USD 5.30",
    date: "2024-04-18",
    status: "success",
    qty: 2,
    attendees: {
      first_name: "Luke",
      last_name: "Hayden",
    },
  },
];

function ActionButton() {
  const { setOpen } = useModal();
  return (
    <CustomSheet
      buttonText="Filters"
      sheetTitle="Filter Options"
      sheetDescription="Filter your order list"
      buttonIcon={<ListFilter size={16} />}
      children={<FilterForm />}
    />
    // <button
    //   className="flex items-center justify-center space-x-2 rounded-md border border-primary50 bg-[#EFF8FF] px-4 py-2"
    //   onClick={() => setOpen(<AddUserModal />)}
    // >
    //   <Plus size={24} className="text-primary50" />
    //   <span className="font-visbysemibold text-sm text-primary50 antialiased">
    //     Filter
    //   </span>
    // </button>
  );
}
const TeamManagement = ({ organizer }: Props) => {
  return (
    <div>
      <CustomTable
        title="Tickets Orders"
        actionButton={ActionButton()}
        columns={order_columns}
        data={data}
        search_field="event_title"
      />
    </div>
  );
};

export default TeamManagement;
