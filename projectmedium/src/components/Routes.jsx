import React from "react";
import { Route, Switch } from "react-router";
import { NavBar } from "./NavBar/NavBar";
import { Home } from "./Home/Home";
import { HomeSignin } from "./HomeSignin/HomeSignin";
import { Write } from "./Write/Write";
import { OurStory } from "./OurStory/OurStory";
import { ShowBlog } from "./ShowBlog/ShowBlog";
import { Signup } from "./Signup/Signup";
import error from "./Image/error.png";
import "./Routes.css";
import AddData from "./AddData/AddData";
import { MemberShip } from "./Membership/MemberShip";
import { StoryPre } from "./StoryPreview/StoryPre";
// import { Trending } from './HomeSignin/Trending';
// import {Following } from './HomeSignin/Following';
// import {Recommended} from './HomeSignin/Recommended';

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
        </Route>
        <Route path="/blog/:userId" exact>
          <NavBar />
          <ShowBlog />
        </Route>
        <Route path="/ourstory" exact>
          <NavBar />
          <OurStory />
        </Route>
        <Route path="/membership" exact>
          <NavBar />
          <MemberShip />
        </Route>
        <Route path="/write" exact>
          <NavBar />
          <Write />
        </Route>
        <Route path="/login" exact>
          <NavBar />
          <Signup />
        </Route>
        <Route path="/home" exact>
          <HomeSignin />
        </Route>
        <Route path="/home/edit" exact>
          <AddData />
        </Route>
        <Route path="/home/edit/create" exact>
          <StoryPre />
        </Route>

        {/* <Route path="/home/following" exact>
          <Trending />
        </Route>
        <Route path="/home/trending" exact>
          <Following />
        </Route>
        <Route path="/home/recommended" exact>
          <Recommended />
        </Route> */}

        <Route>
          <div className="showError">
            <div className="errorSection">
              <div className="leftErrorImg">
                <img src={error} alt="" />
              </div>
              <div className="rightRror">
                <p className="pageNotFound">PAGE NOT FOUND</p>
                <p className="notFound">404</p>
                <p className="notFoundTxt">Out of nothing, something.</p>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
