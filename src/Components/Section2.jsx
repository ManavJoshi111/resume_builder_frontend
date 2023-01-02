import React, { useState, useEffect } from "react";

function Section2(props) {
  let Val = 0;
  const initialValue = {
    skills: [...props.Info.skills],
    certificates: [...props.Info.certificates],
    achievement: props.Info.achievement
  };
  const [Data, setData] = useState(initialValue);
  const [Input, setInput] = useState([{ skill: "" }]);

  const handleChange = (e) => {
    if (e.target.name >= "skill0" && e.target.name <= "skill9") {
      const dummy = [...Data.skills];
      dummy[e.target.name.slice(5)] = e.target.value;
      setData({ ...Data, skills: dummy });
    }
    else if (e.target.name >= "certy0" && e.target.name <= "certy1") {
      const dummy = [...Data.certificates];
      dummy[e.target.name.slice(5)] = e.target.value;
      setData({ ...Data, certificates: dummy });
    }
    else {
      setData({
        ...Data,
        [e.target.name]: e.target.value,
      });
    }
    console.log("Data in section 2 :", Data);
  };

  useEffect(() => {
    props.getName(Data);
  }, [Data]);

  const renderInput = () => {
    if (Val != 10) {
      let newInput = { skill: "" };
      setInput([...Input, newInput]);
      Val++;
    } else alert("You can add at most 10 skills");
  };
  return (
    <>
      <div className={props.page !== 1 ? "pgdisplay " : "" + "inputdiv"}>
        {Input.map((input, index) => {
          if (Val != 10) {
            Val++;
            return (
              <div key={index}>
                <input
                  type="text"
                  className="form-control"
                  id="title1"
                  placeholder="Enter Skill"
                  required={true}
                  autoFocus=""
                  name={"skill" + index}
                  onChange={handleChange}
                  value={Data.skills[index]}
                />
              </div>
            );
          } else return alert("You can add only 10 skills");
        })}

        <button
          type="button"
          className="btn btn-info mt-1 mb-2"
          id="pbtn"
          onClick={renderInput}
        >
          +
        </button>
        <h2 className="form-signin-heading mb-1 mt-2">Certifications</h2>
        <div className="certy">
          <input
            type="text"
            className="form-control"
            id="firstinput"
            placeholder="Add Certification"
            required={true}
            autoFocus=""
            name="certy0"
            value={Data.certificates[0]}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mt-2"
            id="firstinput"
            placeholder="Add Certification"
            required={true}
            autoFocus=""
            name="certy1"
            value={Data.certificates[1]}
            onChange={handleChange}
          />
        </div>
        <div className="achievements">
          <textarea
            rows="3"
            className="form-control"
            id="about"
            placeholder="Add Achievement"
            required={true}
            autoFocus=""
            name="achievement"
            onChange={handleChange}
            value={Data.achievement}
          />
        </div>
      </div>
    </>
  );
}

export default Section2;
