import React, { useState } from 'react';
import Form from './components/form/Form';
import Members from './components/members/Members';

import './App.css';

function App() {
    const [members, setMembers] = useState([
        {
            name: 'Joe Bob',
            email: 'joe@email.com',
            role: 'designer',
        },
        {
            name: 'Sarah Lia',
            email: 'lia@email.com',
            role: 'coder',
        },
        {
            name: 'Zac Smilt',
            email: 'zs@email.com',
            role: 'team lead',
        },
    ]);

    // console.log('app.js state', members);

    const handleAdd = () => {
        console.log('handleAdd');
    };

    const handleAddSubmit = () => {
        console.log('handleAddSubmit');
    };

    return (
        <div className='App'>
            <Members members={members} />
            <Form />
        </div>
    );
}

export default App;
