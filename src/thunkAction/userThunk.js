import { createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentAccount = createAsyncThunk(
  'user/logUserAccount',
  async (user) => {
    return user;
  }
);