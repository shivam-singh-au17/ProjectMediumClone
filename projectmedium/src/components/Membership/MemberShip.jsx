import React from "react";
import "./MemberShip.css";
import { NavBar } from "./NavBar";

const MemberShip = () => {
  return (
    <>
      <NavBar />
      <div className="member">
        <div className="m-first">
          <h1>
            <span>Fuel great thinking.</span>
          </h1>
          <p>
            <span className="fs-5">
              Upgrade to membership for $5/month or $50/year.
            </span>
          </p>
          <button className="m-first-button"> Subscribe today</button>
        </div>
        {/* second div  */}
        <div className="m-second">
          <div className="m-second-mid">
            <div className="m-second-1">
              <h1>
                <span>Get unlimited access to every story</span>
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
                alt=""
              />
              <p>
                Read any article in our entire library across all your devices —
                with no paywalls, story limits or ads.
              </p>
            </div>
            <div className="m-second-2">
              <h1>
                <span>Support the voices you want to hear more from.</span>
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
                alt=""
              />
              <p>
                A portion of your membership will directly support the writers
                and thinkers you read the most.
              </p>
            </div>
          </div>
        </div>
        {/* third div */}

        <div className="m-third">
          <h1>
            <span>Why I'm a Medium Member...</span>
          </h1>
          <div
            style={{ width: "60%", margin: "auto" }}
            id="carouselExampleControls"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ width: "100%", height:"230px" }}
                  src="mb1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "100%", height:"230px" }}
                  src="mb2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "100%", height:"230px" }}
                  src="mb3.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* forth-div */}
        <div className="m-four">
          <h1>
            <span>
              Take your mind <br />
              in new directions.
            </span>
          </h1>
          <button>Become a member</button>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="footeMember">
        <span className="ms-2">
          <u>About</u>
        </span>
        <span className="mx-3">
          <u>Terms</u>
        </span>
        <span>
          <u>Privacy</u>
        </span>
        <span className="mx-3">
          <u>Help</u>
        </span>
      </div>
    </>
  );
};

export { MemberShip };
