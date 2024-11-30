import { todoLists } from "./todoist.js";
import { addTask } from "./task.js";
import { addDaysTask } from "./days.js";
import { completedTask } from "./completed.js";
import { addProject, addTaskToProject } from "./project.js";
import { priorityTaskOne } from "./priority1.js";
import { priorityTaskTwo } from "./priority2.js";
import { priorityTaskThree } from "./priority3.js";
import { priorityTaskFour } from "./priority4.js";
import { priorityTaskFive } from "./priority5.js";
import { projectList } from "./projectList.js";
import { deleteTask, deleteProject } from "./deleteTask.js";

import inclusive from "./images/all-inclusive-box.svg";
import calendar from "./images/calendar-check.svg";
import delIcon from "./images/delete-alert.svg";
import list from "./images/list-box.svg";
import plus from "./images/plus.svg";
import close from "./images/close.svg";

import "./index.css";
import "./task.css";
import "./completed.css";
import "./days.css";
import "./priorityone.css";
import "./prioritytwo.css";
import "./prioritythree.css";
import "./priorityfour.css";
import "./priorityfive.css";
import "./content.css";

let content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
  const openFormButton = document.getElementById("addTask");
  const closeFormButton = document.getElementById("close");
  const popupOverlay = document.getElementById("popupOverlay");
  const submitForm = document.getElementById("submitForm");
  const form = document.getElementById("popupForm");

  popupOverlay.style.display = "none";
  openFormButton.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
  });

  closeFormButton.addEventListener("click", () => {
    let form = document.getElementById("popupForm");
    popupOverlay.style.display = "none";
    setTimeout(() => {
      form.reset();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("popupForm");
    popupOverlay.style.display = "none";
    setTimeout(() => {
      form.reset();
    });
  });

  // Optionally close the form when clicking outside of it
  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});

