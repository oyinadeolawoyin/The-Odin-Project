const list = [];

function addDaysTask(day) {
  list.splice(0);

  let dayList = localStorageTasks.loadPage().filter((x) => x.dueDate === day);
  for (let element of dayList) {
    list.push(element);
  }

  return list;
}

const localStorageTasks = (function () {
  function loadPage() {
    let get = JSON.parse(localStorage.getItem("Todolists"));
    console.log(get);
    return get;
  }

  return { loadPage };
})();

export { addDaysTask };
