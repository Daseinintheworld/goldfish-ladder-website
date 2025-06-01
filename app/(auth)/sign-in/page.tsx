"use client";
import Link from "next/link";
import { useState } from "react";
import image from "@/assets/form/image.png";
import google from "@/assets/icons/google Icon.png";
import { toast } from "react-toastify";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default value
    rememberMe: false, // New field for "Remember Me"
    acceptTerms: false, // New field for "Accept Terms"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);

    fetch("https://goldfish-lp-backend-alpha.vercel.app/person", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => toast.success(data.message))
      .catch((err) => console.log(err));
  };

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
            <div className=" flex flex-col items-center  w-full max-w-[800px]">
              <div className="grid md:mx-[15px] mx-[0] grid-cols-3 gap-y-12 gap-x-6 w-[90%] w-max-3xl">
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
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
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
                    placeholder="Email address eg-abc12@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
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
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-orange-300 bg-white rounded-2xl"
                  />
                </div>
              </div>

              {/* register button */}
              <div className="mt-8 w-full">
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="w-[91%] bg-[#FFB32C] text-white text-3xl font-medium font-bebas py-2 lg:py-4 rounded-2xl shadow-lg  hover:bg-[#ffd07f] transition-colors mb-7 "
                  >
                    REGISTER
                  </button>
                </div>
              </div>

              {/* Role Selection */}
              <div className="w-full flex flex-col  mt-4 font-bebas">
                <div className="md:col-span-2 flex flex-col  space-x-8 space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          rememberMe: e.target.checked,
                        }))
                      }
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
                      checked={formData.acceptTerms}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          acceptTerms: e.target.checked,
                        }))
                      }
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
                  href={"/log-in"}
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

export default Form;
