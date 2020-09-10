import React, { useState } from 'react';
import styled from 'styled-components';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

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

const NormalButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const TomatoButton = styled(NormalButton)`
    color: tomato;
    border-color: tomato;
`;

const Button = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <ButtonDiv id='Popover1' type='primary'>
                Primary
            </ButtonDiv>
            <Popover
                placement='bottom'
                isOpen={popoverOpen}
                target='Popover1'
                toggle={toggle}
            >
                <PopoverHeader>Lets Make a Popover!!!</PopoverHeader>
                <PopoverBody>
                    I really wanted to make a popover so I did it! Yay for me
                    and all the things in the Universe!
                </PopoverBody>
            </Popover>

            <ButtonDiv type='success'>Success</ButtonDiv>
            <ButtonDiv type='danger'>Danger</ButtonDiv>
            <ButtonDiv type='warning'>Warning</ButtonDiv>
            <NormalButton>Normal</NormalButton>
            <TomatoButton>Tomato</TomatoButton>
        </div>
    );
};

export default Button;
