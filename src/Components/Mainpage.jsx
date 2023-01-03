import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import Resume from "./Resume";
import Form from "./Form";
import Resume_1 from "../Images/resume1.png";
import Resume_2 from "../Images/resume2.png";
import "../Styles/mainpage.css";

const Mainpage = (props) => {
  const [User, setUser] = useState(false);
  const [Info, setInfo] = useState("");
  const [id, setid] = useState("");
  const Authenticate = async () => {
    try {
      const res = await fetch("https://resume-builder-backend-x66t.onrender.com//makecv", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log("Response in Mainpage ", res);
      if (res.status !== 200) {
        toast.warn("Please Login First", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        navigate("../login", { replace: true });
        return;
      }
      const resJson = await res.json();
      console.log(resJson);
      setInfo(resJson.crrUser);
      setid(resJson.crrUser._id);
      if (resJson.message === "Authenticated") {
        setUser(true);
        props.setToggle(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Authenticate();
  }, []);
  const navigate = useNavigate();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let initialState = {};

  const [Name, setName] = useState({ initialState });
  const getName = (name) => {
    setName({ ...Name, ...name });
    setInfo({ ...Info, ...name });
    console.log("Name after setName in mainpage : ", Info);
  };

  const sendData = async () => {
    const res = await fetch('https://resume-builder-backend-x66t.onrender.com//update', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, Name }),
      // body:
    });
    const resJson = await res.json();
    console.log(resJson);
  }

  return (
    Info.name && (
      <>
        {/* <h2 className="heading h1 fw-bold">Select Template : </h2> */}
        {/* <div className="container mt-3 d-flex justify-content-center align-items-center">
          <img src={Resume_1} alt="" className="mx-2" height={270} width={250} />
          <img src={Resume_2} alt="" className="mx-2" height={270} width={250} />
        </div> */}
        <div className="container-fluid mt-3 flex-wrap d-flex flex-column flex-md-row justify-content-center align-items-flex-baseline">
          <div className="leftcontainer">
            <h2 className="heading h1 fw-bold">Enter Your Details : </h2>
            <Form getName={getName} Info={Info}></Form>
          </div>
          <div className="rightcontainer mt-4">
            <Resume data={Info} ref={componentRef} username={Info.username}></Resume>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-4 mt-2 align-self-center"
            onClick={() => { handlePrint(); sendData() }}
          >
            Print Resume
          </button>
        </div>
      </>
    )
  );
};

export default Mainpage;
