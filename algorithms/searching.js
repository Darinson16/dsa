// BFS Tree

function BFS(root) {
  let currentNode = root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return list;
}

// BFS Recursive Tree

function BreadthFirstSearchR(queue, list) {
  if (!queue.length) {
    return list;
  }
  const currentNode = queue.shift();
  list.push(currentNode.value);

  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }

  return this.BreadthFirstSearchR(queue, list);
}

// DFS (In order, Pre Order, Post order) Tree

function DFSInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    DFSInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    DFSInOrder(node.right, list);
  }
  return list;
}

function DFSPreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  if (node.left) {
    DFSPreOrder(node.left, list);
  }

  if (node.right) {
    DFSPreOrder(node.right, list);
  }
  return list;
}

function DFSPostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    DFSPostOrder(node.left, list);
  }

  if (node.right) {
    DFSPostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

// Binary Search Array

function BinarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    console.log({ s, e, a: arr[mid], w: arr });

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) s = mid + 1;
    else e = mid - 1;
  }

  return -1;
}
