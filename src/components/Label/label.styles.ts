
import styled from 'styled-components';
import DS from  '../../utils/design-system';
import { PropTypes } from './label.typings';

export const LabelWrapper = styled.span`
    background-color: ${({ status }: PropTypes) => status === "inactive" ? DS.PALETTE.LIGHT_PINK : status === "active" ? DS.PALETTE.GREEN_LIGHT : DS.PALETTE.BG_LIGHT_BLUE}
    border-radius: 12.5px;
    padding: 6px;
    margin-left: 5px;
    float: left;
` ;
export const Labelfont = styled.span`
   color: #212121;
    font-family: 'robotoregular';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    text-transform : capitalize;
`;

