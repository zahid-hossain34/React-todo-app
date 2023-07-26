// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  // Load tasks from local storage on component mount
  // useEffect(() => {
  //   const storedTasks = localStorage.getItem('taskList');
  //   if (storedTasks) {
  //     setTaskList(JSON.parse(storedTasks));
  //   }
  //   console.log(storedTasks);
  // }, []);

  // Save tasks to local storage whenever the taskList changes
  // useEffect(() => {
  //   localStorage.setItem('taskList', JSON.stringify(taskList));
  //   console.log(taskList);
  // }, [taskList]);

  // const handleInputChange = (event) => {
  //   setTask(event.target.value);
  // };

 

  return (
    <TodoProvider>
    <div className="    flex justify-center flex-col space-y-10 p-2 sm:p-0 ">
      <AddTask/>
      <TaskList
      />
      <ToastContainer />
    </div>
    </TodoProvider>
  );
};

export default App;
