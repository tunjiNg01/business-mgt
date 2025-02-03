import { InputWrapper } from "@/app/(organizer-app)/_components";
import CustomModal from "@/components/global/CustomModal";
import React from "react";

const AddSocialModal = () => {
  return (
    <CustomModal title="" subheading="">
      <InputWrapper
        header="Add Social Handle"
        description="Select name and provide your handle link"
      >
        <input
          type="text"
          className="mt-4 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none"
        />

        <input
          type="text"
          className="mt-4 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none"
        />
      </InputWrapper>
    </CustomModal>
  );
};

export default AddSocialModal;
