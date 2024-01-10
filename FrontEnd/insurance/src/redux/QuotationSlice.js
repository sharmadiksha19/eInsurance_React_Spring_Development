import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "",
};

export const packageSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.values;
    },
    releaseQuote: (state) => {
      state.quote = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuote, releaseQuote } = packageSlice.actions;

export default packageSlice.reducer;
