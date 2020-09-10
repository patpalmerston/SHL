import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${(props) => (props.type === 'primary' ? `background: #2196f2` : null)}
    ${(props) =>
        props.type === 'success' ? `background: #4caf50` : null}
    ${(props) =>
        props.type === 'danger' ? `background: #f44336` : null}
    ${(props) =>
        props.type === 'warning' ? `background: #fdd835` : null}
`;

const Button = () => {
    return (
        <div>
            <ButtonDiv type='primary'>Primary</ButtonDiv>
            <ButtonDiv type='success'>Success</ButtonDiv>
            <ButtonDiv type='danger'>Danger</ButtonDiv>
            <ButtonDiv type='warning'>Warning</ButtonDiv>
        </div>
    );
};

export default Button;
