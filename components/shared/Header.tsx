import Image from "next/image";
import x from "@/public/x.png";
import { ThemeToggler } from "../ThemeToggler";
import { TabsDemo } from "../Tabs";

const Header = () => {
  return (
    <nav className=" w-full  max-h-20 flex items-center m-2  ">
      <div>
        <Image
          src={x}
          alt="x logo"
          width={200}
          height={200}
          className="w-14 h-14 invert dark:invert-0"
        />
      </div>
      <div className="flex flex-1 items-center mt-2 justify-center ">
        <TabsDemo />
      </div>
      <div>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Header;
