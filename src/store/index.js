import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { createLogger } from "redux-logger";


const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== "production",
});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
});
