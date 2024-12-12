# LinkedList Implementation 🚀

A JavaScript-based implementation of a LinkedList data structure, created as part of [The Odin Project](https://www.theodinproject.com/) curriculum. This project demonstrates the creation, traversal, and manipulation of a linked list, showcasing fundamental data structure concepts.

---

## Features ✨

- Create a new linked list using a **factory function**.
- Append and prepend nodes to the list.
- Get the size of the list.
- Access the head and tail of the list.
- Retrieve and manipulate nodes at specific positions.
- Check if a node exists or find a specific value.

---

## How It Works 🛠️

This linked list implementation includes:
1. **Node Factory**: Each node has a `value` and a reference to the `next` node.
2. **LinkedList Factory**:
   - Provides utility methods to manipulate the list.

---

## Installation & Usage 📦

1. Clone this repository:
   ```bash
   git clone https://github.com/oyinadeolawoyin/The-Odin-Project/tree/main/javascript/LinkedList
   cd linkedlist-odin
   ```
2. Open the project in your favorite code editor (e.g., VS Code).
3. Run the code in your browser console or Node.js environment.

### Example Usage:
```javascript
const linkedList = LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);

console.log(linkedList.toString()); // Outputs: "0 -> 1 -> 2"
console.log(linkedList.size()); // Outputs: 3
console.log(linkedList.head()); // Outputs: 0
console.log(linkedList.tail()); // Outputs: 2
console.log(linkedList.find(2)); // Outputs: 2
linkedList.removeAt(1);
console.log(linkedList.toString()); // Outputs: "0 -> 2"
```

---

## Methods 🧰

### `append(value)`
- Adds a node with the specified value to the end of the list.

### `prepend(value)`
- Adds a node with the specified value to the beginning of the list.

### `size()`
- Returns the number of nodes in the linked list.

### `head()`
- Returns the value of the first node in the list.

### `tail()`
- Returns the value of the last node in the list.

### `at(index)`
- Returns the node at the specified index (0-based). Returns `null` if the index is out of range.

### `pop()`
- Removes the last node from the list and returns its value.

### `contain(value)`
- Checks if the list contains a node with the specified value. Returns `true` if found, `false` otherwise.

### `find(value)`
- Searches the list for a node with the specified value. Returns the node's position if found or `-1` if not found.

### `insertAt(value, index)`
- Inserts a new node with the specified value at the given index. If the index is out of range, the node will not be inserted.

### `removeAt(index)`
- Removes the node at the specified index. Returns the value of the removed node, or `null` if the index is out of range.

### `toString()`
- Returns a string representation of the linked list (e.g., `"1 -> 2 -> 3"`).

### `getList()`
- Returns the full list of nodes in an array format.

---

## Key Learning Points 📘

- Understanding the **Linked List** data structure and its use cases.
- Implementing key methods like `append`, `prepend`, `size`, `find`, and `insertAt`.
- Efficiently handling edge cases, such as accessing nodes by index or removing nodes.
- Gaining hands-on experience with JavaScript objects and references.

---

## Acknowledgments 🙌

This project is part of the [The Odin Project](https://www.theodinproject.com/) curriculum. Special thanks to the community and resources for making this journey exciting and educational.