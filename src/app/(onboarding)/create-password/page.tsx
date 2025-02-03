"use client";
import React, { useEffect, useState } from "react";
import emailicon from "@/../public/assets/onboarding/onboarding02.svg";
import googleicon from "@/../public/assets/onboarding/google-logo.svg";
import Image from "next/image";
import { TbEyeClosed } from "react-icons/tb";
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
import { customToast } from "@/helpers/utils.helper";
import { _createPassword } from "@/service/auth.service";
import { web_app } from "@/helpers/path.helpers";
const Page = () => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(sessionStorage.getItem("_id") || "");
  }, [userId]);
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string().required("Confirm Password is required"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const defaultValues = {
    cpassword: "",
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

  const onSubmit = async (data: { password: string; cpassword: string }) => {
    try {
      setIsLoading(true);
      const response = await _createPassword({
        id: userId,
        password: data.password,
      });
      if (response.status === "successful") {
        setIsLoading(false);
        customToast(
          "Create Password Successful!",
          response.message || "Please check your email for verification"
        );
        router.push(web_app.select_account);
      } else {
        setIsLoading(false);
        customToast(
          "Create Password Failed!",
          response.message || "Something went wrong. Please try again."
        );
      }
    } catch (error: any) {}
  };

  return (
    <Onboarding>
      <div className="flex h-full justify-center">
        <div className="w-[370px] pt-8 lg:pt-16">
          <h1 className="font-visbybold text-xl text-black antialiased lg:text-2xl">
            Create password
          </h1>
          <p className="font-visbymedium text-sm antialiased lg:text-base">
            Please create password below
          </p>
          <div className="min-w-[100%]">
            <FormWrapper methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <PasswordField label="Create Password" name="password" />
              <PasswordField label="Confirm Password" name="cpassword" />
              <Button text="Continue" isLoading={isLoading} />
            </FormWrapper>
          </div>
        </div>
      </div>
    </Onboarding>
  );
};

export default Page;
