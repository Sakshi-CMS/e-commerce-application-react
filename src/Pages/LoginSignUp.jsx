import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../components/Assets/Shopping_backgound.jpg";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles: [{ name: "ROLE_USER" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/register",
        user
      );

      console.log("Response data:", response.data); // Log the response data
      alert("Registration Success");
      // Redirect to login page after successful registration
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle error
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6">
            <div className="card p-4 shadow border-0" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark" style={{ width: "100%" }} >
            Register
          </button>
        </form>
      
        <div className="mt-4 text-center">
                    <a href="/login" className="text-blue-700"> Already have an account?</a>
                </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LoginSignUp;
