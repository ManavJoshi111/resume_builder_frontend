import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';

function Section3(props) {
  // console.log("Props in section 3 : ", props);
  // const initialValue = { ...props.Info, ...props.Info.skills, ...props.Info.certificates };
  const initialValue = { about: props.Info.about, collegesdate: props.Info.collegeedate, collegeedate: props.Info.collegeedate, cpi: props.Info.cpi, cname: props.Info.cname, experience: [...props.Info.experience] };
  let [Data, setData] = useState(initialValue);
  // console.log("Inital value in section 3 : ", Data);

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    props.getName(Data);
  }, [Data]);
  const renderWorkExp = () => {
    const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      let index = name.slice(name.length - 1);
      let dummy = [...Data.experience];
      dummy[index][name.slice(0, name.length - 1)] = value;
      setData({ ...Data, experience: dummy });
    };
    return Data.experience.map((item, index) => {
      return (
        <fieldset className="form-group border p-2 mt-3">
          <legend className="h5">Work Experience</legend>
          <input
            type="date"
            name={"sdate" + index}
            className="form-control col-sm-4 hori mr-2"
            value={Data.experience[index].sdate}
            onChange={handleChange}
          />
          <input
            type="date"
            name={"edate" + index}
            className="form-control col-sm-4 hori ml-2"
            value={Data.experience[index].edate}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mt-2"
            id="title1"
            placeholder="Company Name"
            required={true}
            autoFocus=""
            name={"company" + index}
            onChange={handleChange}
            value={Data.experience[index].company}
          />
          <input
            type="text"
            className="form-control mt-2"
            id="title1"
            placeholder="Position"
            required={true}
            autoFocus=""
            name={"position" + index}
            onChange={handleChange}
            value={Data.experience[index].position}
          />
        </fieldset>
      );
    });
  }
  return (
    <>
      <div className={props.page !== 2 ? "pgdisplay" : ""}>
        <Accordion multiple>
          <AccordionTab header="About">
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
          </AccordionTab>
          <AccordionTab header="Education">
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
                placeholder="CPI"
                required={true}
                autoFocus=""
                name="cpi"
                onChange={handleChange}
                value={Data.cpi}
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
          </AccordionTab>
          <AccordionTab header="Work Experience">
            {renderWorkExp()}
            <button
              type="button"
              className="btn btn-info mt-1 mb-2"
              id="pbtn"
              onClick={(e) => {
                setData((prevInput) => {
                  return {
                    ...prevInput,
                    experience: [
                      ...prevInput.experience,
                      { company: "", position: "", sdate: "", edate: "" },
                    ],
                  };
                });
              }}
            >
              +
            </button>
          </AccordionTab >
        </Accordion>
      </div>
    </>
  );
}

export default Section3;
