import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/header.css";
import image from "../Images/resume_cover.png";

const Header = (props) => {
  const Authenticate = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}makecv`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const resJson = await res.json();
      if (resJson.message === "Authenticated") props.setToggle(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Authenticate();
  }, []);
  return (
    <div className="container-fluid mt-3 flex-wrap d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
      <div className="leftcontainer ps-5">
        <h2 id="hey" className="fw-bold mt-2">
          Create Your <span> Professional</span> Resume For Free
        </h2>
        <p id="para" className="fw-lighter fs-5">
          Make yourself out of crowd using our resume builder.
          <br />
          We provide you with a professional resume that is designed to fit in
          with your style.
        </p>
        <center>
          <NavLink
            to="/makecv"
            className="btn btn-primary btn-block mt-3"
          >
            Get Started
          </NavLink>
        </center>
      </div>
      <div className="rightcontainer">
        <center>
          <img
            id="imganim"
            // src="https://i.pinimg.com/originals/b5/bb/80/b5bb80994bc3ecdcd5b989250e6b7746.png"
            src={image}
            className="img-fluid"
            alt=""
          />
        </center>
      </div>
    </div>
  );
};

export default Header;
