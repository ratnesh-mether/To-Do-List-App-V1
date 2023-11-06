import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}
export const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    setCounter:(state) => {
        state.counter = 1
    }
  },
});

export const { setCounter } = listSlice.actions;

export default listSlice.reducer;
