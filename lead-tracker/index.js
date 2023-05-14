let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");

saveEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
      <a target= '_blank' href = '${myLeads[i]}'>${myLeads[i]}</a>
      </li>`;
    // below is for reference:
    // -------------------------------------
    // let li = document.createElement("li");
    // li.textContent = inputArr[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
