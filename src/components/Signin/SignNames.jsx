import React from 'react';
import signinData from './signinData.json';
import './SignNames.css'

export const SignNames = () => {
    return (
        <div>
            {signinData.map((item) => 
            <div className="name-box-outer">
                <div key={item.id} className="name-box">
                        <div className="name-box-image">
                            <img src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300" />
                        </div>
                        <div className="name-box-content">
                            <div className="name-box-content-one">{item.name}</div>
                            <div className="name-box-content-two">{item.email}</div>
                        </div>
                </div>
            </div>
            )}
        </div>
    )
}
