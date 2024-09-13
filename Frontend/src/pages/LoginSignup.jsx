import { useState } from 'react';
import './CSS/LoginSignup.css';
import eye from '../components/assets/eye.png';
import hide_eye from '../components/assets/hide_eye.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simple form validation
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/loginsignup`,
        { name, email, password }
      );

      if (response.data === 'Success') {
        navigate('/Login');
      } else {
        setError(response.data);
      }
    } catch (err) {
      setError('Failed to sign up. Please try again.');
      console.log(err);
    }
  };

  // Toggle password visibility
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={hide_eye} alt="Hide Password" />
                ) : (
                  <img src={eye} alt="Show Password" />
                )}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button className="submit-btn" type="submit">
            Continue
          </button>
        </form>

        <p className="loginsignup-login">
          Already have an Account?
          <Link to="/Login">
            <span> Login </span>
          </Link>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
