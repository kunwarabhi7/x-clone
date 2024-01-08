import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { Twitter } from "lucide-react";

const Leftbar = () => {
  return (
    <div className="mb-12 mx-5 md:w-64 w-16  h-full">
      {sidebarLinks.map((bar) => (
        <Link href={bar.route} key={bar.route}>
          <div className="flex items-center space-x-4 space-y-8 justify-start ">
            <div className="mt-6">{bar.imgURL}</div>
            <h1 className="hidden md:block">{bar.label}</h1>
          </div>
        </Link>
      ))}
      <Button
        className="bg-blue-500 w-full hidden md:block mt-6 rounded-full mr-20 text-white"
        variant={"ghost"}
      >
        Post
      </Button>
      <Twitter size={30} className="md:hidden mt-6 text-blue-500" />
    </div>
  );
};

export default Leftbar;
