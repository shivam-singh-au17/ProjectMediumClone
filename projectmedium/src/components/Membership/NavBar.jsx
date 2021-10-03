import React from "react";
import "./NavBar.css";
import logo from "../Image/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContexts } from "../../Contexts/ThemeContexts";

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
  const { theme, handleChangeTheme } = useContext(ThemeContexts);

  return (
    <>
      <div className="navBarSection11" style={{ backgroundColor: `${theme}` }}>
        <div className="navBar">
          <div className="leftNavSec">
            <Link
              onClick={() => handleChangeTheme(1)}
              className="linkunderline"
              to={links[0].to}
            >
              <img src={logo} alt="Logo" />
              <span>Medium</span>
            </Link>
          </div>
          <div className="rightNavSec">
            <span className="rightNavSpan">
              <Link
                onClick={() => handleChangeTheme(2)}
                className="linktext"
                to={links[1].to}
              >
                {links[1].title}
              </Link>
            </span>
            <span className="rightNavSpan">
              <Link
                onClick={() => handleChangeTheme(3)}
                className="linktext"
                to={links[2].to}
              >
                {links[2].title}
              </Link>
            </span>
            <span className="rightNavSpan">
              <Link
                onClick={() => handleChangeTheme(4)}
                className="linktext"
                to={links[3].to}
              >
                {links[3].title}
              </Link>
            </span>

            <span className="navSign2">
              <Link
                onClick={() => handleChangeTheme(6)}
                className="linkunderline"
                to={links[4].to}
              >
                <span>Become a member</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export { NavBar };
