import React from 'react';
import { ReactComponent as MenuIcon } from '../../../assets/home.svg';
import { MenuBurgerStyled } from './header.styles';

const MenuBurger = ( { } ) => {
    return (
        <MenuBurgerStyled aria-label="Menu">
            <MenuIcon className='menu-icon' />
        </MenuBurgerStyled>
    )
}

export default MenuBurger;
 