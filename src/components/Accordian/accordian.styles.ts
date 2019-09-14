import styled, { css } from 'styled-components';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import DS from '../../utils/design-system';

export const ExpansionPanelheaderstyle = styled(ExpansionPanelSummary)`

    ${props => props.type == 'primary' && css`
        background: ${DS.PALETTE.BLACK}!important;
        border: 1px solid transparent;
        color: ${DS.PALETTE.WHITE}!important;
   `}
`;

export const Left = styled.span`
  float : left;
`;
export const Right = styled.span`
  float : right
`;
