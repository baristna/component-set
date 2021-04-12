import { ChangeEvent, ReactNode } from 'react';
import { IDivProps } from './div.types';

export interface IInputProps extends IDivProps {
  name?: string;
  value?: string;
  multiline?: string;
  active?: boolean;
  focused?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  onIconClick?: (e: { name?: string, value?: string }) => void;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputStates extends IInputProps {
  isActive?: boolean;
  isFocused?: boolean;
}
