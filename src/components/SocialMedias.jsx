import icon from "@/../public/assets/icon.svg";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="p-6 rounded-[30px] shadow-box">
      <div className="flex border border-[#ffffff12] justify-center items-center bg-[#ffffff09] rounded-[30px] gap-5 mb-4 p-7 relative z-50">
        <a
          className="rounded-[50%] bg-[#ffffff09] border border-[#ffffff12] duration-300 p-5 hover:bg-white hover:text-black"
          href="https://www.facebook.com/shakqur.rahmankayum"
          target="blank"
        >
          <FaFacebookF size={25} />
        </a>
        <a
          className="rounded-[50%] bg-[#ffffff09] border border-[#ffffff12] duration-300 p-5 hover:bg-white hover:text-black"
          href="https://www.linkedin.com/in/shakiqurrahman/"
          target="blank"
        >
          <FaLinkedinIn size={25} />
        </a>
      </div>
      <a href="/contact" className="relative z-50">
        <div className="flex justify-between group">
          <div>
            <h4 className="uppercase text-[#BCBCBC] text-[13px] opacity-50  my-3">
              Stay With me
            </h4>
            <h2 className="font-medium text-xl">Profiles</h2>
          </div>
          <Image
            className="opacity-20  group-hover:opacity-100 duration-300"
            src={icon}
            alt="icon image"
          />
        </div>
      </a>
    </div>
  );
};

export default SocialMedias;
