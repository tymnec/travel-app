import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/index";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Navbar */}
      <Link href={"/"}>
        <Image src={"hilink-logo.svg"} alt="logo" width={100} height={100} />
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => {
            return (
              <Link href={link.href} key={link.key}>
                {link.label}
              </Link>
            );
          })}
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
