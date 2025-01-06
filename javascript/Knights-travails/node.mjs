function moves(row, col, path) {
  let list = [];
  list.push([row, col]);
  let upRight = [
    [row + 2, col + 1],
    [...path, ...[row + 2, col + 1]],
  ];
  let upLeft = [
    [row + 2, col - 1],
    [...path, ...[row + 2, col - 1]],
  ];
  let downRight = [
    [row - 2, col + 1],
    [...path, ...[row - 2, col + 1]],
  ];
  let downLeft = [
    [row - 2, col - 1],
    [...path, ...[row - 2, col - 1]],
  ];
  let leftUp = [
    [row + 1, col - 2],
    [...path, ...[row + 1, col - 2]],
  ];
  let leftDown = [
    [row - 1, col - 2],
    [...path, ...[row - 1, col - 2]],
  ];
  let rightUp = [
    [row + 1, col + 2],
    [...path, ...[row + 1, col + 2]],
  ];
  let rightDown = [
    [row - 1, col + 2],
    [...path, ...[row - 1, col + 2]],
  ];
  list.push(
    upRight,
    upLeft,
    leftUp,
    leftDown,
    downRight,
    downLeft,
    rightUp,
    rightDown,
  );
  return list;
}

function graph(array) {
  let graph = {};
  let key = array.shift();
  graph[key] = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i][0][0] >= 8 ||
      array[i][0][1] >= 8 ||
      array[i][0][0] < 0 ||
      array[i][0][1] < 0
    )
      continue;
    else graph[key].push(array[i]);
  }
  return graph;
}

function knightsMoves(start, target) {
  let visited = new Set();
  let move = graph(moves(start[0], start[1], start));
  let queue = move[Object.keys(move)];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (visited.has(currentNode[0])) continue;
    visited.add(currentNode[0]);

    if (currentNode[0][0] === target[0] && currentNode[0][1] === target[1]) {
      console.log(
        `you made it in ${currentNode[1].length / 2} moves! Here is your paths:`,
      );

      for (let path = 1; path < currentNode[1].length; path += 2) {
        console.log(`(${currentNode[1][path - 1]}, ${currentNode[1][path]})`);
      }
      return `Target: [${target}]`;
    } else {
      let move = graph(
        moves(currentNode[0][0], currentNode[0][1], currentNode[1]),
      );
      queue = queue.concat(move[Object.keys(move)]);
    }
  }
}

export { knightsMoves };