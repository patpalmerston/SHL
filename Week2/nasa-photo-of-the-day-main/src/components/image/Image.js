import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.img`
    width: 50%;
    height: 50%;
`;

const Image = (props) => {
    console.log('image', props);
    if (props.fetchData) {
        return (
            // <ImageDiv>
            <ImageDiv src={props.fetchData.url} alt='nasa' />
            // </ImageDiv>
        );
    }
};

export default Image;
