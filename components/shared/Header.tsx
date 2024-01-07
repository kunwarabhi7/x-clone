import Image from "next/image";
import x from "@/public/x.png";

const Header = () => {
  return (
    <nav className=" w-full max-h-20">
      <Image
        src={x}
        alt="x logo"
        width={200}
        height={200}
        className="w-14 h-14"
      />
    </nav>
  );
};

export default Header;
