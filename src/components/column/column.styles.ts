import styled from 'styled-components';
import DS from '../../utils/design-system';

export const Numberheading = styled.div`
font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 60px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: right;
  color: ${props => props.color || ' rgba(0, 0, 0, 0.87)'};
  text-align:center;
`;
export const Label = styled.div`
 font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color:  ${props => props.color || ' rgba(0, 0, 0, 0.87)'};
`;