import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { createStyles } from './LoadingSpinner.styles';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  testID?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'large',
  testID,
}) => {
  const { theme } = useTheme();
  const styles = createStyles();

  return (
    <View style={styles.container} testID={testID}>
      <ActivityIndicator size={size} color={theme.colors.primary} />
    </View>
  );
};
