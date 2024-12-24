import { tree } from "./bts.mjs";

const arr = [2, 5, 3, 7, 0, 12, 1, 4, 6, 8, 9, 10];

const root = tree(arr);
const btu = root.btsRec();
root.insert(btu, 0);
root.deleteNode(btu, 0);
console.log(root.find(btu, 4));
console.log(btu);
root.prettyPrint(btu);

console.log(root.levelOrder(btu, root.levelOrdercallback));
function printNode(node) {
  console.log(node.data);
}
console.log("pre", root.preOrder(btu, printNode));
console.log("in", root.inOrder(btu, printNode));
console.log("post", root.postOrder(btu, printNode));
console.log(root.height(btu));
console.log(root.depth(btu));
console.log(root.isBalance(btu));
