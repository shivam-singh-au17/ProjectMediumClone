import React from 'react';
import './SignSidebar.css'

export const SignSidebar = () => {
    return (
      <div className="displayblo">
        <div className="home-inner-right mystiky mb-4">
          <div className="home-inner-right-icon">
            <div className="home-inner-right-icon-medium">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="home-inner-right-icon-cross">
              <img
                src="https://www.pinclipart.com/picdir/big/538-5385185_grey-cross-icon-png-clipart.png"
                alt=""
              />
            </div>
            <div className="home-inner-right-icon-twitter">
              <img
                src="https://authy.com/wp-content/uploads/Twitter-Logo.png"
                alt=""
              />
            </div>
          </div>

          <div className="home-inner-right-two">
            Discover Medium writers you already follow on Twitter.
          </div>

          <div className="home-inner-right-three">
            <div className="home-inner-right-three-inner">
              <div className="home-inner-right-three-inner-image">
                <img
                  src="https://authy.com/wp-content/uploads/Twitter-Logo.png"
                  alt=""
                />
              </div>
              <div className="home-inner-right-three-inner-text">
                Continue with Twitter
              </div>
            </div>
          </div>

          <div className="home-inner-right-four">Maybe Later</div>

          <div className="home-inner-right-five">RECOMMENDED TOPICS</div>

          <div className="home-inner-right-six">
            <div>Self</div>
            <div>Relationships</div>
            <div>Data Sciences</div>
            <div>Art</div>
          </div>

          <div className="home-inner-right-seven">
            <div>Psychology</div>
            <div>Philosophy</div>
            <div>Religion</div>
            <div>Travel</div>
          </div>

          <div className="home-inner-right-eight">
            <div>Media</div>
          </div>

          <div className="home-inner-right-nine">WHOM TO FOLLOW</div>

          <div className="home-inner-right-ten">
            <div className="home-inner-right-ten-image">
              <img
                src="https://miro.medium.com/fit/c/60/60/1*MqpYUlbbpQEVjqfYlzf7Wg.jpeg"
                alt=""
              />
            </div>
            <div className="home-inner-right-ten-right">
              <div className="home-inner-right-ten-right-content">
                <div className="home-inner-right-ten-right-content-top">
                  Vivian Nunez
                </div>
                <div className="home-inner-right-ten-right-content-bottom">
                  Your creativity + mental wellness accountability
                </div>
              </div>
              <div className="home-inner-right-ten-right-button">
                <div>Follow</div>
              </div>
            </div>
          </div>

          <div className="home-inner-right-ten">
            <div className="home-inner-right-ten-image">
              <img
                src="https://miro.medium.com/fit/c/60/60/1*i97N8UJIUubPKMw6EvQLNw.jpeg"
                alt=""
              />
            </div>
            <div className="home-inner-right-ten-right">
              <div className="home-inner-right-ten-right-content">
                <div className="home-inner-right-ten-right-content-top">
                  Stefania Simon
                </div>
                <div className="home-inner-right-ten-right-content-bottom">
                  Passionate Web Developer & Designer writing about
                </div>
              </div>
              <div className="home-inner-right-ten-right-button">
                <div>Follow</div>
              </div>
            </div>
          </div>

          <div className="home-inner-right-ten">
            <div className="home-inner-right-ten-image">
              <img
                src="https://miro.medium.com/fit/c/60/60/1*Dg5Nl8BJYGqNAjxsoUwCng.jpeg"
                alt=""
              />
            </div>
            <div className="home-inner-right-ten-right">
              <div className="home-inner-right-ten-right-content">
                <div className="home-inner-right-ten-right-content-top">
                  Larry Kim
                </div>
                <div className="home-inner-right-ten-right-content-bottom">
                  Designer, writer, teacher. I love building things.
                </div>
              </div>
              <div className="home-inner-right-ten-right-button">
                <div>Follow</div>
              </div>
            </div>
          </div>

          <div className="home-inner-right-eleven">SUGGESTED READING</div>

          <div className="home-inner-right-twelve">
            <div className="home-inner-right-twelve-image">
              <img
                src="https://miro.medium.com/fit/c/40/40/1*bZX8Yl2oSaazykXsONbT0Q.jpeg"
                alt=""
              />
            </div>
            <div className="home-inner-right-twelve-text">
              Daniel Danielyan in UX Planet
            </div>
          </div>

          <div className="home-inner-right-thirteen">
            8 overlooked details by beginner UX Designers
          </div>

          <div className="home-inner-right-fourteen">
            December 24, 2020 . 5 min read
          </div>

          <div className="home-inner-right-fifteen">
            See your full reading list
          </div>

          <hr className="right-sidebar" />

          <div className="allspanTag2">
            <span>Help </span>
            <span> Status </span>
            <span> Writers </span>
            <span> Blog </span>
            <span> Careers </span>
            <span> Privacy </span>
            <span> Terms</span>
            <span> About</span>
          </div>
        </div>
      </div>
    );
}
