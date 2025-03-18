import icon from "@/../public/assets/icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="p-6 rounded-[30px] shadow-box">
      <div className="flex border border-[#ffffff12] justify-center items-center bg-[#ffffff09] rounded-[30px] gap-5 mb-4 p-7 relative z-50">
        <Link
          className="rounded-[50%] bg-[#ffffff09] border border-[#ffffff12] duration-300 p-5 hover:bg-white hover:text-black"
          href="https://www.facebook.com/shakqur.rahmankayum"
          aria-label="Visit my Facebook profile"
          target="_blank"
        >
          <FaFacebookF size={25} />
        </Link>
        <Link
          className="rounded-[50%] bg-[#ffffff09] border border-[#ffffff12] duration-300 p-5 hover:bg-white hover:text-black"
          href="https://www.linkedin.com/in/shakiqurrahman/"
          aria-label="Visit my LinkedIn profile"
          target="_blank"
        >
          <FaLinkedinIn size={25} />
        </Link>
      </div>
      <Link href="/contact" className="relative z-50">
        <div className="flex justify-between group">
          <div>
            <p className="uppercase text-[#BCBCBC] text-[13px] opacity-50  my-3">
              Stay With me
            </p>
            <h2 className="font-medium text-xl">Profiles</h2>
          </div>
          <Image
            className="opacity-20  group-hover:opacity-100 duration-300"
            src={icon}
            alt="icon image"
          />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedias;
