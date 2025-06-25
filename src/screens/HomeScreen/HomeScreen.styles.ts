import { Platform, StyleSheet } from 'react-native';
import { spacing, typography } from '../../styles';
import { Theme } from '../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: Platform.OS === 'ios' ? spacing.xl : 0,
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      padding: spacing.md,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.xl,
      paddingTop: spacing.md,
    },
    title: {
      fontSize: typography.sizes['3xl'],
      fontWeight: typography.weights.bold,
      color: theme.colors.text,
    },
    content: {
      flex: 1,
      gap: spacing.lg,
    },
    loadingContainer: {
      alignItems: 'center',
      padding: spacing.xl,
    },
    loadingText: {
      fontSize: typography.sizes.md,
      color: theme.colors.textSecondary,
      marginTop: spacing.sm,
    },
    weatherContainer: {
      marginTop: spacing.md,
    },
  });
