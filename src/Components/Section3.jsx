import React, { useState, useEffect } from "react";

function Section3(props) {
  console.log("Props in section 3 : ", props.Info.skills);
  const initialValue = { ...props.Info, ...props.Info.skills, ...props.Info.certificates };
  let [Data, setData] = useState({ initialValue });
  console.log("Inital value in section 3 : ", initialValue);

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    props.getName(Data);
  }, [Data]);
  return (
    <>
      <div className={props.page !== 2 ? "pgdisplay" : ""}>
        <textarea
          rows="3"
          // cos="40"
          className="form-control"
          id="about"
          placeholder="About"
          required={true}
          autoFocus=""
          name="about"
          onChange={handleChange}
          value={Data.about}
        />
        <fieldset className="form-group border p-2 mt-3">
          <legend className="h5">Education</legend>
          <input
            type="date"
            name="collegesdate"
            className="form-control col-sm-4 hori mr-2"
            value={Data.collegesdate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="collegeedate"
            className="form-control col-sm-4 hori ml-2"
            value={Data.collegeedate}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mt-2"
            id="title1"
            placeholder="College Name"
            required={true}
            autoFocus=""
            name="cname"
            onChange={handleChange}
            value={Data.cname}
          />
        </fieldset>
        <fieldset className="form-group border p-2">
          <legend className="h5">Work Experience</legend>
          <input
            type="date"
            name="sdate"
            className="form-control col-sm-4 hori mr-2"
            value={Data.sdate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="edate"
            className="form-control col-sm-4 hori ml-2"
            value={Data.edate}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            id="title1"
            placeholder="Title"
            required={true}
            autoFocus=""
            name="jtitle"
            onChange={handleChange}
            value={Data.jtitle}
          // value={things.name}
          />
          <textarea
            type="text"
            rows="3"
            className="form-control"
            id="desc1"
            placeholder="Description"
            required={true}
            autoFocus=""
            name="jdesc"
            onChange={handleChange}
            value={Data.jdesc}
          />
        </fieldset>
      </div>
    </>
  );
}

export default Section3;
