import outputData from "./outputData.js"
import handleFormOperations from "./handle_form.js";
import handleAddClick from "./handleClick.js"
import user from "../../utils/getUser.js";
import { auth } from "../../utils/firebase.js";
import { signOut } from "firebase/auth";

// Add Buttons
const addBtnCurrent = document.querySelector("#add_current_task");
const addBtnOngoing = document.querySelector("#add_ongoing_task");
const addBtnCompleted = document.querySelector("#add_completed_task");

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
const welcomeUser = document.querySelector(".welcome");
const logout = document.querySelector("#logout");


let currentValue = "";
let ongoingValue = "";
let completedValue = "";


//for each of the containers, pull data from local storage and update it
window.addEventListener("load", () => {
  outputData();
  const user_name = user.split(" ");

  if (user) {
    welcomeUser.textContent = `Welcome ${user_name[1] || user_name[0]}`;
  }
});



//Form operations
handleFormOperations(
  current_form,
  current_field,
  currentValue,
  inputCurrent,
  currentContainer
);

handleFormOperations(
  ongoing_form,
  ongoing_field,
  ongoingValue,
  inputOngoing,
  ongoingContainer
);

handleFormOperations(
  completed_form,
  completed_field,
  completedValue,
  inputCompleted,
  completedContainer
);


handleAddClick(addBtnCurrent, inputCurrent);
handleAddClick(addBtnOngoing, inputOngoing);
handleAddClick(addBtnCompleted, inputCompleted);


//handle Log out
logout.addEventListener("click", () => {
  const baseUrl = window.location.origin;

  signOut(auth)
    .then(() => {
      console.log("hi");
      localStorage.removeItem("user");
      window.history.pushState({}, "", `${baseUrl}/auth`);
      window.location.reload();
    })
    .catch((error) => {
      console.log("An error occured!");
    });
});