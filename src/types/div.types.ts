import {
  ShadowProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
  PositionProps,
  FlexboxProps,
} from 'styled-system';
import { BaseProps, oneOfColorType } from '.';

export interface IDivProps extends
  ShadowProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  BorderProps,
  PositionProps,
  FlexboxProps,
  BaseProps
{
  // Added this to avoid conflict with
  // prop in `react` and `styled-system` types
  color?: oneOfColorType;
}
