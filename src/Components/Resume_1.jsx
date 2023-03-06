import React from "react";
import "../Styles/resume.css";

const Resume_1 = React.forwardRef((props, ref) => {
  console.log(props.data);
  return (
    <>
      <div className="resume border border-dark" ref={ref} id="print-content">
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
                      &nbsp;&nbsp;{props.data.number}
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
              {props.data.achievements && props.data.achievements.map((ach) => {
                return (<p className="semi-bold">{ach + " "}</p>);
              })}
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
                  <p className="semi-bold mb-0">{props.data.cname}</p>
                  <p>CPI : {props.data.cpi}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Project</p>
            </div>
            {props.data.projects && props.data.projects.map((project) => {
              return (
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="semi-bold">{project.title}</p>
                    {/* <u><a className="institution" target="_blank" href={`${project.link}`} > Link</a></u> */}
                    {project.link &&
                      <p className="semi-bold td-underline"><a className="text-dark" href={project.link} target="_blank" ><u>Link</u></a></p>}
                  </div>
                  <p className="">{project.description}</p>
                </div>
              );
            })}
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Experience</p>
            </div>
            {
              props.data.experience && props.data.experience.map((exp) => {
                return (
                  <ul>
                    <li>
                      <div className="job">
                        {exp.sdate} — {exp.edate}
                      </div>
                      <div className="info">
                        <p className="semi-bold">{exp.position}</p>
                        <p>{exp.company}</p>
                        <p>{exp.desc}</p>
                      </div>
                    </li>
                  </ul>
                );
              })
            }
          </div>
        </div >
      </div >
    </>
  );
});

export default Resume_1;
