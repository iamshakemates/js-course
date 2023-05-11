let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function incCount() {
  count = count + 1;
  countEL.innerText = count;
  //   console.log(count);
}

function saveBtn() {
  console.log(count);
}
