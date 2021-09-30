import React from "react";
import { Route, Switch } from "react-router";
import { NavBar } from "./NavBar/NavBar";
import { Home } from "./Home/Home";
import { Write } from "./Write/Write";
import { OurStory } from "./OurStory/OurStory";

function Routes() {
  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  };

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ourstory">
          <OurStory />
        </Route>
        <Route path="/membership">
          <Home />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/login">
          <Home />
        </Route>
        <Route>
          <div style={myStyle}>
            <div className="display-1 text-danger">
              YOUR URL IS WRONG <br />
              <span className="fw-bold">404</span> PAGE IS NOT FOUND
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
