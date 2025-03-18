import icon from "@/../public/assets/icon.svg";
import Image from "next/image";

import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="p-6 rounded-[30px] flex-1 group shadow-box cursor-pointer">
      <div className="flex items-center justify-center md:gap-7 lg:gap-[40px] xm:gap-6 gap-4 my-[45px]">
        <div className="tooltip">
          <span className="tooltip-text">TypeScript</span>
          <SiTypescript
            color="#3178c6"
            className="sm:text-5xl text-4xl bg-white rounded-md"
          />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">Next JS</span>
          <SiNextdotjs color="#F8F3D9" className="sm:text-5xl text-4xl" />
        </div>
        <div className="tooltip md:hidden lg:block">
          <span className="tooltip-text">Node JS</span>
          <SiNodedotjs color="#58a149" className="sm:text-5xl text-4xl" />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">Prisma</span>
          <SiPrisma color="#1e9385" className="sm:text-5xl text-4xl" />
        </div>
        <div className="tooltip">
          <span className="tooltip-text">PostgreSQL</span>
          <SiPostgresql color="#396c94" className="sm:text-5xl text-4xl" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="uppercase text-[#BCBCBC] text-[13px] opacity-50  my-3">
            My Skills
          </p>
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
