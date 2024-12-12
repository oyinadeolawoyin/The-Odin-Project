function hashmap() {
  let capacity = 0;
  let load_factor = 0;

  let table = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

  function checkLoad_factor() {
    load_factor = capacity / table.length;
    if (load_factor >= 0.75) {
      const oldTable = table;
      table = new Array(table.length * 2).fill().map(() => []);

      for (let bucket of oldTable) {
        if (
          typeof bucket[0] === "object" &&
          !Array.isArray(bucket[0]) &&
          bucket[0] !== null
        ) {
          let current = bucket[0];

          while (current) {
            let key = Object.keys(current)[0];
            let value = current[key];
            let hashkey = hash(key);
            table[hashkey].push([key, value]);
            current = current.next;
          }
        } else {
          if (bucket[0] !== undefined) {
            let key = bucket[0][0];
            let value = bucket[0][1];
            let hashkey = hash(key);
            table[hashkey].push([key, value]);
          }
        }
      }
    }
    return table;
  }

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % table.length);
    }
    return hashCode % table.length;
  }

  function set(key, value) {
    capacity += 1;
    checkLoad_factor();

    let hashcode = hash(key);

    if (table[hashcode].length === 1) {
      for (let element of table[hashcode]) {
        if (element[0] === key) {
          table[hashcode].splice(0, 1);
        } else {
          if (
            typeof element === "object" &&
            !Array.isArray(element) &&
            element !== null
          ) {
            let current = element;

            while (true) {
              // Check if the current node has the key
              if (current[key] !== undefined) {
                current[key] = value; // Update value if key exists
                return table;
              }

              // If at the end of the list, add a new node
              if (current.next === null) {
                current.next = {
                  [key]: value,
                  next: null,
                };
                return table;
              }

              // Move to the next node
              current = current.next;
            }

          } else {
            let node = {
              [element[0]]: element[1],
              next: {
                [key]: value,
                next: null,
              },
            };

            table[hashcode].pop();
            table[hashcode].push(node);
            console.log("elem:", table[hashcode]);
          }

          return table;
        }
      }
    }

    table[hashcode].push([key, value]);
    return table;
  }

  function get(key) {
    let keyHashcode = hash(key);

    if (
      typeof table[keyHashcode][0] === "object" &&
      !Array.isArray(table[keyHashcode][0]) &&
      table[keyHashcode][0] !== null
    ) {
      let list = table[keyHashcode][0];

      while (!list[key]) {
        list = list.next;
      }
      return list[key];
    }

    return table[keyHashcode][0][1];
  }

  function has(key) {
    let hasHashcode = hash(key);

    if (
      typeof table[hasHashcode][0] === "object" &&
      !Array.isArray(table[hasHashcode][0]) &&
      table[hasHashcode][0] !== null
    ) {
      let list = table[hasHashcode][0];

      while (!list[key]) {
        list = list.next;
      }

      return key ? true : false;
    }

    return table[hasHashcode][0] !== undefined &&
      table[hasHashcode][0][0] === key
      ? true
      : false;
  }

  function remove(key) {
    let removeHashcode = hash(key);

    if (
      typeof table[removeHashcode][0] === "object" &&
      !Array.isArray(table[removeHashcode][0]) &&
      table[removeHashcode][0] !== null
    ) {
      let list = table[removeHashcode][0];

      while (!list[key]) {
        list = list.next;
      }

      delete table[removeHashcode][0][key];
      table[removeHashcode][0].next = null;

      if (
        Object.keys(table[removeHashcode][0]).length === 0 ||
        Object.keys(table[removeHashcode][0])[0] === "next"
      )
        table[removeHashcode].pop();

      return true;
    }

    let remove = table[removeHashcode].pop();
    return remove ? true : false;
  }

  function length() {
    let count = 0;

    for (let bucket of table) {
      if (typeof bucket[0] === "object" && !Array.isArray(bucket[0])) {
        let list = bucket[0];

        while (list.next !== null) {
          count += 1;
          list = list.next;
        }

        count += 1;
      } else if (bucket[0] === undefined) {
        continue;
      } else {
        count += 1;
      }
    }

    return count;
  }

  function clear() {
    for (let bucket of table) {
      if (bucket[0] !== undefined) {
        bucket.pop();
      }
    }

    return table;
  }

  function keys() {
    let keys = [];

    for (let bucket of table) {
      if (typeof bucket[0] === "object" && !Array.isArray(bucket[0])) {
        let list = bucket[0];

        while (list.next !== null) {
          keys.push(Object.keys(list)[0]);
          list = list.next;
        }

        keys.push(Object.keys(list)[0]);
      } else {
        if (bucket[0] !== undefined) keys.push(bucket[0][0]);
      }
    }

    return keys;
  }

  function values() {
    let values = [];

    for (let bucket of table) {
      if (typeof bucket[0] === "object" && !Array.isArray(bucket[0])) {
        let list = bucket[0];

        while (list.next !== null) {
          values.push(Object.values(list)[0]);
          list = list.next;
        }

        values.push(Object.values(list)[0]);
      } else {
        if (bucket[0] !== undefined) values.push(bucket[0][1]);
      }
    }

    return values;
  }

  function entries() {
    let entries = [];

    for (let bucket of table) {
      if (typeof bucket[0] === "object" && !Array.isArray(bucket[0])) {
        let list = bucket[0];

        while (list.next !== null) {
          entries.push(Object.entries(list)[0]);
          list = list.next;
        }

        entries.push(Object.entries(list)[0]);
      } else {
        if (bucket[0] !== undefined) entries.push([bucket[0][0], bucket[0][1]]);
      }
    }

    return entries;
  }

  function getTable() {
    console.log(load_factor);
    return table;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    getTable,
  };
}

export { hashmap };
