import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // colorPrimary: 'white',
  colorSecondary: '#2574db',

  // // UI
  appBg: '#FFFFFF',
  appContentBg: '#EEEEEE',
  // appBorderColor: 'grey',
  appBorderRadius: 0,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  barTextColor: '#CCCCCC',
  barSelectedColor: 'white',
  barBg: '#2574db',

  // // Form colors
  inputBg: 'white',
  // inputBorder: 'silver',
  inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'ComponentSet',
});
