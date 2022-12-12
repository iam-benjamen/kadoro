import monitorContainer from "./monitor.js";
import updateContent from "./update_content.js";


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

export default handleFormOperations