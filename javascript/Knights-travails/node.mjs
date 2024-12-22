function knightsMoves(row, col) {
        let list = []; list.push([row, col]);
        let upRight = [row + 2, col + 1];
        let upLeft = [row + 2, col - 1];
        let downRight = [row - 2, col + 1];
        let downLeft = [row - 2, col - 1]; 
        let leftUp = [row + 1, col - 2];
        let leftDown = [row - 1, col - 2];
        let rightUp = [row + 1, col + 2];
        let rightDown = [row - 1, col + 2];

        list.push(upRight, upLeft, leftUp, leftDown, downRight, downLeft, rightUp, rightDown);
        return list;
}

function graph(array) {
    let graph = {};
    let key = array.shift();
    graph[key] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] >= 8 || array[i][1] >= 8 || array[i][0] < 0 || array[i][1] < 0) continue;
        else graph[key].push(array[i]);
    }

    return graph;
}
let k = knightsMoves(0, 6);
// console.log(k);
console.log(graph(k));