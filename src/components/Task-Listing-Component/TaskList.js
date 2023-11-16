import React, { useContext, useEffect, useState } from "react";
import TaskOptions from "../Task-Options-Component/TaskOptions";
import DataContext from "../../contexts/DataContext/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../../Redux-State/ListState/listSlice";

const TaskList = (props) => {
  const {todo_tasks_array} = useContext(DataContext);
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.listSlice.counter);  

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
