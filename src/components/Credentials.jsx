import icon from "@/../public/assets/icon.svg";
import sign from "@/../public/assets/sign.png";
import Image from "next/image";
import Link from "next/link";

const Credentials = () => {
  return (
    <Link href={'/credentials'}>
      <div className="p-6 rounded-[30px] group shadow-box cursor-pointer">
        <Image className="w-full" src={sign} alt="signature image" />
        <div className="flex justify-between">
          <div>
            <h4 className="uppercase text-[#BCBCBC] text-[13px] opacity-50  my-3">
              More About me
            </h4>
            <h2 className="font-medium text-xl">Credentials</h2>
          </div>
          <Image
            className="opacity-20 group-hover:opacity-100 duration-300"
            src={icon}
            alt="icon image"
          />
        </div>
      </div>
    </Link>
  );
};

export default Credentials;
