import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/index";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Navbar */}
      <Link href={"/"}>
        <Image src={"hilink-logo.svg"} alt="logo" width={100} height={100} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          );
        })}
      </ul>

      {/* Login Button */}
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" variant="btn_dark_green" icon="/login.svg"/>
      </div>
    </nav>
  );
};

export default Navbar;
