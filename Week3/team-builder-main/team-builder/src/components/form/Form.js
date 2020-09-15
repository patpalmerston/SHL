import React from 'react';

const Form = () => {
    return (
        <div>
            <p>I am Form</p>
            <form>
                <label>
                    Name:<br></br>
                    <input type='text' value=' name' />
                </label>
                <br></br>
                <label>
                    Email:<br></br>
                    <input type='text' value=' email' />
                </label>
                <br></br>
                <label>
                    Role:<br></br>
                    <input type='text' value=' role' />
                </label>
            </form>
        </div>
    );
};

export default Form;
