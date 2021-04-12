import React from 'react';
import styled from 'styled-components';
import { Div } from '../components';
import { ISVGType, IIconProps } from '../types';

const SVG = styled(Div).attrs(() => ({ as: 'svg' }))<ISVGType>`
  fill: ${(props) => props.theme.colors[props.color || 'text']};

  * { fill: ${p => p.color}; }
`;

const Icon = ({
  size,
  children,
  ...props
}: IIconProps) => (
  <SVG
    width={size}
    height={size}
    viewBox='0 0 24 24'
    {...props}
  >
    {children}
  </SVG>
);

Icon.defaultProps = {
  size: '24px',
};

const createIcon = (path: JSX.Element):React.FC<IIconProps> => (p:IIconProps) => (
  <Icon {...p}>{path}</Icon>
);

export default createIcon;
