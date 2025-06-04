import Image from "next/image";
import mail from "@/assets/events/mail.png";
import In from "@/assets/events/VectorIn.png";
import insta from "@/assets/events/vectorInsta.png";
import Link from "next/link";

const Footer = () => {
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

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Internships", href: "/internship" },
    { name: "Events", href: "/events" },
    { name: "Podcasts", href: "/podcast" },
    { name: "AI Cofounder", href: "/ai-co-founder" },
  ];

  return (
    <footer className="bg-[#6B3F2D] flex flex-col items-center justify-center gap-4 text-white m-auto pt-11 sm:px-2">
      <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-40">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-8">
            <Image
              src="/logo-2.png"
              alt="Fish Logo"
              width={550}
              height={200}
              className="md:w-52 sm:w-[130px]"
            />
          </div>

          <p>
            Helping high schoolers <br /> launch their first startup.
          </p>

          <div className="flex justify-around mt-[30px] gap-3">
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

        <div className="flex flex-row gap-[10px] md:gap-[50px] sm:gap-[20px] ">
          <div className="flex flex-col justify-center items-center md:w-[200px] sm:w-[130px] w-[130px] ">
            <h2 className="mb-[20px] font-bold text-xl">Company</h2>
            <div className="md:text-lg flex flex-col justify-center items-center">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-center">
            <h2 className="mb-[29px] font-bold text-xl">Support</h2>
            <div className="flex flex-col ">
              <p>Help Center</p>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base italic p-4 text-center">
        Copyright © 2025 by Goldfish Ladder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
