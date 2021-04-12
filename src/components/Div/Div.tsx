import styled, { css } from 'styled-components';
import {
  space,
  color,
  border,
  layout,
  position,
  display,
  typography,
  shadow,
  compose,
  flexbox,
} from 'styled-system';
import { IDivProps } from '../../types';
import { shouldAvoidPropsFromDOM } from '../../utils';

const Div = styled('div').withConfig<IDivProps>({
  shouldForwardProp: shouldAvoidPropsFromDOM,
})`
  ${
  compose(
    layout,
    space,
    color,
    border,
    flexbox,
    shadow,
    position,
    typography,
    display
  )
}
  box-sizing: border-box;
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `}
`;

Div.displayName = 'Div';

export default Div;
