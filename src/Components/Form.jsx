import React, { useState } from "react";
import "../Styles/form.css";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Form = (props) => {
  const [page, setPage] = useState(0);
  const FormTitle = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Sectionn 4",
  ];
  return (
    <>
      <form className="form-signin ms-5 mt-2">
        <div className="progressBar"></div>
        <h2 className="form-signin-heading">{FormTitle[page]} </h2>
        {/* {PageDisplay()} */}
        <Section1 getName={props.getName} page={page} Info={props.Info} />
        <Section2 getName={props.getName} page={page} Info={props.Info} />
        <Section3 getName={props.getName} page={page} Info={props.Info} />
        <Section4 getName={props.getName} page={page} Info={props.Info} />
        <div class="d-flex justify-content-between">
          <button
            className="btn btn-primary mt-2"
            id="btn_prev"
            type="button"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-primary mt-2"
            id="btn_next"
            type="button"
            disabled={page === 3}
            onClick={(e) => {
              setPage((currPage) => currPage + 1);
              e.preventDefault();
            }}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
