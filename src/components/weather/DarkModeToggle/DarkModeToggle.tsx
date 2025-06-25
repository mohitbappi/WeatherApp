import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { createStyles } from './DarkModeToggle.styles';

export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleTheme}
      testID="dark-mode-toggle"
      activeOpacity={0.7}
    >
      <View style={[styles.toggle, isDarkMode && styles.toggleActive]}>
        <View style={[styles.thumb, isDarkMode && styles.thumbActive]} />
      </View>
      <Text style={styles.label}>
        {isDarkMode ? '🌙' : '☀️'} {isDarkMode ? 'Dark' : 'Light'}
      </Text>
    </TouchableOpacity>
  );
};
