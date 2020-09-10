import React from 'react';

const Title = (props) => {
    // console.log('Title', props.fetchData);
    if (props.fetchData) {
        return <div>{props.fetchData.title}</div>;
    }
};

export default Title;
