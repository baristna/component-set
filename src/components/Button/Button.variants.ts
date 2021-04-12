import { VariantArgs } from 'styled-system';
import tinycolor from 'tinycolor2';
import { IButtonVariantProps, oneOfColorType } from '../../types';

const variantGenerator = (color: oneOfColorType, p?: IButtonVariantProps) => {
  const hoverC = tinycolor(p?.theme.colors[color]);
  const hoverBg = p?.cut ? hoverC.setAlpha(0.1).toString() : hoverC.darken(5).toString();
  const activeC = tinycolor(p?.theme.colors[color]);
  const activeBg = p?.cut ? activeC.setAlpha(0.2).toString() : activeC.darken(10).toString();
  return (
    {
      background: p?.theme.colors[p?.cut ? 'transparent' : color],
      color: p?.theme.colors[p?.cut ? color : 'white'],
      border: `1px solid ${p?.theme.colors[p?.cut === 'ghost' ? 'transparent' : color]}`,
      '& svg': { fill: p?.theme.colors[p?.cut ? color : 'white'] },
      '&:not(:disabled)': {
        '&:hover': { background: hoverBg },
        '&:active': { background: activeBg },
      },
      '&:disabled': {
        background: p?.theme.colors[p?.cut ? 'transparent' : 'disabled'],
        border: p?.cut === 'invert' ? `1px solid ${p?.theme.colors.disabled}` : 'none',
        color: p?.theme.colors[p?.cut ? 'disabled' : 'white'],
      },
    }
  );
};

export type buttonVariantsType = 'primary' | 'secondary' | 'error' | 'success' | 'warning'
export const styleVariants = (p?: IButtonVariantProps):VariantArgs => (
  {
    prop: 'variant',
    variants: {
      primary: variantGenerator('primary', p),
      secondary: variantGenerator('secondary', p),
      error: variantGenerator('error', p),
      success: variantGenerator('success', p),
      warning: variantGenerator('warning', p),
      // warning: {},
      // info: {},
    },
  }
);

export type buttonRisesType = 'normal' | 'none' | 'tiny' | 'small' | 'big'
export const riseVariants = (p?: IButtonVariantProps):VariantArgs => (
  {
    prop: 'rise',
    variants: {
      normal: {
        height: p?.theme.sizes[5],
      },
      none: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      tiny: {
        height: p?.theme.sizes[3],
      },
      small: {
        height: p?.theme.sizes[4],
      },
      big: {
        height: p?.theme.sizes[6],
      },
    },
  }
);

export type buttonSpreadsType = 'normal' | 'none' | 'narrow' | 'wide' | 'full'
export const spreadVariants = (p?: IButtonVariantProps):VariantArgs => (
  {
    prop: 'spread',
    variants: {
      normal: {
        paddingLeft: p?.theme.space[2],
        paddingRight: p?.theme.space[2],
      },
      none: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      narrow: {
        paddingLeft: p?.theme.space[1],
        paddingRight: p?.theme.space[1],
      },
      wide: {
        paddingLeft: p?.theme.space[4],
        paddingRight: p?.theme.space[4],
      },
      full: {
        width: '100%',
      },
    },
  }
);
