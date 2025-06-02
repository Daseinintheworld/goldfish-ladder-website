import Link from "next/link";
import image from "@/assets/form/image.png";
import google from "@/assets/icons/google Icon.png";
import Image from "next/image";
import CredentialsSignUpForm from "./credentials-signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SignUpForm = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="container mx-auto py-8 px-10 max-w-7xl flex flex-col items-center animate-fade-in">
      {/* Logo */}
      <div className="text-center mb-4 lg:mb-8">
        <Link href="/">
          <Image
            src={image}
            alt="GoldFish Ladder"
            width={876}
            height={400}
            className=" h-auto mx-auto mb-4 animate-slide-down"
          />
        </Link>
      </div>

      {/* Form Container */}
      <div className="relative bg-orange-50 rounded-lg  w-full max-w-[1040px] mx-[30px] animate-slide-up border-[#854836] border-[2px]">
        <div className="pt-[20px] flex  flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto">
          <h1 className="text-5xl font-bebas  font-medium mt-7 mb-22 text-center text-black">
            SIGN-IN
          </h1>

          <div className="flex justify-center items-center w-full">
            {/* Grid layout for form fields */}
            <div className="flex flex-col items-center  w-full max-w-[800px]">
              <CredentialsSignUpForm />

              {/* Role Selection */}
              <div className="w-full flex flex-col  mt-4 font-bebas">
                <div className="md:col-span-2 flex flex-col  space-x-8 space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-black appearance-none relative rounded-none checked:bg-transparent checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-[10px] checked:before:h-[10px] lg:checked:before:w-[14px] lg:checked:before:h-[14px] checked:before:bg-orange-300"
                    />
                    <span className="ml-2  font-medium md:text-lg text-[13px]">
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
                    <span className="ml-2 md:text-lg text-[13px] font-medium">
                      I do accept the{" "}
                      <span className="underline">Terms and condition</span> of
                      your site.
                    </span>
                  </label>
                </div>
              </div>

              {/* Sign up with Selection */}
              <div className="w-full flex flex-col  items-center">
                <h2 className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mb-5 mt-6">
                  Sign-up with:
                </h2>
                <div className="flex flex-row gap-[8%] justify-center w-full mb-5">
                  <div className="flex flex-col items-center">
                    <Image
                      src={google}
                      alt="GoldFish Ladder"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] max-w-3xl  mx-auto mb-4  "
                    />
                    <p className="text-sm  md:text-md lg:text-md">Google</p>
                  </div>
                </div>
                <p className="text-md font-bebas md:text-lg lg:text-xl font-medium ">
                  Already a user?
                </p>
                <Link
                  href={"/sign-in"}
                  className="text-md font-bebas md:text-lg lg:text-xl font-medium mb-12 text-[#854836]"
                >
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
