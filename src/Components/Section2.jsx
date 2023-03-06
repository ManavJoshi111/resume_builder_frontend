import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';

const Section2 = (props) => {
  const initialValue = {
    skills: [...props.Info.skills],
    certificates: [...props.Info.certificates],
    achievements: [...props.Info.achievements]
  };
  const [Data, setData] = useState(initialValue);
  useEffect(() => {
    props.getName(Data);
  }, [Data]);
  const renderInput = (category) => {
    const handleChange = (e) => {
      const dummy = [...Data[category]];
      dummy[e.target.name.slice(category.length)] = e.target.value;
      setData({ ...Data, [category]: dummy });
    }
    // console.log("Data : ", Data);

    return (
      Data[category].map((item, index) => {
        return (
          <input
            type="text"
            className="form-control"
            id="title1"
            placeholder={"Enter " + category}
            required={true}
            autoFocus=""
            name={category + index}
            onChange={handleChange}
            value={Data[category][index]}
          />
        )
      }));
  }
  return (
    <>
      <div className={props.page !== 1 ? "pgdisplay " : "" + "inputdiv"}>
        <Accordion multiple>
          <AccordionTab header="Skills">
            {renderInput("skills")}
            <button
              type="button"
              className="btn btn-info mt-1 mb-2"
              id="pbtn"
              onClick={(e) => {
                setData((prevInput) => { return ({ ...prevInput, ["skills"]: [...prevInput["skills"], e.target.value] }); })
              }}
            >
              +
            </button>
          </AccordionTab>
          <AccordionTab header="Certificates">
            {renderInput("certificates")}
            <button
              type="button"
              className="btn btn-info mt-1 mb-2"
              id="pbtn"
              onClick={(e) => {
                setData((prevInput) => { return ({ ...prevInput, ["certificates"]: [...prevInput["certificates"], e.target.value] }); })
              }}
            >
              +
            </button>
          </AccordionTab>
          <AccordionTab header="Achievements">
            {renderInput("achievements")}
            <button
              type="button"
              className="btn btn-info mt-1 mb-2"
              id="pbtn"
              onClick={(e) => {
                setData((prevInput) => { return ({ ...prevInput, ["achievements"]: [...prevInput["achievements"], e.target.value] }); })
              }}
            >
              +
            </button>
          </AccordionTab>
        </Accordion >
      </div>
    </>
  );
}


export default Section2;
