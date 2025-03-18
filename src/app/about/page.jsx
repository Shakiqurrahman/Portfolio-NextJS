import AboutImg from "@/../public/assets/about-img.webp";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SelfSummary from "@/components/SelfSummary";
import SocialMedias from "@/components/SocialMedias";
import WorkTogether from "@/components/WorkTogether";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-20 gap-10">
        <div className="md:w-[400px] w-full overflow-hidden p-6 bg-[#202020] rounded-[30px] sm:mx-0 mx-auto ">
          <Image
            src={AboutImg}
            alt="Shakiqur Rahman"
            placeholder="blur"
            className=" rounded-[30px] profile-img "
          />
        </div>
        <SelfSummary />
      </div>
      <div className="flex md:flex-row flex-col mt-6 gap-6">
        <Experience />
        <Education />
      </div>
      <div className="flex md:flex-row flex-col mt-6 gap-6">
        <SocialMedias />
        <WorkTogether />
        <Credentials />
      </div>
    </>
  );
};

export default AboutPage;
