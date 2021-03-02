import React from "react";

function Contact() {

    return (
        <>
            <div className="container-fluid d-md-none row contact-sm">
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <h2 id="contact" className="col-12 d-flex justify-content-center">Contact Me</h2>
                <div className="pads col-xs-0 col-sm-0 col-12"></div>
                <section className="col-12 avatar-s">
                    <a href="https://github.com/gcvarela21" target="_blank" rel="noopener noreferrer">
                        <img id="avatar-s" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie_GV.png?raw=true"
                            alt="an outdoor selfie of Gloria Varela" />
                    </a>
                </section>
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <div className="col-12">
                    <p className="d-flex justify-content-center">714.399.6401</p>
                    <p className="d-flex justify-content-center">varela_gloria@yahoo.com</p>
                    <p className="d-flex justify-content-center">Alameda, CA</p>
                </div>
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <h3 className="navbar-brand d-flex justify-content-center">LET'S COLLABORATE</h3>
                <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                <div className="col-12 d-flex justify-content-center">
                    <iframe className="d-flex justify-content-center"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfcsV3xEWhQqgUgozCfUYfoA7HrJpbWYGMvDZ2md74TkPhRTA/viewform?embedded=true"
                        width="640" height="1320" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>

            <div className="cointainer-fluid d-none d-md-inline row contact-sm pady">
                <div className="col-6">
                    <div className="row">
                        <h2 id="contact" className="h2c col-12 d-flex justify-content-center green ">Contact</h2>

                        <section id="cont" className="col-12 avatar">
                            <a href="https://github.com/gcvarela21" target="_blank" rel="noopener noreferrer">
                                <img id="avatar" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie_GV.png?raw=true"
                                    alt="an outdoor selfie of Gloria Varela" /></a>
                        </section>
                        <div id="ph" className="col-12">
                            <p id="pg" className="d-flex justify-content-center">714.399.6401</p>
                            <p id="pg" className="d-flex justify-content-center">varela_gloria@yahoo.com</p>
                            <p id="pg" className="d-flex justify-content-center">Alameda, CA</p>
                        </div>

                        <h2 id="" className="h2c col-12 d-flex justify-content-center green">About</h2>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-1"></div>
                                <div id="about-lg" className="col-10">
                                    <p id="p">Throughout my life, I’ve always been a hands-on person who is constantly learning new skills. </p>

                                    <p id="p"> While studying Visual Arts in Southern California I worked part-time as a handyman and cable technician. </p>

                                    <p id="p"> Although these roles were vastly different from what I was studying in school, I learned a lot about problem-solving, creative thinking, and troubleshooting.</p>

                                    <p id="p">These became the building blocks that sparked a curiosity for me to move into digital design.</p>

                                    <p id="p">I transferred to Cal State East Bay where I continued my studies in UX Design. The various classNamees I took there opened me up to more opportunities to learn new programs and tools. </p>

                                    <p id="p">Upon Completing my course work for my BFA, in UX Design Fall of 2020, I decided to further my skills and training at the University of California Berkeley’s Full Stack Web Developer Bootcamp. </p>

                                    <p id="p">As a Future Digital Designer, I’ve found a place where I can balance both my love for visual design with the problem-solving skills needed front and back-end web developement and design.</p>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <h2 id="" className="h2c d-flex justify-content-center padz green">Let's Collaborate</h2>
                        <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                        <div className="col-12 d-flex justify-content-center">
                            <iframe className="d-flex justify-content-center"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfcsV3xEWhQqgUgozCfUYfoA7HrJpbWYGMvDZ2md74TkPhRTA/viewform?embedded=true"
                                width="640" height="1320" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
                <div className="padz col-xs-0 col-sm-0 col-12 "></div>
                <div className="padz col-xs-0 col-sm-0 col-12 "></div>
            </div>
        </>
    );
}

export default Contact;