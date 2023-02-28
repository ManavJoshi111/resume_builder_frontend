import React from "react";
import "../Styles/resume.css";

const Resume = React.forwardRef((props, ref) => {
  console.log(props.data);
  return (
    <>
      <div className="resume" ref={ref} id="print-content">
        <div className="resume_left">
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold mt-4">{props.data.name}</p>
              </div>
              <ul className="p-0">
                {props.data.email && (
                  <li className="data"><i class="bi bi-envelope-fill">&nbsp; &nbsp;{props.data.email}</i></li>
                )}
                {
                  props.data.contact && (
                    <li>
                      <i class="bi bi-telephone-fill text-light"></i>
                      &nbsp;&nbsp;{props.data.contact}
                    </li>
                  )
                }
                {
                  props.data.address && (
                    <li className="data"><i class="bi bi-geo-alt-fill">&nbsp; &nbsp;{props.data.address}</i></li>
                  )
                }
                {
                  props.data.portfolio && (
                    <li className="data"><i class="bi bi-link">&nbsp; &nbsp;<a href={"https://" + props.data.portfolio} target="_blank">{props.data.portfolio}</a></i></li>
                  )
                }
                {
                  props.data.github && (
                    <li className="data">
                      <i class="bi bi-github">&nbsp;&nbsp;<a href={"https://github.com/" + props.data.github} target="_blamnk">{props.data.github}</a></i>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Skills</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    <p className="semi-bold">
                      {props.data.skills && props.data.skills.map((skill) => {
                        return <span className="skill">{skill + "  "}</span>;
                      })}
                    </p>
                  </div>
                </li>
              </ul>
              <div className="title">
                <p className="bold">Certifications</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    <p className="semi-bold">
                      {props.data.certificates && props.data.certificates.map((certy) => {
                        return <span className="skill">{certy + "  "}<br /></span>;
                      })}
                    </p>
                  </div>
                </li>
              </ul>
              <div className="title">
                <p className="bold">Achievements</p>
              </div>
              <p className="semi-bold">{props.data.achievement}</p>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About</p>
            </div>
            <p>{props.data.about}</p>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">
                  {props.data.collegesdate} — {props.data.collegeedate}
                </div>
                <div className="info">
                  <p className="semi-bold">{props.data.cname}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Project</p>
            </div>
            <ul>
              <li>
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="semi-bold">{props.data.ptitle1}</p>
                    {props.data.plink1 &&
                      <p className="semi-bold td-underline"><a className="text-dark" href={props.data.plink1} target="_blank" ><u>Link</u></a></p>}
                  </div>
                  <p>{props.data.pdesc1}</p>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="semi-bold">{props.data.ptitle2}</p>
                    {props.data.plink2 &&
                      <p className="semi-bold td-underline"><a className="text-dark" href={props.data.plink2} target="_blank" ><u>Link</u></a></p>}
                  </div>
                  <p>{props.data.pdesc2}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Experience</p>
            </div>
            <ul>
              <li>
                <div className="date">
                  {props.data.sdate} — {props.data.edate}
                </div>
                <div className="info">
                  <p className="semi-bold">{props.data.jtitle}</p>
                  <p>{props.data.jdesc}</p>
                </div>
              </li>
            </ul>
          </div>
        </div >
      </div >
    </>
  );
});

export default Resume;
