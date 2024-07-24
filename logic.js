let ul = document.querySelector(".input-list");

function addTask() {
  let userInput = document.querySelector(".add-task");

  let inputValue = userInput.value;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.style.border = "1px solid #B1A9AE";
  span.style.width = "10px";
  span.style.height = "10px";

  let label = document.createElement("label");
  label.className = "task";
  label.htmlFor = "task";
  label.onclick = toggle;
  label.textContent = inputValue;

  let button = document.createElement("button");
  button.className = "x-button";
  button.innerHTML = "&#x2715;";

  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(button);

  if (inputValue === "") {
    return;
  } else {
    document.querySelector(".input-list").appendChild(li);
    userInput.value = "";
  }

  document.querySelectorAll(".x-button").forEach((button) => {
    button.addEventListener("click", function () {
      let li = this.parentElement;
      li.remove();
      saveData();
    });
  });

  saveData();
}

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showData() {
  ul.innerHTML = localStorage.getItem("data");

  attachEventListener();
}

function attachEventListener() {
  document.querySelectorAll(".x-button").forEach((button) => {
    button.addEventListener("click", function () {
      let li = this.parentElement;
      li.remove();
      saveData();
    });
  });

  document.querySelectorAll(".task").forEach((label) => {
    label.onclick = toggle;
  });
}

function toggle(event) {
  let label = event.target;
  let span = label.previousElementSibling;
  let triggerToggle = label.classList.toggle("strike-through");

  if (triggerToggle) {
    span.style.border = "1px solid green";
    span.style.borderTop = "none";
    span.style.borderRight = "none";
    span.style.transform = "rotate(290deg)";
  } else {
    span.style.border = "1px solid #B1A9AE";
    span.style.transform = "rotate(0deg)";
  }
  saveData();
}

showData();
