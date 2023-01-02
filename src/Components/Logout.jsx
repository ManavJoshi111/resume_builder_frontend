import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Images/Loading.gif";

const Logout = (props) => {
  const navigate = useNavigate();
  //promises
  useEffect(() => {
    fetch("http://localhost:3001/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          props.setToggle(false);
          navigate("../", {
            replace: true,
          });
        }
        console.log(res);
        if (res.status !== 200) throw new Error();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <center>
        <img src={Loading} alt="" height={500} />
        <h1 className="text-dark">Logging Out...</h1>
      </center>
    </>
  );
};

export default Logout;
