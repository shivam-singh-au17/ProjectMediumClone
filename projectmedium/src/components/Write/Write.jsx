import React from "react";
import "./Write.css";
import face from "./image/face.png";
import SimpleAccordion from "./up";

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
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
            alt=""
            srcset=""
            width="600px"
            height="550px"
          />
        </div>
      </div>
      {/* forth-div */}
      <div className="forth-div">
        <div className="forth-left">
          <h1>
            {" "}
            <span>Blog.</span>{" "}
          </h1>
          <div className="forth-left-p">
            <p>
              Start a blog for free to have a personalized home for your
              writing. Brand your space and share your writing with readers on
              any device.{" "}
            </p>
          </div>
        </div>

        <div className="forth-left">
          <h1>
            {" "}
            <span>Publications.</span>{" "}
          </h1>
          <div className="forth-left-p">
            <p>
              Collaborate with others or publish under a brand name. Use our
              story submission system and expressive customization options.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* fifth */}
      <div className="fifth-div">
        <h2>
          {" "}
          <span>
            Find and grow your
            <br />
            audience.{" "}
          </span>
        </h2>
        <div className="fifth-div-r">
          {" "}
          <p>
            With simple tools and features, you have the chance to connect with
            over 100 million curious readers.
          </p>
        </div>
      </div>

      {/* six */}

      <div className="six-div">
        <div style={{ padding: "30px 30px 0px" }}>
          <h1>
            {" "}
            <span>Audience insights.</span>{" "}
          </h1>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing.
          </p>
          <div className="six-img">
            {" "}
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png"
              alt=""
              width="335px"
              height="250px"
            />
          </div>
        </div>
        <div className="six-div-right">
          <div className="six-div-right-top">
            <div className="six-top-one">
              {" "}
              <h1>
                {" "}
                <span>Social connectivity.</span>{" "}
              </h1>
              <p>
                Find people you’re already connected with on Twitter and easily
                share your stories across platforms.
              </p>
            </div>
            <div>
              {" "}
              <h1>
                {" "}
                <span>Powerful network.</span>{" "}
              </h1>
              <p>
                Readers can discover and follow you easily with tailored feeds
                and recommendations.
              </p>
            </div>
          </div>
          <div className="six-div-right-bottom">
            <div>
              {" "}
              <h1>
                {" "}
                <span>Email subscriptions.</span>{" "}
              </h1>
              <p>
                Reach readers by having your stories delivered straight to their
                inboxes.
              </p>
            </div>
            <div>
              {" "}
              <h1>
                {" "}
                <span>Interactive discussions.</span>{" "}
              </h1>
              <p>
                Build relationships with your readers through a threaded
                comments section.
              </p>
            </div>
            <div>
              {" "}
              <h1>
                {" "}
                <span>Personalized design.</span>{" "}
              </h1>
              <p>
                Easily customize your page to stand out and build your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* seven div */}
      <div className="sev-div">
        <h1>
          <span>
            {" "}
            Earn money from <br />
            your writing.
          </span>{" "}
        </h1>
        <div className="sev-p">
          {" "}
          <p>
            {" "}
            Writing has its rewards when you join the Partner Program. Learn how
            to get paid for the content you publish and the audiences you build.
          </p>
          <button className="button-second" style={{ border: "none" }}>
            Learn more
          </button>
        </div>
      </div>

      <div className="last-div">
        <div className="last-h">
          <h1>More about writing on Medium: </h1>
        </div>

        <SimpleAccordion
          head="How do I start writing on Medium?"
          body="
         First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.”"
        />
        <SimpleAccordion
          head="Who writes on Medium?"
          body="
         Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers."
        />
        <SimpleAccordion
          head="How can I make money writing on Medium?"
          body="
        If you join the Medium Partner Program, you can earn money based on how much time members spend reading your work and whenever you convert non-paying readers into members."
        />
        <SimpleAccordion
          head="Do I need to be in the Partner Program to write on Medium?"
          body="
       No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here."
        />
        <SimpleAccordion
          head="Who can read the work I publish on Medium?"
          body="
       Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link."
        />
        <SimpleAccordion
          head="Where can I get updates and plug into the creator community?"
          body="
      For the latest guides, resources, and inspiration for creators on Medium, follow Creators Hub, the official Medium blog for writers."
        />
        <SimpleAccordion
          head="How can I grow my audience with Medium?"
          body="
   Medium has a number of tools to connect you with over 100 million readers on the platform and beyond. Some ways you can build your audience are by starting a newsletter,  submitting to publications, following the distribution standards, and sharing your stories on social media. We also encourage you to check out our blog, 3 Minute Read, for more helpful tips and tricks – like how to write a great headline and SEO tips to make your stories more discoverable.  "
        />

        <div className="last-div-1">
          <div className="last-div-2">
            <span>Looking for help getting started?</span>

            <button className="button-first-1" style={{ border: "none" }}>
              Check out our guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Write };



