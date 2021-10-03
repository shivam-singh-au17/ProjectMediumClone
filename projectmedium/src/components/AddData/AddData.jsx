import React, { Component } from "react";
import "./AddData.css";
import logo from "../Image/logo.svg";
import ringing from "../Image/ringing.png";
import more from "../Image/more.png";
import plus from "../Image/plus.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddData extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserTitle = this.onChangeUserTitle.bind(this);
    this.onChangeUserSubTitle = this.onChangeUserSubTitle.bind(this);
    this.onChangeUserBlogPic = this.onChangeUserBlogPic.bind(this);
    this.onChangeUserInfo01 = this.onChangeUserInfo01.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userTitle: "",
      userSubTitle: "",
      userBlogPic: "",
      userInfo01: "",
    };
  }

  onChangeUserTitle(e) {
    this.setState({
      userTitle: e.target.value,
    });
  }

  onChangeUserSubTitle(e) {
    this.setState({
      userSubTitle: e.target.value,
    });
  }

  onChangeUserBlogPic(e) {
    this.setState({
      userBlogPic: e.target.value,
    });
  }

  onChangeUserInfo01(e) {
    this.setState({
      userInfo01: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newperson = {
      userName: "Shivam Singh",
      userProPic:
        "https://lh3.googleusercontent.com/ogw/ADea4I7SAtyYDmQhsAzltqchX0c0evEsDi6eTVNxwLE_yxA=s32-c-mo",
      userSubName: "Masai School",
      userTitle: this.state.userTitle,
      userSubTitle: this.state.userSubTitle,
      userBlogPic: this.state.userBlogPic,
      userBlogDate: "Oct 3",
      userBlogTime: "2 min read",
      userBlogTag: "Self",
      userInfo01: this.state.userInfo01,
      userBImg01: "https://picsum.photos/200/300",
      userBImg02: "https://picsum.photos/200",
    };

    axios
      .post("http://localhost:5000/blogsdata/add", newperson)
      .then((res) => console.log(res.data));

    // this.setState({
    //   userTitle: "",
    //   userSubTitle: "",
    //   userBlogPic: "",
    //   userInfo01: "",
    // });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="writeStorySection">
            <div className="storyNavBar py-3">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <div className="leftSection">
                  <img src={logo} alt="" />
                  <span className="ms-2">Draft in </span>
                  <span>Shivam Singh</span>
                </div>
              </Link>
              <div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/home/edit/create`}
                >
                  <span className="mx-4 publishBtn">Publish</span>
                </Link>
                <img className="more" src={more} alt="" />

                <span
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img className="ringing mx-4" src={ringing} alt="" />
                </span>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Notifications
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">No notifications yet.</div>
                    </div>
                  </div>
                </div>
                <span
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <img
                    className="profile"
                    src="https://cdn-images-1.medium.com/fit/c/35/35/0*EWs9dkB9i9yar9-3"
                    alt=""
                  />
                </span>

                <div
                  style={{ width: "300px" }}
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <div id="offcanvasRightLabel" className="d-flex p-1">
                      <img
                        className="profile myImg"
                        src="https://cdn-images-1.medium.com/fit/c/35/35/0*EWs9dkB9i9yar9-3"
                        alt=""
                      />
                      <div className="ms-3">
                        <div className="fs-5">Shivam Singh</div>
                        <div className="">@shivamsingh4458</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="offcanvas-body myOptionsSec">
                    <div className="LinkOneBox">
                      <div className="myAllLinkOpt" id="myFirst">
                        <Link className="myLinkOne" to={`/home/edit`}>
                          Write a story
                        </Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Stories</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Stats</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Design your profile</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Settings</Link>
                      </div>
                    </div>
                    <div className="LinkOneBox">
                      <div className="myAllLinkOpt" id="myFirst2">
                        <Link className="myLinkOne">Lists</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Publications</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">
                          Control your recommendations
                        </Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">
                          Medium Partner Program
                        </Link>
                      </div>
                    </div>
                    <div className="LinkOneBox">
                      <div className="myAllLinkOpt" id="myFirst2">
                        <Link className="myLinkOne memberBtn">
                          Become a member
                        </Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne">Help</Link>
                      </div>
                      <div className="myAllLinkOpt">
                        <Link className="myLinkOne" to={`/`}>
                          Sign out
                        </Link>
                      </div>
                    </div>
                    <div className="LinkOneBox">
                      <div className="myFlexBoxLink">
                        <div className="myAllLinkOpt" id="myFirst2">
                          <Link className="myLinkOne">Privacy</Link>
                        </div>
                        <div className="myAllLinkOpt ms-3">
                          <Link className="myLinkOne footerLink">Terms</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tellYourStory">
              <div className="addYoursTORY">
                <img className="addImgVid" src={plus} alt="" />
                <input
                  value={this.state.userTitle}
                  onChange={this.onChangeUserTitle}
                  className="tellStory"
                  type="text"
                  placeholder="Title..."
                />
              </div>

              <div className="addYoursTORY2">
                <img className="addImgVid2" src={plus} alt="" />
                <input
                  value={this.state.userSubTitle}
                  onChange={this.onChangeUserSubTitle}
                  className="tellStory2"
                  type="text"
                  placeholder="Sub Title..."
                />
              </div>

              <div className="addYoursTORY3">
                <img className="addImgVid3" src={plus} alt="" />
                <input
                  value={this.state.userBlogPic}
                  onChange={this.onChangeUserBlogPic}
                  className="tellStory3"
                  type="text"
                  placeholder="Add Poster URL..."
                />
              </div>

              <div className="addYoursTORY3 form-control">
                <img className="addImgVid7" src={plus} alt="" />
                <textarea
                  value={this.state.userInfo01}
                  onChange={this.onChangeUserInfo01}
                  className="tellStory3"
                  type="text"
                  placeholder="Tell Your Story..."
                />
              </div>
            </div>
            <button className="mySubmitBtn my-5" type="submit">
              Save In Draft
            </button>
          </div>
        </form>
      </>
    );
  }
}
