"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <div className="mt-5 mb-2 w-full col-span-3">
        <button
          disabled={pending}
          type="submit"
          className="w-full bg-[#FFB32C] text-white text-5xl font-medium font-bebas py-2 lg:py-3 rounded-2xl shadow-lg  hover:bg-[#ffd07f] transition-colors mb-2 mt-5 "
        >
          {pending ? "Signing In..." : "Sign In"}
        </button>
      </div>
    );
  };

  return (
    <div className="relative bg-orange-50 rounded-lg  w-full max-w-[1040px] sm:mx-[30px] mx-[20px] animate-slide-up border-[#854836] border-[2px]  sm:mt-4 mt-7">
      <div className="pt-[20px] flex  flex-col justify-center items-center w-[80%] mx-auto">
        <h1 className="text-5xl font-bebas  font-medium mt-1 mb-10 text-center text-black">
          LOGIN
        </h1>

        <div className="flex justify-center items-center w-full">
          {/* Grid layout for form fields */}
          <div className="flex flex-col items-center w-full max-w-[800px]">
            <form
              action={action}
              className="grid md:mx-[15px] mx-[0] grid-cols-3 gap-y-5 gap-x-6 w-[90%] max-w-3xl"
            >
              <input type="hidden" name="callbackUrl" value={callbackUrl} />
              {/* EMAIL field */}
              <label
                htmlFor="email"
                className="col-span-1 flex items-center sm:text-[25px] text-[17px] font-[400] font-bebas"
              >
                E-MAIL:
              </label>
              <div className="col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl placeholder:text-sm"
                />
              </div>

              {/* PASSWORD field */}
              <label
                htmlFor="password"
                className="col-span-1 flex items-center sm:text-[25px] text-[19px] font-[400] font-bebas"
              >
                PASSWORD:
              </label>
              <div className="col-span-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                  autoComplete="password"
                  className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl placeholder:text-sm" 
                />
              </div>

              {/* Login button */}
              <SignInButton />
            </form>

            {data && !data.success && (
              <div className="text-center text-destructive">{data.message}</div>
            )}

            <div className="flex w-full justify-center items-center">
              <div className="w-[40%] border-[1px] border-black h-0.5  "></div>
              <p className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mx-[3%]">
                OR
              </p>
              <div className="w-[40%] border-[1px] border-black  "></div>
            </div>

            {/* Sign up with Selection */}
            <div className="w-full flex flex-col  items-center">
              <h2 className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mb-5 mt-6">
                Don&apos;t have an account?
              </h2>

              <Link
                href={"/sign-up"}
                className="text-lg font-bebas md:text-[22px] lg:text-2xl font-medium mb-12 text-[#854836]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialsSignInForm;
