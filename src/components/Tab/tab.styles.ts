import styled, { css } from 'styled-components';
import DS from '../../utils/design-system';
import Tab from '@material-ui/core/Tab';

export const Tabstyle = styled(Tab)`
    min-width: 100px!important;
   color : ${DS.PALETTE.BLACK};
   font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-transform: capitalize !important;
  
`;


