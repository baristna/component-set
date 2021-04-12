import { TypographyProps, SpaceProps, LayoutProps, BorderProps, ColorProps } from 'styled-system';
import { BaseProps, oneOfColorType, oneOfStyledComponentPolymorphicAs } from '.';

export interface ITypographyTextProps extends Omit<TypographyProps, 'color'>, SpaceProps,
  LayoutProps, BorderProps, ColorProps, BaseProps {
  /**
   * Transform enclosed text to appropriate values based on passed values.
   * Values are added from [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
   */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' |
    'full-size-kana' | 'inherit' | 'initial' | 'unset';
  as?: oneOfStyledComponentPolymorphicAs;
  /**
   * The white-space CSS property sets how white space inside an element is handled.
   * For more refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
   */
  whiteSpace?: 'nowrap' | 'normal' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  /**
   * The text-overflow CSS property sets how hidden overflow content is signaled to users.
   * It can be clipped, display an ellipsis ('…'), or display a custom string.
   * For more refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
   */
  textOverflow?: 'clip' | 'ellipsis';
  // Added this to avoid conflict with
  // prop in `react` and `styled-system` types
  color?: oneOfColorType;
  /**
   * apply text-decoration property to text inside.
   * For more refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
   */
  textDecoration?: string;
}
