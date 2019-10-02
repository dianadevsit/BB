// var userDataArray = [];
//    console.log(user);
//    console.log("Ready to make the get request");
//    $.get("/api/getuser", function(data) {
//      console.log("After the get request is complete");
//      userDataArray = data;
//      console.log(userDataArray);
//    });






   $(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newSkillInput = $("input.new-item");
    // Our new userSkillsArray will go inside the todoContainer
    var $todoContainer = $("#skillsContainer");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteTodo);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".todo-item", editRating);
    $(document).on("keyup", ".todo-item", finishEdit);
    $(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#todo-form", insertTodo);
  
    // Our initial userSkillsArray array
    var userSkillsArray = [];
  
    // Getting userSkillsArray from database when page loads
    getUserSkills();
  
    // This function resets the userSkillsArray displayed with new userSkillsArray from the database
    function initializeRows() {
      $todoContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
      }
      $todoContainer.prepend(rowsToAdd);
    }
  
    // This function grabs userSkillsArray from the database and updates the view
    function getUserSkills() {
      $.get("/api/getUserSkills", function(data) {
        userSkillsArray = data;
        initializeRows();
      });
    }
  
    // This function deletes a todo when the user clicks the delete button
    function deleteTodo(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/todos/" + id
      }).then(getUserSkills);
    }
  
    // This function handles showing the input box for a user to edit a todo
    function editTodo() {
      var currentTodo = $(this).data("todo");
      $(this).children().hide();
      $(this).children("input.edit").val(currentTodo.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
  
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var todo = $(this).parent().data("todo");
      todo.complete = !todo.complete;
      updateTodo(todo);
    }
  
    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedTodo = $(this).data("todo");
      if (event.which === 13) {
        updatedTodo.text = $(this).children("input").val().trim();
        $(this).blur();
        updateTodo(updatedTodo);
      }
    }
  
    // This function updates a todo in our database
    function updateTodo(todo) {
      $.ajax({
        method: "PUT",
        url: "/api/todos",
        data: todo
      }).then(getUserSkills);
    }
  
    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentTodo = $(this).data("todo");
      if (currentTodo) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentTodo.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
  
    // This function constructs a todo-item row
    function createNewRow(todo) {
      var $newInputRow = $(
        [
          "<li class='list-group-item todo-item'>",
          "<span>",
          todo.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", todo.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("todo", todo);
      if (todo.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertTodo(event) {
      event.preventDefault();
      var todo = {
        text: $newItemInput.val().trim(),
        complete: false
      };
  
      $.post("/api/todos", todo, getUserSkills);
      $newItemInput.val("");
    }
  });