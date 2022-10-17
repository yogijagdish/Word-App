import React from "react";
import { Link } from "react-router-dom";

// props stands for property and we can define a particular variable using props this helps in reuse of the components as well as helps to make the page dynamic with out reloading the site
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light'?'light':'dark'} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.primaryname}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.secondaryname}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.click}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {" "}
              Enable Dark Mode{" "}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// default props are used to pass the value when no props are passed in the app
Navbar.defaultProps = {
  primaryname: "enter the title here",
  secondaryname: "enter the navbar links here",
};
