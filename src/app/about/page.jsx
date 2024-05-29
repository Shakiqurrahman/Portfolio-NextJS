import Image from "next/image";
import AboutImg from "@/../public/assets/about-img.jpeg";
import SocialMedias from "@/components/SocialMedias";
import Credentials from "@/components/Credentials";
import SelfSummary from "@/components/SelfSummary";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import WorkTogether from "@/components/WorkTogether";

const AboutPage = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-20 gap-10">
        <div className="md:w-[400px] w-full overflow-hidden p-6 bg-[#202020] rounded-[30px] sm:mx-0 mx-auto ">
          <Image src={AboutImg} alt="profile Image" placeholder="blur" className=" rounded-[30px] profile-img "/>
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