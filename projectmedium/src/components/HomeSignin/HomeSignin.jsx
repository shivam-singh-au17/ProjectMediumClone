import React from "react";
import "./HomeSignin.css";
import { Recommended } from "./Recommended";
import { SignNav } from "./SignNav";
import { SignSidebar } from "./SignSidebar";
import { Link } from "react-router-dom";

export const HomeSignin = () => {
  return (
    <div>
      <SignNav />
      <div className="home-body">
        <div className="home-inner">
          <div className="home-inner-left">
            <div className="home-inner-left-one">
              <div className="home-inner-left-one-left">
                <div>YOUR TOPICS</div>
              </div>
              <div className="home-inner-left-one-right">
                <div>
                  <div>UX</div>
                </div>
                <div>
                  <div>Visual Design</div>
                </div>
                <div>
                  <div>UI</div>
                </div>
                <div>
                  <div>Feminism</div>
                </div>
                <div>
                  <div>Travel</div>
                </div>
                <div>
                  <div>Immigration</div>
                </div>
              </div>
            </div>


            <div className="home-inner-left-two">
              <div>
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "#757575" }}
                    to="/home"
                  >
                    FOLLOWING
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "#757575" }}
                    to="/home"
                  >
                    TRENDING
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "#757575" }}
                    to="/home"
                  >
                    RECOMMENDED FOR YOU
                  </Link>
                </div>
              </div>
            </div>

            
            <hr className="hr-left-sidebar" />
            <Recommended />
          </div>
          <SignSidebar />
        </div>
      </div>
    </div>
  );
};
