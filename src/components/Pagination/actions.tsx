import React, { Fragment } from 'react';
import Button from '../button/button';
import { ActionPropTypes } from './pagination.typings';


const Actions = ({ handlePrev, handleNext, start, end, total }: ActionPropTypes)  => { 
    return (
        <Fragment>
            <Button
                className="mr10"
                size="sm"
                onClick={() => handlePrev()}
                disabled={start === 1}
            >
                <i className="material-icons">
                    chevron_left
                </i>
            </Button>
            <Button
                size="sm"
                onClick={() => handleNext()}
                disabled={end === total}
            >
                <i className="material-icons">
                    chevron_right
                </i>
            </Button>
        </Fragment>
    )
}
       
export default Actions;