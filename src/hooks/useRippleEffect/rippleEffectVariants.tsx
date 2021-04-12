import { colors } from '../../theme';

const rippleEffectVariants = {
  prop: 'rippleVariant',
  variants: {
    default: {
      background: `rgba(0,0,0,0.1);`,
    },
    defaultContrast: {
      background: `rgba(0,0,0,0.1);`,
    },
    contained: {
      background: colors['blue-70'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    containedContrast: {
      background: colors['blue-70'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    outlined: {
      background: colors['blue-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    outlinedContrast: {
      background: colors['blue-80'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    outlined2: {
      background: colors['gray-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    outlined2Contrast: {
      background: colors['gray-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    text: {
      background: colors['blue-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    textContrast: {
      background: colors['blue-80'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    text2: {
      background: colors['gray-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    text2Contrast: {
      background: colors['gray-20'],
      border: `1px solid rgba(0,0,0,0.15)`,
    },
    error: {
      background: colors['error-focus'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    errorContrast: {
      background: colors['error-focus'],
      border: `1px solid rgba(255,255,255,0.15)`,
    },
    inverse: {
      background: colors['blue-80'],
    },
    tabButton: {
      background: colors.white,
      border: `1px solid rgba(255,255,255,0.15)`,
    },
  },
};

export default rippleEffectVariants;
