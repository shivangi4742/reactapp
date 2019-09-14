
import React from 'react';
import { LabelWrapper, Labelfont } from './label.styles';
import { PropTypes } from './label.typings';

const Label = ({ status }: PropTypes) => {
    return (
        <LabelWrapper status={status}>
            <Labelfont>{status}</Labelfont>
        </LabelWrapper>
    );

}

export default Label;
