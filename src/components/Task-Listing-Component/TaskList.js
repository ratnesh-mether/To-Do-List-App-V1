import React, { useState } from "react";

const TaskList = (props) => {
  return (
    <div className="task-list-component">
      <ul className="list-box">
        {props.todo_tasks_array.map((item, index) => (
          <li type="1" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
