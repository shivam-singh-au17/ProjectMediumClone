import React from "react";
import "./Home.css";
import text from "../Image/text.png";
import trending from "../Image/trending.png";
import num01 from "../Image/num01.png";
import num02 from "../Image/num02.png";
import num03 from "../Image/num03.png";
import num04 from "../Image/num04.png";
import num05 from "../Image/num05.png";
import num06 from "../Image/num06.png";
import blogimg from "../Image/blogimg.jpeg";

const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <div className="homeSection">
          <div className="leftHomeSec">
            <p className="headingName">
              Medium is a place to write, read, and connect
            </p>
            <p className="headingTitle">
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </p>
            <div className="homeBtn">
              <span>Start Writing</span>
            </div>
          </div>
          <div className="rightHomeSec">
            <img src={text} alt="text" />
          </div>
        </div>
      </section>

      <section className="trendingSection">
        <div className="trendingPart">
          <img className="trendingImg" src={trending} alt="" />
          <div className="myRowFlex">
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num01} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num02} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num03} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num04} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num05} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;;</span>
                </div>
              </div>
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num06} alt="" />
              </div>
              <div className="colis10">
                <div className="AuthInfo">
                  <img className="numImg bg-dark" src={text} alt="" />
                  <span className="authorName ms-2">Andrei Tapalaga</span>
                  <span className="authorIn mx-1">in</span>
                  <span className="authorDictp">History of Yesterday</span>
                </div>
                <div className="authHeading">
                  <p className="authorTitle">
                    Chernobyl’s Blown Up Reactor 4 Just Woke Up
                  </p>
                </div>
                <div className="authDaTiSt">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogSection">
        <div className="allBlogs">
          <div className="leftBlogSection">
            <div className="col4gy3row02">
              <div className="colis1002">
                <div className="AuthInfo02">
                  <img className="numImg02 bg-dark" src={text} alt="" />
                  <span className="authorName02 ms-2">Andrei Tapalaga</span>
                  <span className="authorIn02 mx-1">in</span>
                  <span className="authorDictp02">History of Yesterday</span>
                </div>
                <div className="authHeading02">
                  <p className="authorTitle02">
                    It’s No Wonder Men Objectify Us When Our Bodies Are Asking
                    for It
                  </p>
                  <p className="authSubHed02">
                    Watch out for these signs of a person who isn’t as friendly
                    as they seem.
                  </p>
                </div>
                <div className="authDaTiSt02">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span className="mx-1">·</span>
                  <span className="mx-1">Feminism</span>
                  <span className="ms-1">&#9733;</span>
                </div>
              </div>
              <div className="colis202">
                <img src={blogimg} alt="" />
              </div>
            </div>
            <div className="col4gy3row02">
              <div className="colis1002">
                <div className="AuthInfo02">
                  <img className="numImg02 bg-dark" src={text} alt="" />
                  <span className="authorName02 ms-2">Andrei Tapalaga</span>
                  <span className="authorIn02 mx-1">in</span>
                  <span className="authorDictp02">History of Yesterday</span>
                </div>
                <div className="authHeading02">
                  <p className="authorTitle02">
                    It’s No Wonder Men Objectify Us When Our Bodies Are Asking
                    for It
                  </p>
                  <p className="authSubHed02">
                    Watch out for these signs of a person who isn’t as friendly
                    as they seem.
                  </p>
                </div>
                <div className="authDaTiSt02">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span className="mx-1">·</span>
                  <span className="mx-1">Feminism</span>
                  <span className="ms-1">&#9733;</span>
                </div>
              </div>
              <div className="colis202">
                <img src={blogimg} alt="" />
              </div>
            </div>
            <div className="col4gy3row02">
              <div className="colis1002">
                <div className="AuthInfo02">
                  <img className="numImg02 bg-dark" src={text} alt="" />
                  <span className="authorName02 ms-2">Andrei Tapalaga</span>
                  <span className="authorIn02 mx-1">in</span>
                  <span className="authorDictp02">History of Yesterday</span>
                </div>
                <div className="authHeading02">
                  <p className="authorTitle02">
                    It’s No Wonder Men Objectify Us When Our Bodies Are Asking
                    for It
                  </p>
                  <p className="authSubHed02">
                    Watch out for these signs of a person who isn’t as friendly
                    as they seem.
                  </p>
                </div>
                <div className="authDaTiSt02">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span className="mx-1">·</span>
                  <span className="mx-1">Feminism</span>
                  <span className="ms-1">&#9733;</span>
                </div>
              </div>
              <div className="colis202">
                <img src={blogimg} alt="" />
              </div>
            </div>
            <div className="col4gy3row02">
              <div className="colis1002">
                <div className="AuthInfo02">
                  <img className="numImg02 bg-dark" src={text} alt="" />
                  <span className="authorName02 ms-2">Andrei Tapalaga</span>
                  <span className="authorIn02 mx-1">in</span>
                  <span className="authorDictp02">History of Yesterday</span>
                </div>
                <div className="authHeading02">
                  <p className="authorTitle02">
                    It’s No Wonder Men Objectify Us When Our Bodies Are Asking
                    for It
                  </p>
                  <p className="authSubHed02">
                    Watch out for these signs of a person who isn’t as friendly
                    as they seem.
                  </p>
                </div>
                <div className="authDaTiSt02">
                  <span>Sep 18 ·</span>
                  <span className="mx-1">4 min read</span>
                  <span className="mx-1">·</span>
                  <span className="mx-1">Feminism</span>
                  <span className="ms-1">&#9733;</span>
                </div>
              </div>
              <div className="colis202">
                <img src={blogimg} alt="" />
              </div>
            </div>
          </div>
          <div className="rightBlogSection">
            <div className="allBlogTypes">
              <div className="allBlogTypesFirst">
                <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
                <div className="allspanTag">
                  <span>Self </span>
                  <span>Relationships</span>
                  <span>Data Science</span>
                  <span>Programming</span>
                  <span>Productivity</span>
                  <span>Javascript</span>
                  <span>Machine Learning</span>
                  <span>Politics</span>
                  <span>Health</span>
                </div>
                <div className="allTopics">See all topics</div>
              </div>
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
        </div>
      </section>
    </>
  );
};

export { Home };
