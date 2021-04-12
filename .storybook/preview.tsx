import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from "styled-components";
import BaseGlobalStyles from '../src/styles/base';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import theme from "../src/theme";
import Fonts from "../src/styles/fonts";
import { viewports } from './utils';

addDecorator(withA11y as any)
addDecorator(withKnobs);
addDecorator(jsxDecorator)
addDecorator(storyFn => {
  return (
      <ThemeProvider theme={theme}>
        <Fonts />
        <BaseGlobalStyles />
        {storyFn()}
      </ThemeProvider>
  );
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  controls: {
    expanded: true
  },
  viewport: {
    viewports: {...viewports, ...INITIAL_VIEWPORTS},
  },
  options: { // Order story categories alphabetically
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});
