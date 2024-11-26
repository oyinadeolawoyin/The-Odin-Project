import { todoLists } from "./todoist.js";

function priorityTaskFour() {
  const list = [];
  list.splice(0);

  let priorityFour = todoLists.filter((x) => x.priority === "priority 4");
  for (let element of priorityFour) {
    list.push(element);
  }

  return list;
}

export { priorityTaskFour };
