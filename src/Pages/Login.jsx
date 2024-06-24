import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../components/Assets/Shopping_backgound.jpg";
import { jwtDecode } from "jwt-decode";
import InvalidCredentialsPopup from "../components/Pops/InvalidCredentialsPopup";
import LoginSuccessPopup from "../components/Pops/LoginSuccessPopup";


const Login = () => {
    const navigate = useNavigate();
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showInvalidCredentialsPopup, setShowInvalidCredentialsPopup] =
        useState(false);
    const [showLoginSuccessPopup, setShowLoginSuccessPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState("");
    const handleChange1 = (e) => {
        const value = e.target.value;
        setUsernameOrEmail(value);
        // Custom validation for username or email
        if (!value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                usernameOrEmail: "Email is required",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, usernameOrEmail: "" }));
        }
    };
    const handelRegister = () => {
        navigate("/loginSignUp");
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        // Custom validation for password
        if (value.length < 5) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "Password must be at least 5 characters",
            }));
        } else if (value.length > 12) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "Password must be less than 12 characters",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    const handleCloseInvalidCredentialsPopup = () => {
        setShowInvalidCredentialsPopup(false);
    };

    const handleCloseLoginSuccessPopup = () => {
        setShowLoginSuccessPopup(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Reset errors
        setErrors({});

        // Custom validation for both fields
        const errors = {};
        if (!usernameOrEmail.trim()) {
            errors.usernameOrEmail = "Email is required";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        }

        // If there are errors, display them and prevent form submission
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8085/api/auth/login",
                {
                    usernameOrEmail,
                    password,
                }
            );

            console.log("Response data:", response.data); // Log the response data

            const { accessToken } = response.data;

            console.log("Token:", accessToken); // Log the token value

            // Ensure the token is always a string
            const convertedToken = String(accessToken || "");

            const decodedToken = jwtDecode(convertedToken);

            // Get role from the decoded token
            const role = decodedToken.authorities[0]; // Assuming role is an array with a single role

            // Store token and role in local storage
            localStorage.setItem("token", convertedToken);
            localStorage.setItem("role", role);

            setShowLoginSuccessPopup(true);
            setTimeout(() => {
                setShowLoginSuccessPopup(false);
                if (role === "ROLE_ADMIN") {
                    navigate("/admin-dashboard", {
                        state: { usernameOrEmail: usernameOrEmail },
                    });
                } else if (role === "ROLE_USER") {
                    navigate("/", { state: { usernameOrEmail: usernameOrEmail } });
                    // navigate("/user");
                    setError("User logged");
                    console.log("Response data:", response.data); // Log the response data
                    alert("Registration Success");
                } else {
                    setError("Invalid credentials");
                }
            }, 1000);
        } catch (error) {
            console.error("Login failed:", error.message);
            setShowInvalidCredentialsPopup(true);
            setTimeout(() => {
                setShowInvalidCredentialsPopup(false);
            }, 1000);
        }
    };

    const [isSlidingScreenOpen, setSlidingScreenOpen] = useState(false);
    const [slidingScreenNo, setSlidingScreenNo] = useState(1);
    const toggleSlidingScreen = (no) => {
        setSlidingScreenNo(no);
        setSlidingScreenOpen(!isSlidingScreenOpen);
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6">
                <div className="card p-4 shadow border-0" style={{ width: "400px" }}>
                    <h2 className="text-center mb-4">Welcome to SHOPPER</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="usernameOrEmail"
                                value={usernameOrEmail}
                                onChange={handleChange1}
                                className="form-control"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-dark" style={{ width: "100%" }}>Login</button>
                            <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={handelRegister}>Register</button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <a href="https://www.example.com" className="text-blue-700">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
