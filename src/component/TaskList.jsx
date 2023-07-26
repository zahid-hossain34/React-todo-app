/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { toast } from "react-toastify";

const TaskList = () => {
  const [taskList]  =  useContext(TodoContext);
  const [todo, setTodo] = useContext(TodoContext);


  const removeTask = (taskId) => {
    const updatedList = taskList.filter((task) => task.id !== taskId);
    setTodo(updatedList);
    toast.warn("Task removed successfully!", {
      autoClose: 1000,
    });
  };

  const toggleComplete = (item) => {
    const updatedList = taskList.map((task) =>
      task.id === item?.id ? { ...task, isComplete: !task.isComplete } : task
    );
    if (!item.isComplete) {
      toast.info("Task mark as compelte!", {
        autoClose: 1000,
      });
    } else {
      toast.info("Task mark as incompelte!", {
        autoClose: 1000,
      });
    }

    setTodo(updatedList);
  };
  return (
    <div className="">
      <div className="container border-2 rounded-md space-y-2  border-zinc-100  bg-blue-50 shadow-lg ">
        <div className="flex justify-center mt-6  ">
          <h1 className=" text-2xl p-2   font-mono ">Todo List</h1>
        </div>
        <hr />
        <ul>
          {taskList.length === 0 && (
            <li className="text-center text-xl  text-rose-500 font-mono mt-10">
              No Todo Added Yet!
            </li>
          )}
          {taskList.map((task, index) => (
            <li
              key={task.id}
              className="mb-4 p-4 rounded-md shadow-md flex justify-between"
              style={{
                backgroundColor: task.isComplete ? "#d1fae5" : "#f9fafb",
                border: task.isComplete ? "1px solid #86efac" : "#f3f4f6",
              }}
            >
              <div>
                <span
                  className="text-lg   font-mono   max-w-[900px] block break-words   "
                  style={{
                    textDecoration: task.isComplete ? "line-through" : "none",
                  }}
                >
                  {index + 1}.{task.description}
                </span>
              </div>
              <div className="flex space-x-8 ">
                <button onClick={() => toggleComplete(task)}>
                  {task.isComplete ? (
                    <i className="fa-sharp  text-xl  text-red-400 fa-regular fa-circle-xmark"></i>
                  ) : (
                    <i className="fa-regular text-xl text-green-500 fa-circle-check"></i>
                  )}
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="fa-solid text-red-500 text-xl fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
