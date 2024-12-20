import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Menu, Sun } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";
function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex justify-between px-4 lg:px-32 py-4 ">
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
            <Button className="rounded-full">Login</Button>
            <Button className="rounded-full">Register</Button>
            <Button variant="outline">
              <Sun size={16} />
            </Button>
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
