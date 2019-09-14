
import React from 'react';

const Modals = (props) => {
    return (
        <div className="modal-wide modalTM"  >
            <div className="model-headerTM">{props.header}</div>
            <div className="modal-body">
                {props.children}
            </div>
        </div>
    );
}

export default Modals;

