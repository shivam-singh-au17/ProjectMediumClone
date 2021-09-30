import React from "react";
import "./NavBar.css";
import logo from "../Image/logo.svg";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/ourstory",
    title: "Our story",
  },
  {
    to: "/membership",
    title: "Membership",
  },
  {
    to: "/write",
    title: "Write",
  },
  {
    to: "/login",
    title: "Sign in/Sign up",
  },
];

function NavBar() {
  return (
    <>
      <div className="navBarSection">
        <div className="navBar">
          <div className="leftNavSec">
            <Link className="linkunderline" to={links[0].to}>
              <img src={logo} alt="Logo" />
              <span>Medium</span>
            </Link>
          </div>
          <div className="rightNavSec">
            <span className="rightNavSpan">
              <Link className="linktext" to={links[1].to}>
                {links[1].title}
              </Link>
            </span>
            <span className="rightNavSpan">
              <Link className="linktext" to={links[2].to}>
                {links[2].title}
              </Link>
            </span>
            <span className="rightNavSpan">
              <Link className="linktext" to={links[3].to}>
                {links[3].title}
              </Link>
            </span>

            <span className="navSign">
              <Link className="linkunderline" to={links[4].to}>
                <span>Sign in /Sign up</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export { NavBar };
