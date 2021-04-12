import { createGlobalStyle } from 'styled-components';
import { font } from './fonts';
import { fontSizes } from '../theme';

const BaseGlobalStyles = createGlobalStyle`
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        padding: 0;
        font-family: ${font};
        font-size: ${fontSizes[2]}px;
    }
`;

export default BaseGlobalStyles;
