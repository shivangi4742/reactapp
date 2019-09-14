import styled from 'styled-components';
import DS from '../../utils/design-system';

const SectionMain = styled.section`
    padding: 30px 15px 0 30px;
`;
export const Info = styled.div`
 font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.68;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.87);
  text-align:left;
  `;
export const Heading = styled.div`
  font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.87);
  text-align:left;
  `;
export const Align = styled.div`
    float: ${(props) => props.align || "left"};
    text-align:left;
   font-family: ${DS.FONT_FAMILY.REGULAR};
    font-size:  ${(props) => props.fontSize || "12px"}
    font-weight: ${(props) => props.fontWeight || "normal"}
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.color || "#212121"}

`;

export default SectionMain;