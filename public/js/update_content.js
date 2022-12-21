import deleteTasks from "./delete_task.js";
import dragDrop from "./drag_drop.js";
import monitorContainer from "./monitor.js";

//A function to update content list when it is added, dragged or deleted.
function updateContent() {
  const current_tasks = document.querySelector("#current_container").children;
  const ongoing_tasks = document.querySelector("#ongoing_container").children;
  const completed_tasks = document.querySelector(
    "#completed_container"
  ).children;

  let currentContent = [];
  let ongoingContent = [];
  let completedContent = [];

  const current_array = Array.from(current_tasks);
  const ongoing_array = Array.from(ongoing_tasks);
  const completed_array = Array.from(completed_tasks);

  const collection = [
    [current_array, currentContent],
    [ongoing_array, ongoingContent],
    [completed_array, completedContent],
  ];

  collection.forEach((array) => {
    array[0].forEach((item) => {

      if (item.classList.contains("no_task")) {
        saveToLocalStorage(item, [array[1]]);
      }

      if (!item.classList.contains("no_task")) {
        const value = item.textContent
          .replace("drag_handle", "")
          .replace("delete", "")
          .trim();

        array[1].push(value);
        saveToLocalStorage(item, [array[1]]);
        deleteTasks(array[1]);
      }
    });
  });
  monitorContainer()
}

function saveToLocalStorage(item, data) {
  if (item.parentElement.id === "current_container") {
    localStorage.setItem("current", data);
  }

  if (item.parentElement.id === "ongoing_container") {
    localStorage.setItem("ongoing", data);
  }

  if (item.parentElement.id === "completed_container") {
    localStorage.setItem("completed", data);
  }
}
export default updateContent;
