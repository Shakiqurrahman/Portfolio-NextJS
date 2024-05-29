"use client";

import icon from "@/../public/assets/happy.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="pt-[128px] pb-[40px]">
      <div className="flex justify-center items-center group hover:scale-150 duration-300">
        <h1 className="text-2xl font-semibold text-center text-white duration-300">
          Thank You!!
        </h1>
        <Image
          className="smile group-hover:scale-150 duration-300 group-hover:translate-x-2"
          src={icon}
          width={50}
          alt=""
        />
      </div>
      <ul className="uppercase flex items-center justify-center xm:gap-11 gap-5 my-[35px]">
        <li className="text-[12px] font-semibold text-[#bdbdbd] hover:text-white duration-300">
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="text-[12px] font-semibold text-[#bdbdbd] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="text-[12px] font-semibold text-[#bdbdbd] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/projects" ? "active" : ""}`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="text-[12px] font-semibold text-[#bdbdbd] hover:text-white duration-300">
          <Link
            className={`link ${pathname === "/contact" ? "active" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-[#afafaf] text-center text-[14px]">
        © All rights reserved by{" "}
        <span className="text-[#5b78f6]">Shakiqur</span>
      </p>
    </div>
  );
};

export default Footer;
