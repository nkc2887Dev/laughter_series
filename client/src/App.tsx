import React from "react";
import Login from "./components/Form/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Form/SignUp";
import Home from "./components/Home/Home";
import MyJokes from "./components/Home/Joke/MyJokes";
import Layout from "./components/layout";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          <Layout>
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
                path="/my-jokes"
                element={<MyJokes />}
              />
              <Route
                path="/*"
                element={<Home />}
              />
            </Routes>
          </Layout>
        </div>
      </Router>
    </>
  );
};

export default App;
