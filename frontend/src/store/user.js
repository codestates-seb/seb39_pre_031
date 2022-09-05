import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = { name: null, login: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.login = true;
    },
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
