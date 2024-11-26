import { todoLists } from "./todoist.js";

function completedTask() {
  const list = [];
  list.splice(0);

  let completeTask = todoLists.filter((x) => x.completed === true);
  for (let element of completeTask) {
    list.push(element);
  }

  return list;
}

export { completedTask };
