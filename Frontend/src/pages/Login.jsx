import { useState } from 'react';
import './CSS/Login.css';
import eye from '../components/assets/eye.png';
import hide_eye from '../components/assets/hide_eye.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Use the environment variable REACT_APP_PORT in the request URL
        axios.post(`${process.env.REACT_APP_PORT}/Login`, { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-fields">
                        <input type="email" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)} />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Set Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="password-toggle-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <img src={hide_eye} alt="" /> : <img src={eye} alt="" />}
                            </button>
                        </div>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
                <div className="login-forgot">
                    <p>Forgot your password?</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
