import { StyleSheet } from 'react-native';
import { spacing, borderRadius, typography } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.error,
      padding: spacing.md,
      borderRadius: borderRadius.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    message: {
      color: '#FFFFFF',
      fontSize: typography.sizes.sm,
      flex: 1,
      fontWeight: typography.weights.medium,
    },
    dismissButton: {
      marginLeft: spacing.sm,
      padding: spacing.xs,
    },
    dismissText: {
      color: '#FFFFFF',
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.bold,
    },
  });
