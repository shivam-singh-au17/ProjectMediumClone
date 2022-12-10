import React, { useEffect, useState } from "react";
import "./Home.css";
import text from "../Image/text.png";
import trending from "../Image/trending.png";
import num01 from "../Image/num01.png";
import num02 from "../Image/num02.png";
import num03 from "../Image/num03.png";
import num04 from "../Image/num04.png";
import num05 from "../Image/num05.png";
import num06 from "../Image/num06.png";
import save from "../Image/save.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { ThemeContexts } from "../../Contexts/ThemeContexts";
import { BASE_URL } from "../../env";


const Home = () => {
  const [addTask, setAddTask] = useState([]);
  const { handleChangeTheme } = useContext(ThemeContexts);

  function getMyTodos() {
    axios.get(`${BASE_URL}`).then((res) => {
      setAddTask(res.data);
    });
  }

  useEffect(() => {
    getMyTodos();
  }, []);

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
            <Link to={`/login`} style={{ textDecoration: "none" }}>
              <div className="homeBtn">
                <span>Start Writing</span>
              </div>
            </Link>
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
              {addTask.map((e, i) => {
                return i === 0 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num02} alt="" />
              </div>
              {addTask.map((e, i) => {
                return i === 1 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num03} alt="" />
              </div>
              {addTask.map((e, i) => {
                return i === 2 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num04} alt="" />
              </div>
              {addTask.map((e, i) => {
                return i === 3 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num05} alt="" />
              </div>
              {addTask.map((e, i) => {
                return i === 4 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="col4gy3row">
              <div className="colis2">
                <img src={num06} alt="" />
              </div>
              {addTask.map((e, i) => {
                return i === 5 ? (
                  <div className="colis10" key={e._id}>
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo">
                        <img className="numImg" src={e.userProPic} alt="" />
                        <span className="authorName ms-2">{e.userName}</span>
                        <span className="authorIn mx-1">in</span>
                        <span className="authorDictp">{e.userSubName}</span>
                      </div>
                      <div className="authHeading">
                        <p className="authorTitle">{e.userTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span>&#9733;</span>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="blogSection">
        <div className="allBlogs">
          <div className="leftBlogSection">
            {addTask.map((e, i) => {
              return i >= 6 ? (
                <div className="col4gy3row02" key={e._id}>
                  <div className="colis1002">
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo02">
                        <img
                          className="numImg02"
                          src={e.userProPic}
                          alt="UserPic"
                        />
                        <span className="authorName02 ms-2">{e.userName}</span>
                        <span className="authorIn02 mx-1">in</span>
                        <span className="authorDictp02">{e.userSubName}</span>
                      </div>
                      <div className="authHeading02">
                        <p className="authorTitle02">{e.userTitle}</p>
                        <p className="authSubHed02">{e.userSubTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt02">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span className="mx-1">·</span>
                      <span className="mx-1 userBlogTag">{e.userBlogTag}</span>
                      <span className="ms-1">&#9733;</span>
                      <span style={{ float: "right" }} className="me-4">
                        <img src={save} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="colis202">
                    <img src={e.userBlogPic} alt="" />
                  </div>
                </div>
              ) : (
                ""
              );
            })}
            {addTask.map((e, i) => {
              return i <= 5 ? (
                <div className="col4gy3row02" key={e._id}>
                  <div className="colis1002">
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo02">
                        <img
                          className="numImg02"
                          src={e.userProPic}
                          alt="UserPic"
                        />
                        <span className="authorName02 ms-2">{e.userName}</span>
                        <span className="authorIn02 mx-1">in</span>
                        <span className="authorDictp02">{e.userSubName}</span>
                      </div>
                      <div className="authHeading02">
                        <p className="authorTitle02">{e.userTitle}</p>
                        <p className="authSubHed02">{e.userSubTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt02">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span className="mx-1">·</span>
                      <span className="mx-1 userBlogTag">{e.userBlogTag}</span>
                      <span className="ms-1">&#9733;</span>
                      <span style={{ float: "right" }} className="me-4">
                        <img src={save} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="colis202">
                    <img src={e.userBlogPic} alt="" />
                  </div>
                </div>
              ) : (
                <div className="col4gy3row02" key={e._id}>
                  <div className="colis1002">
                    <Link
                      onClick={() => handleChangeTheme(5)}
                      style={{ textDecoration: "none" }}
                      to={`/blog/${e._id}`}
                    >
                      <div className="AuthInfo02">
                        <img
                          className="numImg02"
                          src={e.userProPic}
                          alt="UserPic"
                        />
                        <span className="authorName02 ms-2">{e.userName}</span>
                        <span className="authorIn02 mx-1">in</span>
                        <span className="authorDictp02">{e.userSubName}</span>
                      </div>
                      <div className="authHeading02">
                        <p className="authorTitle02">{e.userTitle}</p>
                        <p className="authSubHed02">{e.userSubTitle}</p>
                      </div>
                    </Link>
                    <div className="authDaTiSt02">
                      <span>{e.userBlogDate} ·</span>
                      <span className="mx-1">{e.userBlogTime}</span>
                      <span className="mx-1">·</span>
                      <span className="mx-1 userBlogTag">{e.userBlogTag}</span>
                      <span className="ms-1">&#9733;</span>
                      <span style={{ float: "right" }} className="me-4">
                        <img src={save} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="colis202">
                    <img src={e.userBlogPic} alt="" />
                  </div>
                </div>
              );
            })}
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
