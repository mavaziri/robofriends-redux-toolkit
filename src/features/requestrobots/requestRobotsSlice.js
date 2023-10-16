import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  robots: [],
  isPending: false,
  error: "",
};

export const requestedRobots = createAsyncThunk(
  "get/fetchRobots",
  // callback function
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
);

export const requestRobotsSlice = createSlice({
  name: "requestRobots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestedRobots.pending, (state) => {
        state.isPending = true;
      })
      .addCase(requestedRobots.fulfilled, (state, action) => {
        state.isPending = false;
        state.robots = action.payload;
      })
      .addCase(requestedRobots.rejected, (state, action) => {
        state.error = action.payload;
        state.isPending = false;
      });
  },
});

const requestRobotsReducer = requestRobotsSlice.reducer;

export { requestRobotsReducer as requestingRobots };
