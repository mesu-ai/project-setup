import { colors } from './colors';
import { spacing } from './spacing';

export const variants = {
  button: {
    primary: {
      background: colors.primary.main,
      color: colors.background.primary,
      '&:hover': {
        background: colors.primary.dark,
      },
    },
    secondary: {
      background: colors.secondary.main,
      color: colors.background.primary,
      '&:hover': {
        background: colors.secondary.dark,
      },
    },
    outlined: {
      background: 'transparent',
      border: `1px solid ${colors.primary.main}`,
      color: colors.primary.main,
    },
  },
  card: {
    default: {
      background: colors.background.primary,
      borderRadius: '8px',
      padding: spacing.md,
    },
    elevated: {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
  },
};
