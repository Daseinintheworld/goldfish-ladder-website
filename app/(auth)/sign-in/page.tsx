import Link from "next/link";
import image from "@/assets/form/image.png";
import Image from "next/image";
import CredentialsSignInForm from "./credentianls-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Form = async () => {
  const session = await auth();

  if (session) {
    return redirect("/");
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
      {<CredentialsSignInForm />}
    </div>
  );
};

export default Form;
