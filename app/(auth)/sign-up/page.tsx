import Link from "next/link";
import image from "@/assets/form/image.png";
import google from "@/assets/icons/google Icon.png";
import linkedin from "@/assets/icons/in Icons.png";
import instagram from "@/assets/icons/Insta icon.png";
import Image from "next/image";
import CredentialsSignUpForm from "./credentials-signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { signInWithGoogle } from "@/lib/actions/user.action";

const SignUpForm = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="container mx-auto pt-3 px-10 max-w-2xl flex flex-col items-center animate-fade-in">
      {/* Logo */}
      <div className="text-center mb-4">
        <Link href="/">
          <Image
            src={image}
            alt="GoldFish Ladder"
            width={476}
            height={90}
            className=" h-auto mx-auto  animate-slide-down"
          />
        </Link>
      </div>

      {/* Form Container */}
      <div className="relative bg-orange-50 rounded-lg  w-full max-w-[1040px] mx-[30px] animate-slide-up border-[#854836] border-[2px]">
        <div className="pt-[10px] flex  flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto">
          <h1 className="text-3xl font-bebas  font-medium mt-2 mb-5 text-center text-black">
            SIGN-IN
          </h1>

          <div className="flex justify-center items-center w-full">
            {/* Grid layout for form fields */}
            <div className="flex flex-col items-center  w-full ">
              <CredentialsSignUpForm />



              {/* Sign up with Selection */}
              <div className="w-full flex flex-col  items-center">
                <h2 className="text-xl font-bebas  font-medium mb-2 mt-2">
                  Sign-up with:
                </h2>
                <div className="flex flex-row gap-[8%] justify-center w-full mb-1 ">
                  <form
                    action={signInWithGoogle}
                    className="flex flex-col items-center "
                  >
                    <button className="cursor-pointer">
                      <Image
                        src={google}
                        alt="GoldFish Ladder"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] max-w-3xl  mx-auto mb-2  "
                      />
                    </button>
                    
                    <p className="text-sm  md:text-[12px] lg:text-[12px]">Google</p>
                  </form>

                   <form
                    action={signInWithGoogle}
                    className="flex flex-col items-center "
                  >
                    <button className="cursor-pointer">
                      <Image
                        src={instagram}
                        alt="GoldFish Ladder"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] max-w-3xl  mx-auto mb-2  "
                      />
                    </button>
                    
                    <p className="text-sm  md:text-[12px] lg:text-[12px]">Instagram</p>
                  </form>

                   <form
                    action={signInWithGoogle}
                    className="flex flex-col items-center "
                  >
                    <button className="cursor-pointer">
                      <Image
                        src={linkedin}
                        alt="GoldFish Ladder"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] max-w-3xl  mx-auto mb-2  "
                      />
                    </button>
                    
                    <p className="text-sm  md:text-[12px] lg:text-[12px]">LinkedIn</p>
                  </form>


                </div>
                <p className="text-[13px] font-bebas md:text-[13px] lg:text-[15px] font-medium ">
                  Already a user?
                </p>
                <Link
                  href={"/sign-in"}
                  className="text-md font-bebas md:text-lg lg:text-xl font-medium mb-3 text-[#854836]"
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
