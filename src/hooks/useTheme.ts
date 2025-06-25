import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, AppDispatch } from '../store';
import { toggleTheme, loadTheme } from '../store/slices/themeSlice';
import { LIGHT_THEME, DARK_THEME, Theme } from '../config/theme';

export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  const currentTheme: Theme = isDarkMode ? DARK_THEME : LIGHT_THEME;

  const toggle = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const loadThemePreference = useCallback(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  return {
    isDarkMode,
    theme: currentTheme,
    toggleTheme: toggle,
    loadTheme: loadThemePreference,
  };
};
