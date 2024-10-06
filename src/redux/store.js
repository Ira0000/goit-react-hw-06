import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./Contact/reducer";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
