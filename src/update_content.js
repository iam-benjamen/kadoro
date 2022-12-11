import deleteTasks from "./delete_task.js";
import dragDrop from "./drag_drop.js";

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
        console.log("empty!");
      }

      if (!item.classList.contains("no_task")) {
        const value = item.textContent
          .replace("drag_handle", "")
          .replace("delete", "")
          .trim();

        array[1].push(value);
        console.log(array[1]);
        deleteTasks(array[1]);
      }
    });
  });
    const tasks = document.querySelectorAll(".container-task");
    dragDrop(tasks);
}

export default updateContent