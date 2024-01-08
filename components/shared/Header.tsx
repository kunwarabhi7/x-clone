import Image from "next/image";
import x from "@/public/x.png";
import { ThemeToggler } from "../ThemeToggler";

const Header = () => {
  return (
    <nav className=" w-full max-h-20 flex items-center justify-between">
      <Image
        src={x}
        alt="x logo"
        width={200}
        height={200}
        className="w-14 h-14 invert dark:invert-0"
      />
      <ThemeToggler />
    </nav>
  );
};

export default Header;
