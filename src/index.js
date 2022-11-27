//Elements
const addBtnCurrent = document.querySelector("#add_current_task");
const addBtnOngoing = document.querySelector("#add_ongoing_task");
const addBtnCompleted = document.querySelector("#add_completed_task");
const inputField = document.querySelector(".input_field");
const inputCurrent = document.querySelector("#current_task_input");
const inputOngoing = document.querySelector("#ongoing_task_input");
const inputCompleted = document.querySelector("#completed_task_input");

//Show input field on click and focus auto
const handleAddClick = (element, input) => {
  element.addEventListener("click", () => {
   
    const current_display = getComputedStyle(input).display;
 
    current_display == "none"
      ? (input.style.display = "block")
      : (input.style.display = "none");

    const inputField = input.children[0][0];
    inputField.focus();
  });
};

handleAddClick(addBtnCurrent, inputCurrent);
handleAddClick(addBtnOngoing, inputOngoing);
handleAddClick(addBtnCompleted, inputCompleted);


//Features to be iplemented
/* 
1. Users can add tasks (summary, details) to any of the three columns by clicking add button
2. Tasks summaries are displayed and details unveiled on click(a modal), with an edit button to persist
3. User data is persisted as it is being edited. (indexdb/Firebase to be used)
4. Drag and drop functionality is implemented which mutates user data
5. Simple FIrebase Auth to ensure user uniqueness, signup and signin 
*/
