import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import DS from '../../../utils/design-system';

export const MenuBurgerStyled = styled.div`
   background: #236df1;
    width: 59px;
    height: 76px;
    margin-right: 17px;
    margin-left: -24px;
    padding-top: 18px; 
`;
export const AppBarStyled = styled(AppBar)`
    background:  ${DS.PALETTE.WHITE};
`;

export const IconButtonStyled = styled(IconButton)`
    padding: 0;
    height: 100%;
`;
export const Typographystyled = styled.div`
    width: 100%
    text-align :left;
`;

export const HeadingMenu = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;`
    ;