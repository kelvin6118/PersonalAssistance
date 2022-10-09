import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    auth: false,
    userid: null,
    username: null
}

export const paSlice = createSlice({
  name: 'Personal Assistant',
  initialState,
  reducers: {

  },
});

// this is for dispatch
export const { addTodo } = paSlice.actions;

// this is for configureStore
export default paSlice.reducer;
