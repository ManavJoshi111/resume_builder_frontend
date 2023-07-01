import React, { useState, useEffect } from "react";

function Section1(props) {
  // console.log("Section1 :", props.Info);
  let initialValue = {
    name: props.Info.name,
    email: props.Info.email,
    number: props.Info.number,
    address: props.Info.address,
    portfolio: props.Info.portfolio,
    github: props.Info.github,
  };
  const [Data, setData] = useState(initialValue);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    props.getName(Data);
  }, [Data]);

  return (
    <>
      <div className={props.page !== 0 ? "pgdisplay" : ""}>
        <input
          type="text"
          className="form-control"
          id="firstinput"
          placeholder="Full Name"
          required={true}
          autoFocus=""
          name="name"
          onChange={handleChange}
          value={Data.name}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          readOnly
          required={true}
          autoFocus=""
          name="email"
          onChange={handleChange}
          value={Data.email}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Contact"
          required={true}
          autoFocus=""
          name="contact"
          onChange={handleChange}
          value={Data.number}
        />
        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Address"
          required={true}
          autoFocus=""
          onChange={handleChange}
          value={Data.address}
        />
        <input
          type="text"
          className="form-control"
          name="portfolio"
          placeholder="Portfolio/Personal Website complete URL"
          required={true}
          autoFocus=""
          onChange={handleChange}
          value={Data.portfolio}
        />
        <input
          type="text"
          className="form-control"
          name="github"
          placeholder="Github Username"
          required={true}
          autoFocus=""
          onChange={handleChange}
          value={Data.github}
        />
      </div>
    </>
  );

}

export default Section1;
