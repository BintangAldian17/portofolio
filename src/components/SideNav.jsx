import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className=" md:w-[2.3%] md:h-full bg-[#161616] absolute">
      <div className=" flex flex-col h-full justify-end w-full pb-32">
        <div className=" w-full flex flex-col items-center bg-gray-300 gap-y-5 py-5">
          <a href="https://github.com/BintangAldian17" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className=" md:w-7 md:h-7 text-black" />
          </a>
          <a href="https://www.linkedin.com/in/bintang-aldian-139957252" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className=" md:w-7 md:h-7 text-black" />
          </a>
          <AiFillFacebook className=" md:w-7 md:h-7 text-black" />
          <AiFillInstagram className=" md:w-7 md:h-7 text-black" />
        </div>
      </div>
    </div>
  );
};
