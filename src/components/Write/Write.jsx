import React from "react";
import "./Write.css";
import face from "./image/face.png";
const Write = () => {
  return (
    <div className="write">
      <div className=" D-first">
        <div className="row">
          <div className="col-8 , col-left">
            <div className="col-left-h1">
              {" "}
              <h1>
                {" "}
                <span>Publish, grow, and earn, all in one place.</span>{" "}
              </h1>{" "}
            </div>
            <div className="D-first-div" style={{ marginLeft: "50px" }}>
              <div className="D-first-div-p">
                {" "}
                <p>
                  If you have a story to tell, knowledge to share, or a
                  perspective to offer — welcome home. Here, your writing can
                  thrive in a network supported by millions of readers — not
                  ads.
                </p>
              </div>
              <button className="button-first" style={{ border: "none" }}>
                Start Writing
              </button>
            </div>
          </div>

          <div className="col">
            <div className="img-left-first">
              {" "}
              <img src={face} alt="" srcset="" width="400px" height="550px" />
            </div>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="second-div">
        <div className="second-left">
          <h1>
            <span>Join a network of curious minds.</span>
          </h1>
        </div>

        <div className="second-right">
          <div className="card-name">
            <div className="card-img">
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Obama.png"
                alt="Avatar"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Barack Obama</span>
              </h2>
              <p>
                {" "}
                <span>Dad, husband, President, citizen </span>
              </p>
            </div>
          </div>
          <div className="card-name">
            <div className="card-img" style={{ bordertop: "none" }}>
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Chabon.png"
                alt="Avatar"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Michael Chabon</span>
              </h2>
              <p>
                {" "}
                <span>Novelist, screenwriter, and columnist </span>
              </p>
            </div>
          </div>
          <div className="card-name">
            <div className="card-img" style={{ bordertop: "none" }}>
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/camile.png"
                alt="Avatar"
                width="50"
                height="50"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Camille Fournier</span>
              </h2>
              <p>
                {" "}
                <span>Engineer, CTO, and author </span>
              </p>
            </div>
          </div>
          <div className="card-name">
            <div className="card-img" style={{ bordertop: "none" }}>
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/CarvellWallace_1CarvellWallace.png"
                alt="Avatar"
                width="50"
                height="50"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Carvell Wallace</span>
              </h2>
              <p>
                {" "}
                <span>New York Times Bestselling author and podcaster</span>
              </p>
            </div>
          </div>
          <div className="card-name">
            <div className="card-img" style={{ bordertop: "none" }}>
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Price.png"
                alt="Avatar"
                width="50"
                height="50"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Devon Price</span>
              </h2>
              <p>
                {" "}
                <span>Social psychologist and author </span>
              </p>
            </div>
          </div>

          <div className="card-name">
            <div className="card-img" style={{ bordertop: "none" }}>
              {" "}
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Orlean.png"
                alt="Avatar"
                width="50"
                height="50"
              />
            </div>
            <div className="card-details">
              <h2>
                {" "}
                <span>Susan Orlean</span>
              </h2>
              <p>
                {" "}
                <span>Writer for The New Yorker, author </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third div  */}
      <div className="third-div">
        <div className="third-left">
          <h1>
            {" "}
            <span>
              Create <br />
              your space.
            </span>
          </h1>

          <div className="third-left-p">
            <p>
              Tell your story your way — with different ways to write, style,
              and brand your work.
            </p>
             <button className="button-second" style={{ border: "none" }}>
                Start Writing
              </button>
          </div>
        </div>
        <div className="third-right">
         <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png" alt="" srcset="" width="600px" height="550px" />
        </div>
      </div>
      {/* forth-div */}
    <div className = "forth-div"> 
    <div className = "forth-left">
      <h1> <span>Blog.</span> </h1>
      <div className = "forth-left-p"><p>Start a blog for free to have a personalized home for your writing. Brand your space and share your writing with readers on any device. </p></div>
    </div>

     <div className = "forth-left">
      <h1> <span>Publications.</span> </h1>
      <div className = "forth-left-p"><p>Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options. </p></div>
    </div>
    </div>

    {/* fifth */}
    <div className="fifth-div">
      <h2> <span>Find and grow your<br/>
        audience. </span>
      </h2>
     <div className= "fifth-div-r"> <p>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p></div>
    </div>

    {/* six */}
   

    </div>
  );
};

export { Write };
