import star from "@/../public/assets/star.png";
import star2 from "@/../public/assets/star2.png";
import Image from "next/image";

const SelfSummary = () => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="flex items-center mb-5">
        <Image className="md:w-auto w-7" src={star} alt="star icon" />
        <h1 className="uppercase lg:text-[60px] md:text-[40px] text-[25px] font-semibold mx-1.5">
          Self-Summary
        </h1>
        <Image className="md:w-auto w-7" src={star} alt="star icon" />
      </div>
      <div className="bg-[#202020] rounded-[30px] p-7 pr-10 h-full flex flex-col justify-end shadow-box">
        <Image src={star2} alt="icon of star" className="absolute top-0" />
        <h3 className="text-[34px] font-medium mb-1">Shakiqur Rahman</h3>
        <p className=" opacity-80">
          I'm a professional Web Developer with several years of experience
          creating dynamic, responsive, and user-friendly websites. I have a
          diverse range of experience having worked across various fields and
          industries.
        </p>
      </div>
    </div>
  );
};

export default SelfSummary;
