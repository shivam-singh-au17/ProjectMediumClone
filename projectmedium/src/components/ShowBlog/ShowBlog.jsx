import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useHistory } from "react-router-dom";
import "./ShowBlog.css";
import save from "../Image/save.svg";
import clap from "../Image/clap.svg";
import chat from "../Image/chat.png";
import link from "../Image/link.png";
import linkedin2 from "../Image/linkedin2.png";
import twt2 from "../Image/twt2.png";
import facebook from "../Image/facebook.png";
import { SignNav } from "./SignNav";
import { BASE_URL } from "../../env";

const ShowBlog = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const history = useHistory();

  function getUsersDetailes() {
    fetch(`${BASE_URL}${userId}`)
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUsersDetailes();
  }, []);

  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  // const handleGoBack = () => {
  //   history.replace("/");
  // };

  return isLoading ? (
    <div style={myStyle}>
      <img
        src="https://media3.giphy.com/media/b2zx4WKY536PMe3mJW/giphy.gif?cid=790b7611af827671dbeb6c225fcc22c143aa81451014a690&rid=giphy"
        alt="Error"
      />
    </div>
  ) : (
    <>
      <SignNav name={users.userName} />
      <section className="showBlogSection">
        <div className="myBlogSec">
          <div className="showBlogh1">
            <h1>{users.userTitle}</h1>
          </div>
          <div className="userSubTitle">{users.userSubTitle}</div>
          <div className="allOptions">
            <div className="leftShowBlog">
              <img src={users.userProPic} alt="UserPic" />
              <span className="auName ms-2">{users.userName}</span>
              <span className="m-2 comanSpan">{users.userBlogDate}</span>
              <span className="me-2 comanSpan">·</span>
              <span className="comanSpan">{users.userBlogTime}</span>
            </div>
            <div className="rightShowBlog">
              <img className="allLinkImg" src={twt2} alt="" />
              <img className="allLinkImg mx-1" src={facebook} alt="" />
              <img className="allLinkImg" src={linkedin2} alt="" />
              <img className="allLinkImg mx-1" src={link} alt="" />
              <img className="saveImgLogo" src={save} alt="" />
            </div>
          </div>
          <div className="userBlogPicDiv">
            <img className="userBlogPic" src={users.userBlogPic} alt="" />
          </div>
          <div className="userInfo01">
            <p>{users.userInfo01}</p>
          </div>
          <div className="userInfo01">
            <p>{users.userInfo02}</p>
          </div>
          <div className="userInfo01">
            <p>
              As we go through the motions, I listen, ask questions, and find
              levers to negotiate. But rarely do I find something to keep the
              person on, their mind already made up. I respect that.
            </p>
          </div>
          <div className="userHead01">
            <p>{users.userHead01}</p>
          </div>
          <div className="userInfo01">
            <p>{users.userInfo01}</p>
          </div>
          <div className="userInfo01">
            <p>
              As we go through the motions, I listen, ask questions, and find
              levers to negotiate. But rarely do I find something to keep the
              person on, their mind already made up. I respect that.
            </p>
          </div>
          <div className="userHead01">
            <p>{users.userHead02}</p>
          </div>
          <div className="userInfo01">
            <p>{users.userInfo01}</p>
          </div>
          <div className="userInfo01">
            <p>
              As we go through the motions, I listen, ask questions, and find
              levers to negotiate. But rarely do I find something to keep the
              person on, their mind already made up. I respect that.
            </p>
          </div>
          <div className="userBlogPicDiv">
            <img className="userBlogPic" src={users.userBImg01} alt="" />
          </div>
          <div className="userInfo01">
            <p>
              As we go through the motions, I listen, ask questions, and find
              levers to negotiate. But rarely do I find something to keep the
              person on, their mind already made up. I respect that.
            </p>
          </div>
          <div className="userHead01">
            <p>The Continual Graceful Exit</p>
          </div>
          <div className="userInfo01">
            <p>{users.userInfo01}</p>
          </div>
          <div className="userBlogPicDiv">
            <img className="userBlogPic" src={users.userBImg02} alt="" />
          </div>
          <div className="userInfo01">
            <p>
              As we go through the motions, I listen, ask questions, and find
              levers to negotiate. But rarely do I find something to keep the
              person on, their mind already made up. I respect that.
            </p>
          </div>
          <div className="userInfo01">
            <p>
              In my experience, there is an interesting observation. Once an
              engineer, and now as a manager, many people have come and gone. In
              software, people do fire themselves, as in they leave of their own
              volition. It’s hardly the other way around.
            </p>
          </div>
          <div className="userInfo01 mb-5">
            <p>
              My goal is to treat someone well on their first as well as their
              last. I want the chance to cooperate later. While I don’t have
              much evidence on how other managers handle these situations, a
              graceful exit between us leads to better future outcomes. And that
              is how we say goodbye.
            </p>
          </div>
          <div className="allOptions">
            <div className="rightShowBlog">
              <img className="allLinkImg me-2" src={clap} alt="" />
              <img className="allLinkImg" src={chat} alt="" />
            </div>
            <div className="rightShowBlog">
              <img className="allLinkImg" src={twt2} alt="" />
              <img className="allLinkImg mx-1" src={facebook} alt="" />
              <img className="allLinkImg" src={linkedin2} alt="" />
              <img className="allLinkImg mx-1" src={link} alt="" />
              <img className="saveImgLogo" src={save} alt="" />
            </div>
          </div>
        </div>

        <div className="showFooter">
          <div className="myFooterBox">
            <div className="leftFooter">
              <span>Medium</span>
            </div>
            <div className="rightFooter">
              <span className="fs-5">About</span>
              <span className="mx-3 fs-5">Write</span>
              <span className="fs-5">Help</span>
              <span className="ms-3 fs-5">Legal</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ShowBlog };
