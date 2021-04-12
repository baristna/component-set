import { CSSProperties } from 'react';
import { theme } from '../theme';
import * as easings from '../utils/easingFunctions';

// styled-components oneOfTypes starts here
export type StyledThemeType = typeof theme
export type oneOfColorType = (keyof typeof theme.colors) | 'inherit';
export type oneOfSpaceType = typeof theme.space
export type oneOfFontSizeType = keyof typeof theme.fontSizes
export type oneOfFontWeightType = keyof typeof theme.fontWeights
export type oneOfSizeType = 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48;
export type oneOfStyledComponentPolymorphicAs = 'h1' | 'h3' | 'h6' | 'legend' |
  'section' | 'p' | 'label' | 'a' | 'span' | 'button' | 'h5' | 'h2' | 'h4';
export type oneOfCursorType = 'unset'
| 'initial' |'pointer' | 'auto' | 'default' |
  'none' | 'all-scroll' | 'context-menu' | 'help' |
  'wait' | 'progress' | 'crosshair' | 'cell' | 'text' |
  'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' |
  'not-allowed' | 'zoom-in' | 'zoom-out' | 'grab' |
  'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' |
  'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' |
  'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' |
  'nwse-resize' | 'col-resize' | 'row-resize' | 'inherit';
// styled-components oneOfTypes ends here

// Custom oneOfTypes starts here
export type oneOfEasingType = keyof typeof easings
// Custom oneOfTypes ends here

export interface BaseClassNameProps {
  className?: string;
}
export interface BaseProps extends BaseClassNameProps {
  style?: CSSProperties;
  cursor?: oneOfCursorType;
  pointerEvents?: 'none' | 'all' | 'auto';
}

export * from './button.types';
export * from './control.types';
export * from './div.types';
export * from './effect.types';
export * from './grid.types';
export * from './icon.types';
export * from './input.types';
export * from './ripple.types';
export * from './svg.types';
export * from './typography.types';

// hooks and utils types starts here
export type IeasingFunction = (
	elapsed: number,
	initialValue: number,
	amountOfChange: number,
	duration: number,
	s?: number
) => number
// hooks and utils types ends here
