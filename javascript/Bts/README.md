# Binary Search Tree (BST) - README

## Overview

This project implements a **Binary Search Tree (BST)** with various methods for interacting with and manipulating the tree. It includes functionality for building a tree from an array, inserting and deleting nodes, performing tree traversal, and checking tree properties like balance and height. 

The following operations and methods are included:

1. **Node Class**: Represents a single node in the binary tree.
2. **Tree Class**: Manages the root of the binary tree and provides methods for tree operations.
3. **Tree Operations**: Includes insertion, deletion, search, traversal, and other methods to manipulate and query the tree structure.

---

## Classes and Functions

### 1. **Node Class**

The `Node` class represents a single node in the binary tree. Each node contains:

- `data`: The value stored in the node.
- `left`: A reference to the left child node.
- `right`: A reference to the right child node.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
```

### 2. **Tree Class**

The `Tree` class manages the binary search tree. It is initialized with an array of data values and constructs a balanced tree. The root node of the tree is created using the `buildTree` function.

#### Key Methods:
- **`insert(value)`**: Inserts a new node with the given value into the tree.
- **`deleteItem(value)`**: Deletes a node with the given value from the tree.
- **`find(value)`**: Searches for a node with the specified value.
- **`levelOrder(callback)`**: Traverses the tree in level-order (breadth-first) and applies the callback to each node.
- **`inOrder(callback)`**, **`preOrder(callback)`**, **`postOrder(callback)`**: Perform depth-first traversals on the tree in respective orders, applying the callback function to each node.
- **`height(node)`**: Returns the height of a node, defined as the number of edges in the longest path from the node to a leaf node.
- **`depth(node)`**: Returns the depth of a node, defined as the number of edges from the node to the tree’s root.
- **`isBalanced()`**: Checks if the tree is balanced by comparing the height difference between the left and right subtrees.
- **`rebalance()`**: Rebalances the tree if it is unbalanced by rebuilding it from a sorted array.

### 3. **buildTree Function**

The `buildTree(array)` function is responsible for constructing a balanced binary search tree (BST) from an array of values. It:

- Sorts the array.
- Removes duplicates.
- Creates a balanced BST by recursively placing the middle element of the array as the root and building subtrees with the left and right halves of the array.

```

### 4. **prettyPrint Function**

The `prettyPrint` function is used to visualize the structure of the tree. It prints the tree in a structured format, showing the hierarchy of nodes from the root down to the leaves.

```javascript
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
```

### 5. **Tree Traversals**

#### **`levelOrder(callback)`**
Traverses the tree in level-order (breadth-first) and applies the callback function to each node.

#### **`inOrder(callback)`**
Traverses the tree in an in-order (left-root-right) depth-first order, applying the callback function to each node.

#### **`preOrder(callback)`**
Traverses the tree in a pre-order (root-left-right) depth-first order, applying the callback function to each node.

#### **`postOrder(callback)`**
Traverses the tree in a post-order (left-right-root) depth-first order, applying the callback function to each node.

### 6. **Tree Properties**

#### **`height(node)`**
Returns the height of the node, defined as the number of edges from the node to the deepest leaf node.

#### **`depth(node)`**
Returns the depth of the node, defined as the number of edges from the node to the root of the tree.

#### **`isBalanced()`**
Checks if the tree is balanced. A tree is considered balanced if the difference between the heights of the left and right subtrees of each node is no more than 1.

#### **`rebalance()`**
Rebalances the tree by rebuilding it from a sorted array of node values. This ensures the tree is balanced.

---

## Example Usage

```javascript
// Initialize Tree with an array
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// Print the tree structure
prettyPrint(tree.root);

// Insert a new node
tree.insert(10);

// Find a node
const foundNode = tree.find(7);

// Delete a node
tree.deleteItem(5);

// Check if the tree is balanced
const balanced = tree.isBalanced();

// Rebalance the tree
tree.rebalance();
```

---

## Conclusion

This Binary Search Tree implementation provides a variety of methods for efficiently managing and interacting with the tree, such as inserting, deleting, searching for nodes, and performing various tree traversals. Additionally, it includes functionality for calculating properties like node depth and height, checking if the tree is balanced, and rebalancing the tree when necessary.
