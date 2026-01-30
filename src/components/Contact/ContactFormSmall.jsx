"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";
import { sendGTMEvent } from "@next/third-parties/google";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ContactForm = ({ login, location }) => {
  const form = useRef();
  const recaptchaRef = useRef();

  const [token, setToken] = useState(null);
  const [err, setErr] = useState("");
  const [submitState, setSubmitState] = useState(null);
  const [messageLength, setMessageLength] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  function onChange(value) {
    setToken(value);
  }

  const onSubmit = async (data) => {
    if (RECAPTCHA_SITE_KEY && !token) {
      setErr("Please complete the ReCAPTCHA");
      setSubmitState("error");
      return;
    }

    if (data.client_message > 2000) {
      setErr("Message too long");
      setSubmitState("error");
      return;
    }

    try {
      if (RECAPTCHA_SITE_KEY) {
        const response = await fetch("/api/verify-recaptcha", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error("ReCAPTCHA verification failed");
        }
      }
      const payload = {
        event: "formSubmitted",
        action: "requestAppointment",
        location: location,
      };

      sendGTMEvent(payload);
      // Proceed with email sending

      // Set isExistingPatient to true for different email
      data.isExistingPatient = true;
      await sendEmail(data);
      setSubmitState("success");
      reset();
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
      setSubmitState("error");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }

    setTimeout(() => {
      setSubmitState(null);
    }, 3000);
  };

  return (
    <div className="rounded-lg max-h-[90vh] overflow-scroll">
      <form
        className="flex flex-col m-0 gap-2"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-bold text-center text-lg">
          Please{" "}
          <a className="text-[#1B9EE3]" href="tel:604-736-7377">
            call
          </a>{" "}
          or{" "}
          <a
            className="text-[#1B9EE3]"
            href="mailto:reception@broadwaysmiles.ca"
          >
            email
          </a>{" "}
          us, <br />
          or complete this form
        </h3>
        <div className="flex flex-col form-lg:flex-row justify-between gap-2">
          <div className="flex flex-col flex-grow">
            <label>
              First Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              {...register("first_name", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              placeholder="First Name"
              className={`border border-${
                errors.first_name?.message ? "rose-500" : "gray-300"
              } rounded-md p-1 md:p-2 text-sm`}
              aria-describedby="firstNameError"
            />
            <p
              data-testid="firstNameErrorMessage"
              role="alert"
              id="firstNameError"
              className="text-red-500 font-semibold"
            >
              {errors.first_name?.message}
            </p>
          </div>
          <div className="flex flex-col flex-grow">
            <label>
              Last Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              {...register("last_name", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              placeholder="Last Name"
              className={`border border-${
                errors.last_name?.message ? "rose-500" : "gray-300"
              } rounded-md p-1 md:p-2 text-sm`}
              aria-describedby="lastNameError"
            />
            <p
              data-testid="lastNameErrorMessage"
              role="alert"
              id="lastNameError"
              className="text-red-500 font-semibold"
            >
              {errors.last_name?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <label>
            Email <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="email"
            {...register("client_email", {
              required: "This field is required",
              pattern: {
                value: /^([A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className={`border border-${
              errors.client_email?.message ? "rose-500" : "gray-300"
            } rounded-md p-1 md:p-2 text-sm`}
            aria-describedby="emailError"
          />
          <p
            data-testid="emailErrorMessage"
            role="alert"
            id="emailError"
            className="text-xs text-red-500 font-semibold"
          >
            {errors.client_email?.message}
          </p>
        </div>
        <div className="flex flex-col">
          <label>
            Phone Number <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="tel"
            {...register("client_phone", {
              required: "This field is required",
              pattern: {
                value: /^(?:\+?1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                message: "Invalid phone number",
              },
            })}
            placeholder="+1 (604) 000-0000"
            className={`border border-${
              errors.client_phone?.message ? "rose-500" : "gray-300"
            } rounded-md p-1 md:p-2 text-sm`}
            aria-describedby="phoneError"
          />
          <p
            data-testid="phoneErrorMessage"
            role="alert"
            id="phoneError"
            className="text-xs text-red-500 font-semibold"
          >
            {errors.client_phone?.message}
          </p>
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            {...register("client_message", {
              maxLength: {
                value: 2000,
                maxLength: 2000,
                message: "Message must be less than 2000 characters",
              },
              onChange: (e) => {
                setMessageLength(e.target.value.length);
              },
            })}
            className="border border-gray-300 rounded-md px-2 pb-6 md:px-4 md:pt-4 md:pb-22 resize-none"
          />
          <p className=" text-slate-400">{messageLength} / 2000</p>
          <p role="alert" className="text-xs text-red-500 font-semibold">
            {errors.client_message?.message}
          </p>
        </div>
        {RECAPTCHA_SITE_KEY && (
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={onChange}
            />
          </div>
        )}
        {/* Submit Button */}
        <button className="mx-auto bg-[#0184C9] text-white px-4 py-3 rounded-lg hover:bg-[#1B9EE3] duration-500 ">
          Request Appointment
        </button>
      </form>
      {submitState === "success" && (
        <div role="alert" className="toast">
          <div className="alert alert-success text-white">
            <span data-testid="successMessage">Message Sent Successfully</span>
          </div>
        </div>
      )}
      {submitState === "error" && (
        <div role="alert" className="toast">
          <div className="alert alert-error text-white">
            <span>{err || "Error, please try again"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;