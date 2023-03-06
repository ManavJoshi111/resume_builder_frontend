import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import Form from "./Form";
import Resume_1 from "./Resume_1";
import Resume_2 from "./Resume_2";
import "../Styles/mainpage.css";

const Mainpage = (props) => {
  const [User, setUser] = useState(false);
  const [Info, setInfo] = useState("");
  const [id, setid] = useState("");
  const Authenticate = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}makecv`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // console.log("Response in Mainpage ", res);
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
    // console.log("Name after setName in mainpage : ", Info);
  };

  const sendData = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, Name }),
      // body:
    });
    const resJson = await res.json();
    // console.log(resJson);
  }
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }
  if (Info.name) {
    return (
      (
        <>
          {/* <h2 className="heading h1 fw-bold">Select Template : </h2> */}
          {/* <div className="container mt-3 d-flex justify-content-center align-items-center">
           <img src={Resume_1} alt="" className="mx-2" height={270} width={250} />
           <img src={Resume_2} alt="" className="mx-2" height={270} width={250} />
         </div> */}
          <div className="container-fluid mt-3 flex-wrap d-flex flex-column flex-md-row justify-content-center align-items-flex-baseline">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleChange}>
              <option selected>Select Template</option>
              <option value="1">Template 1</option>
              <option value="2">Template 2</option>
            </select>
            <div className="leftcontainer">
              <h2 className="heading h1 fw-bold d-block">Enter Your Details : </h2>
              <Form getName={getName} Info={Info}></Form>
            </div>
            <div className="rightcontainer mt-4">
              {
                selectedOption === "1" ? <Resume_1 data={Info} ref={componentRef} username={Info.username}></Resume_1> : selectedOption === "2" ? <Resume_2 data={Info} ref={componentRef} username={Info.username}></Resume_2> : <h2 className="heading h1 fw-bold d-block">Select Template</h2>
              }
              {/* <Resume data={Info} ref={componentRef} username={Info.username}></Resume> */}
              {/* <Resume_2 data={Info} ref={componentRef} username={Info.username}></Resume_2> */}
            </div>
            <button
              type="button"
              disabled={false}
              className="btn btn-primary mb-4 mt-2 align-self-center"
              onClick={() => { handlePrint(); sendData() }}
            >
              Download PDF
            </button>
          </div>
        </>
      )
    );
  }
  else {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

};

export default Mainpage;
