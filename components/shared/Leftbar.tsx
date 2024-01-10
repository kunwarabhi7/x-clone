import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoreHorizontal, Twitter } from "lucide-react";
import {
  currentUser,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Image from "next/image";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

const Leftbar = async () => {
  const user = await currentUser();
  return (
    <div className="mb-12 mx-5 md:w-48 w-16  h-full">
      {sidebarLinks.map((bar) => (
        <Link href={bar.route} key={bar.route}>
          <div className="flex items-center space-x-4 space-y-8 justify-start ">
            <div className="mt-6">{bar.imgURL}</div>
            <h1 className="hidden md:block">{bar.label}</h1>
          </div>
        </Link>
      ))}
      <Button
        className="bg-blue-500 w-full hidden md:block mt-6 rounded-full mr-14 text-white"
        variant={"ghost"}
      >
        Post
      </Button>
      <Twitter size={30} className="md:hidden mt-6 text-blue-500" />
      <SignedIn>
        <SignOutButton>
          {/* Mount the UserButton component */}
          <div className=" flex items-center space-x-3 mt-12 hover:bg-gray-700 rounded-full p-2 cursor-pointer w-full ">
            <div>
              <Image
                src={user?.imageUrl!}
                alt={user?.firstName! || "user"}
                className="rounded-full w-12 h-12"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="ml-4">
              <div className="flex ">
                <h1>{user?.firstName} </h1>
                <h1>{user?.lastName} </h1>
              </div>
              <h1 className="text-gray-500 ml-2">@{user?.username}</h1>
            </div>
            <div className="ml-2">
              <MoreHorizontal />
            </div>
          </div>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton>
          <div className="flex items-center justify-center mt-4 bg-blue-600 rounded-full p-2 cursor-pointer gap-4 hover:bg-blue-900">
            <TwitterLogoIcon />
            <h1>Login</h1>
          </div>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Leftbar;
