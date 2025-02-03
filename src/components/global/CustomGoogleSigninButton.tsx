import React from "react";
import Image from "next/image";
import googleicon from "@/../public/assets/onboarding/google-logo.svg";
import { signIn } from "next-auth/react";

type Props = {};

const CustomGoogleSigninButton = (props: Props) => {
  return (
    <button
      className="test-xs mt-8 flex w-full items-center justify-center space-x-8 rounded-full border border-gray9 p-2 font-visbybold text-gray9 antialiased"
      onClick={() => signIn("google")}
    >
      <Image src={googleicon} alt="google-icon" />
      <p> Sign in with Google</p>
    </button>
  );
};

export default CustomGoogleSigninButton;
