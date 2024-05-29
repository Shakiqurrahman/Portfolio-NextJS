"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between h-[80px]">
      <div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
      <ul className="md:flex hidden">
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/projects" ? "active" : ""}`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/contact" ? "active" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="bg-[#323232] hover:bg-white hover:text-black duration-300  font-medium px-7 py-3 rounded-2xl text-[16px]">
        <Link className="tracking-wider" href="/contact">
          Let's talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
