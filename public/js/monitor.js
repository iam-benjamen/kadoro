import dragDrop from "./drag_drop.js";


function monitorContainer() {
  const tasks = document.querySelectorAll(".container-task");
  const containers = document.querySelectorAll(".container-content");

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
    const delete_icon = item.children[1];

    //Hide and show delete button
    item.addEventListener("mouseenter", () => {
      delete_icon.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      delete_icon.style.display = "none";
    });

    //Some color effects
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

  dragDrop(tasks);
}

export default monitorContainer;
