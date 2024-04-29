import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./Profile/Profile";
import Joke from "./Joke/Joke";
import ListJoke from "./Joke/ListJoke";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Home;
