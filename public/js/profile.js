$(document).ready(function() {
  var skillsResultsArray = [];
  getListOfSkills();
  function getListOfSkills() {
    $.get("/api/getSkillsList", function(data) {
      skillsResultsArray = data;
      for (i = 0; i < skillsResultsArray.length; i++) {
        console.log(skillsResultsArray[i].skill);
        $("#skill-name").prepend(
          "<option> " + skillsResultsArray[i].skill + " </option>"
        );
      }
      console.log("After the get skills request is complete");

      console.log(skillsResultsArray);
    });
  }

  var ratingsResultsArray = [];

  getListOfRatings();
  function getListOfRatings() {
    $.get("/api/getRatingsList", function(data) {
      console.log("After the get ratings request is complete");
      ratingsResultsArray = data;
      for (i = 0; i < ratingsResultsArray.length; i++) {
        $("#rating-form").prepend(
          "<option> " + ratingsResultsArray[i].ratingDesc + " </option>"
        );
      }
      console.log(ratingsResultsArray);
    });
  }

  $("#submitSkill").on("click", function(event) {
    event.preventDefault();
    console.log("Entered submit pairing button function");
    var skillInput = {
      skillID: $("#skill-name").val(),
      ratingID: $("#rating-form").val()
    };

    var skillArray = [];
    console.log(skillInput);
    console.log("Ready to make the get request");
    // console.log("Skill Search ID" + skillSearchInput.skillID);
    var skillID1 = parseInt(skillInput.skillID);
    var ratingID1 = parseInt(skillInput.ratingID);

    console.log("IDs " + skillID1 + " " + ratingID1);
    $.push(
      "/api/postSkillProfileResults/" + skillID1 + "/" + ratingID1,
      function(data) {
        console.log("After the get request is complete");
        skillArray = data;
        console.log(skillArray);
      }
    );
  });
});
