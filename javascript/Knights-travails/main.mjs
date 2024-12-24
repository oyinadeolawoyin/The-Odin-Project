import { knightsMoves } from "./node.mjs";

console.log(knightsMoves([0,0],[3,3])); //knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

console.log(knightsMoves([3,3],[0,0])); //knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

console.log(knightsMoves([0,0],[7,7])); //knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]

console.log(knightsMoves([3,3],[4,3])); //knightMoves([3,3],[4,3]) = [3,3][4,5][2,4][4,3] or knightMoves([3,3],[4,3]) = [3,3][5,4][6,2][4,3]

console.log(knightsMoves([0,0],[1,1])); //knightMoves([0,0],[1,1]) = [0,0][2,1][4,2][3,0][1, 1] 