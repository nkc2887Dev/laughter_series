import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Utils/AxiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post("client/user/login", {
        email: email,
        password: password,
      });
      if (response.data) {
        const token = response.data.data.tokens[0].token;
        localStorage.removeItem("token");
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        handleErrorResponse(response.data.message);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
      } else {
        handleUnexpectedError(error);
      }
    }
  };

  const handleErrorResponse = (message: string) => {
    setErrorMessage(message);
    resetFields();
  };

  const handleAxiosError = (error: AxiosError) => {
    if (error.response?.status === 404) {
      setErrorMessage("User not found. Please check your email and try again.");
    } else {
      console.error("An error occurred:", error.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
    resetFields();
  };

  const handleUnexpectedError = (error: Error) => {
    console.error("An unexpected error occurred:", error.message);
    setErrorMessage("An unexpected error occurred. Please try again later.");
    resetFields();
  };

  const resetFields = () => {
    setTimeout(() => {
      setErrorMessage("");
      setEmail("");
      setPassword("");
    }, 5000);
  };

  return (
    <div className="container-fluid w-100 h-100">
      <div className="row no-gutters">
        {/* Background image column */}
        <div className="col-md-6 bg-dark d-flex align-items-center justify-content-center">
          <img
            src="/login.jpg"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Form column */}
        <div
          className="col-md-6 d-flex align-items-center justify-content-center p-5"
          style={{ backgroundColor: "rgba(40, 167, 69, 0.5)" }}
        >
          <div className="container">
            <form>
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small
                  id="emailHelp"
                  className="form-text text-muted"
                ></small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary rounded-25"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
            <hr
              className="mt-4 mb-3"
              style={{ borderTop: "1px solid #ccc" }}
            />
            <span>
              Don't have an account ?
              <Link
                className="ml-2"
                to="/register"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
