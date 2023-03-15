import React from "react";
import { GiFrozenOrb } from "react-icons/gi";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate("/");
  };

  return (
    <div className=" md:w-full h-20 bg-transparent md:flex items-center absolute px-16 justify-between z-50 hidden">
      <div className=" flex items-center gap-x-2 cursor-pointer" onClick={onClickNavigate}>
        <GiFrozenOrb className=" w-9 h-9" />
        <div className=" uppercase font-semibold drop-shadow-sm text-lg">
          <span className=" font-bold">web </span>
          <span className=" bg-slate-200 text-black font-bold py-[2px] px-[2px] rounded-sm">developer</span>
        </div>
      </div>
      <ul className=" flex gap-x-16 font-bold text-lg text-gray-600">
        <li className=" ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "  border-b-[3px] border-gray-900 border-opacity-80"
                : "  hover:border-b-[3px] hover:border-gray-900  transition-all ease-in-out duration-75"
            }>
            <span className="">Home</span>
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to={"/portofolio"}
            className={({ isActive }) =>
              isActive
                ? " border-b-[3px] border-gray-900"
                : "  hover:border-b-[3px] hover:border-gray-900  transition-all ease-in-out duration-75"
            }>
            <span className="">Portofolio</span>
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "  border-b-[3px] border-gray-900"
                : "  hover:border-b-[3px] hover:border-gray-900  transition-all ease-in-out duration-75"
            }>
            <span className="">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
