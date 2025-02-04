import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Alert from "@mui/material/Alert";

export default function LoginPage() {
  const [loginField, setLoginField] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To manage the loading state

  const handleInputChange = (event) => {
    setLoginField(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted"); // Debug log to confirm submission
    setError(""); // Reset error state
    setIsLoading(true); // Set loading state to true

    console.log("Login Field:", loginField); // Debug log
    console.log("Password:", password); // Debug log

    try {
      const response = await axios.post("http://localhost:1856/login", {
        loginField,
        password,
      });

      // Debug log to check the response data
      console.log("Login response:", response.data);

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Token set in localStorage:", response.data.token); // Debug log

      // Check if token is stored
      console.log("Current token in localStorage:", localStorage.getItem("token"));

      // Redirect to the dashboard app URL
      window.location.href = "http://localhost:3001/dashboard"; // Change the URL to the dashboard app's URL
    } catch (err) {
      console.error("Login error:", err); // Debug log for error
      setError(err.response?.data?.message || "An error occurred during login.");
    } finally {
      setIsLoading(false); // Reset loading state after request is completed
    }
  };

  return (
    <div className="container">
      <div className="card text-center" style={{ width: "30%", margin: "auto", marginTop: "50px" }}>
        <div className="card-body">
          <div className="mt-3">
            <img src="media/images/onlyLogo.png" alt="FirstEarner Logo" style={{ width: "20%" }} />
          </div>
          <h5 className="card-title mt-4 mb-4">Login to FirstEarner</h5>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Phone Number or Username"
              variant="outlined"
              style={{ width: "89%" }}
              value={loginField}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{ width: "89%" }}
              className="mt-4"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="p-2 btn mb-3 mt-4"
              style={{ width: "30%", backgroundColor: "#FFB200", color: "white", fontSize: "18px" }}
              type="submit"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
            {error && <Alert severity="error">{error}</Alert>}
          </form>
          <p className="text-muted">
            Don't have an account? <Link to="/signup" style={{ textDecoration: "none", color: "#FF9800" }}>Signup</Link>
          </p>
        </div>
      </div>
      <div style={{ width: "25%", margin: "auto", fontSize: "9px", textAlign: "center", color: "#9B9B9B" }} className="mt-4">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p style={{ color: "#9B9B9B", fontSize: "20px", fontWeight: "500", opacity: "0.7" }}>
            <img src="media/images/onlyLogo.png" alt="Logo" style={{ filter: "grayScale(100%)", width: "9%", marginRight: "3px" }} />FirstEarner
          </p>
        </Link>
        <p>
          FirstEarner Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.<br />
          INZ000031xxx, CDSL ‐ SEBI Reg. no. IN-DP-xxx-2019 | FirstEarner <br />
          Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038xxx | Smart<br />
          Online Dispute Resolution | SEBI SCORES
          <br />v3.0.0
        </p>
      </div>
    </div>
  );
}
