import { projectList } from "./projectList.js";

function addProject(projectName) {
  projectList[projectName] = [];

  let item = localStorageTasks.getTask();
  item[projectName] = [];
  localStorageTasks.saveTasks(item);

  return projectList;
}

function addTaskToProject(tasksList, projectName) {
  projectList[projectName].splice(0);

  for (let tasks of tasksList) {
    if (tasks.project === projectName) {
      projectList[projectName].push(tasks);
    }
  }

  let item = localStorageTasks.getTask();

  for (let [key, value] of Object.entries(projectList)) item[key] = value;
  localStorageTasks.saveTasks(item);

  return projectList;
}

const localStorageTasks = (function () {
  function saveTasks(list) {
    return localStorage.setItem("projectList", JSON.stringify(list));
  }

  function getTask() {
    return JSON.parse(localStorage.getItem("projectList"));
  }

  return { saveTasks, getTask };
})();

export { addProject, addTaskToProject };
