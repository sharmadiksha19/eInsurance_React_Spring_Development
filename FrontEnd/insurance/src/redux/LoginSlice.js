import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const LoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
    },
    releaseUser: (state) => {
      state.quote = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, releaseUser } = LoginSlice.actions;

export default LoginSlice.reducer;
