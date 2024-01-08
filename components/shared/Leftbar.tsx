import { sidebarLinks } from "@/constants";
import Link from "next/link";

const Leftbar = () => {
  return (
    <div className="mb-12">
      {sidebarLinks.map((bar) => (
        <Link href={bar.route} key={bar.route}>
          <div className="flex items-center space-x-4 space-y-8 justify-start ">
            <div className="mt-6">{bar.imgURL}</div>
            <h1 className="hidden md:block">{bar.label}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Leftbar;
