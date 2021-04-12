import { ReactNode, MouseEvent } from 'react';
import { IDivProps } from './div.types';
import { BaseProps, BaseClassNameProps, StyledThemeType } from './index';
import {
  buttonVariantsType,
  buttonRisesType,
  buttonSpreadsType,
} from '../components/Button';

export type oneOfButtonVariants = buttonVariantsType;
export type oneOfButtonRises = buttonRisesType;
export type oneOfButtonSpreads = buttonSpreadsType;

export interface IButtonVariants {
  /**
   * defines apperance
   */
  variant?: oneOfButtonVariants;
  /**
   * defines height
   */
  rise?: oneOfButtonRises;
  /**
   * defines width
   */
  spread?: oneOfButtonSpreads;
}

export interface IButtonBaseProps extends BaseClassNameProps, BaseProps, IDivProps {
  children?: ReactNode;
  circle?: boolean;
  disabled?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  cut?: 'invert' | 'ghost' | 'link';
}

export type IButtonProps = IButtonBaseProps & IButtonVariants

export interface IButtonStyles extends IButtonProps {
  vAlign?: boolean;
}

export interface IButtonVariantProps extends IButtonBaseProps {
  theme: StyledThemeType;
}
