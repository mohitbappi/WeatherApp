import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storageService } from '../../services/storageService';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

export const loadTheme = createAsyncThunk('theme/loadTheme', async () => {
  const isDarkMode = await storageService.getThemePreference();
  return isDarkMode;
});

export const toggleTheme = createAsyncThunk(
  'theme/toggleTheme',
  async (_, { getState }) => {
    const state = getState() as { theme: ThemeState };
    const newTheme = !state.theme.isDarkMode;
    await storageService.setThemePreference(newTheme);
    return newTheme;
  },
);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadTheme.fulfilled, (state, action) => {
        state.isDarkMode = action.payload;
      })
      .addCase(toggleTheme.fulfilled, (state, action) => {
        state.isDarkMode = action.payload;
      });
  },
});

export default themeSlice.reducer;
