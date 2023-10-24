import AddListButton from "./components/Add-Button-Component/AddListButton";
import TaskInput from "./components/Task-Input-Component/TaskInput";
import TaskList from "./components/Task-Listing-Component/TaskList";
import "./styles.css";
import React, { useState } from "react";
/*
  1. Change prop names. - Done.
  2. Edit Button.
  3. Remove Button.
  4. Delete Task Button.
  5. Complete Task.
  6. Hello.
  7. 
  8 .
*/

export default function App() {
  const [todo_tasks_array, set_todo_tasks] = useState([]);
  const [todo_input, set_todo_input] = useState("");
  function addListItem(list_item) {
    if (list_item !== "") {
      set_todo_tasks([...todo_tasks_array, list_item]);
      set_todo_input("");
    } else {
      alert("Empty Input");
    }
  }
  const handleInputChange = (event) => {
    set_todo_input(event.target.value);
  };
  return (
    <div className="App">
      <h1>Let's Finish the Dish !!!</h1>
      <TaskList todo_tasks_array={todo_tasks_array} />
      <TaskInput
        todo_input={todo_input}
        handleInputChange={handleInputChange}
      />
      <AddListButton addListItem={addListItem} todo_input={todo_input} />
    </div>
  );
}
