import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  jwt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = null;
      state.token = null;
      //console.log("action=", action);
      //const { user, jwt } = action.payload;
      //state.user = user;
      //state.jwt = jwt;
      //TODO:ここでcookieに格納したかったけど、エラーになる
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
