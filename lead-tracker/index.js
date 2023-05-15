let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
const deleteEL = document.getElementById("delete-el");
const tabEl = document.getElementById("tab-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// --------LOGIC--------------
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// -----RENDER FUNCTION--------
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
      <a target= '_blank' href = '${leads[i]}'>${leads[i]}</a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

// ---------SAVE BUTTON------------
saveEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});

// ------ SAVE TAB ----------------
tabEl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// -------DELETE BUTTON-----------
deleteEL.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
