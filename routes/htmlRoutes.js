var db = require("../models");

var path = require("path");

module.exports = function(app) {
  //Logging in. Get Route. Display login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
  });

  app.get("/pairing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/pairing.html"));
  });

  app.get("/addnewuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/newUser.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// app.get("/", function(req, res) {
//   db.Example.findAll({}).then(function(dbExamples) {
//     res.render("index", {
//       msg: "Welcome!",
//       examples: dbExamples
//     });
//   });
// });

// // Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });
