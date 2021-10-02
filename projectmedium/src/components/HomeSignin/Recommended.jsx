import React, { useEffect, useState } from "react";
import "./Recommended.css";
import axios from "axios";
import { useContext } from "react";
import { ThemeContexts } from "../../Contexts/ThemeContexts";
import save from "../Image/save.svg";
import { Link } from "react-router-dom";

export const Recommended = () => {
  const [addTask, setAddTask] = useState([]);
  const { handleChangeTheme } = useContext(ThemeContexts);

  function getMyTodos() {
    axios.get(`http://localhost:5000/blogsdata/`).then((res) => {
      setAddTask(res.data);
    });
  }

  useEffect(() => {
    getMyTodos();
  }, []);

  return (
    <div>
      {addTask.map((e) => {
        return (
          <div className="col4gy3row02" key={e._id}>
            <div className="colis1002">
              <Link
                onClick={() => handleChangeTheme(5)}
                style={{ textDecoration: "none" }}
                to={`/blog/${e._id}`}
              >
                <div className="AuthInfo02">
                  <img className="numImg02" src={e.userProPic} alt="UserPic" />
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
  );
};
