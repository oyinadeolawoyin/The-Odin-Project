import { todoLists } from "./todoist.js";

function priorityTaskThree() {
  const list = [];
  list.splice(0);

  let priorityThree = todoLists.filter((x) => x.priority === "priority 3");
  for (let element of priorityThree) {
    list.push(element);
  }

  return list;
}

export { priorityTaskThree };
