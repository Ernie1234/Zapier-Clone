import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import AppIcon from "./AppIcon";
import NavSideItem from "./NavSideItem";

function SideBar() {
  const [input, setInput] = useState("");
  return (
    <div className="bg-gray-100 col-start-1 col-end-4 relative">
      <div className="flex flex-col px-4 pt-6 overflow-y-scroll scroll-smooth no-scrollbar ">
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="border-gray-200 border-b-2 ">
          <NavSideItem cat="My day" />
          <NavSideItem cat="Important" />
          <NavSideItem cat="Planned" task={4} />
          <NavSideItem cat="All" task={5} />
          <NavSideItem cat="Completed" />
        </div>
        <div>
          <div className="flex justify-between m-3">
            <div className="flex gap-2 items-center">
              <AppIcon />
              <h3 className="font-bold capitalize text-base">My group</h3>
            </div>
            <AppIcon />
          </div>
          <div className="pl-4">
            <NavSideItem cat="home" task={4} />
          </div>
        </div>
      </div>
      <div className="w-full bottom-3 absolute px-4 ">
        <div className="relative flex items-center  text-slate-600 focus-within:text-slate-600">
          <FiPlus size={25} className="pointer-events-none absolute ml-3" />
          <input
            type="text"
            placeholder="New List"
            className="bg-gray-200 placeholder-slate-600 font-medium text-lg pl-12 p-1 rounded-lg w-full focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
