import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin} from '../utlis/User';

export const Login = createAsyncThunk(
    '/user/login',
    async (User) => {
      const response = await userLogin(User);
      return response
    }
  )

const initialState ={
    auth: false,
    username: null,
    email: null
}

export const paSlice = createSlice({
  name: 'Personal Assistant',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(Login.fulfilled, (state,action)=>{
        state.auth = action.payload.auth
        state.username = action.payload.username
        state.email = action.payload.email
    })
  }
});

// this is for dispatch
export const { } = paSlice.actions;

// this is for configureStore
export default paSlice.reducer;
