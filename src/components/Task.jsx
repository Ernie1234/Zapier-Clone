import React from "react";
import { BsCalendar4 } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi2";
import { BiCircle } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

// import { format } from "date-fns";

function Task({ item, handleDel, handleImp, handleCom, handleEdit }) {
  return (
    <div
      className="flex justify-between items-center bg-slate-100 my-1 py-1 px-6 rounded-md shadow-lg"
      style={{ opacity: item.isCompleted ? 0.3 : 1 }}
    >
      <div className="flex gap-6 items-center">
        {item.isCompleted ? (
          <FaCircle
            size={25}
            className="text-green-600 cursor-pointer"
            onClick={() => handleCom(item)}
          />
        ) : (
          <BiCircle
            size={25}
            className="text-slate-600 cursor-pointer"
            onClick={() => handleCom(item)}
          />
        )}
        <div>
          <h2 className="text-xl font-medium tracking-wide">{item.body}</h2>
          <div className="flex items-center gap-4 text-sky-600">
            <BsCalendar4 size={20} />
            <h2 className="text-xl font-normal tracking-wide">today</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FiEdit
          size={25}
          className="text-slate-500 cursor-pointer"
          onClick={() => {
            handleEdit(item);
          }}
        />
        {item.isImportant ? (
          <HiStar
            size={25}
            className="text-amber-400 cursor-pointer"
            onClick={() => handleImp(item)}
          />
        ) : (
          <HiOutlineStar
            size={25}
            className="text-slate-500 cursor-pointer"
            onClick={() => handleImp(item)}
          />
        )}
        <BsTrash3Fill
          size={20}
          className="text-slate-500 cursor-pointer"
          onClick={() => handleDel(item)}
        />
      </div>
    </div>
  );
}

export default Task;
