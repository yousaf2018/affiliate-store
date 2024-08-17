import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);

    return (
        <form onSubmit={handleLogin} className='login'>
            <h2>Admin Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            {error && <p className='error'>{error}</p>}
        </form>
    );
};

export default LoginPage;
