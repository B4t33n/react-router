import React from 'react';

const User = ({user}) => {
    const {name, email, phone}= user;
    return (
        <div className='rounded-xl w-4/12 mx-auto mt-7 bg-amber-200 p-10 space-y-6'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p><small>no: {phone}</small></p>
            <button className='btn btn-primary'>details</button>
        </div>
    );
};

export default User;