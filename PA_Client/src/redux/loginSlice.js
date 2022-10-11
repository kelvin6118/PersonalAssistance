import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin} from '../utlis/api/User';

export const Login = createAsyncThunk(
    '/user/login',
    async (User) => {
      const response = await userLogin(User);
      return response
    }
  )
  
const initialState ={
  auth: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout:(state, action)=>{
      state.auth = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(Login.fulfilled, (state,action)=>{     
      sessionStorage.setItem("token", "Bearer " + action.payload.token);
      sessionStorage.setItem("userid", action.payload.userid);
      sessionStorage.setItem("username", action.payload.username);
      sessionStorage.setItem("auth", action.payload.auth);
      sessionStorage.setItem("email", action.payload.email);
      state.auth = action.payload.auth;
    })
  }
});

// this is for dispatch
export const { logout } = loginSlice.actions;

// this is for configureStore
export default loginSlice.reducer;
