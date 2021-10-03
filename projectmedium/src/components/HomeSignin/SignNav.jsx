import React, {useContext} from "react";
import "./SignNav.css";
import logo from "../Image/logo.svg";
import save from "./images/Vector.jpg";
import ringing from "./images/bell.png";
import search from "./images/search.png";
import addPlus from "./images/add.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../Contexts/ProfileContext";

const links = [
  {
    to: "/home",
    title: "Home",
  },
  {
    to: "/home/edit",
    title: "Our story",
  },
  {
    to: "/home/list",
    title: "Saved",
  },
];

export const SignNav = () => {

  const {name, profileimage, email} = useContext(AppContext)

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
          <Link to={links[2].to}>
            <div className="navbar-inner-right-saved">
              <img alt="" src={save} />
            </div>
          </Link>
          <div className="navbar-inner-right-bell">
            <span
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={ringing}
              />
            </span>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Notifications
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" style={{ fontWeight: "500" }}>
                    You're all caught up.
                    <span
                      style={{
                        float: "right",
                        color: "#1a8917",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      Your status
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-inner-right-upgrade">
            <div>Upgrade</div>
          </div>
          <div className="navbar-inner-right-image">
            <span
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                className="profile"
                src={profileimage}
                alt=""
              />
            </span>

            <div
              style={{ width: "300px" }}
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <div id="offcanvasRightLabel" className="d-flex p-1">
                  <img
                    className="profile myImg"
                    src={profileimage}
                    alt=""
                  />
                  <div className="ms-3">
                    <div className="fs-5">{name}</div>
                    <div className="">{email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body myOptionsSec">
                <div className="LinkOneBox">
                  <div className="myAllLinkOpt" id="myFirst">
                    <Link className="myLinkOne" to={`/home/edit`}>
                      Write a story
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Stories
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Stats
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Design your profile
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Settings
                    </Link>
                  </div>
                </div>
                <div className="LinkOneBox">
                  <div className="myAllLinkOpt" id="myFirst2">
                    <Link className="myLinkOne" to={``}>
                      Lists
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Publications
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Control your recommendations
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Medium Partner Program
                    </Link>
                  </div>
                </div>
                <div className="LinkOneBox">
                  <div className="myAllLinkOpt" id="myFirst2">
                    <Link className="myLinkOne memberBtn" to={``}>
                      Become a member
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={``}>
                      Help
                    </Link>
                  </div>
                  <div className="myAllLinkOpt">
                    <Link className="myLinkOne" to={`/`}>
                      Sign out
                    </Link>
                  </div>
                </div>
                <div className="LinkOneBox">
                  <div className="myFlexBoxLink">
                    <div className="myAllLinkOpt" id="myFirst2">
                      <Link className="myLinkOne" to={``}>
                        Privacy
                      </Link>
                    </div>
                    <div className="myAllLinkOpt ms-3">
                      <Link className="myLinkOne footerLink" to={``}>
                        Terms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
