import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";

type Props = {
  className?: string;
  buttonText?: string;
  sheetTitle?: string;
  sheetDescription?: string;
  type?: string;
  children?: React.ReactNode;
  buttonIcon?: React.ReactNode;
};
export default function CustomSheet({
  className,
  buttonText,
  sheetTitle,
  buttonIcon = <Plus size={24} />,
  sheetDescription,
  type,
  children,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-2 rounded-lg border border-primary60 bg-[#EFF8FF] px-4 py-2 font-visbysemibold text-sm text-primary60 hover:bg-[#EFF8FF]"
        >
          {buttonIcon}
          <span>{buttonText}</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-8">
          <SheetTitle className="font-visbysemibold text-lg antialiased">
            {sheetTitle}
          </SheetTitle>
          <SheetDescription className="font-visbymedium text-sm antialiased">
            {sheetDescription}
          </SheetDescription>
        </SheetHeader>
        {children}
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
