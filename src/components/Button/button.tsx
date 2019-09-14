import React from 'react';
import { ButtonProps } from './button.typings';
import StyledBtn from './button.styles';

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <StyledBtn {...props}>{children} </StyledBtn>
    )
}

export default Button;