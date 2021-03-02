import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return(
        <nav className="row">
        <div id="lineUp" className="navy col-12 d-flex justify-content-center">
          <Link to={"/"}>
          <a id="lineSpace" className="navbar-brand">Home</a>
          </Link>
          <Link to={"/work"}>
          <a id="lineSpace" className="navbar-brand">My Work</a>
          </Link>
          <Link to={"/about"}>
          <a id="lineSpace" className="navbar-brand">About</a>
          </Link>
          <Link to={"/contact"}>
          <a id="lineSpace" className="navbar-brand">Contact</a>
          </Link>
        </div>
      </nav>
    );
}

export default Nav;