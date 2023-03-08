class LinkedList {
  head = null;
  length = 0;

  append(value) {
    const node = new Node(value);

    // if there are no nodes
    if (this.head === null) {
      this.head = node;
    } else {
      // start from the head
      let currentNode = this.head;

      // if current.nextNode property exists
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    let previousFirst = this.head;
    // adds node to start
    this.head = node;

    node.nextNode = previousFirst;

    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    if (currentNode.nextNode === null) return currentNode;
  }

  at(index) {
    let currentNode = this.head;

    if (index > this.length) return 'Length exceeds list length';
    if (index <= 0) return 'Index cannot be less than 1';
    for (let i = 1; i <= this.length; i++) {
      if (i === index) return currentNode;
      // if (i !== index)
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    let previous = null;

    // if node is already empty
    if (this.head === null) {
      return console.log('No nodes to delete');
    }

    // if the previous node in the current node
    // and the .nextNode are null then there is only one node
    if (currentNode.nextNode === null && previous === null) {
      this.length--;
      // set current node to null
      return (this.head = null);
    }

    while (currentNode.nextNode) {
      // previous node will be current node after current node changes to the next node
      previous = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.length--;
    // remove the last item by setting null to the .nexNode to the second to last item
    return (previous.nextNode = null);
  }

  contains(value) {
    if (this.head === null) return console.log('No items in list.');

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return console.log(true);
      currentNode = currentNode.nextNode;
    }

    return console.log(false);
  }

  find(value) {
    if (this.head === null) return console.log('No items in list');

    let currentNode = this.head;
    let count = 1;
    while (currentNode) {
      if (currentNode.value === value) return console.log(count);

      count++;
      currentNode = currentNode.nextNode;
    }

    return console.log(false);
  }

  toString() {
    let currentNode = this.head;
    const arr = [];

    if (!this.head) return console.log('Nothing here');
    if (!this.length) return console.log('There are no nodes');
    while (currentNode) {
      arr.push(`( ${currentNode.value} )`);
      if (currentNode.nextNode === null) arr.push('null');
      currentNode = currentNode.nextNode;
    }

    console.log(arr.join(' -> '));
  }

  insertAt(value, index) {
    const node = new Node(value);
    let currentNode = this.head;
    let previous;

    let count = 1;

    if (index > this.length) return console.log('Index exceeds list length');
    if (index < 0) return console.log('Index must be greater than 1');
    // get count to the index
    while (count !== index) {
      count++;
      previous = currentNode;
      currentNode = currentNode.nextNode;
    }

    //  if count is 1
    if (count === 1) {
      let prevFirst = this.head;
      this.head = node;
      node.nextNode = prevFirst;
      this.length++;
      return;
    }

    // after count is on index
    previous.nextNode = node;
    node.nextNode = currentNode;
    this.length++;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previous;
    let count = 1;

    if (!this.head) return console.log('Nothing to remove');

    if (index == 1) {
      return (this.head = currentNode.nextNode);
    }

    while (count !== index) {
      count++;
      previous = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.length--;
    return (previous.nextNode = currentNode.nextNode);
  }
}

class Node {
  nextNode = null;
  constructor(value = null) {
    this.value = value;
  }
}

const linkedList = new LinkedList();

linkedList.append('Stacey');
linkedList.prepend('John');
linkedList.append('Adam');
linkedList.append('Mac');
linkedList.append('Cheese');
linkedList.append('Jade');
linkedList.append('Tim');
linkedList.append('Eric');
linkedList.append('Paul');
linkedList.append('Jess');
linkedList.append('Erica');
linkedList.prepend('Joy');

linkedList.pop();
linkedList.pop();

console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList.tail());
linkedList.contains('Eric');
linkedList.find('Joy');
linkedList.insertAt('Cloe', 4);
linkedList.removeAt(1);

linkedList.toString();
