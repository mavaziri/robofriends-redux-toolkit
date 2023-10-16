import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
};

export const searchRobotsSlice = createSlice({
  name: "searchingRobots",
  initialState,
  reducers: {
    searchRobots: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { searchRobots } = searchRobotsSlice.actions;

const searchRobotsReducer = searchRobotsSlice.reducer;

export {searchRobotsReducer as searchingRobots};
