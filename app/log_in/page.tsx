"use client";
import Link from "next/link";
import { useState } from "react";
import image from "@/assets/form/image.png";


import { toast } from "react-toastify";
import Image from "next/image";

const Form = () => {
 const [form2Data, setForm2Data] = useState({
  email: "",
  password: "",
  
});
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm2Data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form2Data);

    fetch("https://goldfish-lp-backend-alpha.vercel.app/person", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form2Data),
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
          <h1 className="text-5xl font-bebas  font-medium mt-2 mb-19 text-center text-black">
            LOGIN
          </h1>

          <div className="flex justify-center items-center w-full">
            {/* Grid layout for form fields */}
            <div className=" flex flex-col items-center  w-full max-w-[800px]">
              <div className="grid md:mx-[15px] mx-[0] grid-cols-3 gap-y-14 gap-x-6 w-[90%] w-max-3xl">


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
                    value={form2Data.email}
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
                    value={form2Data.password}
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
                  className="w-[91%] bg-[#FFB32C] text-white text-5xl font-medium font-bebas py-2 lg:py-3 rounded-2xl shadow-lg  hover:bg-[#ffd07f] transition-colors mb-7 mt-11 "
                >
                  LOGIN
                </button>
              </div>
            </div>


            <div className="flex  w-full justify-center items-center">
                <div className="w-[40%] border-[1px] border-black h-0.5  "></div>
                <p className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mx-[3%]">OR</p>
                <div className="w-[40%] border-[1px] border-black  "></div>

            </div>




                {/* Sign up with Selection */}

                <div className="w-full flex flex-col  items-center">
                  <h2 className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mb-5 mt-6">
                  Don&apos;t have an account?
                  </h2>
                 
                  <p className="text-lg font-bebas md:text-xl lg:text-2xl font-medium mb-12 text-[#854836]">login</p>
                  
                </div>
            </div>









          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;