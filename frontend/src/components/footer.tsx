import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" mt-32 grid grid-cols-1 gap-4 p-8  border-t-[1px] bg-primary  border-gray-300 lg:grid-cols-4">
      <section>
        <section className="flex content-center">
          <img src={logo} alt="YelpCamp PH" width={60} height={60} />
          <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
        </section>
        <p className="text-xs">Discover the Great Outdoors with YelpCamp!</p>
      </section>

      <section>
        <h2 className="font-semibold mb-2 text-white lg:text-xl">Developer</h2>
        <ul>
          <li>Features</li>
          <li>FAQ</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2 text-white lg:text-xl">Resources</h2>
        <ul className="gap-4">
          <li>
            <Link
              className="hover:text-primary hover:underline underline-offset-4"
              to="https://dribbble.com/shots/16432137-CAMP-MOJOK-Camping-Campground-Dark-Light-Landing-Page"
            >
              UI Inspiration
            </Link>
          </li>
          <li>Demo</li>
          <li>
            <Link
              className="hover:text-primary hover:underline underline-offset-4"
              to="https://github.com/rjtormis/YelpCamp-TS"
            >
              Github
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2 text-white lg:text-xl">Social Media</h2>
        <ul></ul>
      </section>
    </footer>
  );
}

export default Footer;
