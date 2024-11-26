const projectList = {
  work: [
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
  ],
  shopping: [
    {
      title: "shopping",
      describtion: "shopping for toys",
      dueDate: "monday",
      priority: "priority 2",
      completed: false,
      project: "shopping",
    },
  ],
  teach: [
    {
      title: "teaching yoruba",
      describtion: "teching at home",
      dueDate: "06-06-2005",
      priority: "priority 2",
      completed: false,
      project: "teach",
    },
    {
      title: "teaching english",
      describtion: "student have to learn english",
      dueDate: "06-06-2005",
      priority: "priority 3",
      completed: true,
      project: "teach",
    },
  ],
};

const localStorageTasks = (function () {
  function saveTasks() {
    return localStorage.setItem("projectList", JSON.stringify(projectList));
  }

  function loadTasks() {
    return JSON.parse(localStorage.getItem("projectList"));
  }

  return { saveTasks, loadTasks };
})();

function loadPage() {
  let storeItem = localStorageTasks.loadTasks();
  if (storeItem !== null) {
    for (let key of Object.keys(projectList)) {
      delete projectList[key];
    }

    for (let [key, value] of Object.entries(storeItem)) {
      projectList[key] = value;
    }
  }

  localStorageTasks.saveTasks();

  return projectList;
}

loadPage();
// localStorage.clear("projectList");

export { projectList };
