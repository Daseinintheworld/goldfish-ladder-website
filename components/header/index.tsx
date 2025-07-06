import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Internships", href: "/internship" },
    { name: "AI Cofounder", href: "/ai-co-founder" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full  flex">
      <div
  className="
    w-full mx-auto px-4 flex items-center justify-between py-4 max-w-full sm:max-w-[42rem] md:max-w-[56rem] lg:max-w-[70rem] xl:max-w-[80rem] 2xl:max-w-[96rem]
  "
>
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src="/logo-2.png"
              alt={`GoldFish logo`}
              height={150}
              width={150}
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-primaryTextColor transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
