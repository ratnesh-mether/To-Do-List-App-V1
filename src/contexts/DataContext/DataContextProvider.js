import React, { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [todo_tasks_array, set_todo_tasks] = useState([]);
  const [todo_input, set_todo_input] = useState("");
  const [edit_input, set_edit_input] = useState("");
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
          temp_array[taskIndex] = edit_input;
          set_todo_tasks(temp_array);
          set_edit_input("");
          break;
        default:
          set_todo_tasks([...todo_tasks_array, list_item]);
          set_todo_input(""); 
      }
    } 
    else if(operation === "DELETE") {
      const temp_array = [...todo_tasks_array];
      temp_array.splice(taskIndex, 1);
      set_todo_tasks(temp_array);
    }
    else {
      alert("Empty Input");
    }
  }
  function editListItem(taskIndex) {
    const temp_array = [...todo_tasks_array];
    temp_array[taskIndex] = "Hello";
    set_todo_tasks(temp_array);
    // alert(taskIndex);
  }
  const handleInputChange = (event, operation) => {
    console.log(operation)
    if(operation === "EDIT")
      set_edit_input(event.target.value);
    else
      set_todo_input(event.target.value);
  };
  return (
    <DataContext.Provider
      value={{
        todo_tasks_array,
        set_todo_tasks,
        todo_input,
        edit_input,
        set_todo_input,
        handleInputChange,
        addListItem,
        editListItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
