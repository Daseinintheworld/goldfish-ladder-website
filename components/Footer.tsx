import Image from "next/image";
import fishSquare from "@/assets/events/fish_square.png";
import mail from "@/assets/events/mail.png";
import In from "@/assets/events/VectorIn.png";
import insta from "@/assets/events/vectorInsta.png";



  const social_media = [
    {
      id: 1,
      title: "linkedin",
      link: "https://www.linkedin.com/company/goldfish-ladder/posts/?feedView=all",
      

    },
    {
     id: 2,
      title: "instagram",
      link: "goldfishladder",


    },
    {
      id: 3,
      title: "mail",
      link: "goldfishladder@gmail.com",
      

    },
  ];


const Footer = () => {
  return (
    <footer className="bg-[#6B3F2D] h-auto w-full flex flex-col items-center justify-center text-white m-auto pt-[45px] md:px-[10%] sm:px-[10px] overflow-hidden">
     
     <div className="">
     <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center min-w-[170px]  ">
          {/* Use the Image component */}
          <div className="relative mb-[30px] w-[100px] md:w-[190px] sm:w-[130px]">
    <Image
      src={fishSquare}
      alt="Fish Square Logo"
      width={550}
      height={200}
      className="object-contain w-[100px] md:w-[190px] sm:w-[130px]"
    />
    <div className="absolute inset-0 bg-[#6B3F2D] opacity-80 z-10 flex items-center justify-center">
      {/* You can put content here if you want, or leave it empty for just the overlay */}
    </div>
  </div>


          <div className="text-center w-[110px] md:w-[200px] sm:w-[144px] text-[14px] md:text-[16px] sm:text-[14px] ">
            <p>Helping high schoolers launch their first startup.</p>

            <div className="flex justify-around mt-[30px] gap-3">
              
              <div>
                  <a
                      href={social_media[0].link}
                      target="_blank"
                      tabIndex={0}
                      aria-label={`Go to ${social_media[0].title} event page`}
                    >
                      <Image
                        src={In}
                        alt="Fish Square Logo"
                        width={60}
                        height={60}
                        className="object-contain w-[40px] md:w-auto sm:w-[40px]"
                      />
                  </a>



              </div>

              <div>
                    <a
                      href={social_media[1].link}
                      target="_blank"
                      tabIndex={0}
                      aria-label={`Go to ${social_media[1].title} event page`}
                    >

                        <Image
                      src={insta}
                      alt="Fish Square Logo"
                      width={60}
                      height={60}
                      className="object-contain w-[40px] md:w-auto sm:w-[40px]"
                    />
                    </a>

              </div>
              <div>

                    <a
                      href={social_media[2].link}
                      target="_blank"
                      tabIndex={0}
                      aria-label={`Go to ${social_media[2].title} event page`}
                    >

                            <Image
                          src={mail}
                          alt="Fish Square Logo"
                          width={60}
                          height={60}
                          className="object-contain w-[40px] md:w-auto sm:w-[40px]"
                        />
                    </a>
              </div>
            </div>
          </div>

      </div>

      <div className="lg:ml-[60%] md:ml-[30%] sm:ml-[20%] ml-[-13%] flex flex-row gap-[10px] md:gap-[50px] sm:gap-[20px] ">
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

        <div className="flex flex-col w-[100px] sm:w-[130px] text-sm">
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