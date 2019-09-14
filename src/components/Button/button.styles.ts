import Styled, { css } from 'styled-components';
import DS from '../../utils/design-system';

const Button = Styled.button`
    border: none;
    background: transparent;
    text-align: center;
    border-radius: ${DS.BORDER_RADIUS};
    border: 1px solid ${DS.PALETTE.gray}
    color: ${DS.PALETTE.black2};
    width: auto;
    height: ${DS.BUTTON.DEFAULT.height}px;
    line-height: ${DS.BUTTON.DEFAULT.height}px;
    font-size: ${DS.BUTTON.DEFAULT.fontSize}px;
    text-transform: capitalize;
    padding: 0 15px;
    cursor: pointer;
   ${props => props.type === 'primary' && css`
        background: ${DS.PALETTE.BLUE};
        border: 1px solid transparent;
        color: ${DS.PALETTE.WHITE};
   `}
    ${props => props.type === 'dashed' && css`
          color: rgba(0,0,0,0.65);
        background-color: #fff;
        border-color: #d9d9d9;
        border-style: dashed;
          &:hover {
              color : #1890ff;;
            border : dashed #1890ff;;
    }
   `}
    ${props => props.type === 'danger' && css`
      color: #f5222d;
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        &:hover {
             background-color:#f5222d;
             color : #fff;
            box-shadow: rgba(0,0,0,.2) 0 2px 6px 0;
    }
   `}
   ${props => props.size === 'sm' && css`
        width: auto;
        height: ${DS.BUTTON.SMALL.height}px;
        line-height: ${DS.BUTTON.SMALL.height}px;
        font-size: ${DS.BUTTON.SMALL.fontSize}px;
   `}
   ${props => props.size === 'lg' && css`
       width: auto;
        height: ${DS.BUTTON.LARGE.height}px;
        line-height: ${DS.BUTTON.LARGE.height}px;
        font-size: ${DS.BUTTON.LARGE.fontSize}px;
        
   `}
    ${props => props.type === 'share' && css`
        width: 96px;
        height: 40px;
        color: ${DS.PALETTE.WHITE}
        background-color: #1194f6;
       font-family: ${DS.FONT_FAMILY.REGULAR};
        text-transform: uppercase;
        font-size: 14px;
       font-weight: 500;
   `}
    ${props => props.type === 'notification' && css`
        width: 25px;
        height: 24px;
        color: #212121;
       background-color: ${DS.PALETTE.GRAY};
        line-height: 23px;
        font-size: 14px;
      font-family:${DS.FONT_FAMILY.REGULAR};
   `}
    ${props => props.type === 'remarks' && css`
        width: 110px;
        height: 36px;
        color: rgba(0, 0, 0, 0.87);
        background-color: ${DS.PALETTE.GRAY};
        font-family: ${DS.FONT_FAMILY.REGULAR};
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        text-align: center; 
   `}
   ${props => props.disable && css`
       border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
   `}
`
export default Button;