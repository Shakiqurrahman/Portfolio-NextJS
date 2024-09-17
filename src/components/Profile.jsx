"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import bgImg from '@/../public/assets/bg1.png';
import icon from "@/../public/assets/icon.svg";
import Img from "@/../public/assets/shake-b&w.png";

const Profile = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/about");
  };
  
  return (
    <div
      onClick={handleNavigate}
      className="group relative cursor-pointer flex-1  flex sm:flex-row flex-col sm:items-center sm:px-[46px] px-8 sm:py-[50px] py-8 gap-[30px] shadow-box rounded-[30px] md:w-[450px] w-full"
    >
      <Image
        className=" object-cover w-full h-full absolute left-0 top-0 opacity-10 rounded-[30px]"
        src={bgImg}
        alt="backgroound image"

      />
      <div className="profile-img z-10 md:w-[340px] w-[220px] overflow-hidden bg-blue-300 sm:mx-0 mx-auto">
        <Image src={Img} alt="Shakiqur Rahman" placeholder="blur"/>
      </div>
      <div>
        <p className=" uppercase opacity-70 text-[#bcbcbc] text-[13px] mb-1 tracking-wider">
          A Web Developer
        </p>
        <h1 className="sm:text-4xl text-3xl font-medium mb-2">
          Shakiqur Rahman.
        </h1>
        <p className="text-[#bcbcbc] text-sm w-[70%] sm:w-full  mb-5">
          I am a Professional Frontend Web Developer.
        </p>
        <Image
          className="absolute right-7  bottom-10 opacity-20 group-hover:opacity-100 duration-300"
          src={icon}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Profile;
