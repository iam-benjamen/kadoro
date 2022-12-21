import updateContent from "./update_content.js";
import monitorContainer from "./monitor.js";

//delete functionality
function deleteTasks(content) {
  const deleteIcons = document.querySelectorAll("#delete_icon");

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.parentElement.remove();

      updateContent();
      monitorContainer();
    });
  });
}

export default deleteTasks;
