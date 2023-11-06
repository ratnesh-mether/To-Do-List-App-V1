import { configureStore } from '@reduxjs/toolkit'
import listSlice from '../Redux-State/ListState/listSlice';

const store = configureStore({
  reducer: {
    listSlice : listSlice
  },
})

export default store;