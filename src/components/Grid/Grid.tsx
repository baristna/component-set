import styled from 'styled-components';
import { Div } from '../Div';
import { IGridProps } from '../../types';

const bps = [
  { key: 'sm', n: 0 },
  { key: 'md', n: 1 },
  { key: 'lg', n: 2 },
];

const Grid = styled(Div)<IGridProps>(
  (p => `
    ${p.container ? `
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: ${p.spacing}px;
    ` : `
      grid-column: span ${p.xs};

      ${(
      bps.map(bp => p[bp.key] && `
          @media only screen and (min-width: ${p.theme.breakpoints[bp.n]}) {
            grid-column: span ${p[bp.key]};
          }
        `).join('')
    )}
    `}
  `)
);

export default Grid;
