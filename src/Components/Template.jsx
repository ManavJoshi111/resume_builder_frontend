import React from "react";

const Template = React.forwardRef((props, ref) => {
    return (
        <div className="resume_2 container border border-primary" ref={ref} >
            <div className="row">
                <div className="col-md-12">
                    <div className="profile">
                        <center>
                            <h2 className="name mt-2">{props.data.name}</h2>
                            <a href={`tel:${props.data.contact}`} target="_blank"><i className="bi bi-telephone-fill"> {props.data.contact}</i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={`mailto:${props.data.email}`} target="_blank"><i className="bi bi-envelope-fill"></i> {props.data.email}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="bi bi-geo-alt-fill"></i> {props.data.address}&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <a href={`${props.data.portfolio}`} target="_blank"><i className="bi bi-link"></i> {props.data.portfolio}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={`https://github.com/${props.data.github}`} target="_blank"><i className="bi bi-github">{props.data.github}</i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </center>
                        <hr />
                        <div className="education">
                            <h2>Education</h2>
                            <div className="school">
                                <h4>{props.data.cname}</h4>
                                <p className="institution pb-0 mb-0">{props.data.cname}</p>
                                <p className="date">{props.data.collegesdata} - {props.data.collegeedate}</p>
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
                        <div className="job">
                            <h4>{props.data.jtitle}</h4>
                            <p className="date mb-1">{props.data.sdate} - {props.data.edate}</p>
                            <ul className="">
                                <li>{props.data.jdesc}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience">
                        <h2>Project</h2>
                        <div className="job">
                            <div className="container d-flex justify-content-between flex-row">
                                <h4 className="mb-0">{props.data.ptitle1}</h4>
                                {props.data.plink1 &&
                                    <p className="semi-bold td-underlinemt-0 mb-0"><a className="text-dark" href={props.data.plink1} target="_blank" ><u>Link</u></a></p>}
                            </div>
                            <ul className=""><li>{props.data.pdesc1}</li></ul>
                        </div>
                        <div className="job">
                            <div className="container d-flex justify-content-between flex-row">
                                <h4 className="mb-0">{props.data.ptitle2}</h4>
                                {props.data.plink2 &&
                                    <p className="semi-bold td-underlinemt-0 mb-0"><a className="text-dark" href={props.data.plink2} target="_blank" ><u>Link</u></a></p>}
                            </div>
                            <ul className=""><li>{props.data.pdesc2}</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
});
export default Template;
