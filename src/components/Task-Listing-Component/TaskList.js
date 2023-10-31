import React, { useEffect, useState } from "react";
import TaskOptions from "../Task-Options-Component/TaskOptions";
import { UserContext } from "../../App";

const TaskList = (props) => {
  const {todo_tasks_array,addListItem,todo_input,taskIndex,handleInputChange } = React.useContext(UserContext);  
  return (
    <div className="task-list-component">
      <ul className="list-box">
        {todo_tasks_array.map((item, index) => (
          <div className="list">
            <li type="1" key={index}>
              {item}
            </li>
            <TaskOptions taskIndex={index}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
