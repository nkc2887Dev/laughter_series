import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Joke from "./Joke/Joke";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route  
            path="/joke"
            element={<Joke />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Home;
