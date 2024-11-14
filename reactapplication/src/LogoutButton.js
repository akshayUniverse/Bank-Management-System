import React from 'react';
import { useUser } from './UserContext';

const LogoutButton = () => {
    const { setUser }  = useUser();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        alert('You have been logged out.');
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;