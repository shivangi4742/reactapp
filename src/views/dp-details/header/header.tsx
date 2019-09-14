import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ver from '../../../assets/more-vert.svg'
// import Button from '../../../components/Button';
import { HeaderProps } from '../typings';
import MenuBurger from './menu-burger';
import { AppBarStyled, IconButtonStyled, Typographystyled, HeadingMenu } from './header.styles';
import Label from '../../../components/label/label';

const imgstyl = {
    verticalAlign: 'middle',
    paddingLeft: ' 24px'
};
function Header({ dp }: HeaderProps) {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBarStyled   >
                <Toolbar>
                    <div aria-label="Menu" >
                        <MenuBurger />
                    </div>
                    <Typographystyled >
                        <HeadingMenu> {dp.name} | DP - {dp.id} </HeadingMenu>
                        <ul>
                            {dp.statusTags.map((status, idx) => {
                                return (
                                    <Label status={status} key={idx} />
                                );
                            })
                            }
                        </ul>
                    </Typographystyled>
                    <div style={{ textAlign: 'right', width: ' 80%' }}>
                        {/* < Button remarks label="Add Remarks" /> */}
                        <img src={ver} alt="Rightmenu" style={imgstyl} />
                    </div>
                </Toolbar>
            </AppBarStyled>
        </div>
    );

}


export default Header;