import React from "react";
import "./SavedItems.css";
import top from "./top.PNG";
import bottom from "./bottom.PNG";

export const SavedItems = () => {
  return (
    <div>
      <div className="saved-top">
        {/* <img src={top} /> */}
        <div className="saved-top-inner">
          <div className="saved-top-inner-title">
            Create a list to easily organize and share stories
          </div>
          <div className="saved-top-inner-button">
            <div>Start a List</div>
          </div>
        </div>
        <div className="saved-top-inner-image">
          <img src={top} alt="" />
        </div>
      </div>

      <div className="saved-bottom">
        <div className="saved-bottom-inner">
          <div className="saved-bottom-inner-title">Reading list</div>
          <div className="saved-bottom-inner-button">
            <div>View List</div>
          </div>
        </div>
        <div className="saved-bottom-inner-image">
          <img src={bottom} alt="" />
        </div>
      </div>
    </div>
  );
};
