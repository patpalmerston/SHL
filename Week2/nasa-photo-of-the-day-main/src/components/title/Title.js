import React from 'react';

const Title = (props) => {
    // console.log('Title', props.fetchData);
    if (props.fetchData) {
        return (
            <div>
                <h1>{props.fetchData.title}</h1>
                <h4>{props.fetchData.date}</h4>
            </div>
        );
    }
};

export default Title;
