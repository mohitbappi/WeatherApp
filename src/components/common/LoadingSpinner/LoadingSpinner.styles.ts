import { StyleSheet } from 'react-native';
import { spacing } from '../../../styles';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      padding: spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
