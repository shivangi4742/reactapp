import Avatar from '@material-ui/core/Avatar';
import DS from '../../../utils/design-system';
import css from 'styled-components';
export const Avatars = css(Avatar)`
   width: 40px;
    height: 40px;
    margin-right:15px;
     
`;

export const Left = css.div`
     font-family: ${DS.FONT_FAMILY.REGULAR};
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.54);
    float :left;
`;
export const Right = css.div`
  font-family: ${DS.FONT_FAMILY.REGULAR};
    font-size: 14px;
    font-weight:  normal
    font-style: normal;
    font-stretch: normal;
    line-height: 1.8
    letter-spacing: normal;
    text-align: right;
    color: #757575;
    padding-top: -1px;
`;
export const Boldhead = css.span`
  color: #212121;
  font-family: ${DS.FONT_FAMILY.REGULAR};
  font-size: 13px!important;
  font-weight: 600!important;
  line-height: 17px;
  text-align: left;
`;





