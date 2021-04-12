import React from 'react';
import * as Typo from './Typography';
import { fontSizes } from '../../theme';
import { Div } from '../Div';

export default {
  title: 'Foundation/Typography',
};

export const Examples = () => (
  <Div display='flex' flexDirection='column' width='100%'>
    {Object.entries(Typo).map(([name, Component]) => (
      <Div
        key={name}
        display='flex'
        borderBottom='primary'
        height='50px'
        alignItems='center'
        p={1}
      >
        <Div flexGrow={1}>{`<${name}>${name}</${name}>`}</Div>
        <Div width='100px'>
          {/* eslint-disable-next-line */}
          {fontSizes[(Component._foldedDefaultProps as any)?.fontSize] || '14'}px
        </Div>
        <Div width='100px'>
          {/* eslint-disable-next-line */}
          {(Component._foldedDefaultProps as any)?.fontWeight || 'regular'}
        </Div>
        <Div width='300px'>
          <Component>{name}</Component>
        </Div>
      </Div>
    ))}
  </Div>
);
