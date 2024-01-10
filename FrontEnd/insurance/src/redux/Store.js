import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./PackageSlice";
import QuotationSlice from "./QuotationSlice";
import LoginSlice from "./LoginSlice";
import ChosenSlice from "./ChosenSlice";
import CustomerSlice from "./CustomerSlice";

export const store = configureStore({
  reducer: {
    package: packageSlice,
    quote: QuotationSlice,
    user: LoginSlice,
    chosenPackage: ChosenSlice,
    customer: CustomerSlice,
  },
});
