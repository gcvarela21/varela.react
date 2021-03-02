import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return(
        <header className="row">
        <nav className="navy col-12 d-flex justify-content-center">
          <Link to={"/"}>
          <a id="brand" className="navbar-brand d-flex justify-content-center">V A R E L A . D E S
            I G N</a>
          </Link>
        </nav>
      </header>
    );
}

export default Header;