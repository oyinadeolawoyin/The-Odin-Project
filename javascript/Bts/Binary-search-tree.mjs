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

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const root = tree(arr);
console.log(root);
prettyPrint(root);