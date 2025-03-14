import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>EHAS</h2>
        <p>Please log in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user"></i> {/* Username icon */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i> {/* Password icon */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-footer">
          
        </div>
      </div>
    </div>
  );
};

export default Login;