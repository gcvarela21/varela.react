import React from "react";

function About() {

    return (
        <>
            <div className="container-fluid d-md-none row">
                <h2 id="" className="h2c col-12 d-flex justify-content-center green">About</h2>

                <div className="col-12 avatar-s">
                        <Link to={"/about"} >
                            <a>
                                <img id="avatar-s" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie2.png?raw=true"
                                    alt="an outdoor selfie of Gloria Varela" />
                            </a>
                        </ Link >
                    </div>

                <div id="about-lg" className="col-12">
                    <p id="p">Throughout my life, I’ve always been a hands-on person who is constantly learning new skills. </p>

                    <p id="p"> While studying Visual Arts in Southern California I worked part-time as a handyman and cable technician. </p>

                    <p id="p"> Although these roles were vastly different from what I was studying in school, I learned a lot about problem-solving, creative thinking, and troubleshooting.</p>

                    <p id="p">These became the building blocks that sparked a curiosity for me to move into digital design.</p>

                    <p id="p">I transferred to Cal State East Bay where I continued my studies in UX Design. The various classNamees I took there opened me up to more opportunities to learn new programs and tools. </p>

                    <p id="p">Upon Completing my course work for my BFA, in UX Design Fall of 2020, I decided to further my skills and training at the University of California Berkeley’s Full Stack Web Developer Bootcamp. </p>

                    <p id="p">As a Future Digital Designer, I’ve found a place where I can balance both my love for visual design with the problem-solving skills needed front and back-end web developement and design.</p>
                </div>
            </div>

            <div className="cointainer-fluid d-none d-md-inline row">
                <h2 id="" className="h2c col-12 d-flex justify-content-center green">About</h2>
                <div className="col-4"></div>
                <div className="col-8">
                    <div className="row">
                    <section id="cont" className="col-12 avatar">
                            <a href="https://github.com/gcvarela21" target="_blank" rel="noopener noreferrer">
                                <img id="avatar" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie_GV.png?raw=true"
                                    alt="an outdoor selfie of Gloria Varela" /></a>
                        </section>

                        <div id="about-lg" className="col-12">
                            <p id="p">Throughout my life, I’ve always been a hands-on person who is constantly learning new skills. </p>

                            <p id="p"> While studying Visual Arts in Southern California I worked part-time as a handyman and cable technician. </p>

                            <p id="p"> Although these roles were vastly different from what I was studying in school, I learned a lot about problem-solving, creative thinking, and troubleshooting.</p>

                            <p id="p">These became the building blocks that sparked a curiosity for me to move into digital design.</p>

                            <p id="p">I transferred to Cal State East Bay where I continued my studies in UX Design. The various classNamees I took there opened me up to more opportunities to learn new programs and tools. </p>

                            <p id="p">Upon Completing my course work for my BFA, in UX Design Fall of 2020, I decided to further my skills and training at the University of California Berkeley’s Full Stack Web Developer Bootcamp. </p>

                            <p id="p">As a Future Digital Designer, I’ve found a place where I can balance both my love for visual design with the problem-solving skills needed front and back-end web developement and design.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>

        </>
    );
}

export default About;