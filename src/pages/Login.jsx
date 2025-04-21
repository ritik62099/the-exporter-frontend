import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import '../assets/css/login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useAuth(); // 👈 get login function from context

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Login failed");
      } else {
        alert("Login successful!");

        // Save token and update AuthContext
        localStorage.setItem("token", data.token);
        login(data.user); // 👈 this sets the user in context

        // Redirect to homepage
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to ExporterPro</h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={credentials.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={handleChange}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <p className="register-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
