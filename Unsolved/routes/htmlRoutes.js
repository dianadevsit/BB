var db = require("../models");

module.exports = function(app) {
  
  //Logging in. Get Route. Display login page
  app.get("/api/login", function(req, res) {
    db.BookBKdb.findOne({
      //Add a include and where clause here if needed
      // Include: [db.AnotherTable]
    }).then(function(dbLoginInfo){
      res.json(dbLoginInfo);
    })
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