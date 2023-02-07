import monitorContainer from "./monitor.js";
import deleteTasks from "./delete_task.js";
const containers = document.querySelectorAll(".container-content");


//Loop through data and output result and apply drag&Drop functionality
export default function outputData() {
  containers.forEach((container) => {
    const key = container.id.split("_")[0];
    const content = localStorage.getItem(key).split(",");

    if (!content || content[0] === "") {
      container.innerHTML = 
      ` <div class="no_task">No tasks here</div>`;
    } else {
      content.forEach((item) => {
        container.innerHTML += `
          <div class="container-task" draggable="true">
            <span class="material-symbols-outlined" id="draggable_icon"> drag_handle </span>
            ${item}
            <span class="material-symbols-outlined" id="delete_icon"> delete </span>
          </div>`;
      });
    }
    monitorContainer();
    deleteTasks(content);
  });
}
