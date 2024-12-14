"use client";  // Marking this component as client-side for state usage

import React, { useState } from 'react';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password, rememberMe });
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        <p className="signup-link">
          Don’t have an account?{' '}
          <a href="#" className="link">Sign Up</a>
        </p>

        <form onSubmit={handleSubmit} className="signin-form">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="input-field"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter 6 characters or more"
              className="input-field"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="checkbox"
              />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        {/* Social Login */}
        <div className="social-login">
          <span className="social-text">or login with</span>
          <div className="social-buttons">
            {/* Google Login */}
            <button className="social-btn google-btn">
              <img src="google.png" alt="Google" className="social-icon" />
              Google
            </button>
            {/* Facebook Login */}
            <button className="social-btn facebook-btn">
              <img src="facebook.png" alt="Facebook" className="social-icon" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
