import React from 'react';

const Member = ({ member }) => {
    // name email role
    console.log('member', member);
    return (
        <div style={{ outline: 'solid red 1px' }}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
    );
};

export default Member;
