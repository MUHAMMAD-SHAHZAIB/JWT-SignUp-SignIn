// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
