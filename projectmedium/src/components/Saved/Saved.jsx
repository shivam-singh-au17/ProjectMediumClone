import React from "react";
import { SignNav } from "../HomeSignin/SignNav";
import "./Saved.css";
import { Link, Route, Switch } from "react-router-dom";
import { SavedItems } from "./SavedItems/SavedItems";
import { Highlights } from "./Highlights/Highlights";
import { Recent } from "./Recent/Recent";

export const Saved = () => {
  return (
    <div>
      <SignNav />
      <div className="saved-body">
        <div className="saved-list">Your lists</div>

        <div className="saved-button">
          <div>
            <Link
              style={{ textDecoration: "none", color: "#292929" }}
              to="/home/list/saveditems"
            >
              Saved
            </Link>
          </div>
          <div className="mx-3">
            <Link
              style={{ textDecoration: "none", color: "#292929" }}
              to="/home/list/highlights"
            >
              Highlights
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "#292929" }}
              to="/home/list/recent"
            >
              Recently Viewed
            </Link>
          </div>
        </div>

        <hr className="saved-hr" />

        <div>
          {/* <Switch> */}
            <SavedItems />
            <Route path="/home/list/saveditems" exact>
              <SavedItems />
            </Route>
            <Route path="/home/list/highlights" exact>
              <Highlights />
            </Route>
            <Route path="/home/list/recent" exact>
              <Recent />
            </Route>
          {/* </Switch> */}
        </div>
      </div>
    </div>
  );
};
