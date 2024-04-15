import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Utils/AxiosInstance";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance
      .get("client/user/profile")
      .then((res) => {
        const user = res.data.data;
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setMobNo(user.mobNo);
        setEmail(user.email);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="container-fluid w-100 h-100">
        <div className="d-flex align-items-center justify-content-center p-5">
          <div className="container m-5 p-5 w-50">
            <form>
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
              {/* <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdateUser}
                >
                  Update
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
