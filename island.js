function getNeighbors(row, col, graph) {
  let result = [];
  if(!(row - 1 < 0) && (graph[row - 1][col] === 1))result.push([row - 1, col]);
  if(!(row + 1 >= graph.length) && (graph[row + 1][col] === 1)) result.push([row + 1, col]);
  if(!(col - 1 < 0) && (graph[row][col - 1] === 1))result.push([row, col - 1]);
  if(!(col + 1 >= graph[1].length) && (graph[row][col + 1] === 1))result.push([row, col + 1]);
  return result;
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set()
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${row},${col}`);
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let curr = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(...curr, graph);
    for (let ele of neighbors) {
      let eleStr = ele.join(",");
      if (!visited.has(eleStr)) {
        stack.push(ele);
        visited.add(eleStr);
      }
    }
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
