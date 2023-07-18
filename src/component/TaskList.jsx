/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TaskList = ({ taskList, onToggleComplete, onRemoveTask }) => {
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
                <button onClick={() => onToggleComplete(task)}>
                  {task.isComplete ? (
                    <i className="fa-sharp  text-xl  text-red-400 fa-regular fa-circle-xmark"></i>
                  ) : (
                    <i className="fa-regular text-xl text-green-500 fa-circle-check"></i>
                  )}
                </button>
                <button onClick={() => onRemoveTask(task.id)}>
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
