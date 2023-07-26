/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoProvider = (props) => {
    const getTaskList = JSON.parse(localStorage.getItem("taskList"));
    const [taskList, setTaskList] = useState(getTaskList || []);

  return (
    <TodoContext.Provider value={[taskList, setTaskList]}>
        {props.children}
    </TodoContext.Provider>
  )
}


