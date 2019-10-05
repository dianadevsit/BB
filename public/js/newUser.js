$(document).ready(function() {
  $("#submitNewUser").on("click", function(event) {
    event.preventDefault();
    console.log("Entered submit pairing button function");
    var addUser = {
      userID: $("#userIdInput")
        .val()
        .trim(),
      userPWD: $("#userIdInput")
        .val()
        .trim(),
      firstName: $("#firstNameInput")
        .val()
        .trim(),
      lastName: $("#lastNameInput")
        .val()
        .trim(),
      emailID: $("#emailInput")
        .val()
        .trim(),
      studentType: $("#studentTypeInput")
        .val()
        .trim(),
      userBio: $("#bioInput")
        .val()
        .trim()
    };

    console.log("before");
    console.log(addUser);
    console.log("after");

    addNewUser(addUser);
    function addNewUser(addUser) {
      console.log("About to make the post route call");
      $.post("/api/addNewUser", addUser, function() {
        console.log("Added new user");
        //   window.location.href = "/profile";
      });
    }
  });
});
