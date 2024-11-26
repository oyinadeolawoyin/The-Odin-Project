import { todoLists } from "./todoist.js";

function priorityTaskTwo() {
  const list = [];
  list.splice(0);

  let priorityTwo = todoLists.filter((x) => x.priority === "priority 2");
  for (let element of priorityTwo) {
    list.push(element);
  }

  return list;
}

export { priorityTaskTwo };
