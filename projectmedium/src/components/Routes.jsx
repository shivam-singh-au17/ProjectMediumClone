import React from "react";
import { Route, Switch } from "react-router";
import { NavBar } from "./NavBar/NavBar";
import { Home } from "./Home/Home";
import { Write } from "./Write/Write";
import { OurStory } from "./OurStory/OurStory";
import { ShowBlog } from "./ShowBlog/ShowBlog";
import { Signup } from "./Signup/Signup";


function Routes() {
  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
  };

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog/:userId" exact>
          <ShowBlog />
        </Route>
        <Route path="/ourstory" exact>
          <OurStory />
        </Route>
        <Route path="/membership" exact>
          <Home />
        </Route>
        <Route path="/write" exact>
          <Write />
        </Route>
        <Route path="/login" exact>
          <Signup />
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
