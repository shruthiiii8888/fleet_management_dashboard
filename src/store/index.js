// src/store/index.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  }
});

export default store;
