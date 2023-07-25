function displayMenuBar() {
  const menuBtn = document.querySelector(".menu-btn");
  const menuContainer = document.querySelector(".menu-container");

  menuBtn.addEventListener("click", () => {
    const menuContainerDisplay = menuContainer.getAttribute("display");
    const computedStyle = getComputedStyle(menuContainer);

    if (menuContainerDisplay === "none" || computedStyle.display === "none") {
      menuContainer.setAttribute("display", "flex");
      menuContainer.style.display = "flex";
    } else {
      menuContainer.setAttribute("display", "none");
      menuContainer.style.display = "none";
    }
  });
}

function displayAddTaskCard() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const topAddTaskBtn = document.querySelector(".top-add-task-btn");
  const addTaskCard = document.querySelector(".add-task-card");

  addTaskBtn.addEventListener("click", () => {
    if (addTaskCard.style.display === "none") {
      addTaskCard.style.display = "block";
    } else {
      addTaskCard.style.display = "none";
    }
  });
  topAddTaskBtn.addEventListener("click", () => {
    if (addTaskCard.style.display === "none") {
      addTaskCard.style.display = "block";
    } else {
      addTaskCard.style.display = "none";
    }
  });
}

function removeAddTaskCard() {
  const cancelBtn = document.querySelector(".primary-btn");
  const addTaskBtn = document.querySelector(".secondary-btn");
  const addTaskCard = document.querySelector(".add-task-card");

  cancelBtn.addEventListener("click", () => {
    if (addTaskCard.style.display === "block") {
      addTaskCard.style.display = "none";
    } else {
      addTaskCard.style.display = "block";
    }
  });
  addTaskBtn.addEventListener("click", () => {
    if (addTaskCard.style.display === "block") {
      addTaskCard.style.display = "none";
    } else {
      addTaskCard.style.display = "block";
    }
  });
}

function DisplayAddedTask(Tit, Des, date) {
  return `
    <div class="added-task-heading">
        <div class="added-task-heading-left">
            <svg class="hidden-svgs" width="24" height="24">
                <path fill="currentColor"
                    d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z">
                </path>
            </svg>
            <button class="checkbox-btn">
                <svg class="checkbox" width="24" height="24">
                    <path fill="currentColor"
                        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z">
                    </path>
                </svg>
            </button>
            <h3 id="task-heading">${Tit}</h3>
        </div>
        <div class="added-task-heading-right">
        
            <svg class="hidden-svgs" width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg>
            <svg class="hidden-svgs" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z" fill="currentColor"></path></svg>
            <svg class="hidden-svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/comments.svg"><path fill="currentColor" fill-rule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"></path></svg>
            <svg class="hidden-svgs" width="15" height="3"><path d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="evenodd"></path></svg>
        </div>
    </div>
    <div class="added-task-body">
        <div class="added-task-description">
            <h6 id="task-description">${Des}</h6>
            <h6 id="task-description">${date}</h6>
        </div>
    </div>
    `;
}

function addTask() {
  const addTaskBtn = document.querySelector(".add-task-card .secondary-btn");
  addTaskBtn.addEventListener("click", storeTask);
}
function storeTask() {
  const taskNameInput = document.getElementById("taskNameInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const taskDateInput = document.getElementById("dateInput");

  const taskName = taskNameInput.value;
  const description = descriptionInput.value;
  const date = taskDateInput.value;

  const container1 = document.querySelector(".added-tasks");
  const container2 = document.querySelector(".upcoming-tasks-body");
  const container3 = document.querySelector(".missed-tasks-body");

  // Check if both inputs are not empty before adding the task
  if (
    taskName.trim() !== "" &&
    description.trim() !== "" &&
    date.trim() !== ""
  ) {
    const taskObject = {
      title: taskName,
      descriptionDetail: description,
      dateDetail: date,
    };
    const checkDate = new Date(date);
    const today = new Date();
    if (checkDate.toDateString() === today.toDateString()) {
      tasksToday.push(taskObject);
      container1.innerHTML += DisplayAddedTask(taskName, description, date);
    } else if (checkDate < today) {
      missedTasks.push(taskObject);
      container3.innerHTML += DisplayAddedTask(taskName, description, date);
    } else {
      upcomingTasks.push(taskObject);
      container2.innerHTML += DisplayAddedTask(taskName, description, date);
    }

    // console.log("Task added:", taskName, description);
    clearInputs();
  } else {
    // alert(
    //   "Please fill in both Task name and Description before adding the task."
    // );
  }
}
function clearInputs() {
  const taskNameInput = document.getElementById("taskNameInput");
  const descriptionInput = document.getElementById("descriptionInput");
  taskNameInput.value = "";
  descriptionInput.value = "";

  removeAddTaskCard();
}

function displayHomePageType() {
  const todayCard = document.querySelector(".daily-task-container");
  const missedCard = document.querySelector(".missed-tasks-container");
  const upcomingCard = document.querySelector(".upcoming-tasks-container");
  const suggestionCard = document.querySelector(".suggestion-tasks-container");

  const todayBtn = document.querySelector(".today");
  const missedBtn = document.querySelector(".missed");
  const upcomingBtn = document.querySelector(".upcoming");
  const suggestionBtn = document.querySelector(".suggestion");
  todayBtn.addEventListener("click", () => {
    todayCard.style.display = "block";
    missedCard.style.display = "none";
    upcomingCard.style.display = "none";
    suggestionCard.style.display="none";
  });

  missedBtn.addEventListener("click", () => {
    todayCard.style.display = "none";
    missedCard.style.display = "flex";
    upcomingCard.style.display = "none";
    suggestionCard.style.display="none";
  });

  upcomingBtn.addEventListener("click", () => {
    todayCard.style.display = "none";
    missedCard.style.display = "none";
    upcomingCard.style.display = "flex";
    suggestionCard.style.display="none";
  });
  suggestionBtn.addEventListener("click", () => {
    todayCard.style.display = "none";
    missedCard.style.display = "none";
    upcomingCard.style.display = "none";
    suggestionCard.style.display="flex";
  });
}









function displayDefault() {
  

  const container = document.querySelector(".suggestion-tasks-body");
    const taskObject = {
      title: "",
      descriptionDetail: "",
      dateDetail: "",
    };
    var todayDate = new Date();
    todayDate = todayDate.toISOString().slice(0, 10);
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    // Once the JSON data is retrieved, store it in the array
    todoArray.push(...json);


    todoArray.forEach(todo => {

      
      taskObject.title="";
      taskObject.dateDetail="";
      taskObject.descriptionDetail="";
      taskObject.title = todo.title;
      taskObject.descriptionDetail="Important task.";
      taskObject.dateDetail=todayDate;
      tasksToday.push(taskObject);
      container.innerHTML += DisplayAddedTask(taskObject.title, taskObject.descriptionDetail, taskObject.dateDetail);
    });

  });
  
    
}

let tasksToday = [];
let upcomingTasks = [];
let missedTasks = [];
var todoArray = [];
document.addEventListener("DOMContentLoaded", () => {
  displayMenuBar();
  displayAddTaskCard();
  removeAddTaskCard();
  addTask();
  displayHomePageType();
  displayDefault();
});
