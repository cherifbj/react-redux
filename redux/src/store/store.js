import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

// configure store counter
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
