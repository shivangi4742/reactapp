import styled from 'styled-components';
import DS from '../../../utils/design-system';

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
    color: ${(props) => props.color == 'Open' ? '#F44336' : props.color == 'Closed' ? '#236DF1' : props.color ? props.color : ' #000000 '}
`;