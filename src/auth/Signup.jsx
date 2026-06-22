import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let oldData = JSON.parse(localStorage.getItem("user"))||[]
    console.log( oldData)
    console.log(typeof oldData)
    oldData.push(formData)

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(oldData));

    alert("Account Created Successfully!");
     navigate("/login")

    // reset form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Sign up to get started</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to='/Login'>
          <span>Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;