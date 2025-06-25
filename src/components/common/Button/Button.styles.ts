import { StyleSheet } from 'react-native';
import { spacing, borderRadius, typography } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 48,
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    disabled: {
      opacity: 0.6,
    },
    text: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.semibold,
    },
    primaryText: {
      color: theme.colors.surface,
    },
    secondaryText: {
      color: theme.colors.primary,
    },
  });
