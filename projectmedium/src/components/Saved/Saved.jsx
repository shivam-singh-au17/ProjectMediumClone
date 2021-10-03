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
              to="/home/list"
            >
              Saved
            </Link>
          </div>
          <div className="mx-3">
            <Link
              style={{ textDecoration: "none", color: "#292929" }}
              to="/home/list"
            >
              Highlights
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "#292929" }}
              to="/home/list"
            >
              Recently Viewed
            </Link>
          </div>
        </div>

        <hr className="saved-hr" />

        <Switch>
          <SavedItems />
          <Route path="/saved" exact>
            <SavedItems />
          </Route>
          <Route path="/highlights" exact>
            <Highlights />
          </Route>
          <Route path="/recent" exact>
            <Recent />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
