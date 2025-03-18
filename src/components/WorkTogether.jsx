import icon from "@/../public/assets/icon.svg";
import star from "@/../public/assets/star2.png";
import Image from "next/image";
import Link from "next/link";

const WorkTogether = () => {
  return (
    <Link
      href={"/contact"}
      className="p-6 pt-[83px] group pb-[42px] rounded-[30px] cursor-pointer shadow-box flex items-end justify-between gap-6 flex-1"
    >
      <Image src={star} alt="icon of star" className="absolute top-0 opacity-70" />
      <h1 className="sm:text-[44px] xm:text-[35px] text-2xl xm:leading-13 font-medium">
        Let's <br /> work <span className="text-[#5b78f6]">together</span>
      </h1>
      <Image
        className="opacity-20 group-hover:opacity-100 duration-300"
        src={icon}
        alt="icon image"
      />
    </Link>
  );
};

export default WorkTogether;
