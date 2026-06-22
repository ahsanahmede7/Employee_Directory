import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    let Navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const[login,setlogin]=useState([JSON.parse(localStorage.getItem("user"))])
  const[save,Setsave]=useState(true)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleLogin = (e) => {
  e.preventDefault();

  // LocalStorage se saare users lao
//   const users = JSON.parse(localStorage.getItem("user")) || [];
// console.log(users)
  // Matching user dhoondo
  const user = login.filter(
    (u) =>
      u.email === formData.email &&
      u.password === formData.password
  );
console.log(user)
  if (user) {
    Setsave(true);

    // Login user ko save karo
    localStorage.setItem("currentUser", JSON.stringify(user));

    Navigate("/")
    ;
  } else {
    Setsave(false);
    alert("Invalid Email or Password");
  }

  setFormData({
    email: "",
    password: "",
  });
};


  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <form onSubmit={handleLogin}>
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
          {save!==true? <p style={{
            fontSize:"20px",
            color:"red"
          }}>Invalid Email or Password</p>:null}

          <button type="submit" >Login</button>
        </form>


        <p className="signup-text">
          Don’t have an account? <Link to='/SignUp'><span className="span">Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;