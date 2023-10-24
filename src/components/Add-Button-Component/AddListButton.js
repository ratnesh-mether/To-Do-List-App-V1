import React, { useState } from "react";

const AddListButton = (props) => {
  return (
    <div className="add-button-component">
      <button onClick={() => props.addListItem(props.todo_input)}>
        Add List Item
      </button>
    </div>
  );
};
export default AddListButton;
