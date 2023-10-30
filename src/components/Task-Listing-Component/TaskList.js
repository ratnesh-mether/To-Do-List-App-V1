import React, { useEffect, useState } from "react";
import TaskOptions from "../Task-Options-Component/TaskOptions";
import { UserContext } from "../../App";

const TaskList = (props) => {
  const value = React.useContext(UserContext);  
  return (
    <div className="task-list-component">
    <h1>{value}</h1>
      <ul className="list-box">
        {props.todo_tasks_array.map((item, index) => (
          <div className="list">
            <li type="1" key={index}>
              {item}
            </li>
            <TaskOptions
              todo_tasks_array={props.todo_tasks_array}
              addListItem={props.addListItem}
              todo_input={props.todo_input}
              taskIndex={index}
              handleInputChange={props.handleInputChange}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
