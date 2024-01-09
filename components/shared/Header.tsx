import Image from "next/image";
import x from "@/public/x.png";
import { ThemeToggler } from "../ThemeToggler";
import { TabsDemo } from "../Tabs";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <nav className=" w-full  max-h-20 flex items-center justify-between  ">
      <div className="  basis-1/5">
        <Image
          src={x}
          alt="x logo"
          width={200}
          height={200}
          className="w-14 h-14 invert dark:invert-0"
        />
      </div>
      <div className="flex basis-3/5    items-center mt-2 border  justify-center  ">
        <TabsDemo />
      </div>
      <div className="md:flex   items-center basis-1/5 space-x-2 hidden ">
        <div className="flex items-center bg-gray-800  rounded-full p-2 ">
          <Search />
          <input
            placeholder="Search"
            className=" pl-6 w-40 bg-gray-800 outline-none"
          />
        </div>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Header;
