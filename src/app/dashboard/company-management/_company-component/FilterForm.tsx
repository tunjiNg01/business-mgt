import CustomCalender from "@/components/global/CustomCalender";
import CustomSelect from "@/components/global/CustomSelect";
import CustomSelectWithSearch from "@/components/global/CustomSelectWithSearch";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

const frameworks: any[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
const FilterForm = () => {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <form action="" className="space-y-4">
        <div>
          <CustomSelectWithSearch label="Event" selectedValue={value}>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  className="font-visbymedium antialiased"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CustomSelectWithSearch>
        </div>

        <div className="">
          <CustomSelect
            items={["pending", "successful", "cancelled"]}
            label="Order Status"
            placeholderText="Select order status"
          />
        </div>

        <div className="">
          <label className="mt-2 text-sm font-semibold text-gray-800 antialiased">
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-full rounded-lg border px-4 py-2.5 font-visbymedium text-xs text-gray-700 antialiased outline-none placeholder:font-visbymedium placeholder:text-gray-500 placeholder:antialiased"
              placeholder="Min amount"
            />
            <h2 className="font-visbymedium text-gray-600 antialiased">to</h2>
            <input
              type="text"
              placeholder="Max amount"
              className="w-full rounded-lg border px-4 py-2.5 font-visbymedium text-xs text-gray-700 antialiased outline-none placeholder:font-visbymedium placeholder:text-gray-500 placeholder:antialiased"
            />
          </div>
        </div>
        <div className="">
          <label className="mt-2 text-sm font-semibold text-gray-800 antialiased">
            Date
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="date"
              className="w-full rounded-lg border px-4 py-2.5 font-visbymedium text-xs text-gray-700 antialiased outline-none"
            />
            <h2 className="font-visbymedium text-gray-600 antialiased">to</h2>
            <input
              type="date"
              className="w-full rounded-lg border px-4 py-2.5 font-visbymedium text-xs text-gray-700 antialiased outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-full bg-primary60 px-4 py-2 font-visbysemibold text-sm text-white antialiased">
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
