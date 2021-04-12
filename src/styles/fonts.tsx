import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../../assets/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../../assets/OpenSans-SemiBold.ttf';

export const font = `Open Sans`;

const Fonts = createGlobalStyle`
  @font-face {
    font-family: ${font};
    src: url(${OpenSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: ${font};
    src: url(${OpenSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  body {
    margin: 0;
  }
`;

export default Fonts;
