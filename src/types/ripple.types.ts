import { MouseEvent } from 'react';
import { IDivProps } from '.';
import { rippleEffectVariants } from '../hooks/useRippleEffect';

export type rippleVariantType = keyof typeof rippleEffectVariants.variants

export interface IRippleProps extends IDivProps {
  rippleVariant?: rippleVariantType;
  contrast?: boolean;
  disable?: boolean;
}

export interface IRipple extends IDivProps {
  rippleVariant: rippleVariantType;
  x?: number;
  y?: number;
  contrast?: boolean;
}

export interface IRippleObject {
  id: string;
  RippleElement: () => JSX.Element;
}

export type IRipplesState = Array<IRippleObject>

export type IRippleHook = [JSX.Element, (e: MouseEvent<HTMLElement>) => void]
