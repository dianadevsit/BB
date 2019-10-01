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

  //Edit User Page. Post Route. Edit the user details aside from skills
     app.post("/api/knownUser", function(req, res) {
      db.BookBKdb.update(req.body)
      .then(function(dbknownUser) {
        res.json(dbknownUser);
      });

    });

  //Edit Skills. Get all current skills/Ratings to allow editing. Submit Changes. Post Route
  app.post("/api/existingSkills", function(req, res) {
    db.BookBKdb.update(req.body)
    .then(function(dbEditSkills) {
      res.json(dbEditSkills);
    });
  });

  //Add Skills. Get Current Skillset & the list of other skills. Submit new skill and initial rating.
  //Post Route

  app.post("/api/existingSkills", function(req, res) {
    db.BookBKdb.create(req.body)
    .then(function(dbAddNewSkill) {
      res.json(dbAddNewSkill);
    });
  });
};

  //Search page to show the full list of results
  app.get("/api/searchForSkills", function(req, res) {
    db.BookBKdb.findAll({
      //Add a include and where clause here if needed
      // Include: [db.AnotherTable]
    })
    .then(function(dbListOfSkills){
      res.json(dbListOfSkills);
    })
  });

// **********************************************************************
// Sample code
// **********************************************************************

//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };


// app.get("/api/authors", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
    //   db.Author.findAll({
    //     include: [db.Post]
    //   }).then(function(dbAuthor) {
    //     res.json(dbAuthor);
    //   });
    // });
// };