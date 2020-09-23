import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

const Form = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    console.log('form.js props', props);
    return (
        <div>
            <form />
            <label>
                Name:
                <br></br>
                <input type='text' value='name' />
            </label>
            <label>
                Name:
                <br></br>
                <input type='text' value='name' />
            </label>
            <label>
                Name:
                <br></br>
                <br></br>
                <input type='text' value='name' />
            </label>
            <label>
                Name:
                <br></br>
                <input type='text' value='name' />
            </label>
            <label>
                Name:
                <br></br>
                <input type='text' value='name' />
            </label>
        </div>
    );
};

export default Form;
