import React from 'react';

const Title = ({subHeading,heading}) => {
    return (
        <div>
            <p>---{subHeading}---</p>
            <h1>{heading}</h1>
        </div>
    );
};

export default Title;