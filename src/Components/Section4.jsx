import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';

function Section4(props) {
  const initalValue = { projects: [...props.Info.projects] };
  const [Data, setData] = useState(initalValue);

  useEffect(() => {
    props.getName(Data);
  }, [Data]);

  const renderProjects = () => {
    const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      let index = name.slice(name.length - 1);
      let dummy = [...Data.projects];
      dummy[index][name.slice(0, name.length - 1)] = value;
      setData({ ...Data, projects: dummy });
      console.log("Data in handleChange", Data);
    };
    return Data.projects.map((item, index) => {
      return (
        <>
          <fieldset className="form-group border p-2 mt-3">
            <legend className="h5">Project</legend>
            <input
              type="text"
              className="form-control mt-2"
              id="title1"
              placeholder="Project Title"
              required={true}
              autoFocus=""
              name={"title" + index}
              onChange={handleChange}
              value={Data.projects[index].title}
            />
            <input
              type="text"
              className="form-control mt-2"
              id="title1"
              placeholder="Project Description"
              required={true}
              autoFocus=""
              name={"description" + index}
              onChange={handleChange}
              value={Data.projects[index].description}
            />
            <input
              type="text"
              className="form-control mt-2"
              id="title1"
              placeholder="Project Link"
              required={true}
              autoFocus=""
              name={"link" + index}
              onChange={handleChange}
              value={Data.projects[index].link}
            />
          </fieldset>
        </>
      );
    });
  }
  return (
    <>
      <div className={props.page !== 3 ? "pgdisplay" : ""} >
        <Accordion>
          <AccordionTab header="Add Projects">
            {renderProjects()}
            <button
              type="button"
              className="btn btn-info mt-1 mb-2"
              id="pbtn"
              onClick={(e) => {
                setData((prevInput) => {
                  return {
                    ...prevInput,
                    projects: [
                      ...prevInput.projects,
                      { title: "", description: "", link: "" }
                    ],
                  };
                });
              }}
            >
              +
            </button>
          </AccordionTab>
        </Accordion>
      </div>
    </>
  );

}

export default Section4;
