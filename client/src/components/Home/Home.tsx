import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Joke from "./Joke/Joke";
import ListJoke from "./Joke/ListJoke";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <Navbar />
        {/* <ListJoke /> */}
        {location.pathname === "/home" && <ListJoke />}
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
