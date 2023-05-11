let countEL = document.getElementById("count-el");
let nameEL = document.getElementById("name-el");
let count = 0;

// INCREMENT FUNCTION
function incCount() {
  count = count + 1;
  countEL.textContent = count;
}

// SAVE FUNCTION
function saveBtn() {
  let nameStr = count + " - ";
  nameEL.textContent += nameStr;
  countEL.textContent = 0;
  count = 0;
}
