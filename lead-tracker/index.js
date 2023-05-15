let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
const deleteEL = document.getElementById("delete-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

saveEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

deleteEL.addEventListener("dblclick", function () {
  console.log("dblclicked");
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
      <a target= '_blank' href = '${myLeads[i]}'>${myLeads[i]}</a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}
