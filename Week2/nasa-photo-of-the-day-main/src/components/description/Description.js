import React from 'react';

const Description = (props) => {
    if (props.fetchData) {
        return (
            <div>
                <p>{props.fetchData.explanation}</p>
            </div>
        );
    }
};

export default Description;
