// Packages
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant as applyVariant } from 'styled-system';
// Components
import { Div } from '../Div';
// Parts
import {
  styleVariants,
  riseVariants,
  spreadVariants,
} from './Button.variants';
// Types
import {
  IButtonProps,
  IButtonStyles,
  oneOfButtonVariants,
  oneOfButtonRises,
  oneOfButtonSpreads,
} from '../../types';

const ButtonStyle = styled(Div).attrs(() => ({ as: 'button' }))<IButtonStyles>(
  (p => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    verticalAlign: p.vAlign ? 'bottom' : 'unset',
    '& svg': {
      display: 'block',
    },
  })),
  p => applyVariant(styleVariants(p)),
  p => applyVariant(riseVariants(p)),
  p => applyVariant(spreadVariants(p)),
);

const Button = forwardRef<HTMLDivElement, IButtonProps>(({
  children,
  circle,
  variant,
  rise,
  spread,
  before,
  after,
  borderRadius,
  ...props
}, ref) => {
  const variants = {
    variant: 'primary',
    rise: 'normal',
    spread: 'normal',
  };

  const isIconButton = (before || after) && !children;

  if (isIconButton) {
    variants.rise = 'none';
    variants.spread = 'none';
  }

  if (variant) { variants.variant = variant; }
  if (rise) { variants.rise = rise; }
  if (spread) { variants.spread = spread; }

  return (
    <ButtonStyle
      ref={ref}
      variant={variants.variant as oneOfButtonVariants}
      rise={variants.rise as oneOfButtonRises}
      spread={variants.spread as oneOfButtonSpreads}
      vAlign={Boolean(before || after)}
      borderRadius={circle ? '50%' : (borderRadius || 2)}
      p={0}
      {...props}
    >
      {before && <Div mr={children ? 1 : 0}>{before}</Div>}
      {children}
      {after && <Div ml={children ? 1 : 0}>{after}</Div>}
    </ButtonStyle>
  );
});

export default Button;
