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
import { _login } from "@/service/auth.service";
const Page = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const defaultValues = {
    email: "",
    password: "",
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

  const onSubmit = async (data: { password: string; email: string }) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await _login(data);
      if (response.status == "successful") {
        setIsLoading(false);
        customToast(
          "Login Successful!",
          response.message || "Please check your email for verification"
        );
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("_id", response.id);
        router.push("/organizer/123");
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
            Sign in
          </h1>
          <p className="mt-2 font-visbymedium text-sm text-gray-600 antialiased lg:text-sm">
            Kindly provide your email and password to continue
          </p>

          <FormWrapper methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              imgsrc={emailicon}
              label="Email"
              type="text"
              name="email"
              placeholder="Please provide your email!"
            />
            <PasswordField label="Password" name="password" />
            <div className="flex justify-end">
              <Link
                href={web_app.forgot_password}
                className="mt-2 font-visbysemibold text-xs font-bold text-gray-600 antialiased"
              >
                Forgot Password
              </Link>
            </div>
            <Button text="Continue" isLoading={isLoading} />
          </FormWrapper>

          <div className="test-sm mt-4 flex justify-center space-x-2 font-visbymedium antialiased lg:text-base">
            <span>{`Don't have an account yet?`}</span>
            <Link href={web_app.signup}>
              <span className="cursor-pointer font-visbysemibold text-secondary1 antialiased">
                Sign Up
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
