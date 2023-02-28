import React, { useState, useEffect } from "react";

function Section4(props) {
  const initialvalue = { ...props.Info, ...props.Info.skills, ...props.Info.certificates };
  // const [Data, setData] = useState({ ...props.Info, ...props.Info.skills, ...props.Info.cer
  // tificates });
  const [Data, setData] = useState({ ...initialvalue });

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
      <div className={props.page !== 3 ? "pgdisplay" : ""}>
        <fieldset className="form-group border p-2">
          <legend className="h5">Project</legend>
          <br />
          <h6>Project 1 : </h6>
          <input
            type="text"
            className="form-control"
            id="title1"
            placeholder="Title"
            required={true}
            autoFocus=""
            name="ptitle1"
            onChange={handleChange}
            value={Data.ptitle1}
          />
          <textarea
            type="text"
            rows="3"
            className="form-control"
            id="desc1"
            placeholder="Description"
            required={true}
            autoFocus=""
            name="pdesc1"
            onChange={handleChange}
            value={Data.pdesc1}
          />
          <input
            type="text"
            className="form-control"
            id="plink"
            placeholder="Project Link (Please Place The Full Link)"
            name="plink1"
            onChange={handleChange}
            value={Data.plink1}
          />
          <br />
          <h6>Project 2 :</h6>
          <input
            type="text"
            className="form-control"
            id="title1"
            placeholder="Title"
            required={true}
            autoFocus=""
            name="ptitle2"
            onChange={handleChange}
            value={Data.ptitle2}
          />
          <textarea
            type="text"
            rows="3"
            className="form-control"
            id="desc1"
            placeholder="Description"
            required={true}
            autoFocus=""
            name="pdesc2"
            onChange={handleChange}
            value={Data.pdesc2}
          />
          <input
            type="text"
            className="form-control"
            id="plink"
            placeholder="Project Link (Please Place The Full Link)"
            name="plink2"
            onChange={handleChange}
            value={Data.plink2}
          />
        </fieldset>
      </div>
    </>
  );
}

export default Section4;
