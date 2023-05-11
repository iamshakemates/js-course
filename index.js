let count = 0;
let countEL = document.getElementById("count-el");

function incCount() {
  count = count + 1;
  countEL.innerText = count;
  console.log(count);
}
