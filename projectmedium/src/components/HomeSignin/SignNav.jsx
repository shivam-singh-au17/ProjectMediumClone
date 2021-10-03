import React from "react";
import "./SignNav.css";
import logo from "../Image/logo.svg";
import save from "./images/Vector.jpg";
import ringing from "./images/bell.png";
import search from "../Image/search.png";
import addPlus from "./images/add.png";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/home",
    title: "Home",
  },
  {
    to: "/home/edit",
    title: "Our story",
  },
];

export const SignNav = () => {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <Link to={links[0].to} style={{ textDecoration: "none" }}>
          <div className="navbar-inner-left">
            <div className="navbar-inner-left-image">
              <img alt="" src={logo} />
            </div>
            <div className="navbar-inner-left-text">Medium</div>
          </div>
        </Link>
        <div className="navbar-inner-right">
          <Link to={links[1].to}>
            <div className="navbar-inner-right-add">
              <img alt="" src={addPlus} />
            </div>
          </Link>
          <div className="navbar-inner-right-search">
            <img alt="" src={search} />
          </div>
          <div className="navbar-inner-right-saved">
            <img alt="" src={save} />
          </div>
          <div className="navbar-inner-right-bell">
            <img alt="" src={ringing} />
          </div>
          <div className="navbar-inner-right-upgrade">
            <div>Upgrade</div>
          </div>
          <div className="navbar-inner-right-image">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/a-/AOh14GiU9Lq96z4H6aK2POZLJmo8pfmaV6ItuChBsjkOGv0=s96-c"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
