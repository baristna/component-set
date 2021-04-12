import React from 'react';
import { IDivProps } from '../../../types';
import { Div } from '..';
import { storybookBaseControls } from '../../../utils';

export default {
  title: 'Foundation/Div',
  component: Div,
  argTypes: {
    ...storybookBaseControls,
  },
};

export const withControls = (args: IDivProps) => (
  <Div {...args}>
    Div
  </Div>
);
