const todoLists = [
  {
    title: "writing",
    describtion: "Writing a chapter for lost sisters",
    dueDate: "06-06-2005",
    priority: "priority 1",
    completed: true,
    project: "work",
  },
  {
    title: "read",
    describtion: "read lost sisters",
    dueDate: "06-06-2005",
    priority: "priority 3",
    completed: true,
    project: "work",
  },
  {
    title: "cleaning",
    describtion: "cleaning the house",
    dueDate: "06-06-2005",
    priority: "priority 2",
    completed: false,
    project: "work",
  },
  {
    title: "shopping",
    describtion: "shopping for toys",
    dueDate: "monday",
    priority: "priority 2",
    completed: false,
    project: "shopping",
  },
  {
    title: "teach",
    describtion: "teach four boys",
    dueDate: "07-09-2004",
    priority: "priority 4",
    completed: false,
    project: "teach",
  },
  {
    title: "lecture",
    describtion: "teach five boys",
    dueDate: "monday",
    priority: "priority 5",
    completed: true,
    project: "teach",
  },
  {
    title: "Spelling",
    describtion: "teach my kids how to spell",
    dueDate: "tuesday",
    priority: "priority 3",
    completed: true,
    project: "teach",
  },
  {
    title: "Spell",
    describtion: "teach my kids how",
    dueDate: "tuesday",
    priority: "priority 3",
    completed: true,
    project: "teach",
  },
];

const localStorageTasks = (function () {
  function saveTasks() {
    return localStorage.setItem("Todolists", JSON.stringify(todoLists));
  }

  function loadTasks() {
    return JSON.parse(localStorage.getItem("Todolists"));
  }

  return { saveTasks, loadTasks };
})();

function loadPage() {
  let storeItem = localStorageTasks.loadTasks();
  console.log(storeItem);

  if (storeItem !== null) {
    todoLists.splice(0);

    storeItem.forEach((element) => {
      todoLists.push(element);
    });
  }

  localStorageTasks.saveTasks();

  return todoLists;
}

// localStorage.clear("Todolists");
loadPage();

export { todoLists };
