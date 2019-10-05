console.log("entered");
console.log("entered before submit");

$("#loginsubmit").on("click", function(event) {
  event.preventDefault();
  console.log("entered after submit");
  console.log("user ID value" + $("#userIDtext").val());

  var userID1 = $("#userIDtext").val();

  console.log("Ready to make the get request");
  console.log("IDs " + userID1);
  //   $.get("/api/getUser/" + userID1, function(data) {
  //     console.log("After the get request is complete");
  //     userResultsArray = data;
  //     console.log(userResultsArray);
  //   });
});
