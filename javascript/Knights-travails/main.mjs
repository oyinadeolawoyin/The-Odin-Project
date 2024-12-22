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

function Insert(array) {
    let graphs = [];
}

function moves(start, target) {
    console.log(start);
    let move = knightsMoves(start[0], start[1]);
    let graphNodes = graph(move);
    
    let path = [graphNodes[0]];
    let queue = graphNodes[Object.keys(graphNodes)];
    let count = 0;

    
    while (queue.length > 0) {
        count +=1;
        if (count === 8) count = 0;
        console.log(count);
        let currentNode = queue.shift();

        
        if (currentNode[0] === start[0] && currentNode[1] === start[1]) continue;
        else if (currentNode[0] === target[0] && currentNode[1] === target[1]) {
            console.log(`you made it in ${count} moves! Here is your path:`)
            console.log('p:',path);
            return target;
        }
        else {
            let move = knightsMoves(currentNode[0], currentNode[1]);
            console.log('m:',move)
            let graphNodes = graph(move);
            console.log('grap',graphNodes);
            // Ensure path[count] is initialized as an array
            console.log('v',path[count]);
            if (!path[count]) path[count] = [];
            
            path[count][Object.keys(graphNodes)] = graphNodes[Object.keys(graphNodes)];

            console.log("g:", graphNodes);
            queue = queue.concat(graphNodes[Object.keys(graphNodes)]);
            console.log('q',queue);
        }
    }
}

console.log(moves([3, 3], [4, 3]));