/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    logout: (state, action) => {
      state.admin = null;
    },
  },
});

export const { setAdmin, logout } = AdminSlice.actions;

export const getAdmin = (state) => state.adminInfo.admin;

export default AdminSlice.reducer;