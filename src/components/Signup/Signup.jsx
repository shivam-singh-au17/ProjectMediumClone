import React from 'react';
import './Signup.css';

export const Signup = () => {
    return (
        <div>
            <div className="signup-box">
                <div className="signup-title">
                    Welcome to Medium
                </div>
                <div className="signup-google">
                    <div className="signup-google-text">
                        <div className="signup-google-image">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" />
                        </div>
                        <div className="signup-google-content"><div>Continue with Google</div></div>
                    </div>
                </div>

                <div className="signup-twitter">
                    <div className="signup-google-text">
                        <div className="signup-google-image">
                            <img src="https://authy.com/wp-content/uploads/Twitter-Logo.png" />
                        </div>
                        <div className="signup-google-content"><div>Continue with Twitter</div></div>
                    </div>
                </div>

                <div className="signup-twitter">
                    <div className="signup-google-text">
                        <div className="signup-google-image">
                            <img src="https://www.freepnglogos.com/uploads/email-logo-png-27.png" />
                        </div>
                        <div className="signup-google-content"><div>Continue with Email</div></div>
                    </div>
                </div>

                <div className="signup-footer">
                    Click “Continue” to agree to Medium’s Terms of Service and acknowledge that
                    Medium’s Privacy Policy applies to you.
                </div>

            </div>
        </div>
    )
}
