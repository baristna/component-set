import { ReactNode } from 'react';
import { BaseClassNameProps, BaseProps, IDivProps } from '.';

export interface IIconProps extends BaseClassNameProps, BaseProps, IDivProps {
  children?: ReactNode;
}
