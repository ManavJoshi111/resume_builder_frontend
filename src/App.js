import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/main.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <ToastContainer style={{ width: "400px" }} />
    </>
  );
};

export default App;
