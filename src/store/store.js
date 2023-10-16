import { configureStore } from "@reduxjs/toolkit";
import { requestingRobots } from "../features/requestrobots/requestRobotsSlice";
import { searchingRobots } from "../features/searchrobots/searchRobotsSlice";

const store = configureStore({
  reducer: {
    requestingRobots,
    searchingRobots,
  },
});

export default store;
