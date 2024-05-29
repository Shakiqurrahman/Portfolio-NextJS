import myWorks from '@/../public/assets/my-works.png';
import icon from "@/../public/assets/icon.svg";
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    return (
        <Link href={'/projects'}>
        <div className='p-6 rounded-[30px] shadow-box group cursor-pointer'>
            <Image className='w-full' src={myWorks} alt="myWorks image" />
            <div className='flex justify-between'>
                <div>
                <p className='uppercase text-[#BCBCBC] text-[13px] opacity-50 my-3'>Showcase</p>
                <h2 className='font-medium text-xl'>Projects</h2>
                </div>
                <Image className='opacity-20 group-hover:opacity-100 duration-300' src={icon} alt="icon image" />
            </div>
        </div>
        </Link>
    );
};

export default Projects;