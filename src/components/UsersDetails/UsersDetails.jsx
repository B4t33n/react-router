import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const user = useLoaderData();
    const {name, email, website, phone}= user;
    return (
        <div className='text-center mt-10 border border-amber-400 rounded-2xl w-3/12 mx-auto p-10 text-2xl'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
            <p><small>{phone}</small></p>
        </div>
    );
};

export default UsersDetails;