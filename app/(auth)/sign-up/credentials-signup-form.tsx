"use client";

import { signUpUser } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <div className="mt-8 w-full col-span-3">
        <button
          disabled={pending}
          type="submit"
          className="w-full bg-[#FFB32C] text-white text-5xl font-medium font-bebas py-2 lg:py-3 rounded-2xl shadow-lg  hover:bg-[#ffd07f] transition-colors mb-7 mt-11 "
        >
          {pending ? "Submitting..." : "Sign Up"}
        </button>
      </div>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="grid md:mx-[15px] mx-[0] grid-cols-3 gap-y-12 gap-x-6">
        {/* NAME field */}
        <label
          htmlFor="name"
          className="col-span-1 flex items-center md:text-[25px] text-[17px] font-[400] font-bebas"
        >
          FULL NAME:
        </label>
        <div className="col-span-2">
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="email"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl  "
          />
        </div>

        {/* EMAIL field */}
        <label
          htmlFor="email"
          className="col-span-1 flex items-center md:text-[25px] text-[17px] font-[400] font-bebas"
        >
          E-MAIL:
        </label>
        <div className="col-span-2">
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl"
          />
        </div>

        {/* PASSWORD field */}
        <label
          htmlFor="password"
          className="col-span-1 flex items-center md:text-[25px] text-[17px] font-[400] font-bebas"
        >
          PASSWORD:
        </label>
        <div className="col-span-2">
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="email"
            placeholder="Password"
            className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl"
          />
        </div>

        {/* CONFIRM PASSWORD field */}
        <label
          htmlFor="confirmPassword"
          className="col-span-1 flex items-center md:text-[25px] text-[17px] font-[400] font-bebas"
        >
          CONFIRM PASSWORD:
        </label>
        <div className="col-span-2">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            autoComplete="email"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl"
          />
        </div>
      </div>
      {/* register button */}
      <SignUpButton />

      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
    </form>
  );
};

export default CredentialsSignUpForm;
