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
];

function NavBar() {
  const {handleChangeTheme } = useContext(ThemeContexts);

  return (
    <>
      <div className="navBarSection2">
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
        </div>
      </div>
    </>
  );
}

export { NavBar };
