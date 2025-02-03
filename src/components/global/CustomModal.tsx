"use client";
import { useModal } from "@/providers/modal-providers";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  title: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, defaultOpen, subheading, title }: Props) => {
  const { isOpen, setClose } = useModal();
  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="h-screen overflow-y-auto bg-black bg-card font-visbysemibold antialiased md:h-fit md:max-h-[700px]">
        <DialogHeader className="pt-4 text-left">
          <DialogTitle className="font-visbybold text-xl antialiased">
            {title}
          </DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
