"use client";
import React, { useState } from "react";
import emailicon from "@/../public/assets/onboarding/onboarding02.svg";
import {
  Button,
  FormWrapper,
  PasswordField,
  TextField,
} from "@/components/form-element";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Onboarding from "../components/Onboarding";
import Link from "next/link";
import { web_app } from "@/helpers/path.helpers";
// import { CustomGoogleSigninButton } from "@/components/global";
import { customToast } from "@/helpers/utils.helper";
import { _forgotPassword, _login } from "@/service/auth.service";
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

  const onSubmit = async (data: { email: string }) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await _forgotPassword(data);
      if (response.status == "successful") {
        setIsLoading(false);
        customToast(
          "Forgot Password!",
          response.message ||
            "Please check your email for password recovery instructions"
        );

        router.push(web_app.reset_password);
      } else {
        setIsLoading(false);
        customToast(
          "Login Failed!",
          response.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setIsLoading(false);
      customToast("Login Failed!", "System error. Please try again.");
    }
  };

  return (
    <Onboarding>
      <div className="flex h-full justify-center">
        <div className="w-[370px] pt-8 lg:pt-16">
          <h1 className="font-visbybold text-xl text-gray8 antialiased lg:text-2xl">
            Password Recovery
          </h1>
          <p className="mt-2 font-visbymedium text-sm text-gray-600 antialiased lg:text-sm">
            Kindly provide your registered email for password recovery
            instructions
          </p>
          <FormWrapper methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              imgsrc={emailicon}
              label="Email"
              type="text"
              name="email"
              placeholder="Please provide your email!"
            />

            <Button text="Continue" isLoading={isLoading} />
          </FormWrapper>

          <div className="test-sm mt-4 flex justify-center space-x-2 font-visbymedium antialiased lg:text-base">
            <span>{`Remember your password?`}</span>
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
          {/* <CustomGoogleSigninButton /> */}
        </div>
      </div>
    </Onboarding>
  );
};

export default Page;
