import { createSlice } from '@reduxjs/toolkit';

import { fetchPosts, fetchTags } from '../api/postApi';

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },

  tags: {
    items: [],
    status: 'loading',
  },
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    // Get all Posts
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts.items = payload;
      state.posts.status = 'loaded';
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = 'error';
    },
    // Get all tags
    [fetchTags.pending]: (state) => {
      state.tags.items = [];
      state.tags.status = 'loading';
    },
    [fetchTags.fulfilled]: (state, { payload }) => {
      state.tags.items = payload;
      state.tags.status = 'loaded';
    },
    [fetchTags.rejected]: (state) => {
      state.tags.items = [];
      state.tags.status = 'error';
    },
  },
});

export const postReducer = postSlice.reducer;
