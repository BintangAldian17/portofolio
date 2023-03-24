import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import todoImg from "../assets/todo-image.png";
import spaceImg from "../assets/space-tourism-img.png";
import multiStepImg from "../assets/multi-step-img.png";
import creditCardImg from "../assets/credit-card-img.png";

import { SideNav } from "../components/SideNav";
import { IndicatorPage } from "../components/IndicatorPage";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const PortofolioPage = () => {
  return (
    <motion.div
      className=" w-full h-full flex  md:flex-row flex-col-reverse"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div className=" h-full md:w-1/2 w-full flex  bg-[#161616] shadow-2xl flex-col pt-[160px] gap-y-12 pl-40">
        <div className=" grid md:grid-cols-10 md:gap-y-20 md:grid-rows-2 grid-rows-4">
          <div className=" col-span-8">
            <div className=" grid grid-cols-3 border-r border-gray-200  gap-y-10 pr-14">
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
                <AiFillGithub className=" w-14 h-14" />
                <h1 className=" text-xl font-semibold text-gray-200">GitHub</h1>
              </div>
            </div>
          </div>
          <div className=" flex  items-center">
            <h1 className="text-gray-200 text-4xl font-bold rotate-90 tracking-wider">Skills.</h1>
          </div>
          <div className=" border-r border-gray-200 col-span-8 flex pr-12 mb-2">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magni eaque quisquam et fugit autem a, ex
              laboriosam nam obcaecati nulla iure illum porro officia tempora voluptatibus aspernatur quae sunt!
            </h1>
          </div>
          <div className=" flex items-center">
            <h1 className="text-gray-200 text-4xl font-bold rotate-90 tracking-wider">About Me.</h1>
          </div>
        </div>
      </div>
      <div className=" h-full md:w-1/2 w-full flex justify-center items-center bg-gray-100 pt-16">
        <div className="w-full h-full rounded-xl flex flex-col justify-center items-center pl-16 pr-20 drop-shadow-xl gap-y-10">
          <div className=" flex items-baseline w-full ">
            <span className=" text-[#161616] font-extrabold tracking-wider border-l-[7px] pl-2 border-[#161616] text-[30px] leading-[35px] drop-shadow-sm">
              My <br /> <span className=" font-extrabold tracking-wide text-[35px]">Projects.</span>
            </span>
          </div>
          <div className=" grid grid-cols-2 gap-16">
            <div className="card glass w-72">
              <figure>
                <img src={todoImg} alt="car!" />
              </figure>
              <div className=" flex justify-center items-center py-2">
                <a href="https://github.com/BintangAldian17/Todos-App" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className=" text-[#161616] w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="card glass w-72">
              <figure>
                <img src={spaceImg} alt="car!" />
              </figure>
              <div className=" flex justify-center items-center py-2">
                <a href="https://github.com/BintangAldian17/Space-Tourism" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className=" text-[#161616] w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="card glass w-72">
              <figure>
                <img src={multiStepImg} alt="car!" />
              </figure>
              <div className=" flex justify-center items-center py-2">
                <a href="https://github.com/BintangAldian17/Multi-Step-APP" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className=" text-[#161616] w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="card glass w-72">
              <figure>
                <img src={creditCardImg} alt="car!" />
              </figure>
              <div className=" flex justify-center items-center py-2">
                <a href="https://github.com/BintangAldian17/Credit-Card" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className=" text-[#161616] w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideNav />
      <IndicatorPage />
    </motion.div>
  );
};

export default PortofolioPage;
