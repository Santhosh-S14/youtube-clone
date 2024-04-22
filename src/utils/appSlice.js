import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebarMenu(state) {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebarMenu } = appSlice.actions;

export default appSlice.reducer;
