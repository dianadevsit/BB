console.log("Entered the JS file");
$(document).ready(function() {
  var skillsResultsArray = [];
  var ratingsResultsArray = [];
  getListOfSkills();
  function getListOfSkills() {
    $.get("/api/getSkillsList", function(data1) {
      skillsResultsArray = data1;
      for (i = 0; i < skillsResultsArray.length; i++) {
        $("#skill-name").prepend(
          "<option> " + skillsResultsArray[i].skill + " </option>"
        );
      }
      console.log("After the get skills request is complete");
      console.log(skillsResultsArray);
      // getListOfRatings(skillsResultsArray);
    });
  }

  getListOfRatings();
  function getListOfRatings() {
    console.log("After the get skills request is complete and inside rating");
    console.log(skillsResultsArray);
    $.get("/api/getRatingsList", function(data2) {
      console.log("After the get ratings request is complete");
      ratingsResultsArray = data2;
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
    console.log("After the get skills request is complete and outside");
    console.log(skillsResultsArray);
    console.log(ratingsResultsArray);
    console.log("skill form value" + $("#skill-name").val());
    for (i = 0; i < skillsResultsArray.length; i++) {
      if (skillsResultsArray[i].skill === $("#skill-name").val()) {
        var skillID2 = skillsResultsArray[i].id;
        console.log("skillID2 " + skillID2);
      }
    }
    console.log("rating form value" + $("#rating-form").val());
    for (i = 0; i < ratingsResultsArray.length; i++) {
      if (ratingsResultsArray[i].ratingDesc === $("#rating-form").val()) {
        var ratingID2 = skillsResultsArray[i].id;
        console.log("ratingId2" + ratingID2);
      }
    }

    var skillSearchInput = {
      skillID: skillID2,
      // skillID: 1,
      ratingID: ratingID2
    };

    var skillsSearchResultsArray = [];
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
      skillsSearchResultsArray = data;
      console.log(skillsSearchResultsArray);
    });
  });
});
