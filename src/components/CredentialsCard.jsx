import img from "@/../public/assets/shake-b&.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const CredentialsCard = () => {
  return (
      <div className="p-7 flex flex-col items-center sticky top-[15%]  bg-[#202020] rounded-[30px]">
        <div className="profile-imgCard  z-10 md:w-[340px] w-[220px] overflow-hidden bg-blue-300 sm:mx-0 mx-auto">
          <Image src={img} alt="profile Image" placeholder="blur" />
        </div>
        <h1 className="sm:text-3xl text-2xl font-medium mt-8 mb-2">
          Shakiqur Rahman
        </h1>
        <p className="text-[#bcbcbc] text-sm">rahmanshakiqur@gmail.com</p>

        <div className="flex gap-6 z-50 my-8">
          <a
            href="https://www.facebook.com/shakqur.rahmankayum"
            target="blank"
            area-label="Facebook Link"
          >
            <div className="size-12 rounded-full text-[20px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
              <FaFacebookF />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/shakiqurrahman/"
            target="blank"
            area-label="Linkedin Link"
          >
            <div className="size-12 rounded-full text-[20px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://www.instagram.com/retro_phile__/"
            target="blank"
            area-label="Instagram Link"
          >
            <div className="size-12 rounded-full text-[22px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
              <FaInstagram />
            </div>
          </a>
        </div>
        <Link className="w-full" href="/contact">
          <button
            className="w-full relative z-20  text-base text-white bg-[#2c2c2c] border-none px-5 py-3 rounded-[20px] mb-2 font-medium hover:bg-white hover:text-black duration-300"
            type="submit"
          >
            Contact Me
          </button>
        </Link>
      </div>
  );
};

export default CredentialsCard;
