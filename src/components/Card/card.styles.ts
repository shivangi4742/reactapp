import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import DS from '../../utils/design-system';

export const Cardstyle = styled(Card)`
 padding: 20px;
border-radius:  0px!important;
box-shadow: 0 2px 10px 0 rgba(102, 143, 211, 0.33);
`;
export const Align = styled.div`
  float : ${props => props.align || 'left'};
 font-family: ${DS.FONT_FAMILY.REGULAR};
   font-size:  ${(props) => props.fontSize || "12px"}
    font-weight: ${(props) => props.fontWeight || "normal"}
  font-style: normal;
  font-stretch: normal;
  line-height: 1.53;
  letter-spacing: normal;
  margin-left:5px;
  color: ${props => props.color || 'rgba(0, 0, 0, 0.87)'}`;

export const Footer = styled.div`
    cursor: pointer;
   font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #236df1;
   text-transform: capitalize!important;
`;
export const StyledBtn = styled.div`
color:red;
`;