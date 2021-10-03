const express = require("express");

// blogsdataRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /blogsdata.
const blogsdataRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the blogsdatas.
blogsdataRoutes.route("/blogsdata").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("blogsdatas")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single blogsdata by id
blogsdataRoutes.route("/blogsdata/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("blogsdatas")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new blogsdata.
blogsdataRoutes.route("/blogsdata/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userProPic: req.body.userProPic,
    userName: req.body.userName,
    userSubName: req.body.userSubName,
    userTitle: req.body.userTitle,
    userSubTitle: req.body.userSubTitle,
    userBlogPic: req.body.userBlogPic,
    userBlogDate: req.body.userBlogDate,
    userBlogTime: req.body.userBlogTime,
    userBlogTag: req.body.userBlogTag,
    userHead01: req.body.userHead01,
    userHead02: req.body.userHead02,
    userInfo01: req.body.userInfo01,
    userInfo02: req.body.userInfo02,
    userBImg01: req.body.userBImg01,
    userBImg02: req.body.userBImg02,

  };
  db_connect.collection("blogsdatas").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a blogsdata by id.
blogsdataRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      userProPic: req.body.userProPic,
      userName: req.body.userName,
      userSubName: req.body.userSubName,
      userTitle: req.body.userTitle,
      userSubTitle: req.body.userSubTitle,
      userBlogPic: req.body.userBlogPic,
      userBlogDate: req.body.userBlogDate,
      userBlogTime: req.body.userBlogTime,
      userBlogTag: req.body.userBlogTag,
      userHead01: req.body.userHead01,
      userHead02: req.body.userHead02,
      userInfo01: req.body.userInfo01,
      userInfo02: req.body.userInfo02,
      userBImg01: req.body.userBImg01,
      userBImg02: req.body.userBImg02,
    },
  };
  db_connect
    .collection("blogsdatas")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a blogsdata
blogsdataRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("blogsdatas").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = blogsdataRoutes;
