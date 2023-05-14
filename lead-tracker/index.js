// function handleClick() {
//   console.log("Button clicked");
// }

let handleClick = document.getElementById("input-btn");

handleClick.addEventListener("click", function () {
  console.log("Button clicked");
});

let boxBtn = document.getElementById("sidetrack");

boxBtn.addEventListener("click", function () {
  console.log("Sidetrack is clicked");
});
