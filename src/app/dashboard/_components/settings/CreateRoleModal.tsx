import { InputWrapper } from "@/app/(organizer-app)/_components";
import CustomModal from "@/components/global/CustomModal";
import { cn } from "@/lib/utils";
import { OrganizationUser } from "@/utils/types.utils";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateRoleModal = () => {
  const form = useForm<OrganizationUser>();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<OrganizationUser> = (data) => {};
  return (
    <CustomModal
      title="Add User"
      subheading="Add user to your organization team"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper header="First name" description="">
          <input
            type="text"
            placeholder="Enter the user first name"
            className={cn(
              "mt-3 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none placeholder:font-visbymedium placeholder:text-xs placeholder:antialiased",
              errors.first_name ? "border-red-500 bg-red-50" : "",
            )}
            {...register("first_name", {
              required: "First name is requred",
            })}
          />
          {errors.first_name && (
            <small className="font-visbysemibold text-xs text-red-500 antialiased">
              {errors.first_name?.message}
            </small>
          )}
        </InputWrapper>

        <InputWrapper header="Last name" description="">
          <input
            type="text"
            placeholder="Enter the user last name"
            className={cn(
              "mt-3 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none placeholder:font-visbymedium placeholder:text-xs placeholder:antialiased",
              errors.last_name ? "border-red-500 bg-red-50" : "",
            )}
            {...register("last_name", {
              required: "Last name is requred",
            })}
          />

          {errors.last_name && (
            <small className="font-visbysemibold text-xs text-red-500 antialiased">
              {errors.last_name?.message}
            </small>
          )}
        </InputWrapper>

        <InputWrapper header="Email" description="">
          <input
            type="text"
            placeholder="Enter the user email"
            className={cn(
              "mt-3 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none placeholder:font-visbymedium placeholder:text-xs placeholder:antialiased",
              errors.email ? "border-red-500 bg-red-50" : "",
            )}
            {...register("email", {
              required: "Email is requred",
            })}
          />
          {errors.email && (
            <small className="font-visbysemibold text-xs text-red-500 antialiased">
              {errors.email?.message}
            </small>
          )}
        </InputWrapper>

        <InputWrapper header="Phone Number" description="">
          <input
            type="text"
            placeholder="Enter the user phone number"
            className={cn(
              "mt-3 w-full rounded-lg border border-primary50 bg-[#DEF1FF] px-4 py-2 outline-none placeholder:font-visbymedium placeholder:text-xs placeholder:antialiased",
              errors.phone_number ? "border-red-500 bg-red-50" : "",
            )}
            {...register("phone_number", {
              required: "Phone number is requred",
            })}
          />
          {errors.phone_number && (
            <small className="font-visbysemibold text-xs text-red-500 antialiased">
              {errors.phone_number?.message}
            </small>
          )}
        </InputWrapper>
        <div className="flex justify-end">
          <button className="mt-4 rounded-full bg-primary60 px-4 py-2 font-visbysemibold text-sm text-white antialiased">
            Add User
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default CreateRoleModal;
