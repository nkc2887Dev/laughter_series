import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      const url = `${process.env.BACKEND_URL}${process.env.BACKEND_CLIENT_URL}user/create`;
    try {
      const response = await axios.post(url, {
        firstName,
        lastName,
        mobNo,
        email,
        password,
      });

      if (response.data.data !== null) {
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
    if (error.response?.status === 422) {
      setErrorMessage("Provided email or phone number already exists.");
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
      setFirstName("");
      setLastName("");
      setMobNo("");
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
          <div className="container m-5 p-5 w-100">
            <form>
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name..."
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="mobNo"
                  placeholder="Enter your phone number..."
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
