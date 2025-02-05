import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';

export default function Signup() {
    const [userData, setUserData] = useState({ fullname: "", username: "", email: "", password: "", phonenumber: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "fullname" && /[^a-zA-Z\s]/.test(value)) {
            return;
        }
        if (name === "phonenumber" && !/^\d{0,10}$/.test(value)){
             return;
        }
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!userData.fullname || !userData.username || !userData.email || !userData.password || !userData.phonenumber) {
            setError("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        if (userData.phonenumber.length !== 10) {
            setError("Phone number must be exactly 10 digits.");
            setLoading(false);
            return;
        }

        try {
            await axios.post("https://firstearner.onrender.com/signup", userData);
            setSuccess("Signup successful!");
            setUserData({ fullname: "", username: "", email: "", password: "", phonenumber: "" });
        } catch (err) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col mt-5 p-5">
                    <img src="media/images/signup.png" alt="Signup" />
                </div>
                <div className="col mt-5 p-4">
                    <h2>Signup Now</h2>
                    <p className="text-muted mb-4">Or track your existing application.</p>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="fullname"
                            label="Full Name"
                            variant="outlined"
                            style={{ width: "100%" }}
                            required
                            onChange={handleInputChange}
                            value={userData.fullname}
                            type="text"
                        />
                        <TextField
                            id="outlined-basic"
                            name="username"
                            label="Username"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "16px" }}
                            required
                            onChange={handleInputChange}
                            value={userData.username}
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Email"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "16px" }}
                            required
                            onChange={handleInputChange}
                            value={userData.email}
                        />
                        <TextField
                            id="outlined-basic"
                            name="password"
                            label="Password"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "16px" }}
                            required
                            onChange={handleInputChange}
                            value={userData.password}
                        />
                        <div className="input-group mb-2 mt-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text" style={{ height: "57px" }}>+91</div>
                            </div>
                            <TextField
                                id="outlined-basic"
                                name="phonenumber"
                                label="Phone Number"
                                variant="outlined"
                                style={{ width: "89%" }}
                                required
                                onChange={handleInputChange}
                                value={userData.phonenumber}
                            />
                        </div>
                        <br/>
                        {error && <Alert severity="error">{error}</Alert>}
                        {success && <Alert severity="success">{success}</Alert>}
                        <button
                            type="submit"
                            className="p-2 btn mb-3 mt-4"
                            style={{ width: "30%", backgroundColor: "#FFB200", color: "white", fontSize: "18px" }}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Continue"}
                        </button>
                        <p className="text-muted">
                            Already have a account? <Link to="/login" style={{ textDecoration: "none", color: "#FF9800" }}>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
