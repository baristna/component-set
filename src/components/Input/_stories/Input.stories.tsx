import React, { useState } from 'react';
import { IInputProps } from '../../../types';
import { Input } from '..';
import { Div } from '../../Div';
import { storybookBaseControls } from '../../../utils';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { defaultValue: 'Label' },
    active: { defaultValue: false },
    ...storybookBaseControls,
  },
};

export const withControls = (args: IInputProps) => {
  const [val, setVal] = useState('');
  return (
    <Div>
      <Input
        value={val}
        onChange={(e) => {
          setVal(e.currentTarget.value);
        }}
        {...args}
      />
    </Div>
  );
};
