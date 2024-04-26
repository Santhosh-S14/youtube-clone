import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    insertDataToCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { insertDataToCache } = searchSlice.actions;

export default searchSlice.reducer;
