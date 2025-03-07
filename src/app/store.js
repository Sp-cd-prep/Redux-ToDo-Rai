import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
import todoReducer from '../features/todoSlice';

const store = configureStore({
  reducer:{
    count: countReducer ,
    todo: todoReducer
  }
})

export default store;