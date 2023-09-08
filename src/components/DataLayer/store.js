import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducer/blogReducer";
import researchReducer from "./reducer/researchReducer";
import dashboardReducer from "./reducer/dashboardReducer";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    researches: researchReducer,
    dashboards: dashboardReducer,
  },
});
