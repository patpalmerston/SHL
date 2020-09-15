import React from 'react';
import Member from './Member';

const Members = ({ members }) => {
    // const { members } = props;
    console.log('members.js', members);
    return (
        <div>
            <div className='members'>
                {members.map((member, i) => (
                    <Member member={member} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Members;
