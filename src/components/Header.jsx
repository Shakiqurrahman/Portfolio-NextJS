import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[80px]">
      <div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
      <ul className="md:flex hidden">
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="mr-14 text-[#727272] hover:text-white duration-300">
          <Link href="/contact">Contact</Link>
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
