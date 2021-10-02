import React, { useEffect, useState } from "react";
import "./StoryPre.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

export const StoryPre = () => {
  const [addTask, setAddTask] = useState([]);

  function getMyTodos() {
    axios.get(`http://localhost:5000/blogsdata/`).then((res) => {
      setAddTask(res.data);
    });
  }

  useEffect(() => {
    getMyTodos();
  }, []);

  const len = addTask.length - 1;
  console.log('len:', len)

  return (
    <div className="story">
      <div className="close-div">
        <div>
          <CloseIcon />
        </div>
      </div>
      {addTask.map((e, i) => {
        return i === len ? (
          <div className="story-main" key={e._id}>
            <div className="story-right">
              <h5>Story Preview</h5>
              <div className="story-img">
                <img src={e.userBlogPic} alt="" />
              </div>
              <div>
                <p>
                  <b>{e.userTitle}</b>
                </p>
                <hr />
              </div>
              <div>
                <p>{e.userInfo01}</p>
                <hr />
              </div>
              <p>
                <b>Note:</b> Changes here will affect how your story appears in
                public places like Medium’s homepage — not the story itself.
              </p>
            </div>

            <div className="story-left">
              <p>
                Publishing to: <b>{e.userName}</b>
              </p>
              <p>
                Add or change tags (up to 5) so readers know what your story is
                about
              </p>
              
              <input type="text" placeholder="Add a tag..." />
              <p>
                In order to make your story eligible to earn as part of Medium’s
                metered paywall, join the Partner Program.
              </p>
              <p>
                Learn more about what happens to your post when you publish.
              </p>
              <div className="story-left-b">
                <Link to={`/blog/${e._id}`}>
                  <button> Publish now</button>
                </Link>
                <p>Schedule for later</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};
