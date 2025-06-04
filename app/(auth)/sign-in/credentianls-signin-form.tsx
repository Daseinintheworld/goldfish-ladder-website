"use client";

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
    <div>
      <form action={action} className="grid grid-cols-3 gap-4 items-center">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        {/* EMAIL field */}
        <label htmlFor="email" className="col-span-1 text-3xl font-bebas">
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
            className="w-full px-4 py-2 border-2 border-primaryColor bg-white rounded-2xl placeholder:text-sm"
          />
        </div>

        {/* PASSWORD field */}
        <label htmlFor="password" className="col-span-1 text-3xl font-bebas">
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
            className="w-full px-4 py-2 border-2 border-primaryColor bg-white rounded-2xl placeholder:text-sm"
          />
        </div>

        {/* Login button */}
        <SignInButton />
      </form>

      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
    </div>
  );
};

export default CredentialsSignInForm;
