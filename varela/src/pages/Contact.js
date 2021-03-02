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
            <div className="col-2"></div>
                <div className="col-8">
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
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-10">
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
                <div className="col-2"></div>
                <div className="padz col-xs-0 col-sm-0 col-12 "></div>
                <div className="padz col-xs-0 col-sm-0 col-12 "></div>
            </div>
        </>
    );
}

export default Contact;