import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Image5 from "@/../public/assets/College website mockup.jpg";
import Image3 from "@/../public/assets/crypto-wave.jpg";
import Image4 from "@/../public/assets/Hoobank mockup.jpg";
import Image6 from "@/../public/assets/img5.jpg";
import Image7 from "@/../public/assets/Little Rabbit Mockup.jpg";
import Image1 from "@/../public/assets/patagoniaexplore.jpg";
import Image2 from "@/../public/assets/shofy e-commerce.jpg";
import star from "@/../public/assets/star.png";

const ProjectsPage = () => {
  return (
    <section className="max-width">
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <div className="md:hidden flex justify-center items-center mb-3">
          <Image
            className="md:w-auto w-7"
            placeholder="blur"
            src={star}
            alt="star icon"
          />
          <h1 className="uppercase sm:text-[40px] text-[25px] font-semibold mx-1.5">
            My Projects
          </h1>
          <Image
            className="md:w-auto w-7"
            placeholder="blur"
            src={star}
            alt="star icon"
          />
        </div>
        <div className="md:w-1/3 flex flex-col">
          {/* Image-1  */}
          <div className="bg-[#202020] p-4 pb-6 rounded-[30px] mb-6">
            <Image
              className="w-full rounded-[30px] mb-4"
              src={Image1}
              placeholder="blur"
              alt="Project 1"
            />
            <div className="flex justify-between items-center  mx-2">
              <div>
                <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                  Travel Agency Website
                </p>
                <h1 className="text-[22px] opacity-90 font-medium">
                  Patagonia Explore
                </h1>
              </div>
              <span className="flex gap-6 items-center  ">
                <Link
                  href="https://github.com/Md-TarikulIslam/travel"
                  target="_blank"
                >
                  <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                </Link>
                <Link href="https://patagoniaexplore.com" target="_blank">
                  <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                </Link>
              </span>
            </div>
          </div>

          {/* Image-2  */}
          <div className="flex-1 bg-[#202020] p-4 pb-6 rounded-[30px]">
            <Image
              className="w-full lg:h-[280px] xl:h-[292px] rounded-[30px] mb-4"
              src={Image2}
              alt="Project 1"
              placeholder="blur"
            />
            <div className="flex justify-between items-center   mx-2">
              <div>
                <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                  E-commerce Website
                </p>
                <h1 className="text-[22px] opacity-90 font-medium">Shoffy</h1>
              </div>
              <span className="flex gap-6 items-center  ">
                <Link
                  href="https://github.com/Shakiqurrahman/shofy-ecommerce"
                  target="_blank"
                >
                  <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                </Link>
                <Link
                  href="https://shofy-ecommerce.netlify.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="hidden md:flex justify-center items-center mb-5">
            <Image
              className="md:w-auto w-7"
              placeholder="blur"
              src={star}
              alt="star icon"
            />
            <h1 className="uppercase lg:text-[60px] md:text-[40px] text-[25px] font-semibold mx-1.5">
              My Projects
            </h1>
            <Image
              className="md:w-auto w-7"
              placeholder="blur"
              src={star}
              alt="star icon"
            />
          </div>
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image-3  */}
            <div className="bg-[#202020] p-4 pb-6 rounded-[30px]">
              <Image
                className="w-full rounded-[30px] mb-4"
                src={Image3}
                alt="Project 1"
              />
              <div className="flex justify-between items-center   mx-2">
                <div>
                  <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                    Crypto Marketing Website
                  </p>
                  <h1 className="text-[22px] opacity-90 font-medium">
                    Crypto Wave Agency
                  </h1>
                </div>
                <span className="flex gap-6 items-center  ">
                  <Link
                    href="https://github.com/Shakiqurrahman/Crypto-Wave-Agency"
                    target="_blank"
                  >
                    <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                  <Link
                    href="https://crypto-wave-agency.netlify.app/"
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                </span>
              </div>
            </div>

            {/* Image-4  */}
            <div className="bg-[#202020] p-4 pb-6 rounded-[30px]">
              <Image
                className="w-full rounded-[30px] mb-4"
                src={Image4}
                alt="Project 1"
              />
              <div className="flex justify-between items-center  mx-2">
                <div>
                  <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                    Banking Website
                  </p>
                  <h1 className="text-[22px] opacity-90 font-medium">
                    Hoobank
                  </h1>
                </div>
                <span className="flex gap-6 items-center  ">
                  <Link
                    href="https://github.com/learnwithancor/hoobank-project"
                    target="_blank"
                  >
                    <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                  <Link
                    href="https://hoobank-online.netlify.app/"
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                </span>
              </div>
            </div>

            {/* Image-5  */}
            <div className="bg-[#202020] p-4 pb-6 rounded-[30px]">
              <Image
                className="w-full rounded-[30px] mb-4"
                src={Image5}
                alt="Project 1"
              />
              <div className="flex justify-between items-center  mx-2">
                <div>
                  <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                    College Website
                  </p>
                  <h1 className="text-[22px] opacity-90 font-medium">
                    SPI Website
                  </h1>
                </div>
                <span className="flex gap-6 items-center  ">
                  <Link
                    href="https://github.com/Shakiqurrahman/spi-website"
                    target="_blank"
                  >
                    <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                  <Link href="https://spi-website.netlify.app/" target="_blank">
                    <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                </span>
              </div>
            </div>

            {/* Image-6  */}
            <div className="bg-[#202020] p-4 pb-6 rounded-[30px]">
              <Image
                className="w-full rounded-[30px] mb-4"
                src={Image6}
                alt="Project 1"
              />
              <div className="flex justify-between items-center  mx-2">
                <div>
                  <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                    Ecommerce Ui
                  </p>
                  <h1 className="text-[22px] opacity-90 font-medium">
                    Furniture
                  </h1>
                </div>
                <span className="flex gap-6 items-center  ">
                  <Link
                    href="https://github.com/Shakiqurrahman/Furniture-Website"
                    target="_blank"
                  >
                    <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                  <Link
                    href="https://shakiqurrahman.github.io/Furniture/"
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Image-7  */}
        <div className="bg-[#202020] p-4 pb-6 rounded-[30px]">
          <Image
            className="w-full rounded-[30px] mb-4"
            src={Image7}
            alt="Project 1"
          />
          <div className="flex justify-between items-center   mx-2">
            <div>
              <p className="opacity-60 text-[12px] text-[#bcbcbc] uppercase font-light">
                Crypto Website
              </p>
              <h1 className="text-[22px] opacity-90 font-medium">
                Little Rabbit
              </h1>
            </div>
            <span className="flex gap-6 items-center  ">
              <Link href="" target="_blank">
                <FaGithub className="text-[26px] opacity-70 hover:opacity-100 duration-300" />
              </Link>
              <Link href="" target="_blank">
                <FaExternalLinkAlt className="text-[23px] opacity-70 hover:opacity-100 duration-300" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
