import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customer: "",
};

export const CustomerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            state.customer = action.payload.customer;
        },
        releaseCustomer: (state) => {
            state.customer = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCustomer, releaseCustomer } = CustomerSlice.actions;

export default CustomerSlice.reducer;
