import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.action";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="hidden lg:flex md:items-center md:gap-4">
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
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              className="relative w-8 h-8 rounded-full ml-2 flex items justify-center bg-gray-200"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground font-medium leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant={"ghost"}
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
