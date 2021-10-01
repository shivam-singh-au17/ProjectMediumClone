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
                    <div className="home-inner-left"></div>
                    <SignSidebar />
                </div>
            </div>
        </div>
    )
}
