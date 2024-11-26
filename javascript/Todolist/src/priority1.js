import { todoLists } from "./todoist.js";

function priorityTaskOne() {
  const list = [];

  list.splice(0);

  let priorityOne = todoLists.filter((x) => x.priority === "priority 1");
  for (let element of priorityOne) {
    list.push(element);
  }

  return list;
}

export { priorityTaskOne };
