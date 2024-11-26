import { todoLists } from "./todoist.js";

function priorityTaskFive() {
  const list = [];
  list.splice(0);

  let priorityFive = todoLists.filter((x) => x.priority === "priority 5");
  for (let element of priorityFive) {
    list.push(element);
  }

  return list;
}

export { priorityTaskFive };
