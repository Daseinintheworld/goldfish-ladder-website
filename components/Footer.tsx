import Image from "next/image";
import fishSquare from "@/assets/events/fish_square.png";
import mail from "@/assets/events/mail.png";
import In from "@/assets/events/VectorIn.png";
import insta from "@/assets/events/vectorInsta.png";


const Footer = () => {
  return (
    <footer className="bg-[#6B3F2D] h-auto w-full flex flex-col items-center justify-center text-white m-auto pt-[45px] md:px-[10%] sm:px-[10px]">
     
     <div className="">
     <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center min-w-[200px] ">
          {/* Use the Image component */}
          <Image
        src={fishSquare}
        alt="Fish Square Logo"
        width={550}
        height={200}

        className=" pb-[30px] object-contain  w-[110px] md:w-[200px] sm:w-[140px]"
      />
          <div className="text-center w-[110px] md:w-[200px] sm:w-[144px] text-[14px] md:text-[16px] sm:text-[14px] ">
            <p>Helping high schoolers launch their first startup.</p>

            <div className="flex justify-around mt-[30px] gap-3">
              <div>
                <Image
                  src={In}
                  alt="Fish Square Logo"
                  width={60}
                  height={60}
                  className="object-contain  w-[40px] md:w-auto sm:w-[40px]"
                />
              </div>
              <div>
                <Image
                  src={insta}
                  alt="Fish Square Logo"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] md:w-auto sm:w-[40px]"
                />
              </div>
              <div>
                <Image
                  src={mail}
                  alt="Fish Square Logo"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] md:w-auto sm:w-[40px]"
                />
              </div>
            </div>
          </div>

      </div>

      <div className="lg:ml-[60%] md:ml-[30%] sm:ml-[20%] ml-[-7%] flex flex-row gap-[10px] md:gap-[50px] sm:gap-[20px] ">
        <div className="flex flex-col justify-center items-center md:w-[200px] sm:w-[130px] w-[130px] ">
          <h2 className="mb-[20px] font-bold md:text-xl sm:text-[15px] text-[12px] ">Company</h2>
          <div className="md:text-[16px] sm:text-[16px] text-[12px] flex flex-col justify-center items-center">
          <p>About Us</p>
          <p>Internship</p>
          <p>Events</p>
          <p>Podcast</p>
          <p>AI Co-Founder</p>

          </div>

        </div>

        <div className="flex flex-col w-[130px] sm:w-[130px] text-sm">
          <h2 className="mb-[29px] font-bold md:text-xl sm:text-[15px] text-[12px]">Support</h2>
          <div className="md:text-[16px] sm:text-[14px] text-[12px] flex flex-col ">

          <p>Help Center</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          </div>
        </div>
      </div>

     </div>

      </div>


      <div className="text-center w-full m-[15px]">
        <p className="text-sm sm:text-base italic">Copyright © 2025 by Goldfish Ladder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;