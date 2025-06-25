import { StyleSheet } from 'react-native';
import { spacing, borderRadius, typography } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    header: {
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    cityName: {
      fontSize: typography.sizes.xl,
      fontWeight: typography.weights.semibold,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: spacing.xs,
    },
    temperature: {
      fontSize: typography.sizes['4xl'],
      fontWeight: typography.weights.bold,
      color: theme.colors.primary,
    },
    weatherInfo: {
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    weatherIcon: {
      width: 80,
      height: 80,
      marginBottom: spacing.xs,
    },
    weatherDescription: {
      fontSize: typography.sizes.md,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    details: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    detailItem: {
      alignItems: 'center',
      flex: 1,
    },
    detailLabel: {
      fontSize: typography.sizes.sm,
      color: theme.colors.textSecondary,
      marginBottom: spacing.xs,
    },
    detailValue: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.semibold,
      color: theme.colors.text,
    },
  });
