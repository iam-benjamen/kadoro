const allowDrop = (e) => {
  e.preventDefault();
};

const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id);
};
