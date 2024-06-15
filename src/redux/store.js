import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactSlice from "./contactsSlice";


export const store = configureStore({
  reducer: { contacts: contactSlice, filters: filterReducer },
});

