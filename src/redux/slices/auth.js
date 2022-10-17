import { createSlice } from '@reduxjs/toolkit';

import { fetchAuth } from '../api/authApi';

const initialState = {
  data: null,
  token: window.localStorage.getItem('token') || null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    // Login
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchAuth.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'loaded';
    },
    [fetchAuth.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
