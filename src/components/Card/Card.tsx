
import React from 'react';
import { Cardstyle } from './card.styles';

const Cards = (props) => {
    const p = {
        height: props.height,
    }
    const headerhight = {
        height: '65px',
    }
    return (
        <div>
            {props.header ? (<Cardstyle style={headerhight}> {props.header} </Cardstyle>) : null}
            <Cardstyle style={{ p }}>  {props.children}  </Cardstyle>
            {props.footer ? (<Cardstyle >{props.footer}</Cardstyle>) : null}
        </div>
    );
}
export default Cards;
