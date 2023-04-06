import { useEffect, useState } from "react";
import Main from "./components/Main";
import SideNav from "./components/SideNav";

// const data = [
//   {
//     id: 1,
//     body: "Write code",
//     isCompleted: false,
//     isImportant: false,
//     time: new Date(),
//   },
//   {
//     id: 2,
//     body: "Write friday update",
//     isCompleted: false,
//     isImportant: false,
//     time: new Date(),
//   },
// ];
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputTask, setInputTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //APP FUNCTIONS
  //HANDLE TASK INPUT CHANGE
  const handleChange = (e) => {
    setInputTask(e.target.value);
  };
  //HANDLE TASK INPUT SUBMIT
  const handleTaskInput = (e) => {
    e.preventDefault();
    if (inputTask === "" || null) return;
    setTasks([
      ...tasks,
      {
        id: new Date(),
        body: inputTask,
        isCompleted: false,
        isImportant: false,
        time: new Date(),
      },
    ]);
    setInputTask("");
  };
  //HANDLE DELETE CLICK
  const handleDel = ({ id }) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  //HANDLE IMPORTANT CLICK
  const handleImp = ({ id }) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, isImportant: !item.isImportant } : item
      )
    );
  };
  //HANDLE COMPELETED CLICK
  const handleCom = ({ id }) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  //HANDLE EDIT BUTTON CLICK
  const handleEdit = (item) => {
    setEdit((prev) => !prev);
    setCurrentTask({ ...item });
  };
  //HANDLE EDIT INPUT CHANGE
  const handleEditChange = (e) => {
    setCurrentTask({ ...currentTask, body: e.target.value });
  };
  //HANDLE EDIT SUBMIT CLICK
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((item) => (item.id === currentTask.id ? currentTask : item))
    );
    setEdit((prev) => !prev);
  };

  return (
    <div className="bg-white w-full h-screen p-8">
      <div className="h-full w-full rounded-xl grid grid-cols-12 overflow-hidden shadow-xl">
        <SideNav />
        <Main
          tasks={tasks}
          handleDel={handleDel}
          handleImp={handleImp}
          handleCom={handleCom}
          inputTask={inputTask}
          handleTaskInput={handleTaskInput}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          edit={edit}
          currentTask={currentTask}
        />
      </div>
    </div>
  );
}

export default App;
