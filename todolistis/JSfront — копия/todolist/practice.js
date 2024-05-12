const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const reorderIcon = document.getElementById("reorder-icon");
const btn = document.getElementById("btnn1");

function addListItem() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",  
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

btn.addEventListener("click", addListItem);
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addListItem();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  reorderIcon.addEventListener("click", function () {
    const listItems = listContainer.querySelectorAll("li");

    listItems.forEach((item) => {
      if (!item.classList.contains("checked")) {
        listContainer.insertBefore(item, listContainer.firstChild);
      }
    });
  });
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
