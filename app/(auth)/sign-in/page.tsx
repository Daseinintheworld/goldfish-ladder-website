import Link from "next/link";
import image from "@/assets/form/image.png";
import Image from "next/image";
import CredentialsSignInForm from "./credentianls-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SignInForm = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="container mx-auto pt-2 px-10 max-w-lg flex flex-col items-center animate-fade-in ">
      {/* Logo */}
      <div className="text-center sm:mt-3 mt-5  mb-2">
        <Link href="/">
          <Image
            src={image}
            alt="GoldFish Ladder"
            width={676}
            height={100}
            className=" h-auto mx-auto  animate-slide-down"
          />
        </Link>
      </div>
      {<CredentialsSignInForm />}
    </div>
  );
};

export default SignInForm;
