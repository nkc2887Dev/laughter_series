import React from "react";
import Login from "./components/Form/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Form/SignUp";
import Home from "./components/Home/Home";
import Profile from "./components/Home/Profile/Profile";
import Joke from "./components/Home/Joke/Joke";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<SignUp />}
            />
            <Route
              path="/home/*"
              element={<Home />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
};

export default App;
