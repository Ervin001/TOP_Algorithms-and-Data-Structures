class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  buildTree(arr, start, end) {
    const uniqueArr = [...new Set(arr)];
    const mergedArr = this.mergeSort(uniqueArr);

    // base case
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(mergedArr[mid]);

    // left child of root
    node.left = this.buildTree(mergedArr, start, mid - 1);
    node.right = this.buildTree(mergedArr, mid + 1, end);
    return node;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  //merge-sort algorithm
  mergeSort(array) {
    if (array.length < 2) return array;

    let firstHalf = array.slice(0, array.length / 2);
    let secondHalf = array.slice(array.length / 2);

    return this.merge(this.mergeSort(firstHalf), this.mergeSort(secondHalf));
  }

  merge(left, right) {
    let i = 0;
    let j = 0;
    const arr = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr.push(left[i]);
        i++;
      } else {
        arr.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      arr.push(left[i]);
      i++;
    }

    while (j < right.length) {
      arr.push(right[j]);
      j++;
    }

    return arr;
  }

  find(key, root = this.root) {
    if (root === null) return `${key} is not in the tree`;
    if (root.data === key) return root;

    if (root.data < key) {
      return this.find(key, root.right);
    }

    if (root.data > key) {
      return this.find(key, root.left);
    }
    return root;
  }

  insert(value) {
    this.insertRec(this.root, value);
  }

  // recursive function that this.insert() will use
  insertRec(root, value) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value < root.data) {
      root.left = this.insertRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.insertRec(root.right, value);
    }

    return root;
  }

  delete(value) {
    return this.deleteNode(this.root, value);
  }

  deleteNode(root = this.root, value) {
    // base case
    if (root === null) return null;

    if (value === root.data) {
      if (root.left === null && root.right === null) {
        return null;
      }
      if (root.left === null) {
        return root.right;
      }

      if (root.right === null) {
        return root.left;
      }

      const tempRoot = root.right;
      while (tempRoot.left !== null) {
        tempRoot = tempRoot.left;
      }
      root.data = tempNode(root.right, value);
      root.right = this.deleteNode(root.right, tempRoot.data);
      return root;
    } else if (value < root.data) {
      root.left = this.deleteNode(root.left, value);
      return root;
    } else {
      node.right = this.deleteNode(root.right, value);
      return root;
    }
  }

  levelOrder(func) {
    const queue = [this.root];
    const array = [];

    while (queue.length > 0) {
      const node = queue.shift();
      array.push(node.data);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    return array;
  }

  // left root right
  inorder(func) {
    const arr = [];

    this.inorderFunc(this.root, arr);
    return arr;
  }

  inorderFunc(root, arr) {
    if (root === null) return;

    this.inorderFunc(root.left, arr);
    arr.push(root.data);
    this.inorderFunc(root.right, arr);
  }

  // root left right
  preorder(func) {
    const arr = [];
    this.preorderFunc(this.root, arr);
    return arr;
  }

  preorderFunc(root, arr) {
    if (root === null) return;

    arr.push(root.data);
    this.preorderFunc(root.left, arr);
    this.preorderFunc(root.right, arr);
  }

  // left right root
  postorder(func) {
    const arr = [];

    this.postorderFunc(this.root, arr);
    return arr;
  }

  postorderFunc(root, arr) {
    if (root === null) return;

    this.postorderFunc(root.left, arr);
    this.postorderFunc(root.right, arr);
    arr.push(root.data);
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftH = this.height(node.left);
    const rightH = this.height(node.right);
    return Math.max(leftH, rightH) + 1;
  }

  depth(value, node = this.root) {
    if (node === null) return -1;

    let dist = 0;

    if (value.data === node.data) {
      return dist;
    } else if (value.data !== node.data) {
      dist++;
      let leftDist = this.depth(value, node.left);
      let rightDist = this.depth(value, node.right);
      if (leftDist !== -1) {
        return dist + leftDist;
      } else if (rightDist !== -1) {
        return dist + rightDist;
      } else {
        return -1;
      }
    }
  }

  isBalanced(root = this.root) {
    if (root === null) return true;

    const lh = this.height(root.left);
    const rh = this.height(root.right);

    if (
      Math.abs(lh - rh) <= 1 &&
      this.isBalanced(root.left === true) &&
      this.isBalanced(root.right === true)
    )
      return true;
    // if code reaches here then tree is not balanced
    return false;
  }
  rebalance() {}
}

// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11];

// const array = [
//   80, 70, 90, 120, 150, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37,
//   36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18,
//   17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
// ];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// const array = [1, 2, 3, 4, 5, 6, 7];
// const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const tree = new Tree(array);

// console.log(tree.root);

// tree.prettyPrint();
// console.log(tree.find(7));
// tree.insert(33);
// tree.insert(3353453);
// tree.insert(333423);
// tree.insert(333323);
// tree.insert(14213);
// tree.insert(201421);
// tree.insert(94720);
// tree.insert(9823132);
// tree.insert(8492);
// tree.insert(4413424322);
// tree.insert(342323424322);
// tree.insert(441342123);

// tree.delete(2);

// console.log(tree.levelOrder());
tree.prettyPrint();

// console.log(tree.inorder());
// console.log(tree.preorder());
// console.log(tree.postorder());
console.log(tree.height(tree.find(5)));
// console.log(tree.find(6));
console.log(tree.depth(tree.find(8)));
console.log(tree.isBalanced());
