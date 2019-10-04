$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var $skillName = $("#skill-name");
  var skillsList = $("tbody");
  var skillsContainer = $(".skills-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#skills-form", handleSkillsFormSubmit);

  // Getting the initial list of Skills
  getSkills();

  // A function to handle what happens when the form is submitted to create a new Skill
  function handleSkillsFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!$skillName.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertSkill({
      skill: $skillName
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertSkill(skillData) {
    $.post("/api/skills", skillData)
      .then(getSkills);
  }



































// // var userDataArray = [];
// //    console.log(user);
// //    console.log("Ready to make the get request");
// //    $.get("/api/getuser", function(data) {
// //      console.log("After the get request is complete");
// //      userDataArray = data;
// //      console.log(userDataArray);
// //    });
// // }
// $(document).ready(function() {
//   //Getting a reference to the input field where user adds a new todo
//   var $newSkillInput = $("input.new-item");
//   // Our new userSkillsArray will go inside the todoContainer
//   var $skillsContainer = $("#skills-Container");
//   // Adding event listeners for deleting, editing, and adding todos
//   $(document).on("click", ".todo-item", editRating);
//   $(document).on("keyup", ".todo-item", finishEdit);
//   $(document).on("blur", ".todo-item", cancelEdit);
//   $(document).on("submit", "#todo-form", insertTodo);
//   // Our initial userSkillsArray array
//   var userSkillsArray = [];
//   // Getting userSkillsArray from database when page loads
//   getUserSkills();
//   // This function resets the userSkillsArray displayed with new userSkillsArray from the database
//   function initializeRows() {
//     $skillsContainer.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < userSkillsArray.length; i++) {
//       rowsToAdd.push(createNewRow(userSkillsArray[i]));
//     }
//     $todoContainer.prepend(rowsToAdd);
//   }
//   // This function grabs userSkillsArray from the database and updates the view
//   function getUserSkills() {
//     console.log("entered the get user skills function");
//     $.get("/api/getuserskills", function(data) {
//       console.log("after the get call");
//       userSkillsArray = data;
//       // initializeRows();
//       console.log(userSkillsArray);
//     });
//   }
//   // This function handles showing the input box for a user to edit a todo
//   function editRating() {
//     var currentRating = $(this).data("ratings"); //***********************WHAT IS THIS SUPPOSED TO BE???????????*********/
//     $(this).children().hide();
//     $(this).children("input.edit").val(currentRating.text);
//     $(this).children("input.edit").show();
//     $(this).children("input.edit").focus();
//   }
//   // This function starts updating a todo in the database if a user hits the "Enter Key"
//   // While in edit mode
//   function finishEdit(event) {
//     var updatedRating = $(this).data("ratings");
//     if (event.which === 13) {
//       updatedRating.text = $(this).children("input").val().trim();
//       $(this).blur();
//       updateRating(updatedRating);
//     }
//   }
//   // This function updates a todo in our database
//   function updateRating(ratings) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/ratings", //***************WHAT SHOULD THIS BE????!?!?!?!?!?!?!?!*****************************/
//       data: ratings
//     }).then(getUserSkills);
//   }
//   // This function is called whenever a todo item is in edit mode and loses focus
//   // This cancels any edits being made
//   function cancelEdit() {
//     var currentRating = $(this).data("ratings");
//     if (currentRating) {
//       $(this).children().hide();
//       $(this).children("input.edit").val(currentRatings.text);
//       $(this).children("span").show();
//       $(this).children("button").show();
//     }
//   }
//   // This function constructs a todo-item row
//   function createNewRow(UserSkillsProfile) {
//     var $newInputRow = $(
//       [
//         "<li class='list-group-item todo-item'>", //turn into skill, not editable
//         "<li class='list-group-item todo-item'>", //turn into rating, make rating editable
//         "<span>",
//         UserSkillsProfile.text,
//         "</span>",
//         "<input type='text' class='edit' style='display: none;'>",
//         "<button class='delete btn btn-danger'>x</button>",
//         "<button class='complete btn btn-primary'>✓</button>",
//         "</li>"
//       ].join("")
//     );

//     $newInputRow.find("input.edit").css("display", "none");
//     $newInputRow.data("UserSkillsProfile", UserSkillsProfile);
//     return $newInputRow;
//   }
//   // This function inserts a new todo into our database and then updates the view
//   function insertSkill(event) {
//     event.preventDefault();
//     var skill = {
//       text: $newItemInput.val().trim(),
//       complete: false
//     };
//     $.post("/api/UserSkillsProfiles", UserSkillsProfiles, getUserSkills);
//     $newSkillInput.val("");
//   }
// });
