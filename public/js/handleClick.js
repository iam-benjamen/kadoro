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

export default handleAddClick