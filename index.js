let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let nameEL = document.getElementById("name-el");

function incCount() {
  count = count + 1;
  countEL.innerText = count;
}

function saveBtn() {
  let nameStr = count + "-";
  nameEL.innerText += nameStr;
}
