import React from 'react';
import GoogleLogin from 'react-google-login';
import './Signup.css';
import {Redirect} from 'react-router-dom'

export const Signup = () => {
    const [isAuth, setIsAuth] = React.useState(true);

    const responseGoogle = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
        setIsAuth(false)
    }


    return isAuth ? (
        <div>
            <div className="signup-box">
                <div className="signup-title">
                    Welcome to Medium
                </div>

                

                <div className="signup-google">
                    <div style={{backgroundColor: "white", shadow:"none", border: "white",
                borderRadius: "50%", outline: "none", boxShadow: "none", borderRight: "1px solid white"}}>
                    <GoogleLogin 
                    clientId="137235037828-76vpvig8vdp5l62eldlcefs5spfcrhao.apps.googleusercontent.com" 
                    buttonText="Continue with Google" 
                    onSuccess={responseGoogle} 
                    onFailure={responseGoogle} 
                    buttonOutline="none">

                    </GoogleLogin>
                </div>
                    {/* <div className="signup-google-text">
                        <div className="signup-google-image">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" />
                        </div>
                        <div className="signup-google-content"><div>Continue with Google</div></div>
                    </div> */}
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
    ) : (
        <Redirect to='/home' />
    )
}
