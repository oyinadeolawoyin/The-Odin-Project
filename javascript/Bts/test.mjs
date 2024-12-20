import { tree } from "./bts.mjs";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const root = tree(arr);
const btu = root.btsRec()
root.insert(btu, 0);
root.deleteNode(btu, 0);
console.log(root.find(btu, 4));
// console.log(btu);
root.prettyPrint(btu);

console.log(root.levelOrder(btu,  root.levelOrdercallback));
function printNode(node) {
    console.log (node.data);
}
console.log('pre',root.preOrder(btu, printNode));
console.log('in',root.inOrder(btu, printNode));
console.log('post',root.postOrder(btu, printNode));
console.log(root.height(btu));
console.log(root.depth(btu));
console.log(root.isBalance(btu));