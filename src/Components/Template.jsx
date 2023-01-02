import React from 'react'
import "../Styles/Template.css";
const Template = () => {
    return (
        // Create minimalistic resume template
        <>
            <div className="container w-75 border border-dark mt-4">
                <div className="text-center mt-1 resume_classes d-flex justify-content-center align-items-center flex-column">
                    <h1 className='display-5'>Manav Joshi</h1>
                    <p>Idar, Gujarat, India</p>
                    <p><a href="https://manavportfolio.netlify.app" target="_blank" className='text-dark'>Manav Portfolio</a></p>
                    <div className="social_handles d-flex">
                        <ul className='d-flex flex-row p-0'>
                            <li className="">Hackerrank</li>
                            <li className="mx-2">CodeChef</li>
                            <li className="mx-2">Leetcode</li>
                            <li className="mx-2">Github</li>
                        </ul>
                    </div>
                </div>
                <div className="education mt-3 p-0 m-0">
                    <h3 className="m-0">Education</h3>
                    <hr className='w-100 text-dark m-0 p-0' />
                    <div className="m-0 p-0 d-flex justify-content-between">
                        <h4>Birla Vishvakarma Mahavidyalaya</h4>
                        <p>2020-2024</p>
                    </div>
                    <h6>B.Tech (Computer Engineering)</h6>
                </div>
                <div className="skills mt-3 p-0 m-0">
                    <h3 className="m-0">Skills</h3>
                    <hr className='w-100 text-dark m-0 p-0' />
                    <div className="container d-flex flex-row">
                        {/* <p className='fw-bold'>Programming Languages : </p> */}
                        <ul className='p-0 m-0 d-flex flex-row skills_ul'>
                            <li>C/C++</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className="container d-flex flex-row">
                        <ul className='p-0 m-0 d-flex flex-row skills_ul'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="projects mt-3 p-0 m-0">
                    <h3 className="m-0">Projects</h3>
                    <hr className='w-100 text-dark m-0 p-0' />
                    <div className="m-0 p-0 d-flex justify-content-between flex-column">
                        <h5>Spotified - A music player web-app | <u className=''>Link</u></h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi et possimus, eos ad perferendis sunt accusantium velit consequuntur nostrum pariatur minus! Velit, incidunt vel! Animi temporibus quibusdam veritatis. Voluptatibus.</p>
                    </div>
                    <div className="m-0 p-0 d-flex justify-content-between flex-column">
                        <h5>Spotified - A music player web-app | <u className=''>Link</u></h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi et possimus, eos ad perferendis sunt accusantium velit consequuntur nostrum pariatur minus! Velit, incidunt vel! Animi temporibus quibusdam veritatis. Voluptatibus.</p>
                    </div>
                </div>
                <div className="experience mt-3 p-0 m-0">
                    <h3 className="m-0">Experience</h3>
                    <hr className='w-100 text-dark m-0 p-0' />
                    <div className="m-0 p-0 d-flex justify-content-between flex-column">
                        <div className="d-flex justify-content-between flex-row">
                            <h5>Thinkbeat Solutions</h5>
                            <p>Jul 2020 - Jun 2020</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi et possimus, eos ad perferendis sunt accusantium velit consequuntur nostrum pariatur minus! Velit, incidunt vel! Animi temporibus quibusdam veritatis. Voluptatibus.</p>
                    </div>
                </div>
                <div className="skills mt-3 p-0 m-0">
                    <h3 className="m-0">Certifications</h3>
                    <hr className='w-100 text-dark m-0 p-0' />
                    <div className="container d-flex flex-row">
                        <ul className='p-0 m-0 d-flex flex-column skills_ul'>
                            <li><h6>C/C++</h6></li>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, labore!</p>
                        </ul>
                    </div>
                    <div className="container d-flex flex-row">
                        <ul className='p-0 m-0 d-flex flex-column skills_ul'>
                            <li><h6>C/C++</h6></li>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, labore!</p>
                        </ul>
                    </div>

                </div>
                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default Template;