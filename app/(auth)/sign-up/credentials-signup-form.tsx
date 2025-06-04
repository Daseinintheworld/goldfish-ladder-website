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
      <div className="mt-3 w-full col-span-3">
        <button
          disabled={pending}
          type="submit"
          className="w-full bg-[#FFB32C] text-white text-3xl font-medium font-bebas py-2  rounded-2xl shadow-lg  hover:bg-[#ffd07f] transition-colors mb-3 mt-4 "
        >
          {pending ? "Submitting..." : "Register"}
        </button>
      </div>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="grid md:mx-[15px] mx-[0] grid-cols-3 gap-y-4 gap-x-4">
        {/* NAME field */}
        <label
          htmlFor="name"
          className="col-span-1 flex items-center md:text-[20px] text-[18px] font-[400] font-bebas"
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
            className="w-full px-[7px] py-2 border-2 border-orange-300 bg-white rounded-2xl  placeholder:text-sm"
          />
        </div>

        {/* EMAIL field */}
        <label
          htmlFor="email"
          className="col-span-1 flex items-center md:text-[20px] text-[18px] font-[400] font-bebas"
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
            className="w-full px-[7px] py-2 border-2 border-orange-300 bg-white rounded-2xl placeholder:text-sm"
          />
        </div>

        {/* PASSWORD field */}
        <label
          htmlFor="password"
          className="col-span-1 flex items-center md:text-[20px] text-[18px] font-[400] font-bebas"
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
            className="w-full px-[7px] py-2 border-2 border-orange-300 bg-white rounded-2xl placeholder:text-sm"
          />
        </div>

        {/* CONFIRM PASSWORD field */}
        <label
          htmlFor="confirmPassword"
          className="col-span-1 flex items-center md:text-[20px] text-[18px] font-[400] font-bebas"
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
            className="w-full px-4 py-[7px] border-2 border-orange-300 bg-white rounded-2xl placeholder:text-sm"
          />
        </div>
      </div>
      {/* register button */}
      <SignUpButton />

      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}


                    {/* Role Selection */}
              <div className="w-full flex flex-col   font-bebas">
                <div className="md:col-span-2 flex flex-col  space-x-8 space-y-1">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-black appearance-none relative rounded-none checked:bg-transparent checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-[10px] checked:before:h-[10px] lg:checked:before:w-[14px] lg:checked:before:h-[14px] checked:before:bg-orange-300"
                    />
                    <span className="ml-2  font-medium md:text-[15px] text-[12px]">
                      REMEMBER ME
                    </span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      value="mentor"
                      className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-black appearance-none relative rounded-none checked:bg-transparent checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-[10px] checked:before:h-[10px] lg:checked:before:w-[14px] lg:checked:before:h-[14px] checked:before:bg-orange-300"
                    />
                    <span className="ml-2 md:text-[15px] text-[12px] font-medium">
                      I do accept the{" "}
                      <span className="underline">Terms and condition</span> of
                      your site.
                    </span>
                  </label>
                </div>
              </div>
    </form>
  );
};

export default CredentialsSignUpForm;
