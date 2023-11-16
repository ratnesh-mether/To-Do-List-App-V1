import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo_list: [],
}
export const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    addTodo : (state, action) =>{
      const todo = {
        text:action.payload
      }
      state.todo_list.push(todo)
    }
  },
});

export const { addTodo } = listSlice.actions;

export default listSlice.reducer;
