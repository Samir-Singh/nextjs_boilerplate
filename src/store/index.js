import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      sidebarReducer: sidebarReducer,
    },
    devTools: true,
  });
}

export const store = makeStore();
