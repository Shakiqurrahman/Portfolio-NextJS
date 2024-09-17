"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <header className="flex items-center justify-between h-[80px]">
            <div>
                <h1 className="text-2xl font-bold">Portfolio</h1>
            </div>
            <ul
                className={
                    isOpen
                        ? "side-nav z-[999] md:flex md:gap-x-16"
                        : "nav-links  md:flex text-[15px]  z-[999] gap-x-16"
                }
            >
                <Link
                    className={`link ${
                        pathname === "/" ? "active" : ""
                    } text-[#bdbdbd] hover:text-white duration-300`}
                    href="/"
                    onClick={handleClose}
                >
                    <li>Home</li>
                </Link>
                <Link
                    className={`link ${
                        pathname === "/about" ? "active" : ""
                    } text-[#bdbdbd] hover:text-white duration-300`}
                    href="/about"
                    onClick={handleClose}
                >
                    <li>About</li>
                </Link>
                <Link
                    className={`link ${
                        pathname === "/projects" ? "active" : ""
                    } text-[#bdbdbd] hover:text-white duration-300`}
                    href="/projects"
                    onClick={handleClose}
                >
                    <li>Projects</li>
                </Link>
                <Link
                    className={`link ${
                        pathname === "/contact" ? "active" : ""
                    } text-[#bdbdbd] hover:text-white duration-300`}
                    href="/contact"
                    onClick={handleClose}
                >
                    <li>Contact</li>
                </Link>
            </ul>
            <div className="flex items-center gap-6">
                <Link className="tracking-wider" href="/contact" onClick={handleClose}>
                    <div className="bg-[#323232] hover:bg-white hover:text-black duration-300  font-medium px-5 sm:px-7 py-2 sm:py-3 rounded-lg sm:rounded-2xl text-[16px]">
                        Let's talk
                    </div>
                </Link>
                <div
                    className="md:hidden w-10 h-[35px] p-2  rounded-[4px] cursor-pointer flex justify-center items-center z-10 bg-[#323232]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={isOpen ? "active-hamburger" : "hamburger"}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
