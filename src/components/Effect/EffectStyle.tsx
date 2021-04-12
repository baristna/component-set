import styled from 'styled-components';
import { IEffectStyle } from '../../types';

const EffectStyle = styled.div<IEffectStyle>`
  display: none;
  ${p => p.hideStyles}

  &.enter {
    display: ${p => p.display};
    ${p => p.hideStyles}
    transition: all ${p => p.timeout.enter}ms;
  }

  &.enter-active { 
    ${p => p.showStyles}
  }

  &.enter-done {
    ${p => p.showStyles}
    display: ${p => p.display};
  }

  &.exit {
    display: ${p => p.display};
    transition: all ${p => p.timeout.exit}ms;
  }

  &.exit-active { 
    ${p => p.hideStyles}
  }

  &.exit-done {
    display: none;
    ${p => p.hideStyles}
  }
`;

export { EffectStyle };
