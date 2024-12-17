import logo from "../assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#1A0B2E] w-full flex items-center justify-center p-5">
      <div className="flex items-center justify-between max-w-6xl w-full">
        <Link href="/">
          <Image src={logo} alt="" height={33} />
        </Link>
        <div className="flex items-center justify-end gap-32">
          <Link href="/" className="text-white font-preahvihear text-[1.05rem]">
            Home
          </Link>
          <Link
            href="/#about"
            className="text-white font-preahvihear text-[1.05rem]"
          >
            About
          </Link>
          <Link
            href="/#lab"
            className="text-white font-preahvihear text-[1.05rem]"
          >
            Lab
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
