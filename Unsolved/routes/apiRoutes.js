var db = require("../models");

module.exports = function(app) {

//Logging in
  //-->Get Route
    //--> Display login page

//Display Homepage
  //-->Get Route
    //-->Display Homepage By Default

//Edit User Page
  //-->Post Route
    //--> edit aspects of the page aside from skills

//Edit Skills
  //-->Get all current skills/Ratings, and form to edit rating
    //-->Submit Changes
      //-->Post Route

//Add Skills 
  //-->Get Current Skill list & List of Available other skills
    //-->Submit new skill and initial rating
      //-->Post Route

  
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
