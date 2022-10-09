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
    userid: null,
    username: null,
    email: null
}

export const loginSlice = createSlice({
  name: 'User Login',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(Login.fulfilled, (state,action)=>{
        state.auth = action.payload.auth
        state.user = action.payload.userid
        state.username = action.payload.username
        state.email = action.payload.email
    })
  }
});

// this is for dispatch
export const { } = loginSlice.actions;

// this is for configureStore
export default loginSlice.reducer;
