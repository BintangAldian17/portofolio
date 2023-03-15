import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  return (
    <div className=" md:w-[3%] h-full bg-gray-100">
      <div className=" flex md:flex-col h-full justify-center items-center gap-y-3">
        <div
          className={` md:w-1 md:h-7 w-7 h-1 rounded-full bg-slate-700 ${
            location.pathname !== "/" && "bg-opacity-50"
          } `}></div>
        <div
          className={` md:w-1 md:h-7 w-7 h-1 rounded-full bg-slate-700 ${
            location.pathname !== "/portofolio" && "bg-opacity-50"
          }`}></div>
        <div
          className={` md:w-1 md:h-7 w-7 h-1 rounded-full bg-slate-700 ${
            location.pathname !== "/contact" && "bg-opacity-50"
          }`}></div>
      </div>
    </div>
  );
};
