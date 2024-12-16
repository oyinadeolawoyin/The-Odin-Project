import { mergeSort } from "./mergeSort.mjs";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function tree(array) {
    const mySet = new Set(mergeSort(array));
    const myArray = Array.from(mySet);

    function btsRec() {
        return buildTree(myArray, 0, (myArray.length - 1));
    }

    function buildTree(array, start, end) {
        if (start > end) return null;
    
        let middleElement = Math.floor((start + end) / 2);
    
        let root = new Node(array[middleElement]);
    
        root.left = buildTree(array, start, (middleElement-1));
    
        root.right = buildTree(array, (middleElement + 1), end);
    
        return root;
    }

    function insert(root, key) {
       
        if (root === null) return new Node(key);
    
        if (root.data === key) return root;
        if (key < root.data) root.left = insert(root.left, key);
        else if (key > root.data) root.right = insert(root.right, key);
    
        return root;
    }

    // Note that it is not a generic inorder successor
    // function. It mainly works when the right child 
    // is not empty, which is  the case we need in BST
    // delete.
    function getSuccessor(curr) {
        curr = curr.right; // Go to the right subtree
        while (curr !== null && curr.left !== null) {
            curr = curr.left;  // Find the leftmost node in the right subtree
        }

        return curr; // Return the in-order successor(smallest value in right subtree)
    }

    function deleteNode(root, key) { 
        if (root === null) return root; // Base case: if the tree is empty or key not found, return null
    
        // The key to delete is in the left subtree
        if (key < root.data) root.left = deleteNode(root.left, key);
        // The key to delete is in the right subtree
        else if (key > root.data) root.right = deleteNode(root.right, key);
        else {
            // Found the node to delete (root.data === key)

            // Case 1: Node has no left child
            if (root.left === null) return root.right;

            // Case 2: Node has no right child
            if (root.right === null) return root.left;

            // Case 3: Node has two children
            // Find the in-order successor (smallest value in the right subtree)
            let succ = getSuccessor(root);
            // Replace the current node's value with the successor's value
            root.data = succ.data;
            // Delete the successor node from the right subtree
            root.right = deleteNode(root.right, succ.data);
        }
    
        return root; // Return the modified tree
    }

    function prettyPrint(node, prefix = "", isLeft = true) {
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
    }

    return { btsRec, insert, prettyPrint, deleteNode}
}


const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const root = tree(arr);
const btu = root.btsRec()
root.insert(btu, 0);
// root.deleteNode(btu, 8);
root.prettyPrint(btu);