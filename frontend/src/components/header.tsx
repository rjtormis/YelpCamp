import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";

import { useLocation } from "react-router-dom";
import ThemeToggle from "./theme";
function Header({ isFixed }: { isFixed?: boolean }) {
  const isMobile = useIsMobile();
  const location = useLocation();
  return (
    <header
      className={`flex justify-between px-4 lg:px-32 py-4 ${
        isFixed ? "fixed" : ""
      }  w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 z-10`}
    >
      <div className="flex">
        <img src={logo} alt="YelpCamp" className="w-[60px] h-[60px]" />
        <section className="m-auto">
          <span className="font-bold text-xl">YelpCamp</span>
          <p className="text-xs text-center">Philippines</p>
        </section>
      </div>
      {!isMobile ? (
        <>
          <ul className="flex gap-8 m-auto">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <div className="flex my-auto gap-2">
            {location.pathname !== "/login" && <Button className="rounded-full">Login</Button>}
            <ThemeToggle />
          </div>
        </>
      ) : (
        <Button variant="outline" className="my-auto">
          <Menu />
        </Button>
      )}
    </header>
  );
}

export default Header;
