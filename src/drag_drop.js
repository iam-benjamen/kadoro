import monitorContainer from "./monitor.js";

//Implementing Drag and Drop functionality

function dragDrop() {
  const tasks = document.querySelectorAll(".container-task");
  const containers = document.querySelectorAll(".container-content");


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
}

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

export default dragDrop;
