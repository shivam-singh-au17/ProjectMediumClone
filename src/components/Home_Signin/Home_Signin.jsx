import React from 'react';
import './Home_Signin.css'
import { SignNav } from './SignNav';
import { SignSidebar } from './SignSidebar';

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
                            <div><div>FOLLOWING</div></div>
                            <div><div>TRENDING</div></div>
                            <div><div>RECOMMENDED FOR YOU</div></div>
                        </div>

                        <hr className="hr-left-sidebar"/>

                    </div>
                    <SignSidebar />
                </div>
            </div>
        </div>
    )
}
