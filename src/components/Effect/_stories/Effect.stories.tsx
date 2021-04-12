import React, { useState } from 'react';
import { IEffectProps } from '../../../types';
import { Effect } from '..';
import { Div } from '../..';

export default {
  title: 'Foundation/Effect',
  component: Effect,
  argTypes: {
    in: {
      control: { type: 'none' },
    },
    children: {
      control: { type: 'none' },
    },
  },
};

export const withControls = (args: IEffectProps) => {
  const [effectIn, setEffectIn] = useState(true);

  return (
    <Div
      display='flex'
      width={'100px'}
      alignItems='center'
      justifyContent='center'
      bg='bg-secondary'
      height='60px'
      mb={2}
      onClick={() => { setEffectIn(!effectIn); }}
      cursor='pointer'
    >
      <Effect
        in={effectIn}
        timeout={args.timeout}
        type={args.type}
        display={args.display}
      >
        <Div p={2} bg='info'>Div</Div>
      </Effect>
    </Div>
  );
};
