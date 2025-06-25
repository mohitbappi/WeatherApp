import { StyleSheet } from 'react-native';
import { spacing, borderRadius, typography } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: borderRadius.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontSize: typography.sizes.md,
      color: theme.colors.text,
      minHeight: 48,
    },
  });
