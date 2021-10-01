import React from "react";
import "./MemberShip.css";

const MemberShip = () => {
  return (
    <div className="member">
      <div className="m-first">
        <h1>
          <span>Fuel great thinking.</span>
        </h1>
        <p>
          <span>Upgrade to membership for $5/month or $50/year.</span>
        </p>
        <button className="m-first-button"> Subscribe today</button>
      </div>
      {/* second div  */}
      <div className="m-second">
        <div className="m-second-mid">
          <div className="m-second-1">
            <h1>
              <span>Get unlimited access to every story</span>
            </h1>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
              alt=""
            />
            <p>
              Read any article in our entire library across all your devices —
              with no paywalls, story limits or ads.
            </p>
          </div>
          <div className="m-second-2">
            <h1>
              <span>Support the voices you want to hear more from.</span>
            </h1>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
              alt=""
            />
            <p>
              A portion of your membership will directly support the writers and
              thinkers you read the most.
            </p>
          </div>
        </div>
      </div>
      {/* third div */}

      <div className="m-third">
        <h1>
          <span>Why I'm a Medium Member...</span>
        </h1>
        <img src=" member.png" alt="" width="700" />
      </div>
      {/* forth-div */}
      <div className="m-four">
        <h1>
          <span>
            Take your mind <br />
            in new directions.
          </span>
        </h1>
        <button>Become a member</button>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export { MemberShip };
