import dragDrop from "./drag_drop.js";
import monitorContainer from "./monitor.js";
import updateContent from "./update_content.js"

// Add Buttons
const addBtnCurrent = document.querySelector("#add_current_task");
const addBtnOngoing = document.querySelector("#add_ongoing_task");
const addBtnCompleted = document.querySelector("#add_completed_task");

const inputField = document.querySelector(".input_field");

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
let tasks = document.querySelectorAll(".container-task");
const containers = document.querySelectorAll(".container-content");
const noTask = document.querySelector(".no_task");

let currentValue = "";
let ongoingValue = "";
let completedValue = "";

//Loop through data and output result and apply drag&Drop functionality
function outputData(content, container) {
  container.innerHTML = ` <div class="no_task">No tasks here</div>`;

  content.forEach((item) => {
    container.innerHTML += `
    <div class="container-task" draggable="true">
      <span class="material-symbols-outlined" id="draggable_icon"> drag_handle </span>
      ${item}
      <span class="material-symbols-outlined" id="delete_icon"> delete </span>
    </div>`;
  });


}


//Handle Form change and Data
function handleFormOperations(form, field, formValue, input, container) {
  //input field change
  field.addEventListener("change", (e) => {
    formValue = e.target.value.trim();
  });

  //form submit - create task
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formValue !== "") {
      field.value = "";
      input.style.display = "none";

      container.innerHTML += `
      <div class="container-task" draggable="true">
        <span class="material-symbols-outlined" id="draggable_icon"> drag_handle </span>
        ${formValue}
        <span class="material-symbols-outlined" id="delete_icon"> delete </span>
      </div>`;
      monitorContainer();
    } else {
      alert("cannot be empty");
    }

    updateContent();
  });
}

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
monitorContainer();

//Approach
// 1. Implement CRUD
// 2. Data Storage
// 3. Implement Drag and Drop
// 4. Authentication


updateContent();
