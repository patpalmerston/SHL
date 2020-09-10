import React from 'react';

const Image = (props) => {
    if (props.fetchData) {
        return (
            <div>
                <img src={props.fetchData.url} alt='nasa' />
            </div>
        );
    }
};

export default Image;
