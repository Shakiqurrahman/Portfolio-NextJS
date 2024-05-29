import Image from 'next/image';
import CVIcon from '@/../public/assets/CVIcon.png';

import { FaDownload } from "react-icons/fa";

const CVBox = () => {
    return (
            <a target='blank' href="/Shakiqur rahman resume.pdf"  download>
            <div className='p-6 rounded-[30px] md:w-[25%] min-w-[230px] shadow-box group cursor-pointer'>
            <Image className='w-[140px] mx-auto' src={CVIcon} alt="CV Icon" />
            <div className='flex justify-between'>
                <div>
                <h4 className='uppercase text-[#BCBCBC] text-[13px] opacity-50 my-3'>Download My CV</h4>
                <h2 className='font-medium text-xl'>CV</h2>
                </div >
                <div className='tooltip  opacity-30 group-hover:opacity-100 relative top-5 right-5 duration-300'>
                <span className="tooltip-text ">Download</span> 
                <FaDownload size={40}/>
                </div>
            </div>
        </div>
            </a>
    );
};

export default CVBox;