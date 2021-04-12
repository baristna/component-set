import { ReactNode } from 'react';
import { IDivProps } from './div.types';

export type IGridColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface IGridBreakPoints {
  /**
   * defines column size under the smallest breakpoint
   */
  xs?: IGridColumnSize;
  /**
   * defines column size over the smallest breakpoint
   */
  sm?: IGridColumnSize;
  /**
   * defines column size over the medium breakpoint
   */
  md?: IGridColumnSize;
  /**
   * defines column size over the large breakpoint
   */
  lg?: IGridColumnSize;
}

export interface IGridProps extends IDivProps, IGridBreakPoints {
  children?: ReactNode;
  /**
   * define if the component is a container or item
   */
  container?: boolean;
  /**
   * sets gutter between items
   */
  spacing?: number;
}
