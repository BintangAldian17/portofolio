import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const SideNav = () => {
  return (
    <div className=" md:w-[3%] md:h-full bg-[#161616] absolute">
      <div className=" flex flex-col h-full justify-end w-full pb-32">
        <div className=" w-full flex flex-col items-center bg-gray-300 gap-y-5 py-5">
          <AiFillGithub className=" w-7 h-7 text-black" />
          <AiFillLinkedin className=" w-7 h-7 text-black" />
          <AiFillFacebook className=" w-7 h-7 text-black" />
          <AiFillInstagram className=" w-7 h-7 text-black" />
        </div>
      </div>
    </div>
  );
};
