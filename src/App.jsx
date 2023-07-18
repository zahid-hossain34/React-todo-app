// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

const App = () => {
  const [taskList, setTaskList] = useState([]);
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

  const addTask = (newTask) => {
    setTaskList([
      ...taskList,
      { id: Date.now(), description: newTask, isComplete: false },
    ]);
  };

  const removeTask = (taskId) => {
    const updatedList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedList);
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

    setTaskList(updatedList);
  };

  return (
    <div className="    flex justify-center flex-col space-y-10 p-2 sm:p-0 ">
      <AddTask onAddTask={addTask} />
      <TaskList
        taskList={taskList}
        onToggleComplete={toggleComplete}
        onRemoveTask={removeTask}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
