import dragDrop from "./drag_drop.js";
import monitorContainer from "./monitor.js";

//Elements
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
const tasks = document.querySelectorAll(".container-task");

const containers = document.querySelectorAll(".container-content");
const noTask = document.querySelector(".no_task");

let currentValue = "";
let ongoingValue = "";
let completedValue = "";

//Some dummy Data
const currentContent = [
  // "I will cook and wash",
  // "Go to church and worship",
  // "Remain celibate till marriage",
  // "call my babe",
];

const ongoingContent = [
  // "I will sing and dance",
  // "Go to church and dance",
  // "Remain happy till marriage",
  // "call my mum",
];

const completedContent = [
  // "I will sing and dance",
  // "Go to church and dance",
  // "Remain happy till marriage",
  // "call my mum",
];

//Loop through data and output result
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

  deleteTasks(content);

  const tasks = document.querySelectorAll(".container-task");
  console.log(tasks);
}

function deleteTasks(content) {
  //delete task
  const deleteIcons = document.querySelectorAll("#delete_icon");

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const value = this.parentElement.textContent
        .replace("drag_handle", "")
        .replace("delete", "")
        .trim();

      content = content.filter((item) => {
        item !== value;
      });

      this.parentElement.remove();

      const tasks = document.querySelectorAll(".container-task");
      console.log(tasks);
      monitorContainer();
    });
  });
}

outputData(currentContent, currentContainer);
outputData(ongoingContent, ongoingContainer);
outputData(completedContent, completedContainer);

//Handle Form change and Data
function handleFormOperations(
  form,
  field,
  formValue,
  input,
  content,
  container
) {
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
      content.push(`${formValue}`);
    } else {
      alert("cannot be empty");
    }

    outputData(content, container);
    monitorContainer();
  });
}

handleFormOperations(
  current_form,
  current_field,
  currentValue,
  inputCurrent,
  currentContent,
  currentContainer
);

handleFormOperations(
  ongoing_form,
  ongoing_field,
  ongoingValue,
  inputOngoing,
  ongoingContent,
  ongoingContainer
);

handleFormOperations(
  completed_form,
  completed_field,
  completedValue,
  inputCompleted,
  completedContent,
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
dragDrop();

//Approach
// 1. Implement CRUD
// 2. Data Storage
// 3. Implement Drag and Drop
// 4. Authentication
