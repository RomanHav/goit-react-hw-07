import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactSlice from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer(
  {
    key: "contactName",
    storage,
    whitelist: ["items"],
  },
  contactSlice
);

export const store = configureStore({
  reducer: { contacts: persistedReducer, filters: filterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
