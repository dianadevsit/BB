console.log("Entered the JS file");
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

  $("#submitpairing").on("click", function(event) {
    event.preventDefault();
    console.log("Entered submit pairing button function");
    for (i = 0; i < skillsResultsArray.length; i++) {
      if (skillsResultsArray[i].skill === $("#skillForm").val()) {
        var skillID2 = i;
      }
    }
    for (i = 0; i < ratingsResultsArray.length; i++) {
      if (ratingsResultsArray[i].skill === $("#ratingForm").val()) {
        var ratingID2 = i;
      }
    }

    var skillSearchInput = {
      skillID: skillID2,
      ratingID: ratingID2
    };

    var skillsResultsArray = [];
    console.log(skillSearchInput);
    console.log("Ready to make the get request");
    // console.log("Skill Search ID" + skillSearchInput.skillID);
    var skillID1 = parseInt(skillSearchInput.skillID);
    var ratingID1 = parseInt(skillSearchInput.ratingID);

    console.log("IDs " + skillID1 + " " + ratingID1);
    $.get("/api/getSkillProfileResults/" + skillID1 + "/" + ratingID1, function(
      data
    ) {
      console.log("After the get request is complete");
      skillsResultsArray = data;
      console.log(skillsResultsArray);
    });
  });
});
