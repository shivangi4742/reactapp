import React from 'react';

type storiesType = {
    heading?: string,
    shortdesc?: string,
    desc?: string
}

const Storiesheader = ({ heading, shortdesc, desc }: storiesType) => {
    return (
        <React.Fragment>
            <h2>{heading}</h2>
            <p>{shortdesc}</p>
            <h3>When to use</h3>
            <p>{desc}</p>
        </React.Fragment>
    );
}
export default Storiesheader;