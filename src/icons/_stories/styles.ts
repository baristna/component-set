import styled from 'styled-components';
import { Caption } from '../../components';

export const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-right: -30px;
`;
export const IconCard = styled.div`
  margin: 10px 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  width: calc((100% / 3) - 60px);
`;

export const IconName = styled(Caption)`
  flex-grow: 1;
`;
