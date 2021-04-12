import React from 'react';
import { IButtonProps } from '../../../types';
import { Button } from '..';
import { Div } from '../../Div';
import { storybookBaseControls } from '../../../utils';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {},
    cut: {},
    rise: {},
    spread: {},
    ...storybookBaseControls,
  },
};

export const withControls = (args: IButtonProps) => (
  <Div bg='white' p={2}>
    <Button bg='white' {...args}>
      Button
    </Button>
  </Div>
);
