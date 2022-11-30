//Elements
const addBtnCurrent = document.querySelector("#add_current_task");
const addBtnOngoing = document.querySelector("#add_ongoing_task");
const addBtnCompleted = document.querySelector("#add_completed_task");

const inputField = document.querySelector(".input_field");

const inputCurrent = document.querySelector("#current_task_input");
const inputOngoing = document.querySelector("#ongoing_task_input");
const inputCompleted = document.querySelector("#completed_task_input");

const tasks = document.querySelectorAll(".container-task");
const containers = document.querySelectorAll(".container-content");
const noTask = document.querySelector(".no_task");
const currentContainer = document.querySelector("#current_container");

const current_form = document.querySelector(".first_form");
const current_field = document.querySelector("#first_input");

let current;

const content = [
  "I will cook and wash",
  "Go to church and worship",
  "Remain celibate till marriage",
  "call my babe",
];

// content.forEach((item) => {
//   currentContainer.insertAdjacentHTML(
//     "afterend",
//     `<div class="container-task" draggable="true">
//       <span class="material-symbols-outlined"> menu </span>${item}
//     </div>`
//   );
// });

current_field.addEventListener("change", (e) => {
  current = e.target.value;
});

current_form.addEventListener("submit", (e) => {
  e.preventDefault();
  current_field.value = "";
  inputCurrent.style.display = "none";

  const task = document.createElement("div");
  task.innerHTML = `<div class="container-task" draggable="true">
       <span class="material-symbols-outlined"> menu </span>${current}
     </div>`
  
  currentContainer.append(task);
});

// Operations on container
function monitorContainer() {
  containers.forEach((container) => {
    if (container.children.length <= 1) {
      container.children[0].style.display = "block";
    } else {
      [...container.children].forEach((child) => {
        if (child.classList.contains("no_task")) {
          child.style.display = "none";
        }
      });
    }
  });

  tasks.forEach((item) => {
    const parent = item.parentElement;

    if (parent.id === "current_container") {
      item.style.border = "2px solid orange";
    }

    if (parent.id === "ongoing_container") {
      item.style.border = "2px solid yellow";
    }

    if (parent.id === "completed_container") {
      item.style.border = "2px solid green";
    }
  });
}

monitorContainer();

//Implementing Drag and Drop functionality
tasks.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
    monitorContainer();
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();

    const afterElement = getDragAFterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (afterElement === null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAFterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".container-task:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

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

// const handleChange = (ev) => {
//   console.log(ev.target.value);
// };

//Features to be iplemented
/* 
1. Users can add tasks to any of the three columns by clicking add button
2. Tasks summaries are displayed and details unveiled on click(a modal), with an edit button to persist
3. User data is persisted as it is being edited. (indexdb/Firebase to be used)
4. Drag and drop functionality is implemented which mutates user data
5. Simple FIrebase Auth to ensure user uniqueness, signup and signin 
*/
