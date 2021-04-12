import { ChangeEvent } from 'react';

export type IControlOnChange<T> = (state: T) => void

export interface IControlType<Type, Variant> {
  id?: string;
  value?: Type;
  type: Variant;
  checked: Type;
  onChange: IControlOnChange<Type>;
}

export type IControlProps =
  IControlType<string | undefined, 'radio'> |
  IControlType<boolean, 'checkbox' | 'switch'>;

export interface IControlInput {
  isChecked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
