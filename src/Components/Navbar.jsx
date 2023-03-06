import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Mainpage from "./Mainpage";
import Logout from "./Logout";
import Profile from "./Profile";
import "../Styles/navbar.css";
import { Route, Routes, NavLink } from "react-router-dom";
import logo from "../Images/myCV.png";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  // console.log(Toggle);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logoimg ms-3" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" + (isActive ? " active_class" : "")
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") +
                    (Toggle ? " notDisplay" : "")
                  }
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") +
                    (Toggle ? " notDisplay" : "")
                  }
                  aria-current="page"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") +
                    (!Toggle ? " notDisplay" : "")
                  }
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") +
                    (!Toggle ? " notDisplay" : "")
                  }
                  aria-current="page"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Header setToggle={setToggle} />}></Route>
        <Route
          exact
          path="/login"
          element={<Login setToggle={setToggle} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<Signup setToggle={setToggle} />}
        ></Route>
        <Route
          exact
          path="/makeCV"
          element={<Mainpage setToggle={setToggle} />}
        ></Route>
        <Route
          exact
          path="/profile"
          element={<Profile setToggle={setToggle} />}
        ></Route>
        <Route
          exact
          path="/logout"
          element={<Logout setToggle={setToggle} Toggle={Toggle} />}
        ></Route>
      </Routes>
    </>
  );
};

export default Navbar;
