import { StyleSheet } from 'react-native';
import { spacing, borderRadius } from '../../../styles';
import { Theme } from '../../../config/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    toggle: {
      width: 50,
      height: 28,
      borderRadius: borderRadius.xl,
      backgroundColor: theme.colors.border,
      justifyContent: 'center',
      padding: 2,
    },
    toggleActive: {
      backgroundColor: theme.colors.primary,
    },
    thumb: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.surface,
      alignSelf: 'flex-start',
    },
    thumbActive: {
      alignSelf: 'flex-end',
    },
    label: {
      fontSize: 14,
      color: theme.colors.text,
      fontWeight: '500',
    },
  });
