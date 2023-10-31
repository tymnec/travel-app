import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Navbar */}
      <Link href={"/"}>
        <Image src={"hilink-logo.svg"} alt="logo" width={100} height={100} />
      </Link>
    </nav>
  );
};

export default Navbar;