//todo divs to display on page
let htmlDisplay = (function () {
  function display(title, description, dueDate, complete) {
    let todosDiv = document.createElement("div");
    todosDiv.classList.add("todoDiv");
    todosDiv.id = title;

    let headDiv = document.createElement("div");
    headDiv.classList.add("headDiv");

    let head = document.createElement("h1");
    head.classList.add("title");
    head.textContent = title;

    let del = document.createElement("img");
    del.src = delIcon;
    del.classList.add("delete");

    del.addEventListener("click", () => {
      deleteTask(title, description, dueDate);
      todosDiv.remove();
      todosList.projectLists();
    });

    let descriptionPara = document.createElement("p");
    descriptionPara.classList.add("descriptionPara");
    descriptionPara.textContent = description;

    let dueDatePara = document.createElement("div");
    dueDatePara.classList.add("dueDatePara");

    let dueDateImg = document.createElement("img");
    dueDateImg.src = calendar; // Image source for due date icon
    dueDateImg.classList.add("dueDateImg");

    let dueDateText = document.createElement("span");
    dueDateText.textContent = `Due: ${dueDate}`;

    dueDatePara.append(dueDateImg, dueDateText);

    let doneBox = document.createElement("button");
    doneBox.classList.add("doneBox");
    doneBox.textContent = "Done";

    let completedPara = document.createElement("p");
    completedPara.classList.add("completeBox");
    completedPara.textContent = "Completed";

    headDiv.append(head, del);
    todosDiv.append(
      headDiv,
      descriptionPara,
      dueDatePara,
      complete ? completedPara : doneBox,
    );

    doneBox.addEventListener("click", () => {
      complete = true;

      todosDiv.removeChild(doneBox);
      todosDiv.appendChild(completedPara);

      for (let tasks of todoLists) {
        if (
          tasks.title === title &&
          tasks.describtion === description &&
          tasks.dueDate === dueDate
        ) {
          tasks.completed = true;

          let getTasks = JSON.parse(localStorage.getItem("Todolists"));
          getTasks.splice(0);

          todoLists.forEach((element) => {
            getTasks.push(element);
          });

          localStorage.setItem("Todolists", JSON.stringify(getTasks));
        }
      }
    });

    return todosDiv;
  }

  //sidebar function html
  function sidebar() {
    let sidebarDiv = document.getElementById("sidebar");

    let ulContent = document.createElement("ul");

    let para1 = document.createElement("p");
    para1.classList.add("para");
    para1.id = "addTask";
    let Para1Img = document.createElement("img");
    Para1Img.src = plus;
    let liPara1 = document.createElement("li");
    liPara1.textContent = "Add Tasks";

    para1.appendChild(Para1Img);
    para1.appendChild(liPara1);

    let para2 = document.createElement("p");
    para2.classList.add("para");
    para2.id = "task";
    let Para2Img = document.createElement("img");
    Para2Img.src = list;
    let liPara2 = document.createElement("li");

    liPara2.textContent = "All Tasks";

    para2.appendChild(Para2Img);
    para2.appendChild(liPara2);

    let para3 = document.createElement("p");
    para3.classList.add("para");
    para3.id = "days";
    let Para3Img = document.createElement("img");
    Para3Img.src = calendar;
    let liPara3 = document.createElement("li");
    liPara3.textContent = "Days";

    para3.appendChild(Para3Img);
    para3.appendChild(liPara3);

    let para4 = document.createElement("p");
    para4.classList.add("para");
    para4.id = "myCompleted";
    let Para4Img = document.createElement("img");
    Para4Img.src = inclusive;
    let liPara4 = document.createElement("li");
    liPara4.textContent = "Completed Task";

    para4.appendChild(Para4Img);
    para4.appendChild(liPara4);

    let projectDiv = document.createElement("div");
    projectDiv.id = "project";

    let paraDiv = document.createElement("div");
    paraDiv.classList.add("para");
    let paraDivImg = document.createElement("img");
    paraDivImg.src = list;

    let h3 = document.createElement("h3");
    h3.id = "projectTasks";
    h3.textContent = "Project";

    let paraDivImg2 = document.createElement("img");
    paraDivImg2.src = close;
    paraDivImg2.id = "cancel";

    paraDiv.appendChild(paraDivImg);
    paraDiv.appendChild(h3);
    paraDiv.appendChild(paraDivImg2);

    projectDiv.appendChild(paraDiv);

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "prioritydiv";

    let li1 = document.createElement("p");
    li1.classList.add("para");
    li1.id = "one";
    li1.textContent = "#Priority One";
    li1.style.color = "gold";

    let li2 = document.createElement("p");
    li2.classList.add("para");
    li2.id = "two";
    li2.textContent = "#Priority Two";
    li2.style.color = "#F57D1F";

    let li3 = document.createElement("p");
    li3.classList.add("para");
    li3.id = "three";
    li3.textContent = "#Priority Three";
    li3.style.color = "#FF2626";

    let li4 = document.createElement("p");
    li4.classList.add("para");
    li4.id = "four";
    li4.textContent = "#Priority Four";
    li4.style.color = "#FDF0F6";

    let li5 = document.createElement("p");
    li5.classList.add("para");
    li5.id = "five";
    li5.textContent = "#Priority five";
    li5.style.color = "#69676e";

    priorityDiv.appendChild(li1);
    priorityDiv.appendChild(li2);
    priorityDiv.appendChild(li3);
    priorityDiv.appendChild(li4);
    priorityDiv.appendChild(li5);

    let para5 = document.createElement("p");
    para5.classList.add("para");
    let Para5Img = document.createElement("img");
    Para5Img.src = plus;

    let li = document.createElement("li");
    li.id = "addProject";
    li.textContent = "Add Project";

    para5.appendChild(Para5Img);
    para5.appendChild(li);

    ulContent.appendChild(para1);
    ulContent.appendChild(para2);
    ulContent.appendChild(para3);
    ulContent.appendChild(para4);
    ulContent.appendChild(projectDiv);
    ulContent.appendChild(priorityDiv);
    ulContent.appendChild(para5);

    return sidebarDiv.appendChild(ulContent);
  }

  //welcoming users to the page function
  function welcomingNote() {
    let taskMaster = document.getElementById("taskMaster");

    let noteDiv = document.createElement("div");
    noteDiv.id = "noteDiv";

    let note = document.createElement("div");
    note.id = "note";

    let noteH1 = document.createElement("h1");
    noteH1.id = "noteH1";
    noteH1.textContent = "Welcome to Task Master!";

    let paragraph = document.createElement("div");
    paragraph.id = "paragraph";
    paragraph.innerHTML =
      "<p>We’re so glad you're here! Whether you're looking to organize your day, keep track of important tasks, or simply boost your productivity, you've come to the right place.</p><p>Get started by adding your first task to stay on top of what matters most. Let’s make every day count—one task at a time!</p><p>Feel free to explore, and don't forget to check back regularly to keep your goals on track. Happy organizing!</p>";

    note.appendChild(noteH1);
    note.appendChild(paragraph);
    noteDiv.appendChild(note);
    content.appendChild(noteDiv);

    taskMaster.addEventListener("click", () => {
      content.innerHTML = "";
      content.appendChild(noteDiv);
    });
  }

  function showError(input) {
    let inputElement = document.getElementById(input);
    let inputValue = inputElement.value.trim();
    if (inputValue.length > 15) {
      inputElement.setCustomValidity("Words too long");
    } else inputElement.setCustomValidity("");

    inputElement.reportValidity();
  }

  document.getElementById("mytitle").addEventListener("input", () => {
    showError("mytitle");
  });

  return { display, sidebar, welcomingNote };
})();

