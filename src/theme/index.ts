import { DefaultTheme } from 'styled-components';
import {
  sizes,
  breakpoints,
  borders,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
} from './variables';

export const theme = {
  sizes,
  breakpoints,
  borders,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
};

const defaultTheme:DefaultTheme = theme;

export * from './variables';
export default defaultTheme;
