// const allowDrop = (e) => {
//   e.preventDefault();
// };

// const drag = (e) => {
//   e.dataTransfer.setData("text", e.target.id);
// };

const testing = document.querySelectorAll(".material-symbols-outlined ");
testing.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("add icon clicked!");
  });
});


//Features to be iplemented
/* 
1. Users can add tasks (summary, details) to any of the three columns by clicking add button
2. Tasks summaries are displayed and details unveiled on click(a modal), with an edit button to persist
3. User data is persisted as it is being edited. (indexdb/Firebase to be used)
4. Drag and drop functionality is implemented which mutates user data
5. Simple FIrebase Auth to ensure user uniqueness, signup and signin 
*/
