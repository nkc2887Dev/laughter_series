import React from "react";
import Login from "./components/Form/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Form/SignUp";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
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
        </div>
      </Router>
    </>
  );
};

export default App;
