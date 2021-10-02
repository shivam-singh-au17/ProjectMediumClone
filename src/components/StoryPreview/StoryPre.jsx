import React from "react";
import "./StoryPre.css";
import CloseIcon from "@mui/icons-material/Close";

export const StoryPre = () => {
  return (
    <div className="story">
      <div className="close-div">
        <div>
          <CloseIcon />
        </div>
      </div>
      <div className="story-main">
        <div className="story-right">
          <h5>Story Preview</h5>
          <div className="story-img"></div>
          <div>
            <p>
              <b>Title</b>
            </p>
            <hr />
          </div>
          <div>
            <p>containt</p>
            <hr />
          </div>
          <p>
            <b>Note:</b> Changes here will affect how your story appears in
            public places like Medium’s homepage — not the story itself.
          </p>
        </div>

        <div className="story-left">
          <p>
            Publishing to:<b>Asutosh</b>
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
          <p>Learn more about what happens to your post when you publish.</p>
          <div className="story-left-b">
            <button> Publish now</button>
            <p>Schedule for later</p>
          </div>
        </div>
      </div>
    </div>
  );
};
