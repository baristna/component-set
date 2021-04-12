import React from 'react';
import { IGridProps } from '../../../types';
import { Grid } from '..';
import { Div } from '../../Div';
import { storybookBaseControls } from '../../../utils';
import { space } from '../../../theme';

export default {
  title: 'Foundation/Grid',
  component: Grid,
  argTypes: {
    spacing: { defaultValue: 16 },
    xs: { defaultValue: 12 },
    sm: { defaultValue: 6 },
    md: { defaultValue: 4 },
    lg: { defaultValue: 3 },
    container: { control: { type: 'none' } },
    ...storybookBaseControls,
  },
};

export const withControls = ({
  xs, sm, md, lg,
  container,
  ...args
}: IGridProps) => (
  <Div bg='primary' data-id={container}>
    <Grid container spacing={space[1]} bg='white' {...args}>
      <Grid {...({ xs, sm, md, lg })} bg='quaternary'>Item1</Grid>
      <Grid {...({ xs, sm, md, lg })} bg='quaternary'>Item1</Grid>
      <Grid {...({ xs, sm, md, lg })} bg='quaternary'>Item1</Grid>
      <Grid {...({ xs, sm, md, lg })} bg='quaternary'>Item1</Grid>
    </Grid>
  </Div>
);
