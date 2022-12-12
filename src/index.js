import deleteTasks from "./delete_task.js";
import monitorContainer from "./monitor.js";
import handleFormOperations from "./handle_form.js";


// Add Buttons
const addBtnCurrent = document.querySelector("#add_current_task");
const addBtnOngoing = document.querySelector("#add_ongoing_task");
const addBtnCompleted = document.querySelector("#add_completed_task");

//Input fields display
const inputCurrent = document.querySelector("#current_task_input");
const inputOngoing = document.querySelector("#ongoing_task_input");
const inputCompleted = document.querySelector("#completed_task_input");

//Containers
const currentContainer = document.querySelector("#current_container");
const ongoingContainer = document.querySelector("#ongoing_container");
const completedContainer = document.querySelector("#completed_container");

//Forms and Input
const current_form = document.querySelector(".first_form");
const current_field = document.querySelector("#first_input");

const ongoing_form = document.querySelector(".second_form");
const ongoing_field = document.querySelector("#second_input");

const completed_form = document.querySelector(".third_form");
const completed_field = document.querySelector("#third_input");

//Others
const containers = document.querySelectorAll(".container-content");
let currentValue = "";
let ongoingValue = "";
let completedValue = "";


//Loop through data and output result and apply drag&Drop functionality
function outputData() {
  containers.forEach((container) => {
    const key = container.id.split("_")[0];
    const content = localStorage.getItem(key).split(",");
   

    if (!content || content[0] === "") {
      container.innerHTML = ` <div class="no_task">No tasks here</div>`;
    } else {
      content.forEach((item) => {
        container.innerHTML += `
          <div class="container-task" draggable="true">
            <span class="material-symbols-outlined" id="draggable_icon"> drag_handle </span>
            ${item}
            <span class="material-symbols-outlined" id="delete_icon"> delete </span>
          </div>`;
      });
      ;
    }
    monitorContainer();
    deleteTasks(content)
  });
}

//for each of the containers, pull data from local storage and update it
window.addEventListener("load", () => {
  outputData();
});

//Form operations
handleFormOperations(
  current_form,
  current_field,
  currentValue,
  inputCurrent,
  currentContainer
);

handleFormOperations(
  ongoing_form,
  ongoing_field,
  ongoingValue,
  inputOngoing,
  ongoingContainer
);

handleFormOperations(
  completed_form,
  completed_field,
  completedValue,
  inputCompleted,
  completedContainer
);

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



//Approach
// 1. Implement CRUD DONE
// 2. Data Storage DONE
// 3. Implement Drag and Drop DONE
// 4. Authentication


// 430 - Wake up, stretch & brush
// 445 - Read 10-15 pages of your current book
// 515 - write (journal your thoughts)
// 530 - Do something cognitively tasking (code, solve a programming or math problem)
// 630 - get ready for the day
// 700 to 1000 daily activities
//1100 - sleep

//WEEK AHEAD

//TWO TESTS, PRACTICALS, CLASSES, PRESENTATION
//FINISH KADORO
//START GES 102 & TEL 334
//PUBLISH AN ARTICLE
