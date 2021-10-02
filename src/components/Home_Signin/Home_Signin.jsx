import React from 'react';
import './Home_Signin.css'
import { Trending } from './Trending';
import {Following } from './Following';
import {Recommended} from './Recommended';
import { SignNav } from './SignNav';
import { SignSidebar } from './SignSidebar';
import {Link, Route, Switch} from 'react-router-dom';

export const Home_Signin = () => {
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
                                <div><div>UX</div></div>
                                <div><div>Visual Design</div></div>
                                <div><div>UI</div></div>
                                <div><div>Feminism</div></div>
                                <div><div>Travel</div></div>
                                <div><div>Immigration</div></div>
                                
                            </div>
                        </div>

                        <div className="home-inner-left-two">
                            <div><div><Link style={{textDecoration: 'none', color: "#757575"}} to="/following">FOLLOWING</Link></div></div>
                            <div><div><Link style={{textDecoration: 'none', color: "#757575"}} to="/trending">TRENDING</Link></div></div>
                            <div><div><Link style={{textDecoration: 'none', color: "#757575"}} to="/recommended">RECOMMENDED FOR YOU</Link></div></div>
                        </div>

                        <hr className="hr-left-sidebar"/>
                    <Switch>
                        <Route path="/trending" exact>
                            <Trending />
                        </Route>
                        <Route path="/following" exact>
                            <Following />
                        </Route>
                        <Route path="/recommended" exact>
                            <Recommended />
                        </Route>
                    </Switch>
                    </div>
                    <SignSidebar />
                </div>
            </div>
        </div>
    )
}
