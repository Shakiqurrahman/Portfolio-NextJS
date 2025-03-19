"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header className="flex items-center justify-between h-[80px]">
      <Link href={"/"}>
        <h1 className="text-lg sm:text-2xl font-bold">Portfolio</h1>
      </Link>
      <ul
        className={
          isOpen
            ? "side-nav z-[999] md:flex md:gap-x-16"
            : "nav-links  md:flex  z-[999] gap-x-16"
        }
      >
        <li>
          <Link
            className={`link ${
              pathname === "/" ? "active" : ""
            } text-[#bdbdbd] hover:text-white duration-300 block`}
            href="/"
            onClick={handleClose}
            aria-label="Visit Home Page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/about" ? "active" : ""
            } text-[#bdbdbd] hover:text-white duration-300 block`}
            href="/about"
            aria-label="Visit About Page"
            onClick={handleClose}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/projects" ? "active" : ""
            } text-[#bdbdbd] hover:text-white duration-300 block`}
            href="/projects"
            aria-label="Visit Projects Page"
            onClick={handleClose}
          >
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`link ${
              pathname === "/contact" ? "active" : ""
            } text-[#bdbdbd] hover:text-white duration-300 block`}
            href="/contact"
            onClick={handleClose}
            aria-label="Visit Contact Page"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <Link
          className="tracking-wider"
          href="/contact"
          onClick={handleClose}
          aria-label="Visit Contact Page"
        >
          <div className="bg-[#323232] hover:bg-white hover:text-black duration-300  font-medium px-3 sm:px-7 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-[16px]">
            Let's talk
          </div>
        </Link>
        <div
          className="md:hidden w-10 h-[35px] p-2  rounded-[4px] cursor-pointer flex justify-center items-center z-10 bg-[#323232]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
