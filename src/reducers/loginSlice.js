import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    token: null,
    email: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action, "action");
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  }
})

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer