/**
 * Contains props that are restricted to leak into DOM.
 * uses `shouldForwardProp` from `styled-components` to
 * avoid props from styled-system like `line-height`,
 * `line-spacing` and many more.
 */

export const blacklistedForwardProps = [
  'letterSpacing',
  'fontSize',
  'color',
  'fontStretch',
  'fontWeight',
  'textTransform',
  'isDisabled',
  'helperFloat',
  'justifyContent',
  'alignItems',
  'gridGap',
  'gridTemplateColumns',
  'gridTemplateRows',
  'textAlign',
  'minHeight',
  'flexDirection',
  'maxWidth',
  'boxShadow',
  'borderRadius',
  'mt',
  'mb',
  'mx',
  'my',
  'm',
  'px',
  'py',
  'p',
  'pt',
  'pb',
  'top',
  'left',
  'right',
  'bottom',
  'position',
  'bg',
  'minWidth',
  'my',
  'textStyle',
  'lineHeight',
  'height',
  'width',
  'className',
  'isFocused',
  'isActive',
  'isDisabled',
  'helperFloat',
  'borderColor',
  'narrow',
  'hasIcon',
  'hasText',
  'alignContent',
  'flexBasis',
  'flexWrap',
  'alignSelf',
  'offset',
  'flex',
  'label',
  'cursor',
  'focusable',
  'variant',
  'noRipple',
  'opacity',
  'size',
  'content',
  'display',
  'overflow',
  'textDecoration',
];

export const shouldAvoidPropsFromDOM = <T>(
  prop: keyof T,
  defaultValidatorFn: (prop: keyof T) => boolean
): boolean => (
    defaultValidatorFn(prop) &&
      (typeof(prop) === 'string' && blacklistedForwardProps.indexOf(prop) === -1)
  );

export default blacklistedForwardProps;
