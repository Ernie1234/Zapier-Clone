import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { IoInfinite } from "react-icons/io5";
import {
  HiOutlineChevronDown,
  HiOutlineStar,
  HiOutlineSun,
} from "react-icons/hi";
import { BsLayoutSidebar } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

function SideNav() {
  return (
    <div className="relative w-full h-full col-start-1 col-end-4 pt-4 p-4 bg-gray-100">
      <div className="py-4 w-full flex items-center">
        <div className="h-12 w-12 items-center justify-center flex bg-pink-300 rounded-full mr-3">
          <h2 className="text-black font-semibold uppercase">jp</h2>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Justin Pat</div>
          <p className="text-slate-500 truncate">justinpat@gmail.com</p>
        </div>
      </div>
      <div className="relative flex items-center  text-slate-600 focus-within:text-slate-600">
        <BiSearch size={25} className="pointer-events-none absolute ml-3" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 placeholder-slate-600 font-medium text-lg pl-12 p-1 rounded-lg w-full outline-none border-0 focus:outline-none focus:border-0"
        />
      </div>
      <div className=" h-screen w-full mt-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] whitespace-nowrap">
        <div className="w-full flex flex-col border-gray-200 border-b-2">
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <HiOutlineSun size={22} className="text-slate-600" />
              <h3 className="font-semibold capitalize text-lg">my day</h3>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <HiOutlineStar size={22} className="text-slate-600" />
              <h3 className="font-semibold capitalize text-lg">important</h3>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <MdOutlineCalendarToday size={22} className="text-green-700" />
              <h3 className="font-semibold capitalize text-lg">Planned</h3>
            </div>
            <p className="text-slate-500 font-semibold">5</p>
          </div>
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <IoInfinite size={25} className="text-rose-700" />
              <h3 className="font-semibold capitalize text-lg">all</h3>
            </div>
            <p className="text-slate-500 font-semibold">5</p>
          </div>
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <MdOutlineCheckCircleOutline
                size={25}
                className="text-rose-700"
              />
              <h3 className="font-semibold capitalize text-lg">completed</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <BsLayoutSidebar size={25} className="text-gray-500" />
              <h3 className="font-semibold capitalize text-lg">
                untitled group
              </h3>
            </div>

            <HiOutlineChevronDown size={25} className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="sticky bottom-4 left-0">
        <div className="relative flex items-center text-slate-800 focus-within:text-slate-800">
          <FiPlus size={25} className="pointer-events-none absolute ml-3" />
          <input
            type="text"
            placeholder="Add a Task"
            className="bg-gray-100 placeholder-slate-800 font-medium text-lg px-2 py-2 rounded-lg w-full focus:outline-none pl-14"
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
