import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin, registeredUsers }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const user = registeredUsers.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      onLogin(user);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please register first if you don\'t have an account.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Sign In
        </button>

        <div className="auth-link">
          Don't have an account? <Link to="/register">Register Now</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;