import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Prop = {
  label: string;
  placeholderText: string;
  items: any[];
};
export default function CustomSelect({ label, placeholderText, items }: Prop) {
  return (
    <Select>
      <label className="text-sm font-semibold text-gray-800 antialiased">
        {label}
      </label>
      <SelectTrigger className="mt-0 w-full font-visbymedium text-sm antialiased focus:ring-0 focus:ring-offset-0">
        <SelectValue
          placeholder={"placeholderText"}
          className="placeholder:text-gray-500! text-sm"
        />
      </SelectTrigger>
      <SelectContent className="font-visbymedium text-gray-800 antialiased">
        <SelectGroup>
          <SelectLabel className="text-sm placeholder:text-gray-500">
            {label}
          </SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
