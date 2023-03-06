import React from "react";

const Resume_2 = React.forwardRef((props, ref) => {
    // console.log("Props in Resume_2 : ", props);
    return (
        <div className="resume_2 container border border-dark" ref={ref} >
            <div className="row">
                <div className="col-md-12">
                    <div className="profile">
                        <center>
                            <h2 className="name mt-2 mb-0">{props.data.name}</h2>
                            <a href={`tel:${props.data.number}`} target="_blank"><i className="bi bi-telephone-fill"> {props.data.number}</i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={`mailto:${props.data.email}`} target="_blank"><i className="bi bi-envelope-fill"></i> {props.data.email}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="bi bi-geo-alt-fill"></i> {props.data.address}&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <a href={`${props.data.portfolio}`} target="_blank"><i className="bi bi-link"></i> {props.data.portfolio}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={`https://github.com/${props.data.github}`} target="_blank"><i className="bi bi-github">{props.data.github}</i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </center>
                        <hr className="mb-0 mt-0" />
                        <div className="education mb-0">
                            <h2 className="mb-0">Education</h2>
                            <div className="school">
                                <h4>{props.data.cname}</h4>
                                <p className="institution pb-0 mb-0">CPI: {props.data.cpi}</p>
                                <p className="date">{props.data.collegesdate} - {props.data.collegeedate}</p>
                            </div>
                        </div>
                        <h2>Skills</h2>
                        <ul className="skills d-flex justify-content-between align-items-center mb-0">
                            {props.data.skills && props.data.skills.map((skill) => {
                                return <span className="skill">{skill + "  "}</span>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="summary">
                        <h2>About Me</h2>
                        <p>
                            {props.data.about}
                        </p>
                    </div>
                    <div className="experience">
                        <h2>Experience</h2>
                        {
                            props.data.experience && props.data.experience.map((exp) => {
                                return (
                                    <div className="job">
                                        <h4>{exp.position}</h4>
                                        <p className="date pb-0 mb-0">{exp.sdate} - {exp.edate}</p>
                                        <p className="institution "> {exp.company}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="experience">
                        <h2>Project</h2>
                        {
                            props.data.projects && props.data.projects.map((project) => {
                                return (
                                    <div className="job">
                                        <div className="d-flex justify-content-between flex-row">
                                            <h4>{project.title}</h4>
                                            <u><a className="institution" target="_blank" href={`${project.link}`} > Link</a></u>
                                        </div>
                                        <p className="date pb-0 mb-0">{project.description}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/*  Render Certificates based on Props */}
                    <div className="certifications">
                        <h2>Certifications</h2>
                        <ul className="">
                            {props.data.certificates && props.data.certificates.map((certy) => {
                                return <li className="certificates">{certy + "  "}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="achievements">
                        <h2>Achievements</h2>
                        <ul className="">
                            {props.data.achievements && props.data.achievements.map((ach) => {
                                return <li className="achievement">{ach + "  "}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
});
export default Resume_2;
