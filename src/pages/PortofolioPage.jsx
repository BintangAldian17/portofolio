import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import todoImg from "../assets/todo-image.png";
import spaceImg from "../assets/space-tourism-img.png";
import multiStepImg from "../assets/multi-step-img.png";
import creditCardImg from "../assets/credit-card-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const PortofolioPage = () => {
  return (
    <div className=" w-full h-full flex  md:flex-row flex-col-reverse">
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
                <SiReactquery className=" w-14 h-14" />
                <h1 className=" text-xl font-semibold text-gray-200">React Query</h1>
              </div>
            </div>
          </div>
          <div className=" flex  items-center">
            <h1 className="text-gray-200 text-4xl font-bold rotate-90 tracking-wider">Skils.</h1>
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
      <div className=" h-full md:w-1/2 w-full flex justify-center items-center bg-gray-100">
        <div className=" w-[75%] h-[60%] bg-[#161616] rounded-xl flex justify-center items-center flex-col px-4 drop-shadow-xl">
          <h1 className=" text-gray-300 font-bold text-4xl leading-none">My Projects.</h1>
          {/* <div className=" "> */}
          <Swiper navigation={true} modules={[Navigation]} className=" w-full mt-12">
            <SwiperSlide className="  rounded-lg flex flex-col justify-center items-center">
              <div className=" w-full h-full bg-black">
                <img src={todoImg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" w-full h-full rounded-lg flex justify-center items-center">
              <img src={multiStepImg} alt="" />
            </SwiperSlide>
            <SwiperSlide className=" w-full h-full rounded-lg flex justify-center items-center">
              <img src={spaceImg} alt="" />
            </SwiperSlide>
            <SwiperSlide className=" w-full h-full rounded-lg flex justify-center items-center">
              <img src={creditCardImg} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PortofolioPage;
