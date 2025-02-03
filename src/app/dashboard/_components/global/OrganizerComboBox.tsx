"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@radix-ui/react-avatar";

const sample_data = [
  {
    organizer_name: "Organizer 1",
    brand_logo: (
      <Avatar className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t from-[#8EBAFF] to-[#F8FFEA] font-visbysemibold text-sm antialiased">
        EA
      </Avatar>
    ),
    id: "2344dgee",
  },
  {
    organizer_name: "Festive of love",
    brand_logo: <Avatar>HM</Avatar>,
    id: "2344dg5e",
  },
];

const frameworks = [
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

export function OrganizerComboBox() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-2"
        >
          {id ? (
            <div className="flex items-center space-x-2">
              <Avatar className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t from-[#8EBAFF] to-[#F8FFEA] font-visbysemibold text-xs antialiased">
                HG
              </Avatar>
              <div className="antialiased">
                <h2 className="font-visbysemibold text-xs text-gray9">
                  {
                    sample_data.find((framework) => framework.id === id)
                      ?.organizer_name
                  }
                </h2>
                <h3 className="font-visbysemibold text-xs text-gray-500">
                  ID: {sample_data.find((framework) => framework.id === id)?.id}
                </h3>
              </div>
            </div>
          ) : (
            <h3 className="py-2 font-visbysemibold text-xs text-gray-500">
              Select Organizer...
            </h3>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="">
          <CommandInput
            className="font-visbymedium antialiased placeholder:font-visbymedium placeholder:antialiased"
            placeholder="Search for event..."
          />
          <CommandList className="">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {sample_data.map((organizer) => (
                <CommandItem
                  className="flex items-center justify-between text-sm"
                  key={organizer.id}
                  value={organizer.id}
                  onSelect={(currentValue) => {
                    setId(currentValue === id ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Avatar className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t from-[#8EBAFF] to-[#F8FFEA] font-visbysemibold text-xs antialiased">
                      HG
                    </Avatar>
                    <div className="antialiased">
                      <h2 className="font-visbysemibold text-xs text-gray9">
                        {organizer.organizer_name}
                      </h2>
                      <h3 className="font-visbysemibold text-xs text-gray-500">
                        ID: {organizer.id}
                      </h3>
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "mr-0 h-4 w-4 shrink-0",
                      id === organizer.id ? "opacity-50" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <div className="m-2 flex justify-center">
              <button className="w-full rounded-lg bg-primary60 py-2 font-visbysemibold text-xs text-white antialiased">
                Add Organizer
              </button>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
