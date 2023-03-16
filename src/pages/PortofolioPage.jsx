import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const PortofolioPage = () => {
  return (
    <div className=" w-full h-full flex">
      <div className=" h-full w-1/2 flex  bg-[#161616] shadow-2xl flex-col pl-28 pt-[160px]">
        <div className=" flex flex-row-reverse justify-center items-center">
          <h1 className="text-gray-200 text-4xl font-bold rotate-90 tracking-wider">Skils</h1>
          <div className=" grid grid-cols-3 gap-x-5 gap-y-7 border-r border-gray-200 pr-16">
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <FaHtml5 className=" w-14 h-14" />
              <h1 className=" text-xl font-semibold text-gray-200">Html5</h1>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <FaCss3Alt className=" w-14 h-14" />
              <h1 className=" text-xl font-semibold text-gray-200">CSS3</h1>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <SiTailwindcss className=" w-14 h-14" />
              <h1 className=" text-lg font-semibold text-gray-200">TailwindCSS</h1>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <SiJavascript className=" w-12 h-12" />
              <h1 className=" text-xl font-semibold text-gray-200">Java Script</h1>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <FaReact className=" w-14 h-14" />
              <h1 className=" text-xl font-semibold text-gray-200">React</h1>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-4">
              <SiReactquery className=" w-14 h-14" />
              <h1 className=" text-xl font-semibold text-gray-200">React Query</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full w-1/2 flex justify-center items-center bg-gray-100"></div>
    </div>
  );
};

export default PortofolioPage;
