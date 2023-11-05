import React, { useContext, useEffect, useState } from "react";
import TaskOptions from "../Task-Options-Component/TaskOptions";
import DataContext from "../../contexts/DataContext/DataContext";

const TaskList = (props) => {
  const {todo_tasks_array} = useContext(DataContext);  
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
