"use server";
import { customToast } from "@/helpers/utils.helper";
import {
  ActivateUser,
  CreatePassword,
  ForgotPassword,
  Login,
  ResendOtp,
  ResetPassword,
  Signup,
  ValidateOtp,
} from "@/lib/types.lib";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { log } from "console";
import { status } from "nprogress";

const axiosConfig = (token: string): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

/**
 * Send a login request to the auth service.
 * @param {Login} params - A JSON object with the user's email address and password.
 * @returns {Promise<Login>} - The user data returned from the auth service.
 */
export const _login = async (params: Login) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/login`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error: any) {
    console.error("__Login_error__:", error);

    console.error(
      "___OTP_Login_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};

/**
 * Send a signup request to the auth service.
 * @param {Signup} params - A JSON object with the user's email address and password.
 * @returns {Promise<Signup>} - The user data returned from the auth service with the reset password token.
 */
export const _signup = async (params: Signup) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/signup`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error: any) {
    console.log(error);

    console.error(
      "___SIGNUP_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};

/**
 * Send a forgot password request to the auth service.
 * @param {Signup} params - Email address of the user requesting a password reset.
 * @returns {Promise<Signup>} - The user data returned from the auth service with the reset password token.
 */
export const _forgotPassword = async (params: ForgotPassword) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/forgot-password`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error: any) {
    console.error("Error initiating forgot password:", error.response.data);

    console.error(
      "___Forgot_Password_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};

/**
 * Send a password reset request to the auth service.
 * @param {ResetPassword} params - A JSON object with the user's reset password token and new password.
 * @returns {Promise<ResetPassword>} - The user data returned from the auth service with the reset password token.
 */
export const _resetPassword = async (params: ResetPassword) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/reset-password`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error) {
    console.error("Error initiating forgot password:", error);
    throw error;
  }
};

/**
 * Activate a user's profile.
 * @param {ActivateUser} params - The user's id and activation token.
 * @returns {Promise<ActivateUser>} - The user data returned from the auth service.
 */
export const _activateUser = async (params: ActivateUser) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/activate-profile`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error) {
    console.error("Error initiating forgot password:", error);
    throw error;
  }
};

/**
 * Resend a one-time password (OTP) to the user.
 * @param {ResendOtp} params - A JSON object with the user's email address and password.
 * @returns {Promise<ResendOtp>} - The user data returned from the auth service with the OTP.
 */
export const _resendOtp = async (params: ResendOtp) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/resend-otp`;
    const response = await axios.post(url, params);
    return handleResponse(response);
  } catch (error: any) {
    console.log(error);

    console.error(
      "___Resend_OTP_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};

export const _validateOtp = async (params: ValidateOtp) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/validate-otp`;
    const response = await axios.post(url, params);
    // log(response.data);
    return handleResponse(response);
  } catch (error: any) {
    console.log(error);

    console.error(
      "___OTP_validation_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};

export const _createPassword = async (params: CreatePassword) => {
  try {
    const url = `${process.env.OPEN_BASE_URL}/set-password`;
    const response = await axios.post(url, params);
    // log(response.data);
    return handleResponse(response);
  } catch (error: any) {
    console.log(error);

    console.error(
      "___OTP_validation_Error__:",
      error.response.data || "Network error. Please try again.",
    );
    return (
      error.response.data || {
        status: "failed",
        message: "Network error. Please try again.",
      }
    );
  }
};
