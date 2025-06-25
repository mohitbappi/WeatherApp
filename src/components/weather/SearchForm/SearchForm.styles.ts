import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: spacing.md,
    },
    label: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.medium,
      color: theme.colors.text,
      marginBottom: spacing.xs,
    },
  });
