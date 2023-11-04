import React, { useState } from "react";
import DemoContext from "./DemoContext";

const DemoContextProvider = ({ children }) => {
  const [user, setUser] = useState("Hello");
  const [todo_tasks_array, set_todo_tasks] = useState([]);
  const [todo_input, set_todo_input] = useState("");
  function addListItem(list_item, operation, taskIndex = -1) {
    if (list_item !== "") {
      switch (operation) {
        case "ADD":
          // alert("ADD");
          set_todo_tasks([...todo_tasks_array, list_item]);
          set_todo_input("");
          break;
        case "EDIT":
          // alert("EDIT");- DG-4632[1]:Payment Submit New Copy [ratnesh]
          const temp_array = [...todo_tasks_array];
          temp_array[taskIndex] = todo_input;
          set_todo_tasks(temp_array);
          set_todo_input("");
          break;
        default:
          set_todo_tasks([...todo_tasks_array, list_item]);
          set_todo_input("");
      }
    } else {
      alert("Empty Input");
    }
  }
  function editListItem(taskIndex) {
    const temp_array = [...todo_tasks_array];
    temp_array[taskIndex] = "Hello";
    set_todo_tasks(temp_array);
    // alert(taskIndex);
  }
  const handleInputChange = (event) => {
    set_todo_input(event.target.value);
  };
  return (
    <DemoContext.Provider
      value={{
        todo_tasks_array,
        set_todo_tasks,
        todo_input,
        set_todo_input,
        handleInputChange,
        addListItem,
        editListItem,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContextProvider;
