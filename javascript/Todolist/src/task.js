import { todoLists } from "./todoist.js";

function addTask(title, describtion, dueDate, priority, completed, project) {
  let task = {
    title: title,
    describtion: describtion,
    dueDate: dueDate,
    priority: priority,
    completed: completed,
    project: project,
  };

  let item = localStorageTasks.getTask();
  item.push(task);
  todoLists.push(task);

  localStorageTasks.saveTasks(item);

  return todoLists;
}

const localStorageTasks = (function () {
  function saveTasks(list) {
    return localStorage.setItem("Todolists", JSON.stringify(list));
  }

  function getTask() {
    return JSON.parse(localStorage.getItem("Todolists"));
  }

  return { saveTasks, getTask };
})();

export { addTask };
