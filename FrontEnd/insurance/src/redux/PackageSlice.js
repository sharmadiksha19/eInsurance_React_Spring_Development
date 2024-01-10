import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: "",
  premium: "",
  super: "",
  recommendation: "",
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    set: (state, action) => {
      state.basic = action.payload.packages.Basic;
      state.premium = action.payload.packages.Premium;
      state.super = action.payload.packages.Super;
      state.recommendation = action.payload.pack;
    },
    release: (state) => {
      state.basic = "";
      state.premium = "";
      state.super = "";
      state.recommendation = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, release } = packageSlice.actions;

export default packageSlice.reducer;
