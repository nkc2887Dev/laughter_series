import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<SignUp />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
          </Routes> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
