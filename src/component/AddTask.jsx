/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
      toast.success("Task added successfully!", {
        autoClose: 1000,
      });
    } else {
      toast.error("Please enter valid a input!", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="  relative ">
      <div className="w-full hidden sm:block absolute top-0 left-0 z-[-1]  h-[300px]">
        <img
          className="w-full h-full"
          src="/src/assets/images/bg-2.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center mt-[0px] sm:mt-[40px]   bg-violet-200 sm:bg-transparent mb-2 sm:mb-0  ">
        <h1 className="text-[75px] border border-zinc-100 px-8  sm:text-white  font-serif">
          TODO
        </h1>
      </div>
      <div className="flex  space-x-0 sm:space-x-4 space-y-4 sm:space-y-0    text-center sm:mt-[50px]    flex-col sm:flex-row sm:justify-center">
        <input
          className=" bg-zinc-50   border border-zinc-100 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-[600px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add new todo"
          type="text"
          value={task}
          onChange={handleInputChange}
        />
        <button
          className="  bg-violet-500 shadow-md border border-violet-400 text-white rounded-md text-sm p-2 "
          onClick={addTask}
        >
          Add Todo
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddTask;
