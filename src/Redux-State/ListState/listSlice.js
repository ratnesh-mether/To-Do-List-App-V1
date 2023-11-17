import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo_list: [],
  add_input: ''
}
export const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    addTodo : (state, action) =>{
      console.log(action)
      const todo = {
        text:action.payload
      }
      state.todo_list.push(todo)
    },
    set_add_input:(state,action)=>{
      state.add_input = action.payload
    }
  },
});

export const { addTodo, set_add_input, add_input} = listSlice.actions;

export default listSlice.reducer;
