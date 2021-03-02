import React from "react";
import { Link } from "react-router-dom";

function Landing() {

    return (
        <>
            <div className="container-fluid d-md-none">
                <div className="row home-sm">
                    <div className="pads col-xs-0 col-sm-0 col-12 "></div>

                    <div className="col-12 decor-n d-flex justify-content-center">
                        <a href="https://drive.google.com/file/d/1o0BVEWqNAt_cpm6CbKdZB7ro53o8Xgxm/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i
                            className="awesome fas fa-file-pdf"></i></a>
                        <a href="https://www.glo.digital" target="_blank" rel="noopener noreferrer"><i className="awesome fas fa-globe-americas"></i></a>
                        <a href="https://www.linkedin.com/in/glovarela" target="_blank" rel="noopener noreferrer"><i className="awesome fab fa-linkedin"></i></a>
                        <a href="https://github.com/gcvarela21" target="_blank" rel="noopener noreferrer"><i className="awesome fab fa-github"></i></a>
                        <a href="https://www.instagram.com/glo.digital.ig/" target="_blank" rel="noopener noreferrer"><i
                            className="awesome fab fa-instagram-square"></i></a>
                    </div>
                    <div className="pads col-xs-0 col-sm-0 col-12"></div>
                    <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                    <div className="col-12 avatar-s">
                        <Link to={"/about"} >
                            <a>
                                <img id="avatar-s" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie2.png?raw=true"
                                    alt="an outdoor selfie of Gloria Varela" />
                            </a>
                        </ Link >
                    </div>

                    <div className="pads col-xs-0 col-sm-0 col-12"></div>
                    <div className="col-12">
                        <h1 id="title-s" className="d-flex justify-content-center">Versitle</h1>
                        <h1 id="title-s" className="d-flex justify-content-center">Digital</h1>
                        <h1 id="title-s" className="d-flex justify-content-center">Designer</h1>
                    </div>
                    <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                    <Link to={"/work"} >
                    <a><div className="col-12 d-flex justify-content-center"><button className="mo-btn-w">My Work</button></div></a>
                    </Link>
                    <Link to={"/contact"} >
                    <a><div className="col-12 d-flex justify-content-center"><button className="mo-btn-c">Contact Me</button></div></a>
                    </Link>
                    <div className="pads col-xs-0 col-sm-0 col-12 "></div>
                </div>
            </div>

            <div className="cointainer-fluid d-none d-md-inline home-sm">
                <div className="row">
                    <div className="pad-t"></div>
                </div>
                <div className="row ">

                    <div className="col-1">
                        <div className="row">
                            <div className="col-12 ia-pad"></div>
                            <div className="col-12 decor-n">
                                <a className="d-flex justify-content-center side-i" href="https://www.linkedin.com/in/glovarela"
                                    target="_blank" rel="noopener noreferrer"><i className="awesome fab fa-linkedin"></i></a>
                                <a className="d-flex justify-content-center side-i" href="https://github.com/gcvarela21" target="_blank" rel="noopener noreferrer"><i
                                    className="awesome fab fa-github"></i></a>
                                <a className="d-flex justify-content-center side-i" href="https://www.glo.digital" target="_blank" rel="noopener noreferrer"><i
                                    className="awesome fas fa-globe-americas"></i></a>
                                <a className="d-flex justify-content-center side-i" href="https://www.instagram.com/glo.digital.ig/"
                                    target="_blank" rel="noopener noreferrer"><i className="awesome fab fa-instagram-square"></i></a>
                                <a id="scroll-txt-i" className="d-flex justify-content-center side-i"
                                    href="https://drive.google.com/file/d/1o0BVEWqNAt_cpm6CbKdZB7ro53o8Xgxm/view?usp=sharing"
                                    target="_blank" rel="noopener noreferrer"><i className="awesome fas fa-file-pdf"></i></a>
                                <Link to={"/about"} >
                                    <a id="aboutme">
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">A</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">B</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">O</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">U</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">T</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i blkblk">.</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">M</p>
                                        <p id="scroll-txt" className="d-flex justify-content-center side-i">E</p>
                                        <p className="d-flex justify-content-center side-i"><i id="scroll-txt-p" className="awesome fas fa-arrow-down"></i>
                                        </p></a>
                                </ Link>

                            </div>
                            <div className="col-12"></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12 av-pad"></div>
                            <div id="home-i" className="col-12 side-i avatar">
                                <Link to={"/about"} >
                                    <a>
                                        <img id="avatar" className="d-flex justify-content-center" src="https://github.com/gcvarela21/varela.design/blob/main/img/selfie2.png?raw=true"
                                            alt="an outdoor selfie of Gloria Varela" />
                                    </a>
                                </ Link>
                            </div>
                            <div className="col-12"></div>
                        </div>
                    </div>

                    <div className="col-7">
                        <h1 id="h1" className="d-flex justify-content-center">Versitle</h1>
                        <h1 id="h1" className="d-flex justify-content-center">Digital</h1>
                        <h1 id="h1" className="d-flex justify-content-center">Designer</h1>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-end werk">
                                <Link to={"/work"} >
                                    <a id="gr" className="d-flex justify-content-center square_btn">My Projects</a>
                                </ Link>
                            </div>
                            <div className="col-6 d-flex justify-content-start con">
                                <Link to={"/contact"} >
                                    <a id="gr" className="d-flex justify-content-center square_btn2">Contact Me</a>
                                </ Link>
                            </div>
                        </div>
                    </div>

                    <div className="padz col-xs-0 col-sm-0 col-12 "></div>

                </div>
            </div>

        </>
    );
}

export default Landing;