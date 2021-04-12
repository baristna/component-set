module.exports = {
  stories: ['./Welcome.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-controls',
    'storybook-addon-jsx/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-knobs'
  ]
};
