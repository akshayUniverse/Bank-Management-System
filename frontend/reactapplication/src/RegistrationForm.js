import { useState } from 'react';

import axiosInstance from './axiosConfig';

const Register = () => {
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }


        try {
            const response = await axiosInstance.post('/api/users/register',{
                username,
                email,
                password,
            });
            

            if(response.data.message === 'User registered successfully'){
                alert('Registration successful!');
            } else {
                alert(response.data.error || 'Registration failed');
            }
        }  catch(error){
            
            alert(error.response?.data?.message || 'Error occurred during registration');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="Username"
            />
            <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"
            />
            <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            />
            <input
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;