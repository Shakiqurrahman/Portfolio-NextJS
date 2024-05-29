import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import errorImg from "@/../public/assets/error.webp";

const notFound = () => {
  return (
    <div className="h-[80vh]  flex flex-col justify-center items-center">
      <Image className="sm:w-1/3 w-4/5" src={errorImg} alt="" />
      <p className="text-2xl my-2">This page could not be found...</p>
      <Link href="/">
        <button className="bg-[#0989ff] text-white px-5 py-2.5 text-lg mt-5 rounded-md border border-transparent flex items-center duration-300 hover:text-[#0989ff] hover:bg-white hover:border-[#0989ff]"><BsArrowLeft className="mr-3" />
          Go Back 
        </button>
      </Link>
    </div>
  );
};

export default notFound;