htmlDisplay.sidebar();
htmlDisplay.welcomingNote();

let todosList = (function () {
  //this function render all the todolist tasks the user have.
  function allTask() {
    let tasks = document.getElementById("task");

    let tasksDiv = document.createElement("div");
    tasksDiv.id = "tasksDiv";

    tasks.addEventListener("click", () => {
      content.innerHTML = "";
      tasksDiv.innerHTML = "";

      for (let i = 0; i < todoLists.length; i++) {
        let displayContent = htmlDisplay.display(
          todoLists[i].title,
          todoLists[i].describtion,
          todoLists[i].dueDate,
          todoLists[i].completed,
        );
        tasksDiv.appendChild(displayContent);
      }
      return content.appendChild(tasksDiv);
    });
  }

  //this function render the days(sunday to monday) todolist tasks the users have.
  function daysTask(...days) {
    let daytask = document.getElementById("days");

    let daytasksDiv = document.createElement("div");
    daytasksDiv.id = "daytasksDiv";

    daytask.addEventListener("click", () => {
      content.innerHTML = "";
      daytasksDiv.innerHTML = "";

      for (let day of [...days]) {
        let getDaysTasks = addDaysTask(day);

        for (let elements of getDaysTasks) {
          let displayContent = htmlDisplay.display(
            elements.title,
            elements.describtion,
            elements.dueDate,
            elements.completed,
          );

          daytasksDiv.appendChild(displayContent);
        }
      }
      return content.appendChild(daytasksDiv);
    });
  }

  //this function render the completed tasks of the users.
  function completedTasks() {
    let completetodos = document.querySelector("#myCompleted");

    let todoCompletion = document.createElement("div");
    todoCompletion.id = "todoCompletion";

    completetodos.addEventListener("click", () => {
      content.innerHTML = "";
      todoCompletion.innerHTML = "";

      let myCompletedTodo = completedTask();

      for (let todos of myCompletedTodo) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );

        todoCompletion.appendChild(displayContent);
      }
      return content.appendChild(todoCompletion);
    });
  }

  //This function render the projects the users have on the page.
  function projectTasks() {
    let projectTodos = document.querySelector("#projectTasks");

    let project = document.querySelector("#project");

    project.addEventListener("click", () => {
      project.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

    let projectTodosDiv = document.createElement("div");
    projectTodosDiv.id = "projectTodosDiv";

    projectTodos.addEventListener("click", () => {
      projectTodosDiv.innerHTML = "";

      for (let key of Object.keys(projectList)) {
        let ulProject = document.createElement("ul");
        ulProject.id = "ulProject";
        ulProject.id = `${key}`; //Project name.

        let listHeadDiv = document.createElement("div");
        listHeadDiv.classList.add("listHeadDiv");

        let listTodos = document.createElement("li");
        listTodos.classList.add("head");
        listTodos.textContent = `${key}`; //The project's tasks.

        let del = document.createElement("img");
        del.src = delIcon;
        del.classList.add("delete");

        del.addEventListener("click", () => {
          deleteProject(key);

          let projectToRemove = document.getElementById(`${key}`);
          let parentTask = projectToRemove.parentElement;
          parentTask.removeChild(projectToRemove);
        });

        listHeadDiv.appendChild(listTodos);
        listHeadDiv.appendChild(del);
        ulProject.appendChild(listHeadDiv);

        let div = document.createElement("div");
        div.classList.add("div");

        for (let lists of projectList[key]) {
          let titleLists = document.createElement("li");
          titleLists.classList.add("lists");
          titleLists.textContent = `${lists.title}`;

          titleLists.addEventListener("click", () => {
            let fulldetailDiv = document.createElement("div");
            fulldetailDiv.id = "detailsDiv";
            content.innerHTML = "";

            let displayContent = htmlDisplay.display(
              lists.title,
              lists.describtion,
              lists.dueDate,
              lists.completed,
            );

            fulldetailDiv.appendChild(displayContent);
            content.appendChild(fulldetailDiv);
          });

          ulProject.appendChild(titleLists);

          listTodos.addEventListener("click", () => {
            content.innerHTML = "";

            let displayContent = htmlDisplay.display(
              lists.title,
              lists.describtion,
              lists.dueDate,
              lists.completed,
            );
            div.appendChild(displayContent);
            content.appendChild(div);
          });
        }

        projectTodosDiv.appendChild(ulProject);
      }

      let cancel = document.getElementById("cancel");
      cancel.addEventListener("click", () => {
        projectTodosDiv.innerHTML = "";
      });

      return projectTodos.appendChild(projectTodosDiv);
    });
  }

  //This function changes the options of the project selection as users add projects to page
  function projectLists() {
    let project = document.getElementById("projects");
    project.innerHTML = "";

    for (let key of Object.keys(projectList)) {
      let option = document.createElement("option");
      option.setAttribute("value", `${key}`);
      option.textContent = `${key}`;
      project.appendChild(option);
    }
    return project;
  }

  //This function add tasks to page as users add tasks through the form by filling the title, describtion, dueDate, priority, and project inputs
  function addTasks() {
    projectLists();

    let title = document.getElementById("mytitle");
    let describtion = document.getElementById("mydescribition");
    let dueDate = document.getElementById("mydueDate");
    let priorities = document.getElementById("myPriority");
    let projects = document.getElementById("projects");
    let submitForm = document.getElementById("popupForm");

    submitForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let titleValue = title.value;
      let describtionValue = describtion.value;
      let dueDateValue = dueDate.value;
      let priorityValue = priorities.value;
      let projectsVlaue = projects.value;
      //add taskToProject() add task to project once user click the project option in the option selection
      return (
        addTask(
          titleValue,
          describtionValue,
          dueDateValue.toLocaleLowerCase(),
          priorityValue,
          false,
          projectsVlaue,
        ),
        taskToProject()
      );
    });
  }

  //This function helps users to add projects to page
  function addTodoProject() {
    let addprojects = document.getElementById("addProject");
    let projectTitle = document.createElement("div");
    projectTitle.id = "projectTitle";

    addprojects.addEventListener("click", () => {
      projectTitle.innerHTML = "";

      let projectNameLabel = document.createElement("label");
      projectNameLabel.id = "nameLabel";
      projectNameLabel.textContent = "Title:";
      let projectNameInput = document.createElement("input");
      projectNameInput.setAttribute("type", "input");
      projectNameInput.id = "projectInput";

      let submit = document.createElement("button");
      submit.textContent = "Submit";
      submit.id = "projectSubmit";

      submit.addEventListener("click", () => {
        sidebar.removeChild(projectTitle);

        let nameValue = projectNameInput.value;
        addProject(nameValue);

        projectLists();
      });

      projectTitle.appendChild(projectNameLabel);
      projectTitle.appendChild(projectNameInput);
      projectTitle.appendChild(submit);
      return sidebar.appendChild(projectTitle);
    });
  }

  //This function add task the user want to save under specific project
  function taskToProject() {
    let myprojectTasks = document.getElementById("projects");

    for (let i = 0; i < myprojectTasks.length; i++) {
      addTaskToProject(todoLists, myprojectTasks[i].textContent);
    }

    return projectList;
  }

  function getTask() {
    return JSON.parse(localStorage.getItem("Todolists"));
  }

  //This function render the most important priority--priority 1
  function priorityOneTasks() {
    let priorityOne = document.querySelector("#one");

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priorityOne";
    priorityDiv.classList.add("priority");

    priorityOne.addEventListener("click", () => {
      content.innerHTML = "";
      priorityDiv.innerHTML = "";

      let priority = priorityTaskOne();

      for (let todos of priority) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );

        priorityDiv.appendChild(displayContent);
      }
      return content.appendChild(priorityDiv);
    });
  }

  //this function render the second priority--priority 2
  function priorityTwoTasks() {
    let priorityTwo = document.querySelector("#two");

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priorityTwo";
    priorityDiv.classList.add("priority");

    priorityTwo.addEventListener("click", () => {
      content.innerHTML = "";
      priorityDiv.innerHTML = "";

      let priority = priorityTaskTwo();

      for (let todos of priority) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );

        priorityDiv.appendChild(displayContent);
      }
      return content.appendChild(priorityDiv);
    });
  }

  //this function render the third priority--priority 3
  function priorityThreeTasks() {
    let priorityThree = document.querySelector("#three");

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priorityThree";
    priorityDiv.classList.add("priority");

    priorityThree.addEventListener("click", () => {
      content.innerHTML = "";
      priorityDiv.innerHTML = "";

      let priority = priorityTaskThree();

      for (let todos of priority) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );

        priorityDiv.appendChild(displayContent);
      }
      return content.appendChild(priorityDiv);
    });
  }

  //this function render the fourth priority--priority 4
  function priorityFourTasks() {
    let priorityFour = document.querySelector("#four");

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priorityFour";
    priorityDiv.classList.add("priority");

    priorityFour.addEventListener("click", () => {
      content.innerHTML = "";
      priorityDiv.innerHTML = "";

      let priority = priorityTaskFour();

      for (let todos of priority) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );
        priorityDiv.appendChild(displayContent);
      }
      return content.appendChild(priorityDiv);
    });
  }

  //this function render the fifth priority--priority 5
  function priorityFiveTasks() {
    let priorityFive = document.querySelector("#five");

    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priorityFive";
    priorityDiv.classList.add("priority");

    priorityFive.addEventListener("click", () => {
      content.innerHTML = "";
      priorityDiv.innerHTML = "";

      let priority = priorityTaskFive();

      for (let todos of priority) {
        let displayContent = htmlDisplay.display(
          todos.title,
          todos.describtion,
          todos.dueDate,
          todos.completed,
        );

        priorityDiv.appendChild(displayContent);
      }
      return content.appendChild(priorityDiv);
    });
  }

  return {
    allTask,
    daysTask,
    completedTasks,
    priorityOneTasks,
    priorityTwoTasks,
    priorityThreeTasks,
    priorityFourTasks,
    priorityFiveTasks,
    projectTasks,
    addTasks,
    addTodoProject,
    taskToProject,
    getTask,
    projectLists,
  };
})();

todosList.addTasks();
todosList.addTodoProject();
todosList.taskToProject();
todosList.allTask();
todosList.daysTask(
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
);
todosList.completedTasks();
todosList.projectTasks();
todosList.priorityOneTasks();
todosList.priorityTwoTasks();
todosList.priorityThreeTasks();
todosList.priorityFourTasks();
todosList.priorityFiveTasks();

/** Todolists is the main Object that holds all the tasks in the page. It's the object fetch from the localStorage and store back into the localStorage, while projectList is responsible for keeping the projects and the tasks save under each project in the page. It's the object fetch from and store in localStorage. **/
