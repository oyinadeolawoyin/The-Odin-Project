function node(value, nextNode = null) {
  return {
    value: value,
    next: nextNode,
  };
}


function linkedList(value) {
  let newList = creatNewList(value);

  function creatNewList(value, next) {
    return node(value, next);
  }

  function append(value, linkedlist = newList) {
    if (linkedlist === null) return node(value, null);

    newList = {
      value: linkedlist.value,
      next: append(value, linkedlist.next),
    };

    return newList;
  }

  function prepend(value) {
    newList = node(value, newList);

    return newList;
  }

  function size(next = newList) {
    let count = 0;

    if (next === null) return count;

    count += 1;
    return count + size(next.next);
  }

  function head() {
    return newList;
  }

  function tail(subList = newList) {
    if (subList.next === null) return subList;

    return tail(subList.next);
  }

  function at(index, subList = newList, count = 1) {
    if (count === index) return subList;

    count += 1;

    return at(index, subList.next, count);
  }

  function pop(linkedlist = newList) {
    if (linkedlist.next === null) return null;

    newList = {
      value: linkedlist.value,
      next: pop(linkedlist.next),
    };

    return newList;
  }

  function contain(value, linkedlist = newList) {
    if (linkedlist.value === value) return true;
    else if (linkedlist.next === null && linkedlist.value !== value)
      return false;

    return contain(value, linkedlist.next);
  }

  function find(value, linkedlist = newList, count = 1) {
    if (linkedlist.value === value) return count;
    else if (linkedlist.value !== value && linkedlist.next === null) return -1;

    count += 1;

    return find(value, linkedlist.next, count);
  }

  function insertAt(value, index, linkedlist = newList, count = 1) {
    if (count === index) return node(value, linkedlist);

    count += 1;

    newList = {
      value: linkedlist.value,
      next: insertAt(value, index, linkedlist.next, count),
    };

    return newList;
  }

  function removeAt(index, linkedlist = newList, count = 1) {
    if (index === count) return linkedlist.next;
    else if (linkedlist.next === null && index !== count) return;

    count += 1;

    newList = {
      value: linkedlist.value,
      next: removeAt(index, linkedlist.next, count),
    };

    return newList;
  }

  function toString() {
    return JSON.stringify(newList);
  }

  function getList() {
    return newList;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contain,
    find,
    insertAt,
    removeAt,
    toString,
    getList,
  };
}

export { linkedList };