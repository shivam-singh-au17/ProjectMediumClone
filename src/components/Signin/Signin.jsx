import React from 'react'
import './Signin.css'
import { SignNames } from './SignNames'

export const Signin = () => {
    return (
        <div>
            <div className="signin">
                <div className="signin-top">
                    <div className="signup-google-text">
                        <div className="signup-google-image">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" />
                        </div>
                        <div className="signup-google-content"><div>Continue with Google</div></div>
                    </div>
                </div>

                <div className="sign-account">
                    Choose an account 
                </div>

                <div className="signin-continue">
                    to continue to <span> Medium</span>
                </div>

                <div className="signin-names">
                    <SignNames />
                </div>

                <div className="signin-another-accnt">
                    <div className="signin-another-accnt-image">
                        <img src="https://e7.pngegg.com/pngimages/717/24/png-clipart-computer-icons-user-profile-user-account-avatar-heroes-silhouette-thumbnail.png" />
                    </div>
                    <div className="signin-another-accnt-content">
                        Use another account
                    </div>
                </div>

                <div className="signin-footer">
                    To continue, Google will share you name, email address,
                    language preference, and profile picture with Medium.
                    Before using this app, you can review Medium’s
                    <span> privacy policy</span> and <span> terms of service.</span>
                </div>


            </div>

            <div className="signin-last">
                    <div className="signin-last-one">English (United States)</div>
                    <div className="signin-last-two">
                        <div>Help</div>
                        <div>Privacy</div>
                        <div>Terms</div>
                    </div>
            </div>

        </div>
    )
}
