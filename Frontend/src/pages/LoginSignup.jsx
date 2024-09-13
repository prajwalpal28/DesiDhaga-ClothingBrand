import { useState } from 'react';
import './CSS/LoginSignup.css';
import eye from '../components/assets/eye.png'
import hide_eye from '../components/assets/hide_eye.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/loginsignup', { name, email, password })
      .then(result => {console.log(result.data)
      navigate("/Login")})
      .catch(err => console.log(err))
  };

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

return (
  <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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
        <button className='submit-btn' type="submit">Continue</button>
      </form>
      <p className="loginsignup-login">
        Already have an Account?
        <Link to="/Login">
          <span> Login </span>
        </Link>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="agree" id="agree" />
        <p>By Continuing, I agree to the Terms of Use & Privacy Policy.</p>
      </div>
    </div>
  </div>
);
};
