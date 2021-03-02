import React from "react";

function About() {

    return(
    <>
    <div class="container-fluid d-md-none">
    <div class="row home-sm">
      <div class="pads col-xs-0 col-sm-0 col-12 "></div>

      <div class="col-12 decor-n d-flex justify-content-center">
        <a href="https://drive.google.com/file/d/1o0BVEWqNAt_cpm6CbKdZB7ro53o8Xgxm/view?usp=sharing" target="_blank"><i
            class="awesome fas fa-file-pdf"></i></a>
        <a href="https://www.glo.digital" target="_blank"><i class="awesome fas fa-globe-americas"></i></a>
        <a href="https://www.linkedin.com/in/glovarela" target="_blank"><i class="awesome fab fa-linkedin"></i></a>
        <a href="https://github.com/gcvarela21" target="_blank"><i class="awesome fab fa-github"></i></a>
        <a href="https://www.instagram.com/glo.digital.ig/" target="_blank"><i
            class="awesome fab fa-instagram-square"></i></a>
      </div>
      <div class="pads col-xs-0 col-sm-0 col-12"></div>
      <div class="pads col-xs-0 col-sm-0 col-12 "></div>
      <div class="col-12 avatar-s">
        <a href="https://github.com/gcvarela21" target="_blank">
          <img id="avatar-s" class="d-flex justify-content-center" src=""
            alt="an outdoor selfie image of Gloria Varela" />
            </a>
      </div>

      <div class="pads col-xs-0 col-sm-0 col-12"></div>
      <div class="col-12">
        <h1 id="title-s" class="d-flex justify-content-center">Versitle</h1>
        <h1 id="title-s" class="d-flex justify-content-center">Digital</h1>
        <h1 id="title-s" class="d-flex justify-content-center">Designer</h1>
      </div>
      <div class="pads col-xs-0 col-sm-0 col-12 "></div>

      <div class="col-12 d-flex justify-content-center"><button class="mo-btn-w">My Work</button></div>
      <div class="col-12 d-flex justify-content-center"><button class="mo-btn-c">Contact Me</button></div>
 
      <div class="pads col-xs-0 col-sm-0 col-12 "></div>
    </div>
    </div>

    <div class="cointainer-fluid d-none d-md-inline home-sm">
    <div class="row">
      <div class="pad-t"></div>
    </div>
    <div class="row ">

      <div class="col-1">
        <div class="row">
          <div class="col-12 ia-pad"></div>
          <div class="col-12 decor-n">
            <a class="d-flex justify-content-center side-i" href="https://www.linkedin.com/in/glovarela"
              target="_blank"><i class="awesome fab fa-linkedin"></i></a>
            <a class="d-flex justify-content-center side-i" href="https://github.com/gcvarela21" target="_blank"><i
                class="awesome fab fa-github"></i></a>
            <a class="d-flex justify-content-center side-i" href="https://www.glo.digital" target="_blank"><i
                class="awesome fas fa-globe-americas"></i></a>
            <a class="d-flex justify-content-center side-i" href="https://www.instagram.com/glo.digital.ig/"
              target="_blank"><i class="awesome fab fa-instagram-square"></i></a>
            <a id="scroll-txt-i" class="d-flex justify-content-center side-i"
              href="https://drive.google.com/file/d/1o0BVEWqNAt_cpm6CbKdZB7ro53o8Xgxm/view?usp=sharing"
              target="_blank"><i class="awesome fas fa-file-pdf"></i></a>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">S</p>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">C</p>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">R</p>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">O</p>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">L</p>
            <p id="scroll-txt" class="d-flex justify-content-center side-i">L</p>
            <p class="d-flex justify-content-center side-i"><i id="scroll-txt-p" class="awesome fas fa-arrow-down"></i>
            </p>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 av-pad"></div>
          <div id="home-i" class="col-12 side-i avatar">
            <a href="https://github.com/gcvarela21" target="_blank">
              <img id="avatar" class="d-flex justify-content-center" src=""
                alt="an outdoor selfie image of Gloria Varela" />
            </a>
          </div>
          <div class="col-12"></div>
        </div>
      </div>

      <div class="col-7">
        <h1 id="h1" class="d-flex justify-content-center">Versitle</h1>
        <h1 id="h1" class="d-flex justify-content-center">Digital</h1>
        <h1 id="h1" class="d-flex justify-content-center">Designer</h1>
        <div class="row">
          <div class="col-6 d-flex justify-content-end werk"><a href="#work"
              class="d-flex justify-content-center square_btn">My Projects</a></div>
          <div class="col-6 d-flex justify-content-start con"><a id="gr" href="#contact"
              class="d-flex justify-content-center square_btn2">Contact Me</a></div>
        </div>
      </div>

      <div class="padz col-xs-0 col-sm-0 col-12 "></div>
      
    </div>
    </div>
</>
    );
}

export default About;