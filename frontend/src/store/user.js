import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { name: '', email: '' }, login: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      state.login = true;
    },
    logout: (state) => {
      state.value = initialState;
      state.login = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
