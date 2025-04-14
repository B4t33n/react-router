import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className='text-center text-2xl mt-4'>
            <h1>users: {users.length}</h1>
            <div>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;