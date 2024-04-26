import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: cacheReducer,
  },
});

export default appStore;
