import UserButton from "./user-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";

const Menu = async () => {
  const session = await auth();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Internships", href: "/internship" },
    { name: "AI Cofounder", href: "/ai-co-founder" },
    { name: "Resources", href: ".public/resources.html"}
  ];

  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex w-full max-w-xs gap-1">
        <UserButton />
      </nav>
      <nav className="lg:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-4">
            <SheetTitle>Menu</SheetTitle>

            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-gray-700 hover:text-primaryTextColor transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {!session && (
              <div className="flex gap-2">
                <Link href="/sign-in">
                  <button className="rounded-full text-primaryTextColor hover:bg-primaryTextColor hover:text-white text-lg font-medium px-4 py-2">
                    Login
                  </button>
                </Link>
                <Link href="/sign-up">
                  <button className="rounded-full bg-primaryTextColor text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white px-4 py-2 text-lg font-medium">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
