import AddListButton from "./components/Add-Button-Component/AddListButton";
import TaskInput from "./components/Task-Input-Component/TaskInput";
import TaskList from "./components/Task-Listing-Component/TaskList";
import "./styles.css";
import React, { useState } from "react";
/*
  1. Change prop names. - Done.
  2. Edit Button. - Done.
  3. Introduce Context. - In Progress...
  4. Remove Button.
  5. Delete Task Button.
  6. Complete Task.
*/

export default function App() {
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
    <div className="App-Component">
      <h1>Let's Finish the Dish !!!</h1>
      <TaskList
        todo_tasks_array={todo_tasks_array}
        addListItem={addListItem}
        todo_input={todo_input}
        handleInputChange={handleInputChange}
      />
      <TaskInput
        todo_input={todo_input}
        handleInputChange={handleInputChange}
      />
      <AddListButton
        addListItem={addListItem}
        todo_input={todo_input}
        title="Add Task"
        operation="ADD"
      />
    </div>
  );
}
