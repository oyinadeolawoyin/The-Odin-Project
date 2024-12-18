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

    function find(root, value) {
        if (root.data === value) return root;

        if (value < root.data) return find(root.left, value);
        else if (value > root.data) return find(root.right, value);
    }

    function levelOrdercallback(node) {
        if (node === undefined || node === null) return [];

       let left = null, right = null;
       if (node.left) left = node.left.data;
       if (node.right) right = node.right.data;
       
       return [left, right];
    }

    //mySolution:
    function levelOrder(root, callback) {
    
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        let queue = [];
        let result = [];

        queue.push(root.data);
        
        while (queue.length > 0) {
         
            let currentNode = queue.shift();
            result.push(currentNode);
            if (currentNode !== null) queue.push(...callback(find(root, currentNode)));
               
        } 
        return result.filter((x) => x !== null);
    }
    
    //efficient code:
    // function levelOrder(root, callback) {
    //     if (typeof callback !== 'function') {
    //         throw new Error("A callback function is required");
    //     }

    //     let queue = [root]; // Start with the root node
    //     let result = [];

    //     while (queue.length > 0) {
    //         let currentNode = queue.shift(); // Dequeue the first node

    //         callback(currentNode); // Apply the callback
    //         result.push(currentNode.data); // Collect the value

    //         // Enqueue left and right children if they exist
    //         if (currentNode.left) queue.push(currentNode.left);
    //         if (currentNode.right) queue.push(currentNode.right);
    //     }

    //     return result; // Return the collected values
    // }


    function inOrder(root, callback) {

        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        if (root === null) return root;
        
        if (root.left) inOrder((root.left), callback);
        callback(root);
        if (root.right) inOrder((root.right), callback);

        return;
    }

    function preOrder(root, callback) {

        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        if (root === null) return root;
        
        callback(root);
        if (root.left) preOrder((root.left), callback);
       
        if (root.right) preOrder((root.right), callback);

        return;
    }
      
    function postOrder(root, callback) {

        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        if (root === null) return root;
        
        if (root.left) postOrder((root.left), callback);
        if (root.right) postOrder((root.right), callback);
        callback(root);

        return;
    }

    function height(node, count = 0) {

        if (node === null) return count;

        let leftCount = depth(node.left, count + 1);
        let rightCount = depth(node.right, count + 1);
            
        
        return Math.max(leftCount, rightCount);
    }

    function depth(node, count = 0) {
        
        if (!node) {
            return count; 
        }
        
        
    }

    //mysolution:
    function isBalance(node) {
        
        if (node.left === null && node.right === null) return true;
        if (node.left !== null && node.right === null) return false;
        else if (node.left === null && node.right !== null) return false;
        else {
            
            const leftBalanced = isBalance(node.left);
            const rightBalanced = isBalance(node.right);

            if (!leftBalanced || !rightBalanced) {
                return false;
            }

            return true;
        }  
    }
    
    //efficient code:
    // function isBalance(node) {
    //     // Helper function to check balance and calculate height
    //     function checkHeightAndBalance(node) {
    //         if (node === null) {
    //             return { height: 0, balanced: true };
    //         }
    
    //         // Check left subtree
    //         const left = checkHeightAndBalance(node.left);
    //         if (!left.balanced) return left; // If left subtree is unbalanced, no need to check further
    
    //         // Check right subtree
    //         const right = checkHeightAndBalance(node.right);
    //         if (!right.balanced) return right; // If right subtree is unbalanced, no need to check further
    
    //         // Check the height difference
    //         const heightDifference = Math.abs(left.height - right.height);
    //         if (heightDifference > 1) {
    //             return { height: 0, balanced: false }; // If height difference > 1, tree is unbalanced
    //         }
    
    //         // Return the height of the current node
    //         const height = Math.max(left.height, right.height) + 1;
    //         return { height, balanced: true };
    //     }
    
    //     const result = checkHeightAndBalance(node);
    //     return result.balanced;
    // }

    function reBalance(node) {
        let array = [];
        let sortnode = inOrder(node);
        array.push(sortnode);
        return buildTree(array);
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

    return { btsRec, insert, prettyPrint, deleteNode, find ,levelOrdercallback ,levelOrder, inOrder, preOrder, postOrder, height, depth, isBalance, reBalance }
}

export { tree }