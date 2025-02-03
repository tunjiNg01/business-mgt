"use client";
import React, { useState } from "react";
import emailicon from "@/../public/assets/onboarding/onboarding02.svg";
import googleicon from "@/../public/assets/onboarding/google-logo.svg";
import Image from "next/image";
import { TbEyeClosed } from "react-icons/tb";
import { Button, FormWrapper, TextField } from "@/components/form-element";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import PasswordField from "@/components/form-element/PasswordField";
import Onboarding from "../components/Onboarding";
import Link from "next/link";
import { web_app } from "@/helpers/path.helpers";
import { useSonner } from "sonner";
import { _signup } from "@/service/auth.service";
import { Sign } from "crypto";
import { Signup } from "@/lib/types.lib";
import { toast } from "sonner";
import { customToast } from "@/helpers/utils.helper";

const Page = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const defaultValues = {
    email: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: Signup) => {
    console.log(data);
    setIsLoading(true);
    const response = await _signup(data);
    console.log("ERROR:", response.message);
    console.log(response);

    try {
      if (response.status === "successful") {
        setIsLoading(false);
        customToast(
          "Signup Successful!",
          response.message || "Please check your email for verification",
        );
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("_id", response.id);
        router.push(web_app.account_verification);
      } else {
        setIsLoading(false);
        customToast(
          "Signup Failed!",
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error: any) {
      setIsLoading(false);
      customToast("Signup Failed!", "System error. Please try again.");
    }
  };

  return (
    <Onboarding>
      <div className="flex h-full justify-center">
        <div className="max-w-[370px] pt-8 lg:pt-16">
          <h1 className="font-visbybold text-xl text-black antialiased lg:text-2xl">
            Create an account
          </h1>
          <p className="font-visbymedium text-sm antialiased lg:text-base">
            Discover a wide variety of event and manage your bookings all in one
            place
          </p>
          <FormWrapper methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              imgsrc={emailicon}
              label="Email"
              type="text"
              name="email"
              placeholder="Please provide your email!"
            />
            {/* <PasswordField name="password" /> */}
            <Button text="Continue" isLoading={isLoading} />
          </FormWrapper>

          <div className="test-sm mt-4 flex justify-center space-x-2 font-visbymedium antialiased lg:text-base">
            <span>Already have an account?</span>
            <Link href={web_app.login}>
              <span className="cursor-pointer font-visbysemibold text-secondary1 antialiased">
                Sign In
              </span>
            </Link>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-1">
            <hr className="h-px w-[45%] border-0 bg-gray-200" />
            <p className="font-visbymedium text-sm text-gray-300 antialiased">
              OR
            </p>
            <hr className="h-px w-[45%] border-0 bg-gray-200" />
          </div>
          <button className="test-xs mt-8 flex w-full items-center justify-center space-x-8 rounded-full border border-gray9 p-2 font-visbybold text-gray9 antialiased">
            <Image src={googleicon} alt="google-icon" />
            <p> Sign Up with Google</p>
          </button>
        </div>
      </div>
    </Onboarding>
  );
};

export default Page;
