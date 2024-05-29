import Image from "next/image";
import icon from "@/../public/assets/icon.svg";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="p-6 rounded-[30px] flex-1 group shadow-box cursor-pointer">
      <div className="flex items-center justify-center sm:px-8 px-6 sm:gap-[40px] xm:gap-6 gap-4 my-[45px]">
        <div className="relative tooltip flex items-center justify-center">
          <span className="tooltip-text">HTML</span>
          <div className="absolute sm:w-[35px] w-[25px] sm:h-[32px] h-[25px] bg-white"></div>
          <SiHtml5 color="#dd4b25" className="sm:text-5xl text-4xl z-10" />
        </div>
        <div className="relative tooltip flex items-center justify-center">
          <span className="tooltip-text">CSS</span>
          <div className="absolute sm:w-[35px] w-[25px] sm:h-[32px] h-[25px] bg-white"></div>
          <SiCss3 color="#1278f0" className="sm:text-5xl text-4xl z-10" />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">Tailwind CSS</span>
          <SiTailwindcss color="#38bdf8" className="sm:text-5xl text-4xl" />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">JavaScript</span>
          <SiJavascript color="#efd81d" className="sm:text-5xl text-4xl" />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">React JS</span>
          <SiReact color="#149eca" className="sm:text-5xl text-4xl" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h4 className="uppercase text-[#BCBCBC] text-[13px] opacity-50  my-3">
            My Skills
          </h4>
          <h2 className="font-medium text-xl ">Specialization</h2>
        </div>
        <Image
          className="opacity-20 group-hover:opacity-100 duration-300"
          src={icon}
          alt="icon image"
        />
      </div>
    </div>
  );
};

export default Skills;
