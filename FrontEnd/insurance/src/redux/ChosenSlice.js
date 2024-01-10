import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenPackage: "",
  type: "",
};

export const ChosenSlice = createSlice({
  name: "chosenPackage",
  initialState,
  reducers: {
    setPackage: (state, action) => {
      state.chosenPackage = action.payload.string;
    },
    releasePackage: (state) => {
      state.chosenPackage = "";
      state.type = "";
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPackage, releasePackage, setType } = ChosenSlice.actions;

export default ChosenSlice.reducer;
