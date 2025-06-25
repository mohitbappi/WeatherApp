export interface Theme {
  colors: AppColors;
}

interface AppColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  success: string;
  border: string;
}

export const LIGHT_THEME = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#6D6D80',
    error: '#FF3B30',
    success: '#34C759',
    border: '#E5E5EA',
  } as AppColors,
};

export const DARK_THEME = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    error: '#FF453A',
    success: '#30D158',
    border: '#38383A',
  } as AppColors,
};
