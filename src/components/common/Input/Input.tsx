import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { createStyles } from './Input.styles';

interface InputProps extends TextInputProps {
  testID?: string;
}

export const Input: React.FC<InputProps> = ({ style, testID, ...props }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.textSecondary}
      testID={testID}
      {...props}
    />
  );
};
