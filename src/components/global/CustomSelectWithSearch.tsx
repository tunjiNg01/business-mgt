"use client";

import * as React from "react";
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type props = {
  children: React.ReactNode;
  selectedValue: string;
  label: string;
};
export default function CustomSelectWithSearch({
  children,
  selectedValue,
  label,
}: props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <label className="mt-2 text-sm font-semibold text-gray-800 antialiased">
        {label}
      </label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-4 hover:bg-white"
        >
          {selectedValue ? (
            selectedValue
          ) : (
            <span className="font-visbymedium text-gray-500 antialiased">
              Select framework...
            </span>
          )}
          <ChevronDown size={16} className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-9 w-full placeholder:font-visbymedium placeholder:text-xs placeholder:antialiased"
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            {children}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
