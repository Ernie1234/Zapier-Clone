import React, { useCallback, useEffect, useRef } from "react";
import bgImage from "../assets/beach.jpg";
import { ImUserPlus } from "react-icons/im";
import { RxDotsHorizontal } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import Task from "./Task";
import AppMessage from "./AppMessage";

function Main({
  tasks,
  handleDel,
  handleImp,
  handleCom,
  inputTask,
  handleTaskInput,
  handleChange,
  handleEdit,
  handleEditChange,
  edit,
  handleEditSubmit,
  currentTask,
}) {
  const initLen = tasks.length;
  const editInputFocus = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const taskInputFocus = useRef(null);

  useEffect(() => {
    if (taskInputFocus.current) {
      taskInputFocus.current.focus();
    }
  }, []);

  const element = initLen ? (
    tasks.map((item) => (
      <Task
        key={item.id}
        item={item}
        handleDel={handleDel}
        handleImp={handleImp}
        handleCom={handleCom}
        handleEdit={handleEdit}
      />
    ))
  ) : (
    <AppMessage />
  );
  return (
    <div
      className="bg-green-200 col-start-4 col-end-13 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full w-full bg-gray-900 bg-opacity-10 pt-8 px-4 relative">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-bold capitalize text-3xl font-sans">
            Zapier
          </h3>
          <div className="flex gap-2">
            <div className="bg-stone-600 py-2 px-5 rounded-md shadow-md cursor-pointer">
              <ImUserPlus color="white" />
            </div>
            <div className="bg-stone-600 py-2 px-5 rounded-md shadow-md cursor-pointer">
              <RxDotsHorizontal color="white" />
            </div>
          </div>
        </div>
        <div className="mt-3 h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] whitespace-nowrap ">
          {element}
        </div>
      </div>
      <div className="w-full bottom-3 sticky px-4">
        <div className="relative flex items-center text-gray-100 focus-within:text-gray-100">
          <FiPlus size={25} className="pointer-events-none absolute ml-3" />
          {edit ? (
            <form onSubmit={handleEditSubmit} className="w-full">
              <input
                type="text"
                placeholder="Add a Task"
                value={currentTask.body}
                onChange={handleEditChange}
                autoFocus
                ref={editInputFocus}
                className="bg-red-800 placeholder-gray-300 font-medium text-lg px-2 py-2 rounded-lg w-full focus:outline-none pl-14"
              />
            </form>
          ) : (
            <form onSubmit={handleTaskInput} className="w-full">
              <input
                type="text"
                placeholder="Add a Task"
                ref={taskInputFocus}
                value={inputTask}
                onChange={handleChange}
                className="bg-stone-800 placeholder-gray-300 font-medium text-lg px-2 py-2 rounded-lg w-full focus:outline-none pl-14"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
