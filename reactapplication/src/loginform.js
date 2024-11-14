import { useState } from 'react';
import axiosInstance from './axiosConfig';
import { useUser } from './UserContext';



const LoginForm = () => {
    const { setUser } = useUser();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = { email , password };

        try {
            const response = await axiosInstance.post('/api/users/login', userData);
            if (response.data.message === 'Login seccessful') {
                //  store  jwt in cookies for security.
                localStorage.setItem('token',response.data.token);
                //  you can access this in any file with the help of 
                //  const token  = localStorage.getItem('token');
                //  and remove on logout.--. token = localStorage.removeItem('token');
                setUser({ username: response.data.username,email });
                alert('Login successful');

            }  else {
                alert(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message ||'Error occurred during login');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            />
            <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;