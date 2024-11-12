import React from 'react';
import { useUser } from './UserContext';

const UserStatus = () => {
    const { user } = useUser();

    return user ? <p>Welcome , {user.username}!</p> : <p>Please log in</p>;
};

export default UserStatus;