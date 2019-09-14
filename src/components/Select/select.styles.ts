import styled, { css } from 'styled-components';
import Select from '@material-ui/core/Select';
import DS from '../../utils/design-system';

export const SelectStyle = styled(Select)`
    box-shadow:0 2px 10px 0 rgba(102, 143, 211, 0.33);
    background-color: ${DS.PALETTE.WHITE};
    text-transform: capitalize;
    padding-left: 15px;
      ${props => props.size == 'sm' && css`
        width: ${DS.SELECT.SMALL.width}px;
        height: ${DS.SELECT.SMALL.height}px;
   `}
   ${props => props.size == 'lg' && css`
        width: ${DS.SELECT.LARGE.width}px;
        height: ${DS.SELECT.LARGE.height}px;
   `}
`;


