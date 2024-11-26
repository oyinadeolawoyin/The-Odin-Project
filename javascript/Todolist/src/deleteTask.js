import { todoLists } from "./todoist.js";
import { projectList } from "./projectList.js";

function deleteTask(title, describtion, dueDate) {
  let item = localStorageTasks.getTasks();

  for (let i = 0; i < item.length; i++) {
    if (
      title === item[i].title &&
      describtion === item[i].describtion &&
      dueDate === item[i].dueDate
    ) {
      item.splice(i, 1);
      i -= 1;

      localStorageTasks.saveTasks(item);
    }
  }

  todoLists.splice(0);
  item.forEach((element) => {
    todoLists.push(element);
  });

  let getProjects = JSON.parse(localStorage.getItem("projectList"));

  let list = [];
  for (let key of Object.keys(projectList)) {
    list.push(key);
  }

  for (let task of list) {
    for (let i of projectList[task]) {
      if (
        i.title === title &&
        i.describtion === describtion &&
        i.dueDate === dueDate
      ) {
        delete projectList[task].splice(task.indexOf(i), 1);
        delete getProjects[task].splice(task.indexOf(i), 1);
      }
    }
  }

  localStorage.setItem("projectList", JSON.stringify(getProjects));

  return todoLists;
}

function deleteProject(projectName) {
  let storeItem = localStorageTasks.getTasks();

  for (let i = 0; i < storeItem.length; i++) {
    if (storeItem[i].project === projectName) {
      storeItem.splice(i, 1);
      i -= 1;
    }
  }

  todoLists.splice(0);
  storeItem.forEach((element) => {
    todoLists.push(element);
  });

  localStorageTasks.saveTasks(storeItem);
  delete projectList[projectName];

  let getProject = JSON.parse(localStorage.getItem("projectList"));

  for (let key of Object.keys(getProject)) delete getProject[key];

  for (let [key, value] of Object.entries(projectList)) getProject[key] = value;

  localStorage.setItem("projectList", JSON.stringify(getProject));

  return projectList;
}

const localStorageTasks = (function () {
  function saveTasks(lists) {
    return localStorage.setItem("Todolists", JSON.stringify(lists));
  }

  function getTasks() {
    return JSON.parse(localStorage.getItem("Todolists"));
  }

  return { saveTasks, getTasks };
})();

export { deleteTask, deleteProject };
