import { ReactNode } from 'react';
import { BaseClassNameProps } from '.';
import { effectValues } from '../components';

export interface IEffectType {
  hideStyles: string;
  showStyles: string;
  styles?: string;
}

export interface IEffectValues {
  [key: string]: IEffectType;
}

export const effectValueObject = effectValues();

export type IEffectTypes = keyof typeof effectValueObject

export type IEffectDisplayTypes = 'block' | 'inline-block' | 'flex' | 'inline-flex'

export interface IEffectTimeout {
  enter?: number;
  exit?: number;
}

export interface IEffectStyle extends BaseClassNameProps {
  timeout: IEffectTimeout;
  default?: boolean;
  display: IEffectDisplayTypes;
  showStyles: string;
  hideStyles: string;
}

export interface IEffectOptions {
  targetWidth?: string;
  targetHeight?: string;
}

export interface IEffectProps extends BaseClassNameProps {
  /**
   * Type of the animation
   */
  type: IEffectTypes;
  /**
   * Options to pass extra parameters to shape effects more detailed
   */
  options?: IEffectOptions;
  /**
   * Content that wanted to be animated
   */
  children?: ReactNode;
  /**
   * State variable that control if content shown or hidden
   */
  in: boolean;
  /**
   * Timeout property to customise speed of animation
   */
  timeout: number | IEffectTimeout;
  /**
   * Animation will change the `display` css property to 'none' when it's hidden
   * and restore it back to this when it's shown.
   */
  display: IEffectDisplayTypes;
  /**
   * Will trigger when show animation started
   */
  onEnter?: () => void;
  /**
   * Will trigger when show animation is running
   */
  onEntering?: () => void;
  /**
   * Will trigger when show animation done
   */
  onEntered?: () => void;
  /**
   * Will trigger when hide animation started
   */
  onExit?: () => void;
  /**
   * Will trigger when hide animation is running
   */
  onExiting?: () => void;
  /**
   * Will trigger when hide animation done
   */
  onExited?: () => void;
}
