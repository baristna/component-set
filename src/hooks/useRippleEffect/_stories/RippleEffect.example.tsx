import React from 'react';
import { Div, Body1 } from '../../../components';
import { useRippleEffect } from '..';

export const RippleEffectExample = ():JSX.Element => {
  const [ripples, mouseDownHandler] = useRippleEffect();

  return (
    <Div
      display='flex'
      width='100px'
      height='100px'
      bg='accent-default'
      alignItems='center'
      justifyContent='center'
      onMouseDown={mouseDownHandler}
      style={{ position: 'relative' }}
    >
      <Div bg={'bg-secondary'} style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <Body1>Click</Body1>
      </Div>
      {ripples}
    </Div>
  );
};
