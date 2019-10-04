console.log("Entered the JS file");

$("#submitpairing").on("click", function(event) {
  event.preventDefault();
  console.log("Entered submit pairing button function");
  var skillSearchInput = {
    skillID: $("#skillForm").val(),
    ratingID: $("#ratingForm").val()
  };

  var skillResultsArray = [];
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
    skillResultsArray = data;
    console.log(skillResultsArray);
  });
});
