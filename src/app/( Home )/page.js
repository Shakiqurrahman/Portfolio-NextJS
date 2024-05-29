import CVBox from "@/components/CVBox";
import ClientBox from "@/components/ClientBox";
import Credentials from "@/components/Credentials";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Slogan from "@/components/Slogan";
import SocialMedias from "@/components/SocialMedias";
import WorkTogether from "@/components/WorkTogether";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex md:flex-row flex-col mt-20 gap-6">
        <Profile />
        <div>
          <Slogan />
          <div className="flex md:flex-row flex-col gap-6">
            <Credentials />
            <Projects />
          </div>
        </div>
      </div>
      <div className="mt-6 flex md:flex-row md:flex-wrap lg:flex-nowrap flex-col gap-6">
        <CVBox />
        <Skills />
        <SocialMedias />
      </div>
      <div className="mt-6 flex md:flex-row flex-col gap-6">
        <ClientBox />
        <WorkTogether />
      </div>
    </section>
  );
}